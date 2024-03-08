<template>
  <div class="">
    <!-- 三级联动全局组件 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor
      v-for="(floor, index) in FloorList"
      :key="floor.id"
      :list="floor"
    ></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "@/views/Home/ListContainer"
import TodayRecommend from "@/views/Home/Recommend"
import Rank from "@/views/Home/Rank"
import Like from "@/views/Home/Like"
import Floor from "@/views/Home/Floor"
import Brand from "@/views/Home/Brand"
import { mapState } from "vuex"

export default {
  name: "Home",
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    this.$store.dispatch("getFloorList")
    this.$store.dispatch("getUserInfo")
  },
  computed: {
    ...mapState({
      FloorList: (state) => state.home.FloorList,
    }),
  },
}
</script>

<style></style>
 