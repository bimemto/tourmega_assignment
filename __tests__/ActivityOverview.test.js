import React from 'react';
import axios from 'axios';
import ActivityOverview from '../src/components/ActivityOverviewComponent';
import {render} from 'react-native-testing-library';
import mockTour from '../config/jest/mockTour';

describe('activity overview render correctly', () => {
  it('full overview data', () => {
    jest.mock('axios');
    axios.get = jest.fn().mockResolvedValue({
      mockTour,
    });
    const rendered = render(<ActivityOverview tour={mockTour} />);
    const component = rendered.getByTestId('overview');
    expect(component.children.length).toEqual(6);
  });
});
