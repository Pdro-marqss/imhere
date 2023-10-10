import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
   function handleParticipantAdd() {
      console.log('voce clicou no botao')
   }

   return (
      <View style={styles.container}>
         <Text style={styles.h1}>
            Nome do evento
         </Text>
         <Text style={styles.p}>
            Sexta, 4 de Novembro de 2022
         </Text>

         <View style={styles.form}>
            <TextInput
               style={styles.input}
               placeholder='Nome do participante'
               placeholderTextColor='#6B6B6B'
            />

            <TouchableOpacity
               style={styles.button}
               onPress={handleParticipantAdd}
            >
               <Text style={styles.buttonText}>
                  +
               </Text>
            </TouchableOpacity>
         </View>

         <Participant />
         <Participant />
         <Participant />

         <StatusBar style="light" />
      </View>
   );
}