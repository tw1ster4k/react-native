import React from 'react'
import {Svg, Path} from "react-native-svg"
import { useSelector } from 'react-redux'

const MinusSvg = () => {
    const theme = useSelector((state) => state.theme)
  return (
    theme ?
    <Svg
    width={12}
    height={2}
    viewBox="0 0 12 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginLeft:-25}}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.25 1.75H.75a.75.75 0 110-1.5h10.5a.75.75 0 110 1.5z"
      fill="#1C1C1C"
    />
  </Svg>
  :
  <Svg
  width={12}
  height={2}
  viewBox="0 0 12 2"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style={{ marginLeft:-25}}
>
  <Path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M11.25 1.75H.75a.75.75 0 110-1.5h10.5a.75.75 0 110 1.5z"
    fill="#fff"
  />
</Svg>
  )
}

export default MinusSvg