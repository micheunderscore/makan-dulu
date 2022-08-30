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
    vendor: sProduct["Vendor"],
    tags: sProduct["Tags"],
    imgsrc: sProduct["Image Src"],
    handle: sProduct["Handle"],
    type: sProduct["Custom Product Type"],
    price: sProduct["Variant Price"],
    description: sProduct["Body (HTML)"],
  };

  console.log(product.imgsrc);

  return (
    <ImageBackground source={{ uri: "/bg-pattern.jpg" }} resizeMode={"repeat"}>
      <View style={styles.container.root}>
        <Image source={{ uri: product.imgsrc }} style={styles.image.product} />
        <View style={styles.container.dBox}>
          <Text style={styles.text.title}>
            {`${[product.title]} `}
            <Text style={styles.text.subtitle}>
              MYR {product.price.toFixed(2)}
            </Text>
          </Text>
          <Text style={styles.text.description}>{product.description}</Text>
          <Text style={styles.text.tag.head}>
            Tags:{` `}
            <Text style={styles.text.tag.tail}>{product.tags}</Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
