# Client side rendering(CSR) vs Server side rendering(SSR)

- CSR: Used to build SPAs, all HTML is rendred on the client, all js needs to be dowloaded before apps start running(bad for performance).

  - One perfect use case: apps that are used "internally" as tools inside companies, that are entirely hidden behind a login.

- SSR: Used to build multi-page applications(MPAs), some HTML is rendred in the server, more performant as less js needs to be downloaded, the React team is moving more and more in this direction.

# Styled Components

- A way to write css inside the react component files. We take regular html element, and using a styled function we create a react component with styles in it.

# Supabase

- A service that allows developers to easily create a back-end witha Postgres database

- Automatically creates a database and API so we can easily request and receive data from the server

- No back-end development needed

- Perfect to get up and running quickly

- Also comes with easy-to-use user authentication and file storage

# State management in big applications

- You think of state in the page/application feature level, not on component level

# React query

- Powerful library for managing remote(server) state

- Many features that allow us to write a lot less codem while also making the UX a lot better.

- Needed because remote state is fundamentally different from regular (UI) state

- Some features:

  - Data is stored in a cache
  - Automatic loading and error states
  - Automatic re-fetching to keep state synched
  - Pre-fetching
  - Easy remote state mutation(updating)
  - Offline support

# React Hook Form

- facilitates the submission and handling of forms in react

# Advanced React Patterns

- Patterns created by developers in order to solve some problems.Used when you want to reuse and share both UI and statefull logic.

  - Ex: Render props pattern

- There are many different patterns

## Render props pattern

- For complete control over WHAT the component renders, by passing in a function that tells the component what to render. Was more common before custom hooks, but still useful.

- How to use: passing a prop called render that is a function that the component uses to know what it should render and how to do it.

  - Used when you can't directly pass in jsx with the children prop, because it also needs logic.

## Compound component pattern

- Creates a set of related components that together achieve a common and usefull task. Example: creating a counter

- How to use it: Create a parent component and child components tha really belongs and make sense directly to this parent component.

  - An existing example is a select element and it's option in HTML.
