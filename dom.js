import { fetchData } from "./api.js";
const data = fetchData() 

const getImages = () => {
    console.log(data)

}

export {getImages}