<template>
  <div class="module-three">
    <div class="content-box">
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
          name: ""
        },
        {
          img: b,
          name: ""
        },
        {
          img: c,
          name: ""
        },
        {
          img: d,
          name: ""
        },
        {
          img: e,
          name: ""
        },
        {
          img: f,
          name: ""
        },
        {
          img: g,
          name: ""
        }
      ]
    };
  },
  computed: {
    ...mapGetters("moduleFourStore", ["list"])
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.module-three {
  .content-box {
    width: 600px;
    height: 200px;
    overflow: hidden;
    border: 1px solid #ccc;
  }
  ul {
    position: relative;
    top: 0px;
    left: 0px;
    display: flex;
    animation: mymove 1s infinite linear;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      .image {
        width: 300px;
        height: 200px;
        border-radius: 10px;
      }
    }
  }
  @-webkit-keyframes mymove {
    from {
      left: 0px;
    }
    to {
      left: -100px;
    }
  }
}
</style>
