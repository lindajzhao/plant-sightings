# Project Description

An app to record observations of plants, and get more information about them.

## MVC Goals

1. User should be able access plant details by searching by plant name (https://trefle.io/ API)
2. Users should be able to create and delete logs containing: plant name (or trefle ID), location, note, date & time (+ photos as stretch goal).
3. Users should be able to delete previous records.

## Stretch Goals

1. Allow users to upload photo(s)
2. Add filters by date range, location, plant name
3. Add Google location API, so that users can type in their location and I can save the lat/long
4. Use PlantNet API instead of trefle, which identifies plants using photos
## Requirements

- Clean, organized, and properly indented code
- A backend server using Express
- A frontend using React
- Data served from the backend over an JSON API coming from either
  - a Mongo database
  - or, a 3rd-party API (restructured for your own project's needs)
- Using best practices for,
  - authenticating your backend API
  - validating or sanitizing user input
  - managing 3rd-party API keys securely
- Project is deployed live online
- Includes the text "Created at Juno College" a link to the [Juno website](https://junocollege.com) somewhere (typically in the footer).


## Usage

> Start API server

```
$ npm run start:server
```

> Start Webpack Server

```
$ npm run start:client
```
