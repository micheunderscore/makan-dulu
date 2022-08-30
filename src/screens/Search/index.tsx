import { ProductCard, SearchBar } from "components";
import { useRouter } from "next/router";
import { FlatList, ImageBackground, Text, View } from "react-native";
import products from "root/public/products.json";
import { SearchProps } from "./props";
import { styles } from "./styles";

export const SearchScreen: React.FC<SearchProps> = () => {
  const router = useRouter();
  const { query } = router.query;
  const usedQuery = [query].join() !== "" ? [query].join() : "empty-query";

  const formattedProducts = products
    .map((product) => ({
      title: product["Title"],
      tags: product["Tags"],
      imgsrc: product["Image Src"],
      handle: product["Handle"],
      type: product["Custom Product Type"],
      price: product["Variant Price"],
    }))
    .filter(({ title, tags, handle, type }) =>
      [title, tags, handle, type].join().toLowerCase().includes(usedQuery)
    );

  const ListEmptyComponent: React.FC = () => (
    // TODO: This is disguting. Ship it off into it's own component
    <View style={styles.container.listEmpty}>
      {query === undefined ? (
        <>
          <Text
            style={styles.text.listEmpty}
          >{`Looking for your favourite food?`}</Text>
          <Text
            style={styles.text.subtitle}
          >{`Prepare to be amazed by our menu.`}</Text>
        </>
      ) : (
        <>
          <Text
            style={styles.text.listEmpty}
          >{`Can't find your favourite food?`}</Text>
          <Text
            style={styles.text.subtitle}
          >{`Don't worry, we're working on expanding our menu.`}</Text>
        </>
      )}
    </View>
  );

  return (
    <ImageBackground
      source={{ uri: "/bg-pattern.jpg" }}
      resizeMode={"repeat"}
      style={styles.container.root}
    >
      <SearchBar
        defaultValue={[query].join()}
        iconStyle={styles.search.icon}
        style={styles.search.component}
      />
      <FlatList
        style={styles.flatlist.root}
        contentContainerStyle={styles.flatlist.container}
        keyExtractor={({ handle }, index) => `${index}-${handle}`}
        data={formattedProducts}
        numColumns={7}
        renderItem={({ item, index }) => (
          <ProductCard {...item} index={index} />
        )}
        ListEmptyComponent={ListEmptyComponent}
      />
    </ImageBackground>
  );
};
