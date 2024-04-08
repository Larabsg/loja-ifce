import { Image, View } from "react-native"
import Text from "../text/Text"
import { styles } from "./card.style";
import { ProductType } from "../../../types/ProductType/productType";

const Card = (props: ProductType) => {
    return (
        <View style={styles.viewProducts}>
            <Image
                style={styles.imageProduct}
                source={{uri: props.image}}
            />
            <Text style={styles.textName}>{props.name}</Text>
            <Text style={styles.textPrice}>R$ {props.price},00</Text>
        </View>
    )
}

export default Card;