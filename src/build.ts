// Build stamp shown in the footer and published at /build.json so anyone can confirm which
// version of the site they are looking at (Vercel sets VERCEL_GIT_COMMIT_SHA at build time).
const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {};
export const BUILD = {
  sha: (env.VERCEL_GIT_COMMIT_SHA ?? 'local').slice(0, 7),
  branch: env.VERCEL_GIT_COMMIT_REF ?? 'local',
  env: env.VERCEL_ENV ?? 'local',
  date: new Date().toISOString(),
};
