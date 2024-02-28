import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import CampoEmail from './Components/campoemail';
import CampoSenha from './Components/camposenha';
import ConfirmaSenha from './Components/Confirmasenha';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.grupo1}>

      
            <View style={styles.container1}>
              <Image source ={require('./assets/Logop.png')}style ={{width: 100, height: 100}}/>

            </View> 

            <View style={styles.container2}>
              <Text style={styles.sytleText}>Cadastre-se</Text>
              

            </View> 

      </View>
      <View style={styles.grupo2}>
      <View style={styles.container3}>
        <CampoEmail />
        <CampoSenha />
        <ConfirmaSenha />
      </View>
      
        <View>
          <Text>--------------------------------------------- OU ---------------------------------------------</Text>
        </View>
        <View style={styles.container4}>
              <Image source ={require('./assets/apple.png')}style ={{width: 75, height: 75}}/>
              <Image source ={require('./assets/face.png')}style ={{width: 70, height: 70}}/>
              <Image source ={require('./assets/google.jpg')}style ={{width: 95, height: 95}}/>
              
              
            </View> 
            <View style={styles.container5}>
          <Text>já possui uma conta? </Text>
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
    flexDirection: 'column',
    
    
  },
  container1:{
    justifyContent:'start',
    
    alignItems:'start',
        
   
  },
  container2:{
    marginTop: 32,
    marginLeft: 20,
    maxHeight: 40,
    width: 200,
    
  },
  container3:{
    marginTop: 40,
    marginBottom: 40,
    padding: 20,

  },
  container4:{
    marginTop: 70,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems: 'center',
  },
 container5: {
  marginTop: 55,
  alignItems:'center',
 },
  grupo1:{
    flex:1,
    flexDirection: 'row',
    marginTop: 70,
    backgroundColor: '#FFF',
    justifyContent:'start',
    marginLeft: 20,
    width: 100,
    height: 150,
    maxHeight: 100,
  },
  
  sytleText:{
    fontSize: 30,
  },

});
