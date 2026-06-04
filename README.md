# gRPC-Web sample with NestJS and React

This repository demonstrates a practical browser-to-backend gRPC setup:

```text
React browser client
  -> gRPC-Web request
Envoy proxy
  -> native gRPC over HTTP/2
NestJS gRPC server
```

A browser cannot call a normal gRPC server directly, so Envoy translates gRPC-Web requests from the React app into native gRPC requests for NestJS.

> Note: the repository name is `gprc-sample`, but the technology is `gRPC`.

## Project structure

```text
.
├── client/          # React + Vite + grpc-web client
├── server/          # NestJS gRPC server
├── proto/           # Shared protobuf contract
├── envoy/           # Envoy gRPC-Web proxy config
└── docker-compose.yml
```

## Run locally

Install dependencies:

```bash
cd server
npm install

cd ../client
npm install
```

Generate the React gRPC-Web client files:

```bash
cd client
npm run proto:gen
```

Run NestJS server:

```bash
cd server
npm run start:dev
```

Run Envoy:

```bash
docker compose up envoy
```

Run React:

```bash
cd client
npm run dev
```

Open:

```text
http://localhost:5173
```

In Chrome DevTools you should see a request like:

```text
POST http://localhost:8080/user.UserService/GetUser
content-type: application/grpc-web+proto
```

The browser talks to Envoy, not directly to the NestJS gRPC server.

## Deployment notes

Vercel can host the React client.

The NestJS gRPC server and Envoy proxy should be deployed somewhere that supports long-running services and custom ports, such as Railway, Render, Fly.io, a VPS, or Kubernetes.

Typical production architecture:

```text
Vercel React app
  -> public Envoy endpoint
Envoy
  -> private NestJS gRPC service
```
