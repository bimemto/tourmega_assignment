import React from 'react';
import MainScreen from '../src/MainScreen';
import Enzyme, {shallow, mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockTour from '../config/jest/mockTour';
import {Provider} from 'react-redux';

jest.mock('@react-navigation/native');
jest.mock('@react-navigation/stack');

Enzyme.configure({adapter: new EnzymeAdapter()});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  loading: false,
  error: null,
  tour: mockTour,
  relatedTours: null,
};
const store = mockStore(initialState);

describe('app render correctly', () => {
  const getWrapper = () =>
    mount(
      <Provider store={store}>
        <MainScreen />
      </Provider>,
    );
  it('loading', () => {
    const wrapper = getWrapper();
    expect(
      wrapper
        .findWhere((node) => node.prop('testID') === 'activityIndicator')
        .exists(),
    ).toBe(true);
  });

  it('call api success', () => {
    const wrapper = getWrapper();
    expect(
      wrapper
        .findWhere((node) => node.prop('testID') === 'activityIndicator')
        .exists(),
    ).toBe(false);
  });

  it('call api failed', () => {
    const wrapper = getWrapper();
    expect(wrapper.text().includes('Retry')).toBe(true);
  });
});

describe('test component rendering', () => {
  const getWrapper = () =>
    mount(
      <Provider store={store}>
        <MainScreen />
      </Provider>,
    );
  it('photo slider rendering', () => {
    const wrapper = getWrapper();
    expect(
      wrapper.findWhere((node) => node.prop('testID') === 'slider').exists(),
    ).toBe(true);
  });

  it('have tour name', () => {
    const wrapper = getWrapper();
    expect(
      wrapper.findWhere((node) => node.prop('testID') === 'tourName').exists(),
    ).toBe(true);
  });

  it('have location', () => {
    const wrapper = getWrapper();
    expect(
      wrapper.findWhere((node) => node.prop('testID') === 'location').exists(),
    ).toBe(true);
  });

  it('have rating', () => {
    const wrapper = getWrapper();
    expect(
      wrapper.findWhere((node) => node.prop('testID') === 'rating').exists(),
    ).toBe(true);
  });

  it('have reviews', () => {
    const wrapper = getWrapper();
    expect(
      wrapper.findWhere((node) => node.prop('testID') === 'review').exists(),
    ).toBe(true);
  });

  it('have cancellation policy', () => {
    const wrapper = getWrapper();
    expect(
      wrapper
        .findWhere((node) => node.prop('testID') === 'cancelPolicy')
        .exists(),
    ).toBe(true);
  });

  it('have covid-19 precautions', () => {
    const wrapper = getWrapper();
    expect(
      wrapper.findWhere((node) => node.prop('testID') === 'covid19').exists(),
    ).toBe(false);
  });

  it('have related tours', () => {
    const wrapper = getWrapper();
    expect(
      wrapper.findWhere((node) => node.prop('testID') === 'related').exists(),
    ).toBe(false);
  });
});
