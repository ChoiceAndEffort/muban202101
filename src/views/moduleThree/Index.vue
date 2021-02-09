<template>
  <div class="module-three">
    <div style="display:flex; padding:10px;">
      <btn-operate @click="handlerAdd" btnName="新增数据库数据" />
      <btn-operate @click="handlerOpreate" btnName="更改list" />
      <btn-operate @click="handlerOReset" btnName="重置list" />
      <btn-operate @click="handlerRouterPush" btnName="跳到子模块" />
    </div>

    <ul>
      <li v-for="item in list" :key="item.age">
        <span class="item-li ">{{ item.name }}</span>
        <span class="item-li">{{ item.time }}年</span>
        <span class="item-li">{{ item.famous }}皇帝</span>
        <span class="item-li">{{ item.logo }}</span>
      </li>
    </ul>

    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogFormVisible"
      :rules="rules"
      v-if="dialogFormVisible"
    >
      <el-form :model="formData" ref="ruleForm" :rules="rules">
        <el-form-item label="朝代名字" prop="name">
          <el-input v-model.trim="formData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="存在时间" prop="time">
          <el-input v-model.trim="formData.time" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="开国皇帝名字" prop="famous">
          <el-input
            v-model.trim="formData.famous"
            autocomplete="off"
          ></el-input>
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
    </el-dialog>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import BtnOperate from "@/utils/btnOperate";
import { rules } from "./constants";
const newList = [
  {
    name: "张安",
    age: 16
  },
  {
    name: "丽岛",
    age: 18
  }
];
const formData = {
  name: "",
  time: "",
  famous: "",
  logo: ""
};
export default {
  data() {
    return {
      newList: JSON.parse(JSON.stringify(newList)),
      dialogFormVisible: false,
      formData: Object.assign({}, formData),
      dialogTitle: "新增",
      rules
    };
  },
  components: {
    BtnOperate
  },
  computed: {
    ...mapGetters("moduleThreeStore", ["list"])
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$store.dispatch("moduleThreeStore/find", {
        name: "888888888",
        age: 123,
        fromPage: "moduleThree"
      });
    },
    handlerOpreate() {
      this.$store.commit("moduleThreeStore/LIST", this.newList);
    },
    handlerOReset() {
      this.getList();
    },
    handlerRouterPush() {
      this.$router.push({ name: "three-first" });
    },
    handlerAdd() {
      this.dialogFormVisible = true;
      this.dialogTitle = "新增";
    },
    async handlerConfirm(formName) {
      const validate = await this.$refs[formName].validate().catch(() => false);
      if (validate) {
        this.$store
          .dispatch("moduleThreeStore/add", this.formData)
          .finally(() => {
            this.dialogFormVisible = false;
            this.formData = Object.assign({}, formData);
          });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.module-three {
  li {
    margin-bottom: 10px;
  }
  .item-li {
    margin-left: 10px;
    min-width: 80px;
    display: inline-block;
  }
}
</style>
