# builder-theme
[![dependency Status](https://david-dm.org/ircc-web-solutions/builder-theme/status.svg)](https://david-dm.org/ircc-web-solutions/builder-theme#info=dependencies)
[![devDependency Status](https://david-dm.org/ircc-web-solutions/builder-theme/dev-status.svg)](https://david-dm.org/ircc-web-solutions/builder-theme#info=devDependencies)

A builder for the themes compatible with the GoC WET-BOEW solution.

## Background
The Government of Canada (GoC) initiated Web Experience Toolkit (WET-BOEW) solution was a huge step forward for the government and a refreshing departure from the old Common Look and Feel (CLF) 2.0.  It incorporated many elements required of government websites into a new paradigm, putting accessibility and usability as first-class citizens as well as introduced the government to the reality of transparent, open development with collaborators of all backgrounds.

## Problem
The GoC WET-BOEW repository has become quite large, and the barrier to entry has become very steep, since many technologies are at play under the hood.  In order to develop a new theme, for example, it is not as simple as understanding hypertext markup language (HTML), JavaScript (JS), and Cascading Style Sheets (CSS).  In order to build a new theme, understanding of the entire solution is required, just to be able to build one.

## Solution
This is where the **builder-theme** comes in.

It takes care of the process of combining the simple theme repository, dedicated for a particular look and feel, and compiles the Syntactically Awesome Style Sheets (SASS) files within it on top of what is the core CSS of the WET-BOEW.

The result being a separation of the theme, from the complexity, providing only the result desired.

## Setup
There are a few moving parts that are required to make this all work, but never fear, the steps to get from zero to compiling package are provided here to ease the process.

The following instructions are for a linux system, Ubuntu in particular, and may require elevated priviledges.  If there is a permission error that occurs, use the following command to re-issue the last command, only in an elevated mode:

```bash
sudo !!
```

### Install Node Version Manager
Sometimes, Node can be a little special, and to step up and ease that issue is the [Node Version Manager (NVM)](https://github.com/creationix/nvm).  The instructions in the repository are fantastic and the main installation command is:

```bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

Note: Restarting the terminal window may be required after this command.

### Install Node and Node Package Manager
Once NVM is installed, use it to install [Node.js](https://nodejs.org/en) and [Node Package Manager (NPM)](https://www.npmjs.com).  Node is the JavaScript engine that runs the elements of the repository to perform the build steps while NPM is the utility required to download all the Node Modules used to support the source code.  Install both with the command:

```bash
nvm install node
```

### Install Git
[Git](https://git-scm.com) provides the interactivity between the local repository and the remote repository (in this particular case, [GitHub](https://github.com) is hosting the main open repositories).  The Git commands are starting to become commonplace in many operating system distributions however, if it is not installed currently, execute the following command: 

```bash
apt-get install git
```

### Clone the Repository
At this point, using Git, clone this repository locally to begin working with it.

```bash
git clone https://github.com/ircc-web-solutions/builder-theme.git
```

### Install the Node Dependencies
Once the repository has been cloned, navigate into the folder and issue the NPM command to download all the Node Modules required by the solution.

```bash
npm install
```

Note: If Node is unfamiliar territory, know that the `npm install` command is looking into the `package.json` file, which contains many of the configurations of the repository solution including a listing of the required node modules.  Also note that, once the command is run, it will create a folder called `node_modules` and place the files in that folder.

### Install the Grunt Command Line Interface (CLI)
[Grunt](https://gruntjs.com) is a task runner that handles the execution of tasks within the solution, such as moving around files and issuing other commands, and is the backbone of the build operations.  Install it via the following command:

```bash
npm install -g grunt-cli
```

### Issue the Grunt Build Command
Once the dependencies have all been downloaded, issuing the following command will result in the solution performing the build of the default theme.

```bash
grunt build
```

Registered themes can be built by identifying the theme by name:

```bash
grunt build --theme=goc-intranet
```

Note: The `grunt build` command builds the default WET-BOEW theme and is the functional equivalent of issuing the command as `grunt build --theme=default`

| Theme Name | Command | Description |
| --- | --- | --- |
| Web Experience Toolkit Base | `wet-boew` or `default` | The base theme for the Web Experience Toolkit (WET-BOEW) |
| Goverment of Canada Intranet | goc-intranet | The standard theme for usage within the Government of Canada (GoC) intranet-based sites |

Unregistered themes can be build by identifying the GitHub repository directly as part of the theme parameter as follows:

```bash
grunt build --theme=repo-root/repo-name
```

When refering to a repository this way, assumptions are made on the location of files within the repository.  Therefore, to ensure that all files are pulled in correctly, please adhere to the following structure (all folders are optional, if not present, they won't be processed):

```
/assets/fonts/*
/assets/images/*
/assets/js/*
/assets/javascripts/*
/assets/css/*
/assets/stylesheets/*
```

The difference between the `js` and `javascripts` folders are that the former is assumed to be precompiled, and will be copied as-is into the built theme folder, while the latter will be evaluated for linting and minification.

In alignment, the difference between the `css` and `stylesheets` folders are that the former is assumed to be production CSS, and will be copied as-is into the built theme folder, while the latter is assumed to be SASS that will be processed, and evaluated for linting and minification.

## Now What?
This is the point where you tap into your creativity and design your own theme!

The WET-BOEW themes are a layering of various themes into a single CSS file.  Don't worry about creating the CSS file yourself, instead just create the SASS of your theme (in your own repository) and, when ready, contact us to include the reference into this repository so that anyone may build it.
