import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Image,
  SectionList,
  ScrollView,
  View,
  Text,
  Button
} from "react-native";
import AboutBook from "./fitback";

const Stack = createStackNavigator();

function Element({ data }) {
  const [selectedItem, setSelectItem] = useState([]);
  function goToAboutBook() {
    //перейти к отзывам
    data.navigation.navigate("AboutBook");
  }

  return (
    <View style={{ backgroundColor: "pink", padding: 20 }}>
      <Image source={{ uri: data.img }} style={{ width: 300, height: 300 }} />
      <Text>{data.title}</Text>
      <Text>{data.desc}</Text>
      <Button title="о книге" onPress={goToAboutBook} />
    </View>
  );
}

const UserScreen = (props) => {
  const DATA = [
    {
      // text: "горячие блюда",
      data: [
        {
          title: "Will.",
          img:
            "https://cv3.litres.ru/pub/c/audiokniga/cover_415/67254938-uill-smit-will-chemu-mozhet-nauchit-nas-prostoy-paren-stavshiy-sa-67254938.webp",
          desc: "tyt est pomidory, makarony, kuritca i zelen"
        },
        {
          title: "lagman",
          img:
            "https://www.mir-krup.ru/upload/resize_cache/iblock/b8c/800_500_103c244ed8a995912e1bb5dccfb1e72b1/veglagman.jpg",
          desc: "tyt est lapsha i podliva (sostav smotrite sami v internete)"
        },
        {
          title: "borcsh",
          img:
            "https://pervyebljuda.ru/wp-content/uploads/2021/10/%D0%B1%D0%BE%D1%80%D1%89.jpg",
          desc: "bul`on, myaso, kapusta, kartoshka, svekla"
        }
      ]
    },
    {
      text: "zakuski",
      data: [
        {
          title: "russian narezka",
          img:
            "https://thumbs.dreamstime.com/b/%D1%82%D1%80%D0%B0-%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B0%D1%8F-%D0%B7%D0%B0%D0%BA%D1%83%D1%81%D0%BA%D0%B0-80333602.jpg",
          desc: "vse chto assotciiruyete s russkimi"
        },
        {
          title: "syrnye palochki",
          img: "https://namnamra.com/public/r/2000-2100/2062.jpg",
          desc: "syr i panirovka"
        },
        {
          title: "fri",
          img:
            "https://static.1000.menu/img/content-v2/18/ca/14461/kartoshka-fri-na-skovorode_1581661860_11_max.jpg",
          desc: "kartoshka"
        }
      ]
    }
  ];
  function goToAboutBook() {
    //перейти к отзывам
    props.navigation.navigate("AboutBook");
  }
  function goToLogin() {
    //выйти
    props.navigation.navigate("Login");
  }

  return (
    <ScrollView>
      <Button title="о книге" onPress={goToAboutBook} />
      <Button title="выйти" onPress={goToLogin} />

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Element data={item} />}
        renderSectionHeader={({ section: { text } }) => <Text>{text}</Text>}
      />
      {/* <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="AboutBook"
            component={AboutBook}
            options={{ title: "о книге" }}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
    </ScrollView>
  );
};

export default UserScreen;
