import { StyleSheet } from "react-native";
import { theme } from "../../../themes/theme";

const styles = StyleSheet.create({

    imagePromotion: {
        resizeMode: 'cover',
        borderRadius: 15,
    },

    navInput: {
        backgroundColor: theme.colors.neutralTheme.primary,
        width: '100%',
        alignItems: 'center',
        position: 'relative',
        top: 0,
        marginBottom: 10,
    },

      imageProduct: {
        resizeMode: 'center',
        height: 150,
      },

    viewInput: {
        width: '95%',
        padding: 10,
    },

    promotions: {
        marginLeft: 10,
        marginTop: 10,
    },

    viewItemFlatList: {
        width: 300,
        height: 168,
        margin: 10,
        alignItems: 'center',
    },

    containerCategories: {
        marginHorizontal: 20,
        marginVertical: 5,
        flex: 1,
    },

    viewFlatListCategory: {
        backgroundColor: 'red',
        width: '100%',
    },
    
    viewCategories: {
        flex: 1,
        padding: 5,
    },

    flatListCategories: {
        backgroundColor: 'blue',
    },
    
    button: {
        alignItems: 'center',
        backgroundColor: theme.colors.neutralTheme.primary,
        padding: 10,
        width: '100%',
        borderRadius: 10,
    },

    textButton: {
        color: '#fff',
        fontWeight: 'bold',
    },

    viewFlatListProducts: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'space-around',
    },

    viewProducts: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        gap: 10,
        margin: 5
    },

    viewText: {
        marginLeft: 20,
        marginVertical: 10
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.neutralTheme.text
    },


    textName: {
        fontSize: 15,
        marginVertical: 5,
    },

    textPrice: {
        fontSize: 20,
        fontWeight: 'bold',
    }

})

export default styles;