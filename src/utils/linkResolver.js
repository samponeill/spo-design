exports.linkResolver = function linkResolver(doc) {

  if (doc.type === 'homepage') {
    return '/';
  }
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
    return '/blog/' + doc.uid;
  }
  if (doc.type === 'content') {
    return '/' + doc.uid;
  }
  return '/';
}