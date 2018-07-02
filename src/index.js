export default class hashLink {
    
    /** 
     * @param {Object} options
     */
    constructor(options = {}) {
        this.handle = this.handle.bind(this);
        this.assignEvents();
        this.onChange = null;
        this.prefix = options.prefix || '/';
        this.triggers = {};

        if (options.onChange) this.onChange = options.onChange;
    }

    add (trigger) {
        if (!trigger) return;
        this.triggers[trigger.slug] = trigger;
    }

    remove(slug) {
        if (!slug) return;
        if (this.triggers[slug]) delete this.triggers[slug];
    }

    gatherParams (url) {
        let clean = url.replace('#' + this.prefix, '');
        let params = clean.split(this.prefix);
        return params;
    }

    handle (event) {
        let hash = document.location.hash;
        let params = this.gatherParams(hash);

        console.log(params);

        if (typeof this.onChange === 'function') this.onChange(event);
    }

    assignEvents () {
        window.addEventListener('hashchange', this.handle);
    }

    removeEvents () {
        window.removeEventListener('hashchange', this.handle);
    }
}