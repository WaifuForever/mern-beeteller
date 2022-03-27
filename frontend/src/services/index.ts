import axios, { AxiosInstance } from 'axios';

//api.defaults.headers.common['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.common[
    'Access-Control-Allow-Origin'
] = `${process.env.REACT_APP_BASE_URL}`;
axios.defaults.withCredentials = true;

interface Response {
    data: { _id: string };
    message: string;
    metadata: { accessToken: string };
}

const api: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

const config = (token: string) => {
    return {
        headers: {
            Authorization: `Basic ${token}`,
        },
    };
};

const getLast = async (currency: string, days: number, token: string) => {
    return api
        .get(
            `/currencies/lately?currency=${currency}&days=${days}`,
            config(token)
        )
        .then((response) => {
            return response.data.data;
        })
        .catch((err) => {
            console.log('get info failed');
            return err;
        });
};

const getBoxesData = async (token: string) => {
    return await api
        .get('/currencies/now', config(token))
       
};

const refreshToken = async () => {
    return await api
        .get('/refresh-token', { withCredentials: true })
        
};

const signIn: (email: string, password: string) => Promise<Response> = async (
    email: string,
    password: string
) => {
    return api
        .get(`/sign-in`, {
            auth: {
                username: email,
                password: password,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            return err;
        });
};

export { signIn, getBoxesData, getLast, refreshToken };
