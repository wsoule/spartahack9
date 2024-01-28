import { View } from "react-native";
import WelcomePage from "./welcome";
import HomePage from "./loggedInPages/home";
import { AuthContext } from "@/app/authContext";
import { useContext } from "react";

export default function Page() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
  <View>
    {(true) ? <HomePage /> : <WelcomePage />}
  </View>
  );
}
