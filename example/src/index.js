const Hashlink = require('../../dist/main.js');

module.exports = (function () {
    window.addEventListener('load', function () {
        var triggerDisplay = document.getElementById('trigger_display');

        // Intantiate the Hashlink class
        var hashlink = new HashLink({onChange: event => {
            console.log(event, 'Hash has changed...');
        }});

        var cb = function (params) {
            triggerDisplay.innerText = `[ ${params[0]} ] trigger callback has run`;
        };

        // Trigger callbacks added here
        hashlink.add({
            slug: 'something',
            callback: (params) => (cb(params))
        });

        hashlink.add({
            slug: 'deep',
            callback: (params) => (cb(params))
        });

        hashlink.add({
            slug: 'test',
            callback: (params) => (cb(params))
        });

        // run on first load
        hashlink.run(document.location.hash);
    });
})();


