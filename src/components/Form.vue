<template>
  <div class="container">
    <div class="form">
      <h4>Личные данные</h4>

      <personal-data-form />

      <br />
      <h4>Паспортные данные</h4>

      <passport-data-form
        :citizenshipVariants="citizenshipVariants"
        :passportTypes="passportTypes"
      />

      <double-radio-box
        title="Меняли ли фамилию или имя?"
        name="change-family-group"
        :first-options="{ text: 'Нет', id: 'l-n-not-changed', value: 'false' }"
        :second-options="{ text: 'Да', id: 'l-n-changed', value: 'true' }"
        v-model="familyChanged"
      />

      <!-- Форма для старого имени -->
      <old-name-form v-if="familyChanged === 'true'" />

      <pre>
        {{ personalData }}
        {{ passportData }}

        {{ familyChanged }}

        {{ prevousNameData }}

      </pre>
      <div @click.prevent="sendData" class="button">Отправить</div>
    </div>
  </div>
</template>

<script>
import countryData from "../assets/data/citizenships.json";
import passportTypes from "../assets/data/passport-types.json";
import { isElementInArray } from "../utils/utils";
import DoubleRadioBox from "./DoubleRadioBox.vue";
import PersonalDataForm from "./PersonalDataForm.vue";
import PassportDataForm from "./PassportDataForm.vue";
import OldNameForm from "./OldNameForm.vue";

export default {
  components: {
    DoubleRadioBox,
    PersonalDataForm,
    PassportDataForm,
    OldNameForm,
  },
  data() {
    return {
      personalData: {
        lastName: "",
        firstName: "",
        middleName: "",
        birthDate: "",
        eMail: "",
        gender: "Man",
      },
      passportData: {
        sitizenship: "Russia",
        passSeria: "",
        passNumber: "",
        passDate: "",
        latinLastName: "",
        latinFirstName: "",
        foreignPassNum: "",
        foreignPassCountry: "",
        foreignPassType: "",
      },
      passportTypes: [],
      citizenshipVariants: [],
      familyChanged: "false",
      prevousNameData: {
        prevousLastName: "",
        prevousFirstName: "",
      },
    };
  },
  provide: function () {
    return {
      personalData: this.personalData,
      passportData: this.passportData,
      prevousNameData: this.prevousNameData,
    };
  },
  methods: {
    sendData() {
      //проверка на русский/загран паспорт и на вторую фамилию с очисткой лишнего
      if (this.passportData.sitizenship === "Russia") {
        this.passportData.latinLastName = "";
        this.passportData.latinFirstName = "";
        this.passportData.foreignPassNum = "";
        this.passportData.foreignPassCountry = "";
        this.passportData.foreignPassType = "";
      } else {
        this.passportData.passSeria = "";
        this.passportData.passNumber = "";
        this.passportData.passDate = "";
      }
      if (this.familyChanged === "false") {
        this.prevousNameData.prevousLastName = "";
        this.prevousNameData.prevousFirstName = "";
      }
      const APIData = {
        personalData: this.personalData,
        passportData: this.passportData,
        familyChanged: this.familyChanged,
        prevousNameData: this.prevousNameData,
      };
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

<style scoped>
.gender-bold {
  font-weight: bold;
}

.prevous-row {
  margin-top: 10px;
}
</style>
