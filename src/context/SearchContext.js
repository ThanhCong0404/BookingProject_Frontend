import { createContext, useReducer } from "react";
// Context dùng để truyền dữ liệu giữa các component trong cây component của ứng dụng React mà không cần thông qua các prop từng cấp.

const INIT_STATE= { //khởi tạo state ban đầu cho thanh Search
    city: undefined,
    dates:[],
    options:{
        adult:undefined,
        children:undefined,
        room:undefined
    }
}

export const SearchContext= createContext(INIT_STATE);

const SearchReducer = (state,action) => {
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload
        case "RESET_SEARCH":
            return INIT_STATE
        default:
            return state;
    }
}

export const SearchContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(SearchReducer,INIT_STATE);

    return (
        <SearchContext.Provider value={{city:state.city, dates:state.dates, options:state.options, dispatch}}>
            {children}

        </SearchContext.Provider>
    )
}