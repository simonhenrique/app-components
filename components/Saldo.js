import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { useSaldo } from '../context/ContaContext';

const Saldo = (props) => {
  const { saldo } = useSaldo();

  return <Text styles={styles.text}> Saldo: {saldo} </Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold',
  },
});

export default Saldo;