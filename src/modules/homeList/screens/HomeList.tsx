import React from "react";
import { FlatList, SafeAreaView, StatusBar, TouchableHighlight, View } from "react-native";
import Text from "../../../shared/components/text/Text";
import styles from "../styles/homeList.styles";
import axios from "axios";
import Input from "../../../shared/components/input/Input";
import { theme } from "../../../themes/theme";
import { ScrollView } from "react-native-gesture-handler";

const HomeList = () => {

    const data = [
        {
            id: 1,
            name: "Promoção",
        },

        {
            id: 2,
            name: "Lançamento",
        },

        {
            id: 3,
            name: "Mais vendidos",
        },

        {
            id: 4,
            name: "Ofertas do dia",
        },

    ]

    const categories = [
        {
            id: 1,
            name: "Livros",
        },

        {
            id: 2,
            name: "Moda",
        },

        {
            id: 3,
            name: "Casa",
        }, 

        {
            id: 4,
            name: "Escolar",
        },

        {
            id: 5,
            name: "Games",
        },

        {
            id: 6,
            name: "Beleza",
        },          
    ]

    const products = [
        {
            id: 1
        },

        {
            id: 2
        },

        {
            id: 3
        },

        {
            id: 4
        },

        {
            id: 5
        },

        {
            id: 6
        },

        {
            id: 7
        },

        {
            id: 8
        }
    ]

    const handleGetProducts = async () => {
        await axios
            .get("https://localhost:8080/product")
            .then((response) => {
                console.log(response.data)
            })
    }

    const onPress = () => {
        return
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
            backgroundColor={theme.colors.neutralTheme.primary}
            />
            <ScrollView>

            <View style={styles.navInput}>
                <View style={styles.viewInput}>
                    <Input 
                    // style={styles.input}
                    placeholder="Buscar produtos"
                    />
                </View>
            </View>

            <View>
                <FlatList
                horizontal
                    data={data}
                    // keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.viewItemFlatList}>
                            <Text>{item.name}</Text>
                        </View>
                    )}
                />
            </View>

            <View style={styles.viewFlatListCategory}>
                <FlatList
                    data={categories}
                    renderItem={({ item }) => (
                        <View style={styles.viewCategories}>
                            <TouchableHighlight
                                underlayColor={'#E8E5FE'} 
                                onPress={onPress}>
                                <View style={styles.button}>
                                    <Text style={styles.textButton}>{item.name}</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    )}
                    numColumns={3}
                />
            </View>

            <View style={styles.viewTextProduct}>
                <Text style={styles.textProduct}>Produtos</Text>
            </View>

            <View style={styles.viewFlatListProducts}>
                <FlatList
                    data={products}
                    renderItem={({ item }) => (
                        <View style={styles.viewProducts}>
                            <Text>{item.id}</Text>
                        </View>
                    )}

                    numColumns={2}
                />
            </View>

            </ScrollView>


            {/* <Text>HomeList</Text> */}
        </SafeAreaView>
    )
}


export default HomeList;