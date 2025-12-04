import { UserContext } from './UserContext';

export function UserProvider({ userId, children }) {
  return (
    <UserContext.Provider value={userId}>
      {children}
    </UserContext.Provider>
  );
}