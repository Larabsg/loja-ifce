import { TouchableOpacityProps } from "react-native";
import { ButtonContainer } from "./button.style";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
    backColor?: string;
}

const Button = ({title, margin, backColor, ...props}: ButtonProps) => {
    return (
    <ButtonContainer margin={margin} backColor={backColor} {...props}>
            <Text color={'#fff'}>{title}</Text>
            
    </ButtonContainer>
    )
}

export default Button;