<template>
  <div class="home">
    <ListHeader></ListHeader>
    <ListBody></ListBody>
  </div>
</template>

<script>
import ListHeader from "../components/ListHeader";
import ListBody from "../components/ListBody";
export default {
  name: 'home',
  components: {
    ListBody,
    ListHeader
  },
  methods:{
    getItemList(){
      this.$store.dispatch('getList')
     // console.log(this.$store.state.items)
    }
  },
  mounted() {
    this.getItemList()
  }
}
</script>
