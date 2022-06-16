import { useEffect } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native-web";
import { connect } from "react-redux";
import { addFriendToFav } from "./../redux/actions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        alignItems: 'left',
        padding: 20
    },
    text: {
        color: 'white',
        fontSize: 50,
        border: '1px solid white',
        padding: 5
    },
    firendsListItem: {
        height: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: "row"
    },
    firendsListItemText: {
        fontSize: 30,
        color: 'white',
    }
})

const HomeScreen = ({ friends, addFriendToFav }) => {

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3333')
            const json = await response.json();
            console.log(json);
        }
        fetchData()
    }, [])

    const onPress = (friend) => addFriendToFav(friend)

    return <View style={styles.container}>
        <Text style={styles.text}>
            Friends ({friends.list.length})
        </Text>
        <View style={styles.friendsList}>
            {friends.list.map((x, index) =>
                <View key={index} style={styles.firendsListItem}>
                    <Text style={styles.firendsListItemText}>{x.name}</Text>
                    <TouchableOpacity onPress={() => onPress(x)}>
                        <Text>FAV</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    </View>
}

const mapStateToProps = state => ({
    friends: state.friends,
})

const mapDispatchToProps = dispatch => ({
    addFriendToFav: (friend) => dispatch(addFriendToFav(friend))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)