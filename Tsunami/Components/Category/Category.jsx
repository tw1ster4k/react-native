/* eslint-disable */
import React from 'react'
import { ScrollView,  StyleSheet, Text, LayoutAnimation, Animated, NativeModules, Dimensions } from 'react-native'
import { stylesCategoryDark } from './stylesCategoryDark'
import { stylesCategoryWhite } from './stylesCategoryWhite'
import { useSelector } from 'react-redux'
import True from '../Svg/True/True'
import Card from '../Blocks/Card/Card'
import { stylesCategory } from './stylesCategory'
import { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import CardSvg from '../Svg/CardSvg/CardSvg'
import Footer from '../Blocks/Footer/Footer'
import { stylesCategoryWeb } from './stylesCategoryWeb'
import CardSvgWeb from '../Svg/CardSvgWeb/CardSvgWeb'

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);


const Category = () => {
  const windowWidth = Dimensions.get('window').width
    const route = useRoute()
    const theme = useSelector((state) => state.theme)
    const salads = useSelector((state) => state.salads)
    const [loading, setLoading] = useState(true)
    const styles = StyleSheet.create(theme ? stylesCategoryWhite : stylesCategoryDark)
    const styles2 = StyleSheet.create(windowWidth > 1080 ? stylesCategoryWeb : stylesCategory)

     const category = route.name

    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      setLoading(false)
    }, 1000);

  /*   useEffect(() => {
      (async () => {
        const res = await fetch('http://localhost:3001', {
          method: "GET",
          headers: {
            'Content-Type':'application/json'
          }
        });
        const data = await res.json()
          
        setState(data)
       })()
            }, []) */
          
            console.log(route.params.category)
            

  return (
        <ScrollView style={[styles.container, styles2.container]}>
            <Text style={[styles.tab, styles2.tab]}>{category}</Text>
            {
                loading ?
                <Animated.View>
                  {windowWidth > 1080 ?
                  <CardSvgWeb  />
                  :
                    <CardSvg  />
                  }
            </Animated.View>
            :
            salads.map((elem, index) => 
            <Animated.View key={index}> 
            <Card data={elem} index={index} />
            </Animated.View> 
            
          
            )}
        <True /> 
        </ScrollView>
  )
}

export default Category