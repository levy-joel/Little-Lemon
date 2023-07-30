import { fetchAPI } from "../Utils/api";

const initializeTimes = () => {
  const today = new Date();
  const initTimes = fetchAPI(today);

  return initTimes;
}

export default initializeTimes;