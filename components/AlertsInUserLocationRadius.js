import React, { useState } from 'react';
import { FlatList, Text, View, TextInput, Button } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';

import { getAlertsInRadius } from '../services/redis';
import globalStyles from '../style';


async function getAlerts(data, set) {
    set(await getAlertsInRadius(data))
}
export default function AlertsInUserLocationRadius() {
    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [radius, setRadius] = useState('');
    const [list, setList] = useState([]);

    //TODO: check this thing
    if (PermissionsAndroid.RESULTS.GRANTED == "granted") {
        Geolocation.watchPosition(
            (position) => {
                console.log(position.coords);
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            }
        )
    }


    return (
        <View>
            <Text style={globalStyles.input}>
                Your position is:
            </Text>
            <Text style={globalStyles.input}>
                lat: {lat}, long: {long}
            </Text>
            <Text style={globalStyles.input}>
                Choose the radius to check alerts:
            </Text>
            <TextInput style={globalStyles.input}
                placeholder='radius'
                onChangeText={val => setRadius(val)}
                value={radius}
            />
            <View style={globalStyles.button} >
                <Button color='coral'
                    onPress={() => { getAlerts({ radius, lat, long }, setList) }}
                    title='Get Alerts' />
            </View>
            <View>
                <Text style={globalStyles.input}>The locations in your radius are here:</Text>
                <FlatList
                    data={list}
                    renderItem={({ item }) => <Text style={globalStyles.input}>{item}</Text>}
                />
            </View>
        </View>
    )
}