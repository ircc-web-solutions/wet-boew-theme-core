# builder-theme
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
Sometimes, Node can be a little special, and to step up and ease that issue is the Node Version Manager (NVM).  The instructions on the Creationix repository for [NVM](https://github.com/creationix/nvm) are fantastic, with the main command being:

```bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

Note: Restarting the terminal window may be required after this command.

### Install Node and Node Package Manager
Once NVM is installed, use it to install Node (and Node Package Manager (NPM)).  Node is the JavaScript engine that runs the elements of the repository to perform the build steps while NPM is the utility required to download all the Node Modules used to support the source code.  Install it with the command:

```bash
nvm install node
```

### Install Git
Git commands are starting to become commonplace in many operating system distributions however, if it is not installed currently, execute the following command: 

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
Grunt is a task runner that handles the execution of tasks within the solution, such as moving around files and issuing other commands, and is the backbone of the build operations.  Install it via the following command:

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

## Now What?
This is the point where you tap into your creativity and design your own theme!

The WET-BOEW themes are a layering of various themes into a single CSS file.  Don't worry about creating the CSS file yourself, instead just create the SASS of your theme (in your own repository) and, when ready, contact us to include the reference into this repository so that anyone may build it.

## What If It Isn't Ready to be Referenced?
That is a good point and, honestly, at this point we haven't built that function into this solution (yet).  We will though, and we want it too, so if you wish to help us out with that then feel free to issue us a pull request to do so!

Ideally we would like the command to work like this:

```bash
grunt build --repo=https://github.com/your_repo/theme-your_theme_name.git
```

Until that future exists, we will all have to wait patiently...  ;)
