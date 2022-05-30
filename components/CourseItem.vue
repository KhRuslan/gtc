<template>
  <div
    class=" lg:h-20 w-36 rounded-lg	py-2"
    style="background:#141518"
  >
    <div class="flex flex-col justify-center items-center">
      <img
        :src="require('../pages/img/' + courseItem.img)"
        style="max-width:24px"

      />
    </div>
    <h2 class="font-sf-m text-white text-center  lg:text-xs" style="">
      {{courseItem.title}}
    </h2>
    <p
      class="font-sf-sb  text-center lg:text-xs"
      style="; color:#5845CF"
    >
      {{courseItem.description}}
    </p>
  </div>
</template>

<script>
export default {
  name: "CourseItems",
  props:{
    courseItem:{
      type:Object,
      required:true,
    }
  }
}
</script>

<style scoped>

</style>
