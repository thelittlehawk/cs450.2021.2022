import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { fetchDataAll } from "../../actions/app";

const Home = ({ fetchDataAll, episodes, navigation }) => {
  useEffect(() => fetchDataAll(), []);

  const onPressHandler = (index) => {
    navigation.push("Details", {
      itemId: index,
    });
  }

  return (
    <View style={styles.container}>
      {episodes.map((episode, index) => (
        <View key={index} style={styles.usernameWrapper}>
          <Text>{episode.name}</Text>
          <TouchableOpacity onPress={
            (e) => onPressHandler(index)
          }>
            <div>
              DETAILS
            </div>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity onPress={
          (e) => navigation.push("BestEpisodes")
        }>
          <div>
            BEST EPPISODES
          </div>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    width: 200,
    height: 100,
    backgroundColor: "#ccc",
  },
  refreshButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: 20,
    height: 20,
    backgroundColor: "#ccc",
  },
  usernameWrapper: {
    display: "flex",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%"
  },
  detailsButton: {
    height: 20,
    width: 100
  }
});

const mapStateToProps = (state) => {
  return {
    episodes: state.app.episodes,
  };
};

const mapDispatchToProps = {
  fetchDataAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
