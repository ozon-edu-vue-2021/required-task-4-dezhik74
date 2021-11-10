<template>
  <div>
    <div class="row">
      <div class="column">
        <strong>{{ title }} </strong>
      </div>
    </div>
    <div class="row wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.wrapper {
  margin-left: 0;
}
</style>
