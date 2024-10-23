import { View } from "react-native";
import DateAndTimeTitle from "../../components/dateAndTimeTitle";
import componentStyles from "../../components/style/componentStyles";
import { StatusBar } from "expo-status-bar";
import { DayElement, WeekElement } from "../../components/listDayWeekMonth";

export default function HomeScreen() {
  return (
    <View style={componentStyles.entireScreenPadding}>
      <StatusBar style="light-content" />
      <DateAndTimeTitle />
      <WeekElement />
    </View>
  );
}
