import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.grupo1}>

      <View style={styles.container1}>
        <Image source ={require('./assets/perfil.png')}style ={{width: 100, height: 100}}/>

      </View> 

          <View style={styles.container2}>

            <Text style={styles.sytleText}>Lucas da Silva</Text>
   

            </View> 

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
       
  },
  container1:{
    flex:1,
    marginTop: 50,
    marginLeft: 20,
    justifyContent:'start',
    alignItems:'start',
  },
  container2:{
    
    
    
  },
  container3:{

  },
  grupo1:{
    
  },
  
});
