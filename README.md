# Band-Match: Bringing bands and venues together!

## Purpose
This is a personal project that I am using to continue practicing the technical skills learnt during the DevAcademy Aotearoa bootcamp that I graduated from in October 2022.

It is a full stack app, built by me, using Javascipt, React/Redux and a Sqlite database.

Will probably never be fully functional. It's really just a place for me to continue to experiment and play!


## The idea
As a keen muso, I know that it can sometimes be hard for bands to find gigs.
Conversely, it can be hard for venues to find bands.

Band-Match has been conceived to solve these problems, by helping bands and venues find each other!

Currently it just runs locally, so it's purely hypothetical at this stage.  I'll look at deploying to a server eventually (maybe!)

## User stories
As the Product Owner of Band-Match, I put myself into the shoes of the potential users of the app, to come up with the types of things they might want to use it for.

This is what I have come up with so far ...

* As a band, I want to be able to save the details about my band
* As a venue, I want to be able to save the details about my venue
* As a band, I want to be able to maintain the details about my band
* As a venue, I want to be able to maintain the details about my venue
* As a venue, I want to be able to post an event
* As a band, I want to be able to create a gig wanted post
* As a venue, I want to be able to search the gig wanted posts to find a band for my event
* As a band, I want to be able to search the event posts, to find a venue to play at
* As a band, I want to be able to advertise for a new band member
* As a visitor to the site, I want to be able to see a list of gigs that are on for a date range
* As a visitor, I want to be able to post reviews about events that I've been to

## Current functionality
The application currently has the following features:
* All the bands currently in the database are displayed, along with any details (e.g. genre, number of members)
* A form is displayed that can be used to add a new band and save it to the database. 
* Once a new band is saved, the list of bands is automatically refreshed, to include that new band
* You can delete a band and it will be removed from the database and the list will refresh, with the deleted band no longer appearing
* You can add a new Venue and save it to the database

## Known issues
* None at this point

## Testing
Testing is a really important skill to develop. I have learnt about how to test different parts of the stack, using Jest, SuperTest, Nock and Testing Library, so I'm trying to practice this here, by implementing different types of tests.

So far I have set up tests for the following:

- Server routes - have used Jest to test the following:
  - GET route (api/v1/bands) returns the expected bands records
  - GET route (api/v1/bands) returns a status 500 error when there has been a problem

- Database functions:
  - getBands - returns the expected records from the seeded band table in the test db 
  - deleteBandById - successfully deletes the band record that matches the specified id, and only deletes that record
  - getGenre - returns the expected records from the seeded genre table in the test db 

## Future enhancements / Backlog
* Need to be able to Edit a Venue
* Testing - lots more testing!
* New venue is rendered along with existing Venues
* Setup deleteVenues api and route and confirm using Insomnia
* Design and implement a Navbar
* Search for Bands by genre
* Search for Bands by size
* Create an Event (linked to a venue) - e.g. venue needs band for this event
* Create a Gig wanted entry (linked to a band)
* Sort the band list (by Name, Genre, Size)
* Link to an external Band Name generator api
* Add authentication/user account and logon functionality (e.g. Auth0)
* Deploy to a server (e.g. Heroku)

## Steps to get Band-Match running:

* Clone the code to your local machine and open it in your chosen code editor
* npm install
* git checkout -b <branchname>
* npm run knex migrate:latest
* npm run knex seed:run
* npm run dev
* Open your browser and enter [localhost:3000](localhost:3000) as the url

