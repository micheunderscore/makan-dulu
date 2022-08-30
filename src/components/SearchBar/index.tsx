import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Linking, TextInput, TouchableOpacity, View } from "react-native";
import { SearchBarProps } from "./props";
import { styles } from "./styles";

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [query, setQuery] = useState("");

  const searchQuery = () => Linking.openURL(`/search/${query}`);

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        onChangeText={(x) => setQuery(x.toLowerCase())}
        onSubmitEditing={searchQuery}
        placeholder="Search..."
        style={[styles.searchBar.container, props.style]}
      />
      <TouchableOpacity
        onPress={searchQuery}
        style={[{ position: "absolute", right: 24, top: 4 }, props.iconStyle]}
      >
        <MdSearch size={24} />
      </TouchableOpacity>
    </View>
  );
};
