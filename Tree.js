Tree = {};

Tree._momentum = 'fade';

Tree.Item = class extends BlazeComponent {
	setContentBlock(contentBlock) {
		if (contentBlock)
			this.contentBlock = contentBlock;
		else if (this.currentData().contentBlock)
			this.contentBlock = this.currentData().contentBlock;
	};
}

Tree.Cursor = class extends Tree.Item {
	getMomentum() {
		if (this.currentData().momentum) return this.currentData().momentum;
		else return Tree._momentum;
	}
}

Tree.Cursor.register('Tree.Cursor');

Tree.Document = class extends Tree.Item {
}

Tree.Document.register('Tree.Document');

Tree.Open = class extends BlazeComponent {
	events() {
		return super.events().concat({
			'click': () => {
				if (this.currentData().state)
					this.currentData().state.open();
			}
		});
	}
}

Tree.Open.register('Tree.Open');

Tree.Close = class extends BlazeComponent {
	events() {
		return super.events().concat({
			'click': () => {
				if(this.currentData().state)
					this.currentData().state.close();
			}
		});
	}
}

Tree.Close.register('Tree.Close');

Tree.Toggle = class extends BlazeComponent {
}

Tree.Toggle.register('Tree.Toggle');

Tree.State = class extends BlazeComponent {
	onCreated() {
		super.onCreated();
		var States = this.currentData().States;
		if (States) {
			this.state = States.insertState(this.currentData().document);
		}
	};
}

Tree.State.register('Tree.State');