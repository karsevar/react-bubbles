# Sprint Challenge: Advanced Web Applications - React Bubbles

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Advanced Web Applications, focusing on testing, client-side authentication, hosting web apps, and PUT and DELETE requests.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency ReactJS Fundamentals and your command of the concepts and techniques in the Function Components and Class Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

In this project you will create a login page and request a token from the server that you'll use to send all other requests to the server. You will then be able to fetch the color data array, update data, and delete data, and watch the fun happen!

**Note** You can use the sites like the following to get color hex codes:

- [Color-Hex](https://www.color-hex.com/)

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] Explain what a token is used for.

	To begin, a token is a string passed by the server that gives a computer authentication credentials. These authentication credentials (which are coded into the headers of each axios call a the frontend application) allow or disallow specific users access to protected information. How this process translates to front end applications is that a login page takes in the payload of username and password. If the credentials exist, the server responds with a fresh JWT. From there it's the application's responsibility to add an authorization <token> header to every request (namely axios put, delete, post, and get requests).

- [ ] What steps can you take in your web apps to keep your data secure?
	
	One can make their web applications secure through simply:
		1.) establishing an Oauth framework in the backend that sends back authorization tokens to a user's device.
		
		2.) create protected routes within the application's navigation system that only directs a user to specific routes if they have an authorization token saved in their localStorage.
			example of a PrivateRoute function:
			const ProtectedRoutes = ({ component: Component, ...rest }) => {
			    return (
			      <Route
			        {...rest}
			        render={props => {
			          if (localStorage.getItem("token")) {
			            return <Component {...props} />;
			          } else {
			            return <Redirect to="/" />;
			          }
			        }}
			      />
			    );
			  };

		3.) Create a login page that has the ability to send an initial post request to the server with a user's username and password and send back an authorization token which is then saved to localStorage.
			example of the login onSubmit handler:
				const login = e => {
			        e.preventDefault();
			        setIsLoading(true)
			        axios
			            .post('http://localhost:5000/api/login', credentials) 
			            .then(res => {
			                setIsLoading(false)
			                localStorage.setItem('token', res.data.payload)
			                props.history.push('/friends')
			            })
			            .catch(err => {
			                setIsLoading(false) 
			                console.log(err.response)
			            })
	    		}

		4.) lastly create an axiosWithAuth header function that has the token and use the function to for each ajax request to the application's api server. example of this function and the ajax setup:

				For the token header function:
				 export const axiosWithAuth = () => {
				    const token = localStorage.getItem('token');

				    return axios.create({
				        headers: {
				            'Content-Type': 'application/json',
				            'Authorization': `${token}`
				        },
				    });
				};

				example of an ajax call using the above header function:
				axiosWithAuth().post('http://localhost:5000/api/friends', friend)
		            .then(res => console.log(res)) 
		            .catch(err => console.log(err))



- [ ] Describe how web servers work.

	Web servers today operate through what's called the client-server model where each server provides functionality and programs to client devices. Server network are mostly implemented by the request response model where the client sends a request to the server and the servers do some action and send back the results (the results can be information for a webpage, the computations of a cloud computing service, etc.). 

- [ ] Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

	To begin, CRUD stands for create, read, update, and delete. When overlaid with axios commands one can say that create means axios.post(), read means axios.get(), update means axios.put(), and delete (of course) means axios.delete().



## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.
- [ ] **RUN** `yarn install or npm install` at the root to retrieve all the dependencies for the node server. You will not need to create any react apps here nor will you need to install any other dependencies. You should have all you need in this repo.
- [ ] **LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.
- [ ] **RUN** `yarn start or npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [ ] **LOOK** at your `client` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [ ] **cd** into `client` and run `yarn install or npm install` to retrieve the client side dependencies.
- [ ] **RUN** `yarn start or npm start` to fire up your React application.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.

## Minimum Viable Product

The MVP of this project will be broken up between 2 stages. Follow each step.

### Stage 1 - Authentication

Build a login form to authenticate your users.

- [ ] Construct an AXIOS request to retrieve a token from the server. You'll use this token to interact with the API
- [ ] Save the token to localStorage
- [ ] Build a `axiosWithAuth` module to create an instance of axios with the authentication header
- [ ] Build a `PrivateRoute` component and use it to protect a route that renders the `BubblesPage` component

### Stage 2 - Consuming the API

- [ ] When `BubblePages` renders, make a GET request to fetch the color data for your bubbles.
- [ ] In `ColorList.js`, complete the `saveEdit` and `deleteColor` functions to make AJAX requests to the API to edit/delete data
- [ ] Watch and enjoy as your app responds to updates in the data. Check out `Bubbles.js` to see how this is built.

### API Documentation

  * **[POST]** * to `/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'Lambda School', password: 'i<3Lambd4' }`
  * **[GET]** to `/api/colors`: returns the list of colors and their hex codes.
  * **[POST]** to `/api/colors`: creates a new color object. Pass the color as the `body` of the request (the second argument passed to `axios.post`).
  * **[PUT]** to `/api/colors/:id`: updates the color using the `id` passed as part of the URL. Send the color object with the updated information as the `body` of the request (the second argument passed to `axios.put`).
  * **[DELETE]** to `/api/colors/123`: removes the color using the `id` passed as part of the URL (123 in example).

## STRETCH PROBLEMS

**HTTP/Axios Stretch Problems**

- [ ] Build a form at the bottom of `ColorList.js` to add new colors to the colors data

**Data Visualization**

- [ ] Look at [Potion JS](https://potion.js.org/). This is the library used to display the color data
- [ ] Play around with the data visualation happening in `Bubbles.js`. Have fun with this! Try different components from the library, or see if you can add props to change the UI a bit.
