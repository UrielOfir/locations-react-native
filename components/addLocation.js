import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import axios from 'axios';

import generateData from '../middleware/generateData';
import globalStyles from '../style'

function submit(data) {
  axios.post('https://6c3d7336c57002.lhr.domains/api/userUpdates', { name: data.alertText, longitude: data.long , latitude: data.lat })
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
  // lat, long, alert

  const changeHandler = (val, set) => {
    set(val);
    console.log(lat);
  };

  function generateLocalData() {
    setLat(generateData().latitude);
    setLong(generateData().longitude);
    setAlertText(generateData().name);
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='latitude'
        onChangeText={val => changeHandler(val, setLat)}
        value={lat.toString()}
      />
      <TextInput
        style={styles.input}
        placeholder='longitude'
        onChangeText={val => changeHandler(val, setLong)}
        value={long.toString()}
      />
      <TextInput
        style={styles.input}
        placeholder='alert'
        onChangeText={val => changeHandler(val, setAlertText)}
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

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});