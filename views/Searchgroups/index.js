import React, { Component } from "react";
import { View } from "react-native";
import { SearchBar, Button } from "react-native-elements";
import { CreateGroupForm } from "./creategroup";
import { connect } from "react-redux";
import { createGroup, searchGroup } from "../../actions/group";
import { Theme } from "../../components/theme";

class SearchGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.submit = this.submit.bind(this);
    this.search = this.search.bind(this);
  }
  static navigationOptions = { header: null };

  updateSearch = search => {
    this.setState({ search });
  };

  submit(data) {
    this.props.createGroup(data, this.props.navigation.navigate);
  }
  search() {
    this.props.searchGroup(this.state.search, this.props.navigation.navigate);
  }
  render() {
    const { search } = this.state;

    return (
      <View
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <SearchBar
          placeholder="Group Number"
          onChangeText={this.updateSearch}
          value={search}
          containerStyle={{
            margin: 15,
            backgroundColor: Theme.PrimaryColor,
            borderBottomColor: "#fff",
            borderTopColor: "#fff"
          }}
          rounded
        />
        <Button
          title="Search Groups"
          type="solid"
          onPress={this.search}
          containerStyle={{
            width: "90%",
            margin: 10
          }}
        />
        <CreateGroupForm submit={this.submit} />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createGroup: (groupObj, navigate) =>
      dispatch(createGroup(groupObj, navigate)),
    searchGroup: (groupCode, navigate) =>
      dispatch(searchGroup(groupCode, navigate))
  };
}

function mapStateToProps(state) {
  return {
    loading: state.loading
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchGroup);
