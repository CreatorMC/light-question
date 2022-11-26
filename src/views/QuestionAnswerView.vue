<script>
import { Dialog } from 'vant';

export default {
  data() {
    return {
      show: false,    //是否显示顶部弹出层
      item: {},
      questions: [],
      index: 1,
      answers: []     //存用户选择的答案的数组
    }
  },
  methods: {
    onClickLeft() {
      this.show = true;
    },
    onClickRight() {
      var isFinish = true;
      for(let i = 0; i < this.answers.length; i++) {
        if(this.answers[i] == "") {
          isFinish = false;
          break;
        }
      }
      if(!isFinish) {
        Dialog.confirm({
          title: '警告',
          message: '检查到您还有未做完的题，真的要现在提交吗？',
        })
        .then(() => {
          // on confirm
          console.log("确认");
          this.submit();
        })
        .catch(() => {
          // on cancel
          console.log("取消");
        });
      } else {
        this.submit();
      }
    },
    submit() {
      var score = 0;
      var yesCount = 0;
      for(let i = 0; i < this.questions.length; i++) {
        if(this.questions[i].answer == this.answers[i]) {
          score += this.questions[i].fraction;
          yesCount += 1;
        }
      }
      this.$router.push(
        {
          'path': '/questionFinish',
          'query': {
            item: JSON.stringify(this.item),
            questions: JSON.stringify(this.questions),
            score: JSON.stringify(score),
            yesCount: JSON.stringify(yesCount)
          }
        }
      );
    },
    selectQuestion(i) {
      this.index = i + 1;
    }
  },
  mounted() {
    this.item = JSON.parse(this.$route.query.item);
    this.questions = JSON.parse(this.$route.query.questions);
    for(let i = 0; i < this.questions.length; i++) {
      this.answers.push("");
    }
  }
}
</script>

<template>
  <div class="fix">
    <van-popup v-model:show="show" position="top" :style="{ height: '30%' }" round>
      <div class="container-top">
        <div 
          v-for="(value, i) in questions"
          :class="'top-icon' + (answers[i] == '' ? '' : ' top-icon-do') + (i+1 == index ? ' top-icon-now' : '')"
          @click="selectQuestion(i)"
        >
          {{ value.number }}
        </div>
      </div>
    </van-popup>
    <van-nav-bar
      :title="item.title"
      :fixed="true"
      left-text="选题"
      right-text="交卷"
      class="line-bottom"
      :z-index="100"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="container" v-if="!!questions[index - 1]">
      <p>{{ questions[index - 1].number + "." + questions[index - 1].topic }}</p>
      <van-form>
        <van-field name="radio">
          <template #input>
            <van-radio-group v-model="answers[index - 1]" style="width: 100%;">
              <van-radio class="option-padding" name="A">
                {{ questions[index - 1].optionA }}
                <template #icon="props">
                  <div :class="'radio-icon' + (props.checked ? ' radio-icon-checked' : '')">A</div>
                </template>
              </van-radio>
              <van-radio class="option-padding" name="B">
                {{ questions[index - 1].optionB }}
                <template #icon="props">
                  <div :class="'radio-icon' + (props.checked ? ' radio-icon-checked' : '')">B</div>
                </template>
              </van-radio>
              <van-radio class="option-padding" name="C">
                {{ questions[index - 1].optionC }}
                <template #icon="props">
                  <div :class="'radio-icon' + (props.checked ? ' radio-icon-checked' : '')">C</div>
                </template>
              </van-radio>
              <van-radio class="option-padding" name="D">
                {{ questions[index - 1].optionD }}
                <template #icon="props">
                  <div :class="'radio-icon' + (props.checked ? ' radio-icon-checked' : '')">D</div>
                </template>
              </van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </van-form>
    </div>
    <van-pagination
      class="fix-bottom"
      v-model="index"
      :page-count="questions.length"
      :show-page-size="3"
      prev-text="上一题"
      next-text="下一题"
      force-ellipses
    />
  </div>
</template>

<style scoped>
.container {
  position: relative;
  margin-top: 56px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  border-radius: 30px;
  background: #ffffffa2;
  z-index: 1;
}
.fix {
  position: fixed;
  width: 100%;
  left: 0px;
  top: 0px;
  height: 100%;
}
.fix-bottom {
  position: fixed;
  width: 100%;
  left: 0px;
  bottom: 0px;
  z-index: 100;
}
.option-padding {
  padding-bottom: 20px;
}
.radio-icon {
  width: 1.25em;
  height: 1.25em;
  border-radius: 100%;
  font-size: 0.8em;
  font-weight: bold;
  color: #ee0a24;
  text-align: center;
  line-height: 1.3em;
  border: 1px solid var(--van-radio-border-color);
}
.radio-icon-checked {
  color: #ffffff;
  border-color: rgb(238, 10, 36);
  background-color: rgb(238, 10, 36);
}
.container-top {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
}
.top-icon {
  width: 2em;
  height: 2em;
  border-radius: 100%;
  font-size: 1em;
  font-weight: bold;
  line-height: 2em;
  text-align: center;
  color: #ee0a24;
  border: 1px solid var(--van-radio-border-color);
  margin-left: 1em;
  margin-top: 1em;
}
.top-icon-do {
  color: #ffffff;
  border-color: rgb(238, 10, 36);
  background-color: rgb(238, 10, 36);
}
.top-icon-now {
  color: #ffffff;
  border-color: #1989fa;
  background-color: #1989fa;
}
</style>