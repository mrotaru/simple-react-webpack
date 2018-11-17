export const toQueryParams = (obj = {}) =>
  Object.keys(obj)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join('&')

export const joinUrls = (url1, url2 = '') => {
  const _url1 = url1.endsWith('/') ? url1.substring(0, url1.length -1) : url1
  const _url2 = url2.startsWith('/') ? url2.substring(1) : url2
  return _url2
    ? _url1 + '/' + _url2
    : _url1
}