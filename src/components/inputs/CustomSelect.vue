<template>
  <div v-click-outside="hideDropdown">
    <label :for="$attrs.id"> {{ $attrs.title }} </label>
    <input
      :id="$attrs.id"
      @focus="isDropdownOpen = true"
      @input="onInput"
      v-model="value"
    />
    <div v-if="isDropdownOpen" class="selector-dropdown">
      <div
        class="dropdown-item"
        v-for="(item, idx) in filteredList"
        :key="idx"
        @click="selectItem"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import { debounce } from "../../utils/debounce";

export default {
  name: "CustomSelect",
  data() {
    return {
      isDropdownOpen: false,
      value: "",
      debouncedMakeFilteredList: null,
      filteredList: [],
    };
  },
  props: {
    itemList: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  directives: {
    ClickOutside,
  },
  methods: {
    hideDropdown() {
      this.isDropdownOpen = false;
    },
    selectItem(el) {
      this.value = el.target.innerText;
      this.onInput();
      this.isDropdownOpen = false;
    },
    makeFilteredList() {
      let res = this.itemList.filter((item) =>
        item.toLowerCase().startsWith(this.value.toLowerCase())
      );
      this.filteredList = res.length ? res : ["Нет совпадений"];
    },
    onInput() {
      this.isDropdownOpen = true;
      this.$emit("input", this.value);
    },
  },
  watch: {
    value: function () {
      this.debouncedMakeFilteredList();
    },
  },
  created() {
    this.debouncedMakeFilteredList = debounce(this.makeFilteredList, 1000);
    this.makeFilteredList();
    this.value = this.$attrs.value;
  },
};
</script>

<style scoped>
.selector-dropdown {
  width: 250px;
  border: 1px solid #9b4dca;
  position: absolute;
  margin-top: -14px;
  z-index: 5;
  background-color: white;
  max-height: 300px;
  overflow-y: auto;
  padding: 3px;
}

.dropdown-item {
  margin: 0;
}

.dropdown-item:hover {
  cursor: pointer;
  background-color: rgb(242, 157, 245);
}
</style>
