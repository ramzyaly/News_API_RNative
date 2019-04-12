import React from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Footer, Content, Icon, Button, Item, Input, Text, ListItem, List, Spinner, Thumbnail } from 'native-base';

class Page1 extends React.Component {

    state = {
        news: "",
        loading: false
    }

    static navigationOptions = {
        title: "Today News",
        headerStyle: {
            backgroundColor: "purple"
        },
        headerTintColor: "white"
    }

    componentDidMount() {
        this.setState({
            loading: true
        });

        axios.get('https://gapi.xyz/api/v2/?q=example&token=9d25aadde767a3e99cbf6f835be22498').then((x) => {
            this.setState({
                news: x.data.articles,
                loading: false
            });
        });
    }

    displayArticles() {
        return this.state.news.map((val, i) => {
            var title1=val.articles.title;
            var desc1=val.articles.desc;
            var link1=val.articles.link;
            var website1=val.articles.website;
            var source1=val.articles.source;
            var date1=val.articles.date;
            var imgno=val.articles.image;

            return (
                <ListItem key={i} avatar onPress={() => {
                    this.props.navigation.navigate("Page2", {
                        title1: title1,
                        desc1: desc1
                    })
                }}>
                    <Left>
                        <Thumbnail source={{ uri: imgno }} />
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
                        {this.state.loading ? <Spinner /> : this.state.news ? this.displayArticles() : <Text></Text>}
                    </List>
                </ScrollView>
            </Container>
        )
    }
}

export default Page1;