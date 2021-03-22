import {colors} from '../constants/colors';

export const check = (text: string) => {
  if (text.toLowerCase().includes('deposit')) {
    return {
      color: colors.green,
      background: 'rgba(76,217,100,0.2)',
      sign: true,
    };
  }

  if (text.toLowerCase().includes('withdrawal')) {
    return {color: colors.red, background: 'rgba(212,63,63,0.2)', sign: false};
  }

  if (text.toLowerCase().includes('transfer')) {
    return {color: colors.teal, background: colors.off_teal, sign: false};
  }
};
