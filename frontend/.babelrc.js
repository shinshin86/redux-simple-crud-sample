module.exports = {
  "plugins": [
    "@babel/syntax-object-rest-spread"
  ],
  "presets": [
    "@babel/react",
    [ "@babel/stage-0", {
      useBuiltIns: true,
      decoratorsLegacy: true
    }],
    [
      "@babel/env",
      {
        "targets": {
          "browsers": "last 2 Chrome versions"
        }
      }
    ]
  ]
}
