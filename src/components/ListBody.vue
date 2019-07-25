<template>
  <el-table
    :data="items"
    style="width: 100%">
    <el-table-column
      prop="parcelId"
      label="运单号"
      width="">
    </el-table-column>
    <el-table-column
      prop="name"
      label="收件人"
      width="">
    </el-table-column>
    <el-table-column
      prop="tele"
      label="电话">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态">
      {{status}}
    </el-table-column>
    <el-table-column
      prop="getPaecelTime"
      label="预约时间">
    </el-table-column>
    <el-table-column>
      <el-button
        size="mini"
        @click="">确认收货
      </el-button>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "ListBody",
    data() {
      return {
        parcelStatus: ['未预约', '已预约', '已取件']
      }
    },
    computed: {
      items() {
        return this.$store.state.items
      },
    },
    methods: {
      changeStatus(prop) {
        return this.parcelStatus[prop]
      },
      status(){
        return this.row.prop
      }
    }
  }
</script>

<style scoped>

</style>
