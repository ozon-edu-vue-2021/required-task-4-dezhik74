// Строка ввода русских слов

<template>
  <div :class="classDiv">
    <label :for="$attrs.id"> {{ title }} </label>
    <input
      :id="$attrs.id"
      :placeholder="$attrs.placeholder"
      :value="value"
      @input="onInput"
    />
    <div class="column errors-container">
      <div class="error-message" v-for="(error, i) in errorList" :key="i">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  data() {
    return {
      errorList: [],
      makeErrorList: null,
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    classDiv: {
      type: String,
      default: "column",
    },
    value: {
      type: String,
      default: "",
    },
    validationType: {
      type: String,
      default: "RusValidate",
    },
  },
  methods: {
    onInput: function (event) {
      this.makeErrorList(event.target.value);
      if (this.errorList.length) {
        this.$root.$emit("add-error", this.$attrs.id);
      } else {
        this.$root.$emit("delete-error", this.$attrs.id);
      }
      this.$emit("input", event.target.value);
    },
    validationRus(value) {
      const RUS_REGEXP = /^[А-Яа-я -]+$/;
      if (!RUS_REGEXP.test(value) && value.length > 0) {
        this.errorList = ["только русские буквы"];
        return;
      }
      this.errorList = [];
    },
    validationEmail(value) {
      const EMAIL_REGEXP =
        /^([\w_-]+\.)*[\w_-]+@[\w_-]+(\.[\w_-]+)*\.[a-z]{2,6}$/;
      if (!EMAIL_REGEXP.test(value) && value.length > 0) {
        this.errorList = ["Введите правильный Email"];
        return;
      }
      this.errorList = [];
    },
    validationFourNumbers(value) {
      const FN_REGEXP = /^[0-9]{4}$/;
      if (!FN_REGEXP.test(value) && value.length > 0) {
        this.errorList = ["Введите четыре цифры"];
        return;
      }
      this.errorList = [];
    },
    validationSixNumbers(value) {
      const FN_REGEXP = /^[0-9]{6}$/;
      if (!FN_REGEXP.test(value) && value.length > 0) {
        this.errorList = ["Введите шесть цифр"];
        return;
      }
      this.errorList = [];
    },
    validationDate(value) {
      const Date_REGEXP = /^[0-9]{2}-[0-9]{2}-[0-9]{4}$/;
      if (!Date_REGEXP.test(value) && value.length > 0) {
        this.errorList = ["Введите дату ММ-ДД-ГГГГ"];
        return;
      }
      if (isNaN(new Date(value)) || new Date(value) > new Date()) {
        this.errorList = ["Введите правильную дату (ММ-ДД-ГГГГ)"];
        return;
      }
      this.errorList = [];
    },
    validationLatin(value) {
      const RUS_REGEXP = /^[a-zA-Z -]+$/;
      if (!RUS_REGEXP.test(value) && value.length > 0) {
        this.errorList = ["только латинские буквы"];
        return;
      }
      this.errorList = [];
    },
  },
  mounted() {
    switch (this.validationType) {
      case "RusValidate":
        this.makeErrorList = this.validationRus;
        break;
      case "EMAILValidate":
        this.makeErrorList = this.validationEmail;
        break;
      case "FourNumValidate":
        this.makeErrorList = this.validationFourNumbers;
        break;
      case "SixNumValidate":
        this.makeErrorList = this.validationSixNumbers;
        break;
      case "DateValidate":
        this.makeErrorList = this.validationDate;
        break;
      case "LatinValidate":
        this.makeErrorList = this.validationLatin;
        break;
    }
  },
};
</script>

<style scoped>
.errors-container {
  margin: -15px;
}
.error-message {
  font-size: 10px;
  color: red;
}
</style>
