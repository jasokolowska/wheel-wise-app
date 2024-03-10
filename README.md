<p>
    <img src="https://img.shields.io/github/last-commit/jasokolowska/wheel-wise-app/main" alt="Last update">
    <img src="https://img.shields.io/github/commit-activity/t/jasokolowska/wheel-wise-app/main" alt="Number of commits">
    <img src="https://img.shields.io/github/contributors/jasokolowska/wheel-wise-app" alt="Number of contributors">
    <img src="https://img.shields.io/github/forks/jasokolowska/wheel-wise-app" alt="Number of forks">
    <img src="https://img.shields.io/github/stars/jasokolowska/wheel-wise-app" alt="Number of stars">
</p>

## WheelWise

WheelWise is a platform designed to empower users to participate in a variety of cycling events. Whether it's competitive races or leisurely group rides, WheelWise provides cyclists with the tools they need to engage in the cycling community.

![homepage](wheel-wise-client/src/assets/app-screens/homepage.png?raw=true "Homepage")
## Functionality

WheelWise will allow users to:

- Participate in various events organized by fellow cyclists.
- Create and organize their own events with organizer rights.
- Specify the type of event (competition or cycling trip).
- Set participant limits and define event distances.
- Create custom routes using Google Maps API integration.
- Define the difficulty level of the cycling trip.

With WheelWise, cyclists can easily find and join events that match their interests and skill levels. Organizers have the flexibility to tailor events to their preferences, ensuring a diverse range of cycling experiences for all users.

## Purpose
Development of this application was inspired by [100commits](https://100commitow.pl/repozytoria) competition. I have decided to build an application for creating cycling events.The application seems to be good to have different levels of implementation.
During development process I want to learn following technologies, libraries, external apis or techniques of clean code:
* Angular 17 (standalone components and all new stuff that was brought with this version)
* Java 17 and Spring Boot 3 - in java code I would like to use some design patterns, to better know them, so I will increase complexity of the logic, only because I want to try implement some design patterns)
* for security I want to use OAuth2 and KeyCloak (just to dive deep in this tools)
* I will also use GoogleMaps Api for creating a routes (on the beginning I will just import a route, but eventually I want to integrate my app with Google Maps Api)

## MVP 
In the first stage I want to implement following functionalities:
* User registration.
* User login.
* Adding new events (training sessions or competitions) by logged-in users.
* Displaying a list of all available events.
* Ability to browse event details (e.g., date, time, route, description).
* Ability for a user to register for selected events.

## Installation and details
Installation and details of implementations will be separated for frontend and backend:
* [Frontend](wheel-wise-client/README.md)
* [Backend](wheel-wise-api/README.md)

## Schedule and Milestones

| Milestone                               | Completion Date | Completed | Comment     |
|-----------------------------------------|-----------------|-----------|-------------|
| Project Setup and Basic Backend Development | 1.03.2024     | [X]       |             |
| Authentication and Authorization       | 5.03.2024      | [ ]       | Postponed   |
| Event Creation Feature                  | 8.03.2024      | [ ]       | Postponed   |
| Event Browsing Feature                  | 10.03.2024     | [ ]       | Postponed   |
| Event Registration Feature              | 12.03.2024     | [ ]       | Postponed   |
| Event Management Dashboard             | 15.03.2024     | [ ]       | Postponed   |
| Initial Frontend Setup                  | 18.03.2024     | [X]       |             |
| Frontend Implementation                | 27.03.2024     | [ ]       | In progress |
| UI Refinement and Styling              | 30.03.2024     | [ ]       |             |
| Testing and Deployment                  | 5.04.2024      | [ ]       |             |


## Contributing
I welcome contributions from the community. If you'd like to contribute to WheelWise, please fork the repository and submit a pull request with your changes.

## Special thanks

This project has been created thanks to https://devmentors.io/ 