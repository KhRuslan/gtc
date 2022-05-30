<template>
  <div id="pc-endCourse" class="inline-grid grid-cols-3 gap-3.5 my-16	">
  <CourseProgramItem
  v-for="courseProgramItem in courseProgramItems"
  :key="courseProgramItem.id"
  :courseProgramItem="courseProgramItem"
  ></CourseProgramItem>

  </div>
</template>

<script>
import CourseProgramItem from "~/components/CourseProgramItem";
export default {
  name: "CourseProgram",
  components:{
    CourseProgramItem
  },
  props:{
    courseProgramItems:{
      type:Array,
      required:true
    }
  }
}
</script>

<style scoped>

</style>
