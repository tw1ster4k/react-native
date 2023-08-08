import Salad from "../Components/Image/23.png"
import boul from "../Components/Image/boul.png"
import husum from "../Components/Image/husum.jpg"
import losos from "../Components/Image/losos.webp"
import gaspatcho from "../Components/Image/gaspatcho.jpg"
import tartar from "../Components/Image/tartar.jpg"
import Logo from "../Components/Image/Logo.svg"


export const initState = {
salads:[
{title:"Зеленый салат с кейлом, авокадо и лимонным дрессингом",description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм",price:790, quantity:0,img:Salad}, 
{title:"Боул лосось с клубничной сальсой",description:"Киноа, бобы эдамаме, микс салат, дайкон, лосось, клубничная сальса, кунжутный соус, чипсы из нори, кунжут.",compound:"Белки - 17 / Жиры - 12 / Углеводы - 30 / Масса Нетто  233 грамм",price:850, quantity:0,img:boul} ,
{title:"Хумус из эдамаме",description:"Хумус из эдамаме (нут, бобы эдамаме, кунжутное масло, специи харисса, шпинат св.), масло из петрушки, шпинат св., бобы эдамаме, кунжут, лепешки роти (Слоеная лепешка из пшеничной муки, воды и масла).",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм" ,price:590,img:husum}, 
{title:"Нигири лосось 2 шт.", description:"Опаленные суши нигири с соусом терияки, луковым кремом и кунжутом. Состав: лосось филе, рис, соус терияки, луковый крем, кунжут.",compound:"Белки - 5,7 / Жиры - 1,8 / Углеводы - 12,9 / Масса Нетто  92 грамм",price:450, quntity:0,img:losos}, 
{title:"Гаспачо с креветками", description:"Томаты с/с, сок юдзу, кабачок цукини, соус чимичурри (соус из св. зелени),тигровые креветки, кунжут, масло петрушки, кинза.",compound:"Белки - 14 / Жиры - 10 / Углеводы - 20 / Масса Нетто  357 грамм",price:750, quantity:0,img:gaspatcho},
{title:"Тартар из говядины",description:"Говядина филе, каперсы, соус хариса, сушеные маслины, лук фри, соус антикучос, пай из моркови, зеленый лук, кунжут.",compound:"Белки - 18 / Жиры - 29 / Углеводы - 12 / Масса Нетто  146 грамм", price:890, quantity:0,img:tartar}, 
{title:"Оливье с рябчиком, телячьим языком и раковыми шейками",description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм", price:900, quantity:0,img:Salad},
{title:"Оливье с угрём и топинамбуром",description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм", price:920, quantity:0,img:Salad},
{title:"Зелёный салат с сёмгой горячего копчения", description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм",price:780, quantity:0,img:Salad}, 
{title:"Салат с уткой, хурмой и подкопчённым миндалём", description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм",price:860, quantity:0,img:Salad}, 
{title:"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)",description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм", price:720, quantity:0,img:boul }    
],
basket:[

],
price:0,
theme:false,
more:[],
bigImg:[],
}

export const reducers = (state = initState, actions) => {
    switch (actions.type) {
        case 'ADD_FOOD':  
            const newFood =  actions.payload;
            const newBasket = [...state.basket, newFood];
            return {...state, basket: newBasket, price: state.price += actions.payload.price,}
            case "ADD_THEME" :
                return {...state, theme: actions.payload}
            case "DEL_FOOD":
                const arr = state.basket
                const z = state.basket.findIndex((el) => el.title === actions.payload.title)
                if(z >= 0) {
                    arr.splice(z, 1)
                } 
                 return {...state, basket: arr, price: state.price > 0 ? state.price -= actions.payload.price : 0} 
              case "ADD_MORE":
                const arr2 = state.more
                const y = arr2.findIndex((el) => el.title === actions.payload.title)
                    if(y === -1) {
                      const  newMore = [...state.more, actions.payload]
                      return {...state, more: newMore}
                    }else{
                        arr2.splice(y, 1)
                    }
                return {...state, more: arr2}
              case "ADD_BIGIMG" :
                const arr3 = state.bigImg
                const x = arr3.findIndex((el) => el.title === actions.payload.title)
                if(x === -1 ) {
                    const newBigImg = [...state.bigImg, actions.payload]
                    return {...state, bigImg: newBigImg}
                }else{
                    arr3.splice(x, 1)
                }
                return {...state, bigImg: arr3}                         
            default :
                return state
    }
}
    
