/* eslint-disable */
import React from 'react'
import { View, Pressable, Text, StyleSheet, Dimensions,Platform } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import HomeIcon from '../../Svg/HomeIcon/HomeIcon'
import Theme from '../../Svg/Theme/Theme'
import { stylesFooterDark } from './stylesFooterDark'
import { stylesFooterWhite } from './stylesFooterWhite'
import { useNavigation } from '@react-navigation/native'
import { stylesFooter } from './stylesFooter'
import { stylesFooterWeb } from './stylesFooterWeb'
import Back from '../../Svg/Back/Back'

const Footer = ({homeNavigate}) => {
  const navigation = useNavigation()
    const basket = useSelector((state) => state.basket)
    const theme = useSelector((state) => state.theme)
    const price = useSelector((state) => state.price)
    const dispatch = useDispatch()
    const windowWidth = Dimensions.get("window").width
    const styles = StyleSheet.create(theme ? stylesFooterWhite : stylesFooterDark)
    const styles2 = StyleSheet.create(windowWidth >= 540 ? stylesFooterWeb :stylesFooter)
    
 

  return (
    <View style={[styles2.footer, Platform.OS === "web" ? {position:'fixed'} : ""]}>
          <Pressable style={ windowWidth >= 540 ? {marginLeft:-13} : {marginLeft:15}} onPress={() => navigation.navigate(homeNavigate)}>
                <HomeIcon />
          </Pressable>
          <Pressable style={{marginLeft:8}} onPress={() =>  dispatch({type:"ADD_THEME", payload:!theme})}>
                <Theme />
          </Pressable>
          <Pressable style={{marginLeft:8}} onPress={() => navigation.goBack()} >
              <Back />
          </Pressable>
          <Pressable style={ windowWidth >= 540 ? basket.length < 1 ? [styles.basket, {height:48,width:112,borderRadius:10,borderWidth:2, marginLeft:250,alignItems:'center',justifyContent:'space-evenly'}] : [styles.basket,{height:48,width:112,borderRadius:10,borderWidth:2, marginLeft:250,alignItems:'center',justifyContent:'space-evenly',borderColor:"#ff7a00"}] : basket.length < 1 ? [styles.basket, {height:48,width:112,borderRadius:10,borderWidth:2, marginLeft:96,alignItems:'center',justifyContent:'space-evenly'}] : [styles.basket,{height:48,width:112,borderRadius:10,borderWidth:2, marginLeft:96,alignItems:'center',justifyContent:'space-evenly',borderColor:"#ff7a00"}]} onPress={() => navigation.navigate("Избранное")}>
            <Text style={[styles.price, styles2.price]}>{price ? `${price} руб` : "Корзина"}</Text>
            <Text style={[styles.quantity, styles2.quantity]}>{basket.length ? `${basket.length} товаров` : "пусто"}</Text>
          </Pressable>
    </View>
  )
}

export default Footer