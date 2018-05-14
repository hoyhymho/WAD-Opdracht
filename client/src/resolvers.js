export const defaults = {
  currentUser: parseJwt()
};

function parseJwt() {
  const jwt = localStorage.getItem("jwt");
  if (!jwt) return null;
  const base64Url = jwt.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  const user = JSON.parse(window.atob(base64));
  user.__typename = "user";
  return user;
}

export const resolvers = {
  Query: () => ({}) //https://github.com/apollographql/apollo-link-state/issues/156
};
