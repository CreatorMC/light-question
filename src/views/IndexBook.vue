<script>
export default {
  data() {
    return {
      loading: false,
      finished: true,
      refreshing: false,
      list: [
        {
          title: "计算机文化基础",
          label: "2020 12 28 模拟题第1套",
          icon: "https://39.98.73.138/IconQuestionBank/default_0.png"
        }
      ],
      themeVars: {
        cellLineHeight: "3em"
        // navBarBackgroundColor: "#89ffb8"
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
      console.log("加载");
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }
        this.loading = false;
        this.finished = true;
      }, 1000);
    }
  }
}
</script>

<template>
  <div>
    <van-config-provider :theme-vars="themeVars">
      <van-nav-bar title="秘籍" :fixed="true" :placeholder="true" class="line-bottom" />
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
            <van-cell icon-prefix="question-left-icon" :icon="item.icon" :title="item.title" value="" :label="item.label" :is-link="true" :center="true" />
          </van-cell-group>
        </van-list>
      </van-pull-refresh>
    </van-config-provider>
  </div>
</template>

<style scoped>
.box-margin {
  margin: 20px;
}
.line-bottom {
  border-bottom: 3px solid #cccccc;
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
</style>