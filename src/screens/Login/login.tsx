import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {Icon} from '../../assets/images';
import {Button, Input} from '../../components';
import {colors} from '../../constants';
import {LoginScreenProps} from '../../types/types.d';
import {validateEmail} from '../../utils/helpers';
import {wp} from '../../utils/layout';
import {styles} from './styles';

export const Login: React.FC<LoginScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email address');
    }

    if (password.trim() === '') {
      Alert.alert('Invalid password');
    }

    if (validateEmail(email) && password.trim() !== '') {
      navigation.navigate('Wallet');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome back</Text>
      <Text style={styles.subtitle}>
        Let’s get you logged in to get back to building {'\n'}your
        dollar-denominated investment portfolio.
      </Text>

      <Input placeHolder="Email Address" onChangeText={setEmail} />
      <Input
        placeHolder="Password"
        onChangeText={setPassword}
        icon={
          <Icon.Eye width={wp(24)} height={wp(15.74)} color={colors.teal} />
        }
        secureTextEntry={true}
      />

      <View style={styles.margin} />
      <Button title="Sign In" onPress={handleLogin} />
    </View>
  );
};
