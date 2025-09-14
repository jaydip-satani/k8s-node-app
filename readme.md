# k8s-node-app

A simple Node.js application running on Express, designed for deployment in Kubernetes. The app responds with the pod name to demonstrate load balancing and scaling.

## Features
- Express-based HTTP server
- Returns pod name in response for easy identification
- Ready for containerization and Kubernetes deployment

## Prerequisites
- [Node.js](https://nodejs.org/) (for local run)
- [Docker](https://www.docker.com/) (for containerization)
- [Kubernetes](https://kubernetes.io/) (for deployment)

## Local Development

### Install dependencies
```bash
npm install
```

### Run the app locally
```bash
npm start
```

#### Sample Output (Local)
```
Server running on port 3000, pod: <your-hostname>
```
Visit [http://localhost:3000](http://localhost:3000) in your browser:
```
Hello from Node.js! Served by pod: <your-hostname>
```

## Docker Usage

### Build Docker image
```bash
docker build -t k8s-node-app .
```

### Run Docker container
```bash
docker run -p 3000:3000 k8s-node-app
```

#### Sample Output (Docker)
```
Server running on port 3000, pod: <container-id>
```

## Kubernetes Deployment

### Apply deployment and service
```bash
kubectl apply -f node-deploy.yaml
```

### Check pods
```bash
kubectl get pods -l app=node-app
```

### Access the app (using NodePort or LoadBalancer)
Visit `http://<NodeIP>:30080` in your browser.

#### Sample Output (Kubernetes)
```
Hello from Node.js! Served by pod: node-app-deploy-xxxxx
```

## Files
- `index.js`: Main application code
- `Dockerfile`: Container build instructions
- `node-deploy.yaml`: Kubernetes deployment and service manifest
- `package.json`: Node.js dependencies and scripts

## License
MIT
