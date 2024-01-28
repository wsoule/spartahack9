import { View } from 'react-native';
import WelcomePage from './welcome';
import HomePage from './loggedInPages/home';

export default function Page() {
  const loggedIn = true;
  return (
  <View>
    {loggedIn ? <HomePage /> : <WelcomePage />}
  </View>
  );
}
