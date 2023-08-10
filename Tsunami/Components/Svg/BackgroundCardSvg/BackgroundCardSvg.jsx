import React from 'react'
import { Svg, Rect } from 'react-native-svg'
import { useSelector } from 'react-redux'
import { Dimensions } from 'react-native'

const BackgroundCardSvg = () => {
  const windowWidth = Dimensions.get('window').width
  const theme = useSelector((state) => state.theme)
  return (
    theme ?
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={windowWidth >= 540 ? 532 : 368}
    height={"100%"}
    preserveAspectRatio='none'
    viewBox={ windowWidth >= 540 ? "0 0 532 144" : "0 0 368 144"}
    fill="none"
    style={{position:"absolute",}}
  >
    <Rect x={1} y={1} width={windowWidth >= 540 ? 530 : 366} height={142} rx={7} fill="#ffffff" />
    <Rect
      x={1}
      y={1}
      width={windowWidth >= 540 ? 530 : 366}
      height={142}
      rx={7}
      stroke="#bbbbbb"
      strokeWidth={2}
    />
  </Svg>
    :
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={windowWidth >= 540 ? 532 : 368}
    height={"100%"}
    preserveAspectRatio='none'
    viewBox={ windowWidth >= 540 ? "0 0 532 144" : "0 0 368 144"}
    fill="none"
    style={{position:"absolute",}}
  >
    <Rect x={1} y={1} width={windowWidth >= 540 ? 530 : 366} height={142}  rx={7} fill="#222222" />
    <Rect
      x={1}
      y={1}
      width={windowWidth >= 540 ? 530 : 366}
      height={142}
      rx={7}
      stroke="#555555"
      strokeWidth={2}
    />
  </Svg>
  )
}

export default BackgroundCardSvg