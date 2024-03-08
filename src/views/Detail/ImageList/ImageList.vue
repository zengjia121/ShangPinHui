<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(img, index) in skuImageList"
        :key="img.id"
      >
        <img :src="img.imgUrl" @click="changeImage(img, index)" />
      </div>
    </div>
    <div class="swiper-button-next" @click="NextImage"></div>
    <div class="swiper-button-prev" @click="PrevImage"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "ImageList",
  data() {
    return {
      curImg: 0,
    };
  },
  props: ["skuImageList"],
  methods: {
    changeImage(img, index) {
      // console.log(imgUrl)
      this.$bus.$emit("changeImage", img.imgUrl);
      this.curImg = index;
    },
    NextImage() {
      if (this.curImg === this.skuImageList.length-1) {
        this.curImg = 0;
        this.$bus.$emit("changeImage", this.skuImageList[this.curImg].imgUrl);
      } 
      else {
        this.$bus.$emit(
          "changeImage",
          this.skuImageList[this.curImg + 1].imgUrl
          
        );
        this.curImg += 1;
      }
    },
    PrevImage() {
      if (this.curImg === 0) {
        this.curImg = this.skuImageList.length;
        this.$bus.$emit("changeImage", this.skuImageList[this.curImg].imgUrl);
      } 
      else {
        this.$bus.$emit(
          "changeImage",
          this.skuImageList[this.curImg - 1].imgUrl
          
        );
        this.curImg -= 1;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>
