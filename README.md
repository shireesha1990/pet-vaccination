This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Pet's Vaccination Web App

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
 

## Description

This is a web app full stack built using next.js, typescript and sqlite.
```bash
Functionality includes
-> Display vaccinations
-> Add Vaccination
-> calculate next due date
-> display status
-> Filter by status
```


## API

App has following apis:
```bash
GET: api/vaccinations - all vaccinations for given pet is available 

POST: api/vaccinations - Can Add vaccination details using front-end / postman vaccine_name is\n mandatory and last_completed in string format (optional).
{content-type: application/json}

```

Reference [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

