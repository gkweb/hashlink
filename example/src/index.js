const Hashlink = require('../../dist/main.js');

module.exports = (function () {
    window.addEventListener('load', function () {
        console.log('LOADED');
        var hashlink = new Hashlink({onChange: event => {
            console.log(event, 'Has changed123123');
        }}); // Default options

        hashlink.add({
            slug: 'something',
            callback: (params) => {
                console.log('something triggered');
            }
        })
    });
})();


