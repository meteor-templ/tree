class TreeItem extends BlazeComponent {
	setContentBlock(contentBlock) {
		if (contentBlock)
			this.contentBlock = contentBlock;
		else if (this.currentData().contentBlock)
			this.contentBlock = this.currentData().contentBlock;
	};
}

class TreeCursor extends TreeItem {
}

TreeCursor.register('Tree.Cursor');

class TreeDocument extends TreeItem {
}

TreeDocument.register('Tree.Document');