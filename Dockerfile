ARG FUNCTION_DIR="/opt"

FROM node:14-buster as build-image
ARG FUNCTION_DIR

# Copy function code
RUN mkdir -p ${FUNCTION_DIR}

WORKDIR ${FUNCTION_DIR}

RUN apt-get update && \
    apt-get install -y \
    g++ \
    make \
    cmake \
    unzip \
    libcurl4-openssl-dev
COPY ./aws-lambda-ric-1.0.0.tgz  ${FUNCTION_DIR}/
RUN npm install ./aws-lambda-ric-1.0.0.tgz
# RUN curl -L https://github.com/umaragu/aws-lambda-nodejs-runtime-interface-client/archive/refs/tags/v1.0.2.tar.gz -o aws-lambda-ric-1.0.0.tgz
# RUN npm install ./aws-lambda-ric-1.0.0.tgz
ENTRYPOINT ["/bin/bash"]
