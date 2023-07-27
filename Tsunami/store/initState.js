import Salad from "../Components/Image/23.png"
import boul from "../Components/Image/boul.png"
import husum from "../Components/Image/husum.jpg"
import losos from "../Components/Image/losos.webp"
import gaspatcho from "../Components/Image/gaspatcho.jpg"
import tartar from "../Components/Image/tartar.jpg"

export const initState = {
salads:[
{title:"Зеленый салат с кейлом, авокадо и лимонным дрессингом",description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм",price:790, quantity:0,img:Salad}, 
{title:"Зелёный салат с цицмати, рейганом и семенами конопли",description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм",price:620, quantity:0,img:boul} ,
{title:"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)",description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм" ,price:720,img:husum}, 
{title:"Салат из молодого редиса, сезонных овощей и соусом из хивинской халвы", description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм",price:740, quntity:0,img:losos}, 
{title:"Узбекские помидоры с сыром чечил и бородинским спонжем", description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм",price:620, quantity:0,img:gaspatcho},
{title:"Салат с крабом и ростками подсолнуха",description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм", price:1260, quantity:0,img:tartar}, 
{title:"Оливье с рябчиком, телячьим языком и раковыми шейками",description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм", price:900, quantity:0,img:Salad},
{title:"Оливье с угрём и топинамбуром",description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм", price:920, quantity:0,img:Salad},
{title:"Зелёный салат с сёмгой горячего копчения", description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм",price:780, quantity:0,img:Salad}, 
{title:"Салат с уткой, хурмой и подкопчённым миндалём", description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм",price:860, quantity:0,img:Salad}, 
{title:"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)",description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм", price:720, quantity:0}    
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
    
