import React, {useState} from 'react';
import {View, StyleSheet, Text, Pressable, ScrollView, Dimensions, StatusBar, Platform, ImageBackground, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
import {homeStylesDark} from './homeStylesDark';
import {homeStylesWhite} from './homeStylesWhite';
import {homeStyles} from './homeStyles';
import Header from "../Blocks/Navbar/Header"
import True from '../Svg/True/True';
import { homeStylesWeb } from './homeStylesWeb';
import { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SearchIcon from '../Svg/Search/SearchIcon';
import Card from '../Blocks/Card/Card';
import { useRoute } from '@react-navigation/native';
import CategorySvgWeb from '../Svg/CategorySvgWeb/CategorySvgWeb';
import CategorySvg from '../Svg/CategorySvg/CategorySvg';
import inputImg from "../Image/Input.png"
import inputWhite from "../Image/InputWhite.png"
import searchInputPhone from "../Image/SearchInputPhone.png"
import SearchInputPhoneWhite from '../Image/SearchInputPhoneWhite.png';


const Home = ({navigation}) => {

  const route = useRoute()
  const salads = useSelector(state => state.salads)
  const [goods, setGoods] = useState([])
  const windowWidth = Dimensions.get("window").width
  const theme = useSelector(state => state.theme);
  const more = useSelector(state => state.more);
  const bigImg = useSelector(state => state.bigImg);
  const styles = StyleSheet.create(theme ? homeStylesWhite : homeStylesDark);
  const styles2 = StyleSheet.create(windowWidth >= 540 ? homeStylesWeb : homeStyles);



  const searchFunction = event => {
    const filteredSalads = event
      ? salads.filter((el) => 
           el.title.toLowerCase().includes(event.toLowerCase())
        )
      : [];
    setGoods(filteredSalads);
  };


  return (
      <ScrollView style={[styles.container, styles2.container]}>
        <StatusBar backgroundColor={theme ? "#fff" : "#151515"} animated={true} />
        <Header description={route.params.description} logoDark={route.params.logoDark} logoWhite={route.params.logoWhite}  />
        <ImageBackground source={windowWidth >= 540 ? theme ? inputWhite : inputImg : theme ? SearchInputPhoneWhite : searchInputPhone} style={windowWidth >= 540 ? {width:348, height:40, marginLeft:'auto', marginRight:'auto'} : { width: 368,height: 40,marginLeft: 12.5,}} >

        <TextInput style={[styles.input,  windowWidth >=540  ?
          {
            width: 348,
            height: 40,
            borderRadius: 10,
            paddingLeft: 24,
            marginLeft: "auto",
            marginRight:'auto',
          }
          :
          {
            width: 368,
            height: 40,
            paddingLeft: 24,
          },]} 
          placeholder='Поиск'
          onChangeText={searchFunction}
          />
                {
        windowWidth >=540  ?
        ""
        :
        <SearchIcon />
      }
        </ImageBackground>
      {
        goods.length <= 0 ?
        <View>

        <Text style={[styles.tab, styles2.tab]}>Меню</Text>
        <View style={styles2.categories}>
          

          {route.params.catalog.map((el, index) => (
            <Pressable
            key={index}
              style={[el.img ? styles.category : "" , styles2.category , el.img ? windowWidth >= 540 ? {height:256,  borderRadius: 10, borderWidth: 2, } : {height:178,borderRadius: 10, borderWidth: 2,} : ""] }
              onPress={() => navigation.navigate(el.name)}>
                {
                  windowWidth >=540 ?
                  <CategorySvgWeb />
                  :
                <CategorySvg />
                }
                {
                  el.img ?
                  <ImageBackground source={el.img} style={{height:'100%'}}>
                    <LinearGradient colors={ theme ? ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']:['rgba(34, 34, 34, 0)', 'rgba(34, 34, 34, 1)']} style={{height: '100%', width: '100%'}}>
                    <Text style={[styles.title, styles2.title , windowWidth >=  540 ? {top:205} : {top:130}, {fontWeight:600, fontSize:14}]}>{el.name}</Text>
                    </LinearGradient>
                  </ImageBackground>
                  :
                
                <Text style={[styles.title, styles2.title]}>{el.name}</Text>
                }
                
            </Pressable>
          ))}
     
        </View>
        </View>
        :
              goods.map((el, index) => 
              <Card data={el} key={index} index={index} moreCard={more.filter((elem) => elem.title === el.title).length} bigImgCard={bigImg.filter((elem) => elem.title === el.title).length} />
              )
        }
        <Text style={[styles.warning, styles2.warning]}>
          Уважаемые гости, если у Вас есть аллергия на какой-либо продукт,
          пожалуйста, предупредите об этом Вашего официанта. Меню является
          рекламной продукцией нашего ресторана. Утвержденное контрольное меню с
          выходами блюд и сведениями о пищевой ценности готовой продукции:
          калорийности, содержании белков, жиров, углеводов находится в уголке
          потребителя и предоставляется по первому Вашему требованию.
        </Text>
      <True />     
      </ScrollView>
  );
};

export default Home;
