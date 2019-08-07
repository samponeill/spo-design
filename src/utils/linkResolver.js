exports.linkResolver = function linkResolver(doc) {
  if (doc.type === 'work') {
    return '/work';
  }
  if (doc.type === 'case_study') {    
    return '/work/' + doc.uid;
  }
  if (doc.type === 'blog_home') {
    return '/blog';
  }
  if (doc.type === 'blog_post') {
    return '/articles/' + doc.uid;
  }
  if (doc.type === 'content') {
    return '/' + doc.uid;
  }
  if (doc.type === 'form') {
    return '/' + doc.uid;
  } 
  return '/';
}