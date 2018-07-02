/**!
 * @license
 * 
 *  MIT License
 * 
 *  Copyright(c) 2018 Glade Kettle
 * 
 *  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files(the "Software"), to deal in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:

 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.

 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */

export default class HashLink {
    
    /** 
     * Init
     * @param {Object} options
     */
    constructor(options = {}) {
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
    add (trigger) {
        if (!trigger) return;
        // Only add trigger if it's valid and has a callback
        if ((typeof trigger.callback === 'function') && trigger.slug) this.triggers[trigger.slug] = trigger;
    }

    /**
     * Removes trigger
     * @param {String} slug 
     */
    remove(slug) {
        if (!slug) return;
        if (this.triggers[slug]) delete this.triggers[slug];
    }

    /**
     * Extracts params from hash url
     * @param {*} url 
     */
    gatherParams (url) {
        let clean = url.replace('#' + this.prefix, '');
        return clean.split(this.prefix);
    }

    /**
     * Runs the trigger detection based off document.location.hash
     * @param {HashChangeEvent} event 
     */
    run (event) {
        let hash = document.location.hash;
        let params = this.gatherParams(hash);

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
    handle (event) {
        let params = this.gatherParams(document.location.hash);
        if (typeof this.onChange === 'function') this.onChange(event, params);
    }

    /**
     * Assign any associated events
     */
    assignEvents () {
        window.addEventListener('hashchange', this.handle);
    }

    /**
     * Remove events
     */
    removeEvents () {
        window.removeEventListener('hashchange', this.handle);
    }
}