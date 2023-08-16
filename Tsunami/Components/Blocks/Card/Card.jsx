import React, {useEffect} from 'react';
import {
  Pressable,
  LayoutAnimation,
  StyleSheet,
  NativeModules,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  Platform,
} from 'react-native';
import ButtonSvg from '../../Svg/ButtonSvg/ButtonSvg';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {stylesCardDark} from './stylesCardDark';
import {stylesCardWhite} from './stylesCardWhite';
import {stylesCard} from './stylesCard';
import {stylesCardWeb} from './stylesCardWeb';
import LinearGradient from 'react-native-linear-gradient';
import PlusSvg from '../../Svg/PlusSvg/PlusSvg';
import MinusSvg from '../../Svg/MinusSvg/MinusSvg';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const Card = ({data, quantity, bigImgCard, moreCard}) => {
  const windowWidth = Dimensions.get('window').width;
  const dispatch = useDispatch();
  const basket = useSelector(state => state.basket);
  const theme = useSelector(state => state.theme);
  const [sizeImg, setSizeImg] = useState({width:1, height:1})
  const [bigImg, setBigImg] = useState(bigImgCard ? true : false);
  const [more, setMore] = useState(moreCard ? true : false);
  const [amount, setAmount] = useState(
    quantity ? quantity : basket.filter(el => el.name === data.name).length,
    );


  const maxOnPress = () => {
    LayoutAnimation.easeInEaseOut();
    LayoutAnimation.configureNext({
      duration: 150,
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
        opacity: 0,
      },
    });
  };

  const minOnPress = () => {
    LayoutAnimation.easeInEaseOut();
     LayoutAnimation.configureNext({
      duration: 150,
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
        opacity: 0,
      },
    });
  };

  const styles = StyleSheet.create(theme ? stylesCardWhite : stylesCardDark);
  const styles2 = StyleSheet.create(
    windowWidth >=540  ? stylesCardWeb : stylesCard,
  );

  useEffect(() => {
    data.preview ?
    Image.getSize(
       `https://api.menu.true-false.ru/storage/${data.preview}`,
      (width, height) => {
        setSizeImg({ width, height });
      },
      )
      :
      ''
  }, [])
 

  const addFood = () => {
    dispatch({type: 'ADD_FOOD', payload: data});
    quantity ? '' : setAmount(amount + 1);
  };

  const delFood = () => {
    dispatch({type: 'DEL_FOOD', payload: data});
    quantity ? '' : setAmount(amount - 1);
  };

  const handleMinOnPress = (type, data) => {
    minOnPress();
    dispatch({type: type, payload: data});
    quantity ? '' : setAmount(0);
  };

  const handleMaxOnPress = (type, data) => {
    maxOnPress();
    dispatch({type: type, payload: data});
    quantity ? '' : setAmount(amount + 1);
  };

  const moreFunction = () => {
    setMore(!more);
    dispatch({type: 'ADD_MORE', payload: data});
  };

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
    setBigImg(!bigImg);
    dispatch({type: 'ADD_BIGIMG', payload: data});
  };
  

  return (
    <Pressable
      style={
        data.preview
          ? more
            ? bigImg
              ? [
                  styles.card,
                  styles2.card,
                  windowWidth <= 540 && sizeImg.width / sizeImg.height > 1 ?
                  {height:'auto'}
                  :
                   {aspectRatio: sizeImg.width / sizeImg.height},
                ]
              : [styles.card, {height: 'auto'}, styles2.card]
            : bigImg
            ? [
                styles.card,
                {aspectRatio: sizeImg.width / sizeImg.height},
                styles2.card,
              ]
            : [styles.card, {height: 144}, styles2.card]
          : more
          ? [styles.card, {height: 'auto'}, styles2.card]
          : [styles.card, styles2.card]
      }
      onPress={() => moreFunction()}>
      <Text
        style={
          data.preview
            ? bigImg
              ? [
                  styles.title,
                  {width: 192, zIndex: 3, color:  '#fff'},
                  styles2.title,
                ]
              : more
              ? [styles.title, {width: 192, zIndex: 3}, styles2.title]
              : [styles.title, styles2.title, {width: 192, zIndex: 3}]
            : more
            ? [styles.title, styles2.title]
            : [styles.title, styles2.title]
        }>
        {data.name}
      </Text>
      {more ? (
        <Text
          style={
            data.preview
              ? [
                  styles.description,
                  bigImg
                    ? {width: 192, color: '#fff', zIndex: 3}
                    : {width: 192, zIndex: 3},
                  styles2.description,
                ]
              : [styles.description, styles2.description]
          }>
          {data.content}
        </Text>
      ) : (
        ''
      )}
      {more ? (
        <Text
          style={[
            styles.description,
            styles2.description,
            bigImg ? {color: '#fff', zIndex: 3} : {zIndex: 3},
          ]}>
          {data.content}
        </Text>
      ) : (
        ''
      )}
        <View
          style={
            amount > 0
              ? bigImg
                ? [
                    
                    sizeImg.width / sizeImg.height > 1 && more && windowWidth <= 540 ? {width:143, zIndex:3,} :{width: 143,  position: 'absolute',  zIndex: 3, bottom:-2},
                    styles2.button,
                  ]
                : [ {width: 143, zIndex: 3}, styles2.button]
              : bigImg
              ? [
                  
                  sizeImg.width / sizeImg.height > 1 && more && windowWidth <= 540 ? {width:114, zIndex:3} : {position: 'absolute', zIndex: 3, width: 114, bottom:-2},
                  styles2.button,
                ]
              : [ {width: 114, zIndex: 3,}, styles2.button]
          }>
          
              <ButtonSvg amount={amount} />
            
          {amount ? (
            <Pressable
              style={styles2.buttonContent}
              onPress={() =>
                amount === 1
                  ? handleMinOnPress('DEL_FOOD', data, quantity)
                  : delFood()
              }>
              <MinusSvg />
            </Pressable>
          ) : (
            ''
          )}
          <Text
            style={
              amount >= 1
                ? [styles.cost, styles2.cost, {flexShrink: 0, marginLeft:-10}]
                : [styles.cost, {marginLeft: 16, flexShrink: 0}, styles2.cost]
            }>
            {data.price} руб
          </Text>
          <Pressable
            style={styles2.buttonContent}
            onPress={() =>
              amount === 0 ? handleMaxOnPress('ADD_FOOD', data) : addFood()
            }>
            <PlusSvg />
          </Pressable>
        </View>

      {amount ? (
        <View
          style={
            bigImg
              ? [
                  styles.amount,
                  {
                    position: 'absolute',
                    zIndex: 3,
                    bottom: windowWidth >= 540 ? -2 :0,
                  },
                  styles2.amount,
                ]
              : [styles.amount, styles2.amount, {marginTop: -56, zIndex:3}]
          }>
          <Text style={[styles.amountText, styles2.amountText]}>
            {quantity ? quantity : amount}
          </Text>
        </View>
      ) : (
        ''
      )}
      {data.preview ? (
        <Pressable
          onPress={() => bigImgFunction()}
          style={{position: 'absolute', height:'100%'}}>
          <View
            style={
              bigImg
                ? {justifyContent:'center', display:'flex', height:'100%',overflow:"hidden"}
                : {
                    display: 'flex',
                    position: 'absolute',
                    height: 140,
                    width: 140,
                    justifyContent: 'center',
                    marginLeft: windowWidth >=540 ? 388 : 224,
                    marginTop:2,
                    overflow:'hidden'
                  }
            }>
            <ImageBackground
              source={{uri: `https://api.menu.true-false.ru/storage/${data.preview}`}}
              style={
                bigImg
                  ? windowWidth >=540 
                    ? {
                        aspectRatio: sizeImg.width  / sizeImg.height,
                        width: 528,
                        zIndex: 1,
                      }
                    : {
                        aspectRatio: sizeImg.width / sizeImg.height,
                        width: 364,
                        zIndex: 1,
                      }
                  : {
                      position: 'absolute',
                      width: 140,
                      aspectRatio:  sizeImg.width / sizeImg.height ,
                    }
              }>
              {bigImg ? (
                <LinearGradient
                  colors={['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.1)']}
                  style={{height: '100%', width: '100%'}}></LinearGradient>
              ) : (
                ''
              )}
            </ImageBackground>
          </View>
        </Pressable>
      ) : (
        ''
      )}
    </Pressable>
  );
};

export default Card;
