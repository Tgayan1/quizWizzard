# Day 01
### Setup the Project and Learn About several tools

I'm gonna Build an Quiz App for Fun and to learn about the full stack. So, on the Day One i Cover Some simple tools And process

## 01. Package Managers

- control and manage packages that im gonna install for my projects
- dependancies meaning the things i need to develop
- in my sence {Svelte/Tailwind/Vite/Pretier/ESLint}

### pnpm VS npm VS Yarn

| ___ |pnpm|npm|yarn|
|----|----|----|----|
|How|Creates A Global Download Folder And After First time Download, Linked them(sylink)|Download Each time when it Gonna Set a New Project|Plug And Play(Currently not lernt but only know is configeration is hard)|

*best* *beiginner* *tool* *is* *pnpm* *(newer npm is good too)*.

note:- 
- package.jason -> holds the list
- pnpm-lock.yaml -> lock the specific version("It works in my machine")

## 02.Dev Server

- providing a server for development
- im using **vite**

### How Vite Works

- Dev Mode
    - instant dev server Starts
    - build only *On-Demand* Files
    - Uses **HMR**(Hot Module Replacement -> only edited Part Change without Reloding Whole Server)

- Build Mode
    - takes everything and bundle them (**Rollup**)

note->
    - uses *esbuild*(Go lang Based Superfast Builder) for pre-build unchangable dependancies and minification of the code

#### Alternatives {WebPack/Parcell[Slow, Old],esbuild[Go lang Based|SuperFast|Bit Complex]}
didn't lernt about the behind the sences yet.

## Setup Steps Thus Far ->

- 1 Setup Vite Via pnpm

    shell `pnpm create vite`
- 2 Install relevent Dependancies while filling the each steps
    - Svelte
    - Sveltkit as Variant
    - Typescript Enabled
    - install pritter(pretying the code) and eslint(the grammerly tool for lang)
- 3 Install Tailwind(Frogot at first Place)
    - shell `pnpm install tailwindcss @tailwindcss/vite`
    - configuering vite.config.ts by importing taiwind plugin 
    - create global style file in src 
    - connet it with layout

Thats it for Today.

# Day 02
## Creting the Architecture For Quiz App

- This is Fully Personlized Quiz App -> Everyone Should Have there own enviroment
- For Basic, Im gonna implement to Set Quizes Manually then later PDF Integration.
- Parts
    - Login/Sign in
    - Customized Dashboard for Create Quizes, See the Previuos Quizes
    - Quiz Creating Form Ability to Set the Answers as well{If Answers There}
    - Quiz Submitting Form


# Login/Sign in Part (Auth)

- base: Client send cridentials {user Name & Password}  then server validate him then carry on the connection as client desier

### HTTP VS HTTPS

- always Use HTTPS{secuer icon}(opens *cryptograpic_tunnel*(not learnt) for encrypt data travels through the internet) while HTTP just send raw text.
- both are **Stateless** meaning every request is totally isolated/ indipendent(short-term memory loss)

## Authentication

- ### Session Based Auth
    - use Session database 
    - after cridentials recieved, server genarate session id and then send it as a cookie.
    - the rest request equipped with that cookie. then server identify the user
    - this makes HTTP **Statefull**. server remebers the clients
    - concs:-
        - Less Scalable(first connect server 1 then again connect server 2,but session db lives in server 1)
        - without HTTPS *session_theft* happens.(stealing cookies)
- ### Token Based Auth (JWT-Json Web Tokens)
    - don't remember anything
    - uses **secret_key** (unique const for application/ developer make it)
    
    #### JWT File
    - three parts
        - [**header** | the recipe/ base64Url encoded] {Include the algorithm for scramble the key and the type of the file}
        - [**payload** | details about the user/ base64Url encoded]
        - [**Signatuer** | scrambled key using algorithm]
    - always store the key inside `.env`(*enviorment variables*) and remeber to include it in `.gti-ignore`
    - two types of Algorithms
        - **HS256** Symmetric Way {Use same key for Creating and Validating a Signatuer}
            - Both Auth and Web servers have the Common Same Key
        - **RS256** Asymmetric Way{Use two keys [*public_key* for Validation] [*private_key* for Create the Signatuer]}
            - in here Auth server Has the Private Key while Web servers have Public Key
    |___|JWT_TOKEN_DRYPTED|JWT_TOKEN_ACTUAL_LOOK|
    |----|----|----| 
    |example|`{"alg": "HS256","typ": "JWT"}`.`{"sub": "1234567890","name": "John Doe","admin": true,"iat": 1516239022}`.{a-string-secret-at-least-256-bits-long}|`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30`|
