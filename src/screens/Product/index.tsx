import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import products from "root/public/products.json";
import { styles } from "./styles";

export const ProductScreen: React.FC<PropsWithChildren> = () => {
  const router = useRouter();
  const { pid } = router.query;
  const sProduct = products[parseInt([pid].join()) || 0];

  const product = {
    title: sProduct["Title"],
    tags: sProduct["Tags"],
    imgsrc: sProduct["Image Src"],
    handle: sProduct["Handle"],
    type: sProduct["Custom Product Type"],
    price: sProduct["Variant Price"],
  };

  console.log(product.imgsrc);

  return (
    <ImageBackground source={{ uri: "/bg-pattern.jpg" }} resizeMode={"repeat"}>
      <View style={styles.container.root}>
        <Image source={{ uri: product.imgsrc }} style={styles.image.product} />
        <Text style={styles.text.title}>
          {`${[product.title]} `}
          <Text style={styles.text.subtitle}>
            MYR {product.price.toFixed(2)}
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};
