import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Icon} from '../../assets/images';
import {Button, Input} from '../../components';
import {wp} from '../../utils/layout';
import {styles} from './styles';

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
        icon={<Icon.Eye width={wp(24)} height={wp(15.74)} />}
        secureTextEntry={true}
      />

      <View style={styles.margin} />
      <Button title="Sign In" onPress={() => null} />
    </View>
  );
};
