//import axios from 'axios';

//console.log(data);나중에 삭제하기
const instance = axios.create({
  baseURL: 'https://panda-market-api-crud.vercel.app',
});
const getProductList = async ({ page, pageSize, keyword }) => {
  try {
    const params = {//new urlSearchParams()삭제
      page,
      pageSize,
      ...(keyword && { keyword: keyword }),
    };
    const response = await instance.get('/products', { params });
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[product getList] - 에러발생${error.message}`);
    throw error;
  }
};

const getProduct = async ({ productId }) => {
  try {
    const response = await instance.get(`/products/${productId}`);

    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[product get] - 에러발생${error.message}`);
    throw error;
  }
};

const createProduct = async ({
  name,
  description,
  price,
  tags,
  images,
}) => {
  try {
    const response = await instance.post('/products', {
      name,
      description,
      price,
      tags,
      images,
    });

    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[product create] - 에러발생 ${error.message}`);
    throw error;
  }
};

const patchProduct = async (productId, patchData) => {
  try {
    const response = await instance.patch(`/products/${productId}`, patchData);

    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[product patch] - 에러발생${error.message}`);
    throw error;
  }
};

const deleteProduct = async ({ productId }) => {
  try {
    const response = await instance.delete( `/products/${productId}`);

      return response.status;
    
  } catch (error) {
    console.log(`[product delete] - 에러발생${error.message}`);
    throw error;
  }
};

const ProductService = {
  getProduct,
  getProductList,
  createProduct,
  patchProduct,
  deleteProduct,
};
export default ProductService;
