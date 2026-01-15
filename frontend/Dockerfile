FROM node:22-alpine

# Install dependencies for native modules
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Expose port
EXPOSE 3000

# Development command
CMD ["npm", "run", "dev"]
