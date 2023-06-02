RSCs vs All Comers
==================

# Running

First run the data server:
  
```bash
% cd data
% binserve
```

This will serve the pokemon data on port 8080. You can use [binserve](https://github.com/mufeedvh/binserve) or any other fast static server.

Then run one of the following:

## NextJS 13.4 App Router

```bash
% cd app-router-test
% pnpm i
% pnpm build
% pnpm start
```

Test: `http://locahost:3001/`

## NextJS 13.4 Pages

```bash
% cd pages-test
% pnpm i
% pnpm build
% pnpm start
```

Test: `http://locahost:3000/`

## PHP

```bash
cd php-test
php -S localhost:8000
```

Test: `http://locahost:8000/`

## Rails

```bash
cd rails-test
bundle install
bundle exec rails s
```

Test: `http://locahost:3000/`

# Testing

Install [oha](https://lib.rs/crates/oha) and run:

```bash
oha -n 100 [test URL]
```
