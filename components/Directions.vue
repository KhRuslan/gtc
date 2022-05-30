<template>

  <div class="w-full flex ">
    <ul class="w-full h-full flex mb-14 grid gap-4 grid-cols-3">
      <directions-item

        v-for="directionItem in directionItems"
        :key="directionItem.id"
        :directionItem="directionItem"
      >

      </directions-item>
    </ul>
  </div>
</template>

<script>
import DirectionsItem from "~/components/DirectionsItem";
export default {
  name: "Directions",
  components:{
    DirectionsItem
  },
  props:{
    directionItems:{
      type:Array,
      required:true,
    },
  }
}
</script>

<style scoped>

</style>
