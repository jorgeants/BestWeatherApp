import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';

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
  const [location, setLocation] = useState(null);
  const [watchID, setWatchID] = useState(null);
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.forecast);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
      },
      (error) => console.log(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    setWatchID(
      Geolocation.watchPosition((position) => {
        setLocation(position);
      })
    );
  };

  useEffect(() => {
    getLocation();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  useEffect(() => {
    if (location) {
      dispatch(
        requestForecast(location.coords.latitude, location.coords.longitude)
      );
    }
  }, [location]);

  return (
    <Background colors={[theme.primary, theme.secondary, theme.tertiary]}>
      <SafeContainer>
        <Container>
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
                  <FatherIcon name="sunrise" size={24} color={theme.light} />
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
                  <FatherIcon name="sunset" size={24} color={theme.light} />
                  <InfoLabel>{data.sunset}</InfoLabel>
                </MoreInformation>
              </Column>
            </OtherInformations>
          </CurrentWeather>

          <Forecast data={data.forecast} />
        </Container>
      </SafeContainer>
    </Background>
  );
};

export default Main;
