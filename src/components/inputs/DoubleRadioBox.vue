<template>
  <div>
    <div class="row">
      <div class="column title-string">{{ title }}</div>
    </div>
    <span class="row">
      <input
        class="column column-10"
        type="radio"
        :name="$attrs.name"
        :id="firstOptions.id"
        :value="firstOptions.value"
        @change="updateInput"
      />
      <label class="column column-10" :for="firstOptions.id">
        {{ firstOptions.text }}
      </label>
      <input
        class="column column-10"
        type="radio"
        :name="$attrs.name"
        :id="secondOptions.id"
        :value="secondOptions.value"
        @change="updateInput"
      />
      <label class="column column-10" :for="secondOptions.id">
        {{ secondOptions.text }}
      </label>
    </span>
  </div>
</template>

<script>
export default {
  name: "DoubleRadioBox",
  props: {
    title: {
      type: String,
      default: "",
    },
    firstOptions: {
      type: Object,
      default: () => {},
    },
    secondOptions: {
      type: Object,
      default: () => {},
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateInput(e) {
      this.$emit("change", e.target.value);
    },
  },
  model: {
    prop: "modelValue",
    event: "change",
  },
};
</script>

<style scoped>
.title-string {
  font-weight: bold;
}
</style>
