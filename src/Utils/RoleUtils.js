export const checkFirstVisit = () => {
  const firstVisit = localStorage.getItem("firstVisit");
  if (firstVisit === "true") {
    return false;
  }
  return true;
};
export const didUserLogin = (user) => {
  if (user.isLoggedIn) {
    return true;
  }
  return false;
};
