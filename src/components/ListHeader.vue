<template>
    <div>
        <p>菜鸟驿站</p>
      <el-button type="info" plain @click="showAll">All</el-button>
      <el-button type="info" plain @click="showReserved">已预约</el-button>
      <el-button type="info" plain @click="showUnReserved">未预约</el-button>
      <el-button type="info" plain @click="showTaken">已取件</el-button>
      <el-button type="info" plain @click="addParcel">添加</el-button>
    </div>
</template>

<script>
    export default {
        name: "ListHeader",
        data(){
          return{
            showType:''
          }
        },
      methods:{
        showAll(){

        },
        showReserved(){

        },
        showUnReserved(){

        },
        showTaken(){

        },
        addParcel(){
          // this.$prompt('请输入邮箱', '提示', {
          //   confirmButtonText: '确定',
          //   cancelButtonText: '取消',
          // }).then(({ value }) => {
          //   this.$message({
          //     type: 'success',
          //     message: '你的邮箱是: ' + value
          //   });
          // }).catch(() => {
          //   this.$message({
          //     type: 'info',
          //     message: '取消输入'
          //   });
          // });
        }
      },
      computed:{

      }
    }
</script>

<style scoped>

</style>
