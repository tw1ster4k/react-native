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

  return (
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
            
            <Stack.Screen name={el} key={index} component={Category} options={{headerShown:false}} />
          
          )
          }
        </Stack.Navigator>
      <Footer />
      </NavigationContainer>
    </ErrorBoundary>
      </Provider>

  );
}



export default App;
