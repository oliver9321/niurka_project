# Build stage
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source and build
COPY . ./
RUN yarn build

# Production stage - serve with Caddy
FROM caddy:2-alpine

WORKDIR /app

COPY Caddyfile ./
RUN caddy fmt Caddyfile --overwrite

# Copy build output (CRA outputs to /build, not /dist)
COPY --from=build /app/build ./build

CMD ["caddy", "run", "--config", "Caddyfile", "--adapter", "caddyfile"]
