import React, { Component } from "react";
import moment from "moment";
import styled from "styled-components";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Card, Text, Button, ListItem } from "react-native-elements";

const users = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  }
];

const MainView = styled.ScrollView`
  display: flex;
`;

class Schedule extends Component {
  static navigationOptions = { header: null };

  render() {
    const { activeSchedule } = this.props;
    return (
      <MainView>
        <View style={styles.date}>
          <Text>Due Date</Text>
          <Text h4>{moment(activeSchedule.date).format("MMM Do YY")}</Text>
        </View>
        <View style={styles.date}>
          <Text>Recipient</Text>
          <Text h4>{`${activeSchedule.recipient.firstName} ${
            activeSchedule.recipient.lastName
          }`}</Text>
        </View>
        <Card containerStyle={{ padding: 5 }}>
          {activeSchedule &&
            activeSchedule.details.map((detail, i) => {
              return (
                <ListItem
                  key={i}
                  title={`${detail.member.firstName} ${detail.member.lastName}`}
                  subtitle={detail.member.phone}
                  leftAvatar={{
                    source: {
                      uri:
                        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }
                  }}
                  chevron
                />
              );
            })}
        </Card>
      </MainView>
    );
  }
}

const styles = StyleSheet.create({
  date: {
    display: "flex",
    alignItems: "center",
    paddingTop: 10
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  center: {
    textAlign: "center"
  }
});

function mapDispatchToProps(dispatch) {
  return {};
}

function mapStateToProps(state) {
  return {
    activeSchedule: state.activeSchedule
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule);
