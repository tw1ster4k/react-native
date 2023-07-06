import React from 'react'
import { View, ScrollView, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import { stylesBasketDark } from './stylesBasketDark'
import { stylesBasketWhite } from './stylesBasketWhite'
import { useSelector } from 'react-redux'
import Card from '../Blocks/Card/Card'
import LineSvg from '../Svg/Line/LineSvg'
import True from '../Svg/True/True'

const Basket = () => {
    const basket = useSelector((state) => state.basket)
    const theme = useSelector((state) => state.theme)
    const params = ["Имя","Количество гостей","Время", "Телефон", "Дата"]
    const price = useSelector((state) => state.price)


    const unique = []
    const seen = {}

    basket.forEach((item) => {
      const key = item.title;
      if (!seen[key]) {
        seen[key] = true;
        unique.push(item);
      }
    });

    const styles = StyleSheet.create(theme ? stylesBasketWhite : stylesBasketDark)
  return (
        <ScrollView style={[styles.container, {width:"100%", height:"100%", overflow:"scroll"}]}>
            <Text style={[styles.tab, {fontWeight:600, fontSize:24, marginLeft:10, marginTop:32}]}>Корзина</Text>
            <Text style={[styles.sum, {fontWeight:400, fontSize:16, marginLeft:10}]}>{price ? `Итого на ${price} руб` : "Корзина пуста" }</Text>
            {unique.map((elem, index) => 
            <Card data={elem} key={index} index={index} />
            
            
            )}
            <Pressable style={[styles.call, {width:210, height:48, borderRadius:10, borderWidth:2,borderColor:"#ff7a00", marginTop:24,marginLeft:10,justifyContent:'center',alignItems:'center'}]} onPress={() => alert("Официант к вам скоро придёт, ожидайте")}>
                <Text style={[styles.callText, {fontWeight:600, fontSize:14}]}>Вызвать официанта</Text>
            </Pressable>
            <LineSvg />
            <Text style={[styles.tab, {fontWeight:600, fontSize:24, marginLeft:10}]}>Разместить предзаказ</Text>
            <Text style={[styles.tab, {width:368, marginTop:8, marginLeft:10}]}>Заполните предложенные поля, разместите заявку и дождитесь звонка администратора, для подтверждения вашего заказа</Text>
            <View style={{width:368,height:218,marginTop:16,marginLeft:10,display:"flex",flexDirection:"column",flexWrap:"wrap",alignContent:"space-around",justifyContent:"space-between",alignItems:'center'}}> 
                {params.map((el, index) =>
                <View key={index} style={el === "Дата" ? {width:176,height:67, marginTop:-19} : {width:176,height:67}}>
                    <Text style={[styles.infoText,{fontWeight:400, fontSize:14}]}>{el}</Text>
                    <TextInput style={[styles.infoInput, {width:176,marginTop:2,height:48,borderRadius:10,borderWidth:2,paddingLeft:16}]} />
                </View>
                )}
                <Pressable style={[styles.submit, {height:48,width:176,borderRadius:10,borderWidth:2,borderColor:"#ff7a00",display:"flex",alignItems:"center",justifyContent:"center"}]}>
                    <Text style={[styles.submitText, {fontWeight:600, fontSize:14}]}>Разместить</Text>
                </Pressable>
            </View>
            <True />
        </ScrollView>
  )
}

export default Basket