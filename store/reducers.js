import { fromJS } from 'immutable';
// import { NavigationActions } from "react-navigation";
// import { combineReducers } from "redux";
// import { AppNavigator } from "../App";
import * as constants from "./constants";

const initialState = fromJS({
    data: '1',
});

// 1 - önce bunu yazmadık sayalım constant a geçelim.

export default function store(state = initialState, action) {
    switch (action.type) {
      case constants.SET_DATA:
        return state.set('data', fromJS(action.data)); // 6 gelen datayı yukarıya set ediyoruz
      default:
        return state;
    }
  }
