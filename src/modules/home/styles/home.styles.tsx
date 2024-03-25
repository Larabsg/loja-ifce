import { StyleSheet } from "react-native";
import { theme } from "../../../themes/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },

    flatList: {
        // backgroundColor: '#d3465e',
        // margin: 10,
        // height: 50,
        // padding: 10,
        // flex: 2,
        width: '75%',
        // alignSelf: 'center',
        // justifyContent: 'center',
    },

    viewFlatList: {
        flex: 1,
        backgroundColor: theme.colors.neutralTheme.secondary,
        height: 100,
        margin: 10,
        marginTop: 30,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        // borderWidth: 1,
        // borderColor: '#d3465e',
    },

    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },

    viewFlatListText: {
        color: theme.colors.neutralTheme.background,
        fontWeight: 'bold',
    }
})

export default styles;