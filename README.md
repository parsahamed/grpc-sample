# gRPC Sample Project

This repository demonstrates a simple gRPC service using NestJS on the backend and a React client configured to be extended with gRPC‑Web. An Envoy proxy is provided to translate gRPC‑Web requests from the browser into standard gRPC calls to the NestJS server.

## Structure

- `proto/user.proto`: The Protocol Buffers definition for the `UserService`.
- `server`: A NestJS microservice that exposes the `GetUser` RPC method via gRPC.
- `client`: A React application set up with Vite. The current `App.tsx` is a placeholder for future gRPC‑Web integration.
- `envoy/envoy.yaml`: Configuration for Envoy to accept gRPC-Web requests on port 8080 and forward them to the gRPC server.
- `docker-compose.yml`: A Docker Compose configuration to run the server, envoy proxy, and client services together.

## Getting Started

1. Install dependencies for both server and client:

   ```bash
   cd server
   npm install
   cd ../client
   npm install
   ```

2. Build and run the services using Docker Compose:

   ```bash
   docker compose up --build
   ```

   This will start the NestJS gRPC service on port 50051, the Envoy proxy on port 8080, and the React client on port 3000.

3. Open the client in your browser at `http://localhost:3000`.

Future phases will include generating gRPC-Web client code from the proto file and integrating it into the React application.