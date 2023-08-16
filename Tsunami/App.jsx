import "react-native-gesture-handler"
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { View, Dimensions } from "react-native";
import { Platform } from "react-native";
import axios from "axios";
// import components navigation
import Home from './Components/Home/Home';
import Category from "./Components/Category/Category";
import Basket from "./Components/Basket/Basket";
import Footer from "./Components/Blocks/Footer/Footer";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBlock from "./Components/Blocks/ErrorBlock/ErrorBlock";




const Stack = createStackNavigator()
const config = {
  animation:"linear",
  config: {
    stiffness: 1000,
    damping: 750,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

  const ser = 'https://api.menu.true-false.ru/api/get'


  const App = () => {
    
  const windowHeight = Dimensions.get("window").height
  const windowWidth = Dimensions.get('window').width
  const [setting, setSetting ] = useState({title:"",description:"", logo:"", logo_dark:"", logo_light:""})
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [category, setCategory] = useState([
  ]);

  
useEffect(() => {

  axios.get(ser).then(result => {
    setSetting(result.data.settings)
    if (Platform.OS === "web"){ 
  const newIcon = `https://api.menu.true-false.ru/storage/${result.data.settings.icon}`
  const link = document.createElement("link")
  link.rel = 'icon';
  link.type = 'image/x-icon';
  link.href = newIcon;
   const linkElement = document.querySelector("link[rel='icon']");
  if(linkElement){
    document.head.removeChild(linkElement)
  } 
  document.head.appendChild(link)
  setSetting(result.data.settings)
  setCategory(result.data.catalog)
  setIsDataLoaded(true);
}else{
  setSetting(result.data.settings)
  setCategory(result.data.catalog)
  setIsDataLoaded(true);
}
} 
  ).
  catch(error => console.log(error))
}, [])


  return (
  <View style={windowWidth >=540  ? {width:"99.9%", height:windowHeight} : Platform.OS === "web" ? {width:windowWidth, height:windowHeight, overflow:'scroll'} : {width:windowWidth, height:windowHeight, flex:1 }}>
   
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorBlock}>
      <NavigationContainer>
        {setting.title && isDataLoaded ? (
        <Stack.Navigator screenOptions={{
          transitionSpec:{
            open:config,
            close:config,
          },
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          
        }}
        >
              <Stack.Screen name={setting.title} component={Home} options={{headerMode:"none" }}  initialParams={{description:setting.description, logoDark:setting.logo_dark, logoWhite:setting.logo_light, catalog:category}}/>
              
          <Stack.Screen name="Избранное" component={Basket} options={{headerMode:"none"}} />
          {category.map((el, index) => 
            <Stack.Screen name={el.name} key={index} component={Category}  options={{headerMode:"none"}}  initialParams={{category:el.slug}} />
          )}
          </Stack.Navigator>
        ) : null
      }
          <Footer homeNavigate={setting.title} />
      </NavigationContainer>
    </ErrorBoundary>
    </Provider>
  </View>
  );
}



export default App;
