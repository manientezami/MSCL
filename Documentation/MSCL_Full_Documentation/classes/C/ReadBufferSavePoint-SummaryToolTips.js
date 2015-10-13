NDSummary.OnToolTipsLoaded("CClass:ReadBufferSavePoint",{3834:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3834\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ReadBufferSavePoint</div></div></div><div class=\"TTSummary\">Acts as a save point so that bytes can be read out of a DataBuffer and the read point reverted</div></div>",3836:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3836\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ReadBufferSavePoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a ReadBufferSavePoint based on the DataBuffer passed in</div></div>",3837:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3837\" class=\"NDPrototype NoParameterForm\">~ReadBufferSavePoint()</div><div class=\"TTSummary\">Destroying a ReadBufferSavePoint object, reverting any uncommited data</div></div>",3839:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3839\" class=\"NDPrototype NoParameterForm\">DataBuffer* m_data</div><div class=\"TTSummary\">The DataBuffer of data to be accessed</div></div>",3840:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3840\" class=\"NDPrototype NoParameterForm\">std::size_t m_savePosition</div><div class=\"TTSummary\">The current save position in the DataBuffer</div></div>",3842:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3842\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> revert()</div><div class=\"TTSummary\">reverts the read position of the DataBuffer back to its saved position</div></div>",3843:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3843\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> commit()</div><div class=\"TTSummary\">commits all the currently read data so that it will not be reverted</div></div>"});