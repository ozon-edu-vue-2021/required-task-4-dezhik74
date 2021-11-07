<template>
  <div>
    <div class="row">
      <div class="column">
        <label for="last-name">Фамилия </label>
        <input
          id="last-name"
          placeholder="Фамилия"
          v-model="personalData.lastName"
        />
      </div>
      <div class="column">
        <label for="first-name">Имя </label>
        <input
          id="first-name"
          placeholder="Имя"
          v-model="personalData.firstName"
        />
      </div>
      <div class="column">
        <label for="middle-name">Отчество </label>
        <input
          id="middle-name"
          placeholder="Отчество"
          v-model="personalData.middleName"
        />
      </div>
    </div>
    <div class="row">
      <div class="column column-50">
        <label for="birth-date">Дата рождения </label>
        <input
          id="birth-date"
          placeholder="Дата рождения"
          v-model="personalData.birthDate"
        />
      </div>
      <div class="column column-50">
        <label for="email">E-mail </label>
        <input id="email" placeholder="E-mail" v-model="personalData.eMail" />
      </div>
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
import DoubleRadioBox from "./DoubleRadioBox.vue";

export default {
  name: "PersonalData",
  components: {
    DoubleRadioBox,
  },
  inject: ["personalData"],
};
</script>
