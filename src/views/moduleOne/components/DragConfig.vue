<template>
  <div class="drag-config">
    <el-checkbox-group v-model="checkList" @change="handlerChange" :max="4">
      <draggable v-model="dragList">
        <transition-group>
          <div v-for="element in item" :key="element.type">
            <div class="item-edit">
              <div class="drag-icon">
                <img src="@/assets/images/drag.png" alt="" srcset="" />
                <img src="@/assets/images/point.png" alt="" srcset="" />
              </div>
              <el-checkbox :label="element.type">
                <el-input
                  v-model.trim="element.label"
                  :maxlength="8"
                ></el-input>
              </el-checkbox>
            </div>
          </div>
        </transition-group>
      </draggable>
    </el-checkbox-group>
    <div class="footer">
      <el-button type="info" plain @click="handlerConfirm">保存</el-button>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { mapGetters } from "vuex";
export default {
  name: "DragConfig",
  components: {
    draggable
  },
  data() {
    return {
      dragList: [],
      checkList: []
    };
  },
  computed: {
    ...mapGetters("moduleOneStore", ["item"])
  },
  watch: {
    item: {
      handler(nv) {
        this.dragList = [...nv];
        this.checkList = nv.filter(item => item.checked).map(el => el.type);
        console.log(this.checkList);
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handlerChange() {
      this.dragList.forEach(item => {
        if (this.checkList.includes(item.type)) {
          item.checked = 1;
          return;
        }
        item.checked = 0;
      });
    },
    handlerConfirm() {
      this.$store
        .dispatch("moduleOneStore/updateConfig", this.dragList)
        .finally(() => {
          this.$emit("update", false);
        });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.drag-config {
  .item-edit {
    padding: 10px 10px 25px;
    border: 1px solid #ccc;
    margin-top: 10px;
    border-radius: 10px;
    background: #bbb2b2;
    .drag-icon {
      display: flex;
      justify-content: space-between;
      padding: 5px 5px;
    }
  }
  .footer {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
