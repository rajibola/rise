import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from '../assets/images';
import {colors} from '../constants/colors';
import {check} from '../utils/helpers';
import {wp} from '../utils/layout';
import {ListStyles as styles} from './styles';

type List = {
  title: string;
  date: string;
  amount: string;
  status?: string | boolean;
};

export const List: React.FC<List> = ({title, date, amount, status}) => {
  const color = check(title)?.color;
  const background = check(title)?.background;
  const sign = check(title)?.sign;
  const statusBackground = status
    ? status === 'pending'
      ? colors.off_yellow
      : colors.off_red
    : background;
  return (
    <View style={styles.listContainer}>
      <View style={[styles.circle, {backgroundColor: statusBackground}]}>
        {status === 'pending' ? (
          <Icon.Pause width={wp(15)} color={color} />
        ) : sign ? (
          <Icon.Plus width={wp(15)} color={status ? colors.red : color} />
        ) : (
          <Icon.Minus width={wp(15)} color={status ? colors.red : color} />
        )}
      </View>

      <View style={styles.textContainer}>
        <View style={styles.spaceRow}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.amount}>
            {sign ? '+ ' : '- '}${amount}
          </Text>
        </View>
        <Text style={styles.date}>
          {date}{' '}
          {status && (
            <Text
              style={{
                color: status === 'pending' ? colors.yellow : colors.red,
              }}>
              {' '}
              • {status}
            </Text>
          )}
        </Text>
      </View>
    </View>
  );
};
