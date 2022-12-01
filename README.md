# Band-Match: Bringing bands and venues together!

## Purpose
This is a personal project that I am using to continue practicing the technical skills learnt during the DevAcademy Aotearoa bootcamp that I graduated from in October 2022.

It is a full stack app, built with Javascipt, using React/Redux and a Sqlite database.

Will probably never be fully functional. It's really just a place for me to continue to experiment and play!


## The idea
As a keen muso and I know that it can sometimes be hard for bands to find gigs.
Conversely, it can be hard for venues to find bands.

Band-Match has been conceived to solve these problems, by helping bands and venues find each other!

Currently it just runs locally, so it's purely hypothetical at this stage.  I'll look at deploying to a server eventually (maybe!)

## User stories
I put myself into the shoes of the potential users of Band-Match, to come up with the types of things they might want out of such a system.
This is what I have come up with so far ...
* As a venue, I want to be able to post an event
* As a band, I want to be able to create a gig wanted post
* As a venue, I want to be able to search the gig wanted posts to find a band for my event
* As a band, I want to be able to search the event posts, to find a venue to play at
* As a band, I want to be able to save the details about my band
* As a venue, I want to be able to save the details about my venue
* As a band, I want to be able to maintain the details about my band
* As a venue, I want to be able to maintain the details about my venue
* As a band, I want to be able to advertise for a new band member
* As a visitor to the site, I want to be able to see a list of gigs that are on for a date range
* As a visitor, I want to be able to post reviews about events that I've been to


## Steps to get Band-Match running:

* Clone the code to your local machine and open it in your chosen code editor
* Open your terminal and enter 'npm install'
* Enter 'npm run dev' in to your terminal
* Open your browser and enter [localhost:3000](localhost:3000) as the url

## Known issues
* You can add a new venue and it will save to the db, but after that, it is not being rendered by the Venues component.

## Future enhancements / Backlog
* Add authentication/user account and logon functionality (e.g. Auth0)
* Deploy to a server (e.g. Heroku)
* New venue is rendered along with existing Venues
* Setup deleteVenues api and route and confirm using Insomnia
* Design and implement a Navbar
* Search for Bands by genre
* Search for Bands by size
* Create an Event (linked to a venue) - e.g. venue needs band for this event
* Create a Gig wanted entry (linked to a band)
* Sort the band list (by Name, Genre, Size)
* Link to an external Band Name generator api




