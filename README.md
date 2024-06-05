# Dnd Encounter Application.

## Setting Up Dnd-Calculator.
First and foremost you will need some software installed on your computer before you start. Make sure you have the following installed on your system.
- pnpm
- Docker
- Nx Cli

## Dependency Installs.
#### Pnpm installation
This repo uses pnpm due o take advantage of several key benefits. pnpm offers faster installation times and reduced disk space usage by utilizing a content-addressable storage system, which keeps a single copy of each package and creates hard links to them, rather than duplicating files across projects. This results in more efficient caching and improved performance, particularly in CI/CD pipelines. Additionally, pnpm ensures consistent dependency management with a deterministic resolution algorithm and a strict node_modules structure that prevents issues related to hoisting. It also supports workspaces, making it easier to manage multiple packages within a single repository, which is especially beneficial for monorepos. These features, along with better handling of peer dependencies and enhanced scripts and hooks, make pnpm a more efficient and reliable choice for package management in complex projects.

To install pnpm globally run the following command:
`npm install pnpm -g`

To start the install for the project, ensure you are in the root directory. Run the following.
`pnpm install`

#### Docker Setup
To initialise the database we are using docker. Ensure that you have the docker daemon installed on your system.
The following URL is great at installing docker.
`https://docs.docker.com/get-docker/`

I highly reccommend installing docker Desktop too :D.

#### Nx CLI installation
After installing pnpm run `pnpm add nx@latest --global` to install nx cli.

## Final Setup
To finally setup the database we just need to run three distinct commands.

Firstly, run `pnpm dockerUp` to initiate the container.

<!-- Need to automate the below step into step 1 D: -->
Secondly, run `nx run dnd-calculator-application:prisma-migrate` to populate the db with our tables.

Afterwards, run `pnpm seed` to seed the database.

## Start the application

Run `nx serve dnd-calculator` to start the development server. Happy coding!

## Build for production

Run `nx build dnd-calculator` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.
