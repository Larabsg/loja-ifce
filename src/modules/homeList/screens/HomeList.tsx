import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, TouchableHighlight, View, VirtualizedList } from "react-native";
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

    // axios({
    //     method: 'get',
    //     url: 'https://localhost:8080/user/all',
    // }).then((response) => {
    //     console.log(response.data)
    // })

    // useEffect(() => {
    //     handleGetProducts()
    // }, [])

    const [products, setProducts] = useState([])

    useEffect(() => {
        handleGetProducts()
    }, [])


    const handleGetProducts = async () => {
        try {
            const response = await axios.get("http://192.168.18.109:8080/product/page")
            // setProducts(response.data)
            setProducts(response.data.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
        // await axios
        //     .get("https://localhost:8080/user/all")
        //     .then((response) => {
        //         console.log(response.data)
        //     })
    }



    const onPress = () => {
        return
    }

    

    const getItemCount = (_data: unknown) => 8;

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
                                onPress={handleGetProducts}>
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
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.viewProducts}>
                            <Text style={styles.textName}>{item.name}</Text>
                            <Text style={styles.textPrice}>R$ {item.price},00</Text>
                        </View>
                    )}
                    numColumns={2}
                />
            </View>

            {/* <View>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <View style={styles.viewProducts}>
                            <Text>{item.name}</Text>
                        </View>
                    
                    )}
                />
            </View> */}

            {/* <View style={styles.viewFlatListProducts}>
                <FlatList
                    data={products}
                    renderItem={({ item }) => (
                        <View style={styles.viewProducts}>
                            <Text>{item.id}</Text>
                        </View>
                    )}

                    numColumns={2}
                />
            </View> */}

            </ScrollView>


            {/* <Text>HomeList</Text> */}
        </SafeAreaView>
    )
}


export default HomeList;