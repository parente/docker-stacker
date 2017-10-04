import React, { Component } from 'react';
import VirtualizedSelect from 'react-virtualized-select'
import julia from './julia';

import './App.css';
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

const Card = ({ columns, header, title, children }) => (
  <div className="card">
    <div className="card-header text-muted">
      {header}
    </div>
    <div className="card-body">
      <h4 className="card-title">{title}</h4>
      {children}
    </div>
  </div>
);

const PDFSupport = ({enablePdf, onChange}) => {
  return (
    <div className="card-text">
      <label className="form-check-label">
        <input className="form-check-input"
          type="checkbox"
          name="enablePdf"
          checked={enablePdf}
          onChange={onChange} />
        <span>Install Pandoc and texlive to support conversion of notebooks to LaTeX and PDF files</span>
      </label>
    </div>
  );
}

const TextEditors = (props) => (
  <div className="card-text">
    <p>Install text editors for use in the terminal</p>
    <div className="form-check">
      <label className="form-check-label">
        <input className="form-check-input"
          type="checkbox"
          name="enableEmacs"
          checked={props.enableEmacs}
          onChange={props.onChange} />
        <span>Emacs</span>
      </label>
    </div>
    <div className="form-check">
      <label className="form-check-label">
        <input className="form-check-input"
          type="checkbox"
          name="enableJed"
          checked={props.enableJed}
          onChange={props.onChange} />
        <span>JED</span>
      </label>
    </div>
    <div className="form-check">
      <label className="form-check-label">
        <input className="form-check-input"
          type="checkbox"
          name="enableVim"
          checked={props.enableVim}
          onChange={props.onChange} />
        <span>Vim</span>
      </label>
    </div>
  </div>
);

const PackageSupport = (props) => (
  <div className="card-text">
    <p>{props.description}</p>
    <VirtualizedSelect
      name={props.name}
      placeholder="Select packages"
      multi={true}
      searchable={true}
      clearable={true}
      options={props.options}
      onChange={(item) => {
        props.onChange({target: {name: props.name, value: item}})
      }}
      value={props.selected}
    />
  </div>
);

const SparkSupport = ({ enableSpark, handleInputChange }) => {
  return (
    <div className="card-text">
      <label className="form-check-label">
        <input className="form-check-input"
          type="checkbox"
          name="enableSpark"
          checked={enableSpark}
          onChange={handleInputChange} />
        <span>Install Apache Spark 2.2.0 for Hadoop 2.7 or higher</span>
      </label>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableJuliaPackages: julia.packages
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log(event);
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
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
              <img className="App-logo" src="https://cdn.jupyter.org/notebook/5.0.0/base/images/logo.png" alt="Jupyter" />
            </a>
          </nav>
        </div>

        <div className="App-intro container">
          <div className="jumbotron">
            <div className="col-sm-10 mx-auto">
              <h1>Jupyter Docker Stacker</h1>
              <p>Construct your own Jupyter Dockerfile</p>
            </div>
          </div>
        </div>

        <div className="App-controls container">
          <div className="card-deck">
            <Card
              header="Libraries"
              title="Python Environment">
              <PackageSupport
                description="Install Python packages from https://conda-forge.github.io/feedstocks. The IPython kernel is always installed for you."
                name="python"
                options={this.state.pythonPackages}
                onChange={this.handleInputChange} />
            </Card>

            <Card
              header="Libraries"
              title="R Environment">
              <PackageSupport
                description="Install R packages from https://conda-forge.github.io/feedstocks. The IRKernel package will be installed for you if you choose at least one other package."
                name="r"
                options={this.state.rPackages}
                onChange={this.handleInputChange} />
            </Card>
          </div>

          <div className="card-deck">
            <Card
              header="Libraries"
              title="Julia Environment">
              <PackageSupport
                description="Install Julia packages from https://pkg.julialang.org/. The IJulia package will be installed for you if you choose at least one other package."
                name="juliaPackages"
                selected={this.state.juliaPackages}
                options={this.state.availableJuliaPackages}
                onChange={this.handleInputChange} />
            </Card>

            <Card
              header="Libraries"
              title="Scala Environment">
              <PackageSupport
                description="Install Scala kernels. Apache Spark will be installed for you if you choose at least one kernel."
                name="scala"
                packages={this.state.scalaPackages}
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
              title="LaTeX and PDF Conversion">
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
        </div>
      </div>
    );
  }
}

export default App;
