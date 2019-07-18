FROM node:12.6.0

#set working directory
WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

ENV NODE_ENV=production
ENV PORT=3003

#tell the port number the cointainer should expose
EXPOSE 3003

#run command
CMD ["npm", "run", "server-prod"]