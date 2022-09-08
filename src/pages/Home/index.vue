<template>
  <div>
    <TypeNav />
    <ListContainer></ListContainer>
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="f in floorList" :key="f.id" :floor="f" />
    <Brand />
    <!-- <button @click="add">加一</button>
    <span>{{$store.state.count}}</span> -->
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Floor from "@/pages/Home/Floor";
import Like from "@/pages/Home/Like";
import Brand from "@/pages/Home/Brand";
import { mapState } from "vuex";

export default {
  name: "",
  components: { ListContainer, Recommend, Rank, Floor, Like, Brand },
  methods: {},
  computed: {
    ...mapState("home", ["floorList"]),
  },
  mounted() {
    this.$store.dispatch("home/getFloorList");
    // this.$store.dispatch("user/userInfo");
  },
};
</script>

<style>
</style>