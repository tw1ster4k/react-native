/* eslint-disable */
import React from 'react'
import { ScrollView,  StyleSheet, Text, LayoutAnimation, Animated, NativeModules } from 'react-native'
import { stylesCaviarBarDark } from './stylesCaviarBarDark'
import { stylesCaviarBarWhite } from './stylesCaviarBarWhite'
import { useSelector } from 'react-redux'
import True from '../Svg/True/True'
import Card from '../Blocks/Card/Card'
import { stylesCaviarBar } from './stylesCaviarBar'
import { useState } from 'react'
import CardSvg from '../Svg/CardSvg/CardSvg'

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);


const CaviarBar = () => {
    const theme = useSelector((state) => state.theme)
    const caviarBar = useSelector((state) => state.salads)
    const [loading, setLoading] = useState(true)
    const styles = StyleSheet.create(theme ? stylesCaviarBarWhite : stylesCaviarBarDark)
    const styles2 = StyleSheet.create(stylesCaviarBar)

    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      setLoading(false)
    }, 1000);

  return (
        <ScrollView style={[styles.container, styles2.container]}>
            <Text style={[styles.tab, styles2.tab]}>Икорный бар</Text>
            {caviarBar.map((elem, index) => {
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

export default CaviarBar