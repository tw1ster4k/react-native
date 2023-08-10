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
  const [setting, setSetting ] = useState({icon:Icon, title:"Меню Tsunami",description:"Онлайн-меню японо-перуанской кухни ресторана Tsunami", logo:Logo})
/* 
const[theme, setTheme] = useState(false) */

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

/*   Platform.OS === "web" ?
   useEffect(() => {
    const x = document.getElementsByClassName("css-view-175oi2r")
    const elementToStyle = x[5]
    const elementToHeight = x[16]
    elementToStyle.style.backgroundColor= theme ? "#fff" :"#151515"
    elementToStyle.style.height = "auto"
    elementToHeight.style.height = "100%"
  }, [])
  : ''
 */

 /*  const ser = 'https://api.menu.true-false.ru/api/'
      useEffect(() => {
      (async () => {
        const res = await fetch(ser + 'get', {
          method: "GET",
          headers: {
            'Content-Type':'application/json'
          }
        });
        const data = await res.json()
        console.log(data)
          
       })()
            }, [])  */


            Platform.OS === "web" ?
            useEffect(() => {
              if (setting.icon) {
                const link = document.createElement('link');
                link.rel = 'icon';
                link.type = 'image/x-icon';
                link.href = setting.icon;
                const prevFavicon = document.querySelector('link[rel="icon"]');
                if (prevFavicon) {
                  document.head.removeChild(prevFavicon);
                }

                document.head.appendChild(link);
              }
            }, [])
            : ""

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
          <Stack.Screen name={setting.title} component={Home} options={{headerShown:false, }}  initialParams={{description:setting.description, logo:setting.logo}}/>
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
