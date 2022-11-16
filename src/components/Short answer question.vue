<template>
    <!-- 建议 -->
    <div class="recommen" v-if="data.sexFlg=='0' || sex==data.sexFlg">
      <span v-show="data.isRequired=='1'" class="isMust">*</span>
      <p class="recommen-title">
        {{data.orderNum}}、
        {{data.title}}
      </p>
      <div class="textarea-content">
        <textarea name="test" id="recomsg" cols="40" rows="10" v-model="inputval">
        </textarea>
        <span style="display: block; text-align: right; margin-right: 6%"
          >您还可以输入{{ this.inputval==null?'100':this.titleMaxLength - this.inputval.length }}字</span
        >
      </div>
    </div>
  </template>
   
  <script>
  export default {
    name: "recommend",
    data() {
      return {
        checked1: [],
        inputval: "",
        titleMaxLength: 100,
        // 性别
        sex:'0',
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
      // 获取性别
      this.sex=this.$route.query.sex;
      // 处理题目根据性别显隐 性别 1 男 2 女 0无限
   
    },
    methods: {
      choosMultdata(val) {
        this.$emit("getMultvalue", val);
      },
    },
    watch: {
      inputval(val) {
        // if (this.inputval.length > this.titleMaxLength) {
        //   this.inputval = String(this.inputval).slice(0, this.titleMaxLength);
        // }
        this.$emit("getrecommendvalue", val);
      },
    },
  };
  </script>
  <style lang="scss" scoped>
  .recommen {
    position: relative;
    .isMust {
      position: absolute;
      font-size: 0.56rem;
      color: #f35757;
      font-weight: initial;
      top: -0.11rem;
        left: -3px;
    }
    #recomsg {
      background-color: #f6f6f6;
      border: unset;
      width: 87%;
    }
    .recommen-title {
      margin-left: 3%;
    }
    .textarea-content {
      width: 100%;
      text-align: center;
    }
  }
  </style>