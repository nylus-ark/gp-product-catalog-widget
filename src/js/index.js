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
const categoryList = () => {
    const categoryItem = categories.map((value) => {
        return `
            <li class="catalog__categories-item">
                <button type="button" class="catalog__btn" data-id="${value.categoryId}" title="${value.categoryName}">${value.categoryName}</button>
            </li>
        `;
    }).join('');

    return categoryItem;
}

categoryContent.innerHTML = categoryList();

const catalogContent = document.querySelector('.catalog__content');
const categoryTabs = document.querySelectorAll('.catalog__categories-item');

// Рендер товаров при нажатии на категорию
categoryTabs.forEach((tab) => {
    tab.addEventListener('click', (evt) => {
        const productId = evt.target.dataset.id;
        let productList = '';

        products.forEach((product) => {
            const createProduct = () => {
                const productItem = `
                    <li class="product">
                        <img src="/src/img/tovar.jpg" alt="${product.productName}">
                        <span>${product.productName}</span>
                    </li>
                `;

                return productItem;
            };

            if (product.categoryId === Number(productId)) {
                productList = productList + createProduct();
            }

            return;
        })

        catalogContent.innerHTML = productList;
    })
});
