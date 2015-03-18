
exports.getTestPersonaLoginCredentials=function(callback) {

    return http.get({
        host: 'http://query.yahooapis.com',
        path: '/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22%2C%22IBM%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json'
    }, function(response) {
        // Actualizar continuamente el stream con datos
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // La recepción de datos está hecha
            var parsed = JSON.parse(body);
            callback({
                email: parsed.email,
                password: parsed.pass
            });
        });
    });

}