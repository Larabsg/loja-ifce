import { TextProps as TextPropsNative } from "react-native";
import { textTypes } from "./textTypes";
import { useMemo } from "react";
import { ContainerText } from "./text.style";

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
}

const Text = ({ color, type, ...props }: TextProps) => {
  const handleFontSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE:
        return "24px";
      case textTypes.NORMAL:
        return "16px";
      case textTypes.SMALL:
        return "10px";
      default:
        return "16px";
    }
  }, [type]);

  return <ContainerText fontSize={handleFontSize} color={color} {...props} />;
};

export default Text;
