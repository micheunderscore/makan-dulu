import { ProductCard } from "components";
import { FlatList, Image, ImageBackground, Text, View } from "react-native";
import products from "root/public/products.json";
import { styles } from "./styles";

export const HomeScreen: React.FC = (props) => {
  const formattedProducts = products.map((product) => ({
    title: product["Title"],
    tags: product["Tags"],
    imgsrc: product["Image Src"],
    handle: product["Handle"],
    type: product["Custom Product Type"],
    price: product["Variant Price"],
  }));

  return (
    <ImageBackground
      source={{ uri: "/bg-pattern.jpg" }}
      resizeMode={"repeat"}
      style={styles.container.root}
    >
      <View style={styles.container.text}>
        <Text style={styles.text.title}>
          Order your next favourite meal and{" "}
          <Image
            source={{ uri: "/MakanDuluText.png" }}
            style={styles.logo.text}
          />
        </Text>
        <Text style={styles.text.subtitle}>
          Or maybe even try something new?
        </Text>
      </View>
      <FlatList
        style={styles.flatlist.root}
        contentContainerStyle={styles.flatlist.container}
        data={formattedProducts}
        numColumns={6}
        renderItem={({ item, index }) => (
          <ProductCard {...item} index={index} />
        )}
      />
      <View style={styles.container.footer}>
        <Text style={styles.text.copyright}>
          Ⓜ️​ Makanrights of Makan Dulu Sdn. Bhd.
        </Text>
      </View>
    </ImageBackground>
  );
};
