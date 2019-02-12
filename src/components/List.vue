<template>
  <div>
    <h3>{{title}}</h3>
    <ul class="list">
      <li v-for="(item, index) in items" :key="index">
        <a @click="handleOnClick($event, index)"><small>{{ item.name }}</small></a>
        <br>
        <a @click="handleOnClickDelete($event, index)"><small>削除</small></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'list',
  compomemts: {},
  methods: {
    handleOnClickDelete: function(e, index) {
      e.preventDefault();
      const cityName = this.items[index].name
      if(window.confirm(`${cityName}を削除してもよろしいですか？`)){
        this.$emit('deleteItem', index)
      }
    },
    handleOnClick: function(e, index) {
      e.preventDefault();
      this.$emit('selectItem', index)
    }
  },
  props: ['title', 'items']
}
</script>
<style>

</style>
