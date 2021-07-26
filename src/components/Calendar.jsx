import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';



const Container = styled.div`
  margin: 0 auto;
  width: 455px;
  height: 350px;
  box-shadow: 3px 5px 7px rgba(175,175,175,.8);
  aspect-ratio: 16/9;
  background: #777;
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f00;

`;

const Month = styled.h3`
 font-size: bold;
`
const Button = styled.button`
  font-size: 1.5rem;
  padding: 3px 5px;
  cursor: pointer;
  background: transparent;
  border: none;
`;

const Main = styled.div`
  margin: 0 auto;
  width:100%;
  display: flex;
  flex-wrap: wrap;
`;

const WeekDay = styled.div`
  ${(props) =>
    props.today &&
    css`
      border:1px solid #f00;
    `}

  ${(props) =>
    props.selected &&
    css`
      background-color: red;
    `}

  margin: .03em;
  width: 14%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default function Calendar() {
  const months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
  const weekDays = ['pon', 'wto', 'śro', 'czw', 'pią', 'sob', 'nie'];
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const leapYearDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  //Po uruchomieniu aplikacji liczby umieszcone w tablicy 'ownDaysNumbers' zostaną zaznaczone na kalendarzu miesięcznym jako liczby dni poszczególnych miesięcy
  const ownDaysNumbers = [3, 9, 13, 31]

  const currentDay = new Date();
  const [date, handleSetDate] = useState(currentDay);
  const [day, handleSetDay] = useState(date.getDate());
  const [month, handleSetMonth] = useState(date.getMonth());
  const [year, handleSetYear] = useState(date.getFullYear());
  const [startDay, handleSetStartDay] = useState(handleGetFirstDayOfMonth(date));

  function handleGetFirstDayOfMonth(date) {
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return startDate === 0 ? 7 : startDate;
  }

  function leapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = leapYear(year) ? leapYearDays : monthDays;

  useEffect(() => {
    handleSetDay(date.getDate());
    handleSetMonth(date.getMonth());
    handleSetYear(date.getFullYear());
    handleSetStartDay(handleGetFirstDayOfMonth(date));
  }, [date]);

  return (
    <Container>
      <Header>
        <Button onClick={() => handleSetDate(new Date(year, month - 1, day))}>{String.fromCharCode(171)}</Button>
        <Month>
          {months[month].charAt(0).toUpperCase() + months[month].slice(1)} {year}
        </Month>
        <Button onClick={() => handleSetDate(new Date(year, month + 1, day))}>{String.fromCharCode(187)}</Button>
      </Header>
      <Main>
        {weekDays.map((day) => (
          <WeekDay key={day}>
            <p>{day.charAt(0).toUpperCase() + day.slice(1)}</p>
          </WeekDay>
        ))}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            let d = index - (startDay - 2);
            const filteredDays = ownDaysNumbers.filter(i => i === d)
            return (
              <WeekDay
                key={index}
                today={d === currentDay.getDate()}
                // selected={d===day}
                selected={filteredDays[0]}
                onClick={() => handleSetDate(new Date(year, month, d))}
              >
                {d > 0 ? d : ''}
              </WeekDay>
            );
          })}
      </Main>
    </Container >

  );
}
