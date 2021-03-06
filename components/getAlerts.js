import React, { useState } from 'react';
import { FlatList, Text, View, TextInput, Button } from 'react-native';
import {getAlertsInRadius} from '../services/redis'

import generateData from '../services/generateData';
import globalStyles from '../style';


async function getAlerts(data, set) {
    set(await getAlertsInRadius(data))
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
        </View >
    );
}