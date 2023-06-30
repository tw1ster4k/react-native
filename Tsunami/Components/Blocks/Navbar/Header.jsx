import React from 'react'
import { View, Text, TextInput, StyleSheet, StatusBar } from 'react-native'
import Title from '../../Svg/Title/Title'
import TitleWhite from '../../Svg/Title/TitleWhite'
import { useSelector} from 'react-redux'
import { stylesHeaderBlack } from './StylesHeaderBlack'
import { stylesHeaderWhite } from './StylesHeaderWhite'
import { stylesHeader } from './StylesHeader'
import Search from '../../Svg/Search/Search'

const Header = () => {
  const theme = useSelector((state) => state.theme)
  
  const styles = StyleSheet.create(stylesHeader)
  
  return (
    <View style={{width:393,overflow:'scroll', height:224, flex:1}}>
        <Title style={styles.title} />   
        <Text style={styles.text}>Онлайн-меню японо-перуанской кухни ресторана Tsunami</Text>
        <TextInput style={styles.input} placeholder='Поиск' theme={theme}   />
        <Search theme={theme} style={styles.icon} /> 
        <StatusBar style="auto" />
    </View>
  )
}

export default Header