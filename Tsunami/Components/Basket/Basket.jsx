/* eslint-disable */
import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput, StyleSheet, Pressable, Animated, NativeModules, Dimensions, StatusBar } from 'react-native'
import { stylesBasketDark } from './stylesBasketDark'
import { stylesBasketWhite } from './stylesBasketWhite'
import { useSelector } from 'react-redux'
import Card from '../Blocks/Card/Card'
import LineSvg from '../Svg/Line/LineSvg'
import True from '../Svg/True/True'
import { stylesBasket } from './stylesBasket'
import { stylesBasketWeb } from './stylesBasketWeb'
import ButtonSubmitSvg from '../Svg/ButtonSubmitSvg/ButtonSubmitSvg'
import ButtonFormSubmitSvg from '../Svg/ButtonFormSubmitSvg/ButtonFormSubmitSvg'
import FormInputSvg from '../Svg/FormInputSvg/FormInputSvg'



const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

const Basket = () => {
  const windowWidth = Dimensions.get('window').width
    const basket = useSelector((state) => state.basket)
    const theme = useSelector((state) => state.theme)
    const params = [{name:"Имя", typeKeyboard:"default"},{name:"Количество гостей", typeKeyboard:"numeric"},{name:"Время", typeKeyboard:"phone-pad"}, {name:"Телефон", typeKeyboard:"phone-pad"}, {name:"Дата", typeKeyboard:"numeric"}]
    const price = useSelector((state) => state.price)
    const more = useSelector((state) => state.more)
    const bigImg = useSelector((state) => state.bigImg)
    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)

    const [number, setNumber] = useState(null)

    const unique = []
    const seen = {}

    basket.forEach((item) => {
      const key = item.title;
      if (!seen[key]) {
        seen[key] = true;
        unique.push(item);
      }
    });

    const numberFunction = (event) => {
      if (event >= 0 && event !== "") {
        setNumber(event)
      }else{
        setNumber(null)
      }
    }


    const styles = StyleSheet.create(theme ? stylesBasketWhite : stylesBasketDark)
    const styles2 = StyleSheet.create(windowWidth >=540 ? stylesBasketWeb : stylesBasket)
  return (
        <ScrollView style={[styles.container, styles2.container]}>
          <StatusBar backgroundColor={theme ? "#fff" : "#151515"} animated={true} />
            <Text style={[styles.tab, styles2.tab]}>Корзина</Text>
            <Text style={[styles.sum, styles2.sum]}>{price ? `Итого на ${price} руб` : "Корзина пуста" }</Text>
            {unique.map((elem, index) => {
              const quantity = basket.filter((el) => el.title === elem.title).length
              return(
            <Animated.View key={index}> 
            <Card data={elem} index={index} quantity={quantity} bigImgCard={bigImg.filter((el) => el.title === elem.title).length} moreCard={more.filter((el) => el.title === elem.title).length}/>
            </Animated.View> 
            )
          }
            )}
            <View style={[{width:176,height:67, marginTop:24}, windowWidth >=540 ? {marginLeft:'auto', marginRight:'auto', right:40} : {marginLeft:15}]}>
              <Text style={[styles.infoText,styles2.infoText,]} >Номер столика</Text>
              <TextInput style={[styles.infoInput, styles2.infoInput]} keyboardType="numeric" onChangeText={numberFunction} />
            </View>
            <Pressable style={[styles.call,styles2.call]} onPress={() => number !== null ? alert("Официант к вам скоро придёт, ожидайте") : ""} onPressIn={() => number !== null ? setActive(true) : ""}  onPressOut={() => setActive(false)} >
            <ButtonSubmitSvg active={active} />
                <Text style={[styles.callText, styles2.callText]}>Вызвать официанта</Text>
            </Pressable>
            { windowWidth >=540  ?
            ""
            :
              <LineSvg /> 
            }
            <Text style={[styles.tab, windowWidth >=540  ? {fontWeight:600, fontSize:24,marginLeft:'auto',marginRight:'auto', left:-128, marginTop:20} :{fontWeight:600, fontSize:24, marginLeft:15}]}>Разместить предзаказ</Text>
            <Text style={[styles.tab, windowWidth >=540  ? {width:531, marginTop:8,marginLeft:'auto',marginRight:'auto', left:5} : {width:368, marginTop:8, marginLeft:15}]}>Заполните предложенные поля, разместите заявку и дождитесь звонка администратора, для подтверждения вашего заказа</Text>
            <View style={styles2.params}> 
                {params.map((el, index) =>
                <View key={index} style={el.name === "Дата" ? {width:176,height:67, marginTop:-19,} : {width:176,height:67}}>
                    <Text style={[styles.infoText,styles2.infoText]}>{el.name}</Text>
                      <TextInput style={[styles.infoInput, styles2.infoInput]} keyboardType={el.typeKeyboard} /> 
                    {/*   <FormInputSvg /> */}
                </View>
                )}
                <Pressable style={[styles.submit, styles2.submit,windowWidth >=540  ? {marginLeft:80, top:-1} : {top:2}]} onPressIn={() => setActive2(true)} onPressOut={() => setActive2(false)}>
                  <ButtonFormSubmitSvg active={active2} />
                    <Text style={[styles.submitText, styles2.submitText]}>Разместить</Text>
                </Pressable>
            </View>
          <True />
        </ScrollView>
  )
}

export default Basket