import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
   const participants = ['Pedro', 'Monique', 'Mariana', 'Patricia', 'Robson', 'Mila', 'Maju', 'Billy', 'Jarvan IV', 'Jubicleison', 'Robervaul', 'Tsushiro kimimame'];

   function handleParticipantAdd() {
      console.log('voce clicou no botao')
   }

   function handleParticipantRemove(name: string) {
      console.log(`${name} foi removido`);
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

         <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({ item }) => (
               <Participant
                  name={item}
                  key={item}
                  onRemove={() => handleParticipantRemove(item)}
               />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
               <Text style={styles.listEmptyText}>
                  Lista vazia. Acho que ninguém chegou ainda 🐒
               </Text>
            )}
         />

         <StatusBar style="light" />
      </View>
   );
}