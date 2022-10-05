import React, { Component, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  Button as CustomButton
} from "react-native";

export default class Login extends Component {
  state = {
    codigo: "", //логин
    nip: "" //пароль
  };

  goToUser = () => {
    this.props.navigation.navigate({
      name: "User",
      params: {
        name: "all books" //переход на другую страницу
      }
    });
  };
  onChangeText = (text) => {
    this.setState({ value: text }); //меняет значение текста
  };
  Spacer = () => {
    return <View style={{ marginTop: 16 }} />;
  };

  render() {
    return (
      <View>
        <Text style={styles.textStyle}> имя сайта </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Image
            style={styles.ImageStyles}
            source={{
              justifyContent: "center",
              uri: "картинка сайта"
            }}
          />
        </View>
        <TextInput
          value={this.state.codigo}
          onChangeText={(text) => this.setState({ codigo: text })}
          style={styles.inputStyle}
          placeholder="имя пользователя"
        />
        <TextInput
          value={this.state.nip}
          onChangeText={(text) => this.setState({ nip: text })}
          secureTextEntry={true}
          style={styles.inputStyle}
          placeholder={"пароль"}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <CustomButton
            title="войти"
            containerStyles={{
              backgroundColor: "#4D2D52",
              display: "flex",
              justifyContent: "center",
              width: 100
            }}
            onPress={this.goToUser}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: "#1D1A31",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20
  },
  inputStyle: {
    textAlign: "center",
    marginBottom: 5
  },
  ImageStyles: {
    width: 150,
    height: 150,
    marginBottom: 20
  }
});
