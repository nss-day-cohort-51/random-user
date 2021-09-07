import { fetchRandomUser } from "./data/datamanager.js";

const info = fetchRandomUser().then((apiUser) => {
  console.log(apiUser);
});
