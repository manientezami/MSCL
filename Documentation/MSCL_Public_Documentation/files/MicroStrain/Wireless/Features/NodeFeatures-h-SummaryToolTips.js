NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Features/NodeFeatures.h",{512:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype512\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a WirelessNode.</div></div>",513:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype513\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> normalizeNumSweeps(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">sweeps</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Normalizes the number of sweeps so that it is within range and a multiple of 100 (rounds up to next multiple).</div></div>",514:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype514\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">TimeSpan normalizeTimeBetweenBursts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">TimeSpan&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">time</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Normalizes a TimeSpan so that it is within an acceptable range for setting the timeBetweenBursts.&nbsp; A valid range is between 1 second and 24 hours. Seconds above 32767 will be rounded to minutes.&nbsp; When setting the time between bursts, you should also call minTimeBetweenBursts and verify it is greater than this.</div></div>",515:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype515\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> WirelessChannels&amp; channels() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the WirelessChannels of this Node.</div></div>",516:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype516\" class=\"NDPrototype NoParameterForm\">ChannelGroups channelGroups() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ChannelGroups supported by this Node.</div></div>",517:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype517\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsChannelSetting(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelGroupSetting&nbsp;</td><td></td><td class=\"PName last\">setting,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if the Node supports a given WirelessTypes::ChannelGroupSetting for the given ChannelMask.</div></div>",518:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype518\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> supportsHardwareGain() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Hardware Gain for any of its ChannelGroups.</div></div>",519:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype519\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> supportsFilterSettlingTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Filter Settling Time for any of its ChannelGroups.</div></div>",520:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype520\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsThermocoupleType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports the Thermocouple Type for any of its ChannelGroups.</div></div>",521:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype521\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsFatigueConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports FatigueOptions configuration.</div></div>",522:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype522\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsYoungsModConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Young\'s Modulus (part of FatigueOptions) configuration.</div></div>",523:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype523\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsPoissonsRatioConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Poisson\'s Ratio (part of FatigueOptions) configuration.</div></div>",524:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype524\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsFatigueRawModeConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports enabling Raw Mode (part of FatigueOptions) configuration.</div></div>",525:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype525\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsHistogramConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports HistogramOptions configuration.</div></div>",526:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype526\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsHistogramRateConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Histogram transmit rate (part of HistogramOptions) configuration.</div></div>",527:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype527\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> supportsAutoBalance(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channelNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if the Node supports the AutoBalance command for a specified channel.</div></div>",528:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype528\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsAutoCal() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports the AutoCal commands.</div></div>",529:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype529\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsChannel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channelNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a specific channel is supported (can be enabled) by this Node.</div></div>",530:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype530\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsSamplingMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td class=\"PName last\">samplingMode</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::SamplingMode is supported by this Node.</div></div>",531:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype531\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsSampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">WirelessSampleRate&nbsp;</td><td class=\"PName last\">sampleRate,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td class=\"PName last\">samplingMode</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a sample rate is supported by the Node for the given WirelessTypes::SamplingMode.</div></div>",532:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype532\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsDataFormat(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td class=\"PName last\">dataFormat</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::DataFormat is supported by this Node.</div></div>",533:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype533\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsDefaultMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DefaultMode&nbsp;</td><td class=\"PName last\">mode</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::DefaultMode is supported by this Node.</div></div>",534:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype534\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsDataCollectionMethod(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataCollectionMethod&nbsp;</td><td class=\"PName last\">collectionMethod</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::DataCollectionMethod is supported by this Node.</div></div>",535:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype535\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsTransmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">TransmitPower&nbsp;</td><td class=\"PName last\">power</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::TransmitPower is supported by this Node.</div></div>",536:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype536\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> WirelessTypes::WirelessSampleRate maxSampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td></td><td class=\"PName last\">samplingMode,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the maximum SampleRate value that is supported by this Node with the given &lt;SamplingMode&gt; and ChannelMask.</div></div>",537:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype537\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> WirelessTypes::SettlingTime maxFilterSettlingTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">rate</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the maximum WirelessTypes::SettlingTime available for the given SampleRate.</div></div>",538:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype538\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> minInactivityTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum inactivity timeout (in seconds) that is supported.</div></div>",539:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype539\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> minLostBeaconTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum lost beacon timeout (in minutes) that is supported.&nbsp; Note: A value of 0 disable the lost beacon timeout.</div></div>",540:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype540\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> maxLostBeaconTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum lost beacon timeout (in minutes) that is supported.</div></div>",541:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype541\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> minCheckRadioInterval() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum check radio interval (in seconds) that is supported.</div></div>",542:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype542\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> maxCheckRadioInterval() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum check radio interval (in seconds) that is supported.</div></div>",543:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype543\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> minSweeps() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum number of sweeps that can be assigned for the duration of a continuous sampling session.</div></div>",544:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype544\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> maxSweeps(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td></td><td class=\"PName last\">samplingMode,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td></td><td class=\"PName last\">dataFormat,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the maximum number of sweeps that can be assigned for a given WirelessTypes::SamplingMode.&nbsp; This is the duration of each burst if in Burst Sync Sampling mode, or the total duration of sampling in other sampling modes.</div></div>",545:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype545\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> maxSweeps(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td></td><td class=\"PName last\">dataFormat,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the maximum number of sweeps that can be assigned for the duration of a continuous sampling session.</div></div>",546:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype546\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual uint32</span> maxSweepsPerBurst(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td></td><td class=\"PName last\">dataFormat,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the maximum number of sweeps per burst that can be assigned for a Burst Sync Sampling session.</div></div>",547:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype547\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">TimeSpan minTimeBetweenBursts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td></td><td class=\"PName last\">dataFormat,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRate,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">sweepsPerBurst</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the minimum time that can be assigned for a Burst Sync Sampling session.</div></div>",548:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype548\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> minHardwareGain() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum hardware gain value that is supported.</div></div>",549:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype549\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> maxHardwareGain() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum hardware gain value that is supported.</div></div>",550:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype550\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">double</span> normalizeHardwareGain(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">gain</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Normalizes the hardware gain value so that it is within an acceptable range.</div></div>",551:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype551\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> numDamageAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of damage angles (see FatigueOptions) on this Node.</div></div>",552:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype552\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> numSnCurveSegments() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of Sn Curve segments (see FatigueOptions) on this Node.</div></div>",553:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype553\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::DefaultModes defaultModes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::DefaultModes that are supported by this Node.</div></div>",554:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype554\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::DataCollectionMethods dataCollectionMethods() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::DataCollectionMethods that are supported by this Node.</div></div>",555:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype555\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::DataFormats dataFormats() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::DataFormats that are supported by this Node.</div></div>",556:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype556\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::SamplingModes samplingModes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::SamplingModes that are supported by this Node.</div></div>",557:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype557\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::WirelessSampleRates sampleRates(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td class=\"PName last\">samplingMode</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::WirelessSampleRates that are supported by this Node for the given sampling mode.</div></div>",558:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype558\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::TransmitPowers transmitPowers() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::TransmitPowers that are supported by this Node.</div></div>",559:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype559\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::WirelessSampleRates histogramTransmitRates() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the Histogram Transmit Rates that are supported by this Node.</div></div>"});