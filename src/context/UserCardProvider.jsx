
import { useState } from 'react';
import UserCardContext from './UserCardsContext';

function UserCardProvider({ children }) {
  const [userCards, setUserCards] = useState([]);

  return (
    <UserCardContext.Provider value={{ userCards, setUserCards }}>
      {children}
    </UserCardContext.Provider>
  );
}

export default UserCardProvider;
