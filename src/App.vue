<template>
    <div id="app">


        <Ingredients :msg="info"></Ingredients>
        <Menu :menu="menu"></Menu>
    </div>
</template>

<script>
    import Ingredients from "./components/Ingredients";
    import Menu from "./components/Menu";

    export default {
        name: "app",
        components: {
            Ingredients,
            Menu
        },
        data() {
            return {
                info: [],
                menu: []
            };
        },
        mounted() {

        },
        methods: {},
    };
</script>

<style>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: wheat;
        padding-top: 60px;
        opacity: 0.85;
        font-family: 'Courier Next', courier, monospace;
        background-color: black;
        background-size: 100%;

    }

    html {
        background-image: url('assets/pizza.jpg');
        background-position: bottom;
        background-attachment: fixed;
        background-size: cover;
    }
</style>
 