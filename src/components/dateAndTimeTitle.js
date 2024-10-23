import { Text, View } from "react-native";
import componentStyles from "./style/componentStyles";
import style from "../screens/WelcomeScreen/style";
import { SpacerVertical12 } from "./spacer";

export default function DateAndTimeTitle() {
  const day = new Date();
  function conveyDay(day) {
    switch (day) {
      case 2:
        return "Mon";
      case 3:
        return "Tue";
      case 4:
        return "Wed";
      case 5:
        return "Thu";
      case 6:
        return "Fri";
      case 7:
        return "Sat";
      case 8:
        return "Sun";
    }
  }
  function conveyMonth(month) {
    switch (month) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sep";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      case 12:
        return "Dec";
    }
  }
  return (
    <View>
      <View style={componentStyles.ContainerRowCenter}>
        <Text style={componentStyles.DayTitleText}>{day.getDate()}</Text>

        <View style={componentStyles.ContainerColumn}>
          <Text style={componentStyles.TextRegular16}>
            {conveyDay(day.getDay() + 1)}
          </Text>
          <View style={componentStyles.ContainerRowCenter}>
            <Text style={componentStyles.TextRegular16}>
              {conveyMonth(day.getMonth() + 1)}
            </Text>
            <Text style={componentStyles.TextRegular16}>
              {day.getFullYear()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
