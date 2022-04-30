import { ActionType } from '../action-types';
import { Action } from '../actions';

type RepositoryState = {
	loading: Boolean;
	error: null | string;
	data: string[];
};

const initialState = {
	loading: false,
	error: null,
	data: [],
};

const reducer = (
	state: RepositoryState = initialState,
	action: Action
): RepositoryState => {
	switch (action.type) {
		case ActionType.SEARCH_REPOSITORIES:
			return { loading: true, error: null, data: [] };
		case ActionType.SEARCH_REPOSITORIES_SUCCESS:
			return { loading: false, error: null, data: action.payload };
		case ActionType.SEARCH_REPOSITORIES_ERROR:
			return { loading: false, error: action.payload, data: [] };
		default:
			return state;
	}
};

export default reducer;
