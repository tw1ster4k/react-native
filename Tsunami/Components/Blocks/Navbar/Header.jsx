/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Dimensions, Platform} from 'react-native';
import {useSelector} from 'react-redux';
import {stylesHeaderDark} from './StylesHeaderDark';
import {stylesHeaderWhite} from './StylesHeaderWhite';
import { SvgUri } from 'react-native-svg';




const Header = ({logoWhite, description, logoDark}) => {
  const theme = useSelector(state => state.theme);

/*   const uriBlack = "https://vk.com/doc346636180_666069486?hash=ggbwihP82kAjBTjhZ6He3nz6miZrJd2pwOd6xn7i7WL&dl=swGiTL5EDS1q2Wm7uH4WVtzKRznHLABRzQj7Znn7G20"
  const uriWhite = "https://vk.com/doc346636180_666296116?hash=MMIFoC355VKJBEEw6TOPRhs69NApZU4qWpIZ79KkS1g&dl=hIFNl0ZoTxR8B7MwDc5HaKtzoZhhB0mCft1n4gzdRvD" 
 */
  const windowWidth = Dimensions.get("window").width

  const styles = StyleSheet.create(
    theme ? stylesHeaderWhite : stylesHeaderDark,
  );

  return (
    <View
      style={windowWidth >=540  ? [
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
           {Platform.OS === "web" ?
         <img src={theme ? `https://api.menu.true-false.ru/storage/${logoWhite}` : `https://api.menu.true-false.ru/storage/${logoDark}`} style={{marginTop:48}} />
         :
         <SvgUri uri={theme ?  `https://api.menu.true-false.ru/storage/${logoWhite}` : `https://api.menu.true-false.ru/storage/${logoDark}`} style={{marginTop:48}} />
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
        {description}
      </Text>
    </View>
  );
};

export default Header;
