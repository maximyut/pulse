window.addEventListener('DOMContentLoaded', () => {
  let slider = tns({
    container: '.slider__wrapper',
    items: 1,
    slideBy: 1,
    nav: false,
    controlsContainer: '.slider__arrows',
  });

  //tabs

  let tabs = document.querySelectorAll('.catalog__tab'),
    tabsContent = document.querySelectorAll('.catalog__wrapper'),
    tabsParent = document.querySelector('.catalog__tabs');

  function hideTabContent() {

    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove('active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', function (event) {
    const target = event.target;
    if (target && target.classList.contains('catalog__tab')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  //catalog

  let listShow = document.querySelectorAll('.catalog__item-link'),
    listHide = document.querySelectorAll('.catalog__item-back'),
    catalogContent = document.querySelectorAll('.catalog__item-content'),
    catalogList = document.querySelectorAll('.catalog__item-list');

  function showList(i) {
    catalogContent[i].classList.add('hide', 'fade');
    catalogList[i].classList.add('show', 'fade');
  }

  function hideList(i) {
    catalogContent[i].classList.remove('hide');
    catalogList[i].classList.remove('show');
  }

  listShow.forEach((item, a) => {
    item.addEventListener('click', function (e) {
      const target = e.target;
      listShow.forEach((item, i) => {
        if (target == item) {
          showList(i);
        }
      });
    });
  });

  listHide.forEach((item, a) => {
    item.addEventListener('click', function (e) {
      const target = e.target;
      listHide.forEach((item, i) => {
        if (target == item) {
          hideList(i);
        }
      });
    });
  });
  class CatalogCard {
    constructor(src, alt, title, descr, priceOld, priceNew, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.priceOld = priceOld;
      this.priceNew = priceNew;
      this.classes = classes;
      this.parent = document.querySelector('.catalog__wrapper');
    }

    render() {
      const element = document.createElement('div');
      if (this.classes.length === 0) {
        this.element = 'catalog__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }



      element.innerHTML = `
          
      <div class="catalog__item-wrapper">
      <div class="catalog__item-content">
          <img class="catalog__item-img" src="${this.src}" alt="${this.alt}">
          <div class="title title_fz16 catalog__item-title">${this.title}</div>
          <div class="catalog__item-descr">${this.descr}</div>
          <div class="catalog__item-link">ПОДРОБНЕЕ</div>
      </div>

      <ul class="catalog__item-list">
          <li>Вы услышите звуковое оповещение о нужном пульсе во время тренировки;
          </li>
          <li>
          Вы увидите информативный графический индикатор целевых тренировочных зон пульса;
          </li>
          <li>
          Также Вы увидите информацию о расходе калорий за тренировку;</li>
          <li>
          Вы сможете посмотреть данные по 10 тренировкам.
          </li>
          <div class="catalog__item-back">назад</div>
      </ul>
      </div>
      <hr>
      <div class="catalog__item-footer">
          <div class="catalog__item-price">
              <div class="catalog__item-price-old">${this.priceOld}руб.</div>
              <div class="catalog__item-price-new">${this.priceNew}руб.</div>
          </div>
          <button class="btn catalog__item-btn">КУПИТЬ</button>
      </div>

        `;
      this.parent.append(element);
    }
  }

  new CatalogCard(
    "img/catalog.jpg",
    "vegy",
    'Пульсометр Polar FT1',
    'Для первых шагов в тренировках, основанных на сердечном ритме',
    "4 750",
    "4 500",
    "catalog__item"
  ).render();

  // function findParent() {
  //   let parent = document.querySelectorAll('.catalog__wrapper');
  //   let p;
  //   for (let i = 0; i < 4; i++) {
  //     parent.forEach ((item, i) => {
  //      p = item.childNodes.length;
  //     });
  //     parent = document.querySelector('.catalog__wrapper');
  //     console.log(parent);
  //   }
  // }
  //  findParent();


  // reviews

  class Review {
    constructor(src, alt, name, count, descr, ...classes) {
      this.src = src;
      this.alt = alt;
      this.name = name;
      this.count = count;
      this.descr = descr;
      this.classes = classes;
      this.parent = document.querySelector('.reviews__wrapper');
    }

    render() {
      const element = document.createElement('div');
      if (this.classes.length === 0) {
        this.element = 'reviews__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }



      element.innerHTML = `
          
        <img src="${this.src}" alt="">
        <div class="reviews__text">
            <div class="reviews__subtitle title title_fz18">${this.name}</div>
            <div class="reviews__count">${this.count}</div>
            <div class="reviews__descr">${this.descr}</div>
        </div>

        `;
      this.parent.append(element);
    }
  }

  new Review(
    "img/Ivan.png",
    "Ivan",
    'Иван Сёмочкин',
    '1 полумарафон',
    "Крутая штука-пульсометр. Обычно без них бегал. Оказывается только хуже себе делал. Купил пульсометр, ещё в подарок получил тренировку. Со мной вместе провели первую тренировку, научили пользоваться новым гаджетом. Также объяснили основы анатомии, составили план тренировок на месяц вперёд.<br><br>С ними подготовился к своему первому полумарафону! Спасибо!!!",
  ).render();

  new Review(
    "img/Ulia.png",
    "Ulia",
    'Юлия Дашкина',
    '2 полумарафона',
    "Долго не могла начать бегать, т.к. до этого несколько раз начинала, но становилось тяжело и я бросала. От друзей услышала о RunSmart и о беге с контролем пульса и решила попробовать.<br><br>Позвонила, ребята поинтересовались моими целями и подобрали очень интересный вариант со скидкой! Теперь бегаю и наслаждаюсь бегом! Пробежала уже 2 полумарафона и несколько более коротких забегов и не намерена останавливаться!<br><br>Спасибо!!!",
  ).render();
});