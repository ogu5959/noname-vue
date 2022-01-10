<template>
    <div>
        <header>
            <h1 align="center">No Name</h1>
            <h2>{{this.$store.state.loginId}}</h2>
        </header>

        <nav>
            <Navigation></Navigation>
        </nav>

        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
    import Navigation from "./Navigation";

    export default {
        name: "Main",
        components: {
            Navigation
        },
        data() {
            return {
            }
        },
    }
</script>

<style scoped>

</style>