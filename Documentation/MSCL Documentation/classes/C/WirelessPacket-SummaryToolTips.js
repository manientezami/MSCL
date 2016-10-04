NDSummary.OnToolTipsLoaded("CClass:WirelessPacket",{2968:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2968\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessPacket</div></div></div><div class=\"TTSummary\">Represents a MicroStrain wireless packet</div></div>",2970:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for the bytes that make up a payload in a packet</div></div>",3010:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Possible error codes from response packets.</div></div>",3017:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3017\" class=\"NDPrototype NoParameterForm\">WirelessPacket()</div><div class=\"TTSummary\">The default constructor for a wireless packet</div></div>",3018:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3018\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> throwEepromResponseError(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ResponseErrorCode&nbsp;</td><td class=\"PName last\">errorCode,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Throws an exception based on a ResponseErrorCode from a read/write eeprom command.&nbsp; Not all error codes will cause an exception.</div></div>",3020:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3020\" class=\"NDPrototype NoParameterForm\">DeliveryStopFlags m_deliveryStopFlags</div><div class=\"TTSummary\">The delivery stop flags of the packet</div></div>",3021:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3021\" class=\"NDPrototype NoParameterForm\">PacketType m_type</div><div class=\"TTSummary\">The packet type of the packet</div></div>",3022:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3022\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_nodeAddress</div><div class=\"TTSummary\">The node address in the packet</div></div>",3023:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3023\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_nodeRSSI</div><div class=\"TTSummary\">The node received signal strength indicator (strength of which the node received the command from the base station).&nbsp; This value will be set to -200 if the packet contains a legacy junk lqi byte that should be thrown out.</div></div>",3024:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3024\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_baseRSSI</div><div class=\"TTSummary\">The base received signal strength indicator (strength of which the base station received the response from the node).</div></div>",3025:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3025\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency m_frequency</div><div class=\"TTSummary\">The WirelessTypes::Frequency that this packet was collected on.</div></div>",3026:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3026\" class=\"NDPrototype NoParameterForm\">Payload m_payload</div><div class=\"TTSummary\">The payload bytes in the packet</div></div>",3028:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3028\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> isDataPacket() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not the packet is a Data packet.</div></div>",3029:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3029\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> isDiscoveryPacket() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not the packet is a Node Discovery packet.</div></div>",3030:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3030\" class=\"NDPrototype NoParameterForm\">DeliveryStopFlags deliveryStopFlags() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the delivery stop flags for the packet</div></div>",3031:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3031\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> deliveryStopFlags(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DeliveryStopFlags&nbsp;</td><td class=\"PName last\">flags</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the delivery stop flags to the passed in flags</div></div>",3032:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3032\" class=\"NDPrototype NoParameterForm\">PacketType type() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the packet type of the packet</div></div>",3033:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3033\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> type(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">PacketType&nbsp;</td><td class=\"PName last\">packetType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the packet type of the packet</div></div>",3034:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3034\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address of the packet</div></div>",3035:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3035\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">address</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node address of the packet</div></div>",3036:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3036\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> nodeRSSI() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node RSSI of the packet</div></div>",3037:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3037\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeRSSI(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">rssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node RSSI of the packet</div></div>",3038:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3038\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> baseRSSI() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the base station RSSI of the packet</div></div>",3039:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3039\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> baseRSSI(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">rssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the base station RSSI of the packet</div></div>",3040:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3040\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::Frequency that the packet was collected on</div></div>",3041:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3041\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> frequency(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the WirelessTypes::Frequency that the packet was collected on</div></div>",3042:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3042\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Payload&amp; payload() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the payload bytes of the packet</div></div>",3043:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3043\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> payload(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">bytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the payload bytes of the packet</div></div>"});