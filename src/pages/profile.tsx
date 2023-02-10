import { useQuery } from '@tanstack/react-query';
import { userQuery } from '../constants/queries';

const Profile = () => {
  // TODO: implement queries
  const user = useQuery({ ...userQuery('1') });
  return <>Profile Page of User {user.data?.id}</>;
};

export { Profile };
