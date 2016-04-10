// (options? Options)
Mongo.Collection.prototype.attachTemplTreeStatesGraph = function(options) {
	var options = lodash.defaults(typeof(options) === 'object'?options:{}, {
		schema: true,
		helpers: true,
		methods: true
	});
	
	this.attachGraph({ schema: false });
	
	if (options.schema) 
		this.attachSchema(this.attachTemplTreeStatesGraph.Schema);
	
	if (options.helpers)
		this.helpers(this.attachTemplTreeStatesGraph.Helpers);
	
	if (options.methods) {
		this.findState = this.attachTemplTreeStatesGraph.findState;
		this.isClosed = this.attachTemplTreeStatesGraph.isClosed;
		this.insertState = this.attachTemplTreeStatesGraph.insertState;
	}
};

Mongo.Collection.prototype.attachTemplTreeStatesGraph.Schema = new SimpleSchema({
	_source: { type: Shuttler.Ref.Schema, optional: true },
	_target: { type: Shuttler.Ref.Schema },
	closed: { type: Boolean, optional: true, defaultValue: false }
});

Mongo.Collection.prototype.attachTemplTreeStatesGraph.Helpers = {
	isClosed() { return this.closed; },
	close() { this.Collection().update(this._id, { $set: { closed: true } }); },
	open() { this.Collection().update(this._id, { $set: { closed: false } }); },
	toggle() { this.Collection().update(this._id, { $set: { closed: !this.closed } }); }
};

Mongo.Collection.prototype.attachTemplTreeStatesGraph.findState = function(target) {
	if (!target) return undefined;
	return this.link.find.target(target);
};

Mongo.Collection.prototype.attachTemplTreeStatesGraph.isClosed = function(target) {
	var state = this.findState(target);
	if (state) return state.isClosed();
	else return false;
};

Mongo.Collection.prototype.attachTemplTreeStatesGraph.insertState = function(target) {
	if (target) {
		return this.findOne(this.insert({ _target: target.Ref() }));
	}
};

Tree.States = new Mongo.Collection(null, { ref: 'templ:tree.states' });
Tree.States.attachTemplTreeStatesGraph();