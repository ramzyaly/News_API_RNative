import React from 'react';
import axios from 'axios';
import { Image, ScrollView } from 'react-native';
import { Container, Card, CardItem, Header, Left, Body, Right, Title, Footer, Content, Icon, Button, Item, Input, Text, ListItem, List, Spinner, Thumbnail } from 'native-base';

class Page2 extends React.Component {

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
            title: navigation.getParam("back"),
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
            this.setState ({
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
                        <Body>
                            <Text>{this.props.navigation.getParam("title1")}</Text>
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
                    <Body>
                        <Text style={{ fontSize: 12 }}>{this.props.navigation.getParam("date1")}</Text>
                        <Text style={{ fontSize: 12 }}>{this.props.navigation.getParam("desc1")}</Text>
                        </Body>
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

export default Page2;