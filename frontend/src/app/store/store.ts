import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { accountDescriptionReducer } from 'entities/account/accountDescripton';
import { accountListReducer } from 'entities/account/accountList';
import { categoryDescriptionReducer } from 'entities/category/categoryDescripton';
import { categoryListReducer } from 'entities/category/categoryList';
import { operationDescriptionReducer } from 'entities/operation/operationDescripton';
import { operationListReducer } from 'entities/operation/operationList';

const rootReducer = combineReducers({
	accountDescription: accountDescriptionReducer,
	accountList: accountListReducer,
	categoryDescription: categoryDescriptionReducer,
	categoryList: categoryListReducer,
	operationDescription: operationDescriptionReducer,
	operationList: operationListReducer,
});

export const store = configureStore({ reducer: rootReducer });
