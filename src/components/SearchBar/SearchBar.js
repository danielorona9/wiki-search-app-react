import React from "react";
import { Grid, Form, Icon, Input } from "semantic-ui-react";
class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onInputChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <Grid columns={12} centered>
        <Grid.Row>
          <Form onSubmit={this.onFormSubmit}>
            <Input
              icon={<Icon name="search" inverted circular link />}
              placeholder="Search..."
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </Form>
        </Grid.Row>
      </Grid>
    );
  }
}
export default SearchBar;
