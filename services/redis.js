//TODO: get here the axios request method of add location and get_alerts

import axios from 'axios';
import { LocalTile } from 'react-native-maps';
import { ngrok } from '../assets/apiData';

export { getAlertsInRadius }

const getAlertsInRadius = async ({ radius, long, lat }) => {
    console.log(radius, long, lat);
    const response = await axios.post(`${ngrok}/api/getAlertsInRadius`, {
        radius: radius,
        longitude: long,
        latitude: lat
    })
    return response.data;
}



