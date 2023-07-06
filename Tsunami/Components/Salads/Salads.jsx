import React from 'react'
import { ScrollView,  StyleSheet, Text } from 'react-native'
import { stylesSaladsDark } from './stylesSaladsDark'
import { stylesSaladsWhite } from './stylesSaladsWhite'
import { useSelector } from 'react-redux'
import True from '../Svg/True/True'
import Card from '../Blocks/Card/Card'
import { stylesSalads } from './stylesSalads'

const Salads = () => {
    const theme = useSelector((state) => state.theme)
    const salads = useSelector((state) => state.salads)
    const styles = StyleSheet.create(theme ? stylesSaladsWhite : stylesSaladsDark)
    const styles2 = StyleSheet.create(stylesSalads)
  return (
        <ScrollView style={[styles.container, styles2.container]}>
            <Text style={[styles.tab, styles2.tab]}>Салаты</Text>
            {  salads.map((el,index) =>
            <Card data={el} key={index} index={index} />
            )

            }
        <True />
        </ScrollView>
  )
}

export default Salads