import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';


const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
  <View style={styles.buttonStyle}>
  <Button
    title="Menu"
    onClick={() => Alert.alert('Left button pressed')}
  />

  <Button
    title="Search"
    onClick={() => Alert.alert('Right button pressed')}
  />
</View>

    <View>
      <Text style={styles.title}>
        This is a React App
        </Text>
      <Button
        title="Subscribe"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      
    </View>
    <Separator />

  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
