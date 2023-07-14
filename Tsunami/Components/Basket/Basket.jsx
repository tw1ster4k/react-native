/* eslint-disable */
import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import { stylesBasketDark } from './stylesBasketDark'
import { stylesBasketWhite } from './stylesBasketWhite'
import { useSelector } from 'react-redux'
import Card from '../Blocks/Card/Card'
import LineSvg from '../Svg/Line/LineSvg'
import True from '../Svg/True/True'
import { stylesBasket } from './stylesBasket'
import CardSvg from '../Svg/CardSvg/CardSvg'

const Basket = () => {
    const basket = useSelector((state) => state.basket)
    const theme = useSelector((state) => state.theme)
    const params = [{name:"Имя", typeKeyboard:"default"},{name:"Количество гостей", typeKeyboard:"numeric"},{name:"Время", typeKeyboard:"phone-pad"}, {name:"Телефон", typeKeyboard:"phone-pad"}, {name:"Дата", typeKeyboard:"numeric"}]
    const price = useSelector((state) => state.price)
    const [date, setDate] = useState(new Date())
    const [loading, setLoading] = useState(true)


    const unique = []
    const seen = {}

    basket.forEach((item) => {
      const key = item.title;
      if (!seen[key]) {
        seen[key] = true;
        unique.push(item);
      }
    });
    
    setTimeout(() => {
      setLoading(false)
    }, 1000);

    const styles = StyleSheet.create(theme ? stylesBasketWhite : stylesBasketDark)
    const styles2 = StyleSheet.create(stylesBasket)
  return (
        <ScrollView style={[styles.container, styles2.container]}>
            <Text style={[styles.tab, styles2.tab]}>Корзина</Text>
            <Text style={[styles.sum, styles2.sum]}>{price ? `Итого на ${price} руб` : "Корзина пуста" }</Text>
            {unique.map((elem, index) => 
            loading ?
              <CardSvg key={index} />
            :
            <Card data={elem} key={index} index={index} />
            
            
            )}
            <Pressable style={[styles.call,styles2.call]} onPress={() => alert("Официант к вам скоро придёт, ожидайте")}>
                <Text style={[styles.callText, styles2.callText]}>Вызвать официанта</Text>
            </Pressable>
            <LineSvg />
            <Text style={[styles.tab, {fontWeight:600, fontSize:24, marginLeft:10}]}>Разместить предзаказ</Text>
            <Text style={[styles.tab, {width:368, marginTop:8, marginLeft:10}]}>Заполните предложенные поля, разместите заявку и дождитесь звонка администратора, для подтверждения вашего заказа</Text>
            <View style={styles2.params}> 
                {params.map((el, index) =>
                <View key={index} style={el.name === "Дата" ? {width:176,height:67, marginTop:-19} : {width:176,height:67}}>
                    <Text style={[styles.infoText,styles2.infoText]}>{el.name}</Text>
                      <TextInput style={[styles.infoInput, styles2.infoInput]} keyboardType={el.typeKeyboard} /> 
                </View>
                )}
                <Pressable style={[styles.submit, styles2.submit]}>
                    <Text style={[styles.submitText, styles2.submitText]}>Разместить</Text>
                </Pressable>
            </View>
            <True />
        </ScrollView>
  )
}

export default Basket