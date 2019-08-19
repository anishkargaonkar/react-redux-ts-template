import config from "../config/app";

const isProd: boolean = config.isProd;

const API_ENDPOINT = isProd
  ? config.production.api_endpoint
  : config.staging.api_endpoint
