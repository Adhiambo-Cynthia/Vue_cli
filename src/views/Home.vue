<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="msg" />
  </div>
</template>

<script>
// @ is an alias to /src..you import the component you want to use
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: "This might be anything"
    };
  }
};
</script>
