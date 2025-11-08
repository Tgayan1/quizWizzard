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

*best* *beiginner* *tool* *is* *pnpm* *(newer pnpm is good too)*.

note:- 
- package.jason -> holds the list
- pnpm-lock.yaml -> lock the specific version("It works in my machine")

## 02.Dev Server

- providing a server for development
- im using *vite*

### How Vite Works

- Dev Mode
instant dev server Starts
build only *On-Demand* Files
Uses HMR(Hot Module Replacement -> only edited Part Change without Reloding Whole Server)

- Build Mode
takes everything and bundle them (Rollup)
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

