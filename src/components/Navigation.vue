<template>
    <div>
        <a herf="#" @click="changeMenteAdmin"></a>
    </div>
</template>

<script>
    export default {
        name: "Navigation",
        methods: {
            changeMenteAdmin() {
                this.$router.push({
                    name: "MenteAdmin"
                })
            },
        }
    }
</script>

<style scoped>

</style>