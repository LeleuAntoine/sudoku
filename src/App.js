import './App.css';
import GamePage from "./template/gamePage/GamePage";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <GamePage/>
    </I18nextProvider>
  );
}

export default App;
