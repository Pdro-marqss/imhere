import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
   const [participants, setParticipants] = useState<string[]>([]);
   const [participantName, setParticipantName] = useState('');

   function handleParticipantAdd() {
      if (participants.includes(participantName)) {
         return Alert.alert('Ops...', 'Esse participante ja existe');
      }

      setParticipants((state) => [...state, participantName]);
      setParticipantName('');
   }

   function handleParticipantRemove(name: string) {
      Alert.alert('Remover', `Deseja mesmo remover ${name} da lista ?`, [
         {
            text: 'Sim',
            onPress: () => setParticipants((state) => state.filter((participant) => participant !== name)),
         },
         {
            text: 'Não',
            style: 'cancel'
         }
      ]);
   }

   return (
      <View style={styles.container}>
         <Text style={styles.h1}>
            Campeonato de CS2
         </Text>
         <Text style={styles.p}>
            Sexta, 8 de Setembro de 2023
         </Text>

         <View style={styles.form}>
            <TextInput
               style={styles.input}
               placeholder='Nome do participante'
               placeholderTextColor='#6B6B6B'
               onChangeText={setParticipantName} //onChangeText nao precisa usar função anonima ((text) => setParticipantName(text))
               value={participantName}
            />

            <TouchableOpacity
               style={styles.button}
               onPress={() => handleParticipantAdd()}
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