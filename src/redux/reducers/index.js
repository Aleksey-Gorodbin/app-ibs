const initialState = {
  weather: [],
  city: "",
  coordinates: [],
  content: false,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CITY':
      return {
        ...state,
        city: action.payload,
      };

    case 'SET_COORDINATES':
      return {
        ...state,
        coordinates: action.payload,
      };

      case 'SET_DATA':
      return {
        ...state,
        weather: action.payload,
        content: true,
      };

    default:
      return state;
  }
};

export default data;
