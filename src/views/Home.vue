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
  }
}
</script>
