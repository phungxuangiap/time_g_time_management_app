import { StyleSheet } from "react-native";

export const RegisterScreenStyle = StyleSheet.create({
  bigTitleText: { ...componentStyles.titleText, marginBottom: 64 },
  buttonDistance: {
    ...componentStyles.commonButton,
    paddingLeft: 98,
    paddingRight: 98,
    marginTop: 24,
  },
  textConcat: { ...componentStyles.text18, alignSelf: "center", padding: 20 },
  container: { alignSelf: "center", flexDirection: "row" },
  greenText: {
    ...componentStyles.text18,
    color: "#6CDDAB",
    paddingLeft: 8,
  },
});