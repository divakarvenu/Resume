import React, {createContext, useReducer, useContext} from "react";
import Reducer from './Reducer.js';

const initialState = {
    "Name": 'sample',
    "Title": '',
    "Description": '',
    "image": '',
    "contact":[{
        "phone": ''
    }],
    "Experience":[{
        "title":'',
        "From":'',
        "To":"",
        "Description":''
    }],
    "skills":[],
    "Education":[{
        "school":'',
        "course":'',
        "From":'',
        "To":''
    }],
    "certification":[{
        "title":'',
        "URL":'',
    }]    
};

export const Context = createContext(null);

const CustomProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
};


export default CustomProvider;