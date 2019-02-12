<template>
  <form @submit="handleOnSubmit">
    <input type="text" v-model="city" placeholder="都市名">
    <button type="submit">追加</button>
  </form>
</template>
<script>
export default {
  name: 'CityInput',
  data: function() {
    return {
      city: ''
    }
  },
  methods: {
    handleOnSubmit: function(e) {
      e.preventDefault();
      if(this.city.length === 0) {
        return alert('都市名は必ず入力してください。')
      }
      this.$emit('submit', this.city)
      this.city = ''
    }
  }
}
</script>
<style>

</style>
