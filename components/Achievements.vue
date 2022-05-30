<template>
  <div class="lg:ml-20">
    <achievements-item
      v-for="achievementItem in achievementItems "
      :key="achievementItem.id"
      :achievementItem="achievementItem"
      class=" h-auto ">


    </achievements-item>

  </div>
</template>

<script>
import AchievementsItem from "~/components/AchievementsItem";
export default {
  name: "Achievements",
  components:{
    AchievementsItem
  },
  props:{
    achievementItems:{
      type:Array,
      required:true,
    },
  }
}
</script>

<style scoped>

</style>
