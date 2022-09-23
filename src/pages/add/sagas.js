import { put, takeEvery,call } from "redux-saga/effects";
import * as constants from "./constants";
import * as actions from "./actions";
import * as userListActions from "../home/usersList/actions";
import * as service from "../../utils/services";
import {store} from "../../store";
import {push} from "react-router-redux";

function* addData(action) {
    const {first_name,last_name,avatar } = action.payload;
    try {
        yield put(actions.loading( true));
        // send post request to Api
        yield call(service.makePatchReq,{url:`/users`,data:{first_name,last_name,avatar}});
        // save data to redux store
        const state = store.getState();
        const getUserList = state.usersList.data;
        // console.log(getUserList);
         //const newID =uuid.v4();
     //   const newID = Date.now();
        const newUser = { id :100,first_name,last_name,avatar};
        console.log(newUser);
        getUserList.unshift(newUser);
        yield put(userListActions.set(getUserList));
        store.dispatch(push("/"));
    } catch (error) {
        yield put(actions.failure(true,error.response.data.error));
      //  alert(error.response.data.error)
       alert("Note: Only defined users succeed user addition", error.response);
    }finally {
        yield put(actions.loading( false));
    }
}

export function* addDataSaga() {
    yield takeEvery(constants.SET, addData);
}
export default [addDataSaga()];

