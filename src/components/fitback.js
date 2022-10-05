import React from "react";
import { View, Text, Button } from "react-native";

const FitBack = (props) => {
  function goToAboutBook() {
    //вернуться назад
    props.navigation.navigate("AboutBook");
  }

  return (
    <View>
      <Text>тут будут отзывы </Text>
      <Button title="оставить отзыв не работает!" onPress={goToAboutBook} />
      <Button title="вернуться к книге" onPress={goToAboutBook} />
    </View>
  );
};

export default FitBack;
