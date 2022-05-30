<template>
  <div style="background: #F8F8F8; overflow: hidden ">
    <!-- main screen -->
    <div id="screen" class=" w-full h-screen   ">
      <!-- Header -->
      <header>
        <div class="class">
          <div>
            <nav
              class="relative flex flex-wrap items-center  justify-between py-5"
            >
              <div
                class="container mt-6 mx-auto flex flex-wrap  items-center justify-between"
              >
                <div
                  class="sm:border-0 w-full  relative flex justify-between sm:w-auto  sm:static sm:block sm:justify-start"
                >
                  <a
                    class="xl:text-xl font-i-sb leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white text-lg xl:text-2xl "
                    style=" line-height: 27px;"
                    href="#pablo"
                  >
                    GoTo<span
                      class="font-i-sb  "
                      style=" line-height: 27px; color: #5845CF"
                      >Code</span
                    >
                  </a>
                  <button
                    id="navbarButton"
                    class="text-white cursor-pointer xl:text-xl leading-none px-3 py-2 border border-solid border-transparent rounded bg-transparent block sm:hidden outline-none focus:outline-none"
                    type="button "
                    v-on:click="toggleNavbar()"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  v-bind:class="{
                    hidden: !showMenu,
                    flex: showMenu,
                    'text-2xl': showMenu
                  }"
                  class="font-sf-m sm:text-lg sm:flex sm:flex-grow items-center"
                  style="letter-spacing: 0.02em;"
                >
                  <ul class=" flex flex-col sm:flex-row list-none ml-auto">
                    <li class="nav-item">
                      <a
                        v-bind:class="{ 'p-0': !showMenu }"
                        class="sm:px-3 py-2 flex items-center text-md leading-snug text-white hover:opacity-75"
                        @click="goto('us')"
                      >
                        <span class="ml-4">О нас</span>
                      </a>
                    </li>
                    <li class="nav-item ">
                      <a
                        v-bind:class="{ 'p-0': !showMenu }"
                        class="sm:px-3 py-2 flex items-center text-md leading-snug text-white hover:opacity-75"
                        @click="goto('course')"
                      >
                        <span class="ml-4">Курсы</span>
                      </a>
                    </li>

                    <li class="nav-item">
                      <a
                        v-bind:class="{ 'p-0': !showMenu }"
                        class="sm:pl-3 py-2 flex items-center text-md leading-snug text-white hover:opacity-75"
                        @click="goto('contacts')"
                      >
                        <span class="ml-4">Контакты</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <!-- Text -->
      <div id="screen-foot" class="w-full ">
        <div class="xl:container  xl:mx-auto">
          <div
            class="mb-12 ml-7 lg:ml-28 w-28  h-1  lg:mx-0 lg:w-32 lg:h-2.5"
            style=" background: #5845CF;"
          ></div>
          <h1
            class=" text-white font-i-eb mb-12 ml-7 lg:ml-28 lg:text-8xl  lg:mx-0 text-4xl		"
            style=" line-height: 86%;"
          >
            Учись кодингу.<br />Войди в мир <br />современности.
          </h1>
          <div>
            <button
              @click="goto('contacts')"
              id="btn"
              class="text-white text-center text-sm items-center ml-7 lg:ml-28 justify-center object-center w-36 h-12  font-sf-sb lg:mx-0 lg:w-60 lg:h-14 lg:text-xl	"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </div>

    <main>
      <!-- Попробуй себя в разных направлениях -->
      <div class="w-auto mt-20" style="background: #F8F8F8;">
        <div id="mob-directions">
          <div class="mx-auto mb-5 w-10 h-1" style="background: #404056;"></div>
          <h1
            class="text-center font-i-eb mx-auto mb-4 text-3xl "
            style=" line-height: 100%; color: #404056;"
          >
            Попробуй себя в разных<br /><span style="color: #5845CF;"
              >направлениях</span
            >
          </h1>
          <div class="flex items-center justify-center">
            <button @click="dirShowPrev" class="mt-20">
              <img src="./img/prev.svg" alt="" />
            </button>
            <VueSlickCarousel
              v-bind="settings_directions"
              ref="carousel_directions"
              class="w-72 mx-4"
            >
              <vue-carousel-directions-item
                v-for="directionItem in directionItems"
                :key="directionItem.id"
                :directionItem="directionItem"
              ></vue-carousel-directions-item>


            </VueSlickCarousel>
            <button @click="dirShowNext" class="mt-20">
              <img src="./img/next.svg" alt="" />
            </button>
          </div>
        </div>

        <div id="pc-directions" class="container mx-auto h-full ">
          <div class="h-32"></div>
          <div
            class="mx-auto mb-5 xl:w-20 xl:h-2"
            style="background: #404056;"
          ></div>
          <h1
            class="text-center font-i-eb mx-auto mb-4"
            style="font-size: 48px; line-height: 100%; color: #404056;"
          >
            Попробуй себя в разных<br /><span style="color: #5845CF;"
              >направлениях</span
            >
          </h1>
          <div class="h-20"></div>
          <div class="w-full flex ">


              <Directions
              :directionItems="directionItems"
              ></Directions>

          </div>

        </div>
      </div>

      <!-- О нас -->
      <div class="w-screen h-full mt-32 lg:mt-12  " ref="us" id="why-us">
        <div class="lg:py-48 py-12  flex flex-col justify-center items-center">
          <div class="flex lg:ml-10 ml-4 lg:w-870px   ">
            <div class="">
              <img src="../pages/img/message.svg" alt="" />
            </div>
            <div class="ml-4  " style="color: #404056">
              <h1 class="font-i-eb lg:text-3xl	text-xl	">
                - Кто <span style="color:#5845CF;">мы?</span>
              </h1>
              <div class="font-i-eb lg:text-3xl text-xl		">
                - Мы команда разработчиков,
                <div>помогающие ученикам вступить в мир IT!</div>
              </div>
            </div>
          </div>
          <br />
          <div
            class="mx-auto mb-5 lg:w-20 lg:h-2 w-10 h-1"
            style="background: #5845CF;"
          ></div>
          <div class="lg:max-w-xl lg:ml-20 text-base ml-5">
            <h2 class="lg:text-base font-sf-r" style="color:#989898">
              Мы поощряем стремление становиться профессионалами в сфере
              программирования! Мы не только обучаем, но также подготавливаем к
              будущему трудоустройству!
            </h2>
          </div>
        </div>
      </div>

      <!-- Наши достижения -->
      <div class="bg-white w-full p-16">
        <div class="container mx-auto flex lg:flex-row flex-col lg:space-x-64">
          <div>
            <h1
              class="font-i-eb  mb-5 text-xl lg:text-4xl lg:text-left text-center" style=" line-height: 100%; color: #404056;"
            >
              Наши достижения<br />за 2 года работы
            </h1>
            <h2
              class="font-sf-r  text-xs lg:text-lg" style=" line-height: 150%; color: #989898;"
            >
              Мы фокусируемся на качестве!
            </h2>
            <div
              class=" my-5 lg:w-20 lg:h-2 w-10 h-1" style="background: #5845CF;"
            ></div>
          </div>
          <achievements
          :achievementItems="achievementItems"
          >

          </achievements>


        </div>
      </div>

      <!-- Почему стоит выбрать нас -->
        <why-us></why-us>

      <!-- Чему вы научитесь -->

        <knowledge
          :knowledgeItems="knowledgeItems">

        </knowledge>



      <!-- Невероятный буст для твоего скилла! -->
      <div
        class="w-full h-full flex lg:flex-row space-x-4   lg:my-20 xl:mb-10 flex-col justify-center  mb-10    "
      >
        <div
          class="font-mono lg:px-10 lg:py-14 hidden  lg:block  bg-gray-900 rounded-xl lg:text-xs 	"
          id="terminal-rectangle"
        >
          <!-- >> $ filset Everything is installed> $ designstack Everything is installed> $ that’s it Yup, that’s it -->
          <div>
            <div style="color:#FFFFFF">> $ npm install move.js</div>
            <div style="color:#2F9E78">Everything is installed</div>
          </div>
          <div class="py-8">
            <div style="color:#FFFFFF">> $ gulp</div>
            <div style="color:#2F9E78">
              <div>scss watching</div>
              <div>LiveReload started</div>
              <div>Opening localhost:7000</div>
            </div>
          </div>
          <div>
            <div style="color:#FFFFFF">> $ drawillusion</div>
            <div style="color:#2F9E78">
              <div>scss watching</div>
              <div>LiveReload started</div>
              <div>Opening localhost:3000</div>
            </div>
          </div>
          <div class="py-8">
            <div style="color:#FFFFFF">> $ filset</div>
            <div style="color:#2F9E78">$ Everything is installed</div>
          </div>
          <div>
            <div style="color:#FFFFFF">> $ designstack</div>
            <div style="color:#2F9E78">Everything is installed</div>
          </div>
          <div class="py-8">
            <div style="color:#FFFFFF">> $ that’s it</div>
            <div style="color:#2F9E78">Yup, that’s it</div>
          </div>
        </div>
        <div
          id="mob-terminal"
          class="w-72 h-96 lg:w-0 lg:h-0 lg:hidden   my-10"
        ></div>
        <div class="mx-auto w-96">
          <div class="font-i-eb lg:text-4xl text-xl " style="color:#404056">
            <h1>
              Невероятный <span style="color:#5845CF">буст</span> для твоего
              скилла!
            </h1>
          </div>
          <h2
            class="font-sf-r lg:text-sm text-xs lg:w-auto w-72"
            style=" color:#989898"
          >
            Наши курсы предлагают вам освоить и улучшить знания в области
            программирования, стать хорошим и востребованным специалистом,
            который будет уверен в своих навыках и умениях.
          </h2>
          <div class="flex pt-4">
            <div>
              <div
                class="lg:text-xl font-i-b	flex items-center "
                style="color:#FFAE12"
              >
                <div>
                  <img
                    src="../pages/img/star.svg"
                    alt="положительные отзывы"
                    class="lg:w-8 lg:h-8 w-4 h-4"
                    style="max-width:31px"
                  />
                </div>
                <h2 class="pl-2 pt-1 lg:text-2xl text-xl	">4.2 / 5</h2>
              </div>
              <p class="font-sf-r lg:text-sm text-xs" style=" color:#9CA3AF">
                Средняя оценка
              </p>
            </div>
            <div class="pl-10">
              <div
                class="lg:text-xl font-i-b	flex items-center "
                style="color:#4075FF"
              >
                <div>
                  <img
                    src="../pages/img/review.svg"
                    alt="положительные отзывы"
                    class="lg:w-8 lg:h-8  w-4 h-4 "
                    style="max-width:31px"
                  />
                </div>
                <h2 class="pl-2 pt-1 lg:text-2xl text-xl	">150</h2>
              </div>
              <p class="font-sf-r lg:text-sm text-xs" style=" color:#9CA3AF">
                Положительных отзывов
              </p>
            </div>
          </div>
          <div class="pt-10">
            <button
              @click="goto('contacts')"
              id="btn"
              class="text-white text-center items-center justify-center object-center font-sf-sb lg:w-60 lg:h-14 w-44 h-12"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </div>

      <!-- course  -->
      <div
        ref="course"
        style="background: #111214;"
        class=" w-full h-auto flex   justify-center  items-center"
      >
        <course
          :courseItems="courseItems  "
        ></course>
      </div>

      <!--What you will know by the end of course-->
      <div
        style="background: #111214;"
        class=" w-full h-auto flex justify-center items-center"
      >
        <div class="container flex flex-col justify-center items-center mb-16">
          <h1
            class="font-i-eb text-center text-white text-xl xl:text-6xl 	xl:w-650px xl:h-150px	"
          >
            Что входит в программу курса?
          </h1>
          <div
            class="mx-auto mt-10 xl:h-3.5 xl:w-28 w-12 h-1"
            style=" background: #FFFFFF;"
          ></div>
          <course-program :courseProgramItems="courseProgramItems"></course-program>

          <div id="mob-endCourse">
            <div class="flex items-center justify-center my-10">
              <button @click="endShowPrev" class="mt-20">
                <img src="./img/purple-prev.svg" alt="" />
              </button>
              <VueSlickCarousel
                v-bind="settings_end"
                ref="carousel_end"
                class="w-72 mx-4"
              >
                <vue-carousel-course-program-item
                  v-for="courseProgramItem in courseProgramItems"
                  :key="courseProgramItem.id"
                  :courseProgramItem="courseProgramItem"
                ></vue-carousel-course-program-item>

              </VueSlickCarousel>
              <button @click="endShowNext" class="mt-20">
                <img src="./img/purple-next.svg" alt="" />
              </button>
            </div>
          </div>

          <button
            @click="goto('contacts')"
            id="btn"
            class="text-white text-center items-center justify-center object-center font-sf-sb xl:w-60 xl:h-14 w-44 h-12"
          >
            Оставить заявку
          </button>
        </div>
      </div>

      <!-- Часто задаваемые вопросы -->
      <div
        class=" w-full xl:h-screen lg:h-auto py-32 mb-20 flex flex-col  justify-center items-center   "
        id="why-us"
      >
        <div class="lg:w-760px  w-full  ">
          <div
            class="mx-auto lg:w-20 lg:h-1.5 w-11 h-1"
            style="background: #404056;"
          ></div>
          <h1
            class="text-center font-i-eb lg:text-4xl text-2xl mt-5"
            style="color:#404056; "
          >
            Часто задаваемые <span style="color:#5845CF">вопросы</span>
          </h1>
          <div
            class="text-center font-sf-l lg:text-lg text-sm mt-4 mb-2 px-10 lg:px-0 	"
            style="color:#666666; "
          >
            Прежде чем обратиться к нам с вопросом, посмотрите ниже. Может вы
            найдете ответы на свои вопросы и не только!
          </div>
          <div class=" flex flex-col">
            <FAQ
              v-for="faq in faqs"
              :faq="faq"
              :index="faq.id"
              :key="faq.id"
              :open="faq.open"
              @toggleOpen="toggleOpen"
            ></FAQ>
          </div>
        </div>
      </div>

      <!-- Request / Contact -->
      <div ref="contacts" id="gg" class="w-screen  xl:h-screen lg:h-auto">
        <div id="contact" class="h-full flex   container xl:mx-auto lg:ml-48 ">
          <div class="xl:w-auto w-72 h-full   " style=" background: #111214">
            <div class="w-9/10 ">
              <div
                class=" mt-20 xl:w-20 xl:h-1.5 w-10 h-1"
                style=" background: #FFFFFF;"
              ></div>

              <h1
                class="font-i-b w-full xl:mt-4 xl:my-0 my-2 text-white xl:text-4xl"
              >
                Подайте заявку!
              </h1>
              <h2
                class="font-sf-r mt-1 w-full xl:text-lg text-xs leading-5 "
                style=" color: #555555; line-height: 100%"
              >
                Оставьте свои контакты и мы обязательно с вами свяжемся
              </h2>
              <form @submit.once="postData" method="post">
                <div
                  class="flex  xl:flex-row flex-col mb-6 mt-8 w-full justify-between"
                >
                  <input
                    name="name"
                    v-model="clients.name"
                    class="xl:w-1/2 xl:h-16 w-full h-16 focus:outline-none rounded-md  p-5"
                    style=" background: #16181D; opacity: 0.5; color:#FFFFFF"
                    type="text"
                    placeholder="Ваше имя "
                  />
                  <div class="mx-3"></div>
                  <input
                    name="number"
                    class="xl:w-1/2 xl:h-16 w-full h-16 focus:outline-none mt-5 xl:mt-0 rounded-md p-5"
                    style=" background: #16181D; opacity: 0.5; color:#FFFFFF"
                    type="tel"
                    :value="clients.phone_number"
                    @input="updateValue"
                    placeholder="Номер телефона"
                  />
                </div>

                <button
                  id="btn"
                  type="submit"
                  class=" text-center items-center
             justify-center object-center mt-10 font-sf-b xl:w-48 xl:h-14 w-40 h-12 xl:text-xl"
                  style=""
                >
                  Оставить заявку
                </button>
              </form>
            </div>
          </div>
          <div
            id="contact-right"
            class="h-full  2xl:w-auto 2xl:ml-60 xl:ml-40  py-20"
            style=""
          >
            <div class="lg:pl-20">
              <h1
                class="font-i-b w-full mt-5  text-white xl:text-4xl"
                style=" "
              >
                Свяжитесь с нами
              </h1>
              <h2
                class="font-sf-m w-full mt-11 text-xs lg:text-base"
                style=" color: #FFFFFF; opacity: 0.2;"
              >
                НАШИ КОНТАКТЫ
              </h2>
              <a href="tel:+77088651071">
                <div
                  class="font-sf-r w-full mt-8 text-xs lg:text-xl"
                  style=" color: #FFFFFF;"
                >
                  +7 (708) 865-10-71
                </div>
              </a>

              <a href="mailto:main@gotocode.net">
                <div
                  class="font-sf-r w-full mt-1 text-xs lg:text-xl"
                  style=" color: #FFFFFF;"
                >
                  main@gotocode.net
                </div>
              </a>

              <h2
                class="font-sf-m w-full mt-10 text-xs lg:text-base"
                style=" color: #FFFFFF; opacity: 0.2;"
              >
                СОЦИАЛЬНЫЕ СЕТИ
              </h2>
              <div class="flex w-full h-6 mt-8">
                <div class="xl:w-8 xl:h-8  mr-3">
                  <a href=" https://wa.me/message/7GALVK4JTZSSL1">
                    <button>
                      <img src="../pages/img/whatsapp.svg" alt="" />
                    </button>
                  </a>
                </div>
                <div class="xl:w-8 xl:h-8  mr-3">
                  <a href="https://www.instagram.com/goto_code/">
                    <button>
                      <img src="../pages/img/inst.svg" alt="" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <!-- Footer -->
      <div
        class="w-full h-auto xl:px-80 xl:py-8 py-4 flex justify-center mb-0"
        style="background:#0D0E10"
      >
        <div
          class="sm:border-0 xl:w-full  w-14 relative flex justify-between sm:w-auto   sm:static sm:block sm:justify-start"
        >
          <a
            class="xl:text-xl font-i-sb leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white text-xs xl:text-2xl "
            style=" line-height: 27px;"
            href="#pablo"
          >
            GoTo<span
              class="font-i-sb text-xs xl:text-2xl "
              style=" line-height: 27px; color: #5845CF"
              >Code</span
            >
          </a>
        </div>

        <div
          class="ml-4 xl:mt-3 mt-4 xl:text-sm text-xs w-auto"
          style="color:#D9DBE13B;  "
        >
          © 2020 GoToCode - Almaty. All rights reserved
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

// отключение zoom через скролл (в том числе трекападами в macOS)
import CourseItems from "~/components/CourseItem";
document.addEventListener(
  "mousewheel",
  function(e) {
    if (!e.ctrlKey && !e.metaKey) return;

    e.preventDefault();
    e.stopImmediatePropagation();
  },
  { passive: false }
);

// отключение zoom прикосновениями (в том числе трекападами и т.п.) в Safari и iOS
document.addEventListener(
  "gesturestart",
  function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
  },
  { passive: false }
);

// отключение zoom через клавиатуру (ctrl + "+", ctrl + "-")
// кнопки браузера для управления zoom отключены не будут
document.addEventListener(
  "keydown",
  function(e) {
    if (!e.ctrlKey && !e.metaKey) return;
    if (e.keyCode != 189 && e.keyCode != 187) return;

    e.preventDefault();
    e.stopImmediatePropagation();
  },
  { passive: false }
);
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import FAQ from "~/components/FAQ";
import Directions from "~/components/Directions";
import Achievements from "~/components/Achievements";
import Knowledge from "~/components/Knowledge";
import VueCarouselDirectionsItem from "~/components/VueCarouselDirectionsItem";
import VueCarouselCourseProgramItem from "~/components/VueCarouselCourseProgramItem";
import WhyUs from "~/components/WhyUs"


export default {
  name: "app",
  modules: ["@nuxtjs/axios"],
  components: {
    CourseItems,
    VueSlickCarousel,
    FAQ,
    Directions,
    VueCarouselDirectionsItem,
    VueCarouselCourseProgramItem,
    Achievements,
    Knowledge,
    WhyUs
  },
  data() {
    return {
      clients: {
        name: null,
        phone_number: null
      },
      amount: "",
      faqs: [
        {
          id: 0,
          question: "Системные требования",
          answer:
            " Оперционная система: Windows 10, Linux, MacOS; Наличие микрофона; Программное обеспечение будет подобрано на занятиях ",
          open: false
        },
        {
          id: 1,
          question: "Возврат средств",
          answer:
            "Возврат средств предусмотрен в течении первой недели после оплаты курса",
          open: false
        },
        {
          id: 2,
          question: "Подача заявки",
          answer:
            "Подать заявку на наши курсы можно посредством социальных сетей: Whats App, Instagram. Также, вы можете оставить свою заявку на нашем сайте",
          open: false
        },
        {
          id: 3,
          question: "Остались вопросы?",
          answer: "Свяжитесь с нами напрямую через контакты!",
          open: false
        }
      ],
      directionItems: [
        {
          id: 0,
          title: "Программы для ПК",
          description:
            "Попробуй создавать приложения и программы для твоего компьютера, такие как Spotify или Discord.",
          img: 'pc.svg'
        },
        {
          id: 1,
          title: "Разработка и дизайн",
          description:
            "Вы сможете создать свой личный сайт, на основе HTML, CSS & Vue и задать ему свой личный уникальный дизайн.",
          img: "code.svg"
        },
        {
          id: 2,
          title: "Мобильные приложения",
          description:
            "Вы сможете попробовать создать ваше первое мобильное приложение используя некоторые программы и код.",
          img: "phone.svg"
        },
        {
          id: 3,
          title: "База данных и API",
          description:
            "Вы научитесь таким сложным темам как прикладное программирование и научитесь создавать базы данных.",
          img: "world.svg"
        },
        {
          id: 4,
          title: "Разработка игр",
          description:
            "Давно хотел попробовать что значит разрабатывать игры ? Мы поможем тебе в этом и исполним твою мечту.",
          img: "game.svg"
        },
        {
          id: 5,
          title: "Боты для соцсетей",
          description:
            "Вы научитесь создавать ботов для таких приложений как Telegram и Discord, а затем использовать их в своих целях.",
          img: "data.svg"
        }
      ],
      achievementItems:[
        {
          id:0 ,
          title:'300',
          description:'Студентов',
          img:'users.svg'
        },
        {
          id:1 ,
          title:'15',
          description:'Человек в команде',
          img:'company_settings.svg'
        },
        {
          id:2 ,
          title:'50 гб',
          description:'Учебных материалов',
          img:'student.svg'
        },
        {
          id:0 ,
          title:'50',
          description:'Успешных выпусников',
          img:'map.svg'
        },
      ],
      knowledgeItems:[
        {
          id:0,
          title:'Работа с JavaScript',
          description:'Вы научитесь разрабатывать программы, используя JavaScript',
          img:'js.svg',
        },
        {
          id:3,
          title:'Деплой на Хостинг',
          description:'Вы научитесь работать с серверами и хостингами.',
          img:'transit.svg',
        },
        {
          id:4,
          title:'Базы данных SQL',
          description:'Вы научитесь создавать и организовывать большие данные',
          img:'api.svg',
        },
        {
          id:1,
          title:'Front-end',
          description:'Вы научитесь проектировать дизайн сайта',
          img:'vscode.svg',
        },

      ],
      courseItems:[
        {
          id:0,
          title:'Время:',
          description:'2 раза в неделю по 2 часа',
          img:'time.svg',
        },
        {
          id:1,
          title:'Длительность:',
          description:'6 месяцев',
          img:'clock.svg',
        },
        {
          id:2,
          title:'Cтудентов',
          description:'в группе 10-15',
          img:'group.svg',
        },
        {
          id:3,
          title:'Начало:',
          description:'15 сентября',
          img:'stocks.svg',
        },
        {
          id:4,
          title:'Цена за курс:',
          description:'35 тыс. тг / мес',
          img:'dollar.svg',
        },
        {
          id:5,
          title:'Формат:',
          description:'Online-обучение',
          img:'online.svg',
        },

      ],
      courseProgramItems:[
        {
          id:0,
          title:'Первый язык программирования',
          description:'Вы выучите свой первый язык программирования для того чтобы стать востребованным программистом',
          img:'purple-html.svg',
        },
        {
          id:1,
          title:'Прикладное программирование',
          description:'Вы научитесь делать программы, нацеленные на взаимодействие с пользователем',
          img:'purple-api.svg',
        },
        {
          id:2,
          title:'Деплой и серверная часть',
          description:'Вы узнаете как работает хостинг и, как опубликовать в интернете свой сайт, который вы сделаете на курсе',
          img:'purple-connect.svg',
        },
        {
          id:3,
          title:'HTML, CSS & VUE',
          description:'Вы ознакомитесь с современными технологиями разработки сайтов',
          img:'purple-vue.svg',
        },
        {
          id:4,
          title:'Создание ботов для приложений',
          description:'Во время курса вы сделаете собственного бота для таких приложений, как Discord и Telegram',
          img:'purple-bot.svg',
        },
        {
          id:5,
          title:'Приложения для смартфонов и ПК',
          description:'Вы научитесь принципам создания приложений, которые будут работать на смартфонах и компьютерах.',
          img:'purple-mobpc.svg',
        },

      ],

      settings_directions: {
        arrows: false,
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      settings_end: {
        arrows: false,
        dots: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
    };
  },
  methods: {
    postData(e) {
      this.$axios
        .$post("https://gotocode.net/api/contact", this.clients)
        .then(result => {
          console.warn(result);
        });
      e.preventDefault();
    },
    dirShowNext() {
      this.$refs.carousel_directions.next();
    },
    dirShowPrev() {
      this.$refs.carousel_directions.prev();
    },
    endShowNext() {
      this.$refs.carousel_end.next();
    },
    endShowPrev() {
      this.$refs.carousel_end.prev();
    },
    toggleOpen: function(index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      });
    },
    goto(refName) {
      let element = this.$refs[refName];
      let top = element.offsetTop;
      window.scrollTo({
        top: top,
        behavior: "smooth"
      });
    },
    updateValue(event) {
      const value = event.target.value;
      if (String(value).length <= 11) {
        this.clients.phone_number = value;
      }
      this.$forceUpdate();
    },
    buttonClicked(event) {}
  }
};




</script>

<style>

#screen {
  position: relative;
  background: url(../pages/MainPage.jpg) no-repeat;
  background-size: cover;
}

#screen-foot {
  position: absolute;
  top: 30%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

.end_bg {
  background: #141518;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 350px;
}

.end_title {
  color: #ffffff;
}

.end_description {
  color: #868788;
}

#why-us {
  position: relative;
  background: url(../pages/why-us.svg) no-repeat;
  background-size: 100%;
  display: block;
}

#terminal-rectangle {
  height: 500px;
  width: 400px;
}

#btn {
  z-index: 1;
  color: #fff;
  transition: ease-out 0.3s;

  background: #5845cf;
  box-shadow: 0px 10px 30px rgba(56, 29, 219, 0.2);
  border-radius: 8px;
  line-height: 20px;
  position: relative;
  outline: none;
}

#btn:hover {
  color: #5845cf;
  cursor: pointer;
  background: #fff;
}

#btn::before {
  transition: 0.5s all ease;
  position: absolute;
  top: 0;
  bottom: 0;
  opacity: 0;
  content: "";
  background-color: #fff;
}

#btn:hover::before {
  transition: 0.5s all ease;
  opacity: 1;
  z-index: -1;
  border-radius: 8px;
}

#btn:active {
}

.faq {
  height: 56px;
  transition: all 100ms linear;
}

.faq-open {
  height: 130px;
  transition: all 100ms linear;
}
.answer {
  height: 0;
  transition: all 100ms linear;
}

.answer-open {
  display: block;
  transition: all 100ms linear;
}


#gg {
  background-image: url("gg.png");
  background-size: cover;
}
@media only screen and (min-width: 1280px) {
  #screen {
    position: relative;
    background: url(../pages/MainPage.jpg) no-repeat;

    background-size: cover;
  }

  #mob-directions {
    display: none;
  }

  #mob-course1 {
    display: none;
    width: 0;
    height: 0;
  }

  #mob-endCourse {
    display: none;
    width: 0;
    height: 0;
  }
}

@media only screen and(min-width:1020px) {
  #contact-right {
    display: block;
  }
}

@media only screen and (max-width: 1280px) {
  #navbarButton {
    display: none;
    width: 0;
    height: 0;
  }

  #pc-endCourse {
    display: none;
    width: 0;
    height: 0;
  }
  #contact {
    background: #111214;
  }

  #screen {
    position: relative;
    background: url(../pages/mob-fist-page.svg) no-repeat;
    background-size: cover;
  }
  #pc-directions {
    display: none;
    position: absolute;
  }
  #why-us {
    position: relative;
    background: url(../pages/why-us.svg) no-repeat center;
    background-size: cover;
  }

  #firstpic {
    background-image: url("Frame.png");
    background-repeat: no-repeat;
    width: 190px;
    height: 146px;
  }

  #secondpic {
    background-image: url("Group2.svg");
    background-repeat: no-repeat;
    background-size: contain;
    width: 220px;
    height: 130px;
  }

  #thirdpic {
    background-image: url("Group3.png");
    background-repeat: no-repeat;
    width: 200px;
    background-size: contain;
    height: 150px;
  }

  #mob-terminal {
    background: url(../pages/terminal.svg) no-repeat;
    background-size: contain;
  }

  #course1 {
    display: none;
    width: 0;
    height: 0;
  }

  #mob-course1 {
    background-image: url("Course1.svg");
    width: 400px;
    height: 300px;
    background-size: contain;
    background-repeat: no-repeat;
  }

  #reviews {
    display: none;
    width: 0;
    height: 0;
  }
}

#firstpic {
  background-image: url("Frame.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 522px;
  height: 430px;
}
#secondpic {
  background-image: url("Group2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  width: 588px;
  height: 358px;
}
.answer {
  color: #3c3c3c;
  font-size: 18px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
}

#thirdpic {
  background-image: url("Group3.png");
  background-repeat: no-repeat;
  width: 520px;
  background-size: contain;
  height: 369px;
}



#course1 {
  background-image: url("Course1.svg");
  width: 700px;
  height: 500px;
  background-size: 80%;
  background-repeat: no-repeat;
}

.container {
  max-width: 1100px;
  padding: 0 20px 0 20px;
}

@media (max-width: 1366px) {
  .container {
    max-width: 840px;
  }
}

@media (max-width: 992px) {
  .container {
    max-width: 768px;
  }
}

input::placeholder {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgba(190, 190, 190, var(--tw-text-opacity));
}

input[type="text"] {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgba(107, 114, 128, var(--tw-text-opacity));
}

</style>


