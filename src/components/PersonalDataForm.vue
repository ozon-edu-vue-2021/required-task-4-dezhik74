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

    <double-radio-box
      title="Пол"
      name="gender-group"
      :first-options="{ text: 'Мужской', id: 'man', value: 'Man' }"
      :second-options="{ text: 'Женский', id: 'woman', value: 'Woman' }"
      v-model="personalData.gender"
    />
  </div>
</template>

<script>
import DoubleRadioBox from "./inputs/DoubleRadioBox.vue";
import CustomInput from "./inputs/CustomInput.vue";

export default {
  name: "PersonalData",
  components: {
    DoubleRadioBox,
    CustomInput,
  },
  inject: ["personalData"],
};
</script>
