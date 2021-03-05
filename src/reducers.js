import * as types from './actions/actionTypes';

const getInitialState = () => ({
  loading: true,
  error: null,
  tour: null,
  relatedTours: [],
});

export default function reducer(state = getInitialState(), action) {
  switch (action.type) {
    case types.REQUEST_TOUR_DETAIL_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.REQUEST_TOUR_DETAIL_FINISHED:
      return {
        ...state,
        loading: false,
      };
    case types.REQUEST_TOUR_DETAIL_SUCCESS:
      return {
        ...state,
        tour: action.payload.response,
      };
    case types.REQUEST_TOUR_DETAIL_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };
    case types.REQUEST_RELATED_TOUR_SUCCESS:
      return {
        ...state,
        relatedTours: action.payload.response,
      };
  }
}
