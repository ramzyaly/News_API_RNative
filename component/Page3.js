import React from 'react';
import axios from 'axios';
import { Image, ScrollView } from 'react-native';
import { Container, Card, CardItem, Header, Left, Body, Right, Title, Footer, Content, Icon, Button, Item, Input, Text, ListItem, List, Spinner, Thumbnail } from 'native-base';

class Page3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news: "",
            loading: false,
            title1: this.props.navigation.getParam("title1")
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam("desc1"),
            headerStyle: {
                backgroundColor: "purple"
            },
            headerTintColor: "white"
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        });


        axios.get(`https://gapi.xyz/api/v2/${this.state.articles}`).then((x) => {
            this.setState({
                title1: x.data.title[0],
                loading: false
            });
        });
    }

    displayDetails() {
        return (
            <Card transparent style={{ flex: 0, width: 350, alignSelf: "center", marginTop: 10 }}>
                <CardItem>
                    <Left>
                        <Thumbnail style={{ maxWidth: 30, maxHeight: 30 }} source={{ uri: this.props.navigation.getParam("imgno") }} />
                        <Body>
                            <Text>{this.props.navigation.getParam("title1")}</Text>
                            <Text note>{this.props.navigation.getParam("desc1")}</Text>
                        </Body>
                    </Left>
                    <Right>
                    </Right>
                </CardItem>
                <CardItem>
                    <Body>
                        <Image source={{ uri: this.props.navigation.getParam("imgno") }} style={{ height: 200, width: "100%", flex: 1 }} />
                    </Body>
                </CardItem>
                <CardItem>
                    <Left>
                        <Text style={{ fontSize: 12 }}>{this.props.navigation.getParam("desc1")}</Text>
                    </Left>
                </CardItem>
            </Card>
        )
    }

    render() {
        return (
            <Container>
                <ScrollView>
                    {this.displayDetails()}
                </ScrollView>
            </Container>
        )
    }
}

export default Page3;