import React from "react";
import { View, Text, Button } from "react-native";

const AboutBook = (props) => {
  function goToUser() {
    //вернуться назад
    props.navigation.navigate("User");
  }
  function goToFitBack() {
    //вернуться назад
    props.navigation.navigate("FitBack");
  }

  return (
    <View>
      <Text> тут инфа про книгу </Text>
      <Button title="отзывы" onPress={goToFitBack} />
      <Button title="вернуться к списку книг" onPress={goToUser} />
    </View>
  );
};

export default AboutBook;
