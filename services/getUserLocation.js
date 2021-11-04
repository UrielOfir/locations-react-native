import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';

async function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        if (PermissionsAndroid.RESULTS.GRANTED !== "granted") {
            return reject('No permissions');
        }

        Geolocation.getCurrentPosition(
            (position) => {
                return resolve(position)
            },
            (error) => {
                // See error code charts below.
                return reject({ code: error.code, message: error.message });
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        )
    });
}

export async function getUserLocation() {
    location = await getCurrentPosition();
    return location
}