module.exports = {
  apps: [{
      name: "proxy",
      script: "server.js",
      env: {
        "NODE_ENV": "production",
      }
    },
    {
      name: "core",
      script: "app.js",
      cwd: "./servers/core",
      env: {
        "NODE_ENV": "production",
      }
    }
  ]
}