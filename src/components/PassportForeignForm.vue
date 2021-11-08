<template>
  <div>
    <div class="row">
      <custom-input
        id="latin-lastname"
        placeholder="Фамилия на латинице"
        title="Фамилия на латинице"
        v-model="passportData.latinLastName"
        validationType="LatinValidate"
      />

      <custom-input
        id="latin-firstname"
        placeholder="Имя на латинице"
        title="Имя на латинице"
        v-model="passportData.latinFirstName"
        validationType="LatinValidate"
      />
    </div>
    <div class="row small-text">
      Иностранцы заполняют латинскими буквами. Например, Ivanov Ivan
    </div>
    <div class="row">
      <div class="column">
        <label for="foreign-pass-number">Номер паспорта </label>
        <input
          id="foreign-pass-number"
          placeholder="Номер паспорта"
          v-model="passportData.foreignPassNum"
        />
      </div>
      <div class="column">
        <custom-select
          title="Страна выдачи"
          :itemList="citizenshipVariants"
          v-model="passportData.foreignPassCountry"
        ></custom-select>
      </div>
      <div class="column">
        <label for="foreign-pass-type">Тип паспорта </label>
        <select id="foreign-pass-type" v-model="passportData.foreignPassType">
          <option
            v-for="passType in passportTypes"
            v-bind:value="passType"
            :key="passType"
          >
            {{ passType }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from "./inputs/CustomSelect.vue";
import CustomInput from "./inputs/CustomInput.vue";

export default {
  name: "PassportForeignForm",
  inject: ["passportData"],
  components: {
    CustomSelect,
    CustomInput,
  },
  props: {
    citizenshipVariants: {
      type: Array,
      default: () => {},
    },
    passportTypes: {
      type: Array,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.small-text {
  font-size: 14px;
  margin-top: 0px;
  margin-left: 0;
}
</style>
