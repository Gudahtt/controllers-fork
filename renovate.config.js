module.exports = {
  // Configuration
  branchPrefix: 'renovate/',
  dependencyDashboard: true,
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  enableHttp2: true,
  lockFileMaintenance: { enabled: true },
  packageRules: [
    {
      matchPackagePatterns: ['^eslint'],
      matchUpdateTypes: ['major'],
      groupName: 'ESLint packages',
    },
    {
      matchPackagePatterns: ['*'],
      matchUpdateTypes: ['minor', 'patch'],
      groupName: 'all non-major dependencies',
      groupSlug: 'all-minor-patch',
    },
  ],
  postUpdateOptions: ['yarnDedupeHighest'],
  prConcurrentLimit: 5,
  rangeStrategy: 'update-lockfile',
  stabilityDays: 30,

  // Self-Hosted configuration
  allowScripts: false,
  platform: 'github',
  onboarding: false,
};
