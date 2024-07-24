import React from "react";
import { StyleSheet, View } from "react-native";
import Layout from "../component/layout/Layout";
import MainText from "../component/text/MainText";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ScreensArray, constant,drawerMenu } from "../constants/constants";
import Colors from "../constants/Colors";
import CustomDrawer from "./CustomDrawer";
import Icon from "../component/icons/Icons";
const Drawer = createDrawerNavigator();
const DrawerNav = () => {
    return (
        <Drawer.Navigator
            screenOptions={({ route }) => ({
                title: "Khas-Group",
                drawerType: 'slide',
                overlayColor: 'trasparent',
                drawerStyle: Styles.drawerStyle,
                drawerActiveBackgroundColor: Colors.primary,
                drawerItemStyle: Styles.drawerItemStyle,
                drawerActiveTintColor: Colors.black,
                drawerLabelStyle: Styles.drawerLabelStyle,
            })}
            drawerContent={(props)=> <CustomDrawer {...props}/>}
        >
            {ScreensArray.map((item, index) => {
                return (
                    <Drawer.Screen 
                    key={index} name={item.route} component={item.component} 
                    
                    options={{
                        item,
                        drawerIcon: ({color, size, focused})=>(
                            <Icon type={item.type} name={item.icon} size={size} color={color}/>
                        )
                    }}
                    />
                );
            })}
        </Drawer.Navigator>
    )
}
export default DrawerNav;
const Styles = StyleSheet.create({
    drawerStyle: {
        width: '70%'
    },
    drawerItemStyle: { 
        borderRadius: constant.borderRadius
     },
     drawerLabelStyle:{
        fontSize: constant.textFontSize,
        marginHorizontal: - constant.SPACING
     },
});