import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import { MaterialIcons } from "@expo/vector-icons";
import ProductsScreen from "../../screens/ProductsScreen";
import NotificationScreen from "../../screens/NotificationScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import colors from "../../constants/colors";

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "home") {
            iconName = "home";
          } else if (route.name === "products") {
            iconName = "shopping-bag";
          } else if (route.name === "notification") {
            iconName = "notifications";
          } else if (route.name === "profile") {
            iconName = "person";
          }

          const iconSize = 36;
          return (
            <MaterialIcons name={iconName} size={iconSize} color={color} />
          );
        },
        tabBarStyle: {
          height: 65,
          borderRadius: 50,
          marginHorizontal: 10,
          marginBottom: 10,
          elevation: 5,
          backgroundColor: "black",
        },
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="products" component={ProductsScreen} />
      <Tab.Screen name="notification" component={NotificationScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
