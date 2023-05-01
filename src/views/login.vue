<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login">
    <div class="Cbox">
      <h3>梦学谷会员管理系统</h3>
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" status-icon>
        <el-form-item label="账号" prop="username">
          <el-input v-model="ruleForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" show-password />
        </el-form-item>
        <el-form-item label-width="50px">
          <el-button type="primary" @click="submitForm(ruleFormRef)"> 登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { getloginApi } from '@/utils/api'
import { useCounterStore } from '@/stores/counter'
// 仓库pinia实例
const Test = useCounterStore()
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  username: '',
  password: ''
})
const rules = reactive<FormRules>({
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
// 方法部分
// 登录校验
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      getloginApi(ruleForm).then((res: any) => {
        console.log(res)
        if (res.data.flag === true) {
          // 存入pinia仓库
          Test.token = res.data.data.token
          localStorage.setItem('token', res.data.data.token)
          router.push('/home')
        }
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}

watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background-image: url(http://vue.mengxuegu.com/img/login.b665435f.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
  .Cbox {
    width: 300px;
    height: 200px;
    padding: 20px;
    border-radius: 30px;
    background: rgba($color: #fff, $alpha: 0.7);
    h3 {
      text-align: center;
      margin-bottom: 20px;
    }
  }
}
</style>
