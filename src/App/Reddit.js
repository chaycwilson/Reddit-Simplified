
export const API_ROOT = '';

export const getSubPost = async (subreddit) => {
  const response = await fetch(`${API_ROOT}${subreddit}.json`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
}

export const getSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`)
  const json = await response.json();

  return json.data.children.map((sub) => sub.data);
}


export const getComments = async (permalink) => {
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map(sub => sub.data)
}


