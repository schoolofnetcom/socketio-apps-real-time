module.exports = function(model) {
  return {
    list: function() {
      return new Promise((resolve, reject) => {
        model.find(null, (err, result) => {
          if (err) {
            return reject({err: err});
          }
          return resolve({data: result});
        });
      });
    },
    insert: function(data) {
      return new Promise((resolve, reject) => {
        model.create(data, (err, result) => {
          if (err) {
            return reject({err: err});
          }
          return resolve({data: result});
        });
      });
    },
    get: function(id) {
      return new Promise((resolve, reject) => {
        model.findById(id, (err, result) => {
          if (err) {
            return reject({err: err});
          }
          return resolve({data: result});
        });
      });
    },
    update: function(id, data) {
      return new Promise((resolve, reject) => {
        model.findByIdAndUpdate(id, {$set: data}, (err, result) => {
          if (err) {
            return reject({err: err});
          }
          return resolve({data: result});
        });
      });
    },
    delete: function(id) {
      return new Promise((resolve, reject) => {
        model.findByIdAndRemove(id, (err, result) => {
          if (err) {
            return reject({err: err});
          }
          return resolve({data: result});
        });
      });
    }
  }
}
