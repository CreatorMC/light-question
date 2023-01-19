<script>
export default {
  name: "Book",
  data() {
    return {
      loading: false,
      finished: true,
      refreshing: false,
      list: [],
      themeVars: {
        cellLineHeight: "3em"
      },
    }
  },
  methods: {
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    onLoad() {
      const id = "0101";
      this.$axios.get(this.$springbooturl + `/api/Data/getQuestionBank/${id}`).then((response) => {
        if(response.data) {
          this.list = response.data;
        }
        this.refreshing = false;
        this.loading = false;
        this.finished = true;
      });
    },
    onClick(item) {
      this.$router.push(
        {
          'path': '/question',
          'query': item
        }
      );
    }
  },
  mounted() {
    this.onRefresh();
  }
}
</script>

<template>
  <div>
    <van-config-provider :theme-vars="themeVars">
      <van-nav-bar title="秘籍" :fixed="true" :placeholder="true"/>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          class="container-height"
          v-model:loading="loading"
          :finished="finished"
          loading-text=" "
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell-group inset v-for="item in list" :key="item" class="box-margin box-shadow" >
            <van-cell icon-prefix="question-left-icon" :icon="this.$domain + item.icon" :title="item.title" value="" :label="item.label" :is-link="true" :center="true" @click="onClick(item)" />
          </van-cell-group>
        </van-list>
      </van-pull-refresh>
    </van-config-provider>
  </div>
</template>

<style scoped>
.box-margin {
  margin-top: 20px;
}
.box-shadow {
  box-shadow: 0px 3px #cccccc;
}
.container-height {
  min-height: 500px;
}
</style>

<style>
.question-left-icon {
  width: 4em;
  height: 4em;
}
.question-left-icon img {
  width: 4em !important;
  height: 4em !important;
  border-radius: 10px;
}
.box-margin div .van-cell__title {
  flex: auto !important;
}
</style>