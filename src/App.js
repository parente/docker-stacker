import React, { Component } from 'react';

import Card from './components/Card';
import PackageSupport from './components/PackageSupport';
import PDFSupport from './components/PDFSupport';
import SparkSupport from './components/SparkSupport';
import TextEditors from './components/TextEditors';

import julia from './datasets/julia';
import python from './datasets/python';
import r from './datasets/r';
import scala from './datasets/scala';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleGenerate = this.handleGenerate.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleGenerate(event) {
    console.log('TODO');
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    console.log('setting state:', name, value)
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header sticky-top container">
          <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
            <a className="navbar-brand" href="#">
              <img className="App-logo" src="https://cdn.jupyter.org/notebook/5.2.0/base/images/logo.png" alt="Jupyter logo" />
            </a>
            <button className="btn btn-sm btn-outline-jupyter" onClick={this.handleGenerate}>Generate</button>
          </nav>
        </div>

        <div className="App-intro container">
          <div className="jumbotron">
            <div className="col-sm-10 mx-auto">
              <h1>Jupyter Docker Stacker</h1>
              <p>Build your own Jupyter Dockerfile</p>
            </div>
          </div>
        </div>

        <div className="App-controls container">
          <div className="card-deck">
            <Card
              header="Libraries"
              title="Python Environment">
              <p>Install Python packages from <a href="https://conda-forge.github.io/feedstocks" target="_blank">https://conda-forge.github.io/feedstocks</a>. The IPython kernel is always installed for you.</p>
              <PackageSupport
                name="pythonPackages"
                selected={this.state.pythonPackages}
                options={python.packages}
                onChange={this.handleInputChange} />
            </Card>

            <Card
              header="Libraries"
              title="R Environment">
              <p>Install R packages from <a href="https://conda-forge.github.io/feedstocks" target="_blank">https://conda-forge.github.io/feedstocks</a>. The IRKernel package will be installed for you if you choose at least one other package.</p>
              <PackageSupport
                name="rPackages"
                selected={this.state.rPackages}
                options={r.packages}
                onChange={this.handleInputChange} />
            </Card>
          </div>

          <div className="card-deck">
            <Card
              header="Libraries"
              title="Julia Environment">
              <p>Install Julia packages from <a href="https://pkg.julialang.org/" target="_blank">https://pkg.julialang.org/</a>. The IJulia package will be installed for you if you choose at least one other package.</p>
              <PackageSupport
                name="juliaPackages"
                selected={this.state.juliaPackages}
                options={julia.packages}
                onChange={this.handleInputChange} />
            </Card>

            <Card
              header="Libraries"
              title="Scala Environment">
              <p>Install Scala kernels. Apache Spark will be installed for you if you choose at least one kernel.</p>
              <PackageSupport
                name="scalaPackages"
                selected={this.state.scalaPackages}
                options={scala.packages}
                onChange={this.handleInputChange} />
            </Card>
          </div>

          <div className="card-deck">
            <Card
              header="Libraries"
              title="Apache Spark">
              <SparkSupport
                enableSpark={this.state.enableSpark}
                onChange={this.handleInputChange} />
            </Card>

            <Card
              header="Jupyter Notebook"
              title="LaTeX &amp; PDF Support">
              <PDFSupport
                enablePdf={this.state.enablePdf}
                onChange={this.handleInputChange} />
            </Card>

            <Card
              header="Terminal"
              title="Text Editors">
              <TextEditors
                enableEmacs={this.state.enableEmacs}
                enableJed={this.state.enableJed}
                enableVim={this.state.enableVim}
                onChange={this.handleInputChange} />
            </Card>
          </div>

          <div className="row">
            <button className="btn btn-block btn-outline-jupyter" onClick={this.handleGenerate}>Generate</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
