module.exports = {

  // set the context (optional)
  context: __dirname + '/src',
  entry: 'index.ts',

  // enable loading modules relatively (without the ../../ prefix)
  resolve: {
    root: [__dirname + "/src"],
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      // load and compile typescript to javascript
      {
        test: /\.ts$/,

        loader: 'typescript-simple?' + [
          // 2300 -> Duplicate identifier
          'ignoreWarnings[]=2300',
          // 2346 -> Supplied parameters do not match any signature of call target.
          'ignoreWarnings[]=2346',
          // 2309 -> An export assignment cannot be used in a module with other exported elements.
          'ignoreWarnings[]=2309'
        ].join('&'),

        exclude: [/node_modules/]
      },

      { test: /\.json$/, loader: 'json'},
      { test: /\.css$/, loader: "style!css"},
      { test: /\.html$/, exclude: /node_modules/, loader:"raw" },
      { test: /\.(ttf|eot|svg|otf)$/, loader: "file" },
      { test: /\.woff(2)?$/, loader: "url?limit=8192&minetype=application/font-woff"},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  },

  // webpack dev server configuration
  devServer: {
    contentBase: "./src",
    noInfo: false,
    port: 3000,
    inline: true,
    colors: true
  },

  // support source maps
  devtool: "#inline-source-map"
};
