import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, FlatList, View, Text, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import * as Animatable from 'react-native-animatable';
// import ResponsiveText from '../Components/ResponsiveText';
import CardHome from '../Components/cardHome'
import ResponsiveText from '../Components/ResponsiveText'
import {HeroSvg, HumanSvg, AntiHeroSvg, VillainSvg, AlienSvg, MenuSvg, MarvelSvg, SearchSvg} from '../Components/svgs';
import Svg from 'react-native-svg';
const database = require('../Assets/database.json');
import ImageSelector from '../Config/ImageSelector'


const Item = ({ item, navigate}) => {
    return(
    <TouchableOpacity onPress={()=> navigate.navigate('Hero', {item:item, image:ImageSelector(item.name)})}>
        <View style={styles.card}>
            <CardHome realName={item.alterEgo} name={item.name} image={ImageSelector(item.name)}/>
        </View>
      </TouchableOpacity>);
}


const Home = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);

  const renderItem = ({ item}) => (
    <Item item={item} navigate={navigation}/>
  );

  useEffect( () => {
    setLoading(false)
    console.log(database.heroes)
  }, [])

  return (<>
        <View style={styles.header}>
            <View style={{width: 30, position: 'relative'}}>
                <MenuSvg/>
            </View>
            <View style={{width: 100, position: 'relative'}}>
                <MarvelSvg/>
            </View>
            <View style={{width: 30, position: 'relative'}}>
                <SearchSvg/>
            </View> 
        </View>
        <ScrollView>
        <View style={styles.homeHeader}>
            <View style={{marginTop: 10}}>
            <ResponsiveText h5 title={'Bem vindo ao Marvel Heroes'} style={{ color: "#B7B7C8" ,fontFamily:'gilroy-semibold'}}></ResponsiveText >
            <ResponsiveText h2 title={'Escolha o seu personagem'} style={{ color: "#313140", fontFamily:'gilroy-heavy'}}></ResponsiveText >
            </View>
            <View style={styles.icons}>
                <LinearGradient colors={['#fcba03', '#fce303']} style={{heigth:50, width: 60, backgroundColor:'black', borderRadius:50, marginRight:20}}>
                    <View style={{zIndex: 1, justifyContent:'center', alignItems:'center', flex:1, padding: 12}}>
                        <HeroSvg/>
                    </View>
                </LinearGradient>
                <LinearGradient colors={['#05edf5', '#05a5f5']} style={{heigth:50, width: 60, backgroundColor:'black', borderRadius:50, marginRight:20}}>
                    <View style={{zIndex: 1, justifyContent:'center', alignItems:'center', flex:1, padding: 12}}>
                        <HumanSvg/>
                    </View>
                </LinearGradient>
                <LinearGradient colors={['#050df5', '#4d05f5']} style={{heigth:50, width: 60, backgroundColor:'black', borderRadius:50, marginRight:20}}>
                        <View style={{zIndex: 1, justifyContent:'center', alignItems:'center', flex:1, padding: 12}}>
                            <AntiHeroSvg/>
                        </View>
                </LinearGradient>
                <LinearGradient colors={['#f50505', '#F2264B']} style={{heigth:50, width: 60, backgroundColor:'black', borderRadius:50, marginRight:20}}>
                    <View style={{zIndex: 1, justifyContent:'center', alignItems:'center', flex:1, padding: 12}}>
                        <VillainSvg/>
                    </View>
                </LinearGradient>
                <LinearGradient colors={['#c910e6', '#d33feb']} style={{heigth:50, width: 60, backgroundColor:'black', borderRadius:50, marginRight:20}}>
                    <View style={{zIndex: 1, justifyContent:'center', alignItems:'center', flex:1, padding: 12}}>
                        <AlienSvg/>
                    </View>
                </LinearGradient>
                
            </View>
        </View>
        <View style={styles.divisor}>
            <Text style={styles.titleDivisor}>Heróis</Text>
            <Text style={styles.textDivisor}>Ver tudo</Text>
        </View>
        <FlatList
            data={database.heroes}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
        />
        <View style={styles.divisor}>
            <Text style={styles.titleDivisor}>Aliens</Text>
            <Text style={styles.textDivisor}>Ver tudo</Text>
        </View>
        <FlatList
            data={database.aliens}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
        />
        <View style={styles.divisor}>
            <Text style={styles.titleDivisor}>Humanos</Text>
            <Text style={styles.textDivisor}>Ver tudo</Text>
        </View>
        <FlatList
            data={database.humans}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
        />
        <View style={styles.divisor}>
            <Text style={styles.titleDivisor}>Anti Heróis</Text>
            <Text style={styles.textDivisor}>Ver tudo</Text>
        </View>
        <FlatList
            data={database.antiHeroes}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
        />
        <View style={styles.divisor}>
            <Text style={styles.titleDivisor}>Vilões</Text>
            <Text style={styles.textDivisor}>Ver tudo</Text>
        </View>
        <FlatList
            data={database.villains}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            style={{marginBottom:20}}
        />
        </ScrollView>
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
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 60,
      paddingHorizontal: 20
  },
  cardContent:{
    flex: 1,
    flexDirection: 'row',
  },
  card:{
      marginHorizontal: 10
  },
  icons:{
      marginVertical: 20,
      flex:1,
      flexDirection: 'row',
      height: 60,
      backgroundColor: 'white',
  },
  homeHeader:{
      flex: 1,
      marginLeft: 20
  },
  divisor:{
    flex:1,
    flexDirection: 'row',
    height: 25,
    marginVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  titleDivisor:{
    fontFamily: 'gilroy-bold',
    fontSize: 20,
    color: '#F2264B'
  },
  textDivisor:{
    fontFamily: 'gilroy-regular',
    fontSize: 14,
    color: '#B7B7C8'
  }
})


export default Home;