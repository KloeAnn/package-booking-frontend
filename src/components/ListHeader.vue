<template>
    <div>
        <p>菜鸟驿站</p>
      <el-button type="info" plain @click="showAll">All</el-button>
      <el-button type="info" plain @click="showReserved">已预约</el-button>
      <el-button type="info" plain @click="showUnReserved">未预约</el-button>
      <el-button type="info" plain @click="showTaken">已取件</el-button>
      <el-button type="info" plain>添加</el-button>
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

      },
      computed:{

      }
    }
</script>

<style scoped>

</style>
