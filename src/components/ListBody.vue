<template>
    <el-table
      :data="items"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="运单号"
        width="">
      </el-table-column>
      <el-table-column
        prop="name"
        label="收件人"
        width="">
      </el-table-column>
      <el-table-column
        prop="telephone"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="gettingTime"
        label="预约时间">
      </el-table-column>
      <el-table-column>
        <el-button
          size="mini"
          @click="handleEdit()">确认收货</el-button>
      </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "ListBody",
      data(){
         return{
           items:[
             {
               id:1,
               name:"lisi",
               telephone:"123456",
               status:"1",
               gettingTime:"111"
             }
           ]
         }
      },
      computed:{
          items(){
            return this.$store.items
          }
      }
    }
</script>

<style scoped>

</style>
