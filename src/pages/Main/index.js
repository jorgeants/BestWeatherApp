import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestForecast } from '~/store/modules/forecast/actions';

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
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.forecast);

  useEffect(() => {
    dispatch(requestForecast(-22.5435364, -44.1055362));
  }, []);

  return (
    <Background colors={[theme.primary, theme.secondary]}>
      <SafeContainer>
        <Container>
          <NowIn>Agora em</NowIn>
          <LabelLocaltion>{data.city}</LabelLocaltion>
          <IconCurrentWeather />
          <LabelTemp>{`${data.temp}º`}</LabelTemp>
          <LabelWeatherDescription>{data.description}</LabelWeatherDescription>
        </Container>
      </SafeContainer>
    </Background>
  );
};

export default Main;
