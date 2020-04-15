import { call, take, put, all, select } from 'redux-saga/effects';

import {
    DO_LOGIN
} from './constants';

import * as actions from './actions'

//FUNCTIONS 8

// function* doLogin(username, passrowd, barcode){
//     yield put(actions.setData(username));
// }

//Watchers 8

// function* doLoginWatcher(){
//     while (true) {
//         const action = yield take(DO_LOGIN);
//         yield call(doLogin, action.username, action.passrowd, action.companyCode);
//     }
// }


//Root 8

// export default function* rootSage() {
//     yield all([
//         doLoginWatcher(),

//     ]);
// }
