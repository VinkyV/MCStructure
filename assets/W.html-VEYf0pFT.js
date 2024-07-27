import{_ as e,c as n,o as i,d as s}from"./app-stvwdKan.js";const a={},l=s(`<h1 id="w" tabindex="-1"><a class="header-anchor" href="#w"><span>W</span></a></h1><h3 id="worldinfo-status" tabindex="-1"><a class="header-anchor" href="#worldinfo-status"><span><code>WorldInfo::Status</code></span></a></h3><table><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>Online</td><td><code>0</code></td></tr><tr><td>Offline</td><td><code>1</code></td></tr><tr><td>Unavailable</td><td><code>2</code></td></tr></tbody></table><h3 id="weatherrenderobject-precipitationtype" tabindex="-1"><a class="header-anchor" href="#weatherrenderobject-precipitationtype"><span><code>WeatherRenderObject::PrecipitationType</code></span></a></h3><table><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>PRECIPITATION_RAIN</td><td><code>0</code></td></tr><tr><td>PRECIPITATION_SNOW</td><td><code>1</code></td></tr><tr><td>PRECIPITATION_PLANKTON</td><td><code>2</code></td></tr><tr><td>PRECIPITATION_RED_SPORES</td><td><code>3</code></td></tr><tr><td>PRECIPITATION_BLUE_SPORES</td><td><code>4</code></td></tr><tr><td>PRECIPITATION_ASH</td><td><code>5</code></td></tr><tr><td>PRECIPITATION_WHITE_ASH</td><td><code>6</code></td></tr><tr><td>PRECIPITATION_COUNT</td><td><code>7</code></td></tr></tbody></table><h3 id="weathercommand-weathertype" tabindex="-1"><a class="header-anchor" href="#weathercommand-weathertype"><span><code>WeatherCommand::WeatherType</code></span></a></h3><table><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>Clear</td><td><code>0</code></td></tr><tr><td>Rain</td><td><code>1</code></td></tr><tr><td>Thunder</td><td><code>2</code></td></tr></tbody></table><h3 id="wallconnectiontype" tabindex="-1"><a class="header-anchor" href="#wallconnectiontype"><span><code>WallConnectionType</code></span></a></h3><table><thead><tr><th>Name</th><th>Value</th></tr></thead></table><h3 id="woodtype" tabindex="-1"><a class="header-anchor" href="#woodtype"><span><code>WoodType</code></span></a></h3><table><thead><tr><th>Name</th><th>Value</th></tr></thead></table><h3 id="wallblocktype" tabindex="-1"><a class="header-anchor" href="#wallblocktype"><span><code>WallBlockType</code></span></a></h3><table><thead><tr><th>Name</th><th>Value</th></tr></thead></table><h3 id="wrapencodedkernel32functions" tabindex="-1"><a class="header-anchor" href="#wrapencodedkernel32functions"><span><code>wrapEncodedKERNEL32Functions</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum wrapEncodedKERNEL32Functions : __int32</span>
<span class="line">{</span>
<span class="line">  eFlsAlloc = 0x0,</span>
<span class="line">  eFlsFree = 0x1,</span>
<span class="line">  eFlsGetValue = 0x2,</span>
<span class="line">  eFlsSetValue = 0x3,</span>
<span class="line">  eInitializeCriticalSectionEx = 0x4,</span>
<span class="line">  eInitOnceExecuteOnce = 0x5,</span>
<span class="line">  eCreateEventExW = 0x6,</span>
<span class="line">  eCreateSemaphoreW = 0x7,</span>
<span class="line">  eCreateSemaphoreExW = 0x8,</span>
<span class="line">  eCreateThreadpoolTimer = 0x9,</span>
<span class="line">  eSetThreadpoolTimer = 0xA,</span>
<span class="line">  eWaitForThreadpoolTimerCallbacks = 0xB,</span>
<span class="line">  eCloseThreadpoolTimer = 0xC,</span>
<span class="line">  eCreateThreadpoolWait = 0xD,</span>
<span class="line">  eSetThreadpoolWait = 0xE,</span>
<span class="line">  eCloseThreadpoolWait = 0xF,</span>
<span class="line">  eFlushProcessWriteBuffers = 0x10,</span>
<span class="line">  eFreeLibraryWhenCallbackReturns = 0x11,</span>
<span class="line">  eGetCurrentProcessorNumber = 0x12,</span>
<span class="line">  eCreateSymbolicLinkW = 0x13,</span>
<span class="line">  eGetCurrentPackageId = 0x14,</span>
<span class="line">  eGetTickCount64 = 0x15,</span>
<span class="line">  eGetFileInformationByHandleEx = 0x16,</span>
<span class="line">  eSetFileInformationByHandle = 0x17,</span>
<span class="line">  eGetSystemTimePreciseAsFileTime = 0x18,</span>
<span class="line">  eInitializeConditionVariable = 0x19,</span>
<span class="line">  eWakeConditionVariable = 0x1A,</span>
<span class="line">  eWakeAllConditionVariable = 0x1B,</span>
<span class="line">  eSleepConditionVariableCS = 0x1C,</span>
<span class="line">  eInitializeSRWLock = 0x1D,</span>
<span class="line">  eAcquireSRWLockExclusive = 0x1E,</span>
<span class="line">  eTryAcquireSRWLockExclusive = 0x1F,</span>
<span class="line">  eReleaseSRWLockExclusive = 0x20,</span>
<span class="line">  eSleepConditionVariableSRW = 0x21,</span>
<span class="line">  eCreateThreadpoolWork = 0x22,</span>
<span class="line">  eSubmitThreadpoolWork = 0x23,</span>
<span class="line">  eCloseThreadpoolWork = 0x24,</span>
<span class="line">  eCompareStringEx = 0x25,</span>
<span class="line">  eGetLocaleInfoEx = 0x26,</span>
<span class="line">  eLCMapStringEx = 0x27,</span>
<span class="line">  eMaxKernel32Function = 0x28,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weakstorageentity-emptyinit" tabindex="-1"><a class="header-anchor" href="#weakstorageentity-emptyinit"><span><code>WeakStorageEntity::EmptyInit</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum WeakStorageEntity::EmptyInit : __int32</span>
<span class="line">{</span>
<span class="line">  NoValue = 0x0,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weakstorageentity-variadicinit" tabindex="-1"><a class="header-anchor" href="#weakstorageentity-variadicinit"><span><code>WeakStorageEntity::VariadicInit</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum WeakStorageEntity::VariadicInit : __int32</span>
<span class="line">{</span>
<span class="line">  NonAmbiguous = 0x0,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weakstorageshareptr-entityregistry-emptyinit" tabindex="-1"><a class="header-anchor" href="#weakstorageshareptr-entityregistry-emptyinit"><span><code>WeakStorageSharePtr&lt;EntityRegistry&gt;::EmptyInit</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef WeakStorageEntity::EmptyInit WeakStorageSharePtr&lt;EntityRegistry&gt;::EmptyInit;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weakstorageshareptr-entityregistry-variadicinit" tabindex="-1"><a class="header-anchor" href="#weakstorageshareptr-entityregistry-variadicinit"><span><code>WeakStorageSharePtr&lt;EntityRegistry&gt;::VariadicInit</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef WeakStorageEntity::VariadicInit WeakStorageSharePtr&lt;EntityRegistry&gt;::VariadicInit;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="worldconversionerror" tabindex="-1"><a class="header-anchor" href="#worldconversionerror"><span><code>WorldConversionError</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef Rotation WorldConversionError;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weakstorageshareptr-fogdefinition-const-emptyinit" tabindex="-1"><a class="header-anchor" href="#weakstorageshareptr-fogdefinition-const-emptyinit"><span><code>WeakStorageSharePtr&lt;FogDefinition const &gt;::EmptyInit</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef WeakStorageEntity::EmptyInit WeakStorageSharePtr&lt;FogDefinition const &gt;::EmptyInit;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weakstorageshareptr-fogdefinition-const-variadicinit" tabindex="-1"><a class="header-anchor" href="#weakstorageshareptr-fogdefinition-const-variadicinit"><span><code>WeakStorageSharePtr&lt;FogDefinition const &gt;::VariadicInit</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef WeakStorageEntity::VariadicInit WeakStorageSharePtr&lt;FogDefinition const &gt;::VariadicInit;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weirdodirection" tabindex="-1"><a class="header-anchor" href="#weirdodirection"><span><code>WeirdoDirection</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef DimensionId WeirdoDirection;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="worldpackshistoryfile-parseresult" tabindex="-1"><a class="header-anchor" href="#worldpackshistoryfile-parseresult"><span><code>WorldPacksHistoryFile::ParseResult</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef IMinecraftEventing::AuthenticationOutcome WorldPacksHistoryFile::ParseResult;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weatherrenderobject-unnamed-enum-pass-count" tabindex="-1"><a class="header-anchor" href="#weatherrenderobject-unnamed-enum-pass-count"><span><code>WeatherRenderObject::&lt;unnamed_enum_PASS_COUNT&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum WeatherRenderObject::&lt;unnamed_enum_PASS_COUNT&gt; : __int32</span>
<span class="line">{</span>
<span class="line">  PASS_COUNT = 0xA,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="well-known-sid-type" tabindex="-1"><a class="header-anchor" href="#well-known-sid-type"><span><code>WELL_KNOWN_SID_TYPE</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum WELL_KNOWN_SID_TYPE : __int32</span>
<span class="line">{</span>
<span class="line">  WinNullSid = 0x0,</span>
<span class="line">  WinWorldSid = 0x1,</span>
<span class="line">  WinLocalSid = 0x2,</span>
<span class="line">  WinCreatorOwnerSid = 0x3,</span>
<span class="line">  WinCreatorGroupSid = 0x4,</span>
<span class="line">  WinCreatorOwnerServerSid = 0x5,</span>
<span class="line">  WinCreatorGroupServerSid = 0x6,</span>
<span class="line">  WinNtAuthoritySid = 0x7,</span>
<span class="line">  WinDialupSid = 0x8,</span>
<span class="line">  WinNetworkSid = 0x9,</span>
<span class="line">  WinBatchSid = 0xA,</span>
<span class="line">  WinInteractiveSid = 0xB,</span>
<span class="line">  WinServiceSid = 0xC,</span>
<span class="line">  WinAnonymousSid = 0xD,</span>
<span class="line">  WinProxySid = 0xE,</span>
<span class="line">  WinEnterpriseControllersSid = 0xF,</span>
<span class="line">  WinSelfSid = 0x10,</span>
<span class="line">  WinAuthenticatedUserSid = 0x11,</span>
<span class="line">  WinRestrictedCodeSid = 0x12,</span>
<span class="line">  WinTerminalServerSid = 0x13,</span>
<span class="line">  WinRemoteLogonIdSid = 0x14,</span>
<span class="line">  WinLogonIdsSid = 0x15,</span>
<span class="line">  WinLocalSystemSid = 0x16,</span>
<span class="line">  WinLocalServiceSid = 0x17,</span>
<span class="line">  WinNetworkServiceSid = 0x18,</span>
<span class="line">  WinBuiltinDomainSid = 0x19,</span>
<span class="line">  WinBuiltinAdministratorsSid = 0x1A,</span>
<span class="line">  WinBuiltinUsersSid = 0x1B,</span>
<span class="line">  WinBuiltinGuestsSid = 0x1C,</span>
<span class="line">  WinBuiltinPowerUsersSid = 0x1D,</span>
<span class="line">  WinBuiltinAccountOperatorsSid = 0x1E,</span>
<span class="line">  WinBuiltinSystemOperatorsSid = 0x1F,</span>
<span class="line">  WinBuiltinPrintOperatorsSid = 0x20,</span>
<span class="line">  WinBuiltinBackupOperatorsSid = 0x21,</span>
<span class="line">  WinBuiltinReplicatorSid = 0x22,</span>
<span class="line">  WinBuiltinPreWindows2000CompatibleAccessSid = 0x23,</span>
<span class="line">  WinBuiltinRemoteDesktopUsersSid = 0x24,</span>
<span class="line">  WinBuiltinNetworkConfigurationOperatorsSid = 0x25,</span>
<span class="line">  WinAccountAdministratorSid = 0x26,</span>
<span class="line">  WinAccountGuestSid = 0x27,</span>
<span class="line">  WinAccountKrbtgtSid = 0x28,</span>
<span class="line">  WinAccountDomainAdminsSid = 0x29,</span>
<span class="line">  WinAccountDomainUsersSid = 0x2A,</span>
<span class="line">  WinAccountDomainGuestsSid = 0x2B,</span>
<span class="line">  WinAccountComputersSid = 0x2C,</span>
<span class="line">  WinAccountControllersSid = 0x2D,</span>
<span class="line">  WinAccountCertAdminsSid = 0x2E,</span>
<span class="line">  WinAccountSchemaAdminsSid = 0x2F,</span>
<span class="line">  WinAccountEnterpriseAdminsSid = 0x30,</span>
<span class="line">  WinAccountPolicyAdminsSid = 0x31,</span>
<span class="line">  WinAccountRasAndIasServersSid = 0x32,</span>
<span class="line">  WinNTLMAuthenticationSid = 0x33,</span>
<span class="line">  WinDigestAuthenticationSid = 0x34,</span>
<span class="line">  WinSChannelAuthenticationSid = 0x35,</span>
<span class="line">  WinThisOrganizationSid = 0x36,</span>
<span class="line">  WinOtherOrganizationSid = 0x37,</span>
<span class="line">  WinBuiltinIncomingForestTrustBuildersSid = 0x38,</span>
<span class="line">  WinBuiltinPerfMonitoringUsersSid = 0x39,</span>
<span class="line">  WinBuiltinPerfLoggingUsersSid = 0x3A,</span>
<span class="line">  WinBuiltinAuthorizationAccessSid = 0x3B,</span>
<span class="line">  WinBuiltinTerminalServerLicenseServersSid = 0x3C,</span>
<span class="line">  WinBuiltinDCOMUsersSid = 0x3D,</span>
<span class="line">  WinBuiltinIUsersSid = 0x3E,</span>
<span class="line">  WinIUserSid = 0x3F,</span>
<span class="line">  WinBuiltinCryptoOperatorsSid = 0x40,</span>
<span class="line">  WinUntrustedLabelSid = 0x41,</span>
<span class="line">  WinLowLabelSid = 0x42,</span>
<span class="line">  WinMediumLabelSid = 0x43,</span>
<span class="line">  WinHighLabelSid = 0x44,</span>
<span class="line">  WinSystemLabelSid = 0x45,</span>
<span class="line">  WinWriteRestrictedCodeSid = 0x46,</span>
<span class="line">  WinCreatorOwnerRightsSid = 0x47,</span>
<span class="line">  WinCacheablePrincipalsGroupSid = 0x48,</span>
<span class="line">  WinNonCacheablePrincipalsGroupSid = 0x49,</span>
<span class="line">  WinEnterpriseReadonlyControllersSid = 0x4A,</span>
<span class="line">  WinAccountReadonlyControllersSid = 0x4B,</span>
<span class="line">  WinBuiltinEventLogReadersGroup = 0x4C,</span>
<span class="line">  WinNewEnterpriseReadonlyControllersSid = 0x4D,</span>
<span class="line">  WinBuiltinCertSvcDComAccessGroup = 0x4E,</span>
<span class="line">  WinMediumPlusLabelSid = 0x4F,</span>
<span class="line">  WinLocalLogonSid = 0x50,</span>
<span class="line">  WinConsoleLogonSid = 0x51,</span>
<span class="line">  WinThisOrganizationCertificateSid = 0x52,</span>
<span class="line">  WinApplicationPackageAuthoritySid = 0x53,</span>
<span class="line">  WinBuiltinAnyPackageSid = 0x54,</span>
<span class="line">  WinCapabilityInternetClientSid = 0x55,</span>
<span class="line">  WinCapabilityInternetClientServerSid = 0x56,</span>
<span class="line">  WinCapabilityPrivateNetworkClientServerSid = 0x57,</span>
<span class="line">  WinCapabilityPicturesLibrarySid = 0x58,</span>
<span class="line">  WinCapabilityVideosLibrarySid = 0x59,</span>
<span class="line">  WinCapabilityMusicLibrarySid = 0x5A,</span>
<span class="line">  WinCapabilityDocumentsLibrarySid = 0x5B,</span>
<span class="line">  WinCapabilitySharedUserCertificatesSid = 0x5C,</span>
<span class="line">  WinCapabilityEnterpriseAuthenticationSid = 0x5D,</span>
<span class="line">  WinCapabilityRemovableStorageSid = 0x5E,</span>
<span class="line">  WinBuiltinRDSRemoteAccessServersSid = 0x5F,</span>
<span class="line">  WinBuiltinRDSEndpointServersSid = 0x60,</span>
<span class="line">  WinBuiltinRDSManagementServersSid = 0x61,</span>
<span class="line">  WinUserModeDriversSid = 0x62,</span>
<span class="line">  WinBuiltinHyperVAdminsSid = 0x63,</span>
<span class="line">  WinAccountCloneableControllersSid = 0x64,</span>
<span class="line">  WinBuiltinAccessControlAssistanceOperatorsSid = 0x65,</span>
<span class="line">  WinBuiltinRemoteManagementUsersSid = 0x66,</span>
<span class="line">  WinAuthenticationAuthorityAssertedSid = 0x67,</span>
<span class="line">  WinAuthenticationServiceAssertedSid = 0x68,</span>
<span class="line">  WinLocalAccountSid = 0x69,</span>
<span class="line">  WinLocalAccountAndAdministratorSid = 0x6A,</span>
<span class="line">  WinAccountProtectedUsersSid = 0x6B,</span>
<span class="line">  WinCapabilityAppointmentsSid = 0x6C,</span>
<span class="line">  WinCapabilityContactsSid = 0x6D,</span>
<span class="line">  WinAccountDefaultSystemManagedSid = 0x6E,</span>
<span class="line">  WinBuiltinDefaultSystemManagedGroupSid = 0x6F,</span>
<span class="line">  WinBuiltinStorageReplicaAdminsSid = 0x70,</span>
<span class="line">  WinAccountKeyAdminsSid = 0x71,</span>
<span class="line">  WinAccountEnterpriseKeyAdminsSid = 0x72,</span>
<span class="line">  WinAuthenticationKeyTrustSid = 0x73,</span>
<span class="line">  WinAuthenticationKeyPropertyMFASid = 0x74,</span>
<span class="line">  WinAuthenticationKeyPropertyAttestationSid = 0x75,</span>
<span class="line">  WinAuthenticationFreshKeyAuthSid = 0x76,</span>
<span class="line">  WinBuiltinDeviceOwnersSid = 0x77,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="worldtype" tabindex="-1"><a class="header-anchor" href="#worldtype"><span><code>WorldType</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef RealmsEnvironment WorldType;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="worldpingstatus" tabindex="-1"><a class="header-anchor" href="#worldpingstatus"><span><code>WorldPingStatus</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef NetworkPeer::NetworkLoad WorldPingStatus;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="worldinfotype" tabindex="-1"><a class="header-anchor" href="#worldinfotype"><span><code>WorldInfoType</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef Rotation WorldInfoType;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wsconnectionresult" tabindex="-1"><a class="header-anchor" href="#wsconnectionresult"><span><code>WSConnectionResult</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef IMinecraftEventing::AuthenticationOutcome WSConnectionResult;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webviewinterfacetype" tabindex="-1"><a class="header-anchor" href="#webviewinterfacetype"><span><code>WebviewInterfaceType</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef NetworkIdentifier::Type WebviewInterfaceType;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="windowsstoremode" tabindex="-1"><a class="header-anchor" href="#windowsstoremode"><span><code>WindowsStoreMode</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef DimensionId WindowsStoreMode;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="websocketcommunicator-sockettype" tabindex="-1"><a class="header-anchor" href="#websocketcommunicator-sockettype"><span><code>WebSocketCommunicator::SocketType</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef ActorEvent WebSocketCommunicator::SocketType;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="worldprocessprogresshandler-type" tabindex="-1"><a class="header-anchor" href="#worldprocessprogresshandler-type"><span><code>WorldProcessProgressHandler::Type</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef IMinecraftEventing::FileTransmissionDirection WorldProcessProgressHandler::Type;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="worldverificationresult" tabindex="-1"><a class="header-anchor" href="#worldverificationresult"><span><code>WorldVerificationResult</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef StreamReadResult WorldVerificationResult;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webviewerror-type" tabindex="-1"><a class="header-anchor" href="#webviewerror-type"><span><code>WebviewError::Type</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef cg::ColorSpace WebviewError::Type;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weakstorageshareptr-fogdefinition-emptyinit" tabindex="-1"><a class="header-anchor" href="#weakstorageshareptr-fogdefinition-emptyinit"><span><code>WeakStorageSharePtr&lt;FogDefinition&gt;::EmptyInit</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef WeakStorageEntity::EmptyInit WeakStorageSharePtr&lt;FogDefinition&gt;::EmptyInit;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weakstorageshareptr-fogdefinition-variadicinit" tabindex="-1"><a class="header-anchor" href="#weakstorageshareptr-fogdefinition-variadicinit"><span><code>WeakStorageSharePtr&lt;FogDefinition&gt;::VariadicInit</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef WeakStorageEntity::VariadicInit WeakStorageSharePtr&lt;FogDefinition&gt;::VariadicInit;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="win32mockstore-internalpurchase-status" tabindex="-1"><a class="header-anchor" href="#win32mockstore-internalpurchase-status"><span><code>Win32MockStore::InternalPurchase::Status</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef Player::DimensionState Win32MockStore::InternalPurchase::Status;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weakstoragefeature-emptyinit" tabindex="-1"><a class="header-anchor" href="#weakstoragefeature-emptyinit"><span><code>WeakStorageFeature::EmptyInit</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef WeakStorageEntity::EmptyInit WeakStorageFeature::EmptyInit;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weakstoragefeature-variadicinit" tabindex="-1"><a class="header-anchor" href="#weakstoragefeature-variadicinit"><span><code>WeakStorageFeature::VariadicInit</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef WeakStorageEntity::VariadicInit WeakStorageFeature::VariadicInit;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weathercommand-weatherrequest" tabindex="-1"><a class="header-anchor" href="#weathercommand-weatherrequest"><span><code>WeatherCommand::WeatherRequest</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef PermissionCommand::Action WeatherCommand::WeatherRequest;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="websocketmessagetype" tabindex="-1"><a class="header-anchor" href="#websocketmessagetype"><span><code>WebSocketMessageType</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef CreditsRenderer::CreditsContent::Type WebSocketMessageType;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weakstorageshareptr-perlinsimplexnoise-emptyinit" tabindex="-1"><a class="header-anchor" href="#weakstorageshareptr-perlinsimplexnoise-emptyinit"><span><code>WeakStorageSharePtr&lt;PerlinSimplexNoise&gt;::EmptyInit</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef WeakStorageEntity::EmptyInit WeakStorageSharePtr&lt;PerlinSimplexNoise&gt;::EmptyInit;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weakstorageshareptr-perlinsimplexnoise-variadicinit" tabindex="-1"><a class="header-anchor" href="#weakstorageshareptr-perlinsimplexnoise-variadicinit"><span><code>WeakStorageSharePtr&lt;PerlinSimplexNoise&gt;::VariadicInit</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef WeakStorageEntity::VariadicInit WeakStorageSharePtr&lt;PerlinSimplexNoise&gt;::VariadicInit;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="windows-foundation-diagnostics-roerrorreportingflags" tabindex="-1"><a class="header-anchor" href="#windows-foundation-diagnostics-roerrorreportingflags"><span><code>Windows::Foundation::Diagnostics::RoErrorReportingFlags</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef Rotation Windows::Foundation::Diagnostics::RoErrorReportingFlags;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wildcardstring-case" tabindex="-1"><a class="header-anchor" href="#wildcardstring-case"><span><code>WildcardString::Case</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum WildcardString::Case : __int32</span>
<span class="line">{</span>
<span class="line">  Sensitive = 0x0,</span>
<span class="line">  Insensitive = 0x1,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="why-code" tabindex="-1"><a class="header-anchor" href="#why-code"><span><code>why_code</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum why_code : __int32</span>
<span class="line">{</span>
<span class="line">  WHY_NOT = 0x1,</span>
<span class="line">  WHY_EXCEPTION = 0x2,</span>
<span class="line">  WHY_RERAISE = 0x4,</span>
<span class="line">  WHY_RETURN = 0x8,</span>
<span class="line">  WHY_BREAK = 0x10,</span>
<span class="line">  WHY_CONTINUE = 0x20,</span>
<span class="line">  WHY_YIELD = 0x40,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="woodlandmansionpieces-woodlandmansionpiece-addchest-l2-sensibledirections" tabindex="-1"><a class="header-anchor" href="#woodlandmansionpieces-woodlandmansionpiece-addchest-l2-sensibledirections"><span><code>WoodlandMansionPieces::WoodlandMansionPiece::_addChest::__l2::SensibleDirections</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef Direction::Type WoodlandMansionPieces::WoodlandMansionPiece::_addChest::__l2::SensibleDirections;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,83),t=[l];function d(r,c){return i(),n("div",null,t)}const p=e(a,[["render",d],["__file","W.html.vue"]]),v=JSON.parse('{"path":"/1.16.201/enums/W.html","title":"W","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"WorldInfo::Status","slug":"worldinfo-status","link":"#worldinfo-status","children":[]},{"level":3,"title":"WeatherRenderObject::PrecipitationType","slug":"weatherrenderobject-precipitationtype","link":"#weatherrenderobject-precipitationtype","children":[]},{"level":3,"title":"WeatherCommand::WeatherType","slug":"weathercommand-weathertype","link":"#weathercommand-weathertype","children":[]},{"level":3,"title":"WallConnectionType","slug":"wallconnectiontype","link":"#wallconnectiontype","children":[]},{"level":3,"title":"WoodType","slug":"woodtype","link":"#woodtype","children":[]},{"level":3,"title":"WallBlockType","slug":"wallblocktype","link":"#wallblocktype","children":[]},{"level":3,"title":"wrapEncodedKERNEL32Functions","slug":"wrapencodedkernel32functions","link":"#wrapencodedkernel32functions","children":[]},{"level":3,"title":"WeakStorageEntity::EmptyInit","slug":"weakstorageentity-emptyinit","link":"#weakstorageentity-emptyinit","children":[]},{"level":3,"title":"WeakStorageEntity::VariadicInit","slug":"weakstorageentity-variadicinit","link":"#weakstorageentity-variadicinit","children":[]},{"level":3,"title":"WeakStorageSharePtr<EntityRegistry>::EmptyInit","slug":"weakstorageshareptr-entityregistry-emptyinit","link":"#weakstorageshareptr-entityregistry-emptyinit","children":[]},{"level":3,"title":"WeakStorageSharePtr<EntityRegistry>::VariadicInit","slug":"weakstorageshareptr-entityregistry-variadicinit","link":"#weakstorageshareptr-entityregistry-variadicinit","children":[]},{"level":3,"title":"WorldConversionError","slug":"worldconversionerror","link":"#worldconversionerror","children":[]},{"level":3,"title":"WeakStorageSharePtr<FogDefinition const >::EmptyInit","slug":"weakstorageshareptr-fogdefinition-const-emptyinit","link":"#weakstorageshareptr-fogdefinition-const-emptyinit","children":[]},{"level":3,"title":"WeakStorageSharePtr<FogDefinition const >::VariadicInit","slug":"weakstorageshareptr-fogdefinition-const-variadicinit","link":"#weakstorageshareptr-fogdefinition-const-variadicinit","children":[]},{"level":3,"title":"WeirdoDirection","slug":"weirdodirection","link":"#weirdodirection","children":[]},{"level":3,"title":"WorldPacksHistoryFile::ParseResult","slug":"worldpackshistoryfile-parseresult","link":"#worldpackshistoryfile-parseresult","children":[]},{"level":3,"title":"WeatherRenderObject::<unnamed_enum_PASS_COUNT>","slug":"weatherrenderobject-unnamed-enum-pass-count","link":"#weatherrenderobject-unnamed-enum-pass-count","children":[]},{"level":3,"title":"WELL_KNOWN_SID_TYPE","slug":"well-known-sid-type","link":"#well-known-sid-type","children":[]},{"level":3,"title":"WorldType","slug":"worldtype","link":"#worldtype","children":[]},{"level":3,"title":"WorldPingStatus","slug":"worldpingstatus","link":"#worldpingstatus","children":[]},{"level":3,"title":"WorldInfoType","slug":"worldinfotype","link":"#worldinfotype","children":[]},{"level":3,"title":"WSConnectionResult","slug":"wsconnectionresult","link":"#wsconnectionresult","children":[]},{"level":3,"title":"WebviewInterfaceType","slug":"webviewinterfacetype","link":"#webviewinterfacetype","children":[]},{"level":3,"title":"WindowsStoreMode","slug":"windowsstoremode","link":"#windowsstoremode","children":[]},{"level":3,"title":"WebSocketCommunicator::SocketType","slug":"websocketcommunicator-sockettype","link":"#websocketcommunicator-sockettype","children":[]},{"level":3,"title":"WorldProcessProgressHandler::Type","slug":"worldprocessprogresshandler-type","link":"#worldprocessprogresshandler-type","children":[]},{"level":3,"title":"WorldVerificationResult","slug":"worldverificationresult","link":"#worldverificationresult","children":[]},{"level":3,"title":"WebviewError::Type","slug":"webviewerror-type","link":"#webviewerror-type","children":[]},{"level":3,"title":"WeakStorageSharePtr<FogDefinition>::EmptyInit","slug":"weakstorageshareptr-fogdefinition-emptyinit","link":"#weakstorageshareptr-fogdefinition-emptyinit","children":[]},{"level":3,"title":"WeakStorageSharePtr<FogDefinition>::VariadicInit","slug":"weakstorageshareptr-fogdefinition-variadicinit","link":"#weakstorageshareptr-fogdefinition-variadicinit","children":[]},{"level":3,"title":"Win32MockStore::InternalPurchase::Status","slug":"win32mockstore-internalpurchase-status","link":"#win32mockstore-internalpurchase-status","children":[]},{"level":3,"title":"WeakStorageFeature::EmptyInit","slug":"weakstoragefeature-emptyinit","link":"#weakstoragefeature-emptyinit","children":[]},{"level":3,"title":"WeakStorageFeature::VariadicInit","slug":"weakstoragefeature-variadicinit","link":"#weakstoragefeature-variadicinit","children":[]},{"level":3,"title":"WeatherCommand::WeatherRequest","slug":"weathercommand-weatherrequest","link":"#weathercommand-weatherrequest","children":[]},{"level":3,"title":"WebSocketMessageType","slug":"websocketmessagetype","link":"#websocketmessagetype","children":[]},{"level":3,"title":"WeakStorageSharePtr<PerlinSimplexNoise>::EmptyInit","slug":"weakstorageshareptr-perlinsimplexnoise-emptyinit","link":"#weakstorageshareptr-perlinsimplexnoise-emptyinit","children":[]},{"level":3,"title":"WeakStorageSharePtr<PerlinSimplexNoise>::VariadicInit","slug":"weakstorageshareptr-perlinsimplexnoise-variadicinit","link":"#weakstorageshareptr-perlinsimplexnoise-variadicinit","children":[]},{"level":3,"title":"Windows::Foundation::Diagnostics::RoErrorReportingFlags","slug":"windows-foundation-diagnostics-roerrorreportingflags","link":"#windows-foundation-diagnostics-roerrorreportingflags","children":[]},{"level":3,"title":"WildcardString::Case","slug":"wildcardstring-case","link":"#wildcardstring-case","children":[]},{"level":3,"title":"why_code","slug":"why-code","link":"#why-code","children":[]},{"level":3,"title":"WoodlandMansionPieces::WoodlandMansionPiece::_addChest::__l2::SensibleDirections","slug":"woodlandmansionpieces-woodlandmansionpiece-addchest-l2-sensibledirections","link":"#woodlandmansionpieces-woodlandmansionpiece-addchest-l2-sensibledirections","children":[]}],"git":{"updatedTime":1659743947000,"contributors":[{"name":"RedbeanW","email":"redbeana44945@gmail.com","commits":1}]},"filePathRelative":"1.16.201/enums/W.md"}');export{p as comp,v as data};
