// Открытие табов в мобильной версии

const categoriesBtn = document.querySelector('.js-toggleTab');

categoriesBtn?.addEventListener('click', (evt) => {
    const tabId = evt.currentTarget.dataset?.tab;
    const tab = document.getElementById(tabId);

    tab?.classList.toggle('catalog__container--is-visible');
})

const mediaQueryList = window.matchMedia('(min-width: 768px)');

mediaQueryList.addEventListener('change', (evt) => {
    const tab = document.querySelector('.catalog__container--is-visible');

    if (evt.matches) {
        tab?.classList.remove('catalog__container--is-visible');
    }
});
