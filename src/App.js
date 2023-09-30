import logo from './logo.svg';
import './App.css';
import Button from "./atoms/button/Button";
import Square from "./atoms/square/Square";
import Text from "./atoms/text/Text";
import Title from "./atoms/title/Title";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    <Button onClick={() => {}} size={3} fontSize={2} label={'Test'}/>
    <Square size={5} fontSize={2}/>
    <Title color={'red'} fontSize={2} text={'TEST TITRE'} fontWeight={0.5}/>
    <Text color={'red'} fontSize={1.5} lineHeight={1} text={'test text blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla'}/>
    </div>
  );
}

export default App;
