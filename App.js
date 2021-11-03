import React, { useState } from 'react';
import { StyleSheet, View, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import globalStyles from './style';


import Header from './components/header';
import AddLocation from './components/addLocation';
import GetAlerts from './components/getAlerts';

export default function App() {
  const [componentSwitch, setComponentSwitch] = useState(null);

  renderComponentSwitch = () => {
    if (!componentSwitch) {
      return <View>
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
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {renderComponentSwitch()}
          {/* {!componentSwitch &&
            <View>
              <View style={globalStyles.button}>
                <Button color="orange" onPress={() => { setComponentSwitch("AddLocation") }} title='Add loacation alert' />
              </View>
              <View style={globalStyles.button}>
                <Button color="orange" onPress={() => { setComponentSwitch("GetAlerts") }} title='Check alerts radius' />
              </View>
            </View>}
          {componentSwitch === "AddLocation" && <AddLocation />}
          {componentSwitch === "GetAlerts" && <GetAlerts />}
          {componentSwitch &&
            <View style={globalStyles.button}>
              <Button color="orange" onPress={() => { setComponentSwitch(null) }} title='Home' />
            </View>} */}
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
