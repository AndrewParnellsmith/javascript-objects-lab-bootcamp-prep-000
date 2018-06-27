var recipes = {prop: 1}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
function destructrivleyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
}