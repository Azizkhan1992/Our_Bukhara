<template>
  <div class="progres-bar-container">
    <div class="progres-bar-content">
      <h1>Путешествуй вместе с кешбэком</h1>
      <div class="progres-bar-wrapper">
        <div class="progres-header">
          <progres-bar-items
            :headers="progress_items"
            @changedTab="updateTab($event)"
          >
          </progres-bar-items>
        </div>
        <div class="progres-content">
          <div class="progres-content-left">
            <p :class="{ active: event == 'one' || default_class }">О программе</p>
            <p :class="{ active: event == 'two' }">Начисление возврата</p>
            <p :class="{ active: event == 'three' }">Покупка и оплата</p>
            <p>Технические вопросы</p>
          </div>
          <div class="progres-content-right">
            <span
              >Почему программа детского туристического кешбэка заканчивается
              досрочно?</span
            >
            <hr>
            <span
              >Хочу отправить ребенка в лагерь и получить кешбэк. Как
              участвовать в программе?</span
            >
            <hr>
            <span
              >Смогут ли получить кешбэк семьи, которые имеют сертификат на
              льготу для детского отдыха?</span
            >
            <hr>
            <span
              >Будет ли суммироваться возрат 50% с выплатой от комиссии по
              возврату за детский отдых от администрации?</span
            >
            <hr>
            <span
              >Если в путёвку включен трансфер, начисляется ли кешбэк на всю
              сумму оплаты или на дапольнительные услуги он не действует?</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProgresBarItems from "./content-items/ProgresBarItems.vue";
export default {
  name: "progres-bar",
  components: { ProgresBarItems },
  data() {
    return {
      progress_items: [
        {
          name: "Active",
          title: "Кешбэк за лагеря",
          value: "one",
          active: true,
        },
        {
          name: "Inactive",
          title: "Туристические поездки",
          value: "two",
        },
        {
          name: "Inactive",
          title: "Для юридических лиц",
          value: "three",
        },
      ],
      event: "",
      default_class: true
    };
  },
  methods: {
    updateTab(event) {
      this.event = event;
      this.default_class = false
    },
  },
};
</script>
