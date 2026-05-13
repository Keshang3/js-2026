# Document file
## Website
  - Client-Server Architecture
  -3-tier Architecture
    - Data Layer -Logical/Business Layer -Presentation Layer

- Browser(access web) => url (DNS -> Network(laptop)) => Router => ISP Sevrer => Internet

# TCP/IP
# url


# JavaScript (Language)


# Naming Conventions
  -camelCase => variables, constants, functions
  -PascalCase => Filename, classes, Functions
  -snake_case => DB fields or proeprties(sql). sometimes with variables, filename
  -kebab-case => mainly with folders and files
  -UPPER_CASE or SCREAMING_SNAKE_CASE => constant declare



  # How Internet Works

  #Git
    ## Initialize the repo
      - Run `git init`
    ##Remote connect to repo
    -Run `git remote add <name/origin> <url>`

    ##Cloning a repo
      -Go to the directory where you want to clone
      -Run `git clone <url> [foldername]`

  ##Committing the changes
   ### Adding to track
   - `git add .`
   ###Commit your changes
    -`git commit -m "<Your messages>"`

    ##Push (Uplaod to git)
    -Git always have a branch and we push to the branch
    -Before push check for changes
      -`git status`
      -If there are any chhanges then commit the changes first
    -After commiting all the changes, then run 
      -`git push origin <yourlcoalbranch>[:<remotebranch]`
      
      -e.g. `git push orign main` or `git push origin main:main`

We are going to learn Git related problems.

##
  

# JS Important topics:
### Functional Programming
### Object Oriented  based programming

### Functions
  - code block repeat execute
  - Built-in functions
  - Custom Functions
    - General
    - Arrow(Most Famous)


```js
  // A function can take anything as input and can return anything as output
  //general
  function functionName(params, ....) {
    //body definition
  return data;
  }

  const functionName = function(params, ....) {
    //body Definition
    return data;
  }

  const result = functionName(args, ...) //call


  //arrow 
  const functionName = (params, params, ....) => {
    return data;
  }

  const obj = {
    functionName() {

    },



    functionName = () => {

    }
  }

  // event listeners

  //in function Syntax error will be shown but the logical error like doing subtraction instead addition
```





 

  