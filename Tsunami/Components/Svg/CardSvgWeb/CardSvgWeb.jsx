import React from 'react'
import Svg, { Rect, Path } from "react-native-svg"
import { useSelector } from 'react-redux'

const CardSvgWeb = () => {
    const theme = useSelector((state) => state.theme)
  return (
    theme ?
    <Svg
    style={{marginLeft:"33%", marginTop:18}}
    xmlns="http://www.w3.org/2000/svg"
    width={532}
    height={164}
    viewBox="0 0 532 164"
    fill="none"

  >
    <Rect
      xmlns="http://www.w3.org/2000/svg"
      x={1}
      y={1}
      width={530}
      height={162}
      rx={7}
      fill="#fff"
    />
    <Path fill="url(#pattern0)" d="M368 0H532V164H368z" />
    <Rect
      x={1}
      y={1}
      width={530}
      height={162}
      rx={7}
      stroke="#bbb"
      strokeWidth={2}
    />
  </Svg>
    :
    <Svg
    style={{marginLeft:"33%", marginTop:18}}
    xmlns="http://www.w3.org/2000/svg"
    width={532}
    height={164}
    viewBox="0 0 532 164"
    fill="none"
  >
    <Rect x={1} y={1} width={530} height={162} rx={7} fill="#222" />
    <Path fill="url(#pattern0)" d="M368 0H532V164H368z" />
    <Rect
      x={1}
      y={1}
      width={530}
      height={162}
      rx={7}
      stroke="#555"
      strokeWidth={2}
    />
  </Svg>
  )
}

export default CardSvgWeb