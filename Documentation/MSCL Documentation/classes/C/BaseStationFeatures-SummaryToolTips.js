NDSummary.OnToolTipsLoaded("CClass:BaseStationFeatures",{2873:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2873\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a BaseStation.</div></div>",2875:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2875\" class=\"NDPrototype NoParameterForm\">BaseStationInfo m_baseInfo</div><div class=\"TTSummary\">The BaseStationInfo object containing basic information retrieved from eeprom about the BaseStation.</div></div>",2877:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2877\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationFeatures(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">BaseStationInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a BaseStationFeatures object.</div></div>",2878:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2878\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::unique_ptr&lt;BaseStationFeatures&gt; create(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">BaseStationInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds and returns a BaseStationFeatures pointer based on the given parameters.</div></div>",2879:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2879\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsTransmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">TransmitPower&nbsp;</td><td class=\"PName last\">power</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::TransmitPower is supported by this BaseStation.</div></div>",2880:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2880\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> supportsButtons() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports Button configuration.</div></div>",2881:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2881\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> supportsAnalogPairing() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports Analog Pairing configuration.</div></div>",2882:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2882\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> supportsBeaconStatus() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports the beaconStatus command.</div></div>",2883:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2883\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> supportsRfSweepMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports RF Sweep Mode.</div></div>",2884:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2884\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> buttonCount() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total number of buttons that are supported.</div></div>",2885:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2885\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> analogPortCount() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total number of analog ports that are supported.</div></div>",2886:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2886\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::TransmitPowers transmitPowers() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::TransmitPowers that are supported by this BaseStation.</div></div>",2887:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2887\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsNewTransmitPowers() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports the new transmit powers (true), or the old ones (false).</div></div>",2888:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2888\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsEepromCommitViaRadioReset() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if eeprom changes can be committed by only cycling the radio, instead of cycling power.</div></div>"});