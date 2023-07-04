import "react-native-gesture-handler"
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home/Home';
import Salads from "./Components/Salads/Salads";
import Basket from "./Components/Basket/Basket";



const Stack = createStackNavigator()
const App = () => {
  return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Меню' component={Home} options={{headerShown:false, animationEnabled:false}} />
          <Stack.Screen name="Салаты" component={Salads} options={{headerShown:false, animationEnabled:false}} />
          <Stack.Screen name="Избранное" component={Basket} options={{headerShown:false, animationEnabled:false}} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
}



export default App;
