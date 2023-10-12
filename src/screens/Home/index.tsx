import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
   const [participants, setParticipants] = useState<string[]>([]);

   function handleParticipantAdd(name: string) {
      if (participants.includes(name)) {
         return Alert.alert('Ops...', 'Esse participante ja existe');
      }

      setParticipants((state) => [...state, name]);
   }

   function handleParticipantRemove(name: string) {
      Alert.alert('Remover', `Deseja mesmo remover ${name} da lista ?`, [
         {
            text: 'Sim',
            onPress: () => Alert.alert('Deletado'),
         },
         {
            text: 'Não',
            style: 'cancel'
         }
      ]);

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
               onPress={() => handleParticipantAdd('Pedro')}
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
      </View>
   );
}