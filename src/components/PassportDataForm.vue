<template>
  <div>
    <div class="row">
      <div class="column column-50">
        <custom-select
          title="Гражданство"
          :itemList="citizenshipVariants"
          v-model="passportData.sitizenship"
        ></custom-select>

        <!-- <label for="citizenship">Гражданство </label>
        <input
          list="country"
          id="citizenship"
          v-model="passportData.sitizenship"
        />
        <datalist id="country">
          <option
            v-for="country in citizenshipVariants"
            v-bind:value="country"
            :key="country"
          >
            {{ country }}
          </option>
        </datalist> -->
      </div>
    </div>
    <!-- Русский паспорт -->
    <div v-if="passportData.sitizenship === 'Russia'">
      <div class="row">
        <div class="column">
          <label for="pass-seria">Серия паспорта </label>
          <input
            id="pass-seria"
            placeholder="Серия паспорта"
            v-model="passportData.passSeria"
          />
        </div>
        <div class="column">
          <label for="pass-number">Номер паспорта </label>
          <input
            id="pass-number"
            placeholder="Номер паспорта"
            v-model="passportData.passNumber"
          />
        </div>
        <div class="column">
          <label for="pass-date">Дата выдачи </label>
          <input
            id="pass-date"
            placeholder="Дата выдачи"
            v-model="passportData.passDate"
          />
        </div>
      </div>
    </div>
    <!-- Загранпаспорт -->
    <passport-foreign-form
      v-else
      :citizenshipVariants="citizenshipVariants"
      :passportTypes="passportTypes"
    />
  </div>
</template>

<script>
import PassportForeignForm from "./PassportForeignForm.vue";
import CustomSelect from "./CustomSelect.vue";

export default {
  components: {
    PassportForeignForm,
    CustomSelect,
  },
  name: "PassportDataForm",
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
