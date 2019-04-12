import React from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Footer, Content, Icon, Button, Item, Input, Text, ListItem, List, Spinner, Thumbnail } from 'native-base';

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
            title: navigation.getParam("title1"),
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
                title1: x.data.title,
                loading: false
            });
        });
    }

    displayNews() {
        return this.state.aricles.map((val, i) => {
            var title1=val.articles.title;
            var desc1=val.articles.desc;
            var link1=val.articles.link;
            var website1=val.articles.website;
            var source1=val.articles.source;
            var date1=val.articles.date;
            var imgno=val.articles.image;

            return (
                <ListItem key={i} avatar onPress={() => {
                    this.props.navigation.navigate("Page3", {
                        title1: title1,
                        desc1: desc1,
                        link1: link1,
                        website1: website1,
                        source1: source1,
                        date1: date1,
                        imgno: imgno
                        
                    })
                }}>
                    <Left>
                        <Thumbnail square source={{ uri: imgno }} />
                    </Left>
                    <Body>
                        <Text>{title1}</Text>
                        <Text note>{desc1}</Text>
                    </Body>
                    <Right>
                    </Right>
                </ListItem>
            )
        })
    }

    render() {
        return (
            <Container>
                <ScrollView>
                    <List>
                        {this.state.loading ? <Spinner /> : this.state.title1 ? this.displayNews() : <Text></Text>}
                    </List>
                </ScrollView>
            </Container>
        )
    }
}

export default Page2;