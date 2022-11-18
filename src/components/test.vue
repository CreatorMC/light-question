<template>
    <ul>
      <li v-if="info.type==='checkbox'">
        <van-checkbox
          v-for="infoa in childInfo.xx"
          v-model="infoa.ischeck"
          @change="changeCheckbox"
        >{{infoa.nr}}</van-checkbox>
      </li>
      <li v-else-if="info.type==='radio'">
        <van-radio-group v-model="childInfo.answer" @change="changeRadio">
          <van-radio v-for="infoa in childInfo.xx" :name="infoa.id">{{infoa.nr}}</van-radio>
        </van-radio-group>
      </li>
      <li v-else-if="info.type==='input'">
        <van-cell-group>
          <van-field
            v-model="childInfo.answer"
            type="textarea"
            placeholder="请输入不少于100字"
            rows='1'
            autosize
            border="true"
          />
        </van-cell-group>
      </li>
    </ul>
  </template>
   
  <script>
  export default {
    props: ["info", "showtm"],
    data() {
      return {};
    },
    computed: {
      childInfo() {
        var an = this.info["answer"],
          type = this.info["type"];
   
        if (type == "checkbox") {
          for (var i = 0; i < this.info.xx.length; i++) {
            var x = this.info.xx[i];
            if (an.join(",").indexOf(x.id) > -1) x.ischeck = true;
          }
        }
   
        return this.info;
      }
    },
    methods: {
      changeRadio() {
        var a = this.childInfo.answer;
        this.$emit("chooseRadio", a);
      },
      changeCheckbox() {
        var a = [];
        for (var i = 0; i < this.childInfo.xx.length; i++) {
          if (this.childInfo.xx[i]["ischeck"]) a.push(this.childInfo.xx[i]["id"]);
        }
   
        this.$emit("chooseCheckbox", a);
      },
      changeInput() {
        this.$emit("chooseInput", this.childInfo.answer);
      }
    },
    components: {}
  };
  </script>
   
  <style scoped>
  ul li .van-radio,
  .van-checkbox {
    margin: 16px 0px;
  }
  </style>