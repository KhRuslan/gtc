<template>
  <div class=" lg:mx-56 mx-10 my-2  ">
    <div
      @click="$emit('toggleOpen', index)"
      :class="open ? 'faq-open rounded-lg p-4' : ' faq rounded-lg p-4 '"
      style="background:#FFFFFF; "
    >
      <div class="flex">
        <h2
          class="font-sf-r lg:w-full lg:text-lg text-sm w-80 		"
          style="color:#3D3D3D; line-height: 100% "
        >
          {{ faq.question }}
        </h2>
        <p
          :class="
            open
              ? 'float-right  transition right-0 delay-100 duration-100 ease-in-out '
              : 'float-right transform -rotate-90  right-0 transition delay-75 duration-75 ease-in-out '
          "
        >
          <button>
            <img src="../pages/img/purple-down.svg" alt="" />
          </button>
        </p>
      </div>

      <div
        :class="
          open
            ? 'answer-open font-sf-l text-sm  lg:text-base transition py-2 delay-100 duration-100 ease-in-out '
            : 'answer hidden w-0 h-0 '
        "
        style="color:#868686; "
        class="font-sf-l   lg:text-base  "
      >
        {{ faq.answer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQ",
  props: ["faq", "index", "open", "toggleOpen"]
};
</script>

<style scoped></style>
