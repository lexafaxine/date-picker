import React from "react";
import DatePikcerWithId from "../components/DatePickerWithId";

type SetDueDateTimeProps = {
  id?: string;
  createdAt?: Date;
}

const SetDueDateTime: React.FC<SetDueDateTimeProps> = (
  props: SetDueDateTimeProps
) => {
  const onChangeDateTime = (e: Date) => {
    return;
  };
  return (
    <DatePikcerWithId
      id={props.id}
      onChangeDateTime={onChangeDateTime}
    ></DatePikcerWithId>
  );
};

export default SetDueDateTime;
