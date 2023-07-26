/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Title from '../../Svg/Title/Title';
import {useSelector} from 'react-redux';
import {stylesHeaderDark} from './StylesHeaderDark';
import {stylesHeaderWhite} from './StylesHeaderWhite';
import { SvgXml, SvgUri } from 'react-native-svg';






const Header = () => {
  const theme = useSelector(state => state.theme);
  const uriBlack = "https://vk.com/doc346636180_666069486?hash=ggbwihP82kAjBTjhZ6He3nz6miZrJd2pwOd6xn7i7WL&dl=swGiTL5EDS1q2Wm7uH4WVtzKRznHLABRzQj7Znn7G20"
  const uriWhite = "https://vk.com/doc346636180_666296116?hash=MMIFoC355VKJBEEw6TOPRhs69NApZU4qWpIZ79KkS1g&dl=hIFNl0ZoTxR8B7MwDc5HaKtzoZhhB0mCft1n4gzdRvD"

  const windowWidth = Dimensions.get("window").width

  const styles = StyleSheet.create(
    theme ? stylesHeaderWhite : stylesHeaderDark,
  );

  return (
    <View
      style={windowWidth > 1080 ? [
        styles.container,
        {
          width: 393,
          height: 192,
          flexDirection: 'column',
          alignItems: 'center',
          marginLeft:"auto",
          marginRight:'auto'
        },
      ] :[
        styles.container,
        {
          width: 393,
          height: 192,
          flexDirection: 'column',
          alignItems: 'center',
        },
      ]}>
      <Title />  
  {/*       {theme ?
      <SvgUri uri={uriWhite} />
        :
      <SvgUri uri={uriBlack} />
      }   */}

     {/*  <SvgXml xml={xml}/> */}
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
