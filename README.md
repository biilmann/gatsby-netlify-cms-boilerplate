# Gatsby + Netlify CMS Boilerplate

This repo contains an example blog that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](netlifycms.org): https://gatsby-netlify-cms.netlify.com/.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](netlify.com) for continuous deployment, and CDN distribution.

## Getting Started

### One Click Setup

Use our deploy button to get your own copy of the repository.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/biilmann/gatsby-netlify-cms-boilerplate&stack=cms)

This will setup everything needed for running the CMS:

* A new repository in your GitHub account with the code
* Full Continuous Deployment to Netlify's global CDN network
* Control users and access with Netlify Identity
* Manage content with Netlify CMS

Once the initial build finishes, you can invite yourself as a user. Go to the Identity tab in your new site, click "Invite" and send yourself an invite.

Now you're all set, and you can start editing content!

### Prerequisites

- Node (I recommend using v8.7.0 or higher)
- Yarn
- A clone of the repo on your local machine

### Run Locally
```
$ cd gatsby-netlify-cms-boilerplate
$ yarn
$ gatsby build
$ gatsby serve
```

## Accessing the CMS
Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/) to set up authentication, and content modeling.
