<template>
  <div class="module-two"></div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("moduleFourStore", ["list"])
  }
};
</script>
<style lang="sass" scoped></style>
