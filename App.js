import React, { useState } from 'react';
import { StyleSheet, View, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import globalStyles from './style'

import Header from './components/header';
import AddLocation from './components/addLocation';

export default function App() {
  const [componentSwitch, setComponentSwitch] = useState(null);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {!componentSwitch &&
            <View style={styles.button}>
              <Button color="orange" onPress={() => { setComponentSwitch("AddLocation") }} title='Add loacation alert' />
            </View>}
          {componentSwitch === "AddLocation" && <AddLocation/>}
          {componentSwitch &&
            <View style={globalStyles.button}>
            <Button color="orange" onPress={() => { setComponentSwitch(null) }} title='Home' />
            </View>}
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
