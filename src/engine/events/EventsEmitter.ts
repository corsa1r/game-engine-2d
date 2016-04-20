interface EventInterface {
    callback: Function;
    handler: any;
}

export class EventsEmitter {
    private events: { [key: string]: Array<EventInterface> };

    constructor() {
        this.events = {};
    }

    /**
     * This method allows you to attach event listener for custom event by name
     * 
     * @param {String} name - this is the name of the event which you want to listen for
     * @param {Function} callback - this is the callback function, which will be called when the event with this name is emitted
     * @param [{any}] handler - this handler allows you to remove/off the event by this handler istead of delete all events with this name
     * 
     * @returns self instance
     */
    on(name: string, callback: Function, handler: any = null) {
        if (!this.events[name]) {
            this.events[name] = [];
        }

        let event: EventInterface = {
            callback: callback,
            handler: handler
        };

        this.events[name].push(event);
        return this;
    }

    /**
     * This method allows you to remove all listeners or specific listener(s) by name or handler
     * 
     * @param {String} name - this is the name of the event
     * @param [{any}] handler - if handler is specified the only events with same handler will be deleted
     * 
     * @returns self instance
     */
    off(name: string, handler: any = null) {
        if (this.events[name]) {
            if (handler === null) {
                this.events[name] = [];
            } else {
                let deletes = 0;
                this.each(name, (event: EventInterface, index: number) => {
                    if (event.handler === handler) {
                        deletes++;
                        delete this.events[name][index];
                    }
                });

                if (deletes > 0) {
                    this.clean(name);
                }
            }
        }

        return this;
    }

    /**
     * This method allows you to emit/fire event by name
     *  - also you can specify up to 3 parameters
     *      1 [{any}] - you can pass whatever you want
     *      2 [{any}] - you can pass whatever you want
     *      3 [{Object}] - this argument is targeted for options
     *  - this is implemented this way to get performance, instead of use arguments and Function.apply or Function.call
     *  
     * @examples 
     *  emit('test');                           //valid
     *  emit('test', 1);                        //valid
     *  emit('test', 1, 2);                     //valid
     *  emit('test', 1, 2, { x : 100, y : 200});//valid
     *  emit('test', 1, 2, { x : 100, y : 200}, 4, 5);//still valid but everything after options parameter will be ignored
     * 
     * @param {String} name - the name of the event
     * @param [{any}] param1 - everything you want
     * @param [{any}] param2 - everything you want
     * @param [{Object}] options - options you want
     * 
     * return self instance
     */
    emit(name: string, param1: any = undefined, param2: any = undefined, options: Object = {}) {
        if (this.events[name]) {
            this.each(name, (event: EventInterface) => {
                event.callback(param1, param2, options);
            });
        }

        return this;
    }

    private clean(name: string) {
        if (this.events[name]) {
            this.events[name] = this.events[name].filter(function (value) {
                return value ? true : false;
            });
        }
    }

    private each(name: string, iterator: Function) {
        if (this.events[name]) {
            for (let i = 0, len = this.events[name].length; i < len; i++) {
                if (iterator(this.events[name][i], i) === false) {
                    break;
                }
            }
        }
    }
}
