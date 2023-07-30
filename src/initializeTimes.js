import { fetchAPI } from "./api";

const initializeTimes = () => {
  const today = new Date();
  const initTimes = fetchAPI(today);

  return initTimes;
}

export default initializeTimes;