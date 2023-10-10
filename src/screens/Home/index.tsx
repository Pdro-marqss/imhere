import { Text, View, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './styles';

export function Home() {
   return (
      <View style={styles.container}>
         <Text style={styles.h1}>
            Nome do evento
         </Text>
         <Text style={styles.p}>
            Sexta, 4 de Novembro de 2022
         </Text>

         <TextInput
            style={styles.input}
            placeholder='Nome do participante'
            placeholderTextColor='#6B6B6B'
         />

         <TextInput
            style={styles.input}
            placeholder='Telefone do participante'
            placeholderTextColor='#6B6B6B'
            keyboardType='numeric'
         />

         <StatusBar style="light" />
      </View>
   );
}