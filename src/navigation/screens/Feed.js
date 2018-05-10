import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import { fetchJoke } from "../../state/actions/feed";
import CardItem from "../../components/CardItem";
import Colors from "../res/Colors";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      fetchingJokes: false,
      fetchingJokesError: false,
      page: 0
    };
  }

  componentDidMount() {
    this.handleLoadJokesPage();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.feed.joke != null) {
      var joke = new Object();
      joke.content = nextProps.feed.joke;
      joke.id = nextProps.feed.id;
      this.setState({
        jokes: [...this.state.jokes, joke]
      });
    }

    if (nextProps.feed.fetchingJoke != this.state.fetchingJokes) {
      this.setState({
        fetchingJokes: nextProps.feed.fetchingJoke
      });
    }
  }

  handleLoadJokesPage = () => {
    this.setState({
      page: this.state.page + 1
    });

    for (var i = 0; i < 10; i++) {
      this.props.fetchJoke();
    }
  };

  handleLoadMoreJokes = () => {
    this.handleLoadJokesPage();
  };

  onPressItem = id => {};

  render() {
    return (
      <FlatList
        data={this.state.jokes}
        renderItem={({ item }) => (
          <CardItem
            joke={`${item.content}`}
            id={`${item.id}`}
            onPress={() => {
              this.props.navigation.navigate("Joke", {
                itemId: `${item.id}`,
                joke: `${item.content}`
              });
            }}
          />
        )}
        keyExtractor={item => `${item.id}`}
        onEndReached={this.handleLoadMoreJokes}
        ListFooterComponent={this.renderFooter}
      />
    );
  }
}
renderFooter = () => {
  if (!this.state.fetchingJokes) return null;

  return (
    <View
      style={{
        paddingVertical: 20
      }}
    >
      <ActivityIndicator animating size="large" />
    </View>
  );
};
const mapStateToProps = state => {
  return {
    feed: state.feed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchJoke: () => dispatch(fetchJoke())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
