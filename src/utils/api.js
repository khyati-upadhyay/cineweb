import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3"

const CINEWEB_TOKEN = import.meta.env.VITE_APP_CINEWEB_TOKEN

const headers = {
    Authorization: "bearer " + CINEWEB_TOKEN,
}

export const fetchDataFromApi = async(url, params) => {
    try{
        const {data} = await axios.get(baseUrl + url, {
            headers,
            params
        })
        return data;
    } catch (err){
        console.log(err);
        return err;
    }
}
