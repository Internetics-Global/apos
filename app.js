var apos = require('apostrophe')({
  shortName: 'apos',
  title: 'apos',
  bundles: [ 'apostrophe-blog' ],
  // These are the modules we want to bring into the project.

  
  modules: {
    // This configures the apostrophe-users module to add an admin-level
    // group by default
    'apostrophe-users': {
      groups: [
        {
          title: 'guest',
          permissions: [ ]
        },
        {
          title: 'admin',
          permissions: [ 'admin' ]
        }
      ]
    },
    // This configures the apostrophe-assets module to push a 'site.less'
    // stylesheet by default
    'apostrophe-assets': {
      stylesheets: [
        {
          name: 'site'
        }
      ]
    },
    
    
    
    // Search
    'apostrophe-search': {},
    
 'apostrophe-blog': {
 
 contextual: 'true'
 
 },
  'apostrophe-blog-pages': {},
  'apostrophe-blog-widgets': {},
    
    
    // Add your modules and their respective configuration here!


 // This configures our default page template
    'apostrophe-pages': {
    
    filters: {
      
        // Grab our ancestor pages, with two levels of subpages
        ancestors: {
          children: {
            depth: 10
          }
        },
        // We usually want children of the current page, too
        children: true
      },
      
      types: [
      {
        name: 'general-page',
        label: 'General page'
      },
      {
        name: 'default',
        label: 'Default'
      },
      {
        name: 'home',
        label: 'Home'
      },
      {
        name: 'apostrophe-blog-page',
        label: 'Blog'
      }
    ],
    

      park: [ 
        { 
          slug: '/search', 
          type: 'apostrophe-search', 
          label: 'Search', 
          published: true 
        } 
      ] 
      
      
    },

	'contact-form': {},
    'contact-form-widgets': {}



  }
  


});
