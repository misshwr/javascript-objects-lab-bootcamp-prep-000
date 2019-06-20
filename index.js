var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
<<<<<<< HEAD
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

 function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object);
  delete clone[key];
  return clone;
}

 function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
 }
=======
  object={ key: value}
  return object
}
>>>>>>> d6ecec2e88093c49b68321ae6f46c8b4ba03113e
