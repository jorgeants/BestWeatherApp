import React from 'react';
import PropTypes from 'prop-types';

import WeatherAnimatedIcon from '~/components/WeatherAnimatedIcon';

import {
  ForecastOfDay,
  HeaderDay,
  ItemDate,
  Weekday,
  BodyContent,
  IconCondition,
  LabelDescription,
  Temperature,
  Label,
  TempNumber,
} from './styles';

const ForecastItem = ({ item }) => {
  return (
    <ForecastOfDay>
      <HeaderDay>
        <Weekday>{item.weekday}</Weekday>
        <ItemDate>{item.date}</ItemDate>
      </HeaderDay>

      <BodyContent>
        <IconCondition>
          <WeatherAnimatedIcon condition={item.condition} />
        </IconCondition>

        <LabelDescription>{item.description}</LabelDescription>

        <Temperature>
          <Label>Máximo</Label>
          <TempNumber>{item.max}º</TempNumber>
        </Temperature>
        <Temperature>
          <Label>Mínimo</Label>
          <TempNumber>{item.min}º</TempNumber>
        </Temperature>
      </BodyContent>
    </ForecastOfDay>
  );
};

ForecastItem.propTypes = {
  item: PropTypes.shape({
    date: PropTypes.string,
    weekday: PropTypes.string,
    condition: PropTypes.string,
    description: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
  }).isRequired,
};

export default ForecastItem;
