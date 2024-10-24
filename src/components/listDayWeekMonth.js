import { ScrollView, Text, View } from "react-native";
import componentStyles from "./style/componentStyles";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import uuid from "react-native-uuid";
import { BlackText, RedColor, WhiteText } from "../assets/color/appColor";

export const DayType = "DAY";
export const WeekType = "WEEK";
export const MonthType = "MONTH";
export const DayConverted = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export default function ListDayWeekMonth(type = DayType) {
  const [listDays, setListDays] = useState([]);
  // Get current day

  const [currentDay, setCurrentDay] = useState(new Date());
  // Fetch all day of this month into listDay
  function fetchAllDayOfMonth(month, year) {
    let date = new Date(year, month, 1);
    while (date.getMonth() == month) {
      listDays.push(date);
      date = new Date(year, month, date.getDate() + 1);
    }
  }
  useMemo(() => {
    fetchAllDayOfMonth(currentDay.getMonth(), currentDay.getFullYear());
  }, []);

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {listDays.map((item) => {
        return (
          <DayElement
            key={uuid.v4()}
            day={item.getDate()}
            date={item.getDay()}
            isCurrent={
              currentDay.getDate() == item.getDate() &&
              currentDay.getMonth() == item.getMonth() &&
              currentDay.getFullYear() == item.getFullYear()
            }
          />
        );
      })}
    </ScrollView>
  );
}

export function DayElement({ day, date, isCurrent }) {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "baseline",
        padding: 8,
        backgroundColor: isCurrent ? RedColor : "null",
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          ...componentStyles.TextExtraLight14,
          color: isCurrent ? WhiteText : BlackText,
        }}
      >
        {DayConverted[date]}
      </Text>
      <Text
        style={{
          ...componentStyles.TextBold18,
          color: isCurrent ? WhiteText : BlackText,
        }}
      >
        {day}
      </Text>
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
