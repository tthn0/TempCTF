# Easy CTF Challenge

### Todo

- [ ] Dockerize the application

### Local Setup

In one terminal, run the following commands:

```bash
cd src
mv ./ctf/example.env ./ctf/.env
npm i
npm start
```

In separate terminal, run the following command:

```bash
npx localtunnel --port 3000
```

> [!IMPORTANT]
>
> - Make `npx` is installed. If not, install it by running `npm i -g npx`.
> - Also, change the port number if you are running the server on a different port.
