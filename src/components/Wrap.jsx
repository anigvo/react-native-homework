import { View, StyleSheet } from "react-native";
export const Wrap = ({ margin, padding, children }) => {
  const styles = StyleSheet.create({
    wrap: {
      backgroundColor: "#fff",
      width: "100%",
      marginTop: margin,
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      paddingTop: padding,
      paddingBottom: 32,
      paddingLeft: 16,
      paddingRight: 16,
    },
  });
  return <View style={styles.wrap}>{children}</View>;
};
