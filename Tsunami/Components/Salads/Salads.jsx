import React from 'react'
import { ScrollView, View, StyleSheet, Text } from 'react-native'
import { stylesSaladsDark } from './stylesSaladsDark'
import { stylesSaladsWhite } from './stylesSaladsWhite'
import { useSelector } from 'react-redux'
import True from '../Svg/True/True'
import Card from '../Blocks/Card/Card'

const Salads = () => {
    const theme = useSelector((state) => state.theme)
    const salads = useSelector((state) => state.salads)
    const styles = StyleSheet.create(theme ? stylesSaladsWhite : stylesSaladsDark)
  return (
        <ScrollView style={[styles.container, {width:"100%", height:'100%', overflow:"scroll"}]}>
            <Text style={[styles.tab, {fontWeight:600, fontSize:24,lineHeight:29.4, marginLeft:10, marginTop:32}]}>Салаты</Text>
            {  salads.map((el,index) =>
            <Card data={el} key={index} index={index} />
            )

            }
        <True />
        </ScrollView>
  )
}

export default Salads