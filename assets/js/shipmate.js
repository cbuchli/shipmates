
setActivePage = function(pageName, scrollTo) {
  var template = document.querySelector('iron-pages[is="pages"]');
  if (pageName == '' || typeof pageName == "undefined") {
    pageName = 'list';
  }
  template.selected = pageName;

  // scrol to
  if (scrollTo == true) {
    template.scrollIntoView();
  }
};

// set and display default iron-page
window.addEventListener('WebComponentsReady', function() {
  setActivePage('');
});

// Close drawer after menu item is selected if drawerPanel is narrow
onMenuSelect = function() {
  var drawerPanel = document.querySelector('#paperDrawerPanel');
  if (drawerPanel.narrow) {
    drawerPanel.closeDrawer();
  }
};
