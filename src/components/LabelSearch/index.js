import React, { Component } from 'react';
import './index.css';

class LabelSearch extends Component {
  
    state = {
      searchQuery: '',
      filteredLabels: [],
    };
  

  handleInputChange = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredLabels = this.props.labels.filter(label =>
      label.name.toLowerCase().includes(searchQuery)
    );

    this.setState({ searchQuery, filteredLabels });
  };

  handleLabelSelect = (label) => {
    this.setState({ searchQuery: label.name, filteredLabels: [] });
    this.props.onLabelSelect(label);
  };

  render() {
    const { searchQuery, filteredLabels } = this.state;

    return (
      <div className="label-search">
        <input
          type="text"
          value={searchQuery}
          onChange={this.handleInputChange}
          placeholder="Search or select a label..."
        />
        {filteredLabels.length > 0 && (
          <ul className="dropdown">
            {filteredLabels.map(label => (
              <li key={label.id} onClick={() => this.handleLabelSelect(label)}>
                {label.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default LabelSearch;
