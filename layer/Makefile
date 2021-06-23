build-LambdaNodejsRIC:
	mkdir -p "$(ARTIFACTS_DIR)/nodejs"
	mkdir -p "noderuntime"
	curl https://nodejs.org/dist/v14.17.1/node-v14.17.1-linux-x64.tar.xz --output node-v14.17.1-linux-x64.tar.xz
	tar -xf node-v14.17.1-linux-x64.tar.xz --directory noderuntime
	cp -r noderuntime/node-v14.17.1-linux-x64/* $(ARTIFACTS_DIR)/
	# docker build -t lambda-nodejs-ric . --label lambda.nodejs.ric
	# $(eval ID=$(shell docker images -f "label=lambda.nodejs.ric" --format "{{.ID}}"))
	# docker run -d -it $(ID)
	$(eval RUNID=$(shell docker ps -f "label=lambda.nodejs.ric" --format "{{.ID}}"))
	docker cp $(RUNID):/opt/node_modules $(ARTIFACTS_DIR)/nodejs
	# docker kill $(RUNID)
