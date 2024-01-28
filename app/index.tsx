import { View } from 'react-native';
import WelcomePage from './welcome';
import HomePage from './loggedInPages/home';
import { auth } from '../firebaseConfig';
import { AuthContext } from '@/auth/authContext';
import { useContext } from 'react';
export default function Page() {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  return (
  <View>
    {(true) ? <HomePage /> : <WelcomePage />}
  </View>
  );
}
