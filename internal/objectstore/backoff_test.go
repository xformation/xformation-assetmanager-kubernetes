package objectstore

import (
	"testing"
	"time"

	"github.com/stretchr/testify/assert"

	"github.com/vmware-tanzu/octant/pkg/store"
)

func Test_waiting(t *testing.T) {
	key := store.Key{APIVersion: "apiVersion"}
	entry := newBackoffEntry(key, defaultBackoff)

	assert.False(t, entry.isWaiting())
	entry.setWaiting(true)
	assert.True(t, entry.isWaiting())
}

func Test_wait(t *testing.T) {
	key := store.Key{APIVersion: "apiVersion"}
	entry := newBackoffEntry(key, defaultBackoff)
	d := entry.wait()

	assert.True(t, d > time.Second)
	d = entry.wait()
	assert.True(t, d > (time.Second*2))
	d = entry.wait()
	assert.True(t, d > (time.Second*4))
}
