<template>
  <div
    class="font-i-eb space-x-5  flex mb-4 lg:text-4xl"
    style=" line-height: 100%; color: #5845CF;"
  >
    <img :src="require('../pages/img/' + achievementItem.img)" width="40px" height="40px" alt="">
    <div>
      <h2
        class="font-i-eb lg:text-3xl lg:leading-7 "
        style="color: #404056; "
      >
        {{achievementItem.title}}
      </h2>
      <h3
        class="font-sf-r lg:text-base text-xs"
        style=" color: #989898; line-height: 26px;"
      >
        {{achievementItem.description}}

      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "AchievementsItem",
  props:{
    achievementItem:{
      type:Object,
      required:true,
    }
  }
}
</script>

<style scoped>

</style>
