import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { ProductCardProps } from "./props";
import { styles } from "./styles";

export const ProductCard: React.FC<ProductCardProps> = ({
  index,
  title,
  tags,
  imgsrc,
  handle,
  type,
  price,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Linking.openURL(`/product/${index}`)}
    >
      <Image source={{ uri: imgsrc }} style={styles.image} />
      <View style={styles.text.container}>
        <Text style={styles.text.title}>{title}</Text>
        <Text style={styles.text.price}>MYR {price?.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};
