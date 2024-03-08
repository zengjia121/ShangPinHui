<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <div class="pagination">
    <button @click="changePage(pageNo - 1)" :disabled="pageNo == 1">
      上一页
    </button>
    <button
      v-if="startPageAndEndPage.start > 1"
      :class="{ active: pageNo == 1 }"
      @click="changePage(1)"
    >
      1
    </button>
    <button v-if="startPageAndEndPage.start > 2">···</button>
    <!-- 中间部分 -->

    <button
      v-for="(page, index) in startPageAndEndPage.end"
      :key="index"
      v-if="page >= startPageAndEndPage.start"
      :class="{ active: pageNo == page }"
      @click="changePage(page)"
    >
      {{ page }}
    </button>
    <button v-if="startPageAndEndPage.end < totalPage - 1">···</button>
    <button
      v-if="startPageAndEndPage.end < totalPage"
      @click="changePage(totalPage)"
    >
      {{ totalPage }}
    </button>
    <button
      @click="changePage(pageNo + 1)"
      :class="{ active: pageNo == totalPage }"
      :disabled="pageNo == totalPage"
    >
      下一页
    </button>
    <button style="margin-left: 30px">共{{ total }}条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  methods: {
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
  computed: {
    //总共多少页
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    //计算出连续页码的起始与终止数字
    startPageAndEndPage() {
      const { continues, totalPage, pageNo } = this;
      let start = 0;
      let end = 0;
      if (totalPage < continues) {
        start = 1;
        end = totalPage;
      } else {
        start = pageNo - Math.floor(continues / 2);
        end = pageNo + Math.floor(continues / 2);
        if (start < 1) {
          start = 1;
          end = continues;
        }
        if (end > totalPage) {
          start = totalPage - continues + 1;
          end = totalPage;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
