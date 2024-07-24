import React, {useState} from "react";
import { View } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../component/layout/Layout";
import MainText from "../../component/text/MainText";
const CategoryScreen = ({navigation})=>{
    return(
        <Layout>
            <MainText title="Category Screen" type="default"/>
        </Layout>
    );
}
export default CategoryScreen;