// ListItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = ({ nombre, dui, sexo, hora}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text>{dui}</Text>
      <Text>{sexo}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.hora}>{hora}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    padding: 2,
    backgroundColor: '#B4B8BB',
    borderRadius: 10,
    justifyContent:'space-around'
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  hora: {
    marginBottom: 5,
    fontSize: 20,
    marginRight: 10,
    backgroundColor: '#fca5b6'
  }
});

export default ListItem;
