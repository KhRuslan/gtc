<template>
  <div>
    <div
      class="v-carousel-item w-full  flex-col mt-10 flex items-center "
    >
      <div>
        <img
          class="mx-auto mt-4"
          :src="require('../pages/img/' + directionItem.img)"
          width="40px"
          height="40px"
        />
        <h2
          id="direction-title"
          class="text-center font-i-sb text-2xl mt-4 "
          style=" color: #404056;"
        >
          {{directionItem.title}}
        </h2>
        <h3
          id="direction-description"
          class="text-center font-m-r text-base  "
          style="color: #989898;"

        >
          {{directionItem.description}}

        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueCarouselDirectionsItem",
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
