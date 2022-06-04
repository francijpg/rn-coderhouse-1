import React from "react";
import { Text, Pressable } from "react-native";
import Checkbox from "expo-checkbox";
import { styles } from "./card.style";

const Card = ({ index, data, deleteItem, updateItem }) => {
  return (
    <Pressable style={styles.view} onLongPress={() => deleteItem(index)}>
      <Checkbox
        style={styles.checkbox}
        value={data.isSelected}
        onValueChange={(value) => updateItem(index, value)}
      />
      <Text
        style={{
          ...styles.text,
          textDecorationLine: data.isSelected ? "line-through" : "none",
        }}
      >
        {data.text}
      </Text>
    </Pressable>
  );
};

export default Card;
