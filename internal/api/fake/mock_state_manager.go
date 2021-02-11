// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/vmware-tanzu/octant/internal/api (interfaces: StateManager)

// Package fake is a generated GoMock package.
package fake

import (
	context "context"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"

	api "github.com/vmware-tanzu/octant/internal/api"
	octant "github.com/vmware-tanzu/octant/internal/octant"
)

// MockStateManager is a mock of StateManager interface
type MockStateManager struct {
	ctrl     *gomock.Controller
	recorder *MockStateManagerMockRecorder
}

// MockStateManagerMockRecorder is the mock recorder for MockStateManager
type MockStateManagerMockRecorder struct {
	mock *MockStateManager
}

// NewMockStateManager creates a new mock instance
func NewMockStateManager(ctrl *gomock.Controller) *MockStateManager {
	mock := &MockStateManager{ctrl: ctrl}
	mock.recorder = &MockStateManagerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use
func (m *MockStateManager) EXPECT() *MockStateManagerMockRecorder {
	return m.recorder
}

// Handlers mocks base method
func (m *MockStateManager) Handlers() []octant.ClientRequestHandler {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Handlers")
	ret0, _ := ret[0].([]octant.ClientRequestHandler)
	return ret0
}

// Handlers indicates an expected call of Handlers
func (mr *MockStateManagerMockRecorder) Handlers() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Handlers", reflect.TypeOf((*MockStateManager)(nil).Handlers))
}

// Start mocks base method
func (m *MockStateManager) Start(arg0 context.Context, arg1 octant.State, arg2 api.OctantClient) {
	m.ctrl.T.Helper()
	m.ctrl.Call(m, "Start", arg0, arg1, arg2)
}

// Start indicates an expected call of Start
func (mr *MockStateManagerMockRecorder) Start(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Start", reflect.TypeOf((*MockStateManager)(nil).Start), arg0, arg1, arg2)
}