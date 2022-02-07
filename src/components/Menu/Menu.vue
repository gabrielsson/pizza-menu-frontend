<template src='./Menu.html'>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Menu.css">
</style>

<script>
    import EventBus from '../../events/eventBus'
    import axios from 'axios';

    export default {
        name: 'Menu',
        data() {
            return {
                data: {
                    menu: [],
                    ingredients: []
                }
            }
        },
        methods: {
            generateMenu(payload) {
                const ingredients = []

                payload.forEach(element => {
                    ingredients.push(element)
                });
                axios.post(process.env.VUE_APP_PIZZA_API + "/pizzas",ingredients, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type':'application/json',
                    }
                })

                    .then(response => {
                        // eslint-disable-next-line no-console
                        this.data.menu = response.data;

                    })
            },
            updateMenu(payload) {
                this.data.ingredients = []
                payload.forEach(element => {
                    this.data.ingredients.push({"name": element})
                });
            }
        },
        mounted() {
            EventBus.$on('generateMenu', (payload) => {
                    this.generateMenu(payload);


                }
            )
        },

    };
</script> 
