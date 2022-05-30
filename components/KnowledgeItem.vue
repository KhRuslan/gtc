<template>
  <div class="flex">
    <div>
      <img
        :src="require('../pages/img/'+knowledgeItem.img)"
        class="xl:w-14 xl:h-14 w-14 h-12"

      />
    </div>
    <div class="xl:ml-4 ml-1">
      <h2
        class="font-i-b xl:text-xl text-base"
        style="color:#404056; "
      >
        {{ knowledgeItem.title }}
      </h2>
      <h3 class="xl:text-sm text-xs" style="color:#989898; ">
        {{ knowledgeItem.description }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "KnowledgeItem",
  props:{
    knowledgeItem:{
      type:Object,
      required:true
    }
  }

}
</script>

<style scoped>

</style>
