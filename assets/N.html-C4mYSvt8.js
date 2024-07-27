import{_ as e,c as n,o as s,d as a}from"./app-SaJJkj-5.js";const i={},l=a(`<h1 id="n" tabindex="-1"><a class="header-anchor" href="#n"><span>N</span></a></h1><h3 id="networkpeer-reliability" tabindex="-1"><a class="header-anchor" href="#networkpeer-reliability"><span><code>NetworkPeer::Reliability</code></span></a></h3><table><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>Reliable</td><td><code>0</code></td></tr><tr><td>ReliableOrdered</td><td><code>1</code></td></tr><tr><td>Unreliable</td><td><code>2</code></td></tr><tr><td>UnreliableSequenced</td><td><code>3</code></td></tr></tbody></table><h3 id="networkidentifier-type" tabindex="-1"><a class="header-anchor" href="#networkidentifier-type"><span><code>NetworkIdentifier::Type</code></span></a></h3><table><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>RakNet</td><td><code>0</code></td></tr><tr><td>Address</td><td><code>1</code></td></tr><tr><td>Address6</td><td><code>2</code></td></tr><tr><td>Generic</td><td><code>3</code></td></tr></tbody></table><h3 id="newlogtype" tabindex="-1"><a class="header-anchor" href="#newlogtype"><span><code>NewLogType</code></span></a></h3><table><thead><tr><th>Name</th><th>Value</th></tr></thead></table><h3 id="newleaftype" tabindex="-1"><a class="header-anchor" href="#newleaftype"><span><code>NewLeafType</code></span></a></h3><table><thead><tr><th>Name</th><th>Value</th></tr></thead></table><h3 id="nodetype" tabindex="-1"><a class="header-anchor" href="#nodetype"><span><code>NodeType</code></span></a></h3><table><thead><tr><th>Name</th><th>Value</th></tr></thead></table><h3 id="nvsdk-ngx-tonemappertype" tabindex="-1"><a class="header-anchor" href="#nvsdk-ngx-tonemappertype"><span><code>NVSDK_NGX_ToneMapperType</code></span></a></h3><table><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>NVSDK_NGX_TONEMAPPER_STRING</td><td><code>0</code></td></tr><tr><td>NVSDK_NGX_TONEMAPPER_REINHARD</td><td><code>1</code></td></tr><tr><td>NVSDK_NGX_TONEMAPPER_ONEOVERLUMA</td><td><code>2</code></td></tr><tr><td>NVSDK_NGX_TONEMAPPER_ACES</td><td><code>3</code></td></tr><tr><td>NVSDK_NGX_TONEMAPPERTYPE_NUM</td><td><code>4</code></td></tr></tbody></table><h3 id="nvsdk-ngx-perfquality-value" tabindex="-1"><a class="header-anchor" href="#nvsdk-ngx-perfquality-value"><span><code>NVSDK_NGX_PerfQuality_Value</code></span></a></h3><table><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>NVSDK_NGX_PerfQuality_Value_MaxPerf</td><td><code>0</code></td></tr><tr><td>NVSDK_NGX_PerfQuality_Value_Balanced</td><td><code>1</code></td></tr><tr><td>NVSDK_NGX_PerfQuality_Value_MaxQuality</td><td><code>2</code></td></tr><tr><td>NVSDK_NGX_PerfQuality_Value_UltraPerformance</td><td><code>3</code></td></tr><tr><td>NVSDK_NGX_PerfQuality_Value_UltraQuality</td><td><code>4</code></td></tr></tbody></table><h3 id="networkpeer-datastatus" tabindex="-1"><a class="header-anchor" href="#networkpeer-datastatus"><span><code>NetworkPeer::DataStatus</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NetworkPeer::DataStatus : __int32</span>
<span class="line">{</span>
<span class="line">  HasData = 0x0,</span>
<span class="line">  NoData = 0x1,</span>
<span class="line">  BrokenData = 0x2,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="networkpeer-networkload" tabindex="-1"><a class="header-anchor" href="#networkpeer-networkload"><span><code>NetworkPeer::NetworkLoad</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NetworkPeer::NetworkLoad : __int32</span>
<span class="line">{</span>
<span class="line">  Unrestricted = 0x0,</span>
<span class="line">  Low = 0x1,</span>
<span class="line">  Medium = 0x2,</span>
<span class="line">  High = 0x3,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="networksuspendresumelistener-state" tabindex="-1"><a class="header-anchor" href="#networksuspendresumelistener-state"><span><code>NetworkSuspendResumeListener::State</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NetworkSuspendResumeListener::State : __int32</span>
<span class="line">{</span>
<span class="line">  Resumed = 0x0,</span>
<span class="line">  Suspended = 0x1,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="netherworldtype" tabindex="-1"><a class="header-anchor" href="#netherworldtype"><span><code>NetherWorldType</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef ui::FontSize NetherWorldType;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="networkfilter" tabindex="-1"><a class="header-anchor" href="#networkfilter"><span><code>NetworkFilter</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NetworkFilter : __int32</span>
<span class="line">{</span>
<span class="line">  OnlyOnWifi = 0x0,</span>
<span class="line">  WifiOrMobileData = 0x1,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="navbuttonlinksto" tabindex="-1"><a class="header-anchor" href="#navbuttonlinksto"><span><code>NavButtonLinksTo</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NavButtonLinksTo : __int32</span>
<span class="line">{</span>
<span class="line">  NOT_SPECIFIED = 0x0,</span>
<span class="line">  DURABLE = 0x1,</span>
<span class="line">  QUERY_MANIFEST = 0x2,</span>
<span class="line">  SEARCH = 0x3,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="networkhandler-networkstatisticsconfig" tabindex="-1"><a class="header-anchor" href="#networkhandler-networkstatisticsconfig"><span><code>NetworkHandler::NetworkStatisticsConfig</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef Rotation NetworkHandler::NetworkStatisticsConfig;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="networkworldtype" tabindex="-1"><a class="header-anchor" href="#networkworldtype"><span><code>NetworkWorldType</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef Rotation NetworkWorldType;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="networkhandler-connection-type" tabindex="-1"><a class="header-anchor" href="#networkhandler-connection-type"><span><code>NetworkHandler::Connection::Type</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef RealmsEnvironment NetworkHandler::Connection::Type;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nodeid" tabindex="-1"><a class="header-anchor" href="#nodeid"><span><code>NodeId</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef Rotation NodeId;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npcactiontype" tabindex="-1"><a class="header-anchor" href="#npcactiontype"><span><code>NpcActionType</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NpcActionType : __int8</span>
<span class="line">{</span>
<span class="line">  UrlAction = 0x0,</span>
<span class="line">  CommandAction = 0x1,</span>
<span class="line">  InvalidAction = 0x2,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npcactionmode" tabindex="-1"><a class="header-anchor" href="#npcactionmode"><span><code>NpcActionMode</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NpcActionMode : __int8</span>
<span class="line">{</span>
<span class="line">  Button = 0x0,</span>
<span class="line">  OnClose = 0x1,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npcinteractscreencontroller-npctextedit" tabindex="-1"><a class="header-anchor" href="#npcinteractscreencontroller-npctextedit"><span><code>NpcInteractScreenController::NpcTextEdit</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NpcInteractScreenController::NpcTextEdit : __int32</span>
<span class="line">{</span>
<span class="line">  Name = 0x0,</span>
<span class="line">  InteractText = 0x1,</span>
<span class="line">  ActionButtonName = 0x2,</span>
<span class="line">  ActionText = 0x3,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npcinteractscreencontroller-section" tabindex="-1"><a class="header-anchor" href="#npcinteractscreencontroller-section"><span><code>NpcInteractScreenController::Section</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NpcInteractScreenController::Section : __int8</span>
<span class="line">{</span>
<span class="line">  Basic = 0x0,</span>
<span class="line">  Advanced = 0x1,</span>
<span class="line">  MaximizedActionEdit = 0x2,</span>
<span class="line">  Student = 0x3,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npcrequestpacket-requesttype" tabindex="-1"><a class="header-anchor" href="#npcrequestpacket-requesttype"><span><code>NpcRequestPacket::RequestType</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NpcRequestPacket::RequestType : __int8</span>
<span class="line">{</span>
<span class="line">  SetActions = 0x0,</span>
<span class="line">  ExecuteAction = 0x1,</span>
<span class="line">  ExecuteClosingCommands = 0x2,</span>
<span class="line">  SetName = 0x3,</span>
<span class="line">  SetSkin = 0x4,</span>
<span class="line">  SetInteractText = 0x5,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nl-prefix-origin" tabindex="-1"><a class="header-anchor" href="#nl-prefix-origin"><span><code>NL_PREFIX_ORIGIN</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NL_PREFIX_ORIGIN : __int32</span>
<span class="line">{</span>
<span class="line">  IpPrefixOriginOther = 0x0,</span>
<span class="line">  IpPrefixOriginManual = 0x1,</span>
<span class="line">  IpPrefixOriginWellKnown = 0x2,</span>
<span class="line">  IpPrefixOriginDhcp = 0x3,</span>
<span class="line">  IpPrefixOriginRouterAdvertisement = 0x4,</span>
<span class="line">  IpPrefixOriginUnchanged = 0x10,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nl-suffix-origin" tabindex="-1"><a class="header-anchor" href="#nl-suffix-origin"><span><code>NL_SUFFIX_ORIGIN</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NL_SUFFIX_ORIGIN : __int32</span>
<span class="line">{</span>
<span class="line">  NlsoOther = 0x0,</span>
<span class="line">  NlsoManual = 0x1,</span>
<span class="line">  NlsoWellKnown = 0x2,</span>
<span class="line">  NlsoDhcp = 0x3,</span>
<span class="line">  NlsoLinkLayerAddress = 0x4,</span>
<span class="line">  NlsoRandom = 0x5,</span>
<span class="line">  IpSuffixOriginOther = 0x0,</span>
<span class="line">  IpSuffixOriginManual = 0x1,</span>
<span class="line">  IpSuffixOriginWellKnown = 0x2,</span>
<span class="line">  IpSuffixOriginDhcp = 0x3,</span>
<span class="line">  IpSuffixOriginLinkLayerAddress = 0x4,</span>
<span class="line">  IpSuffixOriginRandom = 0x5,</span>
<span class="line">  IpSuffixOriginUnchanged = 0x10,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nl-dad-state" tabindex="-1"><a class="header-anchor" href="#nl-dad-state"><span><code>NL_DAD_STATE</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NL_DAD_STATE : __int32</span>
<span class="line">{</span>
<span class="line">  NldsInvalid = 0x0,</span>
<span class="line">  NldsTentative = 0x1,</span>
<span class="line">  NldsDuplicate = 0x2,</span>
<span class="line">  NldsDeprecated = 0x3,</span>
<span class="line">  NldsPreferred = 0x4,</span>
<span class="line">  IpDadStateInvalid = 0x0,</span>
<span class="line">  IpDadStateTentative = 0x1,</span>
<span class="line">  IpDadStateDuplicate = 0x2,</span>
<span class="line">  IpDadStateDeprecated = 0x3,</span>
<span class="line">  IpDadStatePreferred = 0x4,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="negotiationidentifiers" tabindex="-1"><a class="header-anchor" href="#negotiationidentifiers"><span><code>NegotiationIdentifiers</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NegotiationIdentifiers : __int32</span>
<span class="line">{</span>
<span class="line">  ID_NONCE_REQUEST = 0x0,</span>
<span class="line">  ID_NONCE_REPLY = 0x1,</span>
<span class="line">  ID_HASHED_NONCE_AND_PASSWORD = 0x2,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="naivety" tabindex="-1"><a class="header-anchor" href="#naivety"><span><code>naivety</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum naivety : __int32</span>
<span class="line">{</span>
<span class="line">  OFFSET_ERROR = 0x0,</span>
<span class="line">  OFFSET_UNKNOWN = 0x1,</span>
<span class="line">  OFFSET_NAIVE = 0x2,</span>
<span class="line">  OFFSET_AWARE = 0x3,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nl-address-type" tabindex="-1"><a class="header-anchor" href="#nl-address-type"><span><code>NL_ADDRESS_TYPE</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NL_ADDRESS_TYPE : __int32</span>
<span class="line">{</span>
<span class="line">  NlatUnspecified = 0x0,</span>
<span class="line">  NlatUnicast = 0x1,</span>
<span class="line">  NlatAnycast = 0x2,</span>
<span class="line">  NlatMulticast = 0x3,</span>
<span class="line">  NlatBroadcast = 0x4,</span>
<span class="line">  NlatInvalid = 0x5,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nvsdk-ngx-result" tabindex="-1"><a class="header-anchor" href="#nvsdk-ngx-result"><span><code>NVSDK_NGX_Result</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NVSDK_NGX_Result : __int32</span>
<span class="line">{</span>
<span class="line">  NVSDK_NGX_Result_Success = 0x1,</span>
<span class="line">  NVSDK_NGX_Result_Fail = 0xBAD00000,</span>
<span class="line">  NVSDK_NGX_Result_FAIL_FeatureNotSupported = 0xBAD00001,</span>
<span class="line">  NVSDK_NGX_Result_FAIL_PlatformError = 0xBAD00002,</span>
<span class="line">  NVSDK_NGX_Result_FAIL_FeatureAlreadyExists = 0xBAD00003,</span>
<span class="line">  NVSDK_NGX_Result_FAIL_FeatureNotFound = 0xBAD00004,</span>
<span class="line">  NVSDK_NGX_Result_FAIL_InvalidParameter = 0xBAD00005,</span>
<span class="line">  NVSDK_NGX_Result_FAIL_ScratchBufferTooSmall = 0xBAD00006,</span>
<span class="line">  NVSDK_NGX_Result_FAIL_NotInitialized = 0xBAD00007,</span>
<span class="line">  NVSDK_NGX_Result_FAIL_UnsupportedInputFormat = 0xBAD00008,</span>
<span class="line">  NVSDK_NGX_Result_FAIL_RWFlagMissing = 0xBAD00009,</span>
<span class="line">  NVSDK_NGX_Result_FAIL_MissingInput = 0xBAD0000A,</span>
<span class="line">  NVSDK_NGX_Result_FAIL_UnableToInitializeFeature = 0xBAD0000B,</span>
<span class="line">  NVSDK_NGX_Result_FAIL_OutOfDate = 0xBAD0000C,</span>
<span class="line">  NVSDK_NGX_Result_FAIL_OutOfGPUMemory = 0xBAD0000D,</span>
<span class="line">  NVSDK_NGX_Result_FAIL_UnsupportedFormat = 0xBAD0000E,</span>
<span class="line">  NVSDK_NGX_Result_FAIL_UnableToWriteToAppDataPath = 0xBAD0000F,</span>
<span class="line">  NVSDK_NGX_Result_FAIL_UnsupportedParameter = 0xBAD00010,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nvsdk-ngx-version" tabindex="-1"><a class="header-anchor" href="#nvsdk-ngx-version"><span><code>NVSDK_NGX_Version</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NVSDK_NGX_Version : __int32</span>
<span class="line">{</span>
<span class="line">  NVSDK_NGX_Version_API = 0x13,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nvsdk-ngx-feature" tabindex="-1"><a class="header-anchor" href="#nvsdk-ngx-feature"><span><code>NVSDK_NGX_Feature</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NVSDK_NGX_Feature : __int32</span>
<span class="line">{</span>
<span class="line">  NVSDK_NGX_Feature_Reserved0 = 0x0,</span>
<span class="line">  NVSDK_NGX_Feature_SuperSampling = 0x1,</span>
<span class="line">  NVSDK_NGX_Feature_InPainting = 0x2,</span>
<span class="line">  NVSDK_NGX_Feature_ImageSuperResolution = 0x3,</span>
<span class="line">  NVSDK_NGX_Feature_SlowMotion = 0x4,</span>
<span class="line">  NVSDK_NGX_Feature_VideoSuperResolution = 0x5,</span>
<span class="line">  NVSDK_NGX_Feature_Reserved1 = 0x6,</span>
<span class="line">  NVSDK_NGX_Feature_Reserved2 = 0x7,</span>
<span class="line">  NVSDK_NGX_Feature_Reserved3 = 0x8,</span>
<span class="line">  NVSDK_NGX_Feature_ImageSignalProcessing = 0x9,</span>
<span class="line">  NVSDK_NGX_Feature_DeepResolve = 0xA,</span>
<span class="line">  NVSDK_NGX_Feature_Reserved4 = 0xB,</span>
<span class="line">  NVSDK_NGX_Feature_Count = 0xC,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nvsdk-ngx-gbuffertype" tabindex="-1"><a class="header-anchor" href="#nvsdk-ngx-gbuffertype"><span><code>NVSDK_NGX_GBufferType</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NVSDK_NGX_GBufferType : __int32</span>
<span class="line">{</span>
<span class="line">  NVSDK_NGX_GBUFFER_ALBEDO = 0x0,</span>
<span class="line">  NVSDK_NGX_GBUFFER_ROUGHNESS = 0x1,</span>
<span class="line">  NVSDK_NGX_GBUFFER_METALLIC = 0x2,</span>
<span class="line">  NVSDK_NGX_GBUFFER_SPECULAR = 0x3,</span>
<span class="line">  NVSDK_NGX_GBUFFER_SUBSURFACE = 0x4,</span>
<span class="line">  NVSDK_NGX_GBUFFER_NORMALS = 0x5,</span>
<span class="line">  NVSDK_NGX_GBUFFER_SHADINGMODELID = 0x6,</span>
<span class="line">  NVSDK_NGX_GBUFFER_MATERIALID = 0x7,</span>
<span class="line">  NVSDK_NGX_GBUFFERTYPE_NUM = 0x10,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nvsdk-ngx-dlss-feature-flags" tabindex="-1"><a class="header-anchor" href="#nvsdk-ngx-dlss-feature-flags"><span><code>NVSDK_NGX_DLSS_Feature_Flags</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum NVSDK_NGX_DLSS_Feature_Flags : __int32</span>
<span class="line">{</span>
<span class="line">  NVSDK_NGX_DLSS_Feature_Flags_IsInvalid = 0x80000000,</span>
<span class="line">  NVSDK_NGX_DLSS_Feature_Flags_None = 0x0,</span>
<span class="line">  NVSDK_NGX_DLSS_Feature_Flags_IsHDR = 0x1,</span>
<span class="line">  NVSDK_NGX_DLSS_Feature_Flags_MVLowRes = 0x2,</span>
<span class="line">  NVSDK_NGX_DLSS_Feature_Flags_MVJittered = 0x4,</span>
<span class="line">  NVSDK_NGX_DLSS_Feature_Flags_DepthInverted = 0x8,</span>
<span class="line">  NVSDK_NGX_DLSS_Feature_Flags_Reserved_0 = 0x10,</span>
<span class="line">  NVSDK_NGX_DLSS_Feature_Flags_DoSharpening = 0x20,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,67),t=[l];function d(r,c){return s(),n("div",null,t)}const v=e(i,[["render",d],["__file","N.html.vue"]]),u=JSON.parse('{"path":"/1.16.201/enums/N.html","title":"N","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"NetworkPeer::Reliability","slug":"networkpeer-reliability","link":"#networkpeer-reliability","children":[]},{"level":3,"title":"NetworkIdentifier::Type","slug":"networkidentifier-type","link":"#networkidentifier-type","children":[]},{"level":3,"title":"NewLogType","slug":"newlogtype","link":"#newlogtype","children":[]},{"level":3,"title":"NewLeafType","slug":"newleaftype","link":"#newleaftype","children":[]},{"level":3,"title":"NodeType","slug":"nodetype","link":"#nodetype","children":[]},{"level":3,"title":"NVSDK_NGX_ToneMapperType","slug":"nvsdk-ngx-tonemappertype","link":"#nvsdk-ngx-tonemappertype","children":[]},{"level":3,"title":"NVSDK_NGX_PerfQuality_Value","slug":"nvsdk-ngx-perfquality-value","link":"#nvsdk-ngx-perfquality-value","children":[]},{"level":3,"title":"NetworkPeer::DataStatus","slug":"networkpeer-datastatus","link":"#networkpeer-datastatus","children":[]},{"level":3,"title":"NetworkPeer::NetworkLoad","slug":"networkpeer-networkload","link":"#networkpeer-networkload","children":[]},{"level":3,"title":"NetworkSuspendResumeListener::State","slug":"networksuspendresumelistener-state","link":"#networksuspendresumelistener-state","children":[]},{"level":3,"title":"NetherWorldType","slug":"netherworldtype","link":"#netherworldtype","children":[]},{"level":3,"title":"NetworkFilter","slug":"networkfilter","link":"#networkfilter","children":[]},{"level":3,"title":"NavButtonLinksTo","slug":"navbuttonlinksto","link":"#navbuttonlinksto","children":[]},{"level":3,"title":"NetworkHandler::NetworkStatisticsConfig","slug":"networkhandler-networkstatisticsconfig","link":"#networkhandler-networkstatisticsconfig","children":[]},{"level":3,"title":"NetworkWorldType","slug":"networkworldtype","link":"#networkworldtype","children":[]},{"level":3,"title":"NetworkHandler::Connection::Type","slug":"networkhandler-connection-type","link":"#networkhandler-connection-type","children":[]},{"level":3,"title":"NodeId","slug":"nodeid","link":"#nodeid","children":[]},{"level":3,"title":"NpcActionType","slug":"npcactiontype","link":"#npcactiontype","children":[]},{"level":3,"title":"NpcActionMode","slug":"npcactionmode","link":"#npcactionmode","children":[]},{"level":3,"title":"NpcInteractScreenController::NpcTextEdit","slug":"npcinteractscreencontroller-npctextedit","link":"#npcinteractscreencontroller-npctextedit","children":[]},{"level":3,"title":"NpcInteractScreenController::Section","slug":"npcinteractscreencontroller-section","link":"#npcinteractscreencontroller-section","children":[]},{"level":3,"title":"NpcRequestPacket::RequestType","slug":"npcrequestpacket-requesttype","link":"#npcrequestpacket-requesttype","children":[]},{"level":3,"title":"NL_PREFIX_ORIGIN","slug":"nl-prefix-origin","link":"#nl-prefix-origin","children":[]},{"level":3,"title":"NL_SUFFIX_ORIGIN","slug":"nl-suffix-origin","link":"#nl-suffix-origin","children":[]},{"level":3,"title":"NL_DAD_STATE","slug":"nl-dad-state","link":"#nl-dad-state","children":[]},{"level":3,"title":"NegotiationIdentifiers","slug":"negotiationidentifiers","link":"#negotiationidentifiers","children":[]},{"level":3,"title":"naivety","slug":"naivety","link":"#naivety","children":[]},{"level":3,"title":"NL_ADDRESS_TYPE","slug":"nl-address-type","link":"#nl-address-type","children":[]},{"level":3,"title":"NVSDK_NGX_Result","slug":"nvsdk-ngx-result","link":"#nvsdk-ngx-result","children":[]},{"level":3,"title":"NVSDK_NGX_Version","slug":"nvsdk-ngx-version","link":"#nvsdk-ngx-version","children":[]},{"level":3,"title":"NVSDK_NGX_Feature","slug":"nvsdk-ngx-feature","link":"#nvsdk-ngx-feature","children":[]},{"level":3,"title":"NVSDK_NGX_GBufferType","slug":"nvsdk-ngx-gbuffertype","link":"#nvsdk-ngx-gbuffertype","children":[]},{"level":3,"title":"NVSDK_NGX_DLSS_Feature_Flags","slug":"nvsdk-ngx-dlss-feature-flags","link":"#nvsdk-ngx-dlss-feature-flags","children":[]}],"git":{"updatedTime":1659743947000,"contributors":[{"name":"RedbeanW","email":"redbeana44945@gmail.com","commits":1}]},"filePathRelative":"1.16.201/enums/N.md"}');export{v as comp,u as data};
