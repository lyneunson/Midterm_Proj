var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
    {
      path: '/adobo/',
      url: 'adobo.html',
    },
    {
      path: '/afritada/',
      url: 'afritada.html',
    },
    {
      path: '/bulalo/',
      url: 'bulalo.html',
    },
    {
      path: '/kinilaw/',
      url: 'kinilaw.html',
    },
    {
      path: '/sisig/',
      url: 'sisig.html',
    },
    {
      path: '/tinola/',
      url: 'tinola.html',
    },
    {
      path: '/entourage/',
      url: 'entourage.html',
    },
    {
      path: '/guest/',
      url: 'quest.html',
    },
    {
      path: '/sponsors/',
      url: 'sponsors.html',
    },
    {
      path: '/programflow/',
      url: 'programflow.html',
    },
    {
      path: '/reception/',
      url: 'reception.html',
    },
    {
      path: '/food/',
      url: 'food.html',
    },
    {
      path: '/attire/',
      url: 'attire.html',
    },
    {
      path: '/lynette/',
      url: 'lynette.html',
    },
    {
      path: '/frederic/',
      url: 'frederic.html',
    },
    {
      path: '/camille/',
      url: 'camille.html',
    },
     {
      path: '/main/',
      url: 'main.html',
    },
  ],
  // ... other parameters
  theme:'auto'
});

var mainView = app.views.create('.view-main');
