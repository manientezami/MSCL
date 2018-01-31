NDSummary.OnToolTipsLoaded("CClass:CaptureGyroBias",{697:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype697\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">CaptureGyroBias</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial CaptureGyroBias command.</div></div>",699:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype699\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",700:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype700\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> CaptureGyroBias MakeCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",701:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype701\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeometricVector getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A GeometricVector object with the data returned from the device.</div></div>",702:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype702\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",703:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype703\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">CaptureGyroBias(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">samplingTimeInMS</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Private constructor creates a CaptureGyroBias object.&nbsp; Use MakeCommand methods to create an object.</div></div>",704:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype704\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",705:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype705\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",706:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype706\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",708:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype708\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_samplingTimeInMS</div><div class=\"TTSummary\">The uint16 CaptureGyroBiasData to send to the device.</div></div>"});