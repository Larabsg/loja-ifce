import React from "react";
import { Card, Divider } from '@rneui/themed';
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import Text from "../../../shared/components/text/Text";
import Button from "../../../shared/components/button/Button";
import styles from "../styles/profile.styles";
import { theme } from "../../../themes/theme";
import { getItemStorage } from "../../../shared/function/storageProxy";
import { LOCAL_HOST } from "../../../shared/constants/localhost";
import axios from "axios";
import { AUTHORIZATION_KEY } from "../../../shared/constants/authorization";

const Profile = ({navigation}) => {
    const onPress = () => {
        navigation.navigate('Login')
    }

    // const handleGetUser = async () => {
    //     const token = await getItemStorage(AUTHORIZATION_KEY)
    //     const localhost = LOCAL_HOST
    //     try {
    //         const response = await axios.get(`http://${localhost}:8080/product/page`,
    //                                             {
    //                                                 headers: {
    //                                                     'Authorization': `${token}`
    //                                                 }
    //                                             })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <View>
                    <Image
                        style={styles.profileImage}
                        source={require('../../../../assets/woman.png')}
                    />
                </View>
                <Text style={styles.name} type="TITLE">Maria Silva</Text>
                <Card containerStyle={{ marginTop: 50 }}>
                    <Text>Email: maria_silva@gmail.com</Text>
                </Card>
            </View>

            <View style={styles.footer}>
                <Button style={styles.button} title="Sair" backColor={theme.colors.neutralTheme.accent} onPress={onPress}/>
            </View>

        </SafeAreaView>
    )
}

export default Profile;