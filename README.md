<h1>
    <img width="300" src="https://raw.githubusercontent.com/digital-net-org/.github/refs/heads/master/assets/logo_v2025.svg">
</h1>
<div justify="center">
    <a href="https://www.docker.com/"><img src="https://img.shields.io/badge/Docker-blue.svg?color=1d63ed"></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/Typescript-blue.svg?color=3178c6"></a>
    <a href="https://nextjs.org/docs"><img src="https://img.shields.io/badge/NextJS-black.svg"></a>
    <a href="https://puckeditor.com/"><img src="https://img.shields.io/badge/Puck-black.svg?color=111111"></a>
</div>

_@digital-net-org/digital-client_

Client App that renders pages from the Digital-puck application using Puck library.

## :memo: Configuration

You can configurate the application using environment variables and volume while mounting the docker image.

### :whale2: Dockerfile

#### Override public assets

Create a [_volume_](https://docs.docker.com/engine/storage/volumes/) in the container and access path `/app/public`. You can replace the following files from here:

| File          | Type | Description          |
| ------------- | ---- | -------------------- |
| `favicon.ico` | Icon | The website Favicon. |

#### Environment variables

| Variable               | Type   | Description                                                                    |
| ---------------------- | ------ | ------------------------------------------------------------------------------ |
| `DIGITAL_API_URL`      | string | The base URL of the Digital API.                                               |
| `PUCK_CONFIG_ENDPOINT` | string | The filename of the configuration javascript file (must be a CommonJS module). |
| `META_TITLE`           | string | The website metadata: Title.                                                   |
| `META_DESC`            | string | The website metadata: Description.                                             |
| `META_URL`             | string | The website metadata: Url.                                                     |
