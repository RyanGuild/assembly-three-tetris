const arc = require("@architect/function");
const jwt = require("jsonwebtoken");
const uuid = require("uuid");
const jwtSecret = process.ENV.JWT_SECRET;

async function JwtCreate(request) {
  let body = request.body;
  let email = body.email || "anon";
  let isInstalled = body.isInstalled || false;
  let leaderboardID = uuid.v1();
  let token = jwt.sign(
    {
      email,
      isInstalled,
      leaderboardID
    },
    jwtSecret,
    {
      expiresIn: "3h"
    }
  );

  return {
    status: 200,
    headers: {
      cookie: token
    }
  };
}

exports.handler = arc.http.async(JwtCreate);
