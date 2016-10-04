NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Features/ChannelGroup.h",{2736:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2736\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelGroup</div></div></div><div class=\"TTSummary\">Represents a group of channels that have combined settings.</div></div>",2738:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2738\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ChannelGroup(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channelMask,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">groupName,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SettingsMap&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">settings</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a ChannelGroup object.</div></div>",2740:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2740\" class=\"NDPrototype NoParameterForm\">ChannelMask m_channels</div><div class=\"TTSummary\">The ChannelMask representing which channels are part of this group.</div></div>",2741:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2741\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_name</div><div class=\"TTSummary\">The name of the group.</div></div>",2742:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The WirelessTypes::ChannelGroupSettings that this group supports.</div></div>",2743:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2743\" class=\"NDPrototype NoParameterForm\">SettingsMap m_settingsMap</div><div class=\"TTSummary\">A map of WirelessTypes::ChannelGroupSetting to EepromLocation pairs.</div></div>",2745:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2745\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> EepromLocation&amp; getSettingEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelGroupSetting&nbsp;</td><td class=\"PName last\">setting</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the EepromLocation for the given &lt;Setting&gt;.</div></div>",2746:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2746\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> ChannelMask&amp; channels() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ChannelMask representing which channels are part of this group.</div></div>",2747:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2747\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> std::<span class=\"SHKeyword\">string</span>&amp; name() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the name of the channel group.</div></div>",2748:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2748\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> eepromLocation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelGroupSetting&nbsp;</td><td class=\"PName last\">setting</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the eeprom location that the ChannelGroup uses for a specified setting.</div></div>",2749:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2749\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> WirelessTypes::ChannelGroupSettings&amp; settings() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::ChannelGroupSettings that this group supports.</div></div>",2750:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2750\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> hasSetting(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelGroupSetting&nbsp;</td><td class=\"PName last\">setting</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Helper function for quick check if setting is present in this channel group.</div></div>",2752:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A typedef for a vector of ChannelGroups.</div></div>"});