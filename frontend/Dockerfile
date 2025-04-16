# ------------------- Stage 1: Build Stage ------------------------------
FROM node:21 AS frontend-builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Build the React app for production
RUN npm run build

# ------------------- Stage 2: Final Stage ------------------------------
FROM node:21
WORKDIR /app
# Install 'serve' to host static files
RUN npm install -g serve
# Copy only the built assets from the build stage
COPY --from=frontend-builder /app/build ./build
# Copy .env.docker for runtime configuration (if needed)
# Expose port 5173
EXPOSE 5173
# Serve the built app, binding to all interfaces
CMD ["serve", "-s", "build", "-l", "tcp://0.0.0.0:5173"]
