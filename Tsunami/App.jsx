import "react-native-gesture-handler"
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
// импорт компонентов для навигации ;)
import Home from './Components/Home/Home';
import Salads from "./Components/Salads/Salads";
import Basket from "./Components/Basket/Basket";
import Footer from "./Components/Blocks/Footer/Footer";
import Search from "./Components/Search/Search";
import Hotter from "./Components/Hotter/Hotter";
import ColdAppetizers from "./Components/ColdAppetizers/ColdAppetizers";
import DoughAndStuffing from "./Components/DoughAndStuffing/DoughAndStuffing";
import CerealsAndPasta from "./Components/ CerealsAndPasta/CerealsAndPasta";
import HotAppetizers from "./Components/ HotAppetizers/HotAppetizers";
import Brazier from "./Components/Brazier/Brazier";
import CaviarBar from "./Components/ CaviarBar/CaviarBar";
import SeaFood from "./Components/Seafood/SeaFood";
import Soups from "./Components/Soups/Soups";

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
          <Stack.Screen name="Салаты" component={Salads} options={{headerShown:false}} />
          <Stack.Screen name="Избранное" component={Basket} options={{headerShown:false,}} />
          <Stack.Screen name="Поиск" component={Search} options={{headerShown:false,}} />
          <Stack.Screen name="Холодные закуски" component={ColdAppetizers} options={{headerShown:false}} />
          <Stack.Screen name='Горячие закуски' component={HotAppetizers} options={{headerShown:false, }} />
          <Stack.Screen name="Икорный бар" component={CaviarBar} options={{headerShown:false}} />
          <Stack.Screen name="Морепродукты" component={SeaFood} options={{headerShown:false,}} />
          <Stack.Screen name="Крупа и паста" component={CerealsAndPasta} options={{headerShown:false}} />
          <Stack.Screen name='Мангал' component={Brazier} options={{headerShown:false, }} />
          <Stack.Screen name="Тесто и начинка" component={DoughAndStuffing} options={{headerShown:false}} />
          <Stack.Screen name="Супы" component={Soups} options={{headerShown:false,}} />
          <Stack.Screen name="Горячее" component={Hotter} options={{headerShown:false}} />
        </Stack.Navigator>
      <Footer />
      </NavigationContainer>
    </ErrorBoundary>
      </Provider>

  );
}



export default App;
