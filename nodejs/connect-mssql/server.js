var Connection = require('tedious').Connection;

var config = {
  server: "192.168.1.41", // or "localhost"
  options: {
    trustServerCertificate: true,
  },
  authentication: {
    type: "default",
    options: {  
      userName: "sa",
      password: "Arsenal@1234",
    }
  }
};

var connection = new Connection(config);

// Setup event handler when the connection is established. 
connection.on('connect', function(err) {
  if(err) {
    //console.log('Error: ', err)
    console.log('ERRORRRRRRR', err);
  } else {
  // If no error, then good to go...
    console.log('CONNECTED');
    process.exit(0);
  }
});

// Initialize the connection.
connection.connect();