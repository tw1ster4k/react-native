import React from 'react'
import { Svg, Rect } from 'react-native-svg'
import { useSelector } from 'react-redux'

const CardSvg = () => {
    const theme = useSelector((state) => state.theme)
  return (
    theme ?
    <Svg
    style={{marginTop:18,marginLeft:15,}}
    xmlns="http://www.w3.org/2000/svg"
    width={366}
    height={144}
    viewBox="0 0 368 118"
    fill="none"
  >
    <Rect x={1} y={1} width={366} height={120} rx={7} fill="white" />
    <Rect
      x={1}
      y={1}
      width={366}
      height={120}
      rx={7}
      stroke="#BBBBBB"
      strokeWidth={2}
    />
  </Svg>
    :
    <Svg
    style={{marginTop:18,marginLeft:15,}}
    xmlns="http://www.w3.org/2000/svg"
    width={366}
    height={144}
    viewBox="0 0 368 118"
    fill="none"
  >
    <Rect x={1} y={1} width={366} height={120} rx={7} fill="#222222" />
    <Rect
      x={1}
      y={1}
      width={366}
      height={120}
      rx={7}
      stroke="#555555"
      strokeWidth={2}
    />
  </Svg>
  )
}

export default CardSvg