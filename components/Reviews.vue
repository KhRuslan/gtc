<template>
  <!--Они доверяют нам--!-->
  <div class=" w-full xl:h-screen h-auto flex xl:flex-row flex-col justify-center ">
    <div class="m-4 my-10 xl:m-32">
      <div
        class="xl:w-20 xl:h-2 w-10 h-1 mx-auto xl:mx-0 "
        style=" background: #5845CF;"
      ></div>
      <div
        class="font-i-eb xl:text-5xl xl:my-12  my-2 xl:text-left text-center text-xl"
        style="color:#404056"
      >
        Они <span style="color:#5845CF">доверяют</span> нам !
      </div>
      <div
        class="font-i-r xl:w-480px xl:text-base  text-xs"
        style=" color:#7C7C7C "
      >
        Вы можете посмотреть отзывы наших клиентов и студентов по поводу наших курсов и прочих услуг.
      </div>
      <div
        id="mob-reviews"
        class="flex flex-col justify-center items-center xl:mt-28 xl:mr-20 "
      >
        <div
          class="mt-2 xl:w-20 xl:h-2 xl:rounded-2xl"
          style="background: #F2F2F2; "
        ></div>

        <div
          class="xl:w-96	h-auto my-2 p-3 xl:rounded-lg	"
          style="background:#FFFFFF; "
        >
          <div>
            <img
              src="../pages/img/4stars.svg"
              class="xl:w-120px xl:h-25px"
              alt=""
            />
          </div>
          <div class="flex my-4">
            <div class="xl:w-64 xl:text-xs text-xs " style="color:#84888E; ">
              Идут по пустыне Араб, Индус и Брудопикер. День идут, два, три.
              Чуть живые поднимаються на бархан и видят оазис, а в нем дом
              стоит. Заходят в дом, а там крестьянин. Они ему...
              <div>
                <a href="#" class="no-underline" style=" color:#4D4D9E"
                >Показать больше</a
                >
              </div>
            </div>
            <div class="ml-4  ">
              <img
                style="max-width: 60px"
                src="../pages/img/abobus.svg"
                alt=""
              />
            </div>
          </div>
          <div class="font-i-b xl:text-sm">
            Кулыкин Абобус
          </div>
        </div>
      </div>

      <div class="flex my-8 xl:ml-0 ml-28 ">
        <button>
          <img src="../pages/img/up.svg" class="xl:w-10" alt="" />
        </button>
        <button class="ml-2">
          <img src="../pages/img/down.svg" class="xl:w-10" alt="" />
        </button>
      </div>
    </div>
    <div
      id="reviews"
      class="flex flex-col justify-center items-center xl:mt-28 xl:mr-20 "
    >
      <div
        class="mt-2 xl:w-20 xl:h-2 xl:rounded-2xl"
        style="background: #F2F2F2; "
      ></div>

      <div
        class="xl:w-96	h-auto mb-2 mt-8 p-3 xl:rounded-lg	"
        style="background:#FFFFFF;"
      >
        <div>
          <img
            src="../pages/img/4stars.svg"
            class="xl:w-120px xl:h-25px"
            alt=""
          />
        </div>
        <div class="flex my-4">
          <div class="xl:w-64 xl:text-xs" style="color:#84888E;">
            Пудж с момом - это нечто. Это лучший пудж, на котором я играл. Топ
            1 пудж на всех серверах, это реально топ и его не превзойти.
          </div>
          <div class="ml-4 ">
            <img
              src="../pages/img/PHOTO.svg"
              class="xl:w-60px xl:h-60px"
              alt=""
            />
          </div>
        </div>
        <div class="font-i-b xl:text-sm">
          Aaron Almaraz
          <span class="font-i-r xl:text-xs" style=" color:#7C8087">
              - Киберспортсмен</span
          >
        </div>
      </div>

      <div
        class="xl:w-96	h-auto my-2 p-3	xl:rounded-lg"
        style="background:#FFFFFF; "
      >
        <div>
          <img
            src="../pages/img/4stars.svg"
            class="xl:w-120px xl:h-25px"
            alt=""
          />
        </div>
        <div class="flex my-4">
          <div class="xl:w-64 xl:text-xs" style="color:#84888E; ">
            Реально люблю это. Курс многое мне дал в области программирования.
          </div>
          <div class="ml-4 ">
            <img
              src="../pages/img/sergay.svg"
              class="xl:w-60px xl:h-60px"
              alt=""
            />
          </div>
        </div>
        <div class="font-i-b xl:text-sm">
          Сергей Релин
          <span class="font-i-r xl:text-xs" style="; color:#7C8087"
          >- Наш студент</span
          >
        </div>
      </div>

      <div
        class="xl:w-96	h-auto my-2 p-3 xl:rounded-lg	"
        style="background:#FFFFFF; "
      >
        <div>
          <img
            src="../pages/img/4stars.svg"
            class="xl:w-120px xl:h-25px"
            alt=""
          />
        </div>
        <div class="flex my-4">
          <div class="xl:w-64 xl:text-xs" style="color:#84888E; ">
            Идут по пустыне Араб, Индус и Брудопикер. День идут, два, три.
            Чуть живые поднимаються на бархан и видят оазис, а в нем дом
            стоит. Заходят в дом, а там крестьянин. Они ему...
            <div>
              <a href="#" class="no-underline" style=" color:#4D4D9E"
              >Показать больше</a
              >
            </div>
          </div>
          <div class="ml-4 ">
            <img
              src="../pages/img/abobus.svg"
              class="xl:w-60px xl:h-60px"
              alt=""
            />
          </div>
        </div>
        <div class="font-i-b xl:text-sm">
          Кулыкин Абобус
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Reviews.vue"
}
</script>

<style scoped>

</style>
