import Api, { defaultHeaders } from '.'

describe('api service', () => {
  let api

  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      ok: true,
      json: jest.fn(),
    }))
    api = Object.create(Api)
    api.setConfig({
      baseUrl: 'https://foo.com/api'
    })
  })

  test('GET', async () => {
    expect(global.fetch).not.toBeCalled()
    await api.request({ method: 'GET', endpoint: '/bar' })
    expect(global.fetch.mock.calls[0]).toEqual([{
      method: 'get',
      url: 'https://foo.com/api/bar',
      headers: defaultHeaders,
    }])
  })
})
