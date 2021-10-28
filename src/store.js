export const store = {
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  setStation(stations) {
    this.setItem("stations", stations);
  },

  getStation() {
    return JSON.parse(localStorage.getItem("stations"));
  },
};
