import { View } from "react-native"
import Input from "../input/Input"
import { styles } from "./input.style"

export const InputSearch = () => {
   return (
    <View style={styles.navInput}>
        <View style={styles.viewInput}>
            <Input 
            placeholder="Buscar produtos"
            />
        </View>
    </View>
   )
}