import AxiosClient from './API';
import { ENDPOINTS } from './constants';

async function getUsers() {
    const axiosClient = new AxiosClient();
    return axiosClient.get(ENDPOINTS.GET_USERS).then((res) => res.data);
}

export { getUsers };
