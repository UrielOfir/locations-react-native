import React, { useState } from 'react';
import { FlatList, Text, View, TextInput, Button } from 'react-native';
import axios from 'axios';

import { ngrok } from '../assets/apiData'
import generateData from '../services/generateData';
import globalStyles from '../style'

async function submit(data, set) {
    console.log(ngrok);
    const response = await axios.post(`${ngrok}/api/adminReq`, {
        radius: data.radius,
        longitude: data.long,
        latitude: data.lat
    }).then(function (response) {
        // handle success
        console.log("sumbit:", response.data);
        set(response.data)
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    return response;
}

export default function GetAlerts() {
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [radius, setRadius] = useState('');
    const [list, setList] = useState([]);

    function generateLocalData() {
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
                    onPress={() => { submit({ radius, lat, long }, setList) }}
                    title='Get Alerts' />
            </View>
            
            <View>
                <Text style={globalStyles.input}>The locations in your radius are here:</Text>
                <FlatList
                    data={list}
                    renderItem={({ item }) => <Text style={globalStyles.input}>{item}</Text>}
                />
            </View>
        </View >
    );
}