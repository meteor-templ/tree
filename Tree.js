Templ.Tree = {};

Templ.Tree._momentum = 'fade';

Templ.Tree.Item = class extends BlazeComponent {
	setContentBlock(contentBlock) {
		if (contentBlock) {
			if (typeof(contentBlock) == 'string') {
				this.contentBlock = Template[contentBlock];
			} else {
				this.contentBlock = contentBlock;
			}
		} else if (this.currentData().contentBlock)
			this.contentBlock = this.currentData().contentBlock;
	};
	setTheme(theme) {
		if (theme)
			if (typeof(theme) == 'string') {
				this.theme = Template[theme];
			} else {
				this.theme = theme;
			}
		else if (this.currentData().theme)
			this.theme = this.currentData().theme;
		else
			this.theme = Template['Tree.Theme'];
	};
}

Templ.Tree.Cursor = class extends Templ.Tree.Item {
}

Templ.Tree.Cursor.register('Tree.Cursor');

Templ.Tree.Open = class extends BlazeComponent {
	events() {
		return super.events().concat({
			'click': () => {
				if (this.currentData().state)
					this.currentData().state.open();
			}
		});
	}
}

Templ.Tree.Open.register('Tree.Open');

Templ.Tree.Close = class extends BlazeComponent {
	events() {
		return super.events().concat({
			'click': () => {
				if(this.currentData().state)
					this.currentData().state.close();
			}
		});
	}
}

Templ.Tree.Close.register('Tree.Close');

Templ.Tree.Toggle = class extends BlazeComponent {
}

Templ.Tree.Toggle.register('Tree.Toggle');

Templ.Tree.State = class extends BlazeComponent {
	onCreated() {
		super.onCreated();
		var States = this.currentData().States;
		if (States) {
			this.state = States.insertState(this.currentData().document);
		}
	};
}

Templ.Tree.State.register('Tree.State');