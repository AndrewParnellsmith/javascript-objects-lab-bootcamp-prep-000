var recipes = {prop: 1}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  object
}
function deleteFromObjectByKey(object, key) {
  var newobject = Object.assign({}, object)
  delete newobject.key
}