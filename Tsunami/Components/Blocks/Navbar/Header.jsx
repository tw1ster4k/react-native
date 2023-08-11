/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Dimensions, Platform} from 'react-native';
import {useSelector} from 'react-redux';
import {stylesHeaderDark} from './StylesHeaderDark';
import {stylesHeaderWhite} from './StylesHeaderWhite';
import { SvgUri } from 'react-native-svg';




const Header = ({logoWhite, description, logoDark}) => {
  const theme = useSelector(state => state.theme);

   const uriBlack = `https://api.menu.true-false.ru/storage/${logoDark}`
  const uriWhite = `https://api.menu.true-false.ru/storage/${logoWhite}` 

  
 
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
         <img src={theme ? uriWhite : uriBlack} style={{marginTop:48}} />
         :
         <SvgUri uri={theme ?  uriWhite : uriBlack} style={{marginTop:48}} />
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
