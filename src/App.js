import classes from "./App.module.css";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import MainRoute from "./Routes";

function App() {
  return (
    <div className={classes.app}>
      <ScrollToTop />
      <MainRoute />
    </div>
  );
}

export default App;
