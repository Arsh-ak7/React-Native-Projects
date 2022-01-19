import React, {createContext, useReducer} from 'react';
import authStates from './state/authStates';
import auth from './reducers/auth';

const GlobalContext = createContext({});

const Provider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authStates);
  const [contactState, contactDispatch] = useReducer(contacts, contactStates);
  return <GlobalContext.Provider value={[]}>{children}</GlobalContext.Provider>;
};
