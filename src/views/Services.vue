tr<template>
  <div>
    <h1>SERVICES</h1>
    <h2>Candidate managment system</h2>
    <h3>Candidates</h3>
    <ul>
      <li v-for="(user, index) in users" :key="index" class="candidates">
        ID: {{ index + 1 }} NAME: {{ user.name }}
        <button @click="deleteUser(index)" class="delete">DELETE</button>
        <button v-if="!user.employed" @click="Userstatus(user)" class="employ">
          EMPLOY
        </button>
        <button v-if="user.employed" @click="Userstatus(user)" class="unemploy">
          UNEMPLOY
        </button>
      </li>
    </ul>
    <input type="text" v-model="newUser" placeholder="Add candidate" />
    <button @click="addUser()">Submit</button>
    <p class="text">TOTAL EMPLOYEES: {{ total_employees }}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Services",
  data() {
    return {
      newUser: ""
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    ...mapGetters({ total_employees: "total_employees" })
  },
  methods: {
    addUser() {
      this.$store.dispatch("addNewUser", this.newUser);
      this.newUser = "";
    },
    deleteUser(index) {
      this.$store.dispatch("deletetheUser", index);
    },
    Userstatus(user) {
      this.$store.dispatch("status", user);
    }
  }
};
</script>
<style scoped>
.candidates {
  list-style: none;
  border: 3px solid black;
  margin-top: 15px;
  padding: 5px;
  font-weight: bolder;
}
.employ {
  margin-left: 10px;
  background-color: green;
  color: white;
  font-weight: bold;
  border-radius: 5px;
}
.unemploy {
  margin-left: 10px;
  background-color: rgb(102, 4, 4);
  color: white;
  font-weight: bold;
  border-radius: 5px;
}
.delete {
  margin-right: 10px;
  background-color: rgb(14, 4, 102);
  color: white;
  font-weight: bold;
  border-radius: 5px;
}
.text {
  font-weight: bolder;
  font-size: 20px;
}
</style>
