import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';

import { theme } from '~/theme/globalStyle';

const heightScreen = Dimensions.get('screen').height;

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
  margin-bottom: ${heightScreen > 810 ? `40px` : `20px`};
`;
export const WrapperIconTemperature = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const IconCurrentWeather = styled.View`
  width: ${heightScreen > 810 ? `120px` : `90px`};
  height: ${heightScreen > 810 ? `120px` : `90px`};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Temperature = styled.View`
  border-left-width: 1px;
  border-left-color: ${theme.light};
  padding: 10px 0;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const LabelTemperature = styled.Text`
  font-family: 'Comfortaa-SemiBold';
  font-size: ${heightScreen > 810 ? `80px` : `60px`};
  color: ${theme.light};
`;
export const LabelWeatherDescription = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 22px;
  color: ${theme.light};
  margin-top: ${heightScreen > 810 ? `30px` : `20px`};
`;
export const OtherInformations = styled.View`
  width: 100%
  flex-direction: row;
  justify-content: center;
  padding: ${heightScreen > 810 ? `20px` : `10px`};;
`;
export const Column = styled.View`
  padding: 15px;
`;
export const MoreInformation = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${heightScreen > 810 ? `5px` : `3px`};
`;
export const InfoLabel = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  font-weight: 500;
  color: ${theme.light};
  margin-left: 10px;
`;
