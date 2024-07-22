import React from "react";
import { View, Text, Button } from "react-native";
import Layout from "../../component/layout/Layout";
import MainText from "../../component/text/MainText";
const HomeScreen = ({ navigation }) => {
    return (
        <Layout>
            <MainText title="HomeScreen"/>
        </Layout>
    );
}
export default HomeScreen;