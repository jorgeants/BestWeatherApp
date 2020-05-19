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
  justify-content: center;
`;
export const CurrentWeather = styled.View`
  align-items: center;
`;
export const ForecastOfDays = styled.View``;
export const LabelLocaltion = styled.Text`
  font-family: 'Comfortaa-Regular';
  font-size: 22px;
  font-weight: 400;
  color: ${theme.light};
  margin-bottom: 40px;
`;
export const WrapperIconTemperature = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const IconCurrentWeather = styled.View`
  width: 120px;
  height: 120px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Temperature = styled.View`
  padding-left: 10px;
  margin-left; 20px;
  border-left-width: 1px;
  border-left-color: ${theme.light};
  padding: 10px 0;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const LabelTemperature = styled.Text`
  font-family: 'Comfortaa-SemiBold';
  font-size: 80px;
  color: ${theme.light};
`;
export const LabelWeatherDescription = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 22px;
  color: ${theme.light};
  margin-top: 30px;
`;
export const OtherInformations = styled.View`
  width: 100%
  flex-direction: row;
  justify-content: center;
  padding: 20px;
`;
export const Column = styled.View`
  padding: 15px;
`;
export const MoreInformation = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;
export const InfoLabel = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  font-weight: 500;
  color: ${theme.light};
  margin-left: 10px;
`;
