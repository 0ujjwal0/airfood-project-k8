# Stage 1
FROM node:21 AS backend-builder

# setup the working dir
WORKDIR /app

# code
COPY . .

# packages install
RUN npm i

# Stage 2
FROM node:21

# setup the working dir
WORKDIR /app

# copy the above stage as compressed
COPY --from=backend-builder /app .
# Port
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
