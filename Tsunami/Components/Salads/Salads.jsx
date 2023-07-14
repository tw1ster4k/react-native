/* eslint-disable */
import React from 'react'
import { ScrollView,  StyleSheet, Text, LayoutAnimation, Animated, NativeModules } from 'react-native'
import { stylesSaladsDark } from './stylesSaladsDark'
import { stylesSaladsWhite } from './stylesSaladsWhite'
import { useSelector } from 'react-redux'
import True from '../Svg/True/True'
import Card from '../Blocks/Card/Card'
import { stylesSalads } from './stylesSalads'
import { useState } from 'react'
import CardSvg from '../Svg/CardSvg/CardSvg'

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);


const Salads = () => {
    const theme = useSelector((state) => state.theme)
    const salads = useSelector((state) => state.salads)
    const [loading, setLoading] = useState(true)
    const styles = StyleSheet.create(theme ? stylesSaladsWhite : stylesSaladsDark)
    const styles2 = StyleSheet.create(stylesSalads)

    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      setLoading(false)
    }, 1000);

  return (
        <ScrollView style={[styles.container, styles2.container]}>
            <Text style={[styles.tab, styles2.tab]}>Салаты</Text>
            {  salads.map((el,index) =>
            loading ?
            <Animated.View key={index}>
              <CardSvg key={index} />
            </Animated.View>
            :
            <Animated.View key={index}>
              <Card data={el} key={index} index={index} />
            </Animated.View>
            )

            }
        <True />
        </ScrollView>
  )
}

export default Salads