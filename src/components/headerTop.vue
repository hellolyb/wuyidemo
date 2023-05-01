<template>
  <div class="header">
    <div class="loge">
      <img
        src="http://vue.mengxuegu.com/img/logo.7156be27.png"
        alt=""
        style="width: 30px; height: 30px"
      />
      <span> 梦学谷会员管理系统 </span>
    </div>
    <div class="right">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ name }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="revise" :icon="EditPen">修改密码</el-dropdown-item>
            <el-dropdown-item command="outLogin" :icon="Fold">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <!-- 修改密码弹出框 -->
    <el-dialog v-model="dialogFormVisible" title="修改密码" width="500px">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
        status-icon
      >
        <el-form-item label="原密码" prop="ypassword">
          <el-input v-model="ruleForm.ypassword" show-password />
        </el-form-item>
        <el-form-item label="新密码" prop="xpassword" show-password>
          <el-input v-model="ruleForm.xpassword" />
        </el-form-item>
        <el-form-item label="确认密码" prop="password" show-password>
          <el-input v-model="ruleForm.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"> 提交 </el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form></el-dialog
    >
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, toRefs, watchEffect, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { EditPen, Fold, ArrowDown } from '@element-plus/icons-vue'
import { getuserinfo } from '@/utils/api'
import type { FormInstance, FormRules } from 'element-plus'
import { getRevisePwdApi, getlogoutApi } from '@/utils/api'
import { ElMessage } from 'element-plus'
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  ypassword: '', // 原密码
  xpassword: '', // 新密码
  password: '' // 确认密码
})
// 表单校验
const rules = reactive<FormRules>({
  ypassword: [{ required: true, message: '请输入原密码', trigger: 'blur' }],
  xpassword: [{ required: true, message: '请输入新密码', trigger: 'blur' }],
  password: [{ required: true, message: '请确认新密码', trigger: 'blur' }]
})
// 修改密码弹出框状态
const dialogFormVisible = ref(false)
// 获取用户信息
let name = '' // 用户名
let id = '' // 用户id
getuserinfo().then((res: any) => {
  console.log(res)
  name = res.data.data.name
  id = res.data.data.id
})

// 方法部分
const handleCommand = (command: any) => {
  if (command === 'revise') {
    dialogFormVisible.value = true
  } else if (command === 'outLogin') {
    // 退出登录
    getlogoutApi({ token: localStorage.getItem('token') }).then((res: any) => {
      if (res.data.flag === true) {
        ElMessage.success(res.data.message)
        // 清除登录令牌
        localStorage.removeItem('token')
        // 回到登录页面
        router.push('/')
      }
    })
  }
}
// 提交校验
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      getRevisePwdApi({ name, id }).then((res: any) => {
        if (res.data.flag === true) {
          ElMessage.success(res.data.message)
          // 关闭抽屉
          dialogFormVisible.value = false
          // 清除登录令牌
          localStorage.removeItem('token')
          // 从新登录
          router.push('/')
        }
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss">
.header {
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .loge {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
  .el-dropdown-link {
    color: #fff;
  }
}
</style>
