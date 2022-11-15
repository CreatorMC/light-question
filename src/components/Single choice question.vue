<template>
    <!-- 单选题目 -->
    <div class="Single-choice" v-if="dataObj.sexFlg=='0' || sexFlg==dataObj.sexFlg">
      <span v-show="dataObj.isRequired=='1'" class="isMust">*</span>
      <p class="single-title">{{dataObj.orderNum}}、{{ dataObj.title }}</p>
      <van-form ref="form">
        <van-radio-group
          @change="choosSingle"
          v-model="checked"
          :rules="[{ required: true, message: '请做出选择' }]"
        >
          <van-radio
            v-for="(item, key, index) in dataObj.optionItems"
            v-show="item.sexFlg=='0' || sexFlg==item.sexFlg"
            :key="index"
            :name="item.id"
            >{{ item.title }}</van-radio
          >
        </van-radio-group>
      </van-form>
    </div>
  </template>
   
  <script>
  export default {
    name: "singledate",
    data() {
      return {
        checked: "",
            sexFlg:this.$route.query.sex//获取患者性别，选项根据性别匹配（1男2女0不限）
      };
    },
    props: {
      dataObj: {
        type: Object,
      },
      checkdata: {
        type: Number,
      },
    },
    computed: {},
    created() {},
    mounted() {
      if (this.checkdata) {
        this.checked = this.checkdata;
      }
    },
    methods: {
      choosSingle(val) {
        console.log(val);
        this.$emit("getvalue", val);
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .Single-choice {
    position: relative;
    .isMust {
      position: absolute;
      font-size: 0.56rem;
      color: #f35757;
      font-weight: initial;
      top: -0.11rem;
      left: -3px;
    }
    .single-title {
      margin-left: 3%;
    }
  }
   
  .van-radio {
    margin-bottom: 0.43333rem;
  }
  .van-checkbox {
    margin-bottom: 0.43333rem;
  }
  </style>