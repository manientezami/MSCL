NDSummary.OnToolTipsLoaded("CClass:ChannelMask",{4577:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4577\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelMask</div></div></div><div class=\"TTSummary\">Represents the channel mask (active and inactive channels) for a WirelessNode.</div></div>",4579:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">The maximum number of channels currently available on any node</div></div>",4581:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4581\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> ChannelMask(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">channelMask</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an ChannelMask object given a channel mask that was stored on a WirelessNode</div></div>",4582:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4582\" class=\"NDPrototype NoParameterForm\">ChannelMask()</div><div class=\"TTSummary\">The default constructor for creating an ChannelMask object, which sets all the channels to inactive</div></div>",4584:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Equal operator for comparing ChannelMasks.</div></div>",4585:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Not Equal operator for comparing ChannelMasks.</div></div>",4586:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Less Than operator for comparing ChannelMasks.</div></div>",4587:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Greater Than operator for comparing ChannelMasks.</div></div>",4589:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4589\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> fromMask(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">channelMask</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the ChannelMask object from a channel mask</div></div>",4590:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4590\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> toMask() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the channel mask value of the current ChannelMask object</div></div>",4591:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4591\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> count() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total number of active channels in the current ChannelMask object</div></div>",4592:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4592\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> enabled(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channel</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether a certain channel is enabled or disabled</div></div>",4593:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4593\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> enable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">channel,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">enable&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables or disables a specified channel</div></div>",4594:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4594\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> lastChEnabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Finds the last channel (highest channel number) that is enabled in the mask.&nbsp; This is useful when looping over the ChannelMask object and performing an action on all enabled channels.</div></div>"});