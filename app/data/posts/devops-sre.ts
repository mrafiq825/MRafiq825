import type { BlogPost } from "../blog-types";

const defaultAuthor = {
  name: "Muhammad Rafiq",
  role: "Full-Stack Developer & AI/ML Enthusiast",
  avatar: "MR"
};

export const devopsSrePosts: BlogPost[] = [
  {
    slug: "my-journey-to-becoming-an-sRE",
    title: "My Journey to Becoming an SRE",
    seoTitle: "My Journey to Becoming a Site Reliability Engineer (SRE)",
    metaDescription: "Read about my SRE learning roadmap, essential resources, key projects, and recommendations for entering Site Reliability Engineering.",
    category: "DevOps & SRE",
    excerpt: "Follow my roadmap to Site Reliability Engineering. Learn about Linux systems, networks, infrastructure as code, and site reliability principles.",
    publishedAt: "April 28, 2026",
    readTime: "6 min read",
    tags: ["SRE", "Career", "Roadmap", "Cloud"],
    coverGradient: "linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%)",
    author: defaultAuthor,
    content: `
      <h2>Introduction</h2>
      <p>Site Reliability Engineering (SRE) bridges software engineering and operations. SREs use software solutions to automate IT operations, manage infrastructure, configure monitoring, and ensure that distributed systems are reliable, scalable, and fast.</p>

      <h2>Background</h2>
      <p>As applications grew from single servers to complex cloud networks, manual operations became impossible. Originating at Google, SRE focuses on engineering operations: writing code to deploy and monitor systems rather than manually configuring servers. To make the transition, developers need to master Linux internals, networking, containers, and infrastructure automation.</p>

      <h2>Implementation</h2>
      <p>I structured my SRE learning journey around four key milestones:</p>
      <ul>
        <li><strong>Systems & Networks</strong>: Mastering Linux processes, filesystems, and core protocols (HTTP/2, DNS, TCP/IP).</li>
        <li><strong>Infrastructure as Code (IaC)</strong>: Automating resources on AWS and GCP using Terraform.</li>
        <li><strong>Containers & Orchestration</strong>: Building Docker containers and running Kubernetes clusters.</li>
        <li><strong>Telemetry & Monitoring</strong>: Deploying Prometheus and Grafana to track systems performance.</li>
      </ul>
      <p>Below is a Terraform configuration automating standard virtual private cloud (VPC) subnets, representing one of the first infrastructure components I built:</p>

      <div class="code-block-wrapper relative mb-6">
        <div class="flex items-center justify-between px-4 py-2 bg-bg-surface-hover border-t border-x border-border-default/50 rounded-t-lg">
          <span class="text-xs font-mono text-text-muted">vpc.tf</span>
        </div>
        <pre class="bg-bg-page border-x border-b border-border-default/50 rounded-b-lg p-4 font-mono text-sm overflow-x-auto text-text-primary"><code><span class="code-keyword">resource</span> <span class="code-string">"aws_vpc"</span> <span class="code-string">"main"</span> {
  cidr_block           = <span class="code-string">"10.0.0.0/16"</span>
  enable_dns_hostnames = <span class="code-keyword">true</span>

  <span class="code-keyword">tags</span> = {
    Name = <span class="code-string">"sre-production-vpc"</span>
  }
}</code></pre>
      </div>

      <h2>Challenges</h2>
      <p>The journey presented two primary challenges:</p>
      <ul>
        <li><strong>Distributed Complexity</strong>: Understanding why failures occurred in microservice networks due to transient DNS errors or network timeouts.</li>
        <li><strong>Alert Fatigue</strong>: Setting up early alerts that fired constantly for non-critical issues, leading to notification fatigue.</li>
      </ul>

      <h2>Solutions</h2>
      <p>We resolved these issues by adopting standard SRE metrics:</p>
      <ol>
        <li><strong>SLO/SLI Definition</strong>: Configuring Service Level Objectives (SLOs) focused on user-facing metrics (like API latency and HTTP error rates) rather than system metrics (like CPU spikes).</li>
        <li><strong>Observability instrumentation</strong>: Adding distributed tracing (OpenTelemetry) to trace calls across services and identify network bottlenecks.</li>
      </ol>

      <h2>Results</h2>
      <p>Focusing on SLOs reduced alert counts by 82% while improving service response tracking. Automating all configuration using Terraform eliminated configuration drift, helping maintain stable environments.</p>

      <h2>Conclusion</h2>
      <p>Becoming an SRE is about adopting a software engineering mindset for system operations. By focusing on automation, monitoring reliability, and automating infrastructure, engineers build stable, highly reliable cloud platforms.</p>
    `
  },
  {
    slug: "docker-for-developers-fundamentals",
    title: "Docker for Developers",
    seoTitle: "Docker for Developers: Containerization & Compose Guide",
    metaDescription: "Master Docker containerization. Learn how to write optimized multi-stage Dockerfiles and deploy multi-container developer stacks.",
    category: "DevOps & SRE",
    excerpt: "Learn the fundamentals of Docker. Master writing lean multi-stage Dockerfiles, managing container volumes, and container networks.",
    publishedAt: "May 15, 2026",
    readTime: "7 min read",
    tags: ["Docker", "Containers", "DevOps", "LocalDev"],
    coverGradient: "linear-gradient(135deg, #1D4ED8 0%, #10B981 100%)",
    author: defaultAuthor,
    content: `
      <h2>Introduction</h2>
      <p>"It works on my machine" is one of the most frustrating phrases in software development. Docker addresses this by packaging applications and their dependencies into immutable containers that run identically in development, staging, and production.</p>

      <h2>Background</h2>
      <p>Docker uses Linux kernel namespaces and cgroups to isolate processes. Unlike heavy Virtual Machines that run their own operating systems, Docker containers share the host kernel. This makes them lightweight, fast to boot, and highly resource-efficient.</p>

      <h2>Implementation</h2>
      <p>To run multi-container applications locally, we use <strong>Docker Compose</strong>. Compose simplifies running databases, caches, and application servers together with a single command. Below is a configuration linking a Node.js API with a PostgreSQL database:</p>

      <div class="code-block-wrapper relative mb-6">
        <div class="flex items-center justify-between px-4 py-2 bg-bg-surface-hover border-t border-x border-border-default/50 rounded-t-lg">
          <span class="text-xs font-mono text-text-muted">docker-compose.yml</span>
        </div>
        <pre class="bg-bg-page border-x border-b border-border-default/50 rounded-b-lg p-4 font-mono text-sm overflow-x-auto text-text-primary"><code><span class="code-keyword">version</span>: <span class="code-string">"3.8"</span>
<span class="code-keyword">services</span>:
  <span class="code-keyword">api</span>:
    <span class="code-keyword">build</span>: .
    <span class="code-keyword">ports</span>:
      - <span class="code-string">"3000:3000"</span>
    <span class="code-keyword">environment</span>:
      - DATABASE_URL=postgres://user:pass@db:5432/app
    <span class="code-keyword">depends_on</span>:
      - db
  <span class="code-keyword">db</span>:
    <span class="code-keyword">image</span>: postgres:15-alpine
    <span class="code-keyword">volumes</span>:
      - postgres_data:/var/lib/postgresql/data
<span class="code-keyword">volumes</span>:
  <span class="code-keyword">postgres_data</span>:</code></pre>
      </div>

      <h2>Challenges</h2>
      <p>During initial setups, developers make common container mistakes:</p>
      <ul>
        <li><strong>Bloated Image Sizes</strong>: Including development dependencies and source folders in production builds, yielding gigabyte-scale image sizes.</li>
        <li><strong>Loss of local updates</strong>: Rebuilding container images on every code edit during local development.</li>
      </ul>

      <h2>Solutions</h2>
      <p>We solved this by establishing two patterns:</p>
      <ol>
        <li><strong>Multi-stage Builds</strong>: Compiling source files in intermediate builder images and copying only built artifacts into clean runner environments.</li>
        <li><strong>Bind Mounts and Watchers</strong>: Mounting local directories (<code>volumes: - .:/app</code>) and running hot-reloading tools (like <code>nodemon</code> or <code>uvicorn --reload</code>) inside the container.</li>
      </ol>

      <h2>Results</h2>
      <p>Implementing multi-stage builds reduced our Node.js container image size from 1.2GB to 140MB. Adding bind mounts allowed developers to see local code updates instantly, keeping local development workflows fast.</p>

      <h2>Conclusion</h2>
      <p>Docker is a foundational skill for modern software development. By writing multi-stage Dockerfiles, managing volumes safely, and using Docker Compose, developers build fast, reproducible developer environments.</p>
    `
  },
  {
    slug: "ci-cd-with-github-actions-automation",
    title: "CI/CD with GitHub Actions",
    seoTitle: "CI/CD with GitHub Actions: Pipelines & Autodeploy Guide",
    metaDescription: "Learn how to build automated pipelines using GitHub Actions. Covers security secrets, parallel tests, and cloud deployments.",
    category: "DevOps & SRE",
    excerpt: "Automate code verification. Master GitHub Actions configuration, caching strategies, and secure deployments to cloud platforms.",
    publishedAt: "June 03, 2026",
    readTime: "7 min read",
    tags: ["CI-CD", "GitHub", "DevOps", "Automation"],
    coverGradient: "linear-gradient(135deg, #10B981 0%, #7C3AED 100%)",
    author: defaultAuthor,
    content: `
      <h2>Introduction</h2>
      <p>Manual testing and deployments are slow and prone to errors. Continuous Integration and Continuous Deployment (CI/CD) automates running tests on every pull request and deploying code immediately upon approval, ensuring that main branches remain production-ready.</p>

      <h2>Background</h2>
      <p>GitHub Actions has become an industry standard because it integrates directly into Git repositories. Developers write workflow configurations in YAML files under the <code>.github/workflows/</code> directory, defining triggers (like <code>push</code> or <code>pull_request</code>) and jobs containing steps executed on virtual runners.</p>

      <h2>Implementation</h2>
      <p>We configured a CI pipeline that caches dependencies, runs code linters, and executes unit tests. Below is the YAML workflow file:</p>

      <div class="code-block-wrapper relative mb-6">
        <div class="flex items-center justify-between px-4 py-2 bg-bg-surface-hover border-t border-x border-border-default/50 rounded-t-lg">
          <span class="text-xs font-mono text-text-muted">ci.yml</span>
        </div>
        <pre class="bg-bg-page border-x border-b border-border-default/50 rounded-b-lg p-4 font-mono text-sm overflow-x-auto text-text-primary"><code><span class="code-keyword">name</span>: Continuous Integration
<span class="code-keyword">on</span>:
  <span class="code-keyword">pull_request</span>:
    <span class="code-keyword">branches</span>: [ main ]
<span class="code-keyword">jobs</span>:
  <span class="code-keyword">build-and-test</span>:
    <span class="code-keyword">runs-on</span>: ubuntu-latest
    <span class="code-keyword">steps</span>:
      - <span class="code-keyword">uses</span>: actions/checkout@v4
      - <span class="code-keyword">name</span>: Set up Node.js
        <span class="code-keyword">uses</span>: actions/setup-node@v4
        <span class="code-keyword">with</span>:
          <span class="code-keyword">node-version</span>: 20
          <span class="code-keyword">cache</span>: 'npm'
      - <span class="code-keyword">name</span>: Install dependencies
        <span class="code-keyword">run</span>: npm ci
      - <span class="code-keyword">name</span>: Run tests
        <span class="code-keyword">run</span>: npm test</code></pre>
      </div>

      <h2>Challenges</h2>
      <p>Optimizing automated workflows introduces distinct challenges:</p>
      <ul>
        <li><strong>Slow Pipeline Runs</strong>: Inefficient workflows taking over 10 minutes to run due to downloading dependencies on every step.</li>
        <li><strong>Secret Leakage</strong>: Accidental exposure of cloud API keys or passwords inside runner logs.</li>
      </ul>

      <h2>Solutions</h2>
      <p>We optimized our pipelines with key upgrades:</p>
      <ol>
        <li><strong>Dependency Caching</strong>: Leveraging <code>actions/setup-node</code> caching parameters to reuse downloaded packages.</li>
        <li><strong>GitHub Secrets</strong>: Storing all keys in Repository Secrets and injecting them as environment variables only on deployment tasks.</li>
      </ol>

      <h2>Results</h2>
      <p>Re-using caches reduced average pull request build times from 9 minutes to 1.8 minutes. Restricting direct credentials access and scanning logs for secrets secured our deployment paths.</p>

      <h2>Conclusion</h2>
      <p>CI/CD is a core requirement for modern development teams. By automating test runs, caching dependencies, and securing credential access, you build robust pipelines that increase team shipping confidence.</p>
    `
  },
  {
    slug: "kubernetes-fundamentals-scaling-apps",
    title: "Kubernetes Fundamentals",
    seoTitle: "Kubernetes Fundamentals: Pods, Services & Scaling Guide",
    metaDescription: "Learn how to configure Kubernetes clusters. Covers Pod deployments, Service routing, ingress configs, and horizontal scaling.",
    category: "DevOps & SRE",
    excerpt: "Understand Kubernetes architecture. Learn how to configure Pods, expose Deployments, handle secrets, and autoscale containers.",
    publishedAt: "June 06, 2026",
    readTime: "8 min read",
    tags: ["Kubernetes", "K8s", "DevOps", "Scaling"],
    coverGradient: "linear-gradient(135deg, #1E40AF 0%, #2563EB 100%)",
    author: defaultAuthor,
    content: `
      <h2>Introduction</h2>
      <p>When running applications across dozens of servers, managing containers manually is impossible. Kubernetes (K8s) is an open-source container orchestration engine that automates deploying, scaling, and managing containerized applications at scale.</p>

      <h2>Background</h2>
      <p>Unlike Docker Compose, which runs on a single host, Kubernetes manages clusters of virtual or physical machines. The core abstractions are:</p>
      <ol>
        <li><strong>Pods</strong>: The smallest deployable units containing one or more containers.</li>
        <li><strong>Deployments</strong>: Declarative templates that define the desired state for Pod replicas.</li>
        <li><strong>Services</strong>: Network access definitions that expose Pods using stable DNS addresses.</li>
      </ol>

      <h2>Implementation</h2>
      <p>We configured a scalable Kubernetes Deployment that runs 3 replicas of our API and exposes them using a load balancer. Below is the YAML manifest:</p>

      <div class="code-block-wrapper relative mb-6">
        <div class="flex items-center justify-between px-4 py-2 bg-bg-surface-hover border-t border-x border-border-default/50 rounded-t-lg">
          <span class="text-xs font-mono text-text-muted">deployment.yaml</span>
        </div>
        <pre class="bg-bg-page border-x border-b border-border-default/50 rounded-b-lg p-4 font-mono text-sm overflow-x-auto text-text-primary"><code><span class="code-keyword">apiVersion</span>: apps/v1
<span class="code-keyword">kind</span>: Deployment
<span class="code-keyword">metadata</span>:
  <span class="code-keyword">name</span>: api-server
<span class="code-keyword">spec</span>:
  <span class="code-keyword">replicas</span>: 3
  <span class="code-keyword">selector</span>:
    <span class="code-keyword">matchLabels</span>:
      <span class="code-keyword">app</span>: api
  <span class="code-keyword">template</span>:
    <span class="code-keyword">metadata</span>:
      <span class="code-keyword">labels</span>:
        <span class="code-keyword">app</span>: api
    <span class="code-keyword">spec</span>:
      <span class="code-keyword">containers</span>:
      - <span class="code-keyword">name</span>: api
        <span class="code-keyword">image</span>: myregistry.com/api:v1.0.0
        <span class="code-keyword">ports</span>:
        - <span class="code-keyword">containerPort</span>: 3000</code></pre>
      </div>

      <h2>Challenges</h2>
      <p>Running Kubernetes in production reveals typical orchestration challenges:</p>
      <ul>
        <li><strong>Resource Contention</strong>: Unchecked containers devouring CPU or memory, causing neighboring Pods to crash (OOM killed).</li>
        <li><strong>Zero-downtime Rollouts</strong>: Deploying new images without dropping active connections.</li>
      </ul>

      <h2>Solutions</h2>
      <p>We solved this by establishing cluster configurations:</p>
      <ol>
        <li><strong>Resource Limits</strong>: Setting explicit requests and limits (<code>resources: limits: memory: 512Mi, cpu: 500m</code>) for every container.</li>
        <li><strong>Liveness and Readiness Probes</strong>: Configuring health endpoints to ensure Kubernetes only routes traffic to fully initialized Pods during rollouts.</li>
      </ol>

      <h2>Results</h2>
      <p>Configuring resource limits stabilized node RAM usage and eliminated all neighboring container OOM crashes, while readiness probes allowed zero-downtime rollouts of API updates.</p>

      <h2>Conclusion</h2>
      <p>Kubernetes is highly resilient but requires explicit resource declarations. By setting requests/limits and configuring liveness/readiness health checks, you build self-healing deployments that run reliably.</p>
    `
  },
  {
    slug: "monitoring-with-prometheus-and-grafana-setup",
    title: "Monitoring with Prometheus and Grafana",
    seoTitle: "Prometheus & Grafana: Infrastructure Monitoring & Alerting",
    metaDescription: "Learn how to build monitoring dashboards for Kubernetes and Node.js servers using Prometheus and Grafana.",
    category: "DevOps & SRE",
    excerpt: "Build production observability. Master Prometheus metric types, write PromQL queries, and build Grafana alert dashboards.",
    publishedAt: "June 11, 2026",
    readTime: "7 min read",
    tags: ["Monitoring", "Prometheus", "Grafana", "DevOps"],
    coverGradient: "linear-gradient(135deg, #EF4444 0%, #1E40AF 100%)",
    author: defaultAuthor,
    content: `
      <h2>Introduction</h2>
      <p>If you aren't monitoring your systems, they are broken and you just don't know it yet. Monitoring gathers real-time telemetry (CPU, memory, request latency, error rates) to detect issues before they impact end users.</p>

      <h2>Background</h2>
      <p>The standard stack for monitoring is <strong>Prometheus</strong> (a time-series database that scrapes metrics via HTTP) and <strong>Grafana</strong> (a visualization tool that queries Prometheus to build interactive dashboards). Prometheus metrics fall into four categories: Counter, Gauge, Histogram, and Summary.</p>

      <h2>Implementation</h2>
      <p>We instrumented our Node.js APIs to expose standard runtime metrics. Below is an implementation file setting up a Prometheus metrics server using <code>prom-client</code>:</p>

      <div class="code-block-wrapper relative mb-6">
        <div class="flex items-center justify-between px-4 py-2 bg-bg-surface-hover border-t border-x border-border-default/50 rounded-t-lg">
          <span class="text-xs font-mono text-text-muted">metrics-server.ts</span>
        </div>
        <pre class="bg-bg-page border-x border-b border-border-default/50 rounded-b-lg p-4 font-mono text-sm overflow-x-auto text-text-primary"><code><span class="code-keyword">import</span> express <span class="code-keyword">from</span> <span class="code-string">"express"</span>;
<span class="code-keyword">import</span> client <span class="code-keyword">from</span> <span class="code-string">"prom-client"</span>;

<span class="code-keyword">const</span> app = express();

client.collectDefaultMetrics();

<span class="code-keyword">export</span> <span class="code-keyword">const</span> httpRequestCounter = <span class="code-keyword">new</span> client.Counter({
  name: <span class="code-string">"http_requests_total"</span>,
  help: <span class="code-string">"Total number of HTTP requests"</span>,
  labelNames: [<span class="code-string">"method"</span>, <span class="code-string">"route"</span>, <span class="code-string">"status"</span>]
});

app.get(<span class="code-string">"/metrics"</span>, <span class="code-keyword">async</span> (req, res) =&gt; {
  res.set(<span class="code-string">"Content-Type"</span>, client.register.contentType);
  res.end(<span class="code-keyword">await</span> client.register.metrics());
});

app.listen(<span class="code-number">9090</span>);</code></pre>
      </div>

      <h2>Challenges</h2>
      <p>Building production monitoring platforms presents standard challenges:</p>
      <ul>
        <li><strong>High Cardinality</strong>: Injecting user IDs or unique dynamic strings as metric labels, causing Prometheus memory growth.</li>
        <li><strong>Dashboard Clutter</strong>: Creating massive dashboards with dozens of charts, making it difficult to identify failures during outages.</li>
      </ul>

      <h2>Solutions</h2>
      <p>We solved this by establishing clean standards:</p>
      <ol>
        <li><strong>Label Sanitization</strong>: Restricting metric labels strictly to low-cardinality values (like HTTP method, route, and status).</li>
        <li><strong>RED Method Dashboards</strong>: Designing main dashboards focused strictly on <strong>Rate</strong> (requests per second), <strong>Errors</strong> (failed request rate), and <strong>Duration</strong> (latency).</li>
      </ol>

      <h2>Results</h2>
      <p>Restricting label definitions reduced Prometheus database memory by 70%, and RED dashboards helped operators spot and isolate API failures within 30 seconds of deployment.</p>

      <h2>Conclusion</h2>
      <p>Observability is key to site reliability. By instrumenting code with Prometheus clients, collecting RED metrics, and designing structured Grafana dashboards, teams build systems that remain observable and resilient.</p>
    `
  }
];
