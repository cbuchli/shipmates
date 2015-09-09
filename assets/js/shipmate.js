/*
 Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */


displayInstalledToast = function() {
  document.querySelector('#caching-complete').show();
};

// See https://github.com/Polymer/polymer/issues/1381
window.addEventListener('WebComponentsReady', function() {
  // imports are loaded and elements have been registered
  var template = document.querySelector('iron-pages[is="pages"]');
  template.selected = "list";
});

// Close drawer after menu item is selected if drawerPanel is narrow
onMenuSelect = function() {
  var drawerPanel = document.querySelector('#paperDrawerPanel');
  if (drawerPanel.narrow) {
    drawerPanel.closeDrawer();
  }
};
