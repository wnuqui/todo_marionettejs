# TodoApp using MarionetteJS

This is a TodoApp (CRUD) using MarionetteJS. It has unit (mocha) and e2e (casper) tests.

## Setup

### Clone, install packages (npm and bower)
    $ git clone git@github.com:wnuqui/todo_marionettejs.git
    $ cd todo_marionettejs/
    $ npm install -g grunt-cli && npm install && bower install
    $ npm install -g httpster

### Serve via httpster
`httpster` is a simple http server. After install run it via:
    $ grunt shell

### Open browser at http://localhost:3333/

Open browser and explore the simple MarionetteJS app.

## Tests

Run unit and e2e tests. e2e requires the httpster to serve the app.

    $ grunt
