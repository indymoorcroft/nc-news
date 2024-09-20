export const secondsToString = (seconds) => {
  const units = [
    { name: "year", seconds: 365 * 24 * 3600 },
    { name: "day", seconds: 24 * 3600 },
    { name: "hour", seconds: 3600 },
    { name: "minute", seconds: 60 },
    { name: "second", seconds: 1 },
  ];

  const time = [];

  for (let unit of units) {
    const value = Math.floor(seconds / unit.seconds);
    if (value > 0) {
      time.push(`${value} ${unit.name}${value > 1 ? "s" : ""}`);
      seconds %= unit.seconds;
    }
  }

  return time[0];
};
