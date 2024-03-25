import React from "react";
import { Text, View } from "react-native";

type CardProps = {
  title: string;
  content: string;
};

const Card = (props: CardProps) => {
  return (
    <View style={styles.viewCard}>
      <Text style={styles.viewTitle}>{props.title}</Text>
      <Text style={styles.viewContent}>{props.content}</Text>
    </View>
  );
}

const styles = {
  viewCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 20,
    maxWidth: '50%',
    flex: 1,
  },
  viewTitle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  viewContent: {
    fontSize: 12,
    textAlign: 'center',
  },
};

export default Card;