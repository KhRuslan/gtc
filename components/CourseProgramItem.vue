<template>
  <div
    class="xl:w-72		 xl:h-80	xl:max-w-xs	flex flex-col  items-center rounded-md px-5 py-8	"
    style="background:#141518; "
  >
    <div>
      <img
        :src="require('../pages/img/' + courseProgramItem.img)"
        class="xl:w-60px xl:h-50px"
        alt="html"
      />
    </div>
    <h2
      class="text-center  font-sf-b pt-10 xl:text-lg xl:leading-4 h-20"
      style=" color:#FFFFFF "
    >
      {{courseProgramItem.title}}
    </h2>
    <p
      class="text-center  font-sf-l pt-8 xl:text-base xl:leading-4"
      style=" color:#9CA3AF "
    >
      {{courseProgramItem.description}}    </p>
  </div>
</template>

<script>
export default {
  name: "CourseProgramItem",
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
