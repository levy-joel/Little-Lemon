import { fetchAPI } from "../Utils/api";

const updateTimes = (state, action) => {
  let day = new Date(action.date);
  state = fetchAPI(day);

  return state;
};

export default updateTimes;