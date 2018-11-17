import { toQueryParams, joinUrls } from './lib'

const check = (obj, str) => expect(toQueryParams(obj)).toEqual(str)

describe('services.api.libs', () => {
  test('toQueryParams', () => {
    check(undefined, '')
    check({}, '')
    check({ foo: 42 }, 'foo=42')
    check({ foo: 42, bar: 'xyz' }, 'foo=42&bar=xyz')
  })
  test('toQueryParams', () => {
    expect(joinUrls('foo')).toEqual('foo')
    expect(joinUrls('foo', 'bar')).toEqual('foo/bar')
    expect(joinUrls('foo/', 'bar')).toEqual('foo/bar')
    expect(joinUrls('foo', '/bar')).toEqual('foo/bar')
    expect(joinUrls('foo/', '/bar')).toEqual('foo/bar')
  })
})
