import { Icons } from "../component/icons/Icons";
import Colors from "./Colors";
import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScree";
export const constant = {
    SPACING: 16,
    borderRadius: 10,
    titleFontSize: 24,
    textFontSize: 16,
    subTextFontSize: 14,
}
export const ScreensArray = [
    { route: 'Home', label: 'HomeScreen', type: Icons.Feather, icon: 'home', component: HomeScreen, },
    { route: 'Profile', label: 'ProfileScreen', type: Icons.AntDesign, icon: "user", component: ProfileScreen, },
];
export const drawerMenu = [
    {
        title: "Settings",
        bg: Colors.menu1,
        type: Icons.Feather, icon: 'settings',
        route: 'Settings',
        menuList: [
            {
                route: 'Users',
                title: 'Create User'
            },
            { 
                title: 'Notify Me'
             },
        ]
    },
    {
        title: "Profile",
        bg: Colors.menu2,
        type: Icons.Feather, icon: 'user',
        route: 'Todo',
        menuList: [
            { 
                route: "Profile",
                title: 'Profile',
                type: Icons.AntDesign, 
                icon: "user",
                component: ProfileScreen
             },
        ]
    },
    // {
    //     title: "Projects",
    //     bg: Colors.menu3,
    //     type: Icons.Octicons, icon: 'project',
    //     route: 'Project',
    //     menuList: [
    //         { title: 'Portfolio' },
    //         { title: 'Note-APP' },
    //         { title: 'RN-Ui' },
    //     ]
    // },
]