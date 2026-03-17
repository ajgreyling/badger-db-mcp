> [!NOTE]  
> Brought to you by [Bytebase](https://www.bytebase.com/), open-source database DevSecOps platform.

<p align="center">
  <img src="assets/badgerlogo.svg" alt="" height="80" style="vertical-align: middle;" />
  <span style="font-size: 2.5rem; font-weight: 700; vertical-align: middle; margin-left: 0.5rem;">Badger DB MCP</span>
</p>

```mermaid
flowchart LR
    subgraph clients["MCP Clients"]
        c1[Claude Desktop]
        c2[Claude Code]
        c3[Cursor]
        c4[VS Code]
        c5[Copilot CLI]
    end

    S[Badger DB MCP]

    subgraph databases["Databases"]
        d1[PostgreSQL]
        d2[SQL Server]
        d3[SQLite]
        d4[MySQL]
        d5[MariaDB]
    end

    clients --> S
    S --> databases
```

Badger DB MCP is a zero-dependency, token efficient MCP server implementing the Model Context Protocol (MCP) server interface. This lightweight gateway allows MCP-compatible clients to connect to and explore different databases. It is a fork of [DBHub](https://github.com/bytebase/dbhub).

- **Local Development First**: Zero dependency, token efficient with just two MCP tools to maximize context window
- **Multi-Database**: PostgreSQL, MySQL, MariaDB, SQL Server, and SQLite through a single interface
- **Multi-Connection**: Connect to multiple databases simultaneously with TOML configuration
- **Guardrails**: Read-only mode, row limiting, and query timeout to prevent runaway operations
- **Secure Access**: SSH tunneling and SSL/TLS encryption

## Supported Databases

PostgreSQL, MySQL, SQL Server, MariaDB, and SQLite.

## MCP Tools

Badger DB MCP implements MCP tools for database operations:

- **[execute_sql](https://dbhub.ai/tools/execute-sql)**: Execute SQL queries with transaction support and safety controls
- **[search_objects](https://dbhub.ai/tools/search-objects)**: Search and explore database schemas, tables, columns, indexes, and procedures with progressive disclosure
- **[Custom Tools](https://dbhub.ai/tools/custom-tools)**: Define reusable, parameterized SQL operations in your `dbhub.toml` configuration file

## Workbench

Badger DB MCP includes a [built-in web interface](https://dbhub.ai/workbench/overview) for interacting with your database tools. It provides a visual way to execute queries, run custom tools, and view request traces without requiring an MCP client.

![workbench](https://raw.githubusercontent.com/bytebase/dbhub/main/docs/images/workbench/workbench.webp)

## Installation

See the full [Installation Guide](https://dbhub.ai/installation) for detailed instructions.

### Quick Start

**Docker:**

```bash
docker run --rm --init \
   --name badger-db-mcp \
   --publish 8080:8080 \
   bytebase/dbhub \
   --transport http \
   --port 8080 \
   --dsn "postgres://user:password@localhost:5432/dbname?sslmode=disable"
```

**NPM:**

```bash
npx @bytebase/dbhub@latest --transport http --port 8080 --dsn "postgres://user:password@localhost:5432/dbname?sslmode=disable"
```

**Demo Mode:**

```bash
npx @bytebase/dbhub@latest --transport http --port 8080 --demo
```

See [Command-Line Options](https://dbhub.ai/config/command-line) for all available parameters.

### Multi-Database Setup

Connect to multiple databases simultaneously using TOML configuration files. Perfect for managing production, staging, and development databases from a single Badger DB MCP instance.

See [Multi-Database Configuration](https://dbhub.ai/config/toml) for complete setup instructions.

## Development

```bash
# Install dependencies
pnpm install

# Run in development mode
pnpm dev

# Build and run for production
pnpm build && pnpm start --transport stdio --dsn "postgres://user:password@localhost:5432/dbname"
```

See [Testing](.claude/skills/testing/SKILL.md) and [Debug](https://dbhub.ai/config/debug) for Badger DB MCP.

## Contributors

<a href="https://github.com/bytebase/dbhub/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=bytebase/dbhub" />
</a>

## Star History

![Star History Chart](https://api.star-history.com/svg?repos=bytebase/dbhub&type=Date)
