import React, { Component } from "react";
import moment from "moment";
import styled from "styled-components";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { getUser } from "../../actions/user";
import { joinGroup, start, viewSchedule } from "../../actions/group";
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

class Home extends Component {
  constructor(props) {
    super(props);
    this.join = this.join.bind(this);
    this.start = this.start.bind(this);
  }
  static navigationOptions = { header: null };
  componentDidMount() {
    console.log(this.props);
    this.props.getUser();
  }
  join() {
    this.props.join(this.props.activeGroup.code);
  }
  start() {
    this.props.start(this.props.activeGroup.code);
  }

  render() {
    const { user, activeGroup } = this.props;
    let started = activeGroup.paymentSchedule.length > 0;
    let isAdmin = activeGroup.admin.email === user.email;
    let isMember = activeGroup.members
      .map(item => item.email)
      .includes(user.email);
    return (
      <MainView>
        <View style={styles.containerStyle}>
          <View style={styles.row}>
            <View>
              <Text h4> Group Admin </Text>
              <Text style={styles.center}>
                {" "}
                {`${activeGroup.admin.firstName} ${
                  activeGroup.admin.lastName
                }`}{" "}
              </Text>
            </View>
            <View>
              <Text h4> Amount </Text>
              <Text style={styles.center}> &#8358; {activeGroup.amount}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <Text h4> Cycle length </Text>
              <Text style={styles.center}> 12 </Text>
            </View>
            <View>
              <Text h4> Current Cycle </Text>
              <Text style={styles.center}> 4 </Text>
            </View>
          </View>
        </View>
        {isAdmin && !started && (
          <View>
            <Button
              title="Start Group"
              type="solid"
              onPress={this.start}
              containerStyle={{
                width: "100%",
                marginTop: 10,
                borderColor: "orange"
              }}
            />
          </View>
        )}
        {isMember ? (
          <View>
            <Button
              title="Make Payment"
              type="solid"
              containerStyle={{
                width: "100%",
                marginTop: 10,
                borderColor: "orange"
              }}
            />
          </View>
        ) : (
          <View>
            <Button
              title="Join Group"
              onPress={this.join}
              type="solid"
              containerStyle={{
                width: "100%",
                marginTop: 10,
                borderColor: "orange"
              }}
            />
          </View>
        )}
        <View>
          <Text h4>Schedule</Text>
          <Card containerStyle={{ padding: 0 }}>
            {activeGroup &&
              activeGroup.paymentSchedule.map((schedule, i) => {
                return (
                  <ListItem
                    key={i}
                    onPress={() =>
                      this.props.viewSchedule(
                        schedule,
                        this.props.navigation.navigate
                      )
                    }
                    title={moment(schedule.date).format("MMM Do YY")}
                    subtitle={`${schedule.recipient.firstName} ${
                      schedule.recipient.lastName
                    }`}
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
        </View>
        <View>
          <Text h4>Members</Text>
          <Card containerStyle={{ padding: 0 }}>
            {activeGroup &&
              activeGroup.members.map((member, i) => {
                return (
                  <ListItem
                    key={i}
                    title={`${member.firstName} ${member.lastName}`}
                    subtitle={member.phone}
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
        </View>
      </MainView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    padding: 10
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
  return {
    getUser: () => dispatch(getUser()),
    join: code => dispatch(joinGroup(code)),
    start: code => dispatch(start(code)),
    viewSchedule: (schedule, navigate) =>
      dispatch(viewSchedule(schedule, navigate))
  };
}

function mapStateToProps(state) {
  return {
    activeGroup: state.activeGroup,
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
