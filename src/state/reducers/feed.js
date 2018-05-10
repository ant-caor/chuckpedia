import feedConstants from "../constants/feed";

const initialState = {
  fetchingJoke: false,
  fetchingJokeError: null,
  joke: null,
  jokeId: null
};

const feed = (state = initialState, action) => {
  switch (action.type) {
    case feedConstants.FETCHING_JOKE: {
      return {
        ...state,
        fetchingJoke: true
      };
    }

    case feedConstants.FETCHING_JOKE_SUCCES: {
      return {
        ...state,
        fetchingJoke: false,
        joke: action.joke,
        id: action.id
      };
    }

    case feedConstants.FETCHING_JOKE_FAILURE: {
      return {
        ...state,
        fetchingJoke: false,
        fetchingJokeError: action.error
      };
    }

    default:
      return state;
  }
};

export default feed;
