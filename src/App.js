import React, { Component } from 'react';
import './App.css';

const Card = ({ columns, header, title, children }) => (
  <div className={`col-${columns}`}>
    <div className="card">
      <div className="card-header text-muted">
        {header}
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        {children}
      </div>
    </div>
  </div>
);

const PDFSupport = ({enablePdf, handleInputChange}) => {
  return (
    <div className="card-text">
      <label className="form-check-label">
        <input className="form-check-input"
          type="checkbox"
          name="enablePdf"
          checked={enablePdf}
          onChange={handleInputChange} />
        <span>Support conversion of notebooks to LaTeX and PDF files by installing Pandoc and texlive</span>
      </label>
    </div>
  );
}

const TextEditors = (props) => (
  <div className="card-text">
    <p>Add text editors editors for use in the terminal</p>
    <div className="form-check">
      <label className="form-check-label">
        <input className="form-check-input"
          type="checkbox"
          name="enableEmacs"
          checked={props.enableEmacs}
          onChange={props.handleInputChange} />
        <span>emacs</span>
      </label>
    </div>
    <div className="form-check">
      <label className="form-check-label">
        <input className="form-check-input"
          type="checkbox"
          name="enableJed"
          checked={props.enableJed}
          onChange={props.handleInputChange} />
        <span>jed</span>
      </label>
    </div>
    <div className="form-check">
      <label className="form-check-label">
        <input className="form-check-input"
          type="checkbox"
          name="enableVim"
          checked={props.enableVim}
          onChange={props.handleInputChange} />
        <span>vim</span>
      </label>
    </div>
  </div>
);

const PackageSupport = (props) => (
  <div className="card-text">
    <p>Packages to install for use in notebooks</p>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = event.target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
              <img className="App-logo" src="https://cdn.jupyter.org/notebook/5.0.0/base/images/logo.png" alt="Jupyter" />
            </a>
          </nav>
        </div>

        <div className="App-fullbar"></div>

        <div className="App-intro container">
          <div className="jumbotron">
            <div className="col-sm-10 mx-auto">
              <h1>Jupyter Docker Stacker</h1>
              <p>Construct your own Jupyter Dockerfile</p>
            </div>
          </div>
        </div>

        <div className="App-controls container">
          <div className="row">
            <Card
              columns="12"
              header="Libraries"
              title="Python Environment">
              <PackageSupport
                language="python"
                packages={this.state.pythonPackages}
                onChange={this.handleInputChange} />
            </Card>
          </div>

          <div className="row">
            <Card
              columns="12"
              header="Libraries"
              title="R Environment">
              <PackageSupport
                language="r"
                enableLanguage={this.state.enableR}
                packages={this.state.rPackages}
                onChange={this.handleInputChange} />
            </Card>
          </div>

          <div className="row">
            <Card
              columns="12"
              header="Libraries"
              title="Julia Environment">
              <PackageSupport
                language="julia"
                enableLanguage={this.state.enableJulia}
                packages={this.state.juliaPackages}
                onChange={this.handleInputChange} />
            </Card>
          </div>

          <div className="row">
            <Card
              columns="12"
              header="Libraries"
              title="Scala Environment">
            </Card>
          </div>

          <div className="row">
            <Card
              columns="6"
              header="Jupyter Notebook"
              title="LaTeX and PDF Conversion">
              <PDFSupport
                enablePdf={this.state.enablePdf}
                onChange={this.handleInputChange} />
            </Card>
            <Card
              columns="6"
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
            <Card
              columns="6"
              header="Libraries"
              title="Apache Spark">
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
