<template>
  <div class="home">
    <el-container>
      <el-header><headerTop></headerTop></el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, toRefs, watchEffect, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import headerTop from '@/components/headerTop.vue'
// 仓库
const test = useCounterStore()
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
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  .el-header {
    background-color: #2d3a4b;
  }
  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .el-container {
    height: 100vh;
  }
}
</style>
