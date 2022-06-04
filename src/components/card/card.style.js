import { StyleSheet } from "react-native";
import { SIZES, FONTS, COLORS, SHADOW } from "../../constants/style";

export const styles = StyleSheet.create({
  view: {
    ...SHADOW,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: SIZES.padding,
    borderRadius: SIZES.borderRadius,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    marginBottom: 15,
  },
  text: {
    ...FONTS.h2_semiBold,
    color: COLORS.primary,
  },
  checkbox: {
    marginRight: 15,
  },
});
