NDSummary.OnToolTipsLoaded("CClass:Connection",{136:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype136\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Connection</div></div></div><div class=\"TTSummary\">The Connection object that is used for communication.</div></div>",138:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype138\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Connection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">shared_ptr&lt;Connection_Impl_Base&gt;&nbsp;</td><td class=\"PName last\">impl</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Connection object with the given implementation.&nbsp; Note: This constructor should not be used in most cases.&nbsp; Please use the static Serial, TcpIp, and UnixSocket functions.</div></div>",139:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype139\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Connection Serial(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">port,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">baudRate&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">921600</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A static function for creating a Connection object with a SerialConnection implementation.&nbsp; A connection with the specified port will be established.</div></div>",140:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype140\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Connection TcpIp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">serverAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">serverPort</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A static function for creating a Connection object with a TcpIpConnection implementation.&nbsp; A connection with the specified address/port will be established.</div></div>",141:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype141\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Connection UnixSocket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">path</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A generator function for Connection objects with a UnixSocketConnection implementation (Unix builds only).&nbsp; A connection with the specified path will be established.</div></div>",143:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype143\" class=\"NDPrototype NoParameterForm\">std::shared_ptr&lt;Connection_Impl_Base&gt; m_impl</div><div class=\"TTSummary\">The Connection_Impl_Base that contains all the implementation logic for the Connection class.</div></div>",145:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype145\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> registerParser(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>(DataBuffer&amp;)&gt;&nbsp;</td><td class=\"PName last\">parseFunction</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Registers a function to handle the parsing of data when it is read in.</div></div>",146:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype146\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> unregisterParser()</div><div class=\"TTSummary\">Unregisters the function to handle the parsing of data when it is read in.</div></div>",147:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype147\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the specified bytes.</div></div>",148:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype148\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> throwIfError()</div><div class=\"TTSummary\">Throws an exception if a connection error has occurred.</div></div>",149:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype149\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> description()</div><div class=\"TTSummary\">Gets a description of the connection as a string.</div></div>",150:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype150\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> disconnect()</div><div class=\"TTSummary\">Closes the current connection.</div></div>",151:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype151\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> reconnect()</div><div class=\"TTSummary\">Reopens a connection that has been disconnected.</div></div>",152:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype152\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">bytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the given bytes to the connection.</div></div>",153:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype153\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> writeStr(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">bytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the given string (containing bytes) to the connection.</div></div>",154:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype154\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearBuffer()</div><div class=\"TTSummary\">Resets the read buffer.</div></div>",155:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype155\" class=\"NDPrototype NoParameterForm\">std::size_t byteReadPos() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the read position from the byte buffer.</div></div>",156:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype156\" class=\"NDPrototype NoParameterForm\">std::size_t byteAppendPos() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the append position from the byte buffer.</div></div>",157:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype157\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> rawByteMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Puts the connection into &quot;Raw Byte Mode.&quot;  &quot;Raw Byte Mode&quot; stops the data from being sent/parsed from any attached devices (BaseStation, InertialNode, etc.)&nbsp; and instead sends all data into a raw circular data buffer that can be accessed by calling getRawBytes on this Connection object.&nbsp; Disabling this mode will start sending all data back to the previous attached device, if still available.</div></div>",158:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype158\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Bytes getRawBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">maxBytes&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the raw bytes that are available that have been collected when the Connection is in &quot;Raw Byte Mode.&quot;&nbsp; If the Connection has not been put into &quot;Raw Byte Mode&quot; by calling rawByteMode, no data can be retrieved from this function.</div></div>",159:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype159\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">string</span> getRawBytesStr(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">maxBytes&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the raw bytes that are available that have been collected when the Connection is in &quot;Raw Byte Mode&quot; as a string.&nbsp; If the Connection has not been put into &quot;Raw Byte Mode&quot; by calling rawByteMode, no data can be retrieved from this function.</div></div>",160:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype160\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> debugMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Puts the connection into &quot;Debug Mode.&quot;  &quot;Debug Mode Mode&quot; adds an additional container that gets filled when any write or read operations occur.&nbsp; Once debug mode is enabled, you can access this data with the getDebugData function.&nbsp; This does not interfere with standard data collection.</div></div>",161:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype161\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ConnectionDebugDataVec getDebugData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the ConnectionDebugData that have been collected when the Connection is in &quot;Debug Mode.&quot;&nbsp; If the Connection has not been put into &quot;Debug Mode&quot; by calling debugMode, no data can be retrieved from this function.</div></div>"});