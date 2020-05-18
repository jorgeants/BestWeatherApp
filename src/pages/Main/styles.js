import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import { theme } from '~/theme/globalStyle';

export const Background = styled(LinearGradient)`
  flex: 1;
`;
export const SafeContainer = styled.SafeAreaView`
  flex: 1;
`;
export const Container = styled.View`
  flex: 1;
  align-items: center;
`;
export const NowIn = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  font-weight: 500;
  color: ${theme.light};
`;
export const LabelLocaltion = styled.Text`
  font-family: 'Comfortaa-Regular';
  font-size: 20px;
  font-weight: 400;
  color: ${theme.light};
`;
export const IconCurrentWeather = styled.View`
  width: 140px;
  height: 140px;
  margin: 20px 0;
`;
export const LabelTemp = styled.Text`
  font-family: 'Comfortaa-SemiBold';
  font-size: 50px;
  color: ${theme.light};
`;
export const LabelWeatherDescription = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 25px;
  color: ${theme.light};
`;
