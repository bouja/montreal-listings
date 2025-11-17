module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/r',
        has: [{ type: 'query', key: 'to' }],
        destination: '/api/r?to=:to',
        permanent: false
      }
    ];
  }
};