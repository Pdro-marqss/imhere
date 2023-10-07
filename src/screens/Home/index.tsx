import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { styles } from './styles';

export default function Home() {
   return (
      <View style={styles.container}>
         <Text style={styles.h1}>Nome:</Text>
         <Text style={styles.p}>Pedro Marques da Silva</Text>
         <StatusBar style="light" />
      </View>
   );
}