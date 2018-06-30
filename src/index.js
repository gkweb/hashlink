export default class hashLink {
    
    /** 
     * @param {Object} options
     */
    constructor(options) {
        this.handleHashChange = this.handleHashChange.bind(this);
        this.assignEvents();

        if (options.onChange) this.onChange = option.onChange;
    }

    handleHashChange (event) {
        if (typeof this.onChange === 'function') this.onChange(event);
    }

    assignEvents () {
        window.addEventListener('hashchange', this.handleHashChange);
    }

    removeEvents () {
        window.removeEventListener('hashchange', this.handleHashChange);
    }
}