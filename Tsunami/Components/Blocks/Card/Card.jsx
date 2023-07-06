import React from 'react'
import { Pressable, Animated, LayoutAnimation, StyleSheet, Image, NativeModules, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { stylesCardDark } from './stylesCardDark'
import { stylesCardWhite } from './stylesCardWhite'


const {UIManager} = NativeModules

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);


const Card = ({data, index}) => {
    const dispatch = useDispatch()

    const [more, setMore] = useState(null)
    const [bigImg, setBigImg] = useState(null)
    const [w, setW] = useState(143)
    const basket = useSelector((state) => state.basket)
    const [quantity, setQuantity] = useState(basket.filter((el) => el.title === data.title).length)
    const theme = useSelector((state) => state.theme)
    
    
    const maxOnPress = () => {
        LayoutAnimation.spring();
        if(w === 117) {
          setW(w + 26)
        }else{
          
        }
    }
    
    
    const minOnPress = (x) => {
        LayoutAnimation.spring();
        if(w === 143 && x === 1) {  
            setW(w - 26)
        }else{
            
        }
    }
    const styles = StyleSheet.create(theme ? stylesCardWhite : stylesCardDark)


    const addFood = () => {
        dispatch({type:"ADD_FOOD", payload:data})
        setQuantity(quantity+1)
    }
    
    const delFood = () => {
        dispatch({type:"DEL_FOOD", payload:data})
        setQuantity(quantity-1)
    }

    
    const handleMinOnPress = (type, data, x) => {
        minOnPress(x);
        dispatch({type:type, payload:data})
        setQuantity(0)
      }

      const handleMaxOnPress = (type, data) =>{
        maxOnPress();
        dispatch({type:type, payload:data})
        setQuantity(quantity+1)
      }

    const moreFunction = (index) => {
        if(more === index){
          setMore(null)
        } else {
          setMore(index)
        }
      }

      const bigImgFunction = (index) => {
        LayoutAnimation.easeInEaseOut();
        LayoutAnimation.configureNext({
          duration: 150,
          update: {
            type: LayoutAnimation.Types.easeInEaseOut,
            property: LayoutAnimation.Properties.opacity,
            opacity: 0,
        
          },
        }); 
        if(bigImg === index) {
          setBigImg(null)
        }else{
          setBigImg(index)
        }
      }

  return (
    <Pressable style={data.img ? more===index ? bigImg === index ? [styles.card, {height:368, width:368, marginTop:18, marginLeft:10, borderRadius:10, borderWidth:2}] : [styles.card, {height:"auto",  width:368, marginTop:18, marginLeft:10, borderRadius:10, borderWidth:2}] : bigImg === index ? [styles.card, {height:368,  width:368, marginTop:18, marginLeft:10, borderRadius:10, borderWidth:2}] : [styles.card, {height:144,  width:368, marginTop:18, marginLeft:10, borderRadius:10, borderWidth:2}] : more === index ? [styles.card, {height:'auto',  width:368, marginTop:18, marginLeft:10, borderRadius:10, borderWidth:2}] : [styles.card, {width:368, marginTop:18, marginLeft:10, borderRadius:10, borderWidth:2}]} onPress={() => moreFunction(index)}>
            <Text style={data.img ? more === index ? [styles.title, {width:192,fontWeight:600, fontSize:14, lineHeight:17.15, marginTop:16, marginLeft:16}] : [styles.title, {width:192,fontWeight:600, fontSize:14, marginTop:16, marginLeft:16}] : more === index ? [styles.title, {fontWeight:600, fontSize:14, lineHeight:17.15, marginTop:16, marginLeft:16}] : [styles.title, {fontWeight:600, fontSize:14, marginTop:16, marginLeft:16}]}>{data.title}</Text>
            {more === index ? 
            <View>
                <Text style={data.img ? [styles.description, {width:192, fontWeight:400, fontSize:14, marginTop:16, marginLeft:16}] : [styles.description, {fontWeight:400, fontSize:14, marginTop:16, marginLeft:16}]}>{data.description}</Text>
                <Text style={[styles.description,{fontWeight:400, fontSize:14, marginTop:16, marginLeft:16}]}>{data.compound}</Text>
            </View>
            : ''
            }
            <Animated.View style={bigImg === index ? {position:'absolute', zIndex:3, marginTop:294} : ''}>
                <View style={quantity >= 1 ? bigImg === index ? [styles.button, {width:w, position:"absolute", zIndex:3, height:40, borderRadius:10, display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-around", margin:16}] : [styles.button, {width:w, height:40, borderRadius:10, display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-around", margin:16}] : bigImg === index ? [styles.button, {position:'absolute', zIndex:3,width:114 ,height:40, borderRadius:10, display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-around", margin:16}] : [styles.button, {width:114, height:40, borderRadius:10, display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-around", margin:16}] }>
                    {quantity ? 
                        <Pressable style={{height:"100%", width:55.5, alignItems:"center", marginTop:11}} onPress={() => quantity === 1 ? handleMinOnPress("DEL_FOOD", data, quantity) : delFood()}>
                        <Text style={[styles.minus, {fontWeight:400, fontSize:20, marginLeft:-10}]}>-</Text>
                    </Pressable>
                    : ''
                    }
                    <Text style={quantity >= 1 ? [styles.cost, {fontWeight:400, fontSize:16}] : [styles.cost, {marginLeft:16, fontWeight:400, fontSize:16}]}>{data.price} руб</Text>
                    <Pressable style={{height:"100%",width:55.5, alignItems:'center', marginTop:11}} onPress={() => quantity === 0 ? handleMaxOnPress("ADD_FOOD", data) : addFood()}>
                        <Text style={[styles.plus, {fontWeight:400, fontSize:20, marginLeft:10}]}>+</Text>
                    </Pressable>
                </View>
            </Animated.View>
            {quantity ?
                <View style={bigImg === index ? [styles.amount, {position:"absolute", zIndex:3,marginTop:310 ,marginLeft:167,justifyContent:'center', alignItems:'center',borderRadius:10,borderWidth:2, borderColor:"#ff7a00", width:38, height:40, marginBottom:16}] : [styles.amount, {justifyContent:'center', alignItems:'center',borderRadius:10,borderWidth:2,borderColor:"#ff7a00",width:38,height:40,marginLeft:167, marginTop:-56, marginBottom:16}]}>
                <Text style={[styles.amountText, {fontWeight:600, fontSize:16}]}>{quantity}</Text>
            </View>
            : ""
            }
            {data.img ?
            <Pressable onPress={() => bigImgFunction(index)} style={{position:"absolute"}}>
                <Image source={data.img} style={bigImg === index ? {height:364, width:364, borderRadius:10, zIndex:1}  : {position:'absolute', width:140, height:140, marginLeft:224, borderBottomRightRadius:10, borderTopRightRadius:10}} />
            </Pressable>
            : ''
            }
    </Pressable>
  )
}

export default Card