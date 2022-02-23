import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={style.title}>{title}</Text>
      <Text>Results : {results.length}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ResultsList;
