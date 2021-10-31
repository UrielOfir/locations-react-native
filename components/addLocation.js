import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

import generateData from '../middleware/generateData';
import globalStyles from '../style'

function submit(data) {
  axios.post('https://d64f57c296fd03.lhr.domains/api/userUpdates', { name: data.alertText, longitude: data.long , latitude: data.lat })
    .then(function (response) {
      // handle success
      console.log("req sent", response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

export default function AddLocation() {
  [lat, setLat] = useState(0);
  [long, setLong] = useState(0);
  [alertText, setAlertText] = useState('');

  function generateLocalData() {
    console.log("hi")
    setLat(generateData().latitude);
    setLong(generateData().longitude);
    setAlertText(generateData().name);
  }

  return (
    <View>
      <TextInput
        style={globalStyles.input}
        placeholder='latitude'
        onChangeText={val => setLat(val)}
        value={lat.toString()}
      />
      <TextInput
        style={globalStyles.input}
        placeholder='longitude'
        onChangeText={val => setLong(val)}
        value={long.toString()}
      />
      <TextInput
        style={globalStyles.input}
        placeholder='alert'
        onChangeText={val => setAlertText(val)}
        value={alertText}
      />
      <View style={globalStyles.button}>
        <Button color='coral' onPress={() => { generateLocalData() }} title='generete data' />

      </View>
      <View style={globalStyles.button}>
        <Button color='coral' onPress={() => {submit({alertText, lat, long})  }} title='add location alert' />
      </View>
    </View>
  );
}
