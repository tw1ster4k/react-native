/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import {useSelector} from 'react-redux';
import True from '../Svg/True/True';
import Card from '../Blocks/Card/Card';
import {styleSearchDark} from './styleSearchDark';
import {styleSearchWhite} from './styleSearchWhite';
import SearchIcon from '../Svg/Search/SearchIcon';
import {useState} from 'react';
import Footer from '../Blocks/Footer/Footer';



const Search = () => {
  const windowWidth = Dimensions.get("window").width
  const [goods, setGoods] = useState([]);
  const theme = useSelector(state => state.theme);
  const salads = useSelector(state => state.salads);
  const styles = StyleSheet.create(theme ? styleSearchWhite : styleSearchDark);


  const searchFunction = event => {
    if (event === '') {
      setGoods([]);
    } else {
      let arr = salads.filter(el =>
        el.title.toLowerCase().includes(event.toLowerCase()),
      );
      setGoods(arr);
    }
  };


  return (
    <ScrollView style={[styles.container, windowWidth > 1440 ? {width:1387, marginLeft:'14%'} : ""]}>
      <Text
        style={[
          styles.tab,
          windowWidth > 1440 ?
          {
            marginTop: 48,
            marginLeft: "33%",
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
          windowWidth > 1440 ?
          {
            width: 532,
            height: 40,
            borderRadius: 10,
            marginTop: 16,
            borderWidth: 2,
            paddingLeft: 24,
            marginLeft: "33%",
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
      />
      <SearchIcon />
      <Text
        style={[
          styles.tab,
          windowWidth > 1440 ?
          {
            marginLeft: "33%",
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
            <Card data={el} key={index} index={index} />
            )
        }
      )}
     <True /> 
    </ScrollView>
  );
};

export default Search;
