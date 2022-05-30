
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
  import BoostLol from "~/components/Boost";


  export default {
  name: "app",
  modules: ["@nuxtjs/axios"],
  components: {
  CourseItems,
  VueSlickCarousel,
  FAQ,
  Directions,
  VueCarouselDirectionsItem,
  Achievements,
  Knowledge,
  BoostLol
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
