import axios from 'axios';
import { AnyAction, Dispatch } from 'redux';

import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term: string): any => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.SEARCH_REPOSITORIES,
		});
		try {
			const res = await axios.get('https://registry.npmjs.org/-/v1/search', {
				params: { text: term },
			});
			const data = res.data.objects.map((object: any) => object.package.name);
			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
				payload: data,
			});
		} catch (err: any) {
			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_ERROR,
				payload: err.message,
			});
		}
	};
};
