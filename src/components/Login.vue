<template>
    <div>
        <h4>로그인</h4>
        <p>
            ID : <input v-model="id" @keyup.enter="login"/>
        </p>
        <p>
            PASSWORD : <input type="password" v-model="password" @keyup.enter="login"/>
        </p>
        <p>
            <button @click="login">로그인</button>
        </p>
    </div>
</template>

<script>
    import Constant from "../Constant";

    export default {
        name: "Login",
        data() {
            return {
                id: "",
                password: "",
            }
        },
        methods: {
            login() {

                console.log("id : " + this.id)
                console.log("pw : " + this.password)

                // dispatch 함수를 통해 Actions 함수를 호출
                // (Component > dispatch > actions)
                //
                // * 첫번째 파리미터 : 호출할 함수
                // * 두번쨰 파리미터 : 전달할 데이터
                this.$store.dispatch(Constant.LOGIN, {
                    id: this.id,
                    password: this.password,
                    router: this.$router
                })
            }
        }
    }
</script>

<style scoped>

</style>