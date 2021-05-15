import {
	ORDER_CREATE_FAILED,
	ORDER_CREATE_REQUEST,
	ORDER_CREATE_RESET,
	ORDER_CREATE_SUCCESS,
	ORDER_DETAILS_FAILED,
	ORDER_DETAILS_REQUEST,
	ORDER_DETAILS_SUCCESS
} from '../constants/orderConstants';

export const orderCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case ORDER_CREATE_REQUEST:
			return { loading: true };
		case ORDER_CREATE_SUCCESS:
			return { loading: false, success: true, order: action.payload };
		case ORDER_CREATE_FAILED:
			return { ...state, success: false, loading: false, error: action.payload };
		case ORDER_CREATE_RESET:
			return {};
		default:
			return state;
	}
};

export const orderDetailsReducer = (state = { loading: true }, action) => {
	switch (action.type) {
		case ORDER_DETAILS_REQUEST:
			return { ...state, loading: true };
		case ORDER_DETAILS_SUCCESS:
			return { ...state, loading: false, order: action.payload };
		case ORDER_DETAILS_FAILED:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
