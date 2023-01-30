import { config } from "dotenv";
import { log } from "node:console";
import axios from "axios";

config();

async function getMovie(title) {
  try {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&t=${title}`
    );

    return data;
  } catch (error) {
    log(error);
  }
}

getMovie("titanic").then((data) => log(data));

// end of my changes

function myChanges () {
console.log('This is the main change');
}

myChanges();
