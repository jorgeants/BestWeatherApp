import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import NetInfo from '@react-native-community/netinfo';
import { showMessage } from 'react-native-flash-message';

import FatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import WeatherAnimationIcon from '~/components/WeatherAnimatedIcon';
import Forecast from '~/components/Forecast';

import { requestForecast } from '~/store/modules/forecast/actions';

import { theme } from '~/theme/globalStyle';

import {
  Background,
  SafeContainer,
  Container,
  CurrentWeather,
  WrapperIconTemperature,
  LabelLocaltion,
  IconCurrentWeather,
  Temperature,
  LabelTemperature,
  LabelWeatherDescription,
  OtherInformations,
  Column,
  InfoLabel,
  MoreInformation,
} from './styles';

const Main = () => {
  const [hasInternetConnection, setHasInternetConnection] = useState(false);
  const [location, setLocation] = useState(null);
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.forecast);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
      },
      () => {
        showMessage({
          message: 'Aconteceu algo inesperado :(',
          description: 'Erro ao determinar sua localização',
          type: 'danger',
        });
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  useEffect(() => {
    getLocation();
    NetInfo.fetch().then((state) => {
      setHasInternetConnection(state.isConnected);
      if (!state.isConnected) {
        showMessage({
          message: 'Sem conexão com a internet',
          description: 'Verifique sua conexão',
          type: 'danger',
        });
      }
    });
  }, []);

  useEffect(() => {
    if (hasInternetConnection && location) {
      dispatch(
        requestForecast(location.coords.latitude, location.coords.longitude)
      );
    }
  }, [location]);

  return (
    <Background colors={[theme.primary, theme.secondary, theme.tertiary]}>
      <SafeContainer>
        {!error && (
          <Container>
            {loading ? (
              <ActivityIndicator size="large" color={theme.light} />
            ) : (
              <>
                <CurrentWeather>
                  <LabelLocaltion>{data.city}</LabelLocaltion>

                  <WrapperIconTemperature>
                    <IconCurrentWeather>
                      <WeatherAnimationIcon condition={data.condition_slug} />
                    </IconCurrentWeather>
                    <Temperature>
                      <LabelTemperature>{`${data.temp}º`}</LabelTemperature>
                    </Temperature>
                  </WrapperIconTemperature>

                  <LabelWeatherDescription>
                    {data.description}
                  </LabelWeatherDescription>

                  <OtherInformations>
                    <Column>
                      <MoreInformation>
                        <FatherIcon name="wind" size={24} color={theme.light} />
                        <InfoLabel>{data.wind_speedy}</InfoLabel>
                      </MoreInformation>
                      <MoreInformation>
                        <FatherIcon
                          name="sunrise"
                          size={24}
                          color={theme.light}
                        />
                        <InfoLabel>{data.sunrise}</InfoLabel>
                      </MoreInformation>
                    </Column>

                    <Column>
                      <MoreInformation>
                        <MaterialCommunityIcons
                          name="water-outline"
                          size={24}
                          color={theme.light}
                        />
                        <InfoLabel>{data.humidity}%</InfoLabel>
                      </MoreInformation>
                      <MoreInformation>
                        <FatherIcon
                          name="sunset"
                          size={24}
                          color={theme.light}
                        />
                        <InfoLabel>{data.sunset}</InfoLabel>
                      </MoreInformation>
                    </Column>
                  </OtherInformations>
                </CurrentWeather>

                <Forecast data={data.forecast} />
              </>
            )}
          </Container>
        )}
      </SafeContainer>
    </Background>
  );
};

export default Main;
