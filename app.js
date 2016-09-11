var apos = require('apostrophe')({
  shortName: 'apos',
  title: 'apos',

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
