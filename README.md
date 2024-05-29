## Getting Started

[Install pnpm](https://pnpm.io/installation)
```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

Copy & paste `.env.sample` to `.env.local` file and use your own variables:
```bash
cp .env.sample .env.local
```

Run postgres using docker
```bash
docker-compose up -d
```

Install dependencies
```bash
pnpm install
```

[Setup db](/docs/drizzle.md)

Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
