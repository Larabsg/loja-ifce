import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Image, StatusBar } from 'react-native';
import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import Text from '../../../shared/components/text/Text';
import styles from '../../login/styles/login.styles';
import { theme } from '../../../themes/theme';
import axios from 'axios';
import { AUTHORIZATION_KEY } from '../../../shared/constants/authorization';
import { getItemStorage, setItemStorage } from '../../../shared/function/storageProxy';
import { useNavigation } from '@react-navigation/native';
import { LOCAL_HOST } from '../../../shared/constants/localhost';

const Login = () => {

    const navigation = useNavigation()
    // const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleOnPress = async () => {

        const localhost = LOCAL_HOST
        await axios.post(`http://${localhost}:8080/auth`, {
            email: email,
            password: senha
    })
    .then((res) =>{
        setItemStorage(AUTHORIZATION_KEY, res.data.accessToken);
        // console.log("teste", res.data)
        // dispatch(setUserAction(res.data))
        // navigation.reset(
        //     {
        //         index: 0,
        //         routes: {name: "HomeStack"}
        //     }
        // )

        // const teste = await getItemStorage(AUTHORIZATION_KEY)

        // console.log("TESTE TOKEN", teste)

        navigation.navigate('HomeStack')

    }).catch((error) => {
        console.log("nao passou", error.response.data)
    })
    }

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

            <Input style={styles.input} placeholder="Email" onChangeText={setEmail} />
            <Input style={styles.input} secureTextEntry={true} placeholder="Senha" onChangeText={setSenha}/>
            <Button style={styles.button} title="Entrar" backColor={theme.colors.neutralTheme.primary} onPress={handleOnPress}/>

            <Text style={styles.text} type='NORMAL'>Cadastre-se</Text>

        </SafeAreaView>
    );
};


export default Login;