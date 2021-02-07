import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View, Text, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import * as Animatable from 'react-native-animatable';
// import ResponsiveText from '../Components/ResponsiveText';
// import { ProgressBar, Colors } from 'react-native-paper';
import cardHome from '../Components/cardHome'
import {BackSvg, MenuSvg, MarvelSvg, SearchSvg} from '../Components/svgs';
import ResponsiveText from '../Components/ResponsiveText'
import {HeightSvg, WeightSvg, AgeSvg, UniverseSvg} from '../Components/svgs';
import SkillBar from '../Components/SkillBar'


const Hero = ({ navigation, route }) => {
  const [isLoading, setLoading] = useState(false);
  console.log(route.params);
  const data = route.params.item;
  console.log(data.caracteristics.birth)
  return (<>
        <LinearGradient colors={['transparent', '#000']} style={{position:'absolute', top:0, left:0, bottom:0, right:0, flex:1, zIndex: 1}}></LinearGradient>
            <Image
                style={styles.cover}
                source={route.params.image}
                resizeMode={'stretch'}
            />
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                    <View style={{width: 40, position: 'relative'}}>
                        <BackSvg/>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.Title}>
                    <ResponsiveText h5 title={data.alterEgo} style={{ color: "white" ,fontFamily:'gilroy-regular', marginLeft: 10}}></ResponsiveText >
                    <ResponsiveText h2 title={data.name} style={{ color: "white" ,fontFamily:'gilroy-heavy', marginLeft: 10, width:"50%"}}></ResponsiveText >
            </View>
            <ScrollView style={{zIndex:5, marginTop:10}}>
                <View style={styles.informations}>
                    <View style={styles.informationSector}>
                        <View style={styles.svgInformations}>
                            <AgeSvg
                            style={{position:'absolute', top:20, left:0}}
                            />
                        </View>
                        <ResponsiveText h5 title={2021 - parseInt(data.caracteristics.birth)+' Anos'} style={{ color: "white" ,fontFamily:'gilroy-regular', textAlign:'center', marginLeft: 10}}></ResponsiveText >
                    </View>
                    <View style={styles.informationSector}>
                        <View style={styles.svgInformations}>
                            <WeightSvg
                            style={{position:'absolute', top:20, left:0}}
                            />
                        </View>
                        <ResponsiveText h5 title={data.caracteristics.weight.value+' '+ data.caracteristics.weight.unity} style={{ color: "white" ,fontFamily:'gilroy-regular', textAlign:'center', marginLeft: 10}}></ResponsiveText >
                    </View>
                    <View style={styles.informationSector}>
                        <View style={styles.svgInformations}>
                            <HeightSvg
                            style={{position:'absolute', top:20, left:0}}
                            />
                        </View>
                        <ResponsiveText h5 title={data.caracteristics.height.value+' '+ data.caracteristics.height.unity} style={{ color: "white" ,fontFamily:'gilroy-regular', textAlign:'center', marginLeft: 10}}></ResponsiveText >
                    </View>
                    <View style={styles.informationSector}>
                        <View style={styles.svgInformations}>
                            <UniverseSvg
                            style={{position:'absolute', top:20, left:0}}
                            />
                        </View>
                        <ResponsiveText h5 title={data.caracteristics.universe} style={{ color: "white" ,fontFamily:'gilroy-regular', textAlign:'center', marginLeft: 10}}></ResponsiveText >
                    </View>   
                </View>
                <View style={styles.description}>
                    <Text style={{color:'white', paddingHorizontal: 10, fontSize: 14, fontFamily: 'gilroy-regular', lineHeight: 18, marginTop: 20}}>{data.biography}</Text>
                </View>
                <ResponsiveText h5 title={'Habilidades'} style={{ color: "white" ,fontFamily:'gilroy-bold', textAlign:'left', paddingHorizontal: 30, marginVertical: 20}}></ResponsiveText >
                <View style={styles.skills}>
                    <View style={styles.skillItem}>
                        <Text style={{color:'white', fontSize: 16, fontFamily: 'gilroy-regular', lineHeight: 18}}>{'Força'}</Text>
                        <View style={styles.bar}>
                            <View style={{backgroundColor: 'white', width: '70%', height:20}}></View>
                        </View>
                        {/* <SkillBar color="red" range="90"/> */}
                    </View>                    
                </View>
                <View style={styles.movies}>

                </View>
            </ScrollView>
        
</>);
}



const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        height: 70,
        paddingHorizontal: 20,
        zIndex: 5,
    },
    cover:{
        position: 'absolute',
        top:0,
        left:0,
        zIndex: 0
    },
    Title: {
        zIndex:5,
        marginTop:200,
        paddingHorizontal:20,
    },
    informations:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        height: 100,
        zIndex: 6,
        padding: 10,
        marginTop: 20
    },
    svgInformations:{
        width: 50, 
        height: 50,
        padding: 10
    },
    informationSector:{
        width: 100, 
        height: 100, 
        justifyContent:'center', 
        alignItems:'center'
    },
    description:{
        paddingHorizontal: 20,
        color: 'white'
    },
    skills:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'green',
        paddingHorizontal: 30
    },
    skillItem:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
    },
    bar:{
        zIndex:1,
        flex: 1,
        width: "100%",
        borderRadius: 50,
        height: 10,
    }
})


export default Hero;