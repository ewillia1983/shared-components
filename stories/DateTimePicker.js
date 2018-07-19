import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DateTimePicker from 'components/DateTimePicker';
import moment from 'moment';

storiesOf('Date Time Picker', module)
  .add('standard', () => <DateTimePicker onChange={action('onChange')} />)
  .add('range', () => <DateTimePicker.Range onChange={action('onChange')} />)
  .add('disabled', () => (
    <DateTimePicker.Range disabled onChange={action('onChange')} />
  ))
  .add('disabled start', () => (
    <DateTimePicker.Range disabled="startDate" onChange={action('onChange')} />
  ))
  .add('disabled end', () => (
    <DateTimePicker.Range disabled="endDate" onChange={action('onChange')} />
  ));
