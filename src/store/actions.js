import Constant from '../Constant'

export default {

    // 로그인
    [Constant.LOGIN]: (store, payload) => {

        // ** 차후 로그인 프로세스 넣을 예정 (정상일 경우에만 화면변경)

        // Commit 메세지를 통해 Mutations 함수 호출
        // (actions > commit > mutations)
        //
        // 첫번째 파라미터 : 이벤트 식별자
        // 두번째 파라미터 : 전달할 데이터 (payload)
        store.commit( Constant.LOGIN_ID, {
            loginId: payload.id
        })

        // 화면변경
        payload.router.push({
            name: "MenteAdmin"
        })
    },
}