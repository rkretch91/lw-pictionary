import React from 'react'

import Layout from '../components/layout'
import Form from '../components/form'
import jar from '../images/the-jar-project-big.png'
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
          <h1 className="task-name">{this.state.value}</h1>
        </div>
        <div className="main-jar">
          <button className="btn-red" onClick={this.grabNameValue}>Generate Word!</button>
        </div>
      </Layout>
    )
  }
}



export default IndexPage
