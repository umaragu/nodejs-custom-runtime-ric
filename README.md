## AWS Lambda NodeJS Provisioned concurrency

This sample provides a nodejs custom runtime. Nodejs functions in global scope which make calls to external systems using callback or promise will not get completed during the init time. Because of that, using provisioned concurrency will not help having all the global variables initiailized with the warm env.

This sample project exposes a lifecycle hook which will be called during the init method and wait for it to complete.

## Build layer

- Build Docker image which builds artificats for Lambda RIC
```bash
	docker build -t lambda-nodejs-ric . --label lambda.nodejs.ric
	docker images -f "label=lambda.nodejs.ric" --format "{{.ID}}" ## find the container id
	docker run -d -it {ID from Last Step} ## Start the container

```
- Build and Deploy using SAM. SAM build uses a [Makefile](./layer/Makefile) to build.

```bash
sam build
sam deploy -g
```


## Testing


```bash
cd test
sam build
sam deploy -g
```



## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.

