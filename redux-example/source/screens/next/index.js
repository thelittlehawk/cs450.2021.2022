import React, { Component, useEffect } from "react";
import { render } from "react-dom";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { fetchDataAll } from "../../actions/app";

const Next = ({ data, fetchDataAll }) => {
  useEffect(() => {
    fetchDataAll();
  }, []);

  return (
    <View style={styles.container}>
      <Text>This is NEXT page</Text>
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
    data: state.app.data,
  };
};

const mapDispatchToProps = {
  fetchDataAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Next);
