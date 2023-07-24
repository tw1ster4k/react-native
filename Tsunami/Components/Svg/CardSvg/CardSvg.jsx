import React from 'react'
import { Svg, Rect } from 'react-native-svg'
import { useSelector } from 'react-redux'

const CardSvg = () => {
    const theme = useSelector((state) => state.theme)
  return (
    theme ?
    <Svg
      style={{marginLeft:15, marginTop:-613}}
      xmlns="http://www.w3.org/2000/svg"
      width={368}
      height={1500}
      viewBox="0 0 368 238"
      fill="none"
    >
      <Rect x={1} y={1} width={366} height={800} rx={7} fill="#f2f2f2" />
      <Rect
        x={1}
        y={1}
        width={366}
        height={800}
        rx={7}
        stroke="#f2f2f2"
        strokeWidth={2}
      />
    </Svg>
    :
    <Svg
    style={{marginLeft:15, marginTop:-613}}
      xmlns="http://www.w3.org/2000/svg"
      width={368}
      height={1500}
      viewBox="0 0 368 238"
      fill="none"
    >
      <Rect x={1} y={1} width={366} height={800} rx={7} fill="#222" />
      <Rect
        x={1}
        y={1}
        width={366}
        height={800}
        rx={7}
        stroke="#222"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default CardSvg