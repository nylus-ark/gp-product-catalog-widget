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

// Рендер категорий и товаров

const categoryContent = document.querySelector('.catalog__categories');

// Рендер категорий
const renderCategoryList = () => {
    const categoryItem = categories.map((value) => {
        let active = (value.categoryId === 1) ? 'catalog__btn--is-active' : '';

        return `
            <li class="catalog__categories-item">
                <button type="button" class="catalog__btn js-tabBtn ${active}" data-id="${value.categoryId}" title="${value.categoryName}">${value.categoryName}</button>
            </li>
        `;
    }).join('');

    return categoryItem;
};

categoryContent.innerHTML = renderCategoryList();

const catalogContent = document.querySelector('.catalog__content');
const categoryTabs = document.querySelectorAll('.js-tabBtn');

// Рендер списка товаров
const renderProductList = (id) => {
    let productList = '';

    products.forEach((product) => {
        const createProduct = () => {
            const productItem = `
                <li class="product">
                    <img src="img/tovar.jpg" alt="${product.productName}">
                    <span>${product.productName}</span>
                </li>
            `;

            return productItem;
        };

        if (product.categoryId === Number(id)) {
            productList = productList + createProduct();
        }

        return;
    })

    catalogContent.innerHTML = productList;
};

categoryTabs.forEach((tab) => {
    // Рендер товаров при загрузке страницы в начальной категории
    const initialProductId = tab.dataset?.id;
    renderProductList(initialProductId);

    // Рендер товаров при нажатии на категорию
    tab.addEventListener('click', (evt) => {
        const activeTab = document.querySelector('.catalog__btn.catalog__btn--is-active');
        const currentTab = evt.target;

        activeTab?.classList.remove('catalog__btn--is-active');
        currentTab?.classList.add('catalog__btn--is-active');

        const productId = evt.target.dataset.id;
        renderProductList(productId);
    })
});
