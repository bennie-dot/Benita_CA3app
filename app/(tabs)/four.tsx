import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

interface User {
  id: number;
  email: string;
  company: string;
}

const DisplayListScreen = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://fake-json-api.mock.beeceptor.com/users')
      .then((res) => res.json())
      .then(setData)
      .catch(() => alert('Error fetching'));
  }, []);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text>{item.company}</Text>
          <Text>{item.email}</Text>
        </View>
      )}
    />
  );
};

export default DisplayListScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    padding: 15,
    margin: 10,
    borderRadius: 8,
  },
});
