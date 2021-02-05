<template>
  <div class="drag-config">
    <el-checkbox-group v-model="checkList">
      <draggable v-model="dragList">
        <transition-group>
          <div v-for="(element, index) in dragList" :key="index">
            <div class="item-edit">
              <div class="drag-icon">
                <img src="@/assets/images/drag.png" alt="" srcset="" />
                <img src="@/assets/images/point.png" alt="" srcset="" />
              </div>
              <el-checkbox :label="element">
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
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "DragConfig",
  components: {
    draggable
  },
  data() {
    return {
      dragList: [
        {
          label: "语文课程",
          checked: false
        },
        {
          label: "数学课程",
          checked: false
        },
        {
          label: "英语课程",
          checked: false
        },
        {
          label: "物理课程",
          checked: false
        },
        {
          label: "化学课程",
          checked: false
        },
        {
          label: "体育课程",
          checked: false
        }
      ],
      checkList: []
    };
  },
  computed: {},
  watch: {},
  methods: {},
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
}
</style>
