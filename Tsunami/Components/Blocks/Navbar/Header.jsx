import React from 'react'
import { View, Text, StyleSheet , } from 'react-native'
import Title from '../../Svg/Title/Title'
import { useSelector} from 'react-redux'
import { stylesHeaderDark } from './StylesHeaderDark'
import { stylesHeaderWhite } from './StylesHeaderWhite'

const Header = () => {
  const theme = useSelector((state) => state.theme)
  
  const styles = StyleSheet.create( theme ? stylesHeaderWhite : stylesHeaderDark)
  
  return (
    <View style={[styles.container,{width:393,overflow:'scroll', height:192 ,flexDirection:'column', alignItems:'center',}]}>
        <Title />   
        <Text style={[styles.text,{textAlign:"center",width:380,marginTop:16,fontSize:14,fontWeight:400,lineHeight:16.8}]}>Онлайн-меню японо-перуанской кухни ресторана Tsunami</Text>
    </View>
  )
}

export default Header