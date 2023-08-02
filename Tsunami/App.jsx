import "react-native-gesture-handler"
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
// import components navigation
import Home from './Components/Home/Home';
import Category from "./Components/Category/Category";
import Basket from "./Components/Basket/Basket";
import Footer from "./Components/Blocks/Footer/Footer";
import Search from "./Components/Search/Search";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBlock from "./Components/Blocks/ErrorBlock/ErrorBlock";
import { View, Dimensions } from "react-native";
import { useState } from "react";
import { Platform } from "react-native";



const Stack = createStackNavigator()
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 750,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const App = () => {

  const windowHeight = Dimensions.get("window").height
  const windowWidth = Dimensions.get('window').width

const[theme, setTheme] = useState(false)

  const category = [
    {title:'Салаты', uri:"salads"},
    {title:'Холодные закуски', uri:"coldSnacks"},
    {title:'Горячие закуски', uri:"hotSnacks"},
    {title:'Икорный бар', uri:"caviarBar"},
    {title:'Морепродукты', uri:"seafood"},
    {title:'Супы', uri:"soups"},
    {title:'Крупа и паста', uri:"cerealsAndPasta"},
    {title:'Горячее', uri:'hotter'},
    {title:'Мангал', uri:"brazier"},
    {title:'Тесто и начинка', uri:"doughAndStuffing"},
  ];

  Platform.OS === "web" ?
   useEffect(() => {
    const x = document.getElementsByClassName("css-view-175oi2r")
    const elementToStyle = x[5]
    elementToStyle.style.backgroundColor= theme ? "#fff" :"#151515"
  }, [])
  : ''

  return (
  <View style={windowWidth >=540  ? {width:"99.9%", height:windowHeight} : {width:400, height:windowHeight}}>
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorBlock}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          transitionSpec:{
            open:config,
            close:config,
          },
          gestureEnabled:true,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
        >
          <Stack.Screen name='Меню' component={Home} options={{headerShown:false, }} />
          <Stack.Screen name="Избранное" component={Basket} options={{headerShown:false,}} />
          <Stack.Screen name="Поиск" component={Search} options={{headerShown:false,}} />
          {category.map((el, index) => 
            <Stack.Screen name={el.title} key={index} component={Category}  options={{headerShown:false,}}  initialParams={{category:el.uri}} />
            )
          }
        </Stack.Navigator>
      <Footer />
      </NavigationContainer>
    </ErrorBoundary>
    </Provider>
  </View>
  );
}



export default App;
