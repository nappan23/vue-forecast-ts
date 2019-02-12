<template>
  <div>
    <a @click="handleOnClickCountUp">{{count}} clicked!!</a>
  </div>
</template>
<script>
export default {
  name: 'count',
  compomemts: {},
  props: ['count'],
  methods: {
    handleOnClickCountUp: function(e) {
      e.preventDefault();
      this.$emit('count_up')
    }
  }
}
</script>
<style>

</style>
