import { loginUser } from '@/auth';
import { useNavigation } from 'expo-router';
import { useContext, useState } from 'react';
import { router } from 'expo-router';

import { View, TouchableWithoutFeedback, Keyboard, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AuthContext } from '@/app/authContext';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleLogin = async () => {
    const successfulLog = await loginUser(email, password);

    if (successfulLog) {
      console.log("Logged in");
      setIsLoggedIn(true);
      router.navigate('/');
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
         <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
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

export default LoginForm;
