<template>
  <div class="module-one">
    <div class="content-box">
      <h3>欢迎来到我的世界</h3>
      <ul class="anmatioan-top">
        <li
          v-for="(item, index) in [...scrollList, ...scrollList]"
          :key="index"
        >
          <img :src="item.img" alt="" srcset="" class="image" />
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="xi-ding">
        <div class="xi-ding-child">
          <h6>介绍</h6>
          <p>汉光武帝刘秀(东汉光武帝)</p>
          <div>{{ INFOMATION }}</div>
        </div>
      </div>
      <div class="config-area">
        <div class="operate-config">
          <btn-operate @click="handlerShowConfig" btnName="配置区域" />
          <lg-drawer :show-lg-drawer.sync="showLgDrawer">
            <drag-config @update="handlerChangeDragList" />
          </lg-drawer>
        </div>
        <div class="show-config-area">
          <div class="area-top">
            <div class="avator">
              <img
                src="@/assets/images/leader.jpg"
                alt=""
                srcset=""
                style="width:60px;height:60px;border-radius:40px"
              />
              <div style="margin-left:20px;">
                <p>刘秀</p>
                <p>位面之子</p>
              </div>
            </div>
            <ul class="tab-ul">
              <template
                v-for="(item, index) in showConfiglist.length
                  ? showConfiglist
                  : defaultConfigList"
              >
                <li
                  :key="index"
                  v-if="item.checked"
                  @click="handlerOpreateConfig(item.type)"
                >
                  <p :class="{ tabActive: type === item.type }">
                    {{ item.label }}
                  </p>
                </li>
              </template>
            </ul>
          </div>
          <div class="area-main">
            <!-- 这个地方故意交叉下,让数学课程展示图表 -->
            <tab1 v-if="type === 2" />
            <tab2 v-if="type === 1" />
            <tab3 v-if="type === 3" />
            <tab4 v-if="type === 4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { scrollList, INFOMATION } from "./constants";
import BtnOperate from "@/utils/btnOperate";
import LgDrawer from "@/components/LgDrawer";
import DragConfig from "./components/DragConfig";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3";
import Tab4 from "./components/Tab4";
export default {
  components: {
    BtnOperate,
    LgDrawer,
    DragConfig,
    Tab1,
    Tab2,
    Tab3,
    Tab4
  },
  data() {
    return {
      scrollList, //头部动画滚动展示的列表
      INFOMATION,
      showLgDrawer: false, //是否展示抽屉
      defaultConfigList: [
        {
          label: "语文课程",
          checked: true,
          type: 1
        },
        {
          label: "数学课程",
          checked: true,
          type: 2
        },
        {
          label: "英语课程",
          checked: true,
          type: 3
        },
        {
          label: "物理课程",
          checked: true,
          type: 4
        },
        {
          label: "化学课程",
          checked: false,
          type: 5
        },
        {
          label: "体育课程",
          checked: false,
          type: 6
        }
      ],
      showConfiglist: [], //展示配置的数据
      type: 1 //区分展示内容
    };
  },
  computed: {
    ...mapGetters("moduleOneStore", ["list", "item"])
  },
  methods: {
    //显示配置的抽屉
    handlerShowConfig() {
      this.showLgDrawer = true;
    },
    //关闭配置抽屉给页面传递数据
    handlerChangeDragList(value) {
      this.showConfiglist = value;
      this.showLgDrawer = false;
    },
    //点击展示配置的区域
    handlerOpreateConfig(type) {
      this.type = type;
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.module-one {
  .content-box {
    width: 100%;
    overflow: hidden;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  h3 {
    text-align: center;
    line-height: 60px;
    font-size: 30px;
    background: url("../../assets/images/top.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .anmatioan-top {
    position: relative;
    top: 0px;
    left: 0px;
    display: flex;
    // animation: mymove 10s infinite linear;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .image {
        width: 300px;
        height: 200px;
        border-radius: 10px;
        border: 1px solid #ccc;
      }
    }
  }
  @-webkit-keyframes mymove {
    from {
      left: 0px;
    }
    to {
      left: -2100px;
    }
  }
  .content {
    display: flex;
  }
  .xi-ding {
    height: 650px;
    width: 200px;
    border: 1px solid #ccc;
    overflow-y: auto;
    border-radius: 10px;
    margin-top: 10px;
    .xi-ding-child {
      h6 {
        height: 60px;
        text-align: center;
        line-height: 60px;
      }
      p {
        position: sticky;
        top: 0;
        height: 40px;
        line-height: 40px;
        background: coral;
        text-align: left;
        text-indent: 4px;
      }
    }
  }

  .config-area {
    width: calc(100% - 200px);
    padding: 20px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin: 10px 0 0 10px;
    .show-config-area {
      width: 100%;
      margin-left: 30px;

      .area-top {
        display: flex;
        justify-content: space-between;
        border: 1px solid #ccc;
        padding: 10px 30px;
        border-radius: 10px;
        .avator {
          display: flex;
        }
        p {
          margin-bottom: 10px;
        }
      }
      ul {
        display: flex;
        // width: 60%;
        height: 60px;
        // border: 1px solid #ccc;
        border-radius: 10px;
        li {
          padding: 20px 0px 20px 50px;
          cursor: pointer;
          display: flex;
          justify-content: center;
        }
        li::after {
          content: "";
          width: 1px;
          height: 20px;
          background: #ccc;
          margin-left: 50px;
        }
        li:last-of-type::after {
          content: "";
          width: 0px;
          height: 0px;
        }
      }
    }
  }
  .area-main {
    margin-top: 20px;
  }
  .tab-ul {
    .tabActive {
      height: 24px;
      border-bottom: 1px solid rgb(250, 75, 75);
    }
  }
}
</style>
