
import React from 'react';
import {
  Pressable,
  Animated,
  LayoutAnimation,
  StyleSheet,
  Image,
  NativeModules,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {stylesCardDark} from './stylesCardDark';
import {stylesCardWhite} from './stylesCardWhite';
import {stylesCard} from './stylesCard';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

const Card = ({data, index, quantity}) => {
  const dispatch = useDispatch();
  const [more, setMore] = useState(null);
  const [bigImg, setBigImg] = useState(null);
  const basket = useSelector(state => state.basket);
/*   const [quantity, setQuantity] = useState(basket.filter((el) => el.title === data.title).length); */
  const theme = useSelector(state => state.theme);

  const maxOnPress = () => {
    LayoutAnimation.spring();
  };

  const minOnPress = () => {
    LayoutAnimation.spring();

  };
  const styles = StyleSheet.create(theme ? stylesCardWhite : stylesCardDark);
  const styles2 = StyleSheet.create(stylesCard);

  const addFood = () => {
    dispatch({type: 'ADD_FOOD', payload: data});
   /*  setQuantity(quantity + 1); */
  };

  const delFood = () => {
    dispatch({type: 'DEL_FOOD', payload: data});
/*     setQuantity(quantity - 1); */
  };

  const handleMinOnPress = (type, data, x) => {
    minOnPress();
    dispatch({type: type, payload: data});
/*     setQuantity(quantity-1); */
  };

  const handleMaxOnPress = (type, data) => {
    maxOnPress();
    dispatch({type: type, payload: data});
/*     setQuantity(quantity + 1); */
  };

  const moreFunction = index => {
    if (more === index) {
      setMore(null);
    } else {
      setMore(index);
    }
  };

  const bigImgFunction = index => {
    LayoutAnimation.easeInEaseOut();
    LayoutAnimation.configureNext({
      duration: 150,
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
        opacity: 0,
      },
    });
    if (bigImg === index) {
      setBigImg(null);
    } else {
      setBigImg(index);
    }
  };

  return (
    <Pressable
      style={
        data.img
          ? more === index
            ? bigImg === index
              ? [styles.card, styles2.card, {height: 368}]
              : [styles.card, {height: 'auto'}, styles2.card]
            : bigImg === index
            ? [styles.card, {height: 368}, styles2.card]
            : [styles.card, {height: 144}, styles2.card]
          : more === index
          ? [styles.card, {height: 'auto'}, styles2.card]
          : [styles.card, styles2.card]
      }
      onPress={() => moreFunction(index)}>
      <Text
        style={
          data.img
            ? more === index
              ? [styles.title, {width: 192}, styles2.title]
              : [styles.title, styles2.title]
            : more === index
            ? [styles.title, styles2.title]
            : [styles.title, styles2.title]
        }>
        {data.title}
      </Text>
      {more === index ? (
        <View>
          <Text
            style={
              data.img
                ? [styles.description, {width: 192}, styles2.description]
                : [styles.description, styles2.description]
            }>
            {data.description}
          </Text>
          <Text style={[styles.description, styles2.description]}>
            {data.compound}
          </Text>
        </View>
      ) : (
        ''
      )}
      <Animated.View
        style={
          bigImg === index
            ? {position: 'absolute', zIndex: 3, marginTop: 294}
            : ''
        }>
        <View
          style={
            quantity > 0
              ? bigImg === index
                ? [
                    styles.button,
                    {width: 143, position: 'absolute', zIndex: 3},
                    styles2.button,
                  ]
                : [styles.button, {width: 143}, styles2.button]
              : bigImg === index
              ? [
                  styles.button,
                  {position: 'absolute', zIndex: 3, width: 114},
                  styles2.button,
                ]
              : [styles.button, {width: 114}, styles2.button]
          }>
          {quantity ? 
            <Pressable
              style={styles2.buttonContent}
              onPress={() =>
                quantity === 1
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
              quantity >= 1
                ? [styles.cost, styles2.cost]
                : [styles.cost, {marginLeft: 16}, styles2.cost]
            }>
            {data.price} руб
          </Text>
          <Pressable
            style={styles2.buttonContent}
            onPress={() =>
              quantity === 0 ? handleMaxOnPress('ADD_FOOD', data) : addFood()
            }>
            <Text style={[styles.plus, {marginLeft: 10}, styles2.buttonText]}>
              +
            </Text>
          </Pressable>
        </View>
      </Animated.View>
      {quantity ? (
        <View
          style={
            bigImg === index
              ? [
                  styles.amount,
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
            {quantity}
          </Text>
        </View>
      ) : (
        ''
      )}
      {data.img ? (
        <Pressable
          onPress={() => bigImgFunction(index)}
          style={{position: 'absolute'}}>
          <Image
            source={data.img}
            style={
              bigImg === index
                ? {height: 364, width: 364, borderRadius: 10, zIndex: 1}
                : {
                    position: 'absolute',
                    width: 140,
                    height: 140,
                    marginLeft: 224,
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                  }
            }
          />
        </Pressable>
      ) : (
        ''
      )}
    </Pressable>
  );
};

export default Card;
