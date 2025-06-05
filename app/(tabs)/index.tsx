
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Neetah's App!</Text>
      <Image source={require('../../assets/images/mickey.jpg')} style={styles.image} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  image: { width: 200, height: 200, borderRadius: 100 },
});
