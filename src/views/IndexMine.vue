<script>
import MineGrid from '../components/MineGrid.vue'
import { ref } from 'vue';
import { useFileStore } from '../../stores/file';
export default {
  data() {
    return {
      setting: new URL("/src/assets/images/setting.png", import.meta.url).href,
      saomiao: new URL("/src/assets/images/saomiao.png", import.meta.url).href,
      night: new URL("/src/assets/images/night.png", import.meta.url).href,
      message: new URL("/src/assets/images/message.png", import.meta.url).href,
      userName: "点击登录",
      show: false,
      index: 0,
      headPic: "https://img.yzcdn.cn/vant/cat.jpeg",
      themeVars: {
        popupBackgroundColor: '#00000000',   //背景透明
        buttonPlainBackgroundColor: '#00000000'
      }
    }
  },
  setup() {
    const checked = ref(true);
    return {
      checked
    };
  },
  methods: {
    getAssetsImages(name) {
      return new URL(`/src/assets/images/${name}`, import.meta.url).href;
    },
    lookHead() {
      this.show = true;
    },
    downloadIamge() {
      var toast = this.$toast;
      var pic = this.headPic;
      this.$plus(() => {
        // 创建下载任务
        var picurl = this.headPic;
        //图片保存到手机后的路径
        var picname = "_downloads/" + pic.substring(pic.lastIndexOf("/") + 1);
        var dtask = plus.downloader.createDownload(picurl, {}, function (d, status) {
          // 下载完成
          if (status == 200) {
            plus.gallery.save(picname, function () {//保存到相册方法
              toast({
                message: '已保存到相册',
                position: 'bottom',
              });
            }, function (error) {
              toast({
                message: error.message,
                position: 'bottom',
              });
            });
          } else {
            toast({
              message: '下载失败：' + status,
              position: 'bottom',
            });
          }
        });
        dtask.start();//开始下载
      })
    },
    onclick() {
      this.$router.push({ name: 'MineSet' })
    }
  },
  components: {
    MineGrid
  },
  mounted() {
    const store = useFileStore();
    this.userName = store.user.username;
  }

}
</script>

<template>
  <div>
    <van-config-provider :theme-vars="themeVars">
      <van-popup v-model:show="show" :safe-area-inset-bottom="true">
        <div style="display: flex; flex-direction: column;">
          <van-image fit="cover" width="150px" height="150px" :src="headPic" class="margin-bottom" />
          <van-button plain color="#00000055" style="width: 100%;" @click="downloadIamge">
            <span style="color: #ffffff;">保存图片</span>
          </van-button>
        </div>
      </van-popup>
      <div class="cover">
        <van-icon :name="setting" class="set" size="25px" @click="onclick"/>
        <van-icon :name="saomiao" class="saomiao" size="20px" />
        <van-icon :name="night" class="night" size="30px" />
        <van-icon :name="message" class="message" size="25px" />
        <van-image round fit="cover" width="100px" height="100px" :src="headPic" @click="lookHead" />
        <div>
          {{ userName }}
        </div>
      </div>
      <mine-grid></mine-grid>
    </van-config-provider>
  </div>
</template>

<style scoped>
.cover {
  position: relative;
  text-align: center;
  padding: 50px;
  background-color: rgb(139, 108, 108);
  color: white;
}

.set {
  position: absolute;
  left: 330px;
  bottom: 188px;
  z-index: 2;
}

.saomiao {
  position: absolute;
  bottom: 190px;
  left: 295px;
}

.night {
  position: absolute;
  bottom: 185px;
  left: 250px;
}

.message {
  position: absolute;
  bottom: 188px;
  left: 10px;
}

.margin-bottom {
  margin-bottom: 100%;
}
</style>