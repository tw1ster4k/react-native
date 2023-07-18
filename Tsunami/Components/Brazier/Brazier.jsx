/* eslint-disable */
import React from 'react'
import { ScrollView,  StyleSheet, Text, LayoutAnimation, Animated, NativeModules } from 'react-native'
import { stylesBrazierDark } from './stylesBrazierDark'
import { stylesBrazierWhite } from './stylesBrazierWhite'
import { useSelector } from 'react-redux'
import True from '../Svg/True/True'
import Card from '../Blocks/Card/Card'
import { stylesBrazier } from './stylesBrazier'
import { useState } from 'react'
import CardSvg from '../Svg/CardSvg/CardSvg'

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);


const Brazier = () => {
    const theme = useSelector((state) => state.theme)
    const brazier = useSelector((state) => state.salads)
    const [loading, setLoading] = useState(true)
    const styles = StyleSheet.create(theme ? stylesBrazierWhite : stylesBrazierDark)
    const styles2 = StyleSheet.create(stylesBrazier)

    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      setLoading(false)
    }, 1000);

  return (
        <ScrollView style={[styles.container, styles2.container]}>
            <Text style={[styles.tab, styles2.tab]}>Мангал</Text>
            {brazier.map((elem, index) => {
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

export default Brazier