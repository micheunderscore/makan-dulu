import { Layout, SearchBar } from "components";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { Pressable } from "react-native-web-hover";
import { HeaderOption, HeaderProps } from "./props";
import { styles } from "./styles";

const HeaderButton: React.FC<HeaderOption> = ({ title, link }) => {
  const onPress = () => Linking.openURL(link || "/");
  const hoveredStyle = [styles.header.btn.root, styles.header.btn.hovered];
  return (
    <View key={title} style={styles.header.btn.wrapper}>
      <Pressable style={styles.header.btn.pressable}>
        {({ hovered }) => (
          <TouchableOpacity
            style={hovered ? hoveredStyle : styles.header.btn.root}
            onPress={onPress}
          >
            <Text style={styles.header.text}>{title}</Text>
          </TouchableOpacity>
        )}
      </Pressable>
    </View>
  );
};

if (typeof window !== "undefined") {
  var style = document.createElement("style");
  style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
  document.head.appendChild(style);
}

export const Header: React.FC<HeaderProps> = ({ children, headerOptions }) => {
  return (
    // Wrapper Container
    <View style={styles.container}>
      <View style={styles.header.root}>
        {/* Logo */}
        <TouchableOpacity
          onPress={() => Linking.openURL(headerOptions[0].link || "/")}
          style={styles.logo.container}
        >
          <Image
            source={{ uri: "/MakanDuluLogo.png" }}
            style={styles.logo.image}
          />
          <Image
            source={{ uri: "/MakanDuluText.png" }}
            style={styles.logo.text}
          />
        </TouchableOpacity>
        {/* Button Bar */}
        <View style={styles.buttonBar}>
          {headerOptions !== undefined && headerOptions.map(HeaderButton)}
        </View>
        <View style={styles.spacer} />
        {/* Search & Cart */}
        <View style={styles.sbCart.container}>
          <SearchBar />
          <TouchableOpacity onPress={() => Linking.openURL("/cart")}>
            <MdOutlineShoppingCart size={28} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Children */}
      <Layout>
        {/* <View style={styles.header.spacer} /> */}
        {children}
      </Layout>
    </View>
  );
};
