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
      cwd: "./servers/core/dist",
      env: {
        "NODE_ENV": "production",
      }
    },
    {
      name: "upload",
      script: "app.js",
      cwd: "./servers/upload/dist",
      env: {
        "NODE_ENV": "production",
      }
    },
    {
      name: "files",
      script: "app.js",
      cwd: "./servers/files/dist",
      env: {
        "NODE_ENV": "production",
      }
    }
  ]
}