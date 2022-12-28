import { useState, useEffect } from "react";

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

export function FormattedDate({ date, ...props }) {
  const fdate = useFormattedDate(date);
  return (
    <time dateTime={date.toISOString()} {...props}>
      {fdate}
    </time>
  )
}

export const useFormattedDate = (date) => {
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(
    () => setFormattedDate(new Date(date).toLocaleDateString("en-US")),
    []
  );

  return formattedDate;
};
