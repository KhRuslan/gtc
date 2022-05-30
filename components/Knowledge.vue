<template>

  <div  class="w-screen lg:h-auto xl:h-full lg:py-10 xl:pb-72 overflow-hidden	"
        id="why-us">
    <div class=" py-370px flex flex-col justify-center items-center">
      <div>
        <h1 class="font-i-eb xl:text-3xl" style="color:#404056;">
          Чему вы научитесь с
          <span style="color:#5845CF;">нами:</span>
        </h1>
        <br />
        <div
          class="mx-auto xl:w-16 xl:h-2 w-12 h-1"
          style=" background: #404056;"
        ></div>
      </div>
    </div>

    <div
      class="w-full h-auto flex xl:flex-row flex-col justify-center items-center xl:mt-24 mt-10 ml-2"
    >
      <div class="xl:ml-0 grid gap-7 grid-cols-1 xl:grid-cols-2">
        <knowledge-item
          v-for="knowledgeItem in knowledgeItems"
          :key="knowledgeItem.id"
          :knowledgeItem="knowledgeItem"


        ></knowledge-item>
      </div>


    </div>
  </div>
</template>

<script>

import KnowledgeItem from "~/components/KnowledgeItem";
export default {
  name: "Knowledge",
  props:{
    knowledgeItems:{
      type:Array,
      required:true,
    },
  },
  components:{
    KnowledgeItem
  }
}
</script>

<style scoped>

</style>
