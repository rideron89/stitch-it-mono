FROM node:20.13-bookworm

WORKDIR /app

COPY .eslintignore .eslintrc.json jest.config.ts jest.preset.js ./
COPY tsconfig.base.json nx.json package.json yarn.lock .yarnrc.yml .yarnrc ./
COPY .yarn .yarn/
COPY .nx/cache .nx/cache/
COPY apps/web-server apps/web-server/

RUN corepack enable && yarn --version
RUN yarn install

CMD yarn nx serve web-server --verbose
