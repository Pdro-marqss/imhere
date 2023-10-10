import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export function Participant() {
   return (
      <View style={styles.container}>
         <Text style={styles.name}>Pedro Marques</Text>

         <TouchableOpacity
            style={styles.button}
         >
            <Text style={styles.buttonText}>
               -
            </Text>
         </TouchableOpacity>
      </View>
   );
}