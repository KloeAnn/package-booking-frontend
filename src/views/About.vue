<template>
  <div class="about">
    <h1>预约取件</h1>
    <el-select v-model="value" placeholder="请选择运单号">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div class="block">
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="选择取件时间">
      </el-date-picker>
    </div>
    <el-button>
      预约
    </el-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value1: ''
      }
    }
  }
</script>
