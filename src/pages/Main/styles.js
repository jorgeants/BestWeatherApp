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
  font-size: 13px;
  font-weight: 500;
  color: ${theme.light};
`;
export const LabelLocaltion = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.light};
`;
export const IconCurrentWeather = styled.View`
  width: 100px;
  height: 100px;
  border-width: 2px;
  border-color: ${theme.light};
`;
export const LabelTemp = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${theme.light};
`;
export const LabelWeatherDescription = styled.Text`
  font-size: 15px;
  color: ${theme.light};
`;
