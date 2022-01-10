<template>
    <div>
        <h1>MentAdmin</h1>
        <table border="1">
            <thead>
                <th>멘트 제목</th>
                <th>멘트</th>
            </thead>
            <tbody>
                <tr v-for="menteList in this.$store.state.menteList"
                    :key="menteList.mente_no"
                    @click="gridClick(menteList.mente_title, menteList.mente_msg)"
                >
                    <td>{{menteList.mente_title}}</td>
                    <td>{{menteList.mente_msg}}</td>
                </tr>
            </tbody>
        </table>

        <p>
            제목 : <input v-model="mente_title" style="width:500px"/>
        </p>
        <p>
            내용
            <textarea v-model="mente_msg" style="width:500px;height:50px"></textarea>
        </p>
    </div>
</template>

<script>
    export default {
        name: "MenteAdmin",
        data() {
            return {
                mente_title: "",
                mente_msg: "",
            }
        },
        // 화면 Viewing 후 호출
        mounted() {

            console.log("loginId : " + this.$store.state.loginId)

            // ** 차후 세션 종료는 어떤방식으로 진행하면 좋을까?
            if (this.$store.state.loginId == "") {

                // 화면변경
                //this.$router.push({
                //    name: "Login"
                //})
            }
        },

        methods: {
            gridClick(mente_title, mente_msg) {
                this.mente_title = mente_title
                this.mente_msg = mente_msg
            }
        }
    }
</script>

<style scoped>

</style>