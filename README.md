<h1><strong>Travlr Getaways – Full Stack Web Application</strong></h1>
<h2><strong>Overview</strong></h2>

Travlr Getaways is a full stack web application built using the MEAN stack (MongoDB, Express, Angular, and Node.js). The application supports two primary user experiences: a customer-facing travel booking site and a secure administrative single-page application (SPA). Customers can browse trips, view details, and review itineraries. Administrators can log in securely, create and edit trips, and manage booking data.
This project demonstrates frontend architecture decisions, backend API design, database integration, and JWT-based authentication.

<h2><strong>Architecture</strong></h2>

This project uses two types of frontend development approaches: server-rendered Express HTML and a client-side Angular SPA. The Express portion renders static HTML pages on the server. These pages load fully formed when requested. This approach is straightforward and works well for basic content delivery. It requires minimal client-side logic and is easy to test.
The Angular admin application functions as a single-page application. Instead of reloading pages, Angular loads one index page and dynamically updates the view using components and routing. Angular manages state, form validation, HTTP requests, and navigation in the browser. This structure creates a smoother user experience, but it requires careful organization of services, modules, and dependency injection.
The backend uses MongoDB, a NoSQL database. MongoDB stores data as flexible JSON-like documents instead of rigid relational tables. This design works well for travel package data because trip objects can evolve over time without requiring schema migrations. It also integrates cleanly with JavaScript-based technologies using Mongoose models.

<h2><strong>Functionality</strong></h2>

JSON plays a central role in connecting the frontend and backend. JSON is a lightweight data-interchange format, while JavaScript is a programming language. JSON represents structured data using key-value pairs. In this application, Angular sends and receives JSON objects when communicating with the Express API. The backend parses JSON requests, validates them through Mongoose schemas, and stores them in MongoDB.
Throughout development, I refactored several areas of the codebase to improve clarity and efficiency. I separated route logic from controller logic to maintain cleaner Express files. I centralized API calls inside Angular services rather than calling HTTP requests directly inside components. This made the code more maintainable and reduced duplication. Reusable UI components were a major benefit of the Angular SPA. The TripCard component, shared forms, and centralized data services reduced repeated logic. Reusability improves consistency, simplifies debugging, and makes future updates easier because changes only need to be made in one place.

<h2><strong>Testing</strong></h2>

Testing a full stack application requires validating each layer independently. I tested backend endpoints using Postman to confirm GET, POST, PUT, and DELETE methods behaved as expected. Each endpoint was verified for proper request formatting and response codes.
Methods define how data moves through the API. GET retrieves data. POST creates records. PUT updates records. DELETE removes records. Endpoints define the routes where these actions occur. Together, methods and endpoints form the API contract between frontend and backend.
Adding JWT authentication increased testing complexity. Secure routes required token validation in headers, and failed authentication produced 401 responses. I verified token generation during login and confirmed that protected admin routes rejected unauthorized requests. Testing with authentication reinforced the importance of isolating issues by checking whether failures were caused by routing, token validation, or database logic.

<h2><strong>Security</strong></h2>

The final iteration includes JWT-based authentication for the admin application. Users must log in to receive a signed token. The Angular application stores the token and attaches it to protected API requests. Middleware on the Express backend verifies the token before granting access. This security layer prevents unauthorized users from modifying trip data and protects administrative functions.

<h2><strong>Technologies Used In This Project</strong></h2>

MongoDB
Express.js
Angular
Node.js
Mongoose
JSON Web Tokens (JWT)
Postman


