<template>
  <div
    class="xl:w-72	end_bg	 xl:h-80	xl:max-w-xs	flex flex-col  items-center rounded-md px-5 py-8	"
    style="background:#141518; "
  >
    <div class="">
      <img
        :src="require('../pages/img/' + courseProgramItem.img)"
        class=" ml-20"
        width="80px"
        height="80px"
      />
    </div>
    <h2
      class="text-center end_title font-sf-b pt-10 xl:text-lg xl:leading-4"
      style=" color:#FFFFFF "
    >
      {{courseProgramItem.title}}
    </h2>
    <p
      class="text-center end_description font-sf-l mt-4 xl:text-base xl:leading-4"
      style=" color:#9CA3AF "
    >
      {{courseProgramItem.description}}
    </p>
  </div>
</template>

<script>
export default {
  name: "VueCarouselCourseProgramItem",
  props:{
    courseProgramItem:{
      type:Object,
      required:true
    }
  }
}
</script>

<style scoped>

</style>
