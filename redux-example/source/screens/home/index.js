import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { fetchDataAll } from "../../actions/app";

class Home extends Component {
  componentDidMount() {
    const { fetchDataAll } = this.props;
    fetchDataAll();
  }
  render() {
    const { data, navigation } = this.props;
    if (data) {
      console.log(data);
    }
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <TouchableOpacity
          onPress={() => navigation.push("Next")}
          style={styles.button}
        >
          <Text>Dispatch Action</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push("Next")}
          style={styles.button}
        >
          <Text>Go to NEXT page</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
});

const mapStateToProps = (state) => {
  return {
    data: state.app.data,
  };
};

const mapDispatchToProps = {
  fetchDataAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
