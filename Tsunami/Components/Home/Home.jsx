import React from 'react';
import {View, StyleSheet, Text, Pressable, ScrollView, Dimensions, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {homeStylesDark} from './homeStylesDark';
import {homeStylesWhite} from './homeStylesWhite';
import {homeStyles} from './homeStyles';
import Header from "../Blocks/Navbar/Header"
import True from '../Svg/True/True';
import Footer from '../Blocks/Footer/Footer';
import { homeStylesWeb } from './homeStylesWeb';

const Home = ({navigation}) => {
  const category = [
    'Салаты',
    'Холодные закуски',
    'Горячие закуски',
    'Икорный бар',
    'Морепродукты',
    'Супы',
    'Крупа и паста',
    'Горячее',
    'Мангал',
    'Тесто и начинка',
  ];
  const windowWidth = Dimensions.get("window").width
  const theme = useSelector(state => state.theme);
  const styles = StyleSheet.create(theme ? homeStylesWhite : homeStylesDark);
  const styles2 = StyleSheet.create(windowWidth > 1080 ? homeStylesWeb : homeStyles);
  return (
      <ScrollView style={[styles.container, styles2.container]}>
        <StatusBar backgroundColor={theme ? "#fff" : "#151515"} animated={true} />
        <Header />
        <Text style={[styles.tab, styles2.tab]}>Меню</Text>
        <View style={styles2.categories}>
          {category.map((el, index) => (
            <Pressable
              key={index}
              style={[styles.category, styles2.category]}
              onPress={() => navigation.navigate(el)}>
              <Text style={[styles.title, styles2.title]}>{el}</Text>
            </Pressable>
          ))}
        </View>
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
