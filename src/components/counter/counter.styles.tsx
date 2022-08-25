import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 250, 0, 0.25)",
  },
  textbox: {
    fontSize: 32,
    padding: "2px",
    width: "64px",
    textAlign: "center",
    marginRight: "4px",
  },
  button: {
    appearance: "none",
    background: "none",
    fontSize: 32,
    paddingLeft: "12px",
    paddingRight: "12px",
    outline: "none",
    border: "2px solid transparent",
    color: "rgb(112, 76, 182)",
    paddingBottom: "4px",
    marginHorizontal: "4px",
    cursor: "pointer",
    backgroundColor: "rgba(112, 76, 182, 0.1)",
    borderRadius: 2,
    transition: "all 0.15s",
  },
  value: {
    fontSize: 78,
    paddingLeft: "16px",
    paddingRight: "16px",
    marginTop: "2px",
    fontFamily: "'Courier New', Courier, monospace",
  },
});
