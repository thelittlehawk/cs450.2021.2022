import { View, Text, StyleSheet, TouchableOpacity } from "react-native-web";
import { connect } from "react-redux";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 100
    },
    friendsList: {},
    firendsListItem: {},
    firendsListItemText: {}
})

const FavouriteScreen = ({ friends }) =>
    <View style={styles.container}>
        <Text>Favourite Friends</Text>
        <View style={styles.friendsList}>
            {friends.map((x, index) =>
                <View key={index} style={styles.firendsListItem}>
                    <Text style={styles.firendsListItemText}>{x.name}</Text>
                    <TouchableOpacity onPress={() => onPress(x)}>
                        <Text>FAV</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    </View>


const mapStateToProps = (state) => ({
    friends: state.friends.favFriends
})

export default connect(mapStateToProps, null)(FavouriteScreen);