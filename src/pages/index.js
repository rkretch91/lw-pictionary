import React from 'react'

import Layout from '../components/layout'
import Form from '../components/form'
import jar from '../images/the-jar-project-big.png'
import { getFunName } from '../helpers'
import { CountdownCircleTimer } from "react-countdown-circle-timer";


class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      value: ""
    }
  }

  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  _onButtonClick() {
     setTimeout(() => {
        this.setState({ showComponent: false });
     }, 0);

     setTimeout(() => {
        this.setState({ showComponent: true });
     }, 500);
  }

  grabNameValue = () => {
    this.setState({value: getFunName()})
  }

  renderTime = value => {
  if (value === 0) {
    this.playAudio();
    return (
         <div className="timer">
          <p>Too late...</p>
        </div>
        )
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{value}</div>
      <div className="text">seconds</div>
    </div>
  );
};

  componentDidMount () {

    const script = document.createElement("script");

    script.src = "https://apps.elfsight.com/p/platform.js";
    script.async = true;

    document.body.appendChild(script);

  }

  render() {
    return (
      <Layout>
        <div className="task">
          <h1 className="task-name">{this.state.value}</h1>
        </div>
        <div className="main-jar">
          <button className="btn-red" onClick={() => {this.grabNameValue(); this._onButtonClick(); }}>Generate Word!</button>
        </div>
        {this.state.showComponent ?
        <div style={{paddingTop: '20px'}}>
        <CountdownCircleTimer
        isPlaying
        durationSeconds={75}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
        renderTime={this.renderTime}
        onComplete={() => [false, 1000]}
      /><audio className="audio-element">
          <source src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3"></source>
        </audio></div> : null
    }
      </Layout>
    )
  }
}



export default IndexPage
