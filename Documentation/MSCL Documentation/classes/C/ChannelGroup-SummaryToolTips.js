NDSummary.OnToolTipsLoaded("CClass:ChannelGroup",{3981:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3981\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelGroup</div></div></div><div class=\"TTSummary\">Represents a group of channels that have combined settings.</div></div>",3983:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3983\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ChannelGroup(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channelMask,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">groupName,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SettingsMap&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">settings</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a ChannelGroup object.</div></div>",3985:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3985\" class=\"NDPrototype NoParameterForm\">ChannelMask m_channels</div><div class=\"TTSummary\">The ChannelMask representing which channels are part of this group.</div></div>",3986:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3986\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_name</div><div class=\"TTSummary\">The name of the group.</div></div>",3987:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The WirelessTypes::ChannelGroupSettings that this group supports.</div></div>",3988:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3988\" class=\"NDPrototype NoParameterForm\">SettingsMap m_settingsMap</div><div class=\"TTSummary\">A map of WirelessTypes::ChannelGroupSetting to EepromLocation pairs.</div></div>",3990:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3990\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> EepromLocation&amp; getSettingEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelGroupSetting&nbsp;</td><td class=\"PName last\">setting</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the EepromLocation for the given &lt;Setting&gt;.</div></div>",3991:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3991\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> ChannelMask&amp; channels() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ChannelMask representing which channels are part of this group.</div></div>",3992:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3992\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> std::<span class=\"SHKeyword\">string</span>&amp; name() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the name of the channel group.</div></div>",3993:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3993\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> eepromLocation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelGroupSetting&nbsp;</td><td class=\"PName last\">setting</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the eeprom location that the ChannelGroup uses for a specified setting.</div></div>",3994:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3994\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> WirelessTypes::ChannelGroupSettings&amp; settings() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::ChannelGroupSettings that this group supports.</div></div>",3995:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3995\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> hasSetting(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelGroupSetting&nbsp;</td><td class=\"PName last\">setting</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Helper function for quick check if setting is present in this channel group.</div></div>",3996:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Helper function to check if this channel group has a specific setting and channel included in it.</div></div>",3998:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A typedef for a vector of ChannelGroups.</div></div>"});