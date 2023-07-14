/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Title from '../../Svg/Title/Title';
import {useSelector} from 'react-redux';
import {stylesHeaderDark} from './StylesHeaderDark';
import {stylesHeaderWhite} from './StylesHeaderWhite';
import { SvgCssUri } from 'react-native-svg';
import LogoSkeleton from '../../Svg/LogoSkeleton/LogoSkeleton';





const Header = () => {
  const theme = useSelector(state => state.theme);
  const [loading,  setLoading] = useState(true)
  const uriBlack = "https://vk.com/doc346636180_666069486?hash=ggbwihP82kAjBTjhZ6He3nz6miZrJd2pwOd6xn7i7WL&dl=swGiTL5EDS1q2Wm7uH4WVtzKRznHLABRzQj7Znn7G20"
  const uriWhite = "https://vk.com/doc346636180_666069690?hash=YjTfjPZMTqHmogE7W9JauQ4afGpqB0oBwu1QHdZvd4X&dl=3jsZGKc4rojIhPnuaKQVOicGPtEJzFRbG347tLlDyVP"

  const styles = StyleSheet.create(
    theme ? stylesHeaderWhite : stylesHeaderDark,
  );

  setTimeout(() => {
    setLoading(false)
  }, 1000);

  return (
    <View
      style={[
        styles.container,
        {
          width: 393,
          overflow: 'scroll',
          height: 192,
          flexDirection: 'column',
          alignItems: 'center',
        },
      ]}>
      {/* <Title />  */}
      {theme ?
      <SvgCssUri style={{marginTop:48}} uri={uriWhite} />
        :
      <SvgCssUri style={{marginTop:48}} uri={uriBlack} />
      }
      <Text
        style={[
          styles.text,
          {
            textAlign: 'center',
            width: 380,
            marginTop: 16,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 16.8,
          },
        ]}>
        Онлайн-меню японо-перуанской кухни ресторана Tsunami
      </Text>
    </View>
  );
};

export default Header;
