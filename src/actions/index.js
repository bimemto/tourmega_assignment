import * as api from '../network/api';

export const getTourDetail = (tourId) => {
  return api.getTourDetail(tourId);
};

export const getRelatedTours = () => {
  return api.getRelatedTours();
};
