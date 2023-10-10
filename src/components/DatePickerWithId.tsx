import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerWithId.css";

type DatePikcerWithIdProps = {
  id?: string;
  createdAt?: Date;
  onChangeDateTime: (newDateTime: Date) => void;
};

const DatePikcerWithId: React.FC<DatePikcerWithIdProps> = (
  props: DatePikcerWithIdProps
) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTime, setSelectedTime] = React.useState(new Date());
  console.log(selectedDate);
  return (
    <div className="date-time-picker">
      <div className="caption">select the due date and time for task:</div>
      <div className="date-picker">
        <DatePicker
          showIcon
          selected={selectedDate}
          onChange={(date: Date) => {
            setSelectedDate(date);
            console.log(date);
            props.onChangeDateTime(date);
          }}
        />
      </div>
      <div className="time-picker">
        <DatePicker
          selected={selectedTime}
          onChange={(date: Date) => setSelectedTime(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </div>
    </div>
  );
};

export default DatePikcerWithId;
