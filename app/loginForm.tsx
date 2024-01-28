import { loginUser } from '@/auth';
import { StackActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { useContext, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, TextInput, Button, StyleSheet, Text } from 'react-native';
import { AuthContext } from '@/auth/authContext';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    const successfulLog = await loginUser(email, password);
    console.log("Logged in");
    if (successfulLog) {
      const { setIsLoggedIn } = useContext(AuthContext);
      setIsLoggedIn(true);
      useNavigation().dispatch(StackActions.push('/'));
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    color: 'white', // Set the text color here
    backgroundColor: 'black', // Optional: change the background color if needed
  },
  errorText: {
    marginTop: 10,
    color: 'red',
  },
});

export default LoginForm;
