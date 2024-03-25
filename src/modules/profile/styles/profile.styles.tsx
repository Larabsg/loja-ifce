import { StyleSheet } from "react-native";
import { theme } from "../../../themes/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.neutralTheme.background,
        alignItems: 'center',
    },

    body: {
        flex: .8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    footer: {
        flex: .2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    profileImage: {
        width: 100,
        height: 100,
    },

    button: {
        width: 200,
    },

    info: {
        marginTop: 50,
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 5,
        height: 200,
        width: 300,
    },

    name: {
        marginTop: 10,
    }
})

export default styles;