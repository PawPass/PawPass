export interface IConfig2 {
  sqldb: ISql2,
  jwt: ITokenSecret
}

interface ISql2 {
  url: string | undefined,
  // port: number | undefined,
  // username: string | undefined,
  // password: string | undefined,
  // collection: string | undefined,
}

interface ITokenSecret {
  access: string | undefined,
  refresh: string | undefined
}
