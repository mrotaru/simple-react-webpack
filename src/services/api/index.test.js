const Api = require('.')

describe('api service', () => {
  let api

  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      ok: true,
      json: jest.fn(),
    }))
    api = Object.create(Api, {
      baseUrl: 'https://foo.com/api'
    })
  })

  test('GET', async () => {
    expect(global.fetch).not.toBeCalled()
    await api.request({ method: 'GET', endpoint: '/bar' })
    expect(global.fetch).toHaveBeenCalledWith(
      'https://foo.com/api/bar',
      expect.objectContaining({
        method: 'get',
      })
    )
  })
})
