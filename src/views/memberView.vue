<template>
  <div class="member">
    <div class="searCh">
      <searCh>
        <template #Search>
          <el-form :inline="true" :model="formInline" ref="formInlineRef" class="demo-form-inline">
            <el-form-item prop="cardNum">
              <el-input v-model="formInline.cardNum" placeholder="会员卡号" />
            </el-form-item>
            <el-form-item prop="name">
              <el-input v-model="formInline.name" placeholder="会员姓名" />
            </el-form-item>
            <el-form-item prop="payType">
              <el-select v-model="formInline.payType" placeholder="支付类型">
                <el-option label="现金" value="1" />
                <el-option label="微信" value="2" />
                <el-option label="支付宝" value="3" />
                <el-option label="银行卡" value="4" />
              </el-select>
            </el-form-item>

            <el-form-item prop="birthday">
              <el-date-picker
                v-model="formInline.birthday"
                type="date"
                placeholder="出生日期"
                style="width: 100%"
              />
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
    <div class="tableMain">
      <tableMain>
        <template #table>
          <el-table :data="tableData" border height="250" style="width: 100%">
            <el-table-column prop="id" label="序号"></el-table-column>
            <el-table-column prop="cardNum" label="会员卡号"></el-table-column>
            <el-table-column prop="name" label="会员姓名"></el-table-column>
            <el-table-column prop="birthday" label="会员生日"></el-table-column>
            <el-table-column prop="phone" label="手机号码"></el-table-column>
            <el-table-column prop="integral" label="可用积分"></el-table-column>
            <el-table-column prop="money" label="开卡金额"></el-table-column>
            <el-table-column prop="payType" label="支付类型"></el-table-column>
            <el-table-column prop="address" label="会员地址"></el-table-column>
            <el-table-column label="操作" width="180px">
              <el-button>编辑</el-button>
              <el-button type="danger">删除</el-button>
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
import tableMain from '@/components/tableMain.vue'
import searCh from '@/components/searCh.vue'
import PaginAtion from '@/components/PaginAtion.vue'
import type { FormInstance } from 'element-plus'
import { getmemberApi } from '@/utils/api'
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
// table 表格数据
const tableData = ref([])
const formInlineRef = ref<FormInstance>()
const formInline = reactive({ birthday: '', cardNum: '', name: '', payType: '' })
// 方法部分
// 获取会员管理列表数据
// 数据总数量
const totals = ref(0)
const getmember = () => {
  getmemberApi().then((res: any) => {
    tableData.value = res.data.data.rows
    totals.value = res.data.data.total
  })
}
getmember()
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
