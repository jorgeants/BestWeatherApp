import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { theme } from '~/theme/globalStyle';

const heightScreen = Dimensions.get('screen').height;

export const Container = styled.View``;
export const ForecastTitle = styled.Text`
  font-family: 'Roboto-Regular';
  color: ${theme.light};
  font-size: 18px;
  text-align: center;
  margin-bottom: ${heightScreen > 667 ? `30px` : `20px`};
`;
