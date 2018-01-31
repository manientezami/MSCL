NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/GNSS_Commands.h",{461:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype461\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GetGnssDataRateBase</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Get GNSS Data Rate Base&quot; command</div></div>",467:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype467\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand()</div><div class=\"TTSummary\">Builds the bytes in the command</div></div>",468:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype468\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the command</div></div>",470:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype470\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Gets the data field descriptor byte</div></div>",471:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype471\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates the Response object</div></div>",472:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype472\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> parseResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Parses the response, getting the data rate base result</div></div>",473:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype473\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GnssMessageFormat</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;GPS Message Format&quot; command</div></div>",479:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype479\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command</div></div>",480:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype480\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipChannels&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">sampleRateBase</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",481:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype481\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_save()</div><div class=\"TTSummary\">Builds the bytes for the &quot;save&quot; command.</div></div>"});