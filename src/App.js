import React,{Component} from 'react';
import { Bitmap } from './components/bitmap'
import './App.css';

export default class App extends Component {
  
  componentDidMount(){
    Bitmap(100, 2, 300);
  }

render(){
  return (
    <div className="App">
     <canvas id="canv" width="300" height="300" />
    </div>
  );
}
}
