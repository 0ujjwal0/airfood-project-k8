# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all backend files (including data.json)
COPY . .

# Expose the API port
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
