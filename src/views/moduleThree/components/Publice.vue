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
      <el-button @click="dialogFormVisible = false">取 消</el-button>
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
        this.$store
          .dispatch("moduleThreeStore/add", this.formData)
          .finally(() => {
            this.$emit("update", false);
            this.formData = Object.assign({}, formData);
          });
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.publice {
}
</style>
