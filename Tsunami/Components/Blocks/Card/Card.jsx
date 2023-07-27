
import React from 'react';
import {
  Pressable,
  Animated,
  LayoutAnimation,
  StyleSheet,
  NativeModules,
  Text,
  View,
  Dimensions,
  ImageBackground
} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {stylesCardDark} from './stylesCardDark';
import {stylesCardWhite} from './stylesCardWhite';
import {stylesCard} from './stylesCard';
import { stylesCardWeb } from './stylesCardWeb';
import LinearGradient from 'react-native-linear-gradient';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

const Card = ({data, quantity,  bigImgCard, moreCard}) => {
  const windowWidth = Dimensions.get("window").width
  const dispatch = useDispatch();

  const theme = useSelector(state => state.theme);
  const basket = useSelector((state) => state.basket)
  const [bigImg, setBigImg] = useState(bigImgCard ? true : false)

  const [more, setMore] = useState(moreCard ? true : false)

  const [amount, setAmount] = useState(quantity ? quantity : basket.filter((el) => el.title === data.title).length)
 
  const maxOnPress = () => {
    LayoutAnimation.spring();
  };

  const minOnPress = () => {
    LayoutAnimation.spring();
  };

  const styles = StyleSheet.create(theme ? stylesCardWhite : stylesCardDark);
  const styles2 = StyleSheet.create(windowWidth > 1080 ? stylesCardWeb :stylesCard);

  const addFood = () => {
    dispatch({type: 'ADD_FOOD', payload: data});
    quantity ? "" : setAmount(amount + 1)
  };

  const delFood = () => {
    dispatch({type: 'DEL_FOOD', payload: data});
    quantity ? "" : setAmount(amount - 1)
  };

  const handleMinOnPress = (type, data, ) => {
    minOnPress();
    dispatch({type: type, payload: data});
    quantity ? "" :  setAmount(0)
  };

  const handleMaxOnPress = (type, data) => {
    maxOnPress();
    dispatch({type: type, payload: data});
    quantity ? "" : setAmount(amount + 1)
  };

  const moreFunction = () => {
    dispatch({type:"ADD_MORE", payload:data})
    setMore(!more)
  }


  const bigImgFunction = () => {
    LayoutAnimation.easeInEaseOut();
    LayoutAnimation.configureNext({
      duration: 150,
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
        opacity: 0,
      },
    });
    setBigImg(!bigImg)
    dispatch({type:"ADD_BIGIMG", payload:data})
  };

  return (
    <Pressable
      style={
        data.img
          ? more
            ? bigImg
              ? [styles.card, styles2.card, windowWidth > 1080 ? {height:532}  : {height: 368}]
              : [styles.card, {height: 'auto'}, styles2.card]
            : bigImg 
            ? [styles.card, windowWidth > 1080 ? {height:532} : {height: 368}, styles2.card]
            : [styles.card, {height: 144}, styles2.card]
          : more
          ? [styles.card, {height: 'auto'}, styles2.card]
          : [styles.card, styles2.card]
      }
      onPress={() => moreFunction()}>
       
      <Text
        style={
          data.img
            ?
            bigImg ?
            [styles.title, {width: 192, zIndex:3, color:"#fff"}, styles2.title]
            :more
              ? [styles.title, {width: 192, zIndex:3}, styles2.title]
              : [styles.title, styles2.title, {width:192, zIndex:3}]
            : more
            ? [styles.title, styles2.title]
            : [styles.title, styles2.title]
        }>
        {data.title}
      </Text>
      {more ? (
       

          <Text
            style={
              data.img
                ? [styles.description ,bigImg ? {width:192, color:"#fff", zIndex:3,} : {width: 192, zIndex:3}, styles2.description]
                : [styles.description, styles2.description,]
            }>
            {data.description}
          </Text>
            ) : (
              ''
               )}
               {more ? 
          <Text style={[styles.description, styles2.description, bigImg ? {color:"#fff", zIndex:3,} : {zIndex:3}]}>
            {data.compound}
          </Text>
                  : ""
          }
      <Animated.View
        style={
          bigImg
            ? {position: 'absolute', zIndex: 3, marginTop: 294, width:143}
            : {zIndex:3, width:143}
        }>
        <View
          style={
            amount > 0
              ? bigImg 
                ? [
                    styles.button,
                    windowWidth > 1080 ?
                    {width: 143, position: 'absolute', zIndex: 3, marginTop:180}
                    :
                    {width: 143, position: 'absolute', zIndex: 3},
                    styles2.button,
                  ]
                : [styles.button, {width: 143, zIndex:3}, styles2.button]
              : bigImg 
              ? [
                  styles.button,
                  windowWidth > 1080 ?
                  {width: 114, position: 'absolute', zIndex: 3, marginTop:180}
                  :
                  {position: 'absolute', zIndex: 3, width: 114},
                  styles2.button,
                ]
              : [styles.button, {width: 114, zIndex:3}, styles2.button]
          }>
          {amount ?
            <Pressable
            style={styles2.buttonContent}
              onPress={() =>
                amount === 1
                  ? handleMinOnPress('DEL_FOOD', data, quantity)
                  : delFood()
              }>
              <Text
                style={[styles.minus, {marginLeft: -10}, styles2.buttonText]}>
                -
              </Text>
            </Pressable>
           
           :
           ''
          }
          <Text
            style={
              amount >= 1
                ? [styles.cost, styles2.cost,{flexShrink:0}]
                : [styles.cost, {marginLeft: 16, flexShrink:0}, styles2.cost]
            }>
            {data.price} руб
          </Text>
          <Pressable
            style={styles2.buttonContent}
            onPress={() =>
              amount === 0 ? handleMaxOnPress('ADD_FOOD', data) : addFood()
            }>
            <Text style={[styles.plus, {marginLeft: 10}, styles2.buttonText]}>
              +
            </Text>
          </Pressable>
        </View>
      </Animated.View>
      {amount ? (
        <View
          style={
            bigImg
              ? [
                  styles.amount,
                  windowWidth > 1080 ?
                  {
                    position: 'absolute',
                    zIndex: 3,
                    marginTop: 475,
                    marginLeft: 167,
                  }
                  :
                  {
                    position: 'absolute',
                    zIndex: 3,
                    marginTop: 310,
                    marginLeft: 167,
                  },
                  styles2.amount,
                ]
              : [styles.amount, styles2.amount, {marginTop:-56}]
          }>
          <Text style={[styles.amountText, styles2.amountText]}>
            {quantity ? quantity : amount}
          </Text>
        </View>
      ) : (
        ''
      )}
      {data.img ? (
        
        <Pressable
          onPress={() => bigImgFunction()}
           style={{position: 'absolute'}} >
        
          <ImageBackground
            source={data.img}
            style={
              bigImg
                ? 
                windowWidth > 1080 ?
                {height: 528, width: 528,  zIndex:1}
                :
                {height: 364, width: 364,  zIndex:1}
                : 
                windowWidth > 1080 ?
                {
                   position:'absolute', 
                  width: 140,
                  height: 140,
                  marginLeft: 388,

                }
                :
                {
                  position:'absolute',
                  width: 140,
                  height: 140,
                  marginLeft: 224,

                }
              }
             
              >
                {bigImg  ?
        <LinearGradient colors={['rgba(0, 0, 0, 0.5)', '#00000000']} style={{height:'100%', width:"100%",}}>

              </LinearGradient>
              : ""
            }
              </ImageBackground>
                  
        </Pressable>
      ) : (
        ''
        )}
    </Pressable>
  );
};

export default Card;
