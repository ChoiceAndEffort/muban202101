<template>
  <div class="lg-drawer" :style="{ width: lgDrawerWidth }" v-if="showLgDrawer">
    <header>
      <div class="title"></div>
      <div class="close-icon" @click="handlerClose">X</div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  name: "LgDrawer",
  props: {
    lgDrawerWidth: {
      type: String,
      required: false,
      default: () => "300px"
    },
    showLgDrawer: {
      type: Boolean,
      required: false,
      default: () => false
    },
    title: {
      type: String,
      required: false,
      default: () => ""
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    handlerClose() {
      this.$emit("update:showLgDrawer", false);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.lg-drawer {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background: #fff;
  border: 1px solid #ccc;
  header {
    height: 40px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  main {
    padding: 10px 20px;
  }
}
</style>
