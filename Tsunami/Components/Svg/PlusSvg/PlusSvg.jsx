import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { useSelector } from 'react-redux'

const PlusSvg = () => {
    const theme = useSelector((state) => state.theme)
  return (
    theme ?
      <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{marginTop:7.5, marginLeft:10}}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.25 5.25h-4.5V.75a.75.75 0 10-1.5 0v4.5H.75a.75.75 0 100 1.5h4.5v4.5a.75.75 0 101.5 0v-4.5h4.5a.75.75 0 100-1.5z"
        fill="#1c1c1c"
      />
    </Svg>
    :
    <Svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{marginTop:7.5, marginLeft:10}}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.25 5.25h-4.5V.75a.75.75 0 10-1.5 0v4.5H.75a.75.75 0 100 1.5h4.5v4.5a.75.75 0 101.5 0v-4.5h4.5a.75.75 0 100-1.5z"
      fill="#fff"
    />
  </Svg>
  )
}

export default PlusSvg