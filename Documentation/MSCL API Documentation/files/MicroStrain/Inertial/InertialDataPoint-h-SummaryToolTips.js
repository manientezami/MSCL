NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/InertialDataPoint.h",{289:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype289\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">InertialDataPoint</div></div></div><div class=\"TTSummary\">Represents a single Inertial Data Point (Extends from DataPoint)</div></div>",290:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype290\" class=\"NDPrototype NoParameterForm\">InertialTypes::ChannelField field() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Channel Field that describes the full MIP &quot;Field&quot; that the data point came in.&nbsp; This is a combination of a MIP &quot;Descriptor ID&quot;, and a MIP &quot;Field ID&quot;.</div></div>",291:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype291\" class=\"NDPrototype NoParameterForm\">InertialTypes::ChannelQualifier qualifier() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Channel Qualifier that describes the specific channel for the data point.&nbsp; This, combined with the InertialTypes::ChannelField, is a fully unique identifier for the channel.</div></div>",292:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype292\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> valid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the data point is flagged as valid(true) or invalid(false)</div></div>",293:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype293\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> channelName() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the name of the channel.&nbsp; This is the universal channel name that should be used for uploading to SensorCloud.</div></div>",294:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype294\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> str() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the string representation of the type of this data point</div></div>",295:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a vector of InertialDataPoint objects</div></div>",296:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype296\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">struct</span></div><div class=\"CPName\">InertialDataEnums</div></div></div><div class=\"TTSummary\">Contains enums representing the possible values for certain Inertial Data Points</div></div>",297:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The GPS Fix Types with the GPS Fix Information field</div></div>",303:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Sensor States with the GPS Hardware Status field</div></div>",307:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Antenna States with the GPS Hardware Status field</div></div>",313:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Antenna Powers with the GPS Hardware Status field</div></div>",317:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Filter States with the NAV Filter Status field</div></div>",322:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Dynamics Modes with the NAV Filter Status field</div></div>",326:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Binary flags that give information with the NAV Filter Status field. Each bit must be checked accordingly.</div></div>",336:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Heading Sources with the Heading Update Source State field</div></div>"});