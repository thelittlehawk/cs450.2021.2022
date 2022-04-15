import React, { Component, useEffect, useState } from "react";
import { render } from "react-dom";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { fetchDataAll } from "../../actions/app";

const Details = ({ route, users }) => { 
  const [user, setUser] = useState({});
  useEffect(() => {
    const { itemId } = route.params;
    setUser(users[itemId]);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Username: {user.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    users: state.app.users,
  };
};

const mapDispatchToProps = {
  fetchDataAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
