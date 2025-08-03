FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy app source
COPY . .

# Expose port
EXPOSE 4200

# Start the application
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--disable-host-check"] 