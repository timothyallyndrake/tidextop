tidextop.index = function()
{
	var public =
	{
		initialize : function()
		{ private.initialize(); },
		viewport :
		{
			component : function()
			{ return private.viewport.component; },
			id : function()
			{ return private.viewport.id; }
		}
	};

	var private = {};

	private.initialize = function()
	{ private.viewport.initialize(); };

	private.viewport = {};

	private.viewport.id = Ext.id();

	private.viewport.initialize = function()
	{
		private.viewport.component = new Ext.Viewport
		(
			{
				id : private.viewport.id,
				layout : 'border',
				renderTo : document.body,
				items :
				[
					new Ext.Panel
					(
						{
							height : 100,
							html : 'north',
							region : 'north'
						}
					),
					new Ext.Panel
					(
						{
							collapsible : true,
							html : 'west',
							region : 'west',
							title : 'west',
							width : 200
						}
					),
					new Ext.Panel
					(
						{
							html : 'center',
							region : 'center',
							title : 'center'
						}
					),
					new Ext.Panel
					(
						{
							collapsible : true,
							html : 'east',
							region : 'east',
							title : 'east',
							width : 200
						}
					),
					new Ext.Panel
					(
						{
							collapsible : true,
							height : 100,
							html : 'south',
							region : 'south',
							title : 'south'
						}
					)
				]
			}
		);

		private.viewport.component.doLayout();
	};

	return public;
}();