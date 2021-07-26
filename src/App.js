import Calendar from "./components/Calendar";


function App() {
  return (
    <div className="App">
      <Calendar />
      <div className="description">
        <div className="today"></div>
        <div >- dzisiaj</div>
        <div className="ownDaysNumbers"> </div>
        <div>- nr dni z tablicy ownDaysNumbers</div>
      </div>
    </div>
  );
}

export default App;
