import styled from "styled-components";
import Calendar from "./components/Calendar";

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Today = styled.div`
  width: 7%;
  margin: 2em 1em 2em .2em;
  border: 1px solid red;
  background:#777;
  height: 30px;
  cursor: pointer;
`
const TodayTxt = styled.div`

`
const OwnDaysNumbers = styled.div`
  width: 7%;
  margin: 1em;
  background-color: #f00;
  height: 30px;
  cursor: pointer;
`
const OwnDaysNumbersTxt = styled.div`
  
`
function App() {
  return (
    <div className="App">
      <Calendar />
      <Description >
        <Today></Today>
        <TodayTxt >- dzisiaj</TodayTxt>
        <OwnDaysNumbers className=""> </OwnDaysNumbers>
        <OwnDaysNumbersTxt>- nr dni z tablicy ownDaysNumbers</OwnDaysNumbersTxt>
      </Description>
    </div>
  );
}

export default App;
