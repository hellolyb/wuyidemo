<template>
  <div class="Pagination">
    <el-pagination
      v-model:current-page="data.pageNum"
      v-model:page-size="data.pageSize"
      :page-sizes="[10, 20, 30, 40]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totals"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, toRefs, watchEffect, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// 父传子接收父组件传送的数据
const props = defineProps(['totals'])
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({
  pageNum: 1,
  pageSize: 20
})

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
// 方法部分
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss">
.Pagination {
  margin-top: 10px;
}
</style>
