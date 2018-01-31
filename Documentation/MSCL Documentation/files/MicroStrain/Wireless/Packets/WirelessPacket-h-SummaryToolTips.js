NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Packets/WirelessPacket.h",{3986:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3986\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessPacket</div></div></div><div class=\"TTSummary\">Represents a MicroStrain wireless packet</div></div>",3988:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for the bytes that make up a payload in a packet</div></div>",4037:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible ASPP versions</div></div>",4041:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Possible error codes from response packets.</div></div>",4048:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4048\" class=\"NDPrototype NoParameterForm\">WirelessPacket()</div><div class=\"TTSummary\">The default constructor for a wireless packet</div></div>",4049:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4049\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> throwEepromResponseError(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ResponseErrorCode&nbsp;</td><td class=\"PName last\">errorCode,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Throws an exception based on a ResponseErrorCode from a read/write eeprom command.&nbsp; Not all error codes will cause an exception.</div></div>",4051:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4051\" class=\"NDPrototype NoParameterForm\">AsppVersion m_asppVersion</div><div class=\"TTSummary\">The AsppVersion for the packet.</div></div>",4052:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4052\" class=\"NDPrototype NoParameterForm\">DeliveryStopFlags m_deliveryStopFlags</div><div class=\"TTSummary\">The delivery stop flags of the packet</div></div>",4053:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4053\" class=\"NDPrototype NoParameterForm\">PacketType m_type</div><div class=\"TTSummary\">The packet type of the packet</div></div>",4054:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4054\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address in the packet</div></div>",4055:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4055\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_nodeRSSI</div><div class=\"TTSummary\">The node received signal strength indicator (strength of which the node received the command from the base station).&nbsp; This value will be set to -200 if the packet contains a legacy junk lqi byte that should be thrown out.</div></div>",4056:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4056\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_baseRSSI</div><div class=\"TTSummary\">The base received signal strength indicator (strength of which the base station received the response from the node).</div></div>",4057:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4057\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency m_frequency</div><div class=\"TTSummary\">The WirelessTypes::Frequency that this packet was collected on.</div></div>",4058:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4058\" class=\"NDPrototype NoParameterForm\">Payload m_payload</div><div class=\"TTSummary\">The payload bytes in the packet</div></div>",4060:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4060\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> isDataPacket() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not the packet is a Data packet.</div></div>",4061:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4061\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> isDiscoveryPacket() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not the packet is a Node Discovery packet.</div></div>",4062:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4062\" class=\"NDPrototype NoParameterForm\">AsppVersion asppVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ASPP version of the packet.</div></div>",4063:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4063\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> asppVersion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">AsppVersion&nbsp;</td><td class=\"PName last\">ver</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the ASPP version of the packet.</div></div>",4064:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4064\" class=\"NDPrototype NoParameterForm\">DeliveryStopFlags deliveryStopFlags() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the delivery stop flags for the packet</div></div>",4065:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4065\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> deliveryStopFlags(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DeliveryStopFlags&nbsp;</td><td class=\"PName last\">flags</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the delivery stop flags to the passed in flags</div></div>",4066:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4066\" class=\"NDPrototype NoParameterForm\">PacketType type() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the packet type of the packet</div></div>",4067:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4067\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> type(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">PacketType&nbsp;</td><td class=\"PName last\">packetType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the packet type of the packet</div></div>",4068:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4068\" class=\"NDPrototype NoParameterForm\">NodeAddress nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address of the packet</div></div>",4069:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4069\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">address</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node address of the packet</div></div>",4070:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4070\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> nodeRSSI() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node RSSI of the packet</div></div>",4071:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4071\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeRSSI(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">rssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node RSSI of the packet</div></div>",4072:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4072\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> baseRSSI() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the base station RSSI of the packet</div></div>",4073:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4073\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> baseRSSI(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">rssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the base station RSSI of the packet</div></div>",4074:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4074\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::Frequency that the packet was collected on</div></div>",4075:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4075\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> frequency(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the WirelessTypes::Frequency that the packet was collected on</div></div>",4076:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4076\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Payload&amp; payload() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the payload bytes of the packet</div></div>",4077:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4077\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> payload(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">bytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the payload bytes of the packet</div></div>"});