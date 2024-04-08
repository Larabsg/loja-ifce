import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StatusBar, TouchableHighlight, View, VirtualizedList } from "react-native";
import Text from "../../../shared/components/text/Text";
import styles from "../styles/homeList.styles";
import axios from "axios";
import Input from "../../../shared/components/input/Input";
import { theme } from "../../../themes/theme";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "@rneui/themed";
import { ProductType } from "../../../types/ProductType/productType";
import { getItemStorage } from "../../../shared/function/storageProxy";
import { AUTHORIZATION_KEY } from "../../../shared/constants/authorization";
import Card from "../../../shared/components/card/CardProduct";

const HomeList = ({navigation} : {navigation: any}) => {

    const data = [
        {
            id: 1,
            name: "Promoção",
            image: require("../../../../assets/promocao-1.png")
        },

        {
            id: 2,
            name: "Lançamento",
            image: require("../../../../assets/promocao-2.png")
        },

        {
            id: 3,
            name: "Mais vendidos",
            image: require("../../../../assets/promocao-3.png")
        }

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

    const [products, setProducts] = useState([])

    useEffect(() => {
        handleGetProducts()
    }, [])


    const handleGetProducts = async () => {
        const token = await getItemStorage(AUTHORIZATION_KEY)
        console.log(token)
        try {
            const response = await axios.get("http://192.168.18.109:8080/product/page",
                                                {
                                                    headers: {
                                                        'Authorization': `${token}`
                                                    }
                                                })
            setProducts(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleGoToProductDetail = (product: ProductType) => {
        navigation.navigate("ProductDetail", { product })
    }

    const handleGetProductsByCategory = (category: string) => {
        console.log(category)
    }

    return (
        <SafeAreaView>
            <StatusBar
            backgroundColor={theme.colors.neutralTheme.primary}
            />
            <ScrollView>

            <View style={styles.navInput}>
                <View style={styles.viewInput}>
                    {/* <Icon name="search" /> */}
                    <Input 
                    placeholder="Buscar produtos"
                    />
                </View>
            </View>

            <View style={styles.promotions}>
                <FlatList
                horizontal
                    data={data}
                    // keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.viewItemFlatList}>
                            <Image
                                style={styles.imagePromotion}
                                source={item.image}/>
                            {/* <Text>{item.name}</Text> */}
                        </View>
                    )}
                />
            </View>

            <View style={styles.viewText}>
                <Text style={styles.text}>Categorias</Text>
            </View>

            <View style={styles.containerCategories}>
                {/* <View style={styles.viewFlatListCategory}> */}
                    <FlatList
                        // style={styles.flatListCategories}
                        data={categories}
                        renderItem={({ item }) => (
                            <View style={styles.viewCategories}>
                                <TouchableHighlight
                                    style={styles.button}
                                    underlayColor={'#E8E5FE'}
                                    onPress={() => {}}>
                                        <Text style={styles.textButton}>{item.name}</Text>
                                </TouchableHighlight>
                            </View>
                        )}
                        numColumns={3}
                    />
                {/* </View> */}
            </View>

            <View style={styles.viewText}>
                <Text style={styles.text}>Produtos</Text>
            </View>

            <View style={styles.viewFlatListProducts}>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        // <View style={styles.viewProducts}>
                        //     <Image
                        //         style={styles.imageProduct}
                        //         source={{uri: item.image}}
                        //     />
                        //     <Text style={styles.textName}>{item.name}</Text>
                        //     <Text style={styles.textPrice}>R$ {item.price},00</Text>
                        // </View>
                        <Card
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            // onPress={() => handleGoToProductDetail(item)}
                        />
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