import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import * as Animatable from 'react-native-animatable';
// import ResponsiveText from '../Components/ResponsiveText';
import cardHome from '../Components/cardHome'


const Hero = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);

//   useEffect( () => {
//     setLoading(false)
//   }, [])

  return (<>
        <View>
            <cardHome realName="Peter Parker" name="Homem Aranha" image="../Assets/chars/spider-man.png"/>
        </View>
</>);
}



const styles = StyleSheet.create({
  linearGradient: {
      flex: 1,
      borderRadius: 5
  },
  container:{
      flex: 1
  },
  header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      fontSize: 16,
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 15
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16
  }
})


export default Hero;