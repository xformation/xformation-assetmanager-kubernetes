// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/vmware-tanzu/octant/internal/api (interfaces: ClientManager)

// Package fake is a generated GoMock package.
package fake

import (
	context "context"
	http "net/http"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"

	api "github.com/vmware-tanzu/octant/internal/api"
	config "github.com/vmware-tanzu/octant/internal/config"
	event "github.com/vmware-tanzu/octant/pkg/event"
)

// MockClientManager is a mock of ClientManager interface
type MockClientManager struct {
	ctrl     *gomock.Controller
	recorder *MockClientManagerMockRecorder
}

// MockClientManagerMockRecorder is the mock recorder for MockClientManager
type MockClientManagerMockRecorder struct {
	mock *MockClientManager
}

// NewMockClientManager creates a new mock instance
func NewMockClientManager(ctrl *gomock.Controller) *MockClientManager {
	mock := &MockClientManager{ctrl: ctrl}
	mock.recorder = &MockClientManagerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use
func (m *MockClientManager) EXPECT() *MockClientManagerMockRecorder {
	return m.recorder
}

// ClientFromRequest mocks base method
func (m *MockClientManager) ClientFromRequest(arg0 config.Dash, arg1 http.ResponseWriter, arg2 *http.Request) (*api.WebsocketClient, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ClientFromRequest", arg0, arg1, arg2)
	ret0, _ := ret[0].(*api.WebsocketClient)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ClientFromRequest indicates an expected call of ClientFromRequest
func (mr *MockClientManagerMockRecorder) ClientFromRequest(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ClientFromRequest", reflect.TypeOf((*MockClientManager)(nil).ClientFromRequest), arg0, arg1, arg2)
}

// Clients mocks base method
func (m *MockClientManager) Clients() []*api.WebsocketClient {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Clients")
	ret0, _ := ret[0].([]*api.WebsocketClient)
	return ret0
}

// Clients indicates an expected call of Clients
func (mr *MockClientManagerMockRecorder) Clients() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Clients", reflect.TypeOf((*MockClientManager)(nil).Clients))
}

// Get mocks base method
func (m *MockClientManager) Get(arg0 string) event.WSEventSender {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Get", arg0)
	ret0, _ := ret[0].(event.WSEventSender)
	return ret0
}

// Get indicates an expected call of Get
func (mr *MockClientManagerMockRecorder) Get(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Get", reflect.TypeOf((*MockClientManager)(nil).Get), arg0)
}

// Run mocks base method
func (m *MockClientManager) Run(arg0 context.Context) {
	m.ctrl.T.Helper()
	m.ctrl.Call(m, "Run", arg0)
}

// Run indicates an expected call of Run
func (mr *MockClientManagerMockRecorder) Run(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Run", reflect.TypeOf((*MockClientManager)(nil).Run), arg0)
}

// TemporaryClientFromLoadingRequest mocks base method
func (m *MockClientManager) TemporaryClientFromLoadingRequest(arg0 http.ResponseWriter, arg1 *http.Request) (*api.WebsocketClient, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "TemporaryClientFromLoadingRequest", arg0, arg1)
	ret0, _ := ret[0].(*api.WebsocketClient)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// TemporaryClientFromLoadingRequest indicates an expected call of TemporaryClientFromLoadingRequest
func (mr *MockClientManagerMockRecorder) TemporaryClientFromLoadingRequest(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "TemporaryClientFromLoadingRequest", reflect.TypeOf((*MockClientManager)(nil).TemporaryClientFromLoadingRequest), arg0, arg1)
}