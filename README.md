# Muhammad Rafiq

## Dockerized Deployment

### Build Image

```bash
docker build -t muhammad-rafiq-portfolio \
	--build-arg VITE_GEMINI_API_KEY=your_api_key \
	--build-arg VITE_GEMINI_MODEL=gemini-2.5-flash \
	--build-arg VITE_FORMSPREE_ID=maqqydrl \
	.
```

### Run Container

```bash
docker run --rm -p 3000:3000 muhammad-rafiq-portfolio
```

### Required Build Arguments

- VITE_GEMINI_API_KEY

### Optional Build Arguments

- VITE_GEMINI_MODEL (default: gemini-2.5-flash)
- VITE_FORMSPREE_ID

The app listens on port 3000 inside the container.

## GitHub Actions: Docker Hub Push

This repository includes a workflow at .github/workflows/docker-build.yml that builds and pushes the image on pushes to main and on manual dispatch.

Configure these GitHub repository secrets:

- DOCKERHUB_USERNAME
- DOCKERHUB_TOKEN
- VITE_GEMINI_API_KEY

Optional repository variables:

- DOCKERHUB_REPOSITORY (example: your-dockerhub-username/muhammad-rafiq-portfolio)
- VITE_GEMINI_MODEL (default: gemini-2.5-flash)
- VITE_FORMSPREE_ID
