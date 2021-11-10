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

      <double-radio title="Меняли ли фамилию или имя?">
        <custom-radio-button
          v-model="familyChanged"
          label="Нет"
          value="false"
        />
        <custom-radio-button v-model="familyChanged" label="Да" value="true" />
      </double-radio>

      <!-- Форма для старого имени -->
      <old-name-form v-if="familyChanged === 'true'" />

      <div
        v-if="!hasErrors"
        @click.prevent="sendData"
        class="button button-send"
      >
        Отправить
      </div>
    </div>
  </div>
</template>

<script>
import countryData from "../assets/data/citizenships.json";
import passportTypes from "../assets/data/passport-types.json";
import { isElementInArray } from "../utils/utils";
import PersonalDataForm from "./PersonalDataForm.vue";
import PassportDataForm from "./PassportDataForm.vue";
import OldNameForm from "./OldNameForm.vue";
import DoubleRadio from "./inputs/DoubleRadio.vue";
import CustomRadioButton from "./inputs/CustomRadioButton.vue";

export default {
  components: {
    PersonalDataForm,
    PassportDataForm,
    OldNameForm,
    DoubleRadio,
    CustomRadioButton,
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
      errorSet: [],
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
  computed: {
    hasErrors: function () {
      return this.errorSet.length > 0;
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
    this.$root.$on(
      "add-error",
      function (id) {
        if (!this.errorSet.includes(id)) {
          this.errorSet.push(id);
        }
      }.bind(this)
    );
    this.$root.$on(
      "delete-error",
      function (id) {
        let idx = this.errorSet.indexOf(id);
        if (idx !== -1) {
          this.errorSet.splice(idx, 1);
        }
      }.bind(this)
    );
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

.button-send {
  margin-top: 30px;
}
</style>
