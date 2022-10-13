import { Button, Collapse, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import Countdown, { CountdownApi } from 'react-countdown';
import { MdLockOutline } from 'react-icons/md';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const MainPage = () => {
  const [minuteValue, setMinuteValue] = React.useState(false);
  const [minuteNumber, setMinuteNumber] = React.useState(10000);
  const countDownRef = useRef();
  return (
    <div>
      <div className="Hello">
        <MdLockOutline size="10em" />
      </div>
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        LocTight for Educators
      </Typography>
      <Collapse in={minuteValue} sx={{ alignItems: 'center' }}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Time Remaining:
          <Box>
            <Countdown
              date={Date.now() + minuteNumber}
              autoStart={false}
              ref={countDownRef}
              onComplete={() => {
                setMinuteValue(false);
              }}
            />
          </Box>
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ m: 2 }}
          color="success"
          onClick={() => {
            countDownRef.current.api.start();
          }}
        >
          <Typography>Start Count Down</Typography>
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ m: 2 }}
          color="warning"
          onClick={() => {
            countDownRef.current.api.pause();
            // setMinuteValue(false);
          }}
        >
          <Typography>Pause Count Down</Typography>
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ m: 2 }}
          color="error"
          onClick={() => {
            countDownRef.current.api.stop();
          }}
        >
          <Typography>Reset Count Down</Typography>
        </Button>
      </Collapse>
      <div className="Hello">
        <Button
          variant="contained"
          size="large"
          sx={{ m: 2 }}
          onClick={() => {
            setMinuteValue(true);
            setMinuteNumber(5400000);
          }}
        >
          <span role="img" aria-label="books">
            📚
          </span>
          <Typography>90 minute class</Typography>
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ m: 2 }}
          onClick={() => {
            setMinuteValue(true);
            setMinuteNumber(2700000);
          }}
        >
          <span role="img" aria-label="books">
            📚
          </span>
          <Typography>45 minute class</Typography>
        </Button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
