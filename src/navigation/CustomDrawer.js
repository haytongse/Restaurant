import React, { useState } from "react";
import { LayoutAnimation, Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, UIManager, View } from "react-native";
import Layout from "../component/layout/Layout";
import MainText from "../component/text/MainText";
import { Container } from "../component/container/Container";
import { Row } from "../component/container/Row";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from "../component/icons/Icons";
import { constant, drawerMenu } from "../constants/constants";
import Colors from "../constants/Colors";
import { useNavigation, ParamListBase, DrawerNavigationState } from "@react-navigation/native";
import Styles from "../common/Styles";
import { DrawerItemList } from "@react-navigation/drawer";
import { DrawerDesciptorMap, DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
type Props = {
    state: DrawerNavigationState<ParamListBase>;
    navigation: DrawerNavigationHelpers;
    descriptor: DrawerDesciptorMap;
};
const CustomDrawer = (props: Props) => {
    const navigation = useNavigation();
    const [menuIndex, setMenuIndex] = useState(-1);
    return (
        <Layout>
            <TouchableNativeFeedback
                onPress={() => navigation.navigate('Profile')}
            >
                <View style={styles.header}>
                    <Ionicons name={"person-circle-outline"} style={styles.avatar} size={60} />
                    <View style={styles.textContainer}>
                        <MainText title="Hay Ser" style={styles.name} />
                        <MainText title="Software Engineer" />
                    </View>
                </View>
            </TouchableNativeFeedback>
            {/* DrawerList */}
            {/* <DrawerItemList {...props} />
            <View style={styles.spacer} /> */}
            {drawerMenu.map((item, index) => {
                return (
                    <TouchableOpacity activeOpacity={0.8} key={index}
                        style={[styles.menu, { backgroundColor: item.bg + '99' }]}
                        onPress={() => {

                            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
                            // LayoutAnimation.configureNext(LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'))
                            setMenuIndex(menuIndex === index ? -1 : index)
                        }}>
                        <Row style={styles.item}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon type={item.type} name={item.icon} size={22} />
                                <Text style={[styles.text, { color: menuIndex === index ? Colors.black : Colors.gray }]}>{item.title}</Text>
                            </View>
                            {menuIndex === index ?
                                <View >
                                    <SimpleLineIcons name={"arrow-down"} size={18} />
                                </View>
                                :
                                <View>
                                    <SimpleLineIcons name={"arrow-right"} size={18} />
                                </View>
                            }
                        </Row>
                        {menuIndex === index &&
                            <View style={{ backgroundColor: item.bg, borderRadius: constant.borderRadius }}>
                                {item.menuList.map((subMenu, index) => (
                                    <TouchableNativeFeedback key={index}>
                                        <View style={styles.subMenu}>
                                            <TouchableNativeFeedback onPress={() => { navigation.navigate(subMenu.route), console.log(subMenu.route) }}>
                                                <View style={{ flexDirection: "row", marginLeft: 5, padding: 3 }}>
                                                    <Icon type={subMenu.type} name={subMenu.icon} size={16} style={{ marginRight: 5 }} />
                                                    <Text>{subMenu.title}</Text>
                                                </View>
                                            </TouchableNativeFeedback>
                                        </View>
                                    </TouchableNativeFeedback>
                                ))}
                            </View>
                        }
                    </TouchableOpacity>
                );
            })}
        </Layout>
    );
}

export default CustomDrawer;
const styles = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60
    },
    textContainer: {
        paddingHorizontal: constant.SPACING
    },
    name: {
        fontSize: constant.titleFontSize,
    },
    header: {
        padding: constant.SPACING,
        borderBottomWidth: 1,
        borderBlockColor: Colors.light,
        ...Styles.rowView
    },
    menu: {
        backgroundColor: '#ccc',
        marginHorizontal: constant.SPACING / 1.7,
        marginVertical: constant.SPACING / 2.5,
        borderRadius: constant.borderRadius
    },
    item: {
        flexDirection: 'row',
        paddingHorizontal: constant.SPACING / 1.5,
        paddingVertical: constant.SPACING / 1.2,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: constant.textFontSize,
        paddingHorizontal: constant.SPACING,
    },
    type: {
        fontSize: constant.textFontSize,
        paddingHorizontal: constant.SPACING
    },
    subMenu: {
        paddingHorizontal: constant.SPACING,
        paddingVertical: constant.SPACING / 1.5
    },
    spacer: {
        marginVertical: constant.SPACING,
        width: '90%',
        height: 1,
        backgroundColor: Colors.light,
        alignSelf: 'center',
    },
})