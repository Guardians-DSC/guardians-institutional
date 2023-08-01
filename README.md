# Guardians Institucional

## Como contribuir

Leia o [CONTRIBUTING.md](CONTRIBUTING.md) para saber como contribuir com o projeto.

## Como rodar o projeto

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
yarn
```

### Local Development

```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

O site é hospedado no [Github Pages](https://pages.github.com/) e é atualizado automaticamente quando um commit é feito no branch `main`. Para mais informações, leia a [documentação do Docusaurus](https://docusaurus.io/docs/deployment#deploying-to-github-pages) e os workflows de CI/CD no em `.github/workflows/`.

Para fazer o deploy manualmente, execute o seguinte comando:

Usando SSH:

```bash
USE_SSH=true yarn deploy
```

Não usando SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```
