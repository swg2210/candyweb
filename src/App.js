import logo from './logo.svg';
import './App.css';
import {Button, Progress} from 'semantic-ui-react'

function App() {
  return (
    <div>
        <p>안녕하세요</p>
        <Button primary>가나다</Button>
        <Progress percent = {66} />
    </div>
  );
}

export default App;
