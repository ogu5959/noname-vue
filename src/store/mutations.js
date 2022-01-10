import Constant from '../Constant'

export default {

    // * state에 있는 값을 payload(전달받은 값)로 바꾼다.
    [Constant.LOGIN_ID]: (state, payload) => {
        state.loginId = payload.loginId
    }
}