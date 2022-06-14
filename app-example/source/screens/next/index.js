import React, { Component, useEffect, useState } from "react";
import { render } from "react-dom";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { fetchDataAll } from "../../actions/app";

const Details = ({ route, episodes }) => { 
  const [episode, setEpisode] = useState({});
  useEffect(() => {
    const { itemId } = route.params;
    setEpisode(episodes[itemId]);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Name: {episode.name}</Text>
      <Text>Summary: {episode.summary}</Text>
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
    episodes: state.app.episodes,
  };
};

const mapDispatchToProps = {
  fetchDataAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
