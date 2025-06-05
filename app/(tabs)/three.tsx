import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

interface User {
  id: number;
  name: string;
  email: string;
  company: string;
}

const FetchDataScreen = () => {
  const [data, setData] = useState<User[] | null>(null);

  useEffect(() => {
    fetch('https://fake-json-api.mock.beeceptor.com/users')
      .then((res) => res.json())
      .then(setData)
      .catch(() => alert("Error fetching data"));
  }, []);

  return (
    <View style={styles.container}>
      {data ? (
        data.map((user) => (
          <Text key={user.id}>
            {user.name} - {user.email}
          </Text>
        ))
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default FetchDataScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
