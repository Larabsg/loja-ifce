import { StyleSheet } from "react-native";
import { theme } from "../../../themes/theme";

export const styles = StyleSheet.create({
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
    },
})