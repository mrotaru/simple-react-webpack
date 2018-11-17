import merge from 'lodash.merge'
import { toQueryParams, joinUrls } from './lib'

export const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

const Api = {
  setConfig(config) {
    this.config = merge({
      headers: defaultHeaders,
      params: {},
    }, config)
  },
  mergeConfig(config) {
    merge(
      this.config,
      config,
    )
  },
  async request({
    url,
    endpoint = url,
    method = 'GET',
    payload,
    params,
    headers,
    ...rest
  }) {
    const { baseUrl } = this.config
    const finalMethod = method.toLowerCase()
    const finalUrl = new URL(joinUrls(baseUrl, endpoint))
    const queryString = toQueryParams(params)
    if (queryString.length) {
      finalUrl.search = queryString
    }
    const fetchParams = {
      method: finalMethod,
      url: finalUrl.toString(),
    }
    const finalHeaders = merge({}, this.config.headers, headers)
    if (payload) {
      fetchParams.body = JSON.stringify(payload)
    }
    return await fetch({
      ...fetchParams,
      headers: finalHeaders,
      ...rest,
    })
  },
}

export default Api
