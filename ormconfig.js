const rootDir = process.env.NODE_ENV === 'development' ? 'src' : 'build'

module.exports = {
  type: process.env.DB_DIALECT,
  // host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  // username: process.env.DB_USERNAME,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_DATABASE,
  url:'postgres://yduualjlyktgue:bfd82547362fc9c2ab6e4a1a20e1965994735f3dfca14418e25c995ad591ef88@ec2-18-215-111-67.compute-1.amazonaws.com:5432/db2cgu882qfj8k',
  synchronize: true,
  logging: process.env.NODE_ENV === 'development',
  entities: [rootDir + '/entities/**/*{.ts,.js}'],
  migrations: [rootDir + '/migrations/**/*{.ts,.js}'],
  subscribers: [rootDir + '/subscribers/**/*{.ts,.js}'],
  seeds: [rootDir + '/seeds/**/*{.ts,.js}'],
  cli: {
    entitiesDir: rootDir + '/entities',
    migrationsDir: rootDir + '/migrations',
    subscribersDir: rootDir + '/subscribers',
  },
}
