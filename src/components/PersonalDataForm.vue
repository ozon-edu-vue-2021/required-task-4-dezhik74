<template>
  <div>
    <div class="row">
      <custom-input
        id="last-name"
        placeholder="Фамилия"
        title="Фамилия"
        v-model="personalData.lastName"
      />

      <custom-input
        id="first-name"
        placeholder="Имя"
        title="Имя"
        v-model="personalData.firstName"
      />

      <custom-input
        id="middle-name"
        placeholder="Отчество"
        title="Отчество"
        v-model="personalData.middleName"
      />
    </div>
    <div class="row">
      <custom-input
        id="birth-date"
        placeholder="Дата рождения"
        title="Дата рождения"
        v-model="personalData.birthDate"
        validationType="DateValidate"
      />

      <custom-input
        id="email"
        placeholder="Email"
        title="Email"
        v-model="personalData.eMail"
        validationType="EMAILValidate"
      />
    </div>

    <double-radio title="Пол">
      <custom-radio-button
        v-model="personalData.gender"
        label="Мужской"
        value="Man"
      />
      <custom-radio-button
        v-model="personalData.gender"
        label="Женский"
        value="Woman"
      />
    </double-radio>
  </div>
</template>

<script>
import CustomInput from "./inputs/CustomInput.vue";
import CustomRadioButton from "./inputs/CustomRadioButton.vue";
import DoubleRadio from "./inputs/DoubleRadio.vue";

export default {
  name: "PersonalData",
  components: {
    CustomInput,
    CustomRadioButton,
    DoubleRadio,
  },
  inject: ["personalData"],
};
</script>
