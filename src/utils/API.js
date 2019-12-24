import Axios from "axios";
import { headers } from "../Constant/Constant";



export const makeAPICall = async (key, value) => {
    let response = null
    let url = null, reqObj

    try {
        switch (key) {
            case 'postRequest':
                url = value
                reqObj = value
                await Axios.post(url, reqObj)
                    .then(res => response = res.data)


                break;

            case 'getRequest':
                url = value
                await Axios.get(url, headers)
                    .then(res => response = res.data)
                break;

            case 'putRequest':
                url = value.url
                reqObj = value.reqObj
                await Axios.put(url, reqObj, headers)
                    .then(res => response = res.data)
                break;

            default:
                console.log('invalid key.. ', key)
                break;
        }
    } catch (error) {

    }


    return response
}