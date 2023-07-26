import './App.css';
import Timer from "./timer";
import Settings from "./Settings";
import {useState} from "react";
import SettingsContext from "./SettingsContext";

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(1);
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