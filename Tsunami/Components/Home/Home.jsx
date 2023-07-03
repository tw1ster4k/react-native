import React from 'react'
import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { homeStylesDark } from './homeStylesDark'
import { homeStylesWhite } from './homeStylesWhite'
import Header from '../Blocks/Navbar/Header'
import Footer from '../Blocks/Footer/Footer'


const Home = ({navigation}) => {
  const category = ["Салаты","Холодные закуски","Горячие закуски","Икорный бар","Морепродукты","Супы","Крупа и паста","Горячее","Мангал","Тесто и начинка"]
  const theme = useSelector((state) => state.theme)
  const styles = StyleSheet.create(theme ? homeStylesWhite : homeStylesDark)
  return (
    <View>

    <ScrollView style={[styles.container, {width:"100%", height:"auto", overflow:"scroll"}]}> 
    <Header />
      <Text style={[styles.tab,{fontWeight:600, fontSize:24, lineHeight:29.4, marginLeft:10}]}>Меню</Text>
        <View style={{width:393,height:350,display:"flex",flexDirection:"column",flexWrap:"wrap",alignContent:"space-around",justifyContent:"space-between",marginTop:18,}}>
                {category.map((el, index) => 
                <Pressable key={index} style={[styles.category, {width:176, height:48, borderRadius:10, borderWidth:2, marginTop:16}]} onPress={() => navigation.navigate(el)}>
                    <Text style={[styles.title, {fontWeight:400, fontSize:14, marginTop:15, marginLeft:16, lineHeight:16.8}]}>{el}</Text>
                </Pressable>
                )
                
              }
        </View>
        <Text style={[styles.warning,{width:368,marginTop:34,marginLeft:10,fontWeight:400,fontSize:14,lineHeight:22}]}>Уважаемые гости, если у Вас есть аллергия на какой-либо продукт, пожалуйста, предупредите об этом Вашего официанта. Меню является рекламной продукцией нашего ресторана. Утвержденное контрольное меню с выходами блюд и сведениями о пищевой ценности готовой продукции: калорийности, содержании белков, жиров, углеводов находится в уголке потребителя и предоставляется по первому Вашему требованию.</Text>
    </ScrollView>
    <Footer navigation={navigation} />
  </View>
  )
}

export default Home