<template>
  <div class="footer-top-container">
    <div class="footer-top-left">
      <div class="left-info" v-for="(item, idx) in info" :key="idx">
        <div class="info-addres">
          <p>Адрес</p>
          <div class="addres-items">
            <img src="@/assets/OurItems/Footer/location.png" alt="" />
            <span>{{ item.address }}</span>
          </div>
        </div>
        <div class="info-work">
          <p>График работы</p>
          <div class="work-items">
            <img src="@/assets/OurItems/Footer/watch.png" alt="" />
            <div class="work-days">
              <span
                >Рабочие дни: <i> {{ item.work_days }}</i></span
              >
              <span
                >День отдыха: <i> {{ item.day_off }}</i></span
              >
            </div>
          </div>
        </div>
        <div class="info-contacts">
          <p>Контакты</p>

          <div class="contact-items">
            <img src="@/assets/OurItems/Footer/phone.png" alt="" />
            <div class="contacts">
              <span
                >Тел: <i>{{ item.phone }}</i></span
              >
              <span
                >Факс: <i>{{ item.faks }}</i></span
              >
              <span
                >Э-почта: <i>{{ item.mail }}</i></span
              >
            </div>
          </div>
        </div>
      </div>

      <p>
        Нашли в тексте ошибку? Выделите её и нажмите <i> Ctrl+Enter </i>, а
        затем отправьте нам для уведомления администрации
      </p>
      <p>
        © 2022 Все права защищены. При использовании материалов веб-сайта,
        ссылка на источник обязательна.
      </p>

      <div class="link-items">
        <div class="facebook-link links">
          <img src="@/assets/OurItems/Footer/Vector.png" alt="" />
        </div>
        <div class="twitter-link links">
          <img src="@/assets/OurItems/Footer/Vector1.png" alt="" />
        </div>
        <div class="telegram-link links">
          <img src="@/assets/OurItems/Footer/Vector2.png" alt="" />
        </div>
        <div class="instagram-link links">
          <img src="@/assets/OurItems/Footer/instagram.png" alt="" />
        </div>
        <div class="you-tube-link links">
          <img src="@/assets/OurItems/Footer/Vector3.png" alt="" />
        </div>
        <div class="pinterest-link links">
          <img src="@/assets/OurItems/Footer/pinterest.png" alt="" />
        </div>
      </div>
    </div>
    <div class="footer-top-right">
      <div class="right-one">
        <p>Министерство</p>
        <div class="department-items">
          <a href="#">Задачи и функции</a>
          <a href="#">Лицензирование</a>
          <a href="#">Сертификация</a>
          <a href="#">Структура министерство</a>
          <a href="#">Руководство</a>
          <a href="#">Центральный Аппарат</a>
          <a href="#">О ЮНВТО</a>
          <a href="#">Борьба с коррупцией</a>
          <a href="#">Объявления и тендеры</a>
          <a href="#">Вакансии</a>
          <a href="#">Подведомственные организации</a>
          <a href="#">Партнёры</a>
          <a href="#">Территориальные управления</a>
          <a href="#">Общественный консультативный совет</a>
        </div>
      </div>
      <div class="right-two">
        <p>Привилегии</p>
        <div class="privilege-items">
          <a href="#">Wi-Fi зоны</a>
          <a href="#">Санитарно- гигиенические узлы</a>
          <a href="#">Гостиницы</a>
          <a href="#">Проекты</a>
        </div>
      </div>
      <div class="right-three">
        <p>Открытые данные</p>
        <div class="open-data-items">
          <a href="#">Реестр объектов требующих инвестиции</a>
          <a href="#">Реестр средств размещения</a>
          <a href="#">Реестр гидов</a>
          <a href="#">Список туроператоров и турагентов</a>
          <a href="#">Перечень конфиденциальной информации</a>
          <a href="#">Реестр обращений по госуслугам</a>
          <a href="#"
            >Образовательные учреждения по переподготовке и повышению
            квалификации специалистов сферы туризма</a
          >
        </div>
      </div>
      <div class="right-four">
        <p>Пресс-служба</p>
        <div class="press-items">
          <a href="#">Новости</a>
          <a href="#">Аккредитация</a>
          <a href="#">О пресс службе</a>
          <a href="#">Выставки и мероприятия</a>
        </div>
      </div>
      <div class="right-five">
        <p>Законодательство</p>

        <div class="legislation-items">
          <a href="#">Конститутция</a>
          <a href="#">Законы</a>
          <a href="#">Указы и Постановления Президента</a>
          <a href="#">Правительственные решения</a>
          <a href="#">Правила и инструкции</a>
          <a href="#">НПА, утратившие силу</a>
          <a href="#">Межведомственные соглашения</a>
          <a href="#">Межправительственные договора</a>
        </div>
      </div>
      <div class="right-six">
        <p>Статистика</p>

        <div class="statistics-items">
            <a href="#">Статистика</a>
            <a href="#">Опросы</a>
            <a href="#">Конкурсы</a>
            <a href="#">Статистика обращений</a>
        </div>
      </div>
      <div class="right-seven">
        <p>Услуги</p>

        <div class="service-items">
            <a href="#">Виртуальная приёмная</a>
            <a href="#">Электронная отчетность</a>
            <a href="#">Перечень документов</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "footer-top",
  data() {
    return {
      info: [
        {
          address: " Amir Temur shox ko'chasi, 107B-uy",
          work_days: "Вт – Вс, 9:00 -18:00",
          day_off: "Понедельник",
          phone: "+998 71 232 02 08",
          faks: "+998 71 232 02 08",
          mail: "info@temurid.uz",
        },
      ],
    };
  },
};
</script>
