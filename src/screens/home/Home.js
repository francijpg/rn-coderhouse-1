import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Card } from "../../components/card";
import { styles } from "./home.style";

const Home = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const addItem = (text) => {
    if (value !== "") {
      setList((prev) => {
        return [...prev, { text: text, isSelected: false }];
      });
      setValue("");
    } else {
      alert("Please type in something!");
    }
  };

  const updateItem = (index, value) => {
    let data = [];
    for (let i = 0; i < list.length; i++) {
      if (index === i) {
        data.push({ ...list[i], isSelected: value });
      } else {
        data.push(list[i]);
      }
    }
    setList(data);
  };

  const deleteItem = (idx) => {
    Alert.alert("Delete Item", "Are you sure you want to delete this item?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          setList((currentList) =>
            currentList.filter((item, index) => index !== idx)
          );
        },
      },
    ]);
  };

  const renderItem = ({ item, index }) => (
    <Card
      data={item}
      index={index}
      updateItem={updateItem}
      deleteItem={deleteItem}
    />
  );

  const keyExtractor = (item, index) => index.toString();

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>coderhouse challenge 1 | todo list</Text>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
      />

      <View style={styles.textBoxWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="New Task"
          onChangeText={(text) => setValue(text)}
          value={value}
        />
        <TouchableOpacity style={styles.btn} onPress={() => addItem(value)}>
          <Text style={styles.btnAddItem}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
