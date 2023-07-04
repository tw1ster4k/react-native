import "react-native-gesture-handler"
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home/Home';
import Salads from "./Components/Salads/Salads";
import Basket from "./Components/Basket/Basket";



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


  return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          gestureEnabled: true,
          gestureDirection:"vertical",
          transitionSpec:{
            open:config,
            close:config
          },
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
        >
          <Stack.Screen name='Меню' component={Home} options={{headerShown:false, }} />
          <Stack.Screen name="Салаты" component={Salads} options={{headerShown:false,}} />
          <Stack.Screen name="Избранное" component={Basket} options={{headerShown:false,}} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
}



export default App;
