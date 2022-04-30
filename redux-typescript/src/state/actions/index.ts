import { ActionType } from '../action-types';

interface SearchRepositoriesAction {
	type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesActionSuccess {
	type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
	payload: string[];
}

interface SearchRepositoriesActionError {
	type: ActionType.SEARCH_REPOSITORIES_ERROR;
	payload: string;
}

export type Action =
	| SearchRepositoriesAction
	| SearchRepositoriesActionSuccess
	| SearchRepositoriesActionError;
