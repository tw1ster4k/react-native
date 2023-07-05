import React from 'react'
import { View, Pressable, Text, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import HomeIcon from '../../Svg/HomeIcon/HomeIcon'
import Theme from '../../Svg/Theme/Theme'
import { stylesFooterDark } from './stylesFooterDark'
import { stylesFooterWhite } from './stylesFooterWhite'
import { useNavigation } from '@react-navigation/native'

const Footer = () => {
  const navigation = useNavigation()
    const basket = useSelector((state) => state.basket)
    const theme = useSelector((state) => state.theme)
    const price = useSelector((state) => state.price)
    const dispatch = useDispatch()
    const styles = StyleSheet.create(theme ? stylesFooterWhite : stylesFooterDark)
  return (
    <View style={{position:"absolute", left:0, right:0, bottom:10, width:"100%", flexDirection:"row"}}>
          <Pressable style={{marginLeft:10}} onPress={() => navigation.navigate("Меню")}>
                <HomeIcon />
          </Pressable>
          <Pressable style={{marginLeft:8}} onPress={() =>  dispatch({type:"ADD_THEME", payload:!theme})}>
                <Theme />
          </Pressable>
          <Pressable style={basket.length < 1 ? [styles.basket, {height:48,width:112,borderRadius:10,borderWidth:2, marginLeft:152,alignItems:'center',justifyContent:'space-evenly'}] : [styles.basket,{height:48,width:112,borderRadius:10,borderWidth:2, marginLeft:152,alignItems:'center',justifyContent:'space-evenly',borderColor:"#ff7a00"}]} onPress={() => navigation.navigate("Избранное")}>
            <Text style={[styles.price, {fontWeight:600, fontSize:14,lineHeight:17.15}]}>{price ? `${price} руб` : "Корзина"}</Text>
            <Text style={[styles.quantity, {fontWeight:400, fontSize:10,lineHeight:14}]}>{basket.length ? `${basket.length} товаров` : "пусто"}</Text>
          </Pressable>
    </View>
  )
}

export default Footer