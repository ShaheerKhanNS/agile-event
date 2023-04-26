# Event-Organizer🌆

Build using modern technologies👨‍💻

### Description

This project is a REST API for managing events, built with Node.js and Express. It provides endpoints for retrieving all events, retrieving a specific event by its ID, creating a new event, updating an existing event, and deleting an existing event.

#### Stack/Frameworks Used

1. Node.js
2. Express.js
3. MySQL DB
4. Sequelize ORM

### API Endpoints

##### Events

##### Get all events

- Description : This endpoint retrieves all events in the system
- Optional query parameters:
  -limit: Limit the number of events returned. Default is 1
  -page: The page number to retrieve. Default is 1

- Method : GET
- URL : /api/v3/app/events
- Response : 200 OK
- Body : Array of events objects

##### Create event

-Description : This endpoint creates a new event in the system

- Method : POST
- URL : /api/v3/app/events
- RequestBody : event object(without id)
- Response : 201 OK

##### Update event

- Description : This endpoint updates an existing event in the system
- Method : PATCH
- URL : /api/v3/app/events/:id
- RequestBody : Updated event object(without id)
- Response : 200 OK

##### Delete event

- Description : This endpoint deletes an existing event from the system
- Method : Delete
- URL : /api/v3/app/events/:id
- Response : 204 OK
