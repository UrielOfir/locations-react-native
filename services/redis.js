//TODO: get here the axios request method of add location and get_alerts

import axios from 'axios';
import { LocalTile } from 'react-native-maps';
import { ngrok } from '../assets/apiData';

export { getAlertsInRadius , addAlert}

const getAlertsInRadius = async ({ radius, long, lat }) => {
    console.log(radius, long, lat);
    const response = await axios.post(`${ngrok}/api/getAlertsInRadius`, {
        radius: radius,
        longitude: long,
        latitude: lat
    })
    return response.data;
}

const addAlert = ({ alertText, long, lat }) => {
    axios.post(`${ngrok}/api/addAlert`, { name: alertText, longitude: long, latitude: lat })
        .then(function (response) {
            // handle success
            console.log("req to add alert sent: ", response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}



