import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text>Bio:</Text>
      <TextInput style={styles.input} value={bio} onChangeText={setBio} />

      <Button title="Save" onPress={() => alert(`Saved: ${name}, ${bio}`)} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8 },
});
