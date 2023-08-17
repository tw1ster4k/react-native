/* eslint-disable */
import React, {useEffect} from 'react'
import { ScrollView,  StyleSheet, Text, LayoutAnimation, Animated, NativeModules, Dimensions, StatusBar, Platform } from 'react-native'
import { stylesCategoryDark } from './stylesCategoryDark'
import { stylesCategoryWhite } from './stylesCategoryWhite'
import { useSelector, useDispatch } from 'react-redux'
import True from '../Svg/True/True'
import Card from '../Blocks/Card/Card'
import { stylesCategory } from './stylesCategory'
import { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import CardSvg from '../Svg/CardSvg/CardSvg'
import { stylesCategoryWeb } from './stylesCategoryWeb'
import CardSvgWeb from '../Svg/CardSvgWeb/CardSvgWeb'
import axios from 'axios'
import SystemNavigationBar from 'react-native-system-navigation-bar'

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);


const Category = () => {
  const windowWidth = Dimensions.get('window').width
  const dispatch = useDispatch()
    const route = useRoute()
    const theme = useSelector((state) => state.theme)
    const bigImg = useSelector((state) => state.bigImg)
    const [loading, setLoading] = useState(true)
    const styles = StyleSheet.create(theme ? stylesCategoryWhite : stylesCategoryDark)
    const styles2 = StyleSheet.create(windowWidth >=540  ? stylesCategoryWeb : stylesCategory)
    const more = useSelector((state) => state.more)

    const [goods, setGoods] = useState([{name:'',content:"",price:0,preview:null}])

    dispatch({type:"ADD_BACK", payload: true})

  
Platform.OS !== "web" ?
SystemNavigationBar.setNavigationColor(theme ? "#fff" : "#151515")
:
""

     const category = route.name
  useEffect(() => {
    axios.get(`https://api.menu.true-false.ru/api/${route.params.category}/products`).then(result => {
      setGoods(result.data.data)
      setLoading(false)
    }
    ).catch(error => console.log(error))
    
  },[])


  return (
        <ScrollView style={[styles.container, styles2.container]}>
          <StatusBar backgroundColor={theme ? "#fff" : "#151515"} animated={true} />
            <Text style={[styles.tab, styles2.tab]}>{category}</Text>
            {
                loading ?
                <Animated.View>
                  {windowWidth >=540  ?
                  <CardSvgWeb  />
                  :
                    <CardSvg  />
                  }
            </Animated.View>
            :
            goods.map((elem, index) => 
            <Animated.View key={index}> 
            <Card data={elem} bigImgCard={bigImg.filter((el) => el.name === elem.name).length} moreCard={more.filter((el) => el.name === elem.name).length} />
            </Animated.View> 
            
          
            )}
        <True /> 
        </ScrollView>
  )
}

export default Category