<template>
  <div class="elmenu">
    <el-col>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        :default-active="$route.path"
        text-color="#fff"
        router
      >
        <el-menu-item index="/homes">
          <el-icon><HomeFilled /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/member">
          <el-icon><Avatar /></el-icon>
          <span>会员管理</span>
        </el-menu-item>
        <el-menu-item index="/supplier">
          <el-icon><Briefcase /></el-icon>
          <span>供应商管理</span>
        </el-menu-item>
        <el-menu-item index="/goods">
          <el-icon><GoodsFilled /></el-icon>
          <span>商品管理</span>
        </el-menu-item>
        <el-menu-item index="/staff">
          <el-icon><UserFilled /></el-icon>
          <span>员工管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, toRefs, watchEffect, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({})
// 方法部分
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss"></style>
