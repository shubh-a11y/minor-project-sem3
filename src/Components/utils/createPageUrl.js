export const createPageUrl = (pageName, params = {}) => {
  const baseUrls = {
    'Home': '/',
    'Services': '/services',
    'Search': '/search',
    'ServiceGuide': '/service-guide'
  };

  let url = baseUrls[pageName] || '/';
  
  // Handle query parameters
  if (typeof pageName === 'string' && pageName.includes('?')) {
    const [basePage, queryString] = pageName.split('?');
    url = baseUrls[basePage] || '/';
    if (queryString) {
      url += `?${queryString}`;
    }
  }
  
  return url;
}; 