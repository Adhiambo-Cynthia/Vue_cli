<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Bitcoin Price Index</h2>
    <section v-if="error">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
  </section>
  <section v-else>
    <div v-if="loading">Loading...</div>
    <div v-else v-for="(currency, index) in info" :key="index">
        <p>{{ currency.description }}</p>
        <p>Rate:{{ currency.rate_float }}</p>
    </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "About",
  data() {
    return {
      info: null,
      loading: true,
      error: false
    };
  },
  computed() {},
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response.data.bpi))
      .catch(error => {
        console.log(error);
        this.error = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
