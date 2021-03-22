import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {Input} from '../../components';
import {Button} from '../../components/button';
import {styles} from './styles';
import Eye from '../../assets/images/eye.svg';
import {wp} from '../../utils/layout';

export const Login: React.FC<any> = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        icon={<Eye width={wp(24)} height={wp(15.74)} />}
        secureTextEntry={true}
      />

      <View style={styles.margin} />
      <Button title="Sign In" onPress={() => null} />
    </View>
  );
};
