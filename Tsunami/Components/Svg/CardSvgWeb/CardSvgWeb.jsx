import React from 'react'
import Svg, { Rect } from "react-native-svg"
import { useSelector } from 'react-redux'

const CardSvgWeb = () => {
    const theme = useSelector((state) => state.theme)
  return (
    theme ?
    <Svg
      style={{marginLeft:'auto',marginRight:'auto', marginTop:-865}}
      xmlns="http://www.w3.org/2000/svg"
      width={532}
      height={2000}
      viewBox="0 0 532 238"
      fill="none"
    >
      <Rect x={1} y={1} width={530} height={1000} rx={7} fill="#fff" />
      <Rect
        x={1}
        y={1}
        width={530}
        height={1000}
        rx={7}
        stroke="#bbb"
        strokeWidth={2}
      />
    </Svg>
    :
    <Svg
    style={{marginLeft:'auto',marginRight:'auto', marginTop:-865}}
    xmlns="http://www.w3.org/2000/svg"
    width={532}
    height={2000}
    viewBox="0 0 532 238"
    fill="none"
  
  >
    <Rect x={1} y={1} width={530} height={1000} rx={7} fill="#222" />
    <Rect
      x={1}
      y={1}
      width={530}
      height={1000}
      rx={7}
      stroke="#555"
      strokeWidth={2}
    />
  </Svg>
  )
}

export default CardSvgWeb