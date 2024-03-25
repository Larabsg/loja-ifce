import { StyleSheet } from "react-native";
import { theme } from "../../../themes/theme";

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // marginTop: 100,
    },

    navInput: {
        backgroundColor: theme.colors.neutralTheme.primary,
        width: '100%',
        alignItems: 'center',
        position: 'relative',
        top: 0,
        marginBottom: 10,
    },

    viewInput: {
        width: '95%',
        padding: 10,
        // height: 10,
    },

    viewItemFlatList: {
        padding: 10,
        backgroundColor: '#E8E5FE',
        width: 200,
        height: 150,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        position: 'relative',
    },

    viewFlatListCategory: {
        // flex: 4,
        // backgroundColor: 'red',
        alignItems: 'center',
        
        // margin: 10
    },

    viewCategories: {
        // backgroundColor: 'red',
        // padding: 10,
        margin: 10,
        borderRadius: 15,
        // border: '1px solid #000',
        // borderWidth: 1,
        // width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewFlatListProducts: {
        // flex: 1,
        // backgroundColor: 'blue',
        alignItems: 'center',
        // margin: 10
    },

    viewProducts: {
        backgroundColor: '#E8E5FE',
        padding: 10,
        margin: 10,
        borderRadius: 15,
        // borderWidth: 1,
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewTextProduct: {
        marginLeft: 20,
        marginVertical: 10
    },

    textProduct: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    button: {
        alignItems: 'center',
        backgroundColor: theme.colors.neutralTheme.primary,
        padding: 10,
        width: 100,
        borderRadius: 15,
    },

    textButton: {
        color: '#fff',
        fontWeight: 'bold',
    }

})

export default styles;