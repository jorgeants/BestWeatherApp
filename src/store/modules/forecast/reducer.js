import {
  REQUEST_FORECAST,
  FORECAST_SUCCESS,
  FORECAST_FAILURE,
} from './constants';

const defaultState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: {
    temp: 21,
    date: '',
    time: '',
    condition_code: '',
    description: '',
    currently: '',
    cid: '',
    city: '',
    img_id: '',
    humidity: 56,
    wind_speedy: '',
    sunrise: '',
    sunset: '',
    condition_slug: '',
    city_name: '',
    forecast: [
      {
        date: '',
        weekday: '',
        max: 26,
        min: 15,
        description: '',
        condition: '',
      },
    ],
  },
};

export default function forecast(state = defaultState, action) {
  switch (action.type) {
    case REQUEST_FORECAST:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      };
    case FORECAST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        data: action.payload.data,
      };
    case FORECAST_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
