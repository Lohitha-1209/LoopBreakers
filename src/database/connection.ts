import { Pool, PoolConfig } from 'pg';

/**
 * PostgreSQL Database Connection Placeholder
 * 
 * Phase 1 Scope:
 * Contains database client connection configuration structure only.
 * No database tables, schemas, migrations, or queries are defined or executed in this phase.
 */

export interface DatabaseConfig extends PoolConfig {
  host?: string;
  port?: number;
  database?: string;
  user?: string;
  password?: string;
  ssl?: boolean | object;
}

export class DatabaseConnection {
  private static instance: DatabaseConnection;
  private pool: Pool | null = null;

  private constructor() {}

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  /**
   * Initializes the connection pool with options from configuration/environment.
   */
  public initialize(config: DatabaseConfig): void {
    if (!this.pool) {
      this.pool = new Pool(config);
    }
  }

  /**
   * Returns the underlying PostgreSQL Pool instance.
   */
  public getPool(): Pool | null {
    return this.pool;
  }
}

export default DatabaseConnection;
