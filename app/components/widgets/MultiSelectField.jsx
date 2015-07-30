import React from 'react';
import Select from 'react-select';


class MultiSelectField extends React.Component {


  constructor() {
    super();
    this.state =  {
      value: []
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.render = this.render.bind(this);
  }

  handleSelectChange(value, values) {
    this.setState({ value: value });
    this.props.onUpdate(values);
  }

  render() {
    return (
      <span>
				<div>
          <label>{this.props.label}</label>
          <Select multi={true} value={this.state.value}
                  placeholder={this.props.hint} options={this.props.ops} onChange={this.handleSelectChange}/>
        </div>
			</span>
    );
  }
}

export default MultiSelectField;