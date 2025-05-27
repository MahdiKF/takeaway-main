import { createContext } from 'react';

const UserCardContext = createContext({
  userCards: [],
  setUserCards: () => {},
});

export default UserCardContext;
