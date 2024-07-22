import React from "react";
import { View, SafeAreaView } from "react-native";
import Styles from "./Styles";
import Loading from "../loading/Loading";
function Layout({
    children,
    loading = false
}){
    return(
        <SafeAreaView style={{height: '100%', width: '100%', flex: 1}}>
            <Loading loading={loading}/>
            <View style={Styles.container}>
                {children}
            </View>
        </SafeAreaView>
    );
}
export default Layout;