import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import {addAlert} from '../services/redis'

import generateData from '../services/generateData';
import globalStyles from '../style'

function submit(data) {
  addAlert(data)
}

export default function AddLocation() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [alertText, setAlertText] = useState('');

  function generateLocalData() {
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
