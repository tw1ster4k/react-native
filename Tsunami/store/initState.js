export const initState = {
basket:[

],
price:0,
theme:false,
more:[],
bigImg:[],
back:false
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
                const z = state.basket.findIndex((el) => el.name === actions.payload.name)
                if(z >= 0) {
                    arr.splice(z, 1)
                } 
                 return {...state, basket: arr, price: state.price > 0 ? state.price -= actions.payload.price : 0} 
              case "ADD_MORE":
                const arr2 = state.more
                const y = arr2.findIndex((el) => el.name === actions.payload.name)
                    if(y === -1) {
                      const  newMore = [...state.more, actions.payload]
                      return {...state, more: newMore}
                    }else{
                        arr2.splice(y, 1)
                    }
                return {...state, more: arr2}
              case "ADD_BIGIMG" :
                const arr3 = state.bigImg
                const x = arr3.findIndex((el) => el.name === actions.payload.name)
                if(x === -1 ) {
                    const newBigImg = [...state.bigImg, actions.payload]
                    return {...state, bigImg: newBigImg}
                }else{
                    arr3.splice(x, 1)
                }
                return {...state, bigImg: arr3}
                case "ADD_BACK" :
                    return {...state , back: actions.payload}                         
            default :
                return state
    }
}
    
