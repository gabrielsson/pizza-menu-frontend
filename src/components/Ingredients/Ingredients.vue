
<template src="./Ingredients.html">

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Ingredients.css">
</style>

<script>
    import EventBus from '../../events/eventBus'
    import axios from 'axios'

    export default {
        name: "Ingredients",
        data() {
            return {
                data: {
                    ingredients: [],
                    selectedList: [],
                }
            }
        },
        methods: {
            selectedIngredient: function (ingredient) {
                if (this.data.selectedList.includes(ingredient)) {
                    this.data.selectedList.splice(this.data.selectedList.indexOf(ingredient), 1)

                } else {
                    this.data.selectedList.push(ingredient)
                }
                window.console.log("emmitting" + this.data.selectedList)
                EventBus.$emit('generateMenu', this.data.selectedList)
            },
            isActive: function (ingredient) {
                return this.data.selectedList.includes(ingredient);
            }
        },
        mounted() {
            axios.get(process.env.VUE_APP_PIZZA_API + "/ingredients", {            },).then(response => {
                this.ingredients = response.data;
                this.data.ingredients = response.data;

            });
        }
    };
</script>