/*
 * @author Will Steinmetz
 * notific8 Javascript plug-in - build task
 * Copyright (c)2013-2016, Will Steinmetz
 * Licensed under the BSD license.
 * http://opensource.org/licenses/BSD-3-Clause
 */

module.exports = {
  options: {
    mangle: true,
    banner: "/**\n * @author Will Steinmetz\n * Icon module for the notific8 JavaScript plug-in\n * Copyright (c)2013-2016, Will Steinmetz\n * Licensed under the BSD license.\n * http://opensource.org/licenses/BSD-3-Clause\n */"
  },
  my_target: {
    files: {
      'dist/notific8-icon.min.js': [ 'dist/notific8-icon.js' ]
    }
  }
};
