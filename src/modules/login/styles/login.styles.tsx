import { StyleSheet } from "react-native";
import { theme } from "../../../themes/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.neutralTheme.background,
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 100,
    },

    logo: {
        width: 50,
        height: 50,
    },

    containerImage: {
        marginBottom: 30,
    },

    input: {
        borderWidth: 1,
        marginBottom: 10,
        color: theme.colors.neutralTheme.text,
        width: '75%',
    },

    button: {
        width:'75%'
    },

    title: {
        marginBottom: 20,
    },

    text: {
        marginTop: 10,
    }
})

export default styles;