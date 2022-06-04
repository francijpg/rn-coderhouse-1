import { StyleSheet, StatusBar } from "react-native";
import { COLORS, SIZES, FONTS, SHADOW } from "../../constants/style";

export const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 60 : StatusBar.currentHeight + 10,
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
  },
  textBoxWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SIZES.padding,
  },
  textInput: {
    ...SHADOW,
    borderRadius: SIZES.textBoxRadius,
    backgroundColor: COLORS.secondary,
    height: 42,
    paddingLeft: 15,
    width: "90%",
    color: COLORS.primary,
    marginRight: 15,
    ...FONTS.h2_semiBold,
  },
  btn: {
    ...SHADOW,
    backgroundColor: COLORS.accent,
    height: 55,
    width: 55,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    ...FONTS.h1_semiBold,
    color: COLORS.secondary,
    marginBottom: 15,
    marginTop: 10,
    textTransform: "capitalize",
    fontSize: 22,
  },
  containerList: {
    flex: 1,
  },
  btnAddItem: {
    fontSize: 34,
    color: COLORS.secondary,
  },
});
