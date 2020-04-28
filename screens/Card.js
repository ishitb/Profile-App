import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableWithoutFeedback,
} from "react-native";

export class Info extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            val: props.val,
            focused: props.focused,
            color: "#aaa",
        };
    }

    componentDidMount = () => {
        this.changeCol();
    };

    changeCol = () => {
        this.state.focused == true
            ? this.setState({ color: "#d08" })
            : this.setState({ color: "#aaa" });
    };

    handleChange = (e) => {
        this.setState({
            val: e
        })
    }

    render() {
        return (
            <View style={styles.detail}>
                {/* <TouchableWithoutFeedback
                    onPress={() => {
                        this.setState({
                            focused: !this.state.focused,
                        });
                        this.changeCol();
                    }}
                >
                    <View> */}
                        <Text style={{ ...styles.title, color: this.state.color }}>
                            {this.state.title}
                        </Text>
    
                        {/* <Text
                            style={{
                                ...styles.value,
                                borderBottomColor: this.state.color,
                            }}
                        >
                            {this.state.val}
                        </Text> */}
                        <TextInput
                            value={this.state.val}
                            onChangeText={this.handleChange}
                            style={{
                                ...styles.value,
                                borderBottomColor: this.state.color,
                            }}
                        />
                    {/* </View>
                </TouchableWithoutFeedback> */}
            </View>
        );
    }
}

export default class Card extends Component {
    render() {
        return (
            <View style={styles.card}>
                <Text style={styles.heading}>About</Text>
                <Info title="Current Title" val="" focused={true} />
                <Info title="Current Company" val="IBM India" focused={false} />
                <Info
                    title="Total Years of Experience"
                    val="10 Years"
                    focused={false}
                />
                <Info title="Location" val="Bangalore, India" focused={false} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        padding: 40,
        paddingBottom: 15,
        marginBottom: 13,
        justifyContent: "space-between",
        borderRadius: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 25,
    },
    detail: {
        marginVertical: 10,
    },
    title: {
        fontSize: 19,
    },
    value: {
        fontSize: 22,
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
});
