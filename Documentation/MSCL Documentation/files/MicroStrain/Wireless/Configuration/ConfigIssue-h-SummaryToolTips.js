NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/ConfigIssue.h",{2495:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2495\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ConfigIssue</div></div></div><div class=\"TTSummary\">Holds information on a specific configuration issue.</div></div>",2497:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Configuration Options for Wireless Nodes and BaseStations that can be issues.</div></div>",2536:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2536\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ConfigIssue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ConfigIssue::</td><td class=\"PType\">ConfigOption&nbsp;</td><td></td><td class=\"PName last\">optionId,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a ConfigIssue object.</div></div>",2537:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2537\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ConfigIssue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ConfigIssue::</td><td class=\"PType\">ConfigOption&nbsp;</td><td></td><td class=\"PName last\">optionId,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a ConfigIssue object.</div></div>",2539:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2539\" class=\"NDPrototype NoParameterForm\">ConfigOption m_optionId</div><div class=\"TTSummary\">The ConfigOption identifying the configuration option for which the issue occurred.</div></div>",2540:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2540\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_description</div><div class=\"TTSummary\">The description of the issue.</div></div>",2541:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2541\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_isChannelGroupIssue</div><div class=\"TTSummary\">Whether this issue applies to a channel group (true) or the entire Node (false).</div></div>",2542:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2542\" class=\"NDPrototype NoParameterForm\">ChannelMask m_channelMask</div><div class=\"TTSummary\">The ChannelMask that this issue applies to, if this is a channel group issue.</div></div>",2544:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2544\" class=\"NDPrototype NoParameterForm\">ConfigIssue::ConfigOption id() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ConfigOption identifying the configuration option for which the issue occurred.</div></div>",2545:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2545\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> std::<span class=\"SHKeyword\">string</span>&amp; description() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a description of the issue.</div></div>",2546:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2546\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> isChannelGroupIssue() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the issue applies to a channel group (true) or the entire Node (false).</div></div>",2547:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2547\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> ChannelMask&amp; channelMask() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">The ChannelMask that the issue applies to, if this issue is a channel group issue.</div></div>",2549:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a vector of ConfigIssue objects.</div></div>"});