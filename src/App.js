import './App.css';
import Timer from "./timer";
import Settings from "./Review";
import {useState} from "react";
import SettingsContext from "./SettingsContext";
import reviewContext from './reviewContext';
import Review from './Review';

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [timerFinished, setTimerFinished] = useState(false); // New state to track timer completion

  const handleTimerFinish = () => {
    setShowSettings(true); // Show the settings page
    setTimerFinished(true); // Set timerFinished to true
  };

  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
        timerFinished,
      }}>
        {showSettings ? (<Settings />) : (<Timer onTimerFinish = {handleTimerFinish} />)}
      </SettingsContext.Provider>
     
    </main>
  );
}

export default App;