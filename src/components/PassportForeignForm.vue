<template>
  <div>
    <div class="row">
      <div class="column">
        <label for="latin-lastname">Фамилия на латинице</label>
        <input
          id="latin-lastname"
          placeholder="Фамилия на латинице"
          v-model="passportData.latinLastName"
        />
      </div>
      <div class="column">
        <label for="latin-firstname">Имя на латинице </label>
        <input
          id="latin-firstname"
          placeholder="Имя на латинице"
          v-model="passportData.latinFirstName"
        />
      </div>
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
        <label for="foreign-pass-country">Страна выдачи </label>
        <select
          id="foreign-pass-country"
          v-model="passportData.foreignPassCountry"
        >
          <option
            v-for="country in citizenshipVariants"
            v-bind:value="country"
            :key="country"
          >
            {{ country }}
          </option>
        </select>
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
export default {
  name: "PassportForeignForm",
  inject: ["passportData"],
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
  margin-top: -15px;
  margin-left: 0;
}
</style>
