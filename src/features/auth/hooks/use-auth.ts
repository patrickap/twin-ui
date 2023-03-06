import { useContext } from 'react';
import { AuthenticationContext } from '../providers';

const useAuth = () => useContext(AuthenticationContext);

export { useAuth };
