<template>
  <div class="module-three"></div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("moduleFourStore", ["list"])
  },
  created() {}
};
</script>
<style lang="sass" scoped></style>
