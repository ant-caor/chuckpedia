import feed from "../constants/feed";

export const fetchJoke = () => {
  return function(dispatch, getState) {
    dispatch(fetchingJoke());

    fetch("https://api.chucknorris.io/jokes/random")
      .then(function(response) {
        return response.json();
      })
      .then(function(responseData) {
        dispatch(fetchingJokeSucces(responseData.value, responseData.id));
      })
      .catch(function(error) {
        dispatch(fetchingJokeFailure(error));
      });
  };
};

export const fetchingJoke = () => {
  return {
    type: feed.FETCHING_JOKE
  };
};

export const fetchingJokeSucces = (joke, id) => {
  return {
    type: feed.FETCHING_JOKE_SUCCES,
    joke,
    id
  };
};

export const fetchingJokeFailure = error => {
  return {
    type: feed.FETCHING_JOKE_FAILURE,
    error
  };
};
