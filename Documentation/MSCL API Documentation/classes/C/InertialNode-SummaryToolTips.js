NDSummary.OnToolTipsLoaded("CClass:InertialNode",{369:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype369\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">InertialNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain Inertial Node</div></div>",370:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype370\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> InertialNode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Connection&nbsp;</td><td class=\"PName last\">connection</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an InertialNode object.</div></div>",371:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype371\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> InertialNodeInfo&amp; info()</div><div class=\"TTSummary\">Gets InertialNodeInfo for this Node.&nbsp; The first time this function is called, it will send multiple commands to the device to get all required information.&nbsp; Note: This will be invalid when the InertialNode is destroyed.</div></div>",372:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype372\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> InertialNodeFeatures&amp; features()</div><div class=\"TTSummary\">Gets a reference to the InertialNodeFeatures for this device.&nbsp; Note: This will be invalid when the InertialNode is destroyed.</div></div>",373:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype373\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> deviceName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">serial</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function for creating the universal sensor name that should be used for SensorCloud.</div></div>",374:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype374\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; lastCommunicationTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp for the last time MSCL communicated with the InertialNode.</div></div>",375:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype375\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> SampleRates&amp; supportedSampleRates(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">InertialCategory&nbsp;</td><td class=\"PName last\">category</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets a list of the supported sample rates for an InertialTypes::InertialCategory.</div></div>",376:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype376\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InertialDataPackets getDataPackets(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">maxPackets&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets up to the requested amount of data packets that have been collected.</div></div>",377:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype377\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> totalPackets()</div><div class=\"TTSummary\">Gets the total number of data packets that are currently in the buffer.</div></div>",378:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype378\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> timeout(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the timeout to use when waiting for responses from Inertial commands.</div></div>",379:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype379\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> timeout()</div><div class=\"TTSummary\">Gets the timeout to use when waiting for responses from Inertial commands.</div></div>",380:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype380\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> name()</div><div class=\"TTSummary\">Gets the name of the InertialNode. This is the universal sensor name that should be used for uploading to SensorCloud.&nbsp; This is the same as calling InertialNode::deviceName.</div></div>",381:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype381\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> ping()</div><div class=\"TTSummary\">Pings the Node to check for communication.&nbsp; Sends the &quot;Ping&quot; command to the device.</div></div>",382:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype382\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> setToIdle()</div><div class=\"TTSummary\">Suspends streaming (if enabled) or wakes the device from sleep (if sleeping), putting the device in an idle mode.&nbsp; After this command is used, the resume command may be used to put the Node back into the mode it was previously in before setToIdle was called.</div></div>",383:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype383\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resume()</div><div class=\"TTSummary\">Places the Node back in the mode it was in before issuing the setToIdle command.&nbsp; If the setToIdle command was not issued, then the device is placed in default mode.</div></div>",384:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype384\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> getDataRateBase(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">InertialCategory&nbsp;</td><td class=\"PName last\">category</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the Data decimation base for the data rate calculations of the specified &lt;InertialType&gt;.</div></div>",385:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype385\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InertialChannels getActiveChannelFields(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">InertialCategory&nbsp;</td><td class=\"PName last\">category</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the current active channel fields for the specified InertialTypes::InertialCategory.</div></div>",386:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype386\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setActiveChannelFields(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">InertialCategory&nbsp;</td><td></td><td class=\"PName last\">category,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">InertialChannels&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the current active channel fields for the specified InertialTypes::InertialCategory.&nbsp; Note that this function does not add to the existing message format (active channels), but overwrites it entirely.</div></div>",387:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype387\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> getCommunicationMode()</div><div class=\"TTSummary\">Gets the current communication mode that the node is in.</div></div>",388:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype388\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setCommunicationMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">communicationMode</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the communication mode for the node.&nbsp; Note: The node info will be reset when doing this and therefore will require being fetched again the next time it is requested.</div></div>",389:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype389\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> enableDataStream(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">InertialCategory&nbsp;</td><td class=\"PName\">category,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">enable&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables or disables continuous data streaming for the node.</div></div>",390:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype390\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resetFilter()</div><div class=\"TTSummary\">Resets the filter to the initialize state.&nbsp; Note: If the auto-initialization feature is disabled, the initial attitude or heading must be set in order to enter the run state after a reset.</div></div>",391:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype391\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> getAutoInitialization()</div><div class=\"TTSummary\">Gets the state of the automatic initialization upon device startup.</div></div>",392:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype392\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setAutoInitialization(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the state of the automatic initialization upon device startup.</div></div>",393:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype393\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setInitialAttitude(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EulerAngles&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">attitude</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the initial attitude.&nbsp; Node: This command can only be issues in the &quot;INIT&quot; state and should be used with a good estimate of the vehicle attitude.</div></div>",394:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype394\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setInitialHeading(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">heading</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the initial heading.&nbsp; Node: This command can only be issues in the &quot;INIT&quot; state and should be used with a good estimate of heading. The device will use this value in conjunction with the output of the accelerometers to determine the initial attitude estimate.</div></div>",395:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype395\" class=\"NDPrototype NoParameterForm\">EulerAngles getSensorToVehicleTransformation()</div><div class=\"TTSummary\">Gets the sensor to vehicle frame transformation matrix using roll, pitch, and yaw Euler angles.&nbsp; These angles define the rotation from the sensor body from to the fixed vehicle frame.</div></div>",396:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype396\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setSensorToVehicleTransformation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EulerAngles&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">angles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the sensor to vehicle frame transformation matrix using roll, pitch, and yaw Euler angles (in radians).&nbsp; These angles define the rotation from the sensor body from to the fixed vehicle frame.</div></div>",397:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype397\" class=\"NDPrototype NoParameterForm\">PositionOffset getSensorToVehicleOffset()</div><div class=\"TTSummary\">Gets the sensor to vehicle frame offset, expressed in the sensor frame.</div></div>",398:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype398\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setSensorToVehicleOffset(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">PositionOffset&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">offset</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the sensor to vehicle frame offset, expressed in the sensor frame.</div></div>",399:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype399\" class=\"NDPrototype NoParameterForm\">PositionOffset getAntennaOffset()</div><div class=\"TTSummary\">Gets the antenna offset, expressed in the sensor frame.</div></div>",400:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype400\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setAntennaOffset(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">PositionOffset&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">offset</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the antenna offset, expressed in the sensor frame.</div></div>"});