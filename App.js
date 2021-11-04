import React, { useState } from 'react';
import { StyleSheet, View, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import globalStyles from './style';

import {  requestLocationPermission } from './components/LocaionPermission';
import Header from './components/header';
import AddLocation from './components/addLocation';
import GetAlerts from './components/getAlerts';
import AlertsInUserLocationRadius from './components/AlertsInUserLocationRadius';

requestLocationPermission();

export default function App() {
  const [componentSwitch, setComponentSwitch] = useState(null);


  //TODO: add button to userlocation component
  renderComponentSwitch = () => {
    if (!componentSwitch) {
      return <View>
        <View style={globalStyles.button}>
          <Button color="orange" onPress={() => { setComponentSwitch("AlertsInUserLocation") }} title='Check alerts radius from device location' />
        </View>
        <View style={globalStyles.button}>
          <Button color="orange" onPress={() => { setComponentSwitch("AddLocation") }} title='Add loacation alert' />
        </View>
        <View style={globalStyles.button}>
          <Button color="orange" onPress={() => { setComponentSwitch("GetAlerts") }} title='Check alerts radius' />
        </View>
      </View>
    }
    if (componentSwitch === "AddLocation") {
      return <><AddLocation />
        <View style={globalStyles.button}>
          <Button color="orange" onPress={() => { setComponentSwitch(null); }} title='Home' />
        </View></>
    }
    if (componentSwitch === "GetAlerts") {
      return <><GetAlerts />
        <View style={globalStyles.button}>
          <Button color="orange" onPress={() => { setComponentSwitch(null); }} title='Home' />
        </View></>
    }
    if (componentSwitch === "AlertsInUserLocation") {
      return <>
        <AlertsInUserLocationRadius />
        <View style={globalStyles.button}>
          <Button color="orange" onPress={() => { setComponentSwitch(null); }} title='Home' />
        </View></>      
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {renderComponentSwitch()}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  }
});
