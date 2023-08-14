# Parent image
FROM node:20-alpine
# Working directory of image
WORKDIR /app
# Copy all source files
# COPY . /app
COPY . .
# run command at build time
RUN npm install
# expose port number
EXPOSE 4000
# command to run image
CMD ["node", "index.js"]