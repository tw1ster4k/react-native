import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { useSelector } from 'react-redux'

const ButtonBigSvg = () => {
    const theme = useSelector((state) => state.theme)
  return (
    theme ?
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={143}
    height={40}
    viewBox="0 0 143 40"
    fill="none"
    style={{position:'absolute'}}
  >
    <Path
      d="M0 13.28C0 2.34392 2.34392 0 13.28 0H129.72C140.656 0 143 2.34392 143 13.28V26.72C143 37.6561 140.656 40 129.72 40H13.28C2.34392 40 0 37.6561 0 26.72V13.28Z"
      fill="#EEEEEE"
    />
  </Svg>
    :
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={143}
    height={40}
    viewBox="0 0 143 40"
    fill="none"
    style={{position:"absolute"}}
  >
    <Path
      d="M0 13.28C0 2.34392 2.34392 0 13.28 0H129.72C140.656 0 143 2.34392 143 13.28V26.72C143 37.6561 140.656 40 129.72 40H13.28C2.34392 40 0 37.6561 0 26.72V13.28Z"
      fill="#555555"
    />
  </Svg>
  )
}

export default ButtonBigSvg