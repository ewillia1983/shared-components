import React from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import {
  DateRangePicker as LibDateRangePicker,
  DateRangePickerShape,
} from 'react-dates';
import Icon from '../Icon';
import DateRangePickerWrapper from './styles/DateRangePickerWrapper';
import DateRangePickerLineSeparator from './styles/DateRangePickerLineSeparator';

/**
 * This is a styling wrapper around [react-dates](https://github.com/airbnb/react-dates).
 * Please see [here](https://github.com/airbnb/react-dates#singledatepicker) for prop types.
 *
 * The picker can be controlled by setting the props `startDate`, `endDate` and `onDatesChange`.
 * `startDate` and `endDate` should be set to moment objects of the currently selected dates,
 * while `onDatesChange` should be a function that handles the dates when they
 * change.
 *
 * **NOTE: ** The range picker uses `onDatesChange` not `onDateChange`.
 */
class DateRangePicker extends React.PureComponent {
  static propTypes = {
    ...DateRangePickerShape,
    startDateId: PropTypes.string,
    endDateId: PropTypes.string,
    /**
     * A component to wrap and control styles of the underlying react-dates DatePicker
     */
    Wrapper: PropTypes.func,
    /**
     * A component that renders the separator line between the two inputs
     */
    LineSeparator: PropTypes.func,
  };

  static defaultProps = {
    Wrapper: DateRangePickerWrapper,
    LineSeparator: DateRangePickerLineSeparator,
  };

  state = {
    internalFocusedInput: null,
  };

  handleFocusChange = internalFocusedInput =>
    this.setState({ internalFocusedInput });

  get focusedInput() {
    return (
      this.props.disabled !== this.state.internalFocusedInput &&
      this.state.internalFocusedInput
    );
  }

  render() {
    const { Wrapper, LineSeparator, ...rest } = this.props;
    return (
      <Wrapper
        className={this.focusedInput && 'focused-' + this.focusedInput}
        openDirection={this.props.openDirection}
        disabled={this.props.disabled}
        invalid={this.props.invalid}
      >
        <LibDateRangePicker
          navPrev={<Icon name="back" size="12px" />}
          navNext={<Icon name="forward" size="12px" />}
          weekDayFormat="dd"
          displayFormat="MMM DD YYYY"
          customArrowIcon={<LineSeparator />}
          daySize={37}
          horizontalMargin={0}
          hideKeyboardShortcutsPanel
          numberOfMonths={this.props.disabled ? 1 : 2}
          minimumNights={0}
          focusedInput={this.focusedInput}
          anchorDirection={this.focusedInput === 'endDate' ? 'right' : 'left'}
          onFocusChange={this.handleFocusChange}
          {...rest}
        />
      </Wrapper>
    );
  }
}

export default DateRangePicker;
