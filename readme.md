# Node multi-threading

This code shows how to run a CPU-bound task in Node.js using worker threads.

To start the server, run:

```shell
  node index.js
```

Then try to send one or more request to trigger the subset sum task:

```shell script
  curl -G http://localhost:8000/subsetSum --data-urlencode "data=[116,119,101,101,-116,109,101,-105,-102,117,-115,-97,119,-116,-104,-105,115,116,119,101,101,-116,109,101,-105,-102]"
```

While a task is running, you can check the responsiveness of the server with a command like this:

```shell
  curl -G http://localhost:8080
```
