import "react-native-gesture-handler"
import React from 'react';
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

  return (
  <View style={windowWidth > 1080 ? {width:1920, height:windowHeight, backgroundColor:"#151515"}  : {width:400, height:windowHeight,backgroundColor:'#151515'}}>
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorBlock}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          transitionSpec:{
            open:config,
            close:config
          },
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
        >
          <Stack.Screen name='Меню' component={Home} options={{headerShown:false, }} />
          <Stack.Screen name="Избранное" component={Basket} options={{headerShown:false,}} />
          <Stack.Screen name="Поиск" component={Search} options={{headerShown:false,}} />
          {category.map((el, index) => 
            <Stack.Screen name={el.title} key={index} component={Category}  options={{headerShown:false}} initialParams={{category:el.uri}} />
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
