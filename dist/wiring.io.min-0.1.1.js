!function(){class t{constructor(t=10){this.maxListeners=parseInt(t,10),this._callbackStack=[]}Emit(){const t=this._callbackStack;let e=Array.prototype.slice.call(arguments);t.forEach(function(t){t.apply(this,e)})}_AddListener(t){if("function"!=typeof t)throw new TypeError(`${t} is not a function`);if(!(this._callbackStack.length<=this.maxListeners))throw new RangeError("Max listeners reached");this._callbackStack.push(t)}_RemoveListeners(t){let e=this._callbackStack.indexOf(t);e>=0&&this._callbackStack.splice(e,1)}}class e{constructor(t){this._channelsStack=new Map,this._channelsUsed=new Set,this._context=t,Object.defineProperty(this,"_context",{enumerable:!1,configurable:!1,writable:!1})}SetChannel(t,e){if("function"!=typeof e)throw new TypeError(`${callback} is not a function`);{let n=e.bind(this._context);this._channelsStack.set(t,n)}}_MarkChannel(t){this._channelsUsed.add(t)}_UnmarkChannel(t){this._channelsUsed.delete(t)}GetAction(t){return this._channelsStack.get(t)}ResetChannel(t){if(this._channelsUsed.has(t))throw new Error("unable to delete a chanel in use");this._channelsStack.delete(t)}}window.Wiring=class{constructor(){}static Connect(t,e,n){t._AddListener(e.GetAction(n)),e._MarkChannel(n)}static Disconnect(t,e,n){t._RemoveListeners(e.GetAction(n)),e._UnmarkChannel(n)}static Signal(e){return new t(e)}static Slot(t){return new e(t)}}}();