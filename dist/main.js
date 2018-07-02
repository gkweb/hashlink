'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Glade Kettle
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var HashLink = function () {

    /** 
     * Init
     * @param {Object} options
     */
    function HashLink() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, HashLink);

        this.handle = this.handle.bind(this);
        this.run = this.run.bind(this);
        this.assignEvents();
        this.onChange = null;
        this.prefix = options.prefix || '/';
        this.triggers = {};

        if (options.onChange) this.onChange = options.onChange;
    }

    /**
     * Adds trigger to the this.triggers object. Provided it's valid
     * @param {Object} trigger Trigger object
     * @param {String} [trigger.slug] Call back slug to launch the trigger from
     * @param {Function} [trigger.callback] callback to launch when trigger slug match found
     * @param {Boolean} [trigger.preventDefault] prevents default of the hashchange event if toggled
     */


    _createClass(HashLink, [{
        key: 'add',
        value: function add(trigger) {
            if (!trigger) return;
            // Only add trigger if it's valid and has a callback
            if (typeof trigger.callback === 'function' && trigger.slug) this.triggers[trigger.slug] = trigger;
        }

        /**
         * Removes trigger
         * @param {String} slug 
         */

    }, {
        key: 'remove',
        value: function remove(slug) {
            if (!slug) return;
            if (this.triggers[slug]) delete this.triggers[slug];
        }

        /**
         * Extracts params from hash url
         * @param {*} url 
         */

    }, {
        key: 'gatherParams',
        value: function gatherParams(url) {
            var clean = url.replace('#' + this.prefix, '');
            return clean.split(this.prefix);
        }

        /**
         * Runs the trigger detection based off document.location.hash
         * @param {HashChangeEvent} event 
         */

    }, {
        key: 'run',
        value: function run(event) {
            var hash = document.location.hash;
            var params = this.gatherParams(hash);

            if (params.length > 0) {
                var trigger = this.triggers[params[0]];

                // Trigger the slug callback
                if (trigger) {
                    trigger.callback(params);
                    if (event && trigger.preventDefault) event.preventDefault();
                }
            }
        }

        /**
         * Handles the hashchange event
         * @param {HashChangeEvent} event 
         */

    }, {
        key: 'handle',
        value: function handle(event) {
            var params = this.gatherParams(document.location.hash);
            if (typeof this.onChange === 'function') this.onChange(event, params);
        }

        /**
         * Assign any associated events
         */

    }, {
        key: 'assignEvents',
        value: function assignEvents() {
            window.addEventListener('hashchange', this.handle);
        }

        /**
         * Remove events
         */

    }, {
        key: 'removeEvents',
        value: function removeEvents() {
            window.removeEventListener('hashchange', this.handle);
        }
    }]);

    return HashLink;
}();

module.exports = HashLink;
