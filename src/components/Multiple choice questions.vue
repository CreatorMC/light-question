<template>
    <!-- 复选题目 -->
    <div class="multiple-choice" v-if="data.sexFlg=='0' || sexFlg==data.sexFlg">
      <span v-show="data.isRequired=='1'" class="isMust">*</span>
      <p class="multiple-title">{{data.orderNum}}、{{ data.title }}</p>
      <van-checkbox-group
        @change="choosMultdata"
        v-model="checked1"
        v-for="(item, key, index) in data.optionItems"
        :key="index"
      >
        <van-checkbox shape="square" :name="item" v-if="item.sexFlg=='0' || sexFlg==item.sexFlg"
          >{{ item.title }}
          <div v-show="item.title == '其他'">
            <span class="other-choise">其他</span>
            <span v-show="item.packRequired=='1'" class="isMust other">*</span>
            <van-cell-group inset>
              <van-field v-model="othervalue" />
            </van-cell-group>
          </div>
        </van-checkbox>
      </van-checkbox-group>
    </div>
  </template>
   
  <script>
  export default {
    name: "multipledate",
    data() {
      return {
        checked1: [],
        // 选项其他
        checkedother: false,
        othervalue: "",
        sexFlg:this.$route.query.sex//获取患者性别，选项根据性别匹配（1男2女0不限）
      };
    },
    props: {
      data: {
        type: Object,
      },
    },
    computed: {},
    created() {},
    mounted() {
   
    },
    methods: {
      choosMultdata(val) {
        this.$emit("getMultvalue", val);
      },
    },
    // 监听其他类型数据，传给父组件
    watch: {
      othervalue: {
        handler(val) {
          if (val) {
            this.$emit("getotherVal", val);
          }
        },
      },
    },
  };
  </script>
  <style lang="scss" scoped>
  .multiple-choice {
    position: relative;
    width: 80%;
    .isMust {
      position: absolute;
      font-size: 0.56rem;
      color: #f35757;
      font-weight: initial;
      top: -0.11rem;
      left: -3px;
    }
    .other {
      top: 0;
      right: 1px;
      left: unset;
    }
    .multiple-title {
      margin-left: 3%;
    }
    .other-choise {
      position: absolute;
      top: 0.15rem;
    }
  }
   
  .van-radio {
    margin-bottom: 0.43333rem;
  }
  .van-checkbox {
    margin-bottom: 0.43333rem;
    position: relative;
    height: 0.7rem;
  }
  .van-cell-group--inset {
    margin-left: 0.7rem;
  }
  .van-cell {
    background-color: #f5f5f5;
    height: 120px;
  }
  </style>