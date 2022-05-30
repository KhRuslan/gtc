<template>
  <li class=" w-full h-full">
    <div class="rounded-md h-full mx-2.5">
      <div class=" mx-auto mb-6  ">
        <img class="mx-auto"  width="56px" height="56px" :src="require('../pages/img/' + directionItem.img)"  alt="">
      </div>
      <p
        class="font-i-sb text-center mb-5 xl:text-2xl "
        style=" color: #404056;"
      >
        {{directionItem.title}}
      </p>
      <p
        class="font-m-r text-center xl:text-base"
        style="color: #989898;"
      >
        {{directionItem.description}}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: "DirectionsItem",
  props:{
    directionItem:{
      type:Object,
      required:true,
    }
  }
}
</script>

<style scoped>

</style>
