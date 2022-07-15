FROM public.ecr.aws/lambda/nodejs:16

WORKDIR /var/task
COPY app.ts package*.json yarn.lock tsconfig.json ./
COPY lib/ ./lib/

# RUN npm install
# If you are building your code for production, instead include a package-lock.json file on this directory and use:
# RUN npm ci --production
RUN corepack disable && \
    corepack enable yarn && \
    yarn --ignore-scripts && \
    yarn build && \
    # yarn install --production && \
    yarn cache clean && \
    rm -rf node_modules

# Command can be overwritten by providing a different command in the template directly.
CMD ["app.lambdaHandler"]
