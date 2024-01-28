import { registerUser } from '@/auth';
import React, { useState } from 'react';
import { View, TextInput, TouchableWithoutFeedback, Keyboard, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';


interface SignUpFormProps {
  onSignUp: (email: string, password: string, username: string, zipCode: string) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    registerUser(email, password, username, zipCode);
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
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Zip Code"
          value={zipCode}
          onChangeText={setZipCode}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Join</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0BEC5',
  },
  input: {
    width: '80%',
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    color: 'black', // Set the text color here
    backgroundColor: '#F5F5F5', // Optional: change the background color if needed
  },
  errorText: {
    marginTop: 10,
    color: 'red',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#388E3C',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: '80%',
    height: 50,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF', // Text color
    fontSize: 20,
    fontWeight: 'bold',
  }

});

export default SignUpForm;
