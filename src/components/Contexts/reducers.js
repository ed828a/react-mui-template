export const themeReducer = (state, action) => {
    switch (action.type) {
        case "SET_THEME_MODE":
            console.log('reducer: action.mode: ', action.mode)
            return {...state, themeMode: action.mode };          
        
        default:
            return state;
    }
};
