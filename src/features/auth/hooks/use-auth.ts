import { useContext } from 'react';
import { AuthenticationContext } from '../providers';

// TODO: FIXME: state is not shared using useMutation but useQuery does...

const useAuth = () => useContext(AuthenticationContext);

export { useAuth };
