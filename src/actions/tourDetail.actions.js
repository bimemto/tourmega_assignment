import * as types from './actionTypes';

export const getTourDetailStarted = () => ({
  type: types.REQUEST_TOUR_DETAIL_STARTED,
});

export const getTourDetailFinished = () => ({
  type: types.REQUEST_TOUR_DETAIL_FINISHED,
});

export const getTourDetailSuccess = (response) => ({
  type: types.REQUEST_TOUR_DETAIL_SUCCESS,
  payload: {
    response,
  },
});

export const getTourDetailError = (error) => ({
  type: types.REQUEST_TOUR_DETAIL_FAILED,
  payload: {
    error,
  },
});

export const getRelatedTourSuccess = (response) => ({
  type: types.REQUEST_RELATED_TOUR_SUCCESS,
  payload: {
    response,
  },
});

export const getRelatedTourFailed = (error) => ({
  type: types.REQUEST_RELATED_TOUR_FAILED,
  payload: {
    error,
  },
});
