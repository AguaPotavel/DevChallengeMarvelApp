import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, FlatList, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import * as Animatable from 'react-native-animatable';
// import ResponsiveText from '../Components/ResponsiveText';
import CardHome from '../Components/cardHome'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
  ];

const Item = ({ title }) => (
    <View style={styles.card}>
      <CardHome realName="Peter Parker" name="Homem Aranha" image="../Assets/chars/spider-man.png"/>
    </View>
  );


const Home = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);


  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  useEffect( () => {
    setLoading(false)
  }, [])

  return (<>
        <View style={{flex:1}}>
            <Text>teste</Text>
        </View>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
        />
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
  cardContent:{
    flex: 1,
    flexDirection: 'row',
  },
  card:{
      marginHorizontal: 20
  }
})


export default Home;