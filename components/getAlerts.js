import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

import generateData from '../middleware/generateData';
import globalStyles from '../style'

async function submit(data) {
    return axios.post('https://d64f57c296fd03.lhr.domains/api/adminReq', {
        radius: data.radius,
        longitude: data.long,
        latitude: data.lat
    }).then(function (response) {
        // handle success
        console.log("sumbit:",response.data);
        return JSON.stringify(response.data);
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

export default function GetAlerts() {
    [lat, setLat] = useState(0);
    [long, setLong] = useState(0);
    [radius, setRadius] = useState('');

    function generateLocalData() {
        console.log("hi")
        setLat(generateData().latitude);
        setLong(generateData().longitude);
        setRadius(generateData().radius);
    }

    return (
        <View>
            <TextInput style={globalStyles.input}
                placeholder='latitude'
                onChangeText={val => setLat(val)}
                value={lat.toString()}
            />
            <TextInput style={globalStyles.input}
                placeholder='longitude'
                onChangeText={val => setLong(val)}
                value={long.toString()}
            />
            <TextInput style={globalStyles.input}
                placeholder='radius'
                onChangeText={val => setRadius(val)}
                value={radius}
            />
            <View style={globalStyles.button} >
                <Button color='coral'
                    onPress={() => { generateLocalData() }}
                    title='generete data' />

            </View>
            <View style={globalStyles.button} >
                <Button color='coral'
                    onPress={() => {submit({ radius, lat, long }) }}
                    title='Get Alerts' />
            </View>
        </View >
    );
}