<template>
  <div class="container">
    <FormulateForm class="form" @submit="sendData">
      <!-- ЛИЧНЫЕ ДАННЫЕ -->
      <h4>Личные данные</h4>
      <div class="row">
        <FormulateInput
          :outer-class="['column']"
          type="text"
          label="Фамилия"
          v-model="lastName"
          validation="bail|required|matches:/^[А-Яа-я -]+$/"
          :validation-messages="{
            matches: 'Только русские буквы!',
            required: 'Поле не должно быть пустым!',
          }"
        />
        <FormulateInput
          :outer-class="['column']"
          type="text"
          label="Имя"
          v-model="firstName"
          validation="bail|required|matches:/^[А-Яа-я -]+$/"
          :validation-messages="{
            matches: 'Только русские буквы!',
            required: 'Поле не должно быть пустым!',
          }"
        />
        <FormulateInput
          :outer-class="['column']"
          type="text"
          label="Отчество"
          v-model="middleName"
          validation="bail|required|matches:/^[А-Яа-я -]+$/"
          :validation-messages="{
            matches: 'Только русские буквы!',
            required: 'Поле не должно быть пустым!',
          }"
        />
      </div>
      <div class="row">
        <FormulateInput
          :outer-class="['column']"
          type="text"
          label="Дата рождения (ММ-ДД-ГГГГ)"
          v-model="birthDate"
          validation="bail|required|date:MM-DD-YYYY|validateactualdate|"
          :validation-messages="{
            validateactualdate: 'Дата должна быть правильной!',
            required: 'Поле не должно быть пустым!',
            date: 'формат даты ММ-ДД-ГГГГ',
          }"
        />
        <FormulateInput
          :outer-class="['column']"
          type="text"
          label="Email"
          v-model="eMail"
          validation="bail|required|email"
          :validation-messages="{
            required: 'Поле не должно быть пустым!',
            email: 'формат почты должен быть правильным',
          }"
        />
      </div>
      <div>
        <double-radio title="Пол">
          <custom-radio-button v-model="gender" label="Мужской" value="Man" />
          <custom-radio-button v-model="gender" label="Женский" value="Woman" />
        </double-radio>
      </div>

      <!-- КОНЕЦ ЛИЧНЫХ ДАННЫХ -->

      <br />

      <!-- ПАСПОРТНЫЕ ДАННЫЕ -->
      <h4>Паспортные данные</h4>
      <div class="row">
        <div class="column column-50">
          <custom-select
            title="Гражданство"
            :itemList="citizenshipVariants"
            v-model="sitizenship"
          ></custom-select>
        </div>
      </div>
      <!-- Русский паспорт -->
      <div v-if="sitizenship === 'Russia'" class="row">
        <FormulateInput
          :outer-class="['column']"
          type="text"
          label="Серия паспорта"
          v-model="passSeria"
          validation="bail|number|matches:/^[0-9]{4}$/"
          :validation-messages="{
            number: 'Только цифры!',
            required: 'Поле не должно быть пустым!',
            matches: '4 цифры!',
          }"
        />
        <FormulateInput
          :outer-class="['column']"
          type="text"
          label="Номер паспорта"
          v-model="passNumber"
          validation="bail|number|matches:/^[0-9]{6}$/"
          :validation-messages="{
            number: 'Только цифры!',
            required: 'Поле не должно быть пустым!',
            matches: '6 цифр!',
          }"
        />
        <FormulateInput
          :outer-class="['column']"
          type="text"
          label="Дата выдачи"
          v-model="passDate"
          validation="bail|required|date:MM-DD-YYYY"
          :validation-messages="{
            required: 'Поле не должно быть пустым!',
            date: 'формат даты ММ-ДД-ГГГГ',
          }"
        />
      </div>
      <!-- Нерусский паспорт -->
      <div v-if="sitizenship !== 'Russia'">
        <div class="row">
          <FormulateInput
            :outer-class="['column']"
            type="text"
            label="Фамилия на латинице"
            v-model="latinLastName"
            validation="bail|required|matches:/^[a-zA-Z -]+$/"
            :validation-messages="{
              required: 'Поле не должно быть пустым!',
              matches: 'Латинские буквы',
            }"
          />
          <FormulateInput
            :outer-class="['column']"
            type="text"
            label="Имя на латинице"
            v-model="latinFirstName"
            validation="bail|required|matches:/^[a-zA-Z -]+$/"
            :validation-messages="{
              required: 'Поле не должно быть пустым!',
              matches: 'Латинские буквы',
            }"
          />
        </div>
        <div class="row small-text">
          Иностранцы заполняют латинскими буквами. Например, Ivanov Ivan
        </div>
        <div class="row">
          <FormulateInput
            :outer-class="['column']"
            type="text"
            label="Номер паспорта"
            v-model="foreignPassNum"
            validation="bail|required"
            :validation-messages="{
              required: 'Поле не должно быть пустым!',
            }"
          />
          <div class="column">
            <custom-select
              title="Страна выдачи"
              :itemList="citizenshipVariants"
              v-model="foreignPassCountry"
            ></custom-select>
          </div>
          <div class="column">
            <label for="foreign-pass-type">Тип паспорта </label>
            <select id="foreign-pass-type" v-model="foreignPassType">
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
      <!-- КОНЕЦ ПАСПОРТНЫХ ДАННЫХ -->

      <!-- СТАРАЯ ФАМИЛИЯ -->

      <double-radio title="Меняли ли фамилию или имя?">
        <custom-radio-button
          v-model="familyChanged"
          label="Нет"
          value="false"
        />
        <custom-radio-button v-model="familyChanged" label="Да" value="true" />
      </double-radio>
      <div class="row" v-if="familyChanged === 'true'">
        <FormulateInput
          :outer-class="['column']"
          type="text"
          label="Предыдущая фамилия"
          v-model="prevousLastName"
          validation="bail|required|matches:/^[А-Яа-я -]+$/"
          :validation-messages="{
            matches: 'Только русские буквы!',
            required: 'Поле не должно быть пустым!',
          }"
        />
        <FormulateInput
          :outer-class="['column']"
          type="text"
          label="Предидущее имя"
          v-model="prevousFirstName"
          validation="bail|required|matches:/^[А-Яа-я -]+$/"
          :validation-messages="{
            matches: 'Только русские буквы!',
            required: 'Поле не должно быть пустым!',
          }"
        />
      </div>
      <!-- КНОПКА -->
      <FormulateInput type="submit" label="Отправить" />
      <!-- КНОПКА -->
    </FormulateForm>
  </div>
</template>

<script>
import countryData from "../assets/data/citizenships.json";
import passportTypes from "../assets/data/passport-types.json";
import { isElementInArray } from "../utils/utils";
import CustomRadioButton from "./inputs/CustomRadioButton.vue";
import DoubleRadio from "./inputs/DoubleRadio.vue";
import CustomSelect from "./inputs/CustomSelect.vue";

export default {
  name: "NewForm",
  components: {
    CustomRadioButton,
    DoubleRadio,
    CustomSelect,
  },
  data() {
    return {
      lastName: "",
      firstName: "",
      middleName: "",
      birthDate: "",
      eMail: "",
      gender: "Man",
      sitizenship: "Russia",
      passSeria: "",
      passNumber: "",
      passDate: "",
      latinLastName: "",
      latinFirstName: "",
      foreignPassNum: "",
      foreignPassCountry: "",
      foreignPassType: "",
      passportTypes: [],
      citizenshipVariants: [],
      familyChanged: "false",
      prevousLastName: "",
      prevousFirstName: "",
    };
  },
  methods: {
    sendData() {
      // console.log(event)
      // event.preventDefault();
      //проверка на русский/загран паспорт и на вторую фамилию с очисткой лишнего
      if (this.sitizenship === "Russia") {
        this.latinLastName = "";
        this.latinFirstName = "";
        this.foreignPassNum = "";
        this.foreignPassCountry = "";
        this.foreignPassType = "";
      } else {
        this.passSeria = "";
        this.passNumber = "";
        this.passDate = "";
      }
      if (this.familyChanged === "false") {
        this.prevousLastName = "";
        this.prevousFirstName = "";
      }

      const APIData = {};
      for (let key in this.$data) {
        if (key !== "passportTypes" && key !== "citizenshipVariants") {
          APIData[key] = this.$data[key];
        }
      }
      console.log(JSON.stringify(APIData, null, 2));
    },
  },
  created() {
    countryData.map((country) => {
      if (!isElementInArray(country.nationality, this.citizenshipVariants)) {
        this.citizenshipVariants.push(country.nationality);
      }
    });
    passportTypes.map((passType) => {
      this.passportTypes.push(passType.type);
    });
  },
};
</script>

<style>
.small-text {
  font-size: 14px;
  margin-top: 0px;
  margin-left: 0;
}
.error-class {
  color: rgb(190, 9, 9);
  list-style-type: none;
  font-size: 14px;
  margin-top: -10px;
}
</style>
