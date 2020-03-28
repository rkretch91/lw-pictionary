import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Form from '../components/form'
import jar from '../images/the-jar-project-big.png'
import Insta from '../components/instafeed'
import { getFunName } from '../helpers'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  grabNameValue = () => {
    this.setState({value: getFunName()})
  }

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
          <h2 className="task-name">{this.state.value}</h2>
        </div>
        <div className="main-jar">
          <img src={jar} alt="jar-project-logo" onClick={this.grabNameValue}/>
          <p>Instructions: Click the jar once a day for your daily digital task. Each task will encourage you to do something nice for others during this time when we need it. Do it, record it, repeat.</p>
        </div>
        <div className="main-jar">
          <Form/>
          <Link to="/about">About The Jar Project</Link>
        </div>
        <Insta/>
      </Layout>
    )
  }
}



export default IndexPage
