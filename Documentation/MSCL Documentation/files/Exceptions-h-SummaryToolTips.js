NDSummary.OnToolTipsLoaded("File:Exceptions.h",{6686:"<div class=\"NDToolTip TSection LC\"><div class=\"TTSummary\">Contains all the MicroStrain custom exceptions that can be thrown in MSCL</div></div>",6687:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6687\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error</div></div></div><div class=\"TTSummary\">The generic MicroStrain exception (base class)</div></div>",6689:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6689\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_description</div><div class=\"TTSummary\">the description of the error to be thrown, default value of &quot;The MSCL has thrown an exception.&quot;</div></div>",6691:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6691\" class=\"NDPrototype NoParameterForm\">Error() : m_description(<span class=\"SHString\">&quot;MSCL has thrown an exception.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error object with the default description</div></div>",6692:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6692\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : m_description(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error object with a custom description</div></div>",6693:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6693\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const char</span>* what () <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">overriding the default std::exception what() function, gets the description of the thrown exception</div></div>",6694:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6694\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NotSupported</div></div></div><div class=\"TTSummary\">A command/feature was attempted to be used that was not supported.</div></div>",6696:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6696\" class=\"NDPrototype NoParameterForm\">Error_NotSupported(): Error(<span class=\"SHString\">&quot;This feature is not supported.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_NotSupported object with a default description</div></div>",6697:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6697\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NotSupported(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NotSupported object with a custom description</div></div>",6698:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6698\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NoData</div></div></div><div class=\"TTSummary\">There is no data available to be accessed</div></div>",6700:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6700\" class=\"NDPrototype NoParameterForm\">Error_NoData(): Error(<span class=\"SHString\">&quot;No data is available.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_NoData object with a default description</div></div>",6701:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6701\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NoData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">): Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NoData object with a custom description</div></div>",6702:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6702\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_BadDataType</div></div></div><div class=\"TTSummary\">Data of one type was accessed as another type (simple_any)</div></div>",6704:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6704\" class=\"NDPrototype NoParameterForm\">Error_BadDataType() : Error(<span class=\"SHString\">&quot;Data was accessed using the wrong data type.&quot;</span>)</div><div class=\"TTSummary\">Intializes the Error_BadDataType object with a default description</div></div>",6705:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6705\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_UnknownSampleRate</div></div></div><div class=\"TTSummary\">The sample rate is invalid or unknown for the given device</div></div>",6707:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6707\" class=\"NDPrototype NoParameterForm\">Error_UnknownSampleRate() : Error(<span class=\"SHString\">&quot;Unknown Sample Rate.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_UnknownSampleRate object with a default description</div></div>",6708:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6708\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_UnknownSampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_UnknownSampleRate object with a custom description</div></div>",6709:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6709\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Communication</div></div></div><div class=\"TTSummary\">The exception for failing to communicate with a device.</div></div>",6711:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6711\" class=\"NDPrototype NoParameterForm\">Error_Communication() : Error(<span class=\"SHString\">&quot;Failed to communicate with the device.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_Communication object.</div></div>",6712:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6712\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Communication(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Communication object.</div></div>",6713:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6713\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NodeCommunication</div></div></div><div class=\"TTSummary\">The exception for failing to communicate with a WirelessNode.</div></div>",6715:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6715\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address of the WirelessNode that failed to communicate.</div></div>",6717:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6717\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NodeCommunication(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">): Error_Communication(<span class=\"SHString\">&quot;Failed to communicate with the Wireless Node.&quot;</span>), m_nodeAddress(nodeAddress)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NodeCommunication object.</div></div>",6718:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6718\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NodeCommunication(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">): Error_Communication(description), m_nodeAddress(nodeAddress)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NodeCommunication object.</div></div>",6719:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6719\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> NodeAddress nodeAddress() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">gets the node address of the WirelessNode that failed to communicate</div></div>",6720:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6720\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Connection</div></div></div><div class=\"TTSummary\">The generic connection exception.</div></div>",6722:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6722\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int</span> m_code</div><div class=\"TTSummary\">the exception error code (system error codes)</div></div>",6724:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6724\" class=\"NDPrototype NoParameterForm\">Error_Connection(): Error(<span class=\"SHString\">&quot;Connection error.&quot;</span>), m_code(<span class=\"SHNumber\">-1</span>)</div><div class=\"TTSummary\">Initializes the Error_Connection object, sets the error code to a default of -1</div></div>",6725:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6725\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Connection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error(<span class=\"SHString\">&quot;Connection error.&quot;</span>), m_code(code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Connection object</div></div>",6726:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6726\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Connection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">): Error(description), m_code(<span class=\"SHNumber\">-1</span>)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Connection object</div></div>",6727:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6727\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Connection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error(description), m_code(code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Connection object</div></div>",6728:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6728\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const int</span> code() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">gets the exception error code (system error codes, or -1 by default)</div></div>",6729:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6729\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidSerialPort</div></div></div><div class=\"TTSummary\">There was an error with the specified COM Port.</div></div>",6731:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6731\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidSerialPort(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error_Connection(<span class=\"SHString\">&quot;Invalid Com Port.&quot;</span>, code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidSerialPort object</div></div>",6732:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6732\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidTcpServer</div></div></div><div class=\"TTSummary\">There was an error with the specified TCP/IP Server.</div></div>",6734:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6734\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidTcpServer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">code,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">message</td></tr></table></td><td class=\"PAfterParameters\">): Error_Connection(<span class=\"SHString\">&quot;Invalid TCP/IP Server: &quot;</span> + message, code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidTcpServer object</div></div>",6735:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6735\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidUnixSocket</div></div></div><div class=\"TTSummary\">There was an error with the specified Unix Socket.</div></div>",6737:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6737\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidUnixSocket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">code,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">message</td></tr></table></td><td class=\"PAfterParameters\">): Error_Connection(<span class=\"SHString\">&quot;Invalid Unix Socket: &quot;</span> + message, code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidUnixSocket object</div></div>",6738:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6738\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_MipCmdFailed</div></div></div><div class=\"TTSummary\">The Inertial command has failed</div></div>",6740:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6740\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int</span> m_code</div><div class=\"TTSummary\">the exception error code (NACK error code)</div></div>",6742:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6742\" class=\"NDPrototype NoParameterForm\">Error_MipCmdFailed() : Error(<span class=\"SHString\">&quot;The Inertial command has failed.&quot;</span>), m_code(<span class=\"SHNumber\">-1</span>)</div><div class=\"TTSummary\">Initializes the Error_MipCmdFailed object, sets the error code to a default of -1</div></div>",6743:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6743\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_MipCmdFailed(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : Error(description), m_code(<span class=\"SHNumber\">-1</span>)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_MipCmdFailed object, sets the error code to a default of -1</div></div>",6744:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6744\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_MipCmdFailed(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error(<span class=\"SHString\">&quot;The Inertial command has failed.&quot;</span>), m_code(code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_MipCmdFailed object</div></div>",6745:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6745\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const int</span> code() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">gets the exception error code</div></div>",6746:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6746\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidConfig</div></div></div><div class=\"TTSummary\">The Configuration is invalid.</div></div>",6748:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6748\" class=\"NDPrototype NoParameterForm\">ConfigIssues m_issues</div><div class=\"TTSummary\">The ConfigIssues that caused the invalid configuration exception.</div></div>",6750:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6750\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">issues</td></tr></table></td><td class=\"PAfterParameters\">): Error(<span class=\"SHString\">&quot;Invalid Configuration:&quot;</span>), m_issues(issues)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidConfig object</div></div>",6751:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6751\" class=\"NDPrototype NoParameterForm\">ConfigIssues issues() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">Gets the ConfigIssues that caused the invalid configuration exception.</div></div>",6752:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6752\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidNodeConfig</div></div></div><div class=\"TTSummary\">The Configuration for a WirelessNode is invalid.</div></div>",6754:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6754\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address of the WirelessNode that the exception pertains to.</div></div>",6756:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6756\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidNodeConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">issues,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">) : Error_InvalidConfig(issues), m_nodeAddress(nodeAddress)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidNodeConfig object</div></div>",6757:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6757\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> NodeAddress nodeAddress() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">Gets the node address of the Node that this exception pertains to.</div></div>"});