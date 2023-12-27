import React, { useState, useEffect } from 'react';


function Timer() {
    const [timer, setTimer] = useState(0);
    const [startTimer, setStartTimer] = useState(false)

    console.log(startTimer)

    useEffect(() => {
        let timerID;
        const startTimerRunning = () => {
            if (startTimer) {
                timerID = setInterval(() => {
                    setTimer((state) => state + 1);
                }, 1000);
            }
        };
        if (timer < 60) {
            startTimerRunning();
        }
        return () => {
            
            clearInterval(timerID);
        };


    }, [timer, startTimer]);

    return (
        <div
         style={{
            display: 'flex', flexDirection: "column",
            justifyContent: 'center',
            width: '100vw',
            height: '100vh',
            alignItems: "center"
        }}
        className="App">

            <div style={{ border: "2px brown solid", padding: "2%", width: "15%", height: "25%" }}>
                <div style={{
                    border: "1px brown solid",
                    width: "100%"
                }}>
                    <h1>{timer}</h1>
                </div>
                <div style={{ marginTop: "3%" }} >
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                        <button style={{ borderRadius: "5px", padding: "2%", border: "1px brown solid" }}
                            onClick={() =>{ setStartTimer(!startTimer) }}
                            disabled={startTimer}>
                            Start Timer
                        </button>
                        <button
                            style={{ borderRadius: "5px", padding: "2%", border: "1px brown solid" }}
                            onClick={() => setStartTimer(false)}
                            disabled={!startTimer}>
                            Stop Timer</button>
                    </div>
                    <button
                        style={{
                            borderRadius: '5px',
                            padding: '2%',
                            border: '1px brown solid',
                            marginTop: '8%',
                        }}
                        onClick={() => {
                            setTimer(0);
                            setStartTimer(false);
                        }}
                    >Reset Timer</button>
                </div>
            </div>
        </div>
    );
}

export default Timer;
