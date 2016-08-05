/*
 * @author Will Steinmetz
 * notific8 Javascript plug-in - build task
 * Copyright (c)2013-2016, Will Steinmetz
 * Licensed under the BSD license.
 * http://opensource.org/licenses/BSD-3-Clause
 */

module.exports = {
  minify: {
    expand: true,
    files: {
      'dist/notific8-icon.min.css': ['dist/notific8-icon.css']
    }
  },
  add_banner: {
    options: {
      banner: "/**\n * @author Will Steinmetz\n * Icon module for the notific8 JavaScript plug-in\n * Copyright (c)2013-2016, Will Steinmetz\n * Licensed under the BSD license.\n * http://opensource.org/licenses/BSD-3-Clause\n */"
    },
    files: {
      'dist/notific8-icon.min.css': ['dist/notific8-icon.min.css']
    }
  }
};
