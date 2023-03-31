function isValidWalk(walk) {
  return ( walk.length === 10 && walk.filter(item => item === 'n').length===walk.filter(item => item === 's').length && walk.filter(item => item === 'w').length===walk.filter(item => item === 'e').length)
}