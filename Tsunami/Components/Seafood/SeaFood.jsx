/* eslint-disable */
import React from 'react'
import { ScrollView,  StyleSheet, Text, LayoutAnimation, Animated, NativeModules } from 'react-native'
import { stylesSeaFoodDark } from './stylesSeaFoodDark'
import { stylesSeaFoodWhite } from './stylesSeaFoodWhite'
import { useSelector } from 'react-redux'
import True from '../Svg/True/True'
import Card from '../Blocks/Card/Card'
import { stylesSeaFood } from './stylesSeaFood'
import { useState } from 'react'
import CardSvg from '../Svg/CardSvg/CardSvg'

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

const SeaFood = () => {
    const theme = useSelector((state) => state.theme)
    const seaFood = useSelector((state) => state.salads)
    const [loading, setLoading] = useState(true)
    const styles = StyleSheet.create(theme ? stylesSeaFoodWhite : stylesSeaFoodDark)
    const styles2 = StyleSheet.create(stylesSeaFood)

    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      setLoading(false)
    }, 1000);

  return (
        <ScrollView style={[styles.container, styles2.container]}>
            <Text style={[styles.tab, styles2.tab]}>Морепродукты</Text>
            {seaFood.map((elem, index) => {
              return(
                loading ?
                <Animated.View key={index}>
              <CardSvg key={index} />
            </Animated.View>
            :
            <Animated.View key={index}> 
            <Card data={elem} key={index} index={index} />
            </Animated.View> 
            )
          }
            )}
        <True />
        </ScrollView>
  )
}

export default SeaFood