import { StyleSheet } from "react-native";
import {
  BlueGreenPrimaryColor,
  GreenPrimaryColor,
} from "../../assets/color/appColor";

export default componentStyles = StyleSheet.create({
  entireScreenPadding: {
    paddingTop: 46,
    paddingStart: 12,
    paddingBottom: 38,
    paddingEnd: 12,
  },
  logo: {
    flex: 1,
    width: 120,
    height: null,
    resizeMode: "contain",
  },
  inputTag: {
    height: 60,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    marginBottom: 14,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: GreenPrimaryColor,
    padding: 20,
    color: BlueGreenPrimaryColor,
  },
  titleText: {
    fontSize: 28,
    fontFamily: "Inter-Medium",
    textAlign: "center",
  },
  commonButton: {
    height: 40,
    borderRadius: 20,
    backgroundColor: GreenPrimaryColor,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  text18: {
    fontSize: 18,
    fontFamily: "Inter-Medium",
    alignSelf: "baseline",
  },
  logoSocial: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  ContainerRowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  ContainerColumn: {
    flexDirection: "column",
  },
  ContainerColumnCenter: {
    flexDirection: "column",
    alignItems: "center",
  },
  DayTitleText: {
    fontFamily: "Inter-Bold",
    fontSize: 52,
    lineHeight: 58,
    padding: 6,
  },
  TextRegular16: {
    fontFamily: "Inter-Medium",
    fontSize: 16,
    lineHeight: 16,
    padding: 4,
  },
  TextExtraLight14: {
    fontFamily: "Inter-Light",
    fontSize: 14,
    lineHeight: 14,
    padding: 4,
    alignSelf: "center",
  },
  TextBold18: {
    fontFamily: "Inter-Bold",
    fontSize: 18,
    lineHeight: 18,
    padding: 4,
    alignSelf: "center",
  },
});
