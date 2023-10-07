import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Nome:</Text>
      <Text style={styles.p}>Pedro Marques da Silva</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  h1: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 80,
    marginLeft: 30,
  },
  p: {
    color: '#9c9c9c',
    fontSize: 14,
    marginLeft: 30,
  }
});
