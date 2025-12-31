import ProductService from './api/ProductService.js';

const productsEl = document.querySelector('#productList');
const createButton = document.querySelector('#createButton');
const searchButton = document.querySelector('#searchButton');

//데이터 가져오기
const renderProducts = (products) => {
  productsEl.innerHTML = '';
  products.forEach((product) => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - ${product.price}원`;
    productsEl.appendChild(li);
  });
};

const renderProduct = (product) => {
  productsEl.innerHTML = '';
  const li = document.createElement('li');
  li.textContent = `${product.id} ${product.name} - ${product.price}원`;
  productsEl.appendChild(li);
};

const loadProducts = async () => {
  try {
    const data = await ProductService.getProductList({
      page: 1,
      pageSize: 100,
      keyword: '',
    });
    console.log(data);
    renderProducts(data.list);
  } catch (error) {
    console.log(`데이터로드 실패 : ${error.status}`);
  }
};

createButton.addEventListener('click', async () => {
  try {
    console.log('클릭!');
    await ProductService.createProduct({
      name: 'newProductTesting2956',
      description: '테스팅',
      price: 10,
      tags: ['test'],
      images: [],
    });
    loadProducts();
  } catch (error) {
    console.log(` newProduct 데이터로드 실패 : ${error.status}`);
  }
});

searchButton.addEventListener('click', async () => {
  try {
    const data = await ProductService.getProduct({ productId: 2956 });
    renderProduct(data);
  } catch (error) {
    console.log(`searchButton 실패 : ${error.message}`);
  }
});
