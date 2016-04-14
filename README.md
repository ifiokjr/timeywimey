timeywimey
==========

Time your tasks as units of work


### Integration tests

To keep with timeywimey's mishmash style we've decided to take a **Feature Driven Development** flavored testing approach for the integration.

It allows features to be described in plain English and tested through relevant steps.
  - [cucumber-js](https://github.com/cucumber/cucumber-js)
  - [webdriverio](http://webdriver.io/)

Are these the best tools for the job? Probably not. But here's how to use them.

First make sure selenium is installed on your system.
`npm run selenium:install`

Then start up selenium
`npm run selenium:start`

Now run your tests!
`npm run cucumber`

If you only want to run certain tests then that's also possible using cucumber tags.

e.g.
`npm run cucumber -- --tags @thing`


#### A potentially simpler solution

Heard of docker? Whoo hasn't right. In true timeywimey spirit we've decided to *mash* that up into this project as well. For fun!

It requires **ZERO** dependencies, except for a pretty hugh docker, docker-compose, *docker-engine*, and a tonne of finger crossing magic. But at least you don't need to install selenium to get it running.

Requirements:

Ensure that docker>1.10 is installed on your computer. Instructions for [mac](https://docs.docker.com/engine/installation/mac/) and [windows](https://docs.docker.com/engine/installation/windows/)

To run docker simply use the command but only if you're on a mac with docker machine installed and active.

**Please note this command currently only supports macs**

There are also issues when working behind a firewall.

`npm run cucumber:docker`
