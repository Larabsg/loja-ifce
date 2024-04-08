import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StatusBar, TouchableHighlight, View, VirtualizedList } from "react-native";
import Text from "../../../shared/components/text/Text";
import styles from "../styles/homeList.styles";
import axios from "axios";
import Input from "../../../shared/components/input/Input";
import { theme } from "../../../themes/theme";
import { ScrollView } from "react-native-gesture-handler";
import { ProductType } from "../../../types/ProductType/productType";
import { getItemStorage } from "../../../shared/function/storageProxy";
import { AUTHORIZATION_KEY } from "../../../shared/constants/authorization";
import Card from "../../../shared/components/card/CardProduct";
import { LOCAL_HOST } from "../../../shared/constants/localhost";
import { categories } from "../../../shared/data/categories/categories";
import { banners } from "../../../shared/data/banners/banners";
import { InputSearch } from "../../../shared/components/inputSearch/InputSearch";

const HomeList = ({navigation} : {navigation: any}) => {
 
    const [products, setProducts] = useState([])

    useEffect(() => {
        handleGetProducts()
    }, [])


    const handleGetProducts = async () => {
        const token = await getItemStorage(AUTHORIZATION_KEY)
        const localhost = LOCAL_HOST
        try {
            const response = await axios.get(`http://${localhost}:8080/product/page`,
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

            <InputSearch/>

            <ScrollView>

            <View style={styles.promotions}>
                <FlatList
                horizontal={true}
                    data={banners}
                    renderItem={({ item }) => (
                        <View style={styles.viewItemFlatList}>
                            <Image
                                style={styles.imagePromotion}
                                source={item.image}/>
                        </View>
                    )}
                />
            </View>

            <View style={styles.viewText}>
                <Text style={styles.text}>Categorias</Text>
            </View>

            <View style={styles.containerCategories}>
                    <FlatList
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
            </View>

            <View style={styles.viewText}>
                <Text style={styles.text}>Produtos</Text>
            </View>

            <View style={styles.viewFlatListProducts}>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Card
                            name={item.name}
                            image={item.image}
                            price={item.price}
                        />
                    )}
                    numColumns={2}
                />
            </View>


            </ScrollView>

        </SafeAreaView>
    )
}


export default HomeList;