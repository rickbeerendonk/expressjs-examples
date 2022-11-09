/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import express from "express";

const app = express();
const port = 3000;

/* Middleware */

// Read req.body as JSON
app.use(express.json());

/* --- TEAMS --- */

class Team {
  private static nextId = 1;
  private static getNextId() {
    return this.nextId++;
  }

  public id: number;

  constructor(public name: string) {
    this.id = Team.getNextId();
  }
}

let teams: Team[] = [
  new Team("Alexandra"),
  new Team("Benjaming"),
  new Team("Charlotte"),
];

function getTeamIndex(teamId: number) {
  return teams.findIndex((team) => team.id === teamId);
}

// Homepage

app.get("/", (req, res) => {
  res.send("Team API is at path /teams");
});

// Methods for different HTTP verbs

app.get("/teams", (req, res) => {
  console.log("GET ALL");

  res.json(teams);
});

app.get("/teams/:id", (req, res) => {
  console.log(`GET: ${req.params.id}`);

  const teamIndex = getTeamIndex(Number(req.params.id));
  if (teamIndex < 0) {
    res.status(404).send("Not Found");
  } else {
    res.json(teams[teamIndex]);
  }
});

app.delete("/teams/:id", (req, res) => {
  console.log(`DELETE: ${req.params.id}`);

  const teamIndex = getTeamIndex(Number(req.params.id));
  if (teamIndex < 0) {
    res.status(404).send("Not Found");
  } else {
    // Delete item in the teams array:
    teams.splice(teamIndex, 1);
    res.status(200).json("Deleted");
  }
});

app.post("/teams", (req, res) => {
  console.log(`POST: ${JSON.stringify(req.body)}`);

  const team = req.body as Team;
  teams.push(new Team(team.name));

  res.status(200).json("Success");
});

app.put("/teams/:id", (req, res) => {
  console.log(`PUT: ${JSON.stringify(req.body)}`);

  const team = req.body as Team;
  const teamIndex = getTeamIndex(Number(req.params.id));
  if (teamIndex < 0) {
    res.status(404).send("Not Found");
  } else {
    // Replace item in the teams array:
    teams.splice(teamIndex, 1, team);
    res.status(200).json("Success");
  }
});

/* --- START --- */

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Express app listening at ${url}`);
});
