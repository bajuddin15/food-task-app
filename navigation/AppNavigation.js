import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import Tabs from "./tabs/Tabs";
import DefaultScreen from "../screens/DefaultScreen";
import CategoryScreen from "../screens/CategoryScreen";
import SplashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="tab" component={Tabs} />
        <Stack.Screen name="default" component={DefaultScreen} />
        <Stack.Screen name="categories" component={CategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
