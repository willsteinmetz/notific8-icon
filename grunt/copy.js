/*
 * @author Will Steinmetz
 * notific8 Javascript plug-in - build task
 * Copyright (c)2013-2016, Will Steinmetz
 * Licensed under the BSD license.
 * http://opensource.org/licenses/BSD-3-Clause
 */

module.exports = {
  fonts: {
    files: [
      {
        expand: true,
        cwd: 'src/fonts',
        src: [ '*' ],
        dest: 'dist/fonts/'
      }
    ]
  }
};
