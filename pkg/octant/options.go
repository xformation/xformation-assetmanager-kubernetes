/*
 *  Copyright (c) 2020 the Octant contributors. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 *
 */

package octant

import (
	"context"
	"fmt"
	"net/http"

	"github.com/vmware-tanzu/octant/web"
)

// options is an internal set of options that can be used to configure Octant. These are
// consolidated options so there is not a need to have a separate set of options
// for multiple types. options is not exported as these options should be accessible from
// outside of this package.
type options struct {
	// frontendHandler is a function that creates a frontend handler.
	frontendHandler func(ctx context.Context) (http.Handler, error)
	// backendHandler is a function that creates a backend handler.
	backendHandler func(ctx context.Context) (http.Handler, error)
}

// buildOptions builds an options struct from a list of functional options.
func buildOptions(list ...Option) options {
	opts := options{
		frontendHandler: defaultFrontendHandler,
		backendHandler: func(ctx context.Context) (handler http.Handler, err error) {
			return nil, fmt.Errorf("backend handler is not configured")
		},
	}

	for _, o := range list {
		o(&opts)
	}

	return opts
}

// Option is a functional option for configuring Octant.
type Option func(o *options)

// FrontendURL configures Octant to use a proxy for rendering its frontend.
func FrontendURL(proxyURL string) Option {
	return func(o *options) {
		if proxyURL == "" {
			o.frontendHandler = defaultFrontendHandler
			return
		}

		o.frontendHandler = func(ctx context.Context) (handler http.Handler, err error) {
			pfh, err := NewProxiedFrontend(ctx, proxyURL)
			if err != nil {
				return nil, err
			}

			return pfh, nil
		}
	}
}

// BackendHandler sets the handler for Octant's backend.
func BackendHandler(fn func(ctx context.Context) (http.Handler, error)) Option {
	return func(o *options) {
		o.backendHandler = fn
	}
}

// defaultFrontendHandler is the default factory for creating a frontend handler.
// TODO: this namespace should not know about the web namespace.
func defaultFrontendHandler(ctx context.Context) (http.Handler, error) {
	return web.Handler()
}

func noCacheRootMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		path := r.URL.EscapedPath()
		if path == "/" {
			w.Header().Set("Cache-Control", "no-cache, no-store")
		}
		next.ServeHTTP(w, r)
	})
}
