import { Icons } from "../component/icons/Icons";
import Colors from "./Colors";
import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScree";
import CategoryScreen from "../screens/category/CategoryScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
export const constant = {
    SPACING: 16,
    borderRadius: 10,
    titleFontSize: 24,
    textFontSize: 16,
    subTextFontSize: 14,
}
const Stack = createStackNavigator();
export const ScreensArray = [
    
    { route: 'CategoryScreen', label: 'CategoryScreen', type: Icons.AntDesign, icon: "user", component: CategoryScreen, },
    { route: 'ProfileScreen', label: 'ProfileScreen', type: Icons.AntDesign, icon: "user", component: ProfileScreen, },
];
export const drawerMenu = [
    // {
    //     title: "Settings",
    //     bg: Colors.menu1,
    //     type: Icons.Feather, icon: 'settings',
    //     route: 'Settings',
    //     menuList: [
    //         {
    //             route: 'Users',
    //             title: 'Create User'
    //         },
    //         { 
    //             title: 'Notify Me'
    //          },
    //     ]
    // },
    
    {
        title: "Maintainance",
        bg: Colors.menu3,
        type: Icons.Octicons, icon: 'list-unordered',
        route: 'Maintainance',
        menuList: [
            { 
                route: "CategoryScreen",
                title: 'Categories',
                type: Icons.AntDesign, 
                icon: "home",
                component: CategoryScreen
             },
            // { title: 'Grades' },
            // { title: 'Products' },
        ]
    },
    {
        title: "Profile",
        bg: Colors.menu2,
        type: Icons.Feather, icon: 'user',
        route: 'Todo',
        menuList: [
            { 
                route: "ProfileScreen",
                title: 'Profile',
                type: Icons.AntDesign, 
                icon: "user",
                component: ProfileScreen
             },
             
        ]
    },
]