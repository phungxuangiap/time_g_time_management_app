import { Text, View } from "react-native";
import componentStyles from "./style/componentStyles";

export const DayType = "DAY";
export const WeekType = "WEEK";
export const MonthType = "MONTH";
export default function ListDayWeekMonth(type = DayType) {}

export function DayElement() {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "baseline",
        padding: 8,
        borderRadius: 10,
      }}
    >
      <Text style={componentStyles.TextExtraLight14}>Mon</Text>
      <Text style={componentStyles.TextBold18}>12</Text>
    </View>
  );
}
export function WeekElement(focus) {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "baseline",
        padding: 12,
        borderRadius: 20,
      }}
    >
      <Text style={componentStyles.TextBold18}>Week 6</Text>
    </View>
  );
}
export function MonthElement() {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "baseline",

        padding: 12,
        borderRadius: 20,
      }}
    >
      <Text style={componentStyles.TextBold18}>Dec</Text>
    </View>
  );
}
