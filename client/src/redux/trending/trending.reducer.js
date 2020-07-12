import TrendingActionTypes from './trending.type';

const INITIAL_STATE = [];

const userReducer = (state = INITIAL_STATE, action) => {
  let delList = [];
  switch (action.type) {
    case TrendingActionTypes.SUCCESS_FETCH_TRENDING:
      return [...state, ...action.payload];
    case TrendingActionTypes.REMOVE_TRENDING:
      delList = state;
      delList = delList.filter((item) => item.id !== action.payload);
      return delList;
    default:
      return state;
  }
};

export default userReducer;
