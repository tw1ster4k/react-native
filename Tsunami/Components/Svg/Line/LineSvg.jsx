import React from 'react'
import { Svg, Line } from 'react-native-svg'
import { stylesLineSvg } from './stylesLineSvg'
import { StyleSheet } from 'react-native'

const LineSvg = () => {
  const styles = StyleSheet.create(stylesLineSvg)
  return (
    <Svg
    style={styles}
    width={393}
    height={2}
    viewBox="0 0 393 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Line y1={1} x2={393} y2={1} stroke="#BBBBBB" strokeWidth={2} />
  </Svg>
  )
}

export default LineSvg