NDSummary.OnToolTipsLoaded("CClass:NodeFeatures",{635:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype635\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a WirelessNode.</div></div>",636:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype636\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> normalizeNumSweeps(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">sweeps</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Normalizes the number of sweeps so that it is within range and a multiple of 100 (rounds up to next multiple).</div></div>",637:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype637\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">TimeSpan normalizeTimeBetweenBursts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">TimeSpan&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">time</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Normalizes a TimeSpan so that it is within an acceptable range for setting the timeBetweenBursts.&nbsp; A valid range is between 1 second and 24 hours. Seconds above 32767 will be rounded to minutes.&nbsp; When setting the time between bursts, you should also call minTimeBetweenBursts and verify it is greater than this.</div></div>",638:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype638\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> WirelessChannels&amp; channels() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the WirelessChannels of this Node.</div></div>",639:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype639\" class=\"NDPrototype NoParameterForm\">ChannelGroups channelGroups() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ChannelGroups supported by this Node.</div></div>",640:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype640\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::ChannelType channelType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channelNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the WirelessTypes::ChannelType for the requested channel number.</div></div>",641:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype641\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsChannelSetting(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelGroupSetting&nbsp;</td><td></td><td class=\"PName last\">setting,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if the Node supports a given WirelessTypes::ChannelGroupSetting for the given ChannelMask.</div></div>",642:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype642\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> supportsInputRange() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Input Range for any of its ChannelGroups.</div></div>",643:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype643\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> supportsHardwareOffset() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Hardware Offset for any of its ChannelGroups.</div></div>",644:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype644\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> supportsAntiAliasingFilter() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Anti-Aliasing Filter for any of its ChannelGroups.</div></div>",645:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype645\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> supportsGaugeFactor() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Gauge Factor for any of its ChannelGroups.</div></div>",646:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype646\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsLostBeaconTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports the Lost Beacon Timeout option.</div></div>",647:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype647\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> supportsFilterSettlingTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Filter Settling Time for any of its ChannelGroups.</div></div>",648:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype648\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsThermocoupleType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports the Thermocouple Type for any of its ChannelGroups.</div></div>",649:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype649\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsFatigueConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports FatigueOptions configuration.</div></div>",650:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype650\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsYoungsModConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Young\'s Modulus (part of FatigueOptions) configuration.</div></div>",651:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype651\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsPoissonsRatioConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Poisson\'s Ratio (part of FatigueOptions) configuration.</div></div>",652:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype652\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsFatigueDebugModeConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports enabling Debug Mode (part of FatigueOptions) configuration.</div></div>",653:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype653\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsFatigueModeConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Fatigue Mode (part of FatigueOptions) configuration.</div></div>",654:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype654\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsHistogramConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports HistogramOptions configuration.</div></div>",655:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype655\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsHistogramRateConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Histogram transmit rate (part of HistogramOptions) configuration.</div></div>",656:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype656\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsHistogramEnableConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports turning Histograms on and off (part of FatigueOptions).</div></div>",657:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype657\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsActivitySense() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports the ActivitySense feature.</div></div>",658:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype658\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsAutoBalance() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports the Auto Balance command for any of its ChannelGroups.</div></div>",659:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype659\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsLegacyShuntCal() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports the legacy Shunt Cal for any of its ChannelGroups.</div></div>",660:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype660\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsAutoCal() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports the AutoCal commands.</div></div>",661:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype661\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsAutoShuntCal() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports AutoShuntCal on any of this ChannelGroups.</div></div>",662:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype662\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsLimitedDuration() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports setting a limited duration of sampling.</div></div>",663:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype663\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsEventTrigger() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Event Trigger sampling.</div></div>",664:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype664\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsDiagnosticInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports sending Diagnostic Info.</div></div>",665:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype665\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsLoggedData() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports logging to internal memory.</div></div>",666:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype666\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsSensorDelayConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports configuration of sensor delay.</div></div>",667:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype667\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsSensorDelayAlwaysOn() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports setting the sensor delay value to &quot;Always On.&quot;</div></div>",668:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype668\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsChannel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channelNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a specific channel is supported (can be enabled) by this Node.</div></div>",669:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype669\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsSamplingMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td class=\"PName last\">samplingMode</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::SamplingMode is supported by this Node.</div></div>",670:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype670\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsSampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">WirelessSampleRate&nbsp;</td><td class=\"PName last\">sampleRate,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td class=\"PName last\">samplingMode,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataCollectionMethod&nbsp;</td><td class=\"PName last\">dataCollectionMethod</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a sample rate is supported by the Node for the given WirelessTypes::SamplingMode.</div></div>",671:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype671\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsDataFormat(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td class=\"PName last\">dataFormat</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::DataFormat is supported by this Node.</div></div>",672:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype672\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsDefaultMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DefaultMode&nbsp;</td><td class=\"PName last\">mode</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::DefaultMode is supported by this Node.</div></div>",673:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype673\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsDataCollectionMethod(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataCollectionMethod&nbsp;</td><td class=\"PName last\">collectionMethod</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::DataCollectionMethod is supported by this Node.</div></div>",674:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype674\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsTransmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">TransmitPower&nbsp;</td><td class=\"PName last\">power</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::TransmitPower is supported by this Node.</div></div>",675:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype675\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsFatigueMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">FatigueMode&nbsp;</td><td class=\"PName last\">mode</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::FatigueMode is supported by this Node.</div></div>",676:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype676\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsInputRange(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">InputRange&nbsp;</td><td></td><td class=\"PName last\">range,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::InputRange is supported by this Node for the given ChannelMask.</div></div>",677:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype677\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsCentisecondEventDuration() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node configures event duration in 10s of milliseconds or not.</div></div>",678:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype678\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsGetDiagnosticInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports the Get Diagnostic Info command.</div></div>",679:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype679\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsNonSyncLogWithTimestamps() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports the version of Non-Sync Sampling that will add timestamps when logging.&nbsp; If the Node does not support this, when downloading logged data from the Node, no timestamp information will be given.</div></div>",680:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype680\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> WirelessTypes::WirelessSampleRate maxSampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td></td><td class=\"PName last\">samplingMode,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataCollectionMethod&nbsp;</td><td></td><td class=\"PName last\">dataCollectionMethod</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the maximum SampleRate value that is supported by this Node with the given &lt;SamplingMode&gt;, ChannelMask, and WirelessTypes::DataCollectionMethod.</div></div>",681:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype681\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> WirelessTypes::WirelessSampleRate maxSampleRateForSettlingTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SettlingTime&nbsp;</td><td class=\"PName last\">filterSettlingTime,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td class=\"PName last\">samplingMode,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataCollectionMethod&nbsp;</td><td class=\"PName last\">dataCollectionMethod</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the maximum SampleRate value that is supported by this Node with the given WirelessTypes::SettlingTime.</div></div>",682:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype682\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> WirelessTypes::SettlingTime maxFilterSettlingTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">rate</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the maximum WirelessTypes::SettlingTime available for the given SampleRate.</div></div>",683:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype683\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> minInactivityTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum inactivity timeout (in seconds) that is supported.</div></div>",684:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype684\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> minLostBeaconTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum lost beacon timeout (in minutes) that is supported.&nbsp; Note: A value of 0 disable the lost beacon timeout.</div></div>",685:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype685\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> maxLostBeaconTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum lost beacon timeout (in minutes) that is supported.</div></div>",686:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype686\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> minCheckRadioInterval() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum check radio interval (in seconds) that is supported.</div></div>",687:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype687\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> maxCheckRadioInterval() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum check radio interval (in seconds) that is supported.</div></div>",688:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype688\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> minSweeps() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum number of sweeps that can be assigned for the duration of a continuous sampling session.</div></div>",689:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype689\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> maxSweeps(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td></td><td class=\"PName last\">samplingMode,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td></td><td class=\"PName last\">dataFormat,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the maximum number of sweeps that can be assigned for a given WirelessTypes::SamplingMode.&nbsp; This is the duration of each burst if in Burst Sync Sampling mode, or the total duration of sampling in other sampling modes.</div></div>",690:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype690\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> maxSweeps(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td></td><td class=\"PName last\">dataFormat,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the maximum number of sweeps that can be assigned for the duration of a continuous sampling session.</div></div>",691:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype691\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual uint32</span> maxSweepsPerBurst(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td></td><td class=\"PName last\">dataFormat,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the maximum number of sweeps per burst that can be assigned for a Burst Sync Sampling session.</div></div>",692:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype692\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">TimeSpan minTimeBetweenBursts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td></td><td class=\"PName last\">dataFormat,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRate,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">sweepsPerBurst</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the minimum time that can be assigned for a Burst Sync Sampling session.</div></div>",693:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype693\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> minSensorDelay() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum sensor delay value (in microseconds) that is supported.</div></div>",694:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype694\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> maxSensorDelay() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum sensor delay value (in microseconds) that is supported.</div></div>",695:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype695\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> maxEventTriggerTotalDuration(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td></td><td class=\"PName last\">dataFormat,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRate</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the max event trigger duration (in milliseconds) that can be applied for both the pre and post event durations (combined).</div></div>",696:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype696\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> normalizeEventDuration(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">duration</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Normalizes the Event Trigger duration so that it is an acceptable value.</div></div>",697:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype697\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> normalizeSensorDelay(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">delay</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Normalizes the sensor delay so that it is an acceptable value.</div></div>",698:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype698\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> numDamageAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of damage angles (see FatigueOptions) on this Node.</div></div>",699:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype699\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> numSnCurveSegments() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of Sn Curve segments (see FatigueOptions) on this Node.</div></div>",700:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype700\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> numEventTriggers() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of supported event triggers on this Node.</div></div>",701:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype701\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::DefaultModes defaultModes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::DefaultModes that are supported by this Node.</div></div>",702:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype702\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::DataCollectionMethods dataCollectionMethods() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::DataCollectionMethods that are supported by this Node.</div></div>",703:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype703\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::DataFormats dataFormats() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::DataFormats that are supported by this Node.</div></div>",704:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype704\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::SamplingModes samplingModes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::SamplingModes that are supported by this Node.</div></div>",705:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype705\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::WirelessSampleRates sampleRates(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td class=\"PName last\">samplingMode,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataCollectionMethod&nbsp;</td><td class=\"PName last\">dataCollectionMethod</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::WirelessSampleRates that are supported by this Node for the given sampling mode.</div></div>",706:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype706\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::TransmitPowers transmitPowers() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::TransmitPowers that are supported by this Node.</div></div>",707:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype707\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::WirelessSampleRates histogramTransmitRates() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the Histogram Transmit Rates that are supported by this Node.</div></div>",708:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype708\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::FatigueModes fatigueModes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::FatigueModes that are supported by this Node.</div></div>",709:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype709\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::Filters antiAliasingFilters() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the Anti-Aliasing WirelessTypes::Filters that are supported by this Node.</div></div>",710:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype710\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::StorageLimitModes storageLimitModes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::StorageLimitModes that are supported by this Node.</div></div>",711:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype711\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::InputRanges inputRanges(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of WirelessTypes::InputRanges that are supported by this Node for the specified channel mask.</div></div>"});