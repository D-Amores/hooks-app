import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type TrafficLightColor = keyof typeof colors;

const useTrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    if (countDown === 0) return;

    const intervalId = setInterval(() => {
      console.log('set Interval llamado...')
      setCountDown(prev => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [countDown, light]);


  useEffect(() => {

    if (countDown > 0) return;

    switch (light) {
      case "red":
        setLight("green");
        setCountDown(5);
        break;
      case "yellow":
        setLight("red");
        setCountDown(5);
        break;
      case "green":
        setLight("yellow");
        setCountDown(5);
        break;

    }
  }, [countDown, light]);

  return {
    // Props
    light,
    countDown,
    colors,

    // Computed
    percentage: (countDown / 5) * 100,

    // Methods
    greenLight: light === 'green' ? colors.green : 'bg-gray-500',
    yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
    redLight: light === 'red' ? colors.red : 'bg-gray-500',
  };
}

export default useTrafficLight;
