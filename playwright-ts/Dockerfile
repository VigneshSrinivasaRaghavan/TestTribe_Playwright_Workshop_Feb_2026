# Use the official Playwright base image with Ubuntu Noble (24.04)
FROM mcr.microsoft.com/playwright:v1.58.2-noble

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for better Docker layer caching
# This allows npm install to be cached if dependencies haven't changed
COPY package*.json ./

# Install Node.js dependencies defined in package.json
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Install Java and set JAVA_HOME properly
# Update package list and install Java 11 JRE (required for Allure reports)
RUN apt-get update && \
    apt-get install -y openjdk-11-jre-headless && \
    JAVA_PATH=$(dirname $(dirname $(readlink -f $(which java)))) && \
    echo "export JAVA_HOME=$JAVA_PATH" >> /etc/bash.bashrc && \
    echo "JAVA_HOME=$JAVA_PATH" >> /etc/environment && \
    echo "export JAVA_HOME=$JAVA_PATH" >> /etc/profile

# Create a startup script that ensures JAVA_HOME is set correctly for any command
# This script will source environment variables and execute whatever command is passed to it
RUN echo '#!/bin/bash' > /usr/local/bin/start.sh && \
    echo 'source /etc/environment' >> /usr/local/bin/start.sh && \
    echo 'export JAVA_HOME' >> /usr/local/bin/start.sh && \
    echo 'exec "$@"' >> /usr/local/bin/start.sh && \
    chmod +x /usr/local/bin/start.sh

# Install Playwright browsers (Chrome, Firefox, Safari, etc.)
RUN npx playwright install

# Set the default command to run our startup script
# Docker-compose will override this with its own command
CMD ["/usr/local/bin/start.sh"]