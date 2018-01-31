NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/EventTriggerOptions.h",{700:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype700\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Trigger(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channelNumber,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">EventTriggerType&nbsp;</td><td class=\"PName last\">triggerType,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">triggerValue</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Trigger object with the provided values.</div></div>",701:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype701\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> channelNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Wireless Node channel number that the trigger is applied to.</div></div>",702:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype702\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> channelNumber(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channelNum</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Wireless Node channel number for the trigger.</div></div>",703:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype703\" class=\"NDPrototype NoParameterForm\">WirelessTypes::EventTriggerType triggerType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::EventTriggerType currently set.</div></div>",704:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype704\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> triggerType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">EventTriggerType&nbsp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the WirelessTypes::EventTriggerType for the trigger.</div></div>",705:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype705\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> triggerValue() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the trigger value currently set, in whatever unit the channel is calibrated for.&nbsp; (Ex. If triggering on channel 1, and channel 1 is calibrated for G\'s, a value of 4 for this triggerValue would be 4 G\'s).</div></div>",706:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype706\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> triggerValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the trigger value for the trigger, in whatever unit the channel is calibrated for.&nbsp; (Ex. If triggering on channel 1, and channel 1 is calibrated for G\'s, a value of 4 for this triggerValue would be 4 G\'s).</div></div>",707:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of trigger IDs (uint8) to Trigger objects.</div></div>",708:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype708\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EventTriggerOptions</div></div></div><div class=\"TTSummary\">Contains all of the Event Trigger options that can be configured for a WirelessNode.</div></div>",709:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype709\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> BitMask&amp; triggerMask() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the actual BitMask that represents the active and inactive triggers.</div></div>",710:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype710\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> triggerMask(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BitMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the BitMask that represents the active and inactive triggers.</div></div>",711:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype711\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> anyTriggersEnabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if any triggers are enabled.</div></div>",712:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype712\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> triggerEnabled(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">triggerIndex</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a specific trigger is enabled.</div></div>",713:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype713\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> enableTrigger(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">triggerIndex,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">enable&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables or disables a specific trigger.</div></div>",714:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype714\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> preDuration() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the pre event duration in milliseconds.</div></div>",715:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype715\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> preDuration(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">duration</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the pre event duration in milliseconds.</div></div>",716:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype716\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> postDuration() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the post event duration in milliseconds.</div></div>",717:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype717\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> postDuration(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">duration</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the post event duration in milliseconds.</div></div>",718:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype718\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> trigger(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">triggerIndex,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Trigger&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">trigger</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Trigger in this options object, for the trigger trigger index.</div></div>",719:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype719\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> Trigger&amp; trigger(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">triggerIndex</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the Trigger for the given trigger index.</div></div>",720:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype720\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Triggers&amp; triggers() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Triggers that are currently set in this object.</div></div>"});