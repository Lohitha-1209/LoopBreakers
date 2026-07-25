/**
 * Configuration Module
 * 
 * Phase 1 Scope: Environment configuration loader structure.
 */

export interface AppConfig {
  environment: string;
  logLevel: string;
}

export const getAppConfig = (): AppConfig => ({
  environment: process.env.NEXUS_ENV || 'development',
  logLevel: process.env.LOG_LEVEL || 'info',
});
