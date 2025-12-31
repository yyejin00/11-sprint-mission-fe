import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://panda-market-api-crud.vercel.app',
});

const getArticleList = async ({ page, pageSize, keyword }) => {
  try {
    const params = {
      page,
      pageSize,
      ...(keyword && { keyword: keyword }),
    };
    const response = await instance.get('/articles', { params });
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(` article getList - 에러발생${error.message}`);

    throw error;
  }
};

// const articleQuery = {
//   page: 1,
//   pageSize: 10,
//   keyword: "", // 검색 안 할 땐 undefined
// };
// getArticleList(articleQuery);//잘나옴

const getArticle = async ({ id }) => {
  try {
    const response = await instance.get(`/articles/${id}`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`articel 에러발생${error.message}`);
    throw error;
  }
};
// getArticle({id:5494}); //잘나옴!

const createArticle = async ({ title, content, image }) => {
  try {
    const response = await instance.post('/articles', {
      title,
      content,
      image,
    });
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(` article create - 에러발생${error.message}`);
    throw error;
  }
};

const patchArticle = async (articleId, patchData) => {
  try {
    const response = await instance.patch(`/articles/${articleId}`, patchData);
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(` article patch - 에러발생${error.message}`);
    throw error;
  }
};

const deleteArticle = async ({ articleId }) => {
  try {
    const response = await instance.delete(`/articles/${articleId}`);
    console.log(response.status);
    return response.status;
  } catch (error) {
    console.log(`article delete - 에러발생${error.message}`);
    throw error;
  }
};

const ArticleService = {
  getArticle,
  getArticleList,
  createArticle,
  patchArticle,
  deleteArticle,
};
export default ArticleService;
