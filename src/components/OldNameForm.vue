<template>
  <div>
    <div class="row prevous-row">
      <div class="column">
        <label for="prevous-lastname">Предыдущая фамилия </label>
        <input
          id="prevous-lastname"
          placeholder="Предыдущая фамилия"
          v-model="prevousNameData.prevousLastName"
        />
      </div>
      <div class="column">
        <label for="prevous-firstname">Предыдущее имя </label>
        <input
          id="prevous-firstname"
          placeholder="Предыдущее имя"
          v-model="prevousNameData.prevousFirstName"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OldNameForm",
  inject: ["prevousNameData"],
};
</script>
