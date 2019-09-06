import React from 'react';
import { UserInfoApp } from "./components/user-info";
import { userInfoStore } from './store/user-info-store';

export const App=()=><UserInfoApp  store={userInfoStore} /> 