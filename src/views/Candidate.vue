<template>
  <div class="candidate">
    <router-view />
    <h1>This is a candidate page</h1>
    <div>
      <p>User {{ user.name }}</p>
      <p>User {{ user.id }}</p>
    </div>
    <div>
      <p>loading</p>
    </div>
    <h2>User {{ $route.params.id }}</h2>
  </div>
</template>
<script>
export default {
  name: "Candidate",
  computed: {
    user() {
      return this.$store.getters.get_user(parseInt(this.$route.params.id));
    }
    // user() {
    //   return this.$store.state.users.find(
    //     user => user.id === this.$route.params.id
    //   );
    // }
  }
};
</script>
