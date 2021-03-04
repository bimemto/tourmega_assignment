import React from 'react';
import '@testing-library/jest-native/extend-expect';
import {fireEvent} from 'react-native-testing-library';
import {renderWithRedux} from './render';
import {login as mockLoginApi} from 'api';
import MainScreen from '../src/MainScreen';

function renderMainScreen() {
  return renderWithRedux(<MainScreen />);
}

const screen = renderMainScreen();
