import AxiosClient from './API';

async function fetchCategories({ page, limit }) {
  const axiosClient = new AxiosClient();

  return axiosClient.get(`/categories?page=${page}&limit=${limit}`);
}

export { fetchCategories };
