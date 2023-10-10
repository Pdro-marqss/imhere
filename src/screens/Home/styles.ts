import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#000000',
      padding: 24,
   },
   h1: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
   },
   p: {
      color: '#9c9c9c',
      fontSize: 16,
   },
   input: {
      flex: 1,
      maxHeight: 56,
      backgroundColor: '#1F1E25',
      borderRadius: 5,
      color: '#FFFF',
      fontSize: 16,
      padding: 16,
   },
   buttonText: {
      color: '#FFFF',
      fontSize: 24,
   },
   button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31CF67',
      alignItems: 'center',
      justifyContent: 'center',
   },
   form: {
      width: '100%',
      flexDirection: 'row',
      gap: 15,
      marginTop: 36,
      marginBottom: 42,
   }
});