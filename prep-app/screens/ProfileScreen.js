import { View, Text, StyleSheet, TextInput, Button } from "react-native-web";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
    },
    text: {
        color: 'white',
        fontSize: 100
    }
})

const HomeScreen = () => {
    const loginClicked = () => {
        // const response = await fetch('http://localhost:3333/login', {
        //     method: "POST",
        //     body: {
        //         username: 'user',
        //         password: 'pass'
        //     }
        // });
        // const json = await response.json();
    }
    
    return(
        <View style={styles.container}>
            <Text>Username:</Text>
            <TextInput />
            <Text>Password:</Text>
            <TextInput secureTextEntry={true} />
            <Button title="LOGIN" onPress={() => loginClicked()}>
            </Button>
        </View>
    )
}

export default HomeScreen