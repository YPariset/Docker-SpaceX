const baseAPI = "https://api.spacexdata.com/v3";

const fetchInfos = () => {
  return fetch(`${baseAPI}/info`).then((res) => res.json());
};

const fetchRockets = () => {
  return fetch(`${baseAPI}/rockets`).then((res) => res.json());
};

const fetchRocket = (rocketId) => {
  return fetch(`${baseAPI}/rockets/${rocketId}`).then((res) => res.json());
};

const fetchCapsules = () => {
    return fetch(`${baseAPI}/capsules`).then((res) => res.json());
  };
  
const fetchCapsule = (capsuleId) => {
return fetch(`${baseAPI}/capsules/${capsuleId}`).then((res) => res.json());
};

const fetchLaunches = () => {
  return fetch(`${baseAPI}/launches?`).then((res) => res.json());
};

const fetchLaunch = (flightNumber) => {
  return fetch(`${baseAPI}/launches/${flightNumber}`).then((res) => res.json());
};

export { fetchInfos, fetchRockets, fetchRocket, fetchCapsules, fetchCapsule, fetchLaunches, fetchLaunch };