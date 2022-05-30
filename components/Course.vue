<template>

    <div class="container mx-auto ">
      <div class="flex xl:flex-row flex-col xl:w-1100px xl:h-600px  ">
        <div
          id="course1"
          class=" w-auto h-full  xl:mt-32 xl:w-700px xl:h-500px  "
        ></div>

        <div class="w-auto xl:px-20 py-14 h-full mx-auto ">
          <div class="flex mb-7 items-center">
            <div>
              <img
                src="../pages/img/star.svg"
                class="xl:w-3.5 xl:h-3.5 max-w-full"
              />
            </div>

            <h2 class="font-sf-b text-white pl-4 xl:text-base xl:leading-6">
              Наш курс
            </h2>
          </div>

          <div>
            <h1
              class=" font-i-b w-96  text-white xl:leading-7 mb-6 xl:text-4xl text-4xl	"
              style=" "
            >
              Java Script
              <div
                class="font-i-b pl-10 xl:text-4xl "
                style="color:#5845CF; "
              >
                course
              </div>
            </h1>
          </div>

          <div id="mob-course1" class="mb-10"></div>
          <div class="inline-grid grid-cols-2 gap-3.5  ">
            <course-item
              v-for="courseItem in courseItems"
              :key="courseItem.id"
              :courseItem = courseItem
            ></course-item>

          </div>

        </div>
      </div>
    </div>



</template>

<script>

import CourseItem from "~/components/CourseItem";
export default {
  name: "Course",
  components:{
    CourseItem
  },
  props:{
    courseItems:{
      type:Array,
      required:true,
    },
  }

}
</script>

<style scoped>

</style>
