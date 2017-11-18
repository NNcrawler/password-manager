import React, { Component } from 'react';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkIcon: 'fa-check',
      formColor: 'is-success',
      isNeutral: true,
    }
  }

  setForm() {
    if (this.props.isRight === false) {
      this.setState({
        checkIcon: 'fa-warning',
        formColor: 'is-danger',
      })
    } else {
      this.setState({
        checkIcon: 'fa-check',
        formColor: 'is-success',
      })
    }
  }

  toggleNeutral() {
    this.setState({
      isNeutral: !this.state.isRight,
    });
  }

  componentWillReceiveProps() {
    this.setForm();
  }

  componentDidMount() {
    this.setForm();
  }

  render() {
    return (
      <div>
        <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control has-icons-left has-icons-right">
          <input className={`input ${this.state.formColor}`} type="text" placeholder={this.props.placeholder} />
          <span className="icon is-small is-left">
            <i className={`fa ${this.props.fa}`}></i>
          </span>
          <span className="icon is-small is-right">
            <i className={`fa ${this.state.checkIcon}`}></i>
          </span>
        </div>
        </div>
      </div>
    )
  }
}

export default FormInput