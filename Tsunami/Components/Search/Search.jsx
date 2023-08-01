/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  StatusBar,
  Keyboard,
} from 'react-native';
import { useSelector } from 'react-redux';
import Card from '../Blocks/Card/Card';
import { styleSearchDark } from './styleSearchDark';
import { styleSearchWhite } from './styleSearchWhite';
import SearchIcon from '../Svg/Search/SearchIcon';

const Search = () => {
  const windowWidth = Dimensions.get('window').width;
  const [goods, setGoods] = useState([]);
  const theme = useSelector(state => state.theme);
  const salads = useSelector(state => state.salads);
  const styles = StyleSheet.create(theme ? styleSearchWhite : styleSearchDark);
  const more = useSelector(state => state.more);
  const bigImg = useSelector(state => state.bigImg);

  const searchFunction = event => {
    const filteredSalads = event
      ? salads.filter(el => {
          return el.title.toLowerCase().includes(event.toLowerCase());
        })
      : [];
    setGoods(filteredSalads);
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
    });
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
    };
  }, []);

  

  return (
    <ScrollView style={[styles.container, windowWidth >=540 ? {width:"100%"} : ""]}>
      <StatusBar backgroundColor={theme ? "#fff" : "#151515"} animated={true} />
      <Text
        style={[
          styles.tab,
          windowWidth >=540  ?
          {
            marginTop: 48,
            marginLeft: "auto",
            marginRight:'auto',
            fontWeight: 600,
            fontSize: 24,
            lineHeight: 29.4,
          }
          :
          {
            marginTop: 48,
            marginLeft: 15,
            fontWeight: 600,
            fontSize: 24,
            lineHeight: 29.4,
          },
        ]}>
        Поиск
      </Text>
      <TextInput
        style={[
          styles.input,
          windowWidth >=540  ?
          {
            width: 532,
            height: 40,
            borderRadius: 10,
            marginTop: 16,
            borderWidth: 2,
            paddingLeft: 24,
            marginLeft: "auto",
            marginRight:'auto',
          }
          :
          {
            width: 368,
            height: 40,
            borderRadius: 10,
            marginTop: 16,
            borderWidth: 2,
            paddingLeft: 24,
            marginLeft: 12.5,
          },
        ]}
        placeholder="Поиск"
        onChangeText={searchFunction}
        autoFocus
      />
      {
        windowWidth >=540  ?
        ""
        :
        <SearchIcon />
      }
      <Text
        style={[
          styles.tab,
          windowWidth >=540  ?
          {
            marginLeft: "auto",
            marginRight:'auto',
            marginTop: 16,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 19.2,
          }
          :
          {
            marginLeft: 15,
            marginTop: 16,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 19.2,
          },
        ]}>
        {goods.length > 0
          ? `Найдено ${goods.length} товара`
          : 'Начните вводить поисковый запрос'}
      </Text>
      {goods.map((el, index) => {
          return(
            <Card data={el} key={index} index={index} moreCard={more.filter((elem) => elem.title === el.title).length} bigImgCard={bigImg.filter((elem) => elem.title === el.title).length} />
            )
        }
      )}
    </ScrollView>
  );
};

export default Search;
