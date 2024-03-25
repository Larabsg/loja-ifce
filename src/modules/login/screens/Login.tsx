import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Image, StatusBar } from 'react-native';
import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import Text from '../../../shared/components/text/Text';
import styles from '../../login/styles/login.styles';
import { theme } from '../../../themes/theme';
import axios from 'axios';

const Login = ({navigation} : {navigation: any}) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const onPress = () => {
        navigation.navigate('HomeStack')
        console.log('Email: ' + email)
        console.log('Senha: ' + senha)
    }

    // const handleOnPress = async () => {
    //     const result = await axios.get("http://localhost")
    // }

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar
                backgroundColor={theme.colors.neutralTheme.accent}
            />
            <View style={styles.containerImage}>
                <Image
                    style={styles.logo}
                    source={require('../../../../assets/apps.png')}
                />
            </View>

            {/* <Text style={styles.title} type='TITLE'>Bem vindo</Text> */}

            <Input style={styles.input} placeholder="Email" onChangeText={setEmail} />
            <Input style={styles.input} secureTextEntry={true} placeholder="Senha" onChangeText={setSenha}/>
            <Button style={styles.button} title="Entrar" backColor={theme.colors.neutralTheme.primary} onPress={onPress}/>

            <Text style={styles.text} type='NORMAL'>Cadastre-se</Text>

        </SafeAreaView>
    );
};


export default Login;