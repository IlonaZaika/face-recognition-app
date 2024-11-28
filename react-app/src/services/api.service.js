export const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000";

export const fetchUserData = (userId) => {
  return fetch(`${apiUrl}/profile/${userId}`)
    .then((response) => response.json())
    .catch((err) => console.log("Unable to fetch user data", err));
};
