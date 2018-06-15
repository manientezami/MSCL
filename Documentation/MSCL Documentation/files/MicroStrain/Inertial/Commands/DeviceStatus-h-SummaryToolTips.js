NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/DeviceStatus.h",{548:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype548\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DeviceStatus</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial DeviceStatus command.</div></div>",550:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype550\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",551:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype551\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> DeviceStatus MakeBasicStatusCommand()</div></div>",552:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype552\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> DeviceStatus MakeDiagnosticStatusCommand()</div></div>",553:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype553\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeviceStatusData getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",554:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype554\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",555:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a DeviceStatus object.&nbsp; Use Make___Command methods to create an object.</div></div>",556:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype556\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",557:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype557\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",558:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype558\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",560:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype560\" class=\"NDPrototype NoParameterForm\">DeviceStatusData m_data</div><div class=\"TTSummary\">The DeviceStatusData to send to the device.</div></div>",561:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype561\" class=\"NDPrototype NoParameterForm\">MipTypes::StatusSelector m_StatusSelector</div><div class=\"TTSummary\">The StatusSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>"});