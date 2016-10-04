NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/LongPing.h",{1575:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1575\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">PingResponse</div></div></div><div class=\"TTSummary\">Represents the response to a Long Ping Node command</div></div>",1577:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1577\" class=\"NDPrototype NoParameterForm\">PingResponse()</div><div class=\"TTSummary\">Creates a PingResponse with default values</div></div>",1578:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1578\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">PingResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">success,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">nodeRssi,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">baseRssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a PingResponse with the given parameters</div></div>",1579:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1579\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> PingResponse ResponseSuccess(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">nodeRssi,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">baseRssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a PingResponse with a successful response</div></div>",1580:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1580\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> PingResponse ResponseFail()</div><div class=\"TTSummary\">Creates a PingResponse with a fail response</div></div>",1582:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1582\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_success</div><div class=\"TTSummary\">Whether or not the Long Ping response was a success</div></div>",1583:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1583\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_nodeRssi</div><div class=\"TTSummary\">The node RSSI value received in the Long Ping response</div></div>",1584:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1584\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_baseRssi</div><div class=\"TTSummary\">The base station RSSI value received in the Long Ping response</div></div>",1586:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1586\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> success() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not the Long Ping command was a success (the node responded).</div></div>",1587:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1587\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> nodeRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node RSSI that was returned with the response (if success() returns true).&nbsp; This is the signal strength at which the Node received the BaseStation\'s command packet.</div></div>",1588:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1588\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> baseRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the base station RSSI that was returned with the response (if success() returns true).&nbsp; This is the signal strength at which the BaseStation received the Nodes\'s response packet.</div></div>",1589:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1589\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">LongPing</div></div></div><div class=\"TTSummary\">Contains logic for the LongPing Node command</div></div>",1591:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1591\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the LongPing command packet</div></div>",1592:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1592\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the LongPing Node command</div></div>",1594:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1594\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a LongPing Response object</div></div>",1596:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1596\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address to look for in the Long Ping response</div></div>",1597:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1597\" class=\"NDPrototype NoParameterForm\">PingResponse m_result</div><div class=\"TTSummary\">The PingResponse that holds the result of the LongPing Node command</div></div>",1599:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1599\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> match(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the expected response pattern\'s bytes</div></div>",1600:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1600\" class=\"NDPrototype NoParameterForm\">PingResponse result()</div><div class=\"TTSummary\">Gets the PingResponse that holds the result of the response</div></div>"});