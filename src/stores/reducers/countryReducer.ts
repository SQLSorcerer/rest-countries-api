interface COuntryState {
    data:any;
    loading: boolean;
    error: string | null;
}

const initialState: COuntryState = {
    data: null,
    loading: false,
    error: null,
};

const countryReducer = (state = initialState, action: any) =>{
    switch(action.type){
        case 'FETCH_COUNTRY_DATA_REQUEST':
            return {...state, loading: true, error: null};
        case 'FETCH_COUNTRY_DATA_SUCCESS':
            return {...state, data: action.payload, loading:false, error:null};
        case 'FETCH_COUNTRY_DATA_FAILURE':
            return {...state, data: action.payload, loading:false, error:null};
        default:
            return state;
    }
};

export default countryReducer;