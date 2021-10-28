export const store = {
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  setStation(stations) {
    this.setItem("stations", stations);
  },
  setLine(stations) {
    this.setItem("lines", stations);
  },
  getStation() {
    return JSON.parse(localStorage.getItem("stations"));
  },
  getLines() {
    return JSON.parse(localStorage.getItem("lines"));
  },
};
