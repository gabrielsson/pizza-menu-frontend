<template src='./Ingredients.html'>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Ingredients.css">
</style>

<script>
export default {
  name: 'Ingredients',
  props: {
    msg: Array
  },
  methods: {
    generateMenu: function() {
      this.$emit('generateMenu')
    }
  }
};
</script>