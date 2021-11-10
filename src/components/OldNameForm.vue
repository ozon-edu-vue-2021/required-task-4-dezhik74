<template>
  <div>
    <div class="row prevous-row">
      <custom-input
        id="prevous-lastname"
        placeholder="Предыдущая фамилия"
        title="Предыдущая фамилия"
        v-model="prevousNameData.prevousLastName"
      />

      <custom-input
        id="prevous-firstname"
        placeholder="Предыдущее имя"
        title="Предыдущее имя"
        v-model="prevousNameData.prevousFirstName"
      />
    </div>
  </div>
</template>

<script>
import CustomInput from "./inputs/CustomInput.vue";

export default {
  name: "OldNameForm",
  components: {
    CustomInput,
  },
  inject: ["prevousNameData"],
};
</script>
