// 4000751552e1466bab4776dc366d6cd5
import './App.css';
// rcc for class based components
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  // y="Tiwari Sir";
  // state={
  //   progress:30
  // }
  // setProgress=(progress)=>{
  //   this.setState.apply({progress:progress})
  // }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        {/* <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      /> */}
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress}  key="general"  country="in" category="general" />}></Route>
          <Route path="/general" element={<News setProgress={this.setProgress}  key="general"  country="in" category="general" />}></Route>
          <Route path="/technology" element={<News setProgress={this.setProgress}  key="technology"  country="in" category="technology"/>}></Route>
          <Route path="/business" element={<News setProgress={this.setProgress}  key="business"  country="in" category="business"/>}></Route>
          <Route path="/sports" element={<News setProgress={this.setProgress}  key="sports" country="in"category="sports"/>}></Route>
          <Route path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" country="in"category="entertainment"/>}></Route>
          <Route path="/health" element={<News setProgress={this.setProgress}  key="health" country="in"category="health"/>}></Route>
          <Route path="/science" element={<News setProgress={this.setProgress}  key="science" country="in"category="science"/>}></Route>
        </Routes>
        {/* Hello Yogesh Tiwari Sir !!!!!{this.y} */}
        </Router>
      </div>
    )
  }
}

