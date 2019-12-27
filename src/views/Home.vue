<style scoped lang="scss">

</style>
<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Home Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions } from 'vuex';
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods:{
    ...mapActions({
      fetchIdcardInfo:"fetchIdcardInfo"
    })
  },
  mounted(){
    this.fetchIdcardInfo();
  }
}
</script>
