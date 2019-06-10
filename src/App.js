import React,{Component} from 'react';
import { Input } from 'semantic-ui-react'
import { Bitmap } from './components/bitmap'
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {dimension: '1'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({dimension: event.target.value})
    Bitmap(this.state.dimension-1, 5, 300);

  }
  componentDidMount(){
    Bitmap(this.state.dimension-1, 5, 300);
  }

render(){
  return (
    <div className="App">
      <div className="ui input">
        <Input type="text" value={this.state.dimension} onChange={this.handleChange}  />
        </div>
     <canvas id="canv" width="500" height="500" />
    </div>
  );
}
}
