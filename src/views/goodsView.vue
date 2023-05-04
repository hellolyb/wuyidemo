<template>
  <div class="goods">
    <div class="searCh">
      <searCh>
        <template #Search>
          <el-form :inline="true" :model="formInline" ref="formInlineRef" class="demo-form-inline">
            <el-form-item prop="cardNum">
              <el-input v-model="formInline.code" placeholder="会员卡号" />
            </el-form-item>
            <el-form-item prop="name">
              <el-input v-model="formInline.name" placeholder="会员姓名" />
            </el-form-item>
            <el-form-item prop="name">
              <el-input v-model="formInline.supplierName" placeholder="供应商" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
              <el-button type="primary">新增</el-button>
              <el-button @click="resetForm(formInlineRef)">重置</el-button>
            </el-form-item>
          </el-form>
        </template>
      </searCh>
    </div>
    <div class="table">
      <tableMain>
        <template #table>
          <el-table :data="tableData" height="250" style="width: 100%">
            <el-table-column prop="id" label="序号"></el-table-column>
            <el-table-column prop="name" label="商品名称"></el-table-column>
            <el-table-column prop="code" label="商品编码"></el-table-column>
            <el-table-column prop="spec" label="商品规格"></el-table-column>
            <el-table-column prop="retailPrice" label="零售价"></el-table-column>
            <el-table-column prop="purchasePrice" label="进货价"></el-table-column>
            <el-table-column prop="storageNum" label="库存数量"></el-table-column>
            <el-table-column prop="supplierName" label="供应商"></el-table-column>
            <el-table-column label="操作">
              <el-button>编辑</el-button> <el-button type="danger">删除</el-button>
            </el-table-column>
          </el-table>
        </template>
      </tableMain>
    </div>
    <PaginAtion :totals="totals"></PaginAtion>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, toRefs, watchEffect, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import searCh from '@/components/searCh.vue'
import tableMain from '@/components/tableMain.vue'
import PaginAtion from '@/components/PaginAtion.vue'
import { getgoodsApi } from '@/utils/api'
import type { FormInstance } from 'element-plus'
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const formInlineRef = ref<FormInstance>()
const formInline = reactive({
  code: '',
  name: '',
  supplierName: ''
})
const tableData = ref([])
const totals = ref(0)
// 方法部分
const getgoods = () => {
  getgoodsApi().then((res: any) => {
    tableData.value = res.data.data.rows
    totals.value = res.data.data.total
  })
}
getgoods()
const onSubmit = () => {
  console.log('submit!')
}
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss"></style>
