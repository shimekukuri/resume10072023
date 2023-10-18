export default function DateDisplay({ className }: { className: string }) {
  let days = ['SUN', 'MON', 'TUES', 'WED', 'THURS', 'FRI', 'SAT'];
  let months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  let date = new Date();
  let day = days[date.getDay()];
  let month = months[date.getMonth()];
  let todaysDate = date.getDate();
  return (
    <div className={className}>{`${day} ${
      date.getMonth() + 1
    }/${todaysDate}`}</div>
  );
}
