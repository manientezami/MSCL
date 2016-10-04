NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/InertialCmdResponse.h",{238:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype238\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">InertialCmdResponse</div></div></div><div class=\"TTSummary\">Represents the response to a generic InertialNode command</div></div>",240:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype240\" class=\"NDPrototype NoParameterForm\">InertialCmdResponse()</div><div class=\"TTSummary\">Creates an InertialCmdResponse with default values</div></div>",241:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype241\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InertialCmdResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ResponsePattern::</td><td class=\"PType\">State&nbsp;</td><td class=\"PName last\">state,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">success,</td></tr><tr><td class=\"PModifierQualifier first\">InertialPacket::</td><td class=\"PType\">MipAckNack&nbsp;</td><td class=\"PName last\">errorCode,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cmdName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an InertialCmdResponse with the given parameters</div></div>",243:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype243\" class=\"NDPrototype NoParameterForm\">ResponsePattern::State m_responseState</div><div class=\"TTSummary\">The state of the response, which determines which exceptions are thrown, if any</div></div>",244:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype244\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_success</div><div class=\"TTSummary\">Whether or not the response was a success</div></div>",245:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype245\" class=\"NDPrototype NoParameterForm\">InertialPacket::MipAckNack m_ackNack</div><div class=\"TTSummary\">The MIP ack/nack that was received with the packet</div></div>",246:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype246\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_commandName</div><div class=\"TTSummary\">The name of the command that this response corresponds to (to be used in error descriptions)</div></div>",248:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype248\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> throwIfFailed()</div><div class=\"TTSummary\">Throws an exeption if the response was a failure.</div></div>",249:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype249\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> success() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not the command was a success.</div></div>",250:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype250\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> InertialPacket::MipAckNack errorCode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the MIP ack/nack error code that was returned</div></div>"});