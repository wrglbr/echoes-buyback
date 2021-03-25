<script>
export default {
  name: "Home",
  props: {
    msg: String,
    corp: String,
  },
  data() {
    return {
      page_title: "Ore Buyback - Home",
      items: [],
    };
  },
  // methods: {
  //  getItems() {},
  // },
};
</script>

<template>
  <div id="home">
    <div class="msg">{{ msg }}</div>
    <h1>{{ corp }} Ore Buyback</h1>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
