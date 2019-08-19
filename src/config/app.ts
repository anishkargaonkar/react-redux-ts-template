type Config = {
  isProd: boolean,
  production: {
    api_endpoint: string
  },
  staging: {
    api_endpoint: string
  },
  development: {
    api_endpoint: string
  }
}

const config: Config = {
  isProd: false,
  production: {
    api_endpoint: '/api/v1'
  },
  staging: {
    api_endpoint: ''
  },
  development: {
    api_endpoint: ''
  }
}

export default config;
