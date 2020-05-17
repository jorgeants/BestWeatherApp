import React from 'react';

import { theme } from '~/theme/globalStyle';

import {
  Background,
  Container,
  SafeContainer,
  NowIn,
  LabelLocaltion,
  IconCurrentWeather,
  LabelTemp,
  LabelWeatherDescription,
} from './styles';

const Main = () => {
  return (
    <Background colors={[theme.primary, theme.secondary]}>
      <SafeContainer>
        <Container>
          <NowIn>Agora em</NowIn>
          <LabelLocaltion>Barra Mansa</LabelLocaltion>
          <IconCurrentWeather />
          <LabelTemp>17º</LabelTemp>
          <LabelWeatherDescription>Tempo limpo</LabelWeatherDescription>
        </Container>
      </SafeContainer>
    </Background>
  );
};

export default Main;
