import "react-native-gesture-handler"
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
// import components navigation
import Home from './Components/Home/Home';
import Category from "./Components/Category/Category";
import Basket from "./Components/Basket/Basket";
import Footer from "./Components/Blocks/Footer/Footer";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBlock from "./Components/Blocks/ErrorBlock/ErrorBlock";
import { View, Dimensions } from "react-native";
import { Platform } from "react-native";
import Logo from "./Components/Image/Logo.svg"
import Icon from "./public/sosi.png"
import axios from "axios";




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

  const ser = 'https://api.menu.true-false.ru/api/get'


  const App = () => {
    
  const windowHeight = Dimensions.get("window").height
  const windowWidth = Dimensions.get('window').width
  const [setting, setSetting ] = useState({title:"Меню Tsunami",description:"Онлайн-меню японо-перуанской кухни ресторана Tsunami", logo:Logo, logo_dark:"", logo_light:""})

  const [category, setCategory] = useState([
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
  ]);

  

axios.get(ser).then(result => {
if(Platform.OS === "web"){ 
  const newIcon = `https://api.menu.true-false.ru/storage/${result.data.settings.icon}`
  const link = document.createElement("link")
  link.rel = 'icon';
  link.type = 'image/x-icon';
  link.href = newIcon;
   const linkElement = document.querySelector("link[rel='icon']");
   console.log(result.data)
  if(linkElement){
    document.head.removeChild(linkElement)
  } 
  document.head.appendChild(link)
  setSetting(result.data.settings)
}else{
  setSetting(result.data.settings)
}
} 
  ).
  catch(error => console.log(error))


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
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
        >
          <Stack.Screen name={setting.title} component={Home} options={{headerShown:false, }}  initialParams={{description:setting.description, logoDark:setting.logo_dark, logoWhite:setting.logo_light}}/>
          <Stack.Screen name="Избранное" component={Basket} options={{headerShown:false,}} />
          {category.map((el, index) => 
            <Stack.Screen name={el.title} key={index} component={Category}  options={{headerShown:false,}}  initialParams={{category:el.uri}} />
            )
          }
        </Stack.Navigator>
      <Footer homeNavigate={setting.title} />
      </NavigationContainer>
    </ErrorBoundary>
    </Provider>
  </View>
  );
}



export default App;
