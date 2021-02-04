<template>
  <div class="module-one">
    <div class="content-box">
      <h3>欢迎来到我的世界</h3>
      <ul>
        <li
          v-for="(item, index) in [...scrollList, ...scrollList]"
          :key="index"
        >
          <img :src="item.img" alt="" srcset="" class="image" />
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
    <div class="xi-ding">
      <div class="xi-ding-child">
        <h6>自我介绍</h6>
        <p>汉光武帝刘秀(东汉光武帝)</p>
        <div>
          刘秀是汉高祖刘邦的九世孙，出自汉景帝子长沙定王刘发一脉，刘秀的先世，因遵行“推恩令”的原则而从列侯递降。到他父亲刘钦这一辈，只是济阳县县令这样的小官员了
          西汉建平元年十二月初六（前5年1月15日），刘秀出生在陈留郡济阳县济阳宫后殿第二间屋里。
          [2] [9]
          他出生的当晚没有灯火，却有赤光照耀整个房间。父亲感到奇怪，立即召来功曹史充兰，派他去问会占卜的人。充兰与马下卒苏永一起去卜人王长孙的住所。王长孙卜卦后，对苏永和充兰说：“这是件吉利的事情，不用多说了。”这年，在刘钦房前栽景天的地方有小米长了出来，共有三株，每株一根茎九个穗，比一般小米要长一二尺，真是好小米。父亲刘钦因此为其取名为“秀”。
          [2] [3-4]
          关于刘秀的长相，史书记载说他身长七尺三寸，美髯眉，大口隆准，比众不同。
          [10] 元始三年（3年），父亲刘钦在南顿县（在今河南项城市）县令任上去世，
          [1]
          年仅9岁的刘秀与兄妹便成了孤儿，生活无依，被远在南阳郡蔡阳县（今湖北枣阳）的叔父刘良所抚养，成了普通的平民。
          由于刘秀勤于农事，而其兄刘縯好侠养士，经常取笑刘秀，将他比做刘邦的兄弟刘喜。新朝天凤年间（14年―19年），刘秀到长安，学习《尚书》，略通大义
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import a from "@/assets/images/a.jpg";
import b from "@/assets/images/b.jpg";
import c from "@/assets/images/c.gif";
import d from "@/assets/images/d.jpg";
import e from "@/assets/images/e.jpg";
import f from "@/assets/images/f.jpg";
import g from "@/assets/images/g.gif";

export default {
  data() {
    return {
      scrollList: [
        {
          img: a,
          name: "我是A"
        },
        {
          img: b,
          name: "我是B"
        },
        {
          img: c,
          name: "我是C"
        },
        {
          img: d,
          name: "我是D"
        },
        {
          img: e,
          name: "我是E"
        },
        {
          img: f,
          name: "我是F"
        },
        {
          img: g,
          name: "我是G"
        }
      ]
    };
  },
  computed: {
    ...mapGetters("moduleOneStore", ["list", "item"])
  },
  methods: {},
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
    // background-size: 100% 100%;
    background-size: cover;
  }
  ul {
    position: relative;
    top: 0px;
    left: 0px;
    display: flex;
    animation: mymove 10s infinite linear;
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
  .xi-ding {
    height: 660px;
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
}
</style>
