import styled from 'styled-components/native';

import { theme } from '~/theme/globalStyle';

export const ForecastOfDay = styled.View`
  padding: 12px;
  justify-content: space-around;
  border-width: 1px;
  border-color: ${theme.light};
  border-radius: 5px;
`;
export const HeaderDay = styled.View`
  padding-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ItemDate = styled.Text`
  font-family: 'Comfortaa-SemiBold';
  color: ${theme.light};
  font-size: 18px;
`;
export const Weekday = styled.Text`
  font-family: 'Comfortaa-SemiBold';
  color: ${theme.light};
  font-size: 18px;
  margin-right: 10px;
`;
export const BodyContent = styled.View`
  justify-content: center;
  align-items: center;
`;
export const IconCondition = styled.View`
  width: 62px;
  height: 62px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const LabelDescription = styled.Text`
  min-height: 34px;
  font-family: 'Roboto-Regular';
  color: ${theme.light};
  font-size: 16px;
  margin-bottom: 8px;
  text-align: center;
`;
export const Temperature = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
`;
export const Label = styled.Text`
  font-family: 'Roboto-Regular';
  color: ${theme.light};
  font-size: 16px;
`;
export const TempNumber = styled.Text`
  font-family: 'Roboto-Regular';
  color: ${theme.light};
  font-size: 16px;
`;
