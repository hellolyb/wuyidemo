<template>
  <div class="title">
    <span>{{ title }}</span>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, toRefs, watchEffect, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { obj } from '@/utils/navTitle'
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({})
let title = ref('')
router.beforeEach((to) => {
  title.value = obj[to.name]
})
// 方法部分
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss">
.title {
  width: 100%;
  line-height: 35px;
  padding-left: 10px;
  box-shadow: 0 0 5px 0 #bfc9ca;
  span {
    border-left: 3px solid #2ecc71;
    padding-left: 10px;
  }
}
</style>
