import React from "react";
import Text from "../../../shared/components/text/Text";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import styles from "../styles/home.styles";
import { theme } from "../../../themes/theme";
import { Icon } from "@rneui/themed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const data = [
    {
        id: 1,
        text: 'Relatórios',
        icon: ''
    },

    {
        id: 2,
        text: 'Estoque',
        icon: ''
    },

    {
        id: 3,
        text: 'Clientes',
        icon: ''
    },

    {
        id: 4,
        text: 'Produtos',
        icon: ''
    },

    {
        id: 5,
        text: 'Vendas',
        icon: ''
    },

    {
        id: 6,
        text: 'Financeiro',
        icon: ''
    },

    {
        id: 7,
        text: 'Configurações',
        icon: 'faGear'
    }
]

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor= {theme.colors.neutralTheme.primary}
            />

            <View style={[styles.flatList, styles.shadowProp]}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View style={styles.viewFlatList}>
                            
                            {item.icon === '' ? 
                            <Text style={styles.viewFlatListText}>{item.text}</Text> :

                            <FontAwesomeIcon 
                                color={theme.colors.neutralTheme.background} 
                                size={30} 
                                icon={faGear}/> }
                        </View>
                    )}

                    numColumns={2}
                />
            </View>

        </SafeAreaView>
    )
}

export default Home;