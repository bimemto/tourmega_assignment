import * as apiActions from '../actions/tourDetail.actions';
import axios from 'axios';

export const getTourDetail = (tourId) => {
  const url = `https://staging.tourmega.com/api/v2/tours/${tourId}`;
  return (dispatch) => {
    dispatch(apiActions.getTourDetailStarted());
    return axios
      .get(url)
      .then((res) => res.data)
      .then((response) => {
        if (response.success) {
          dispatch(apiActions.getTourDetailSuccess(response.data));
        } else {
          dispatch(
            apiActions.getTourDetailError(
              new Error('Some thing went wrong. Please try again'),
            ),
          );
        }
      })
      .catch((error) => {
        dispatch(apiActions.getTourDetailError(error));
      })
      .finally(() => {
        dispatch(apiActions.getTourDetailFinished());
      });
  };
};

export const getRelatedTours = () => {
  const url =
    'https://staging.tourmega.com/api/v2/tours?lat_top_left=42.1961029845&lon_top_left=12.4088909415&lat_bottom_right=41.609464015499995&lon_bottom_right=12.5838400585&country=italy&city=rome';
  return (dispatch) => {
    return axios
      .get(url)
      .then((res) => res.data)
      .then((response) => {
        if (response.success) {
          dispatch(apiActions.getRelatedTourSuccess(response.data));
        } else {
          dispatch(
            apiActions.getRelatedTourFailed(
              new Error('Some thing went wrong. Please try again'),
            ),
          );
        }
      })
      .catch((error) => {
        dispatch(apiActions.getRelatedTourFailed(error));
      });
  };
};
