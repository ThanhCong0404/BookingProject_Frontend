import { createContext, useReducer } from "react";
// Context dùng để truyền dữ liệu giữa các component trong cây component của ứng dụng React mà không cần thông qua các prop từng cấp.

const INIT_STATE= { //khởi tạo state ban đầu cho thanh Search
    city: undefined,
    dates:[], //luu vao index 0
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
            return action.payload  // lay gia tri tu payload (ở đây là truyền giá trị state đã có dữ liệu)
        case "RESET_SEARCH":
            return INIT_STATE // khoi tao du lieu rong
        default:
            return state;
    }
}

export const SearchContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(SearchReducer,INIT_STATE);//nhận vào 2 tham số: reducer function và initial state.giá trị trả về của reducer function sẽ được lưu vào biến `state`, và hàm thay đổi state có tên là `dispatch`.
    // truyền giá trị cần lưu trữ trong context vào `value` của `SearchContext.Provider`, trong đó giá trị này chứa các keys là `city`, `dates`, `options` và `dispatch`. Nếu các components con muốn sử dụng context này, chúng cần phải wrap bên trong `SearchContextProvider` và sử dụng hook `useContext(SearchContext)` để truy cập vào các values này.
    return (
        <SearchContext.Provider value={{city:state.city, dates:state.dates, options:state.options, dispatch}}>
            {children}
        </SearchContext.Provider>
    )
}