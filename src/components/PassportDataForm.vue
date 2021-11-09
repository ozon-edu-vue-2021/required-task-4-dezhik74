<template>
  <div>
    <div class="row">
      <div class="column column-50">
        <custom-select
          title="Гражданство"
          :itemList="citizenshipVariants"
          v-model="passportData.sitizenship"
        ></custom-select>
      </div>
    </div>
    <!-- Русский паспорт -->
    <div v-if="passportData.sitizenship === 'Russia'">
      <div class="row">
        <custom-input
          id="pass-seria"
          placeholder="Серия паспорта"
          title="Серия паспорта"
          v-model="passportData.passSeria"
          validationType="FourNumValidate"
        />

        <custom-input
          id="pass-number"
          placeholder="Номер паспорта"
          title="Номер паспорта"
          v-model="passportData.passNumber"
          validationType="SixNumValidate"
        />

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
      v-if="passportData.sitizenship !== 'Russia'"
      :citizenshipVariants="citizenshipVariants"
      :passportTypes="passportTypes"
    />
  </div>
</template>

<script>
import PassportForeignForm from "./PassportForeignForm.vue";
import CustomSelect from "./inputs/CustomSelect.vue";
import CustomInput from "./inputs/CustomInput.vue";

export default {
  components: {
    PassportForeignForm,
    CustomSelect,
    CustomInput,
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
