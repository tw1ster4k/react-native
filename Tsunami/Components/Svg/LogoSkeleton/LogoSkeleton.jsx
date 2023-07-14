import React from 'react';
import Svg, { Rect } from 'react-native-svg';
import { useSelector } from 'react-redux';

const LogoSkeleton = () => {
    const theme = useSelector((state) => state.theme)
  return (
    theme ?
    <Svg height="100" width="100" style={{marginTop:48}}>
    <Rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill="#bbbbbb"
    />
  </Svg>
    :
      <Svg height="100" width="100" style={{marginTop:48}}>
        <Rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="#222222"
        />
      </Svg>
  );
};


export default LogoSkeleton;