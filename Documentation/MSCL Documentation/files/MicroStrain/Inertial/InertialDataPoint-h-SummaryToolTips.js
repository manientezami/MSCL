NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/InertialDataPoint.h",{1193:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1193\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">InertialDataPoint</div></div></div><div class=\"TTSummary\">Represents a single Inertial Data Point (Extends from DataPoint)</div></div>",1195:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1195\" class=\"NDPrototype NoParameterForm\">InertialDataPoint()</div><div class=\"TTSummary\">Creates an InertialDataPoint object with default, unknown, values</div></div>",1196:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1196\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InertialDataPoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">ChannelQualifier&nbsp;</td><td class=\"PName last\">qualifier,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ValueType&nbsp;</td><td class=\"PName last\">storedAsType,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">anyType&nbsp;</td><td class=\"PName last\">value,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">valid</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an InertialDataPoint object</div></div>",1198:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The InertialTypes::ChannelField of the data point.</div></div>",1199:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1199\" class=\"NDPrototype NoParameterForm\">InertialTypes::ChannelQualifier m_qualifier</div><div class=\"TTSummary\">The InertialTypes::ChannelQualifier of the data point.</div></div>",1200:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1200\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_valid</div><div class=\"TTSummary\">Whether the data point is valid(true) or invalid(false)</div></div>",1202:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1202\" class=\"NDPrototype NoParameterForm\">InertialTypes::ChannelField field() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Channel Field that describes the full MIP &quot;Field&quot; that the data point came in.&nbsp; This is a combination of a MIP &quot;Descriptor ID&quot;, and a MIP &quot;Field ID&quot;.</div></div>",1203:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1203\" class=\"NDPrototype NoParameterForm\">InertialTypes::ChannelQualifier qualifier() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Channel Qualifier that describes the specific channel for the data point.&nbsp; This, combined with the InertialTypes::ChannelField, is a fully unique identifier for the channel.</div></div>",1204:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1204\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> valid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the data point is flagged as valid(true) or invalid(false)</div></div>",1205:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1205\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> channelName() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the name of the channel.&nbsp; This is the universal channel name that should be used for uploading to SensorCloud.</div></div>",1206:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1206\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> str() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the string representation of the type of this data point</div></div>",1208:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a vector of InertialDataPoint objects</div></div>",1209:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1209\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">struct</span></div><div class=\"CPName\">InertialDataEnums</div></div></div><div class=\"TTSummary\">Contains enums representing the possible values for certain Inertial Data Points</div></div>",1211:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The GPS Fix Types with the GPS Fix Information field</div></div>",1217:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Sensor States with the GPS Hardware Status field</div></div>",1221:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Antenna States with the GPS Hardware Status field</div></div>",1227:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Antenna Powers with the GPS Hardware Status field</div></div>",1231:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Filter States with the NAV Filter Status field</div></div>",1236:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Dynamics Modes with the NAV Filter Status field</div></div>",1240:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Binary flags that give information with the NAV Filter Status field. Each bit must be checked accordingly.</div></div>",1250:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Heading Sources with the Heading Update Source State field</div></div>"});