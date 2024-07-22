import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/home/HomeScreen";
import ProfileScreen from "./src/screens/profile/ProfileScree";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Animated, { runOnUI } from 'react-native-reanimated';
import DrawerNav from "./src/navigation/DrawerNav";

const App = () => {
  // const Tab = createBottomTabNavigator();
  // const Stack = createStackNavigator();
  // const Drawer = createDrawerNavigator();
  // const MainDrawer = ()=>(
  //     <Drawer.Navigator>
  //       <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
  //       <Stack.Screen name="Profile" component={ProfileScreen}/>
  //     </Drawer.Navigator>
  //   );
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route})=>({
        headerShown: false
      })}
        screenOptions={({ route }) => ({
          headerShown: true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? 'home' : 'home-sharp'
            }else if (route.name === "Profile") {
              iconName = focused ? 'home' : 'home-sharp'
            }
            return <Ionicons name={iconName} size={30} color={color} />
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black'
        })}
      >
        <Stack.Screen name="Home" component={MainDrawer} 
        
        />
        <Stack.Screen name="Profile" component={ProfileScreen}/>
      </Stack.Navigator> */}
      <DrawerNav/>
    </NavigationContainer>
  
  );
}
export default App;