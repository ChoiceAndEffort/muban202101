<template>
  <div class="publice">
    <el-form :model="formData" ref="ruleForm" :rules="rules">
      <el-form-item label="朝代名字" prop="name">
        <el-input v-model.trim="formData.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="存在时间" prop="time">
        <el-input v-model.trim="formData.time" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="开国皇帝名字" prop="famous">
        <el-input v-model.trim="formData.famous" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="口号" prop="logo">
        <el-input v-model.trim="formData.logo" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleCancel">取 消</el-button>
      <el-button type="primary" @click="handlerConfirm('ruleForm')"
        >确 定</el-button
      >
    </div>
  </div>
</template>

<script>
import { rules } from "../constants";
const formData = {
  name: "",
  time: "",
  famous: "",
  logo: ""
};
export default {
  name: "Publice",
  components: {},
  props: {
    fromPage: {
      type: Number,
      required: false,
      default: () => 1
    },
    initData: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      formData: Object.assign({}, formData),
      rules
    };
  },
  computed: {},
  watch: {},
  methods: {
    async handlerConfirm(formName) {
      const validate = await this.$refs[formName].validate().catch(() => false);
      if (validate) {
        if (this.fromPage !== 1) {
          this.$store
            .dispatch("moduleThreeStore/update", this.formData)
            .finally(() => {
              this.$emit("update", false);
              this.formData = Object.assign({}, formData);
            });
        } else {
          this.$store
            .dispatch("moduleThreeStore/add", this.formData)
            .finally(() => {
              this.$emit("update", false);
              this.formData = Object.assign({}, formData);
            });
        }
      }
    },
    handleCancel() {
      this.$emit("update", false);
    }
  },
  created() {
    if (this.fromPage === 2) {
      this.formData = Object.assign({}, this.initData);
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.publice {
}
</style>
