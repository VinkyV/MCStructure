import{_ as e,c as a,o as n,d as s}from"./app-SaJJkj-5.js";const l={},i=s(`<h1 id="f-1" tabindex="-1"><a class="header-anchor" href="#f-1"><span>F~1</span></a></h1><h3 id="furnacecontainermanagermodel-vtbl" tabindex="-1"><a class="header-anchor" href="#furnacecontainermanagermodel-vtbl"><span><code>FurnaceContainerManagerModel_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FurnaceContainerManagerModel_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~IContainerManager)(IContainerManager *this);</span>
<span class="line">  ContainerID (__fastcall *getContainerId)(IContainerManager *this);</span>
<span class="line">  void (__fastcall *setContainerId)(IContainerManager *this, ContainerID);</span>
<span class="line">  ContainerType (__fastcall *getContainerType)(IContainerManager *this);</span>
<span class="line">  void (__fastcall *setContainerType)(IContainerManager *this, ContainerType);</span>
<span class="line">  void (__fastcall *serverInitItemStackIds)(IContainerManager *this);</span>
<span class="line">  std::vector&lt;ItemStack&gt; *(__fastcall *getItemCopies)(IContainerManager *this, std::vector&lt;ItemStack&gt; *result);</span>
<span class="line">  void (__fastcall *setSlot)(IContainerManager *this, int, const ItemStack *, bool);</span>
<span class="line">  const ItemStack *(__fastcall *getSlot)(IContainerManager *this, int);</span>
<span class="line">  void (__fastcall *setData)(IContainerManager *this, int, int);</span>
<span class="line">  void (__fastcall *broadcastChanges)(IContainerManager *this);</span>
<span class="line">  bool (__fastcall *validateContainer)(IContainerManager *this);</span>
<span class="line">  bool (__fastcall *isValid)(ContainerManagerModel *this, float);</span>
<span class="line">  ContainerScreenContext *(__fastcall *_postInit)(ContainerManagerModel *this, ContainerScreenContext *result);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="furnacecontainermanagercontroller" tabindex="-1"><a class="header-anchor" href="#furnacecontainermanagercontroller"><span><code>FurnaceContainerManagerController</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj __declspec(align(8)) FurnaceContainerManagerController : ContainerManagerController</span>
<span class="line">{</span>
<span class="line">  std::weak_ptr&lt;FurnaceContainerManagerModel&gt; mFurnaceContainerManagerModel;</span>
<span class="line">  const ContainerEnumName mIngredientName;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="furnacecontainermanagercontroller-vtbl" tabindex="-1"><a class="header-anchor" href="#furnacecontainermanagercontroller-vtbl"><span><code>FurnaceContainerManagerController_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FurnaceContainerManagerController_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~ContainerManagerController)(ContainerManagerController *this);</span>
<span class="line">  void (__fastcall *registerContainerCallbacks)(ContainerManagerController *this);</span>
<span class="line">  const ItemStackBase *(__fastcall *getTakeableItemStackBase)(ContainerManagerController *this, const SlotData *);</span>
<span class="line">  void (__fastcall *handleTakeAmount)(ContainerManagerController *this, const SlotData *, int, const SlotData *);</span>
<span class="line">  void (__fastcall *handleTakeAll)(ContainerManagerController *this, const SlotData *, const SlotData *);</span>
<span class="line">  void (__fastcall *handlePlaceAll)(ContainerManagerController *this, const SelectedSlotInfo *, const SlotData *);</span>
<span class="line">  void (__fastcall *handleTakeHalf)(ContainerManagerController *this, const SlotData *, const SlotData *);</span>
<span class="line">  void (__fastcall *handlePlaceOne)(ContainerManagerController *this, const SlotData *, const SlotData *);</span>
<span class="line">  void (__fastcall *handlePlaceAmount)(ContainerManagerController *this, const SlotData *, int, const SlotData *);</span>
<span class="line">  int (__fastcall *handleAutoPlace)(ContainerManagerController *this, const SlotData *, int, const std::vector&lt;AutoPlaceItem&gt; *, std::vector&lt;AutoPlaceResult&gt; *);</span>
<span class="line">  int (__fastcall *handleAutoPlaceStack)(ContainerManagerController *this, const SlotData *, ItemTakeType, const std::vector&lt;AutoPlaceItem&gt; *, std::vector&lt;AutoPlaceResult&gt; *);</span>
<span class="line">  void (__fastcall *handleSplitSingle)(ContainerManagerController *this, const SlotData *, const SlotData *);</span>
<span class="line">  void (__fastcall *handleSplitMultiple)(ContainerManagerController *this, const SelectedSlotInfo *, const ItemInstance *, const SlotData *);</span>
<span class="line">  void (__fastcall *handleCoalesce)(ContainerManagerController *this, const SlotData *, const std::vector&lt;std::string&gt; *);</span>
<span class="line">  bool (__fastcall *handleSwap)(ContainerManagerController *this, const SlotData *, const SlotData *);</span>
<span class="line">  bool (__fastcall *handleDrop)(ContainerManagerController *this, const SlotData *, const ItemTransferAmount);</span>
<span class="line">  bool (__fastcall *handleDestroy)(ContainerManagerController *this, const SlotData *, const ItemTransferAmount);</span>
<span class="line">  bool (__fastcall *handleDestroy)(ContainerManagerController *this, const SelectedSlotInfo *, const ItemTransferAmount);</span>
<span class="line">  bool (__fastcall *handleConsume)(ContainerManagerController *this, const SlotData *, const ItemTransferAmount);</span>
<span class="line">  void (__fastcall *handleAddToStack)(ContainerManagerController *this, const SlotData *, const SlotData *, ItemTakeType);</span>
<span class="line">  void (__fastcall *closeContainers)(ContainerManagerController *this);</span>
<span class="line">  const std::vector&lt;ContainerSplitControl&gt; *(__fastcall *getSplitItems)(ContainerManagerController *this);</span>
<span class="line">  bool (__fastcall *isOutputSlot)(ContainerManagerController *this, const std::string *);</span>
<span class="line">  void (__fastcall *_onItemTransferredFrom)(ContainerManagerController *this, const ItemInstance *, const SlotData *);</span>
<span class="line">  void (__fastcall *_onItemTransferredTo)(ContainerManagerController *this, const ItemInstance *, const SlotData *);</span>
<span class="line">  void (__fastcall *_onItemAcquired)(ContainerManagerController *this, const ItemInstance *, const SlotData *);</span>
<span class="line">  void (__fastcall *_onItemPlaced)(ContainerManagerController *this, const ItemInstance *, const SlotData *);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="furnacescreencontroller" tabindex="-1"><a class="header-anchor" href="#furnacescreencontroller"><span><code>FurnaceScreenController</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj __declspec(align(8)) FurnaceScreenController : ContainerScreenController</span>
<span class="line">{</span>
<span class="line">  std::shared_ptr&lt;FurnaceContainerManagerController&gt; mFurnaceContainerManagerController;</span>
<span class="line">  ContainerEnumName mHoveredContainer;</span>
<span class="line">  const ContainerEnumName mIngredientName;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="furnacescreencontroller-vtbl" tabindex="-1"><a class="header-anchor" href="#furnacescreencontroller-vtbl"><span><code>FurnaceScreenController_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FurnaceScreenController_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~IScreenController)(IScreenController *this);</span>
<span class="line">  ui::DirtyFlag (__fastcall *tick)(IScreenController *this);</span>
<span class="line">  ui::ViewRequest (__fastcall *handleEvent)(IScreenController *this, ScreenEvent *);</span>
<span class="line">  std::optional&lt;std::string &gt; *(__fastcall *getRoute)(IScreenController *this, std::optional&lt;std::string &gt; *result);</span>
<span class="line">  void (__fastcall *setScreenState)(IScreenController *this, const std::vector&lt;std::pair&lt;std::string,std::string &gt;&gt; *);</span>
<span class="line">  void (__fastcall *onOpen)(ScreenController *this);</span>
<span class="line">  void (__fastcall *onTerminate)(ScreenController *this);</span>
<span class="line">  void (__fastcall *onInit)(ScreenController *this);</span>
<span class="line">  void (__fastcall *onDelete)(ScreenController *this);</span>
<span class="line">  bool (__fastcall *canExit)(ScreenController *this);</span>
<span class="line">  ui::ViewRequest (__fastcall *tryExit)(ScreenController *this);</span>
<span class="line">  bool (__fastcall *areControllerTabsEnabled)(ScreenController *this);</span>
<span class="line">  void (__fastcall *onCreation)(ScreenController *this);</span>
<span class="line">  void (__fastcall *logCreationTime)(ScreenController *this, const std::string *, long double, long double, unsigned __int8);</span>
<span class="line">  void (__fastcall *onLeave)(ScreenController *this);</span>
<span class="line">  void (__fastcall *leaveScreen)(ScreenController *this);</span>
<span class="line">  ui::DirtyFlag (__fastcall *handleGameEventNotification)(ScreenController *this, ui::GameEventNotification);</span>
<span class="line">  bool (__fastcall *bind)(ScreenController *this, const std::string *, unsigned int, const std::string *, UIPropertyBag *);</span>
<span class="line">  bool (__fastcall *bind)(ScreenController *this, const std::string *, unsigned int, int, const std::string *, unsigned int, const std::string *, UIPropertyBag *);</span>
<span class="line">  void (__fastcall *handleLicenseChanged)(ScreenController *this);</span>
<span class="line">  void (__fastcall *onDictationEvent)(ScreenController *this, const std::string *);</span>
<span class="line">  void (__fastcall *setAssociatedBlockPos)(ScreenController *this, const BlockPos *);</span>
<span class="line">  void (__fastcall *setAssociatedEntityUniqueID)(ScreenController *this, const ActorUniqueID);</span>
<span class="line">  void (__fastcall *setSuspendInput)(ScreenController *this, bool);</span>
<span class="line">  float (__fastcall *getCallbackInterval)(ScreenController *this);</span>
<span class="line">  void (__fastcall *onRender)(ScreenController *this);</span>
<span class="line">  void (__fastcall *addStaticScreenVars)(ScreenController *this, Json::Value *);</span>
<span class="line">  std::string *(__fastcall *getAdditionalScreenInfo)(ScreenController *this, std::string *result);</span>
<span class="line">  std::string *(__fastcall *getTelemetryOverride)(ScreenController *this, std::string *result);</span>
<span class="line">  void (__fastcall *addEventProperties)(ScreenController *this, std::unordered_map&lt;std::string,std::string&gt; *);</span>
<span class="line">  ui::SceneType (__fastcall *getSceneType)(ScreenController *this);</span>
<span class="line">  int (__fastcall *getScreenVersion)(ScreenController *this);</span>
<span class="line">  bool (__fastcall *screenHandlesGamepadMenuButton)(ScreenController *this);</span>
<span class="line">  ScreenControllerProxy *(__fastcall *getProxy)(ScreenController *this);</span>
<span class="line">  void (__fastcall *onEntered)(ScreenController *this);</span>
<span class="line">  unsigned int (__fastcall *getNameId)(ScreenController *this, const std::string *);</span>
<span class="line">  bool (__fastcall *verifySceneStack)(ScreenController *this, SceneStack *);</span>
<span class="line">  bool (__fastcall *_doesScreenHaveExitBehavior)(ScreenController *this);</span>
<span class="line">  bool (__fastcall *_isStillValid)(MinecraftScreenController *this);</span>
<span class="line">  bool (__fastcall *_getGamepadHelperVisible)(MinecraftScreenController *this);</span>
<span class="line">  bool (__fastcall *_getMixedHelperVisible)(MinecraftScreenController *this);</span>
<span class="line">  bool (__fastcall *_getKeyboardHelperVisible)(MinecraftScreenController *this);</span>
<span class="line">  std::string *(__fastcall *_getButtonADescription)(MinecraftScreenController *this, std::string *result);</span>
<span class="line">  std::string *(__fastcall *_getButtonBDescription)(MinecraftScreenController *this, std::string *result);</span>
<span class="line">  std::string *(__fastcall *_getButtonXDescription)(MinecraftScreenController *this, std::string *result);</span>
<span class="line">  std::string *(__fastcall *_getButtonYDescription)(MinecraftScreenController *this, std::string *result);</span>
<span class="line">  std::string *(__fastcall *_getButtonKeyboardDescription)(MinecraftScreenController *this, std::string *result);</span>
<span class="line">  void (__fastcall *_handlePlaceAll)(ContainerScreenController *this, const std::string *, int);</span>
<span class="line">  void (__fastcall *_handlePlaceOne)(ContainerScreenController *this, const std::string *, int);</span>
<span class="line">  void (__fastcall *_handleSelectSlot)(ContainerScreenController *this, const std::string *, int);</span>
<span class="line">  const SelectedSlotInfo *(__fastcall *_getSelectedSlotInfo)(ContainerScreenController *this, const SelectedSlotInfo *result);</span>
<span class="line">  const ItemStack *(__fastcall *_getItemStack)(ContainerScreenController *this, const std::string *, int);</span>
<span class="line">  const ItemStackBase *(__fastcall *_getVisualItemStack)(ContainerScreenController *this, const std::string *, int);</span>
<span class="line">  const ItemStackBase *(__fastcall *_getTakeableItemStackBase)(ContainerScreenController *this, const std::string *, int);</span>
<span class="line">  ui::ViewRequest (__fastcall *_onContainerSlotHovered)(ContainerScreenController *this, const std::string *, int);</span>
<span class="line">  ui::ViewRequest (__fastcall *_onContainerSlotSelected)(ContainerScreenController *this, const std::string *, int);</span>
<span class="line">  ui::ViewRequest (__fastcall *_onContainerSlotPressed)(ContainerScreenController *this, const std::string *, int);</span>
<span class="line">  bool (__fastcall *_shouldSwap)(ContainerScreenController *this, const std::string *, int, const std::string *, int);</span>
<span class="line">  std::string *(__fastcall *_getCollectionName)(ContainerScreenController *this, std::string *result, UIPropertyBag *);</span>
<span class="line">  bool (__fastcall *_canSplit)(ContainerScreenController *this, const std::string *, int);</span>
<span class="line">  void (__fastcall *_sendFlyingItem)(ContainerScreenController *this, const ItemStackBase *, const std::string *, int, const std::string *, int);</span>
<span class="line">  void (__fastcall *_registerCoalesceOrder)(ContainerScreenController *this);</span>
<span class="line">  void (__fastcall *_registerAutoPlaceOrder)(ContainerScreenController *this);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="furnacescreencontroller-registerbindings-l2-lambda-8b252d8799f3201f14e8f22b67a665d4" tabindex="-1"><a class="header-anchor" href="#furnacescreencontroller-registerbindings-l2-lambda-8b252d8799f3201f14e8f22b67a665d4"><span><code>FurnaceScreenController::_registerBindings::__l2::&lt;lambda_8b252d8799f3201f14e8f22b67a665d4&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FurnaceScreenController::_registerBindings::__l2::&lt;lambda_8b252d8799f3201f14e8f22b67a665d4&gt;</span>
<span class="line">{</span>
<span class="line">  FurnaceScreenController *const __this;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="furnacescreencontroller-registerbindings-l2-lambda-219fb25940ffd2a342e13c74eb863d44" tabindex="-1"><a class="header-anchor" href="#furnacescreencontroller-registerbindings-l2-lambda-219fb25940ffd2a342e13c74eb863d44"><span><code>FurnaceScreenController::_registerBindings::__l2::&lt;lambda_219fb25940ffd2a342e13c74eb863d44&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FurnaceScreenController::_registerBindings::__l2::&lt;lambda_219fb25940ffd2a342e13c74eb863d44&gt;</span>
<span class="line">{</span>
<span class="line">  FurnaceScreenController *const __this;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="furnacescreencontroller-registerbindings-l2-lambda-deb7bf7a266081449655e5736b99f760" tabindex="-1"><a class="header-anchor" href="#furnacescreencontroller-registerbindings-l2-lambda-deb7bf7a266081449655e5736b99f760"><span><code>FurnaceScreenController::_registerBindings::__l2::&lt;lambda_deb7bf7a266081449655e5736b99f760&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FurnaceScreenController::_registerBindings::__l2::&lt;lambda_deb7bf7a266081449655e5736b99f760&gt;</span>
<span class="line">{</span>
<span class="line">  FurnaceScreenController *const __this;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="furnacescreencontroller-ctor-l2-lambda-2876c9fe442ba3f7cdaa0dc604ded28b" tabindex="-1"><a class="header-anchor" href="#furnacescreencontroller-ctor-l2-lambda-2876c9fe442ba3f7cdaa0dc604ded28b"><span><code>FurnaceScreenController::{ctor}::__l2::&lt;lambda_2876c9fe442ba3f7cdaa0dc604ded28b&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FurnaceScreenController::{ctor}::__l2::&lt;lambda_2876c9fe442ba3f7cdaa0dc604ded28b&gt;</span>
<span class="line">{</span>
<span class="line">  FurnaceScreenController *const __this;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="furnacescreencontroller-ctor-l2-lambda-eb1105537a6c449769437f9f786d2ef4" tabindex="-1"><a class="header-anchor" href="#furnacescreencontroller-ctor-l2-lambda-eb1105537a6c449769437f9f786d2ef4"><span><code>FurnaceScreenController::{ctor}::__l2::&lt;lambda_eb1105537a6c449769437f9f786d2ef4&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FurnaceScreenController::{ctor}::__l2::&lt;lambda_eb1105537a6c449769437f9f786d2ef4&gt;</span>
<span class="line">{</span>
<span class="line">  FurnaceScreenController *const __this;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="furnacescreencontroller-ctor-l2-lambda-7479bbc8744348aa8405bdb66fd31e31" tabindex="-1"><a class="header-anchor" href="#furnacescreencontroller-ctor-l2-lambda-7479bbc8744348aa8405bdb66fd31e31"><span><code>FurnaceScreenController::{ctor}::__l2::&lt;lambda_7479bbc8744348aa8405bdb66fd31e31&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FurnaceScreenController::{ctor}::__l2::&lt;lambda_7479bbc8744348aa8405bdb66fd31e31&gt;</span>
<span class="line">{</span>
<span class="line">  FurnaceScreenController *const __this;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="furnacescreencontroller-ctor-l2-lambda-f5d0e85b7f8dadf280ed4592428a4dc6" tabindex="-1"><a class="header-anchor" href="#furnacescreencontroller-ctor-l2-lambda-f5d0e85b7f8dadf280ed4592428a4dc6"><span><code>FurnaceScreenController::{ctor}::__l2::&lt;lambda_f5d0e85b7f8dadf280ed4592428a4dc6&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FurnaceScreenController::{ctor}::__l2::&lt;lambda_f5d0e85b7f8dadf280ed4592428a4dc6&gt;</span>
<span class="line">{</span>
<span class="line">  FurnaceScreenController *const __this;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="findmountgoal" tabindex="-1"><a class="header-anchor" href="#findmountgoal"><span><code>FindMountGoal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FindMountGoal : Goal</span>
<span class="line">{</span>
<span class="line">  TempEPtr&lt;Actor&gt; mTarget;</span>
<span class="line">  float mTargetDist;</span>
<span class="line">  int mTimeToRecalcPath;</span>
<span class="line">  int mStartCounter;</span>
<span class="line">  int mStartDelay;</span>
<span class="line">  bool mAvoidWater;</span>
<span class="line">  bool mTargetNeeded;</span>
<span class="line">  float mMountDistance;</span>
<span class="line">  int mFailedAttemptsCounter;</span>
<span class="line">  int mMaxFailedAttempts;</span>
<span class="line">  Mob *mMob;</span>
<span class="line">  std::unique_ptr&lt;Path&gt; mPath;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="findmountgoal-vtbl" tabindex="-1"><a class="header-anchor" href="#findmountgoal-vtbl"><span><code>FindMountGoal_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FindMountGoal_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~Goal)(Goal *this);</span>
<span class="line">  bool (__fastcall *canUse)(Goal *this);</span>
<span class="line">  bool (__fastcall *canContinueToUse)(Goal *this);</span>
<span class="line">  bool (__fastcall *canBeInterrupted)(Goal *this);</span>
<span class="line">  void (__fastcall *start)(Goal *this);</span>
<span class="line">  void (__fastcall *stop)(Goal *this);</span>
<span class="line">  void (__fastcall *tick)(Goal *this);</span>
<span class="line">  void (__fastcall *appendDebugInfo)(Goal *this, std::string *);</span>
<span class="line">  bool (__fastcall *isTargetGoal)(Goal *this);</span>
<span class="line">  void (__fastcall *onPlayerDimensionChanged)(Goal *this, Player *, AutomaticID&lt;Dimension,int&gt;);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="findunderwatertreasuregoal" tabindex="-1"><a class="header-anchor" href="#findunderwatertreasuregoal"><span><code>FindUnderwaterTreasureGoal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj __declspec(align(8)) FindUnderwaterTreasureGoal : Goal</span>
<span class="line">{</span>
<span class="line">  Mob *mMob;</span>
<span class="line">  BlockPos mDestination;</span>
<span class="line">  Vec3 mLastPos;</span>
<span class="line">  int mBlocksCounter;</span>
<span class="line">  int mBlocksToTravel;</span>
<span class="line">  int mTimeToRecalcPath;</span>
<span class="line">  int mFailedPathing;</span>
<span class="line">  int mTotalFailedPathing;</span>
<span class="line">  float mSpeed;</span>
<span class="line">  int mSearchArea;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="findunderwatertreasuregoal-vtbl" tabindex="-1"><a class="header-anchor" href="#findunderwatertreasuregoal-vtbl"><span><code>FindUnderwaterTreasureGoal_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FindUnderwaterTreasureGoal_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~Goal)(Goal *this);</span>
<span class="line">  bool (__fastcall *canUse)(Goal *this);</span>
<span class="line">  bool (__fastcall *canContinueToUse)(Goal *this);</span>
<span class="line">  bool (__fastcall *canBeInterrupted)(Goal *this);</span>
<span class="line">  void (__fastcall *start)(Goal *this);</span>
<span class="line">  void (__fastcall *stop)(Goal *this);</span>
<span class="line">  void (__fastcall *tick)(Goal *this);</span>
<span class="line">  void (__fastcall *appendDebugInfo)(Goal *this, std::string *);</span>
<span class="line">  bool (__fastcall *isTargetGoal)(Goal *this);</span>
<span class="line">  void (__fastcall *onPlayerDimensionChanged)(Goal *this, Player *, AutomaticID&lt;Dimension,int&gt;);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="floatgoal" tabindex="-1"><a class="header-anchor" href="#floatgoal"><span><code>FloatGoal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FloatGoal : Goal</span>
<span class="line">{</span>
<span class="line">  Mob *mMob;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="floatgoal-vtbl" tabindex="-1"><a class="header-anchor" href="#floatgoal-vtbl"><span><code>FloatGoal_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FloatGoal_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~Goal)(Goal *this);</span>
<span class="line">  bool (__fastcall *canUse)(Goal *this);</span>
<span class="line">  bool (__fastcall *canContinueToUse)(Goal *this);</span>
<span class="line">  bool (__fastcall *canBeInterrupted)(Goal *this);</span>
<span class="line">  void (__fastcall *start)(Goal *this);</span>
<span class="line">  void (__fastcall *stop)(Goal *this);</span>
<span class="line">  void (__fastcall *tick)(Goal *this);</span>
<span class="line">  void (__fastcall *appendDebugInfo)(Goal *this, std::string *);</span>
<span class="line">  bool (__fastcall *isTargetGoal)(Goal *this);</span>
<span class="line">  void (__fastcall *onPlayerDimensionChanged)(Goal *this, Player *, AutomaticID&lt;Dimension,int&gt;);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="floatwandergoal" tabindex="-1"><a class="header-anchor" href="#floatwandergoal"><span><code>FloatWanderGoal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FloatWanderGoal : Goal</span>
<span class="line">{</span>
<span class="line">  Mob *mMob;</span>
<span class="line">  Vec3 mTargetPos;</span>
<span class="line">  int mFloatDuration;</span>
<span class="line">  float mFloatXZDist;</span>
<span class="line">  float mFloatYDist;</span>
<span class="line">  float mYOffset;</span>
<span class="line">  bool mMustReach;</span>
<span class="line">  bool mRandomReselect;</span>
<span class="line">  FloatRange mFloatDurationRange;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="floatwandergoal-vtbl" tabindex="-1"><a class="header-anchor" href="#floatwandergoal-vtbl"><span><code>FloatWanderGoal_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FloatWanderGoal_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~Goal)(Goal *this);</span>
<span class="line">  bool (__fastcall *canUse)(Goal *this);</span>
<span class="line">  bool (__fastcall *canContinueToUse)(Goal *this);</span>
<span class="line">  bool (__fastcall *canBeInterrupted)(Goal *this);</span>
<span class="line">  void (__fastcall *start)(Goal *this);</span>
<span class="line">  void (__fastcall *stop)(Goal *this);</span>
<span class="line">  void (__fastcall *tick)(Goal *this);</span>
<span class="line">  void (__fastcall *appendDebugInfo)(Goal *this, std::string *);</span>
<span class="line">  bool (__fastcall *isTargetGoal)(Goal *this);</span>
<span class="line">  void (__fastcall *onPlayerDimensionChanged)(Goal *this, Player *, AutomaticID&lt;Dimension,int&gt;);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="followcaravangoal" tabindex="-1"><a class="header-anchor" href="#followcaravangoal"><span><code>FollowCaravanGoal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FollowCaravanGoal : Goal</span>
<span class="line">{</span>
<span class="line">  Mob *mMob;</span>
<span class="line">  TempEPtr&lt;Mob&gt; mParent;</span>
<span class="line">  float mSpeedModifier;</span>
<span class="line">  float mSpeedModifierO;</span>
<span class="line">  int mDistanceCheckCounter;</span>
<span class="line">  int mCaravanSize;</span>
<span class="line">  const std::vector&lt;MobDescriptor&gt; mTargetTypes;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="followcaravangoal-vtbl" tabindex="-1"><a class="header-anchor" href="#followcaravangoal-vtbl"><span><code>FollowCaravanGoal_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FollowCaravanGoal_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~Goal)(Goal *this);</span>
<span class="line">  bool (__fastcall *canUse)(Goal *this);</span>
<span class="line">  bool (__fastcall *canContinueToUse)(Goal *this);</span>
<span class="line">  bool (__fastcall *canBeInterrupted)(Goal *this);</span>
<span class="line">  void (__fastcall *start)(Goal *this);</span>
<span class="line">  void (__fastcall *stop)(Goal *this);</span>
<span class="line">  void (__fastcall *tick)(Goal *this);</span>
<span class="line">  void (__fastcall *appendDebugInfo)(Goal *this, std::string *);</span>
<span class="line">  bool (__fastcall *isTargetGoal)(Goal *this);</span>
<span class="line">  void (__fastcall *onPlayerDimensionChanged)(Goal *this, Player *, AutomaticID&lt;Dimension,int&gt;);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="followmobgoal" tabindex="-1"><a class="header-anchor" href="#followmobgoal"><span><code>FollowMobGoal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FollowMobGoal : Goal</span>
<span class="line">{</span>
<span class="line">  Mob *mMob;</span>
<span class="line">  TempEPtr&lt;Mob&gt; mFollowingMob;</span>
<span class="line">  float mSpeed;</span>
<span class="line">  int mTimeToRecalcPath;</span>
<span class="line">  float mStopDistance;</span>
<span class="line">  int mSearchArea;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="followmobgoal-vtbl" tabindex="-1"><a class="header-anchor" href="#followmobgoal-vtbl"><span><code>FollowMobGoal_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FollowMobGoal_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~Goal)(Goal *this);</span>
<span class="line">  bool (__fastcall *canUse)(Goal *this);</span>
<span class="line">  bool (__fastcall *canContinueToUse)(Goal *this);</span>
<span class="line">  bool (__fastcall *canBeInterrupted)(Goal *this);</span>
<span class="line">  void (__fastcall *start)(Goal *this);</span>
<span class="line">  void (__fastcall *stop)(Goal *this);</span>
<span class="line">  void (__fastcall *tick)(Goal *this);</span>
<span class="line">  void (__fastcall *appendDebugInfo)(Goal *this, std::string *);</span>
<span class="line">  bool (__fastcall *isTargetGoal)(Goal *this);</span>
<span class="line">  void (__fastcall *onPlayerDimensionChanged)(Goal *this, Player *, AutomaticID&lt;Dimension,int&gt;);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="followownergoal" tabindex="-1"><a class="header-anchor" href="#followownergoal"><span><code>FollowOwnerGoal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj __declspec(align(8)) FollowOwnerGoal : Goal</span>
<span class="line">{</span>
<span class="line">  Mob *mMob;</span>
<span class="line">  TempEPtr&lt;Mob&gt; mOwner;</span>
<span class="line">  float mSpeed;</span>
<span class="line">  int mTimeToRecalcPath;</span>
<span class="line">  float mStartDistance;</span>
<span class="line">  float mStopDistance;</span>
<span class="line">  bool mOldAvoidWater;</span>
<span class="line">  bool mOldAvoidPortals;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="followownergoal-vtbl" tabindex="-1"><a class="header-anchor" href="#followownergoal-vtbl"><span><code>FollowOwnerGoal_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FollowOwnerGoal_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~Goal)(Goal *this);</span>
<span class="line">  bool (__fastcall *canUse)(Goal *this);</span>
<span class="line">  bool (__fastcall *canContinueToUse)(Goal *this);</span>
<span class="line">  bool (__fastcall *canBeInterrupted)(Goal *this);</span>
<span class="line">  void (__fastcall *start)(Goal *this);</span>
<span class="line">  void (__fastcall *stop)(Goal *this);</span>
<span class="line">  void (__fastcall *tick)(Goal *this);</span>
<span class="line">  void (__fastcall *appendDebugInfo)(Goal *this, std::string *);</span>
<span class="line">  bool (__fastcall *isTargetGoal)(Goal *this);</span>
<span class="line">  void (__fastcall *onPlayerDimensionChanged)(Goal *this, Player *, AutomaticID&lt;Dimension,int&gt;);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="followparentgoal" tabindex="-1"><a class="header-anchor" href="#followparentgoal"><span><code>FollowParentGoal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FollowParentGoal : Goal</span>
<span class="line">{</span>
<span class="line">  Mob *mMob;</span>
<span class="line">  TempEPtr&lt;Mob&gt; mParent;</span>
<span class="line">  float mSpeed;</span>
<span class="line">  int mTimeToRecalcPath;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="followparentgoal-vtbl" tabindex="-1"><a class="header-anchor" href="#followparentgoal-vtbl"><span><code>FollowParentGoal_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FollowParentGoal_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~Goal)(Goal *this);</span>
<span class="line">  bool (__fastcall *canUse)(Goal *this);</span>
<span class="line">  bool (__fastcall *canContinueToUse)(Goal *this);</span>
<span class="line">  bool (__fastcall *canBeInterrupted)(Goal *this);</span>
<span class="line">  void (__fastcall *start)(Goal *this);</span>
<span class="line">  void (__fastcall *stop)(Goal *this);</span>
<span class="line">  void (__fastcall *tick)(Goal *this);</span>
<span class="line">  void (__fastcall *appendDebugInfo)(Goal *this, std::string *);</span>
<span class="line">  bool (__fastcall *isTargetGoal)(Goal *this);</span>
<span class="line">  void (__fastcall *onPlayerDimensionChanged)(Goal *this, Player *, AutomaticID&lt;Dimension,int&gt;);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="followtargetcaptaingoal" tabindex="-1"><a class="header-anchor" href="#followtargetcaptaingoal"><span><code>FollowTargetCaptainGoal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FollowTargetCaptainGoal : MoveTowardsTargetGoal</span>
<span class="line">{</span>
<span class="line">  __int16 mLocateAttempts;</span>
<span class="line">  float mFollowDistSq;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="followtargetcaptaingoal-vtbl" tabindex="-1"><a class="header-anchor" href="#followtargetcaptaingoal-vtbl"><span><code>FollowTargetCaptainGoal_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FollowTargetCaptainGoal_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~Goal)(Goal *this);</span>
<span class="line">  bool (__fastcall *canUse)(Goal *this);</span>
<span class="line">  bool (__fastcall *canContinueToUse)(Goal *this);</span>
<span class="line">  bool (__fastcall *canBeInterrupted)(Goal *this);</span>
<span class="line">  void (__fastcall *start)(Goal *this);</span>
<span class="line">  void (__fastcall *stop)(Goal *this);</span>
<span class="line">  void (__fastcall *tick)(Goal *this);</span>
<span class="line">  void (__fastcall *appendDebugInfo)(Goal *this, std::string *);</span>
<span class="line">  bool (__fastcall *isTargetGoal)(Goal *this);</span>
<span class="line">  void (__fastcall *onPlayerDimensionChanged)(Goal *this, Player *, AutomaticID&lt;Dimension,int&gt;);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="furnacecontainermanagermodel-postinit-l2-lambda-d086b2b241b4febd8eb43d27ed1b6c56" tabindex="-1"><a class="header-anchor" href="#furnacecontainermanagermodel-postinit-l2-lambda-d086b2b241b4febd8eb43d27ed1b6c56"><span><code>FurnaceContainerManagerModel::_postInit::__l2::&lt;lambda_d086b2b241b4febd8eb43d27ed1b6c56&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FurnaceContainerManagerModel::_postInit::__l2::&lt;lambda_d086b2b241b4febd8eb43d27ed1b6c56&gt;</span>
<span class="line">{</span>
<span class="line">  FurnaceContainerManagerModel *const __this;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="furnacecontainermanagermodel-postinit-l2-lambda-41d3f3b35821c7657e27aa3715ba887f" tabindex="-1"><a class="header-anchor" href="#furnacecontainermanagermodel-postinit-l2-lambda-41d3f3b35821c7657e27aa3715ba887f"><span><code>FurnaceContainerManagerModel::_postInit::__l2::&lt;lambda_41d3f3b35821c7657e27aa3715ba887f&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FurnaceContainerManagerModel::_postInit::__l2::&lt;lambda_41d3f3b35821c7657e27aa3715ba887f&gt;</span>
<span class="line">{</span>
<span class="line">  FurnaceContainerManagerModel *const __this;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="furnacecontainermanagermodel-postinit-l2-lambda-dd42d545e61f0d9790121fdff57aa595" tabindex="-1"><a class="header-anchor" href="#furnacecontainermanagermodel-postinit-l2-lambda-dd42d545e61f0d9790121fdff57aa595"><span><code>FurnaceContainerManagerModel::_postInit::__l2::&lt;lambda_dd42d545e61f0d9790121fdff57aa595&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FurnaceContainerManagerModel::_postInit::__l2::&lt;lambda_dd42d545e61f0d9790121fdff57aa595&gt;</span>
<span class="line">{</span>
<span class="line">  FurnaceContainerManagerModel *const __this;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flagcomponent-datadrivenbiomesurface" tabindex="-1"><a class="header-anchor" href="#flagcomponent-datadrivenbiomesurface"><span><code>FlagComponent&lt;DataDrivenBiomeSurface&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FlagComponent&lt;DataDrivenBiomeSurface&gt; : IEntityComponent</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flagcomponent-swampbiomesurface" tabindex="-1"><a class="header-anchor" href="#flagcomponent-swampbiomesurface"><span><code>FlagComponent&lt;SwampBiomeSurface&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FlagComponent&lt;SwampBiomeSurface&gt; : IEntityComponent</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flagcomponent-theendbiomesurface" tabindex="-1"><a class="header-anchor" href="#flagcomponent-theendbiomesurface"><span><code>FlagComponent&lt;TheEndBiomeSurface&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FlagComponent&lt;TheEndBiomeSurface&gt; : IEntityComponent</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flagcomponent-netherbiomesurface" tabindex="-1"><a class="header-anchor" href="#flagcomponent-netherbiomesurface"><span><code>FlagComponent&lt;NetherBiomeSurface&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FlagComponent&lt;NetherBiomeSurface&gt; : IEntityComponent</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flagcomponent-oceanfrozenbiomesurface" tabindex="-1"><a class="header-anchor" href="#flagcomponent-oceanfrozenbiomesurface"><span><code>FlagComponent&lt;OceanFrozenBiomeSurface&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FlagComponent&lt;OceanFrozenBiomeSurface&gt; : IEntityComponent</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flowerfeature-vtbl" tabindex="-1"><a class="header-anchor" href="#flowerfeature-vtbl"><span><code>FlowerFeature_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FlowerFeature_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~IFeature)(IFeature *this);</span>
<span class="line">  std::optional&lt;BlockPos&gt; *(__fastcall *place)(IFeature *this, std::optional&lt;BlockPos&gt; *result, IBlockWorldGenAPI *, const BlockPos *, Random *, RenderParams *);</span>
<span class="line">  std::string *(__fastcall *getStructureName)(IFeature *this, std::string *result);</span>
<span class="line">  bool (__fastcall *parse)(IFeature *this, const rapidjson::GenericValue&lt;rapidjson::UTF8&lt;char&gt;,rapidjson::MemoryPoolAllocator&lt;rapidjson::CrtAllocator&gt; &gt; *, IWorldRegistriesProvider *);</span>
<span class="line">  bool (__fastcall *place)(Feature *this, BlockSource *, const BlockPos *, Random *);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fossilfeature" tabindex="-1"><a class="header-anchor" href="#fossilfeature"><span><code>FossilFeature</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FossilFeature : Feature</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fossilfeature-vtbl" tabindex="-1"><a class="header-anchor" href="#fossilfeature-vtbl"><span><code>FossilFeature_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FossilFeature_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~IFeature)(IFeature *this);</span>
<span class="line">  std::optional&lt;BlockPos&gt; *(__fastcall *place)(IFeature *this, std::optional&lt;BlockPos&gt; *result, IBlockWorldGenAPI *, const BlockPos *, Random *, RenderParams *);</span>
<span class="line">  std::string *(__fastcall *getStructureName)(IFeature *this, std::string *result);</span>
<span class="line">  bool (__fastcall *parse)(IFeature *this, const rapidjson::GenericValue&lt;rapidjson::UTF8&lt;char&gt;,rapidjson::MemoryPoolAllocator&lt;rapidjson::CrtAllocator&gt; &gt; *, IWorldRegistriesProvider *);</span>
<span class="line">  bool (__fastcall *place)(Feature *this, BlockSource *, const BlockPos *, Random *);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-concretefeatureholder-nosurfaceorefeature" tabindex="-1"><a class="header-anchor" href="#featureloading-concretefeatureholder-nosurfaceorefeature"><span><code>FeatureLoading::ConcreteFeatureHolder&lt;NoSurfaceOreFeature&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::ConcreteFeatureHolder&lt;NoSurfaceOreFeature&gt; : FeatureLoading::AbstractFeatureHolder</span>
<span class="line">{</span>
<span class="line">  NoSurfaceOreFeature *mFeaturePtr;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-concretefeatureholder-nosurfaceorefeature-vtbl" tabindex="-1"><a class="header-anchor" href="#featureloading-concretefeatureholder-nosurfaceorefeature-vtbl"><span><code>FeatureLoading::ConcreteFeatureHolder&lt;NoSurfaceOreFeature&gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FeatureLoading::ConcreteFeatureHolder&lt;NoSurfaceOreFeature&gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~AbstractFeatureHolder)(FeatureLoading::AbstractFeatureHolder *this);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-e9feacad28ec74e04697d5271a3dc1fa" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-e9feacad28ec74e04697d5271a3dc1fa"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_e9feacad28ec74e04697d5271a3dc1fa&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_e9feacad28ec74e04697d5271a3dc1fa&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-868951144b11598964e2f9d796a6f40f" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-868951144b11598964e2f9d796a6f40f"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_868951144b11598964e2f9d796a6f40f&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_868951144b11598964e2f9d796a6f40f&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-15e6f032b3924bf4fe7c9b8ceac15fb1" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-15e6f032b3924bf4fe7c9b8ceac15fb1"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_15e6f032b3924bf4fe7c9b8ceac15fb1&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_15e6f032b3924bf4fe7c9b8ceac15fb1&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-aa6df50b2b02ad53c22ecaedc728939b" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-aa6df50b2b02ad53c22ecaedc728939b"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_aa6df50b2b02ad53c22ecaedc728939b&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_aa6df50b2b02ad53c22ecaedc728939b&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-f64ca177a2d5b874b9dac3a1eb603d7b" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-f64ca177a2d5b874b9dac3a1eb603d7b"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_f64ca177a2d5b874b9dac3a1eb603d7b&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_f64ca177a2d5b874b9dac3a1eb603d7b&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-21ba44180a68a30be5ff312c899b021d" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-21ba44180a68a30be5ff312c899b021d"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_21ba44180a68a30be5ff312c899b021d&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_21ba44180a68a30be5ff312c899b021d&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-b74ff55c7814b9b2af7348ea9199ae14" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-b74ff55c7814b9b2af7348ea9199ae14"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_b74ff55c7814b9b2af7348ea9199ae14&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_b74ff55c7814b9b2af7348ea9199ae14&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-concretefeatureholder-vanillatreefeature" tabindex="-1"><a class="header-anchor" href="#featureloading-concretefeatureholder-vanillatreefeature"><span><code>FeatureLoading::ConcreteFeatureHolder&lt;VanillaTreeFeature&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::ConcreteFeatureHolder&lt;VanillaTreeFeature&gt; : FeatureLoading::AbstractFeatureHolder</span>
<span class="line">{</span>
<span class="line">  VanillaTreeFeature *mFeaturePtr;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-concretefeatureholder-vanillatreefeature-vtbl" tabindex="-1"><a class="header-anchor" href="#featureloading-concretefeatureholder-vanillatreefeature-vtbl"><span><code>FeatureLoading::ConcreteFeatureHolder&lt;VanillaTreeFeature&gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FeatureLoading::ConcreteFeatureHolder&lt;VanillaTreeFeature&gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~AbstractFeatureHolder)(FeatureLoading::AbstractFeatureHolder *this);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-f22ee483f0e3f10db1da66750ae605fb" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-f22ee483f0e3f10db1da66750ae605fb"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_f22ee483f0e3f10db1da66750ae605fb&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_f22ee483f0e3f10db1da66750ae605fb&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-916f9942766fafe927fde16e69817125" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-916f9942766fafe927fde16e69817125"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_916f9942766fafe927fde16e69817125&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_916f9942766fafe927fde16e69817125&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-0b0a3ede3574c74346873bb21facb949" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-0b0a3ede3574c74346873bb21facb949"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_0b0a3ede3574c74346873bb21facb949&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_0b0a3ede3574c74346873bb21facb949&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l3-lambda-b0c0bf51e75e357ddc865b3f69ce7b34" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l3-lambda-b0c0bf51e75e357ddc865b3f69ce7b34"><span><code>FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_b0c0bf51e75e357ddc865b3f69ce7b34&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_b0c0bf51e75e357ddc865b3f69ce7b34&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-a2186ac5ea5f720e40618b767ab265ea" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-a2186ac5ea5f720e40618b767ab265ea"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_a2186ac5ea5f720e40618b767ab265ea&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_a2186ac5ea5f720e40618b767ab265ea&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-4b9e3539b1944c4f70eaf1f641326d8d" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-4b9e3539b1944c4f70eaf1f641326d8d"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_4b9e3539b1944c4f70eaf1f641326d8d&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_4b9e3539b1944c4f70eaf1f641326d8d&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l3-lambda-f06c3c69504afec25894d441e9836c05" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l3-lambda-f06c3c69504afec25894d441e9836c05"><span><code>FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_f06c3c69504afec25894d441e9836c05&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_f06c3c69504afec25894d441e9836c05&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-dc5cf81ab7fc5d6b6724e5e4db839a0d" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-dc5cf81ab7fc5d6b6724e5e4db839a0d"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_dc5cf81ab7fc5d6b6724e5e4db839a0d&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_dc5cf81ab7fc5d6b6724e5e4db839a0d&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-fcd2a723d3996ebe522810bfe7f1a1be" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-fcd2a723d3996ebe522810bfe7f1a1be"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_fcd2a723d3996ebe522810bfe7f1a1be&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_fcd2a723d3996ebe522810bfe7f1a1be&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l3-lambda-5cea9c8a86542dff48b9f5532838cb31" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l3-lambda-5cea9c8a86542dff48b9f5532838cb31"><span><code>FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_5cea9c8a86542dff48b9f5532838cb31&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_5cea9c8a86542dff48b9f5532838cb31&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-3173c53d21c8d45788e4cb927b08dd46" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-3173c53d21c8d45788e4cb927b08dd46"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_3173c53d21c8d45788e4cb927b08dd46&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_3173c53d21c8d45788e4cb927b08dd46&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-84363a427a92165a161b30f750ce3f6c" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-84363a427a92165a161b30f750ce3f6c"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_84363a427a92165a161b30f750ce3f6c&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_84363a427a92165a161b30f750ce3f6c&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l3-lambda-d94eef415bed06894be873e22eb0d904" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l3-lambda-d94eef415bed06894be873e22eb0d904"><span><code>FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_d94eef415bed06894be873e22eb0d904&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_d94eef415bed06894be873e22eb0d904&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-2d44a01843018fb68c4486d269509bb8" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-2d44a01843018fb68c4486d269509bb8"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_2d44a01843018fb68c4486d269509bb8&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_2d44a01843018fb68c4486d269509bb8&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-ac7f36bdba362efb7bd96b74ba0d1b3c" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-ac7f36bdba362efb7bd96b74ba0d1b3c"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_ac7f36bdba362efb7bd96b74ba0d1b3c&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_ac7f36bdba362efb7bd96b74ba0d1b3c&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l3-lambda-8233821cff8f4b7304cabff19abadf1a" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l3-lambda-8233821cff8f4b7304cabff19abadf1a"><span><code>FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_8233821cff8f4b7304cabff19abadf1a&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_8233821cff8f4b7304cabff19abadf1a&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-295f269c328de6adec6789fbbc023222" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-295f269c328de6adec6789fbbc023222"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_295f269c328de6adec6789fbbc023222&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_295f269c328de6adec6789fbbc023222&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-b2e56994fe64c170baa41fdf8d3d5a20" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-b2e56994fe64c170baa41fdf8d3d5a20"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_b2e56994fe64c170baa41fdf8d3d5a20&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_b2e56994fe64c170baa41fdf8d3d5a20&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l3-lambda-97d1bf05ce985165eafc8fda082d19a6" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l3-lambda-97d1bf05ce985165eafc8fda082d19a6"><span><code>FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_97d1bf05ce985165eafc8fda082d19a6&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_97d1bf05ce985165eafc8fda082d19a6&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-fd86a1616f54f9c08d81fa4adb11665c" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-fd86a1616f54f9c08d81fa4adb11665c"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_fd86a1616f54f9c08d81fa4adb11665c&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_fd86a1616f54f9c08d81fa4adb11665c&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-12c9bcad1e74ec5e93ad0df7b8021689" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-12c9bcad1e74ec5e93ad0df7b8021689"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_12c9bcad1e74ec5e93ad0df7b8021689&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_12c9bcad1e74ec5e93ad0df7b8021689&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l3-lambda-6181f3af474ecbd64bd3b259f51dc62f" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l3-lambda-6181f3af474ecbd64bd3b259f51dc62f"><span><code>FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_6181f3af474ecbd64bd3b259f51dc62f&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_6181f3af474ecbd64bd3b259f51dc62f&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-02ae915ee37b20d1d582027c2eef013c" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-02ae915ee37b20d1d582027c2eef013c"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_02ae915ee37b20d1d582027c2eef013c&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_02ae915ee37b20d1d582027c2eef013c&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-fb971b350856e389d08192cdfd3c816c" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-fb971b350856e389d08192cdfd3c816c"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_fb971b350856e389d08192cdfd3c816c&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_fb971b350856e389d08192cdfd3c816c&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l3-lambda-4ca146a42258777491288aaecbb7f0c3" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l3-lambda-4ca146a42258777491288aaecbb7f0c3"><span><code>FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_4ca146a42258777491288aaecbb7f0c3&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_4ca146a42258777491288aaecbb7f0c3&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-5c8f8bd15126f9c55196ce0ed5550b54" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-5c8f8bd15126f9c55196ce0ed5550b54"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_5c8f8bd15126f9c55196ce0ed5550b54&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_5c8f8bd15126f9c55196ce0ed5550b54&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-2840965678f4bea57c430c0057eeef81" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-2840965678f4bea57c430c0057eeef81"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_2840965678f4bea57c430c0057eeef81&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_2840965678f4bea57c430c0057eeef81&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l3-lambda-06b77d3619dac6102a791e302b6e2996" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l3-lambda-06b77d3619dac6102a791e302b6e2996"><span><code>FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_06b77d3619dac6102a791e302b6e2996&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_06b77d3619dac6102a791e302b6e2996&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-3307d2dec594e7cd39517a69cecf2bd7" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-3307d2dec594e7cd39517a69cecf2bd7"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_3307d2dec594e7cd39517a69cecf2bd7&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_3307d2dec594e7cd39517a69cecf2bd7&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-27a72a384c7deaf4276a15f91d84e782" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-27a72a384c7deaf4276a15f91d84e782"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_27a72a384c7deaf4276a15f91d84e782&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_27a72a384c7deaf4276a15f91d84e782&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l3-lambda-6db853b9229f2e191e588eea3b1f15d8" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l3-lambda-6db853b9229f2e191e588eea3b1f15d8"><span><code>FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_6db853b9229f2e191e588eea3b1f15d8&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l3::&lt;lambda_6db853b9229f2e191e588eea3b1f15d8&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-7d7a594560beae84922db145c06b2ecd" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-7d7a594560beae84922db145c06b2ecd"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_7d7a594560beae84922db145c06b2ecd&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_7d7a594560beae84922db145c06b2ecd&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretypefactory-registerfeaturetype-l2-lambda-a0d524cc11d1566fef269cda369951ab" tabindex="-1"><a class="header-anchor" href="#featuretypefactory-registerfeaturetype-l2-lambda-a0d524cc11d1566fef269cda369951ab"><span><code>FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_a0d524cc11d1566fef269cda369951ab&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureTypeFactory::registerFeatureType::__l2::&lt;lambda_a0d524cc11d1566fef269cda369951ab&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featurev113tov114-upgradedescription-l2-lambda-bd565243b0ce5e1b46fe572ce5ee8988" tabindex="-1"><a class="header-anchor" href="#featurev113tov114-upgradedescription-l2-lambda-bd565243b0ce5e1b46fe572ce5ee8988"><span><code>FeatureV113ToV114::_upgradeDescription::__l2::&lt;lambda_bd565243b0ce5e1b46fe572ce5ee8988&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureV113ToV114::_upgradeDescription::__l2::&lt;lambda_bd565243b0ce5e1b46fe572ce5ee8988&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featurev113tov114-addnamespaceifmissing-l2-lambda-17a99079527d83e2665fea39ccf5c699" tabindex="-1"><a class="header-anchor" href="#featurev113tov114-addnamespaceifmissing-l2-lambda-17a99079527d83e2665fea39ccf5c699"><span><code>FeatureV113ToV114::_addNamespaceIfMissing::__l2::&lt;lambda_17a99079527d83e2665fea39ccf5c699&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureV113ToV114::_addNamespaceIfMissing::__l2::&lt;lambda_17a99079527d83e2665fea39ccf5c699&gt;</span>
<span class="line">{</span>
<span class="line">  gsl::basic_string_span&lt;char const ,-1&gt; toAdd;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreetrunk-buildschema-l2-lambda-7259412815063d5226dae8c850e96b38" tabindex="-1"><a class="header-anchor" href="#fancytreetrunk-buildschema-l2-lambda-7259412815063d5226dae8c850e96b38"><span><code>FancyTreeTrunk::_buildSchema::__l2::&lt;lambda_7259412815063d5226dae8c850e96b38&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeTrunk::_buildSchema::__l2::&lt;lambda_7259412815063d5226dae8c850e96b38&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreetrunk-buildschema-l2-lambda-a292559d1598e00bc3bc52c487de5ca0" tabindex="-1"><a class="header-anchor" href="#fancytreetrunk-buildschema-l2-lambda-a292559d1598e00bc3bc52c487de5ca0"><span><code>FancyTreeTrunk::_buildSchema::__l2::&lt;lambda_a292559d1598e00bc3bc52c487de5ca0&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeTrunk::_buildSchema::__l2::&lt;lambda_a292559d1598e00bc3bc52c487de5ca0&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreetrunk-buildschema-l2-lambda-8ed6b8ddd333dc8e397ab974a96a42a7" tabindex="-1"><a class="header-anchor" href="#fancytreetrunk-buildschema-l2-lambda-8ed6b8ddd333dc8e397ab974a96a42a7"><span><code>FancyTreeTrunk::_buildSchema::__l2::&lt;lambda_8ed6b8ddd333dc8e397ab974a96a42a7&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeTrunk::_buildSchema::__l2::&lt;lambda_8ed6b8ddd333dc8e397ab974a96a42a7&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreetrunk-buildschema-l4-lambda-a911b8375e0979268fa7b5f7ab9a4f4e" tabindex="-1"><a class="header-anchor" href="#fancytreetrunk-buildschema-l4-lambda-a911b8375e0979268fa7b5f7ab9a4f4e"><span><code>FancyTreeTrunk::_buildSchema::__l4::&lt;lambda_a911b8375e0979268fa7b5f7ab9a4f4e&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeTrunk::_buildSchema::__l4::&lt;lambda_a911b8375e0979268fa7b5f7ab9a4f4e&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreetrunk-buildschema-l4-lambda-c6b16a038e0caa525c9e6071893ec479" tabindex="-1"><a class="header-anchor" href="#fancytreetrunk-buildschema-l4-lambda-c6b16a038e0caa525c9e6071893ec479"><span><code>FancyTreeTrunk::_buildSchema::__l4::&lt;lambda_c6b16a038e0caa525c9e6071893ec479&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeTrunk::_buildSchema::__l4::&lt;lambda_c6b16a038e0caa525c9e6071893ec479&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreetrunk-buildschema-l4-lambda-ed5b9e28e634dea3fd22cf1c6c3ca6a9" tabindex="-1"><a class="header-anchor" href="#fancytreetrunk-buildschema-l4-lambda-ed5b9e28e634dea3fd22cf1c6c3ca6a9"><span><code>FancyTreeTrunk::_buildSchema::__l4::&lt;lambda_ed5b9e28e634dea3fd22cf1c6c3ca6a9&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeTrunk::_buildSchema::__l4::&lt;lambda_ed5b9e28e634dea3fd22cf1c6c3ca6a9&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreetrunk-buildschema-l2-lambda-8fd6410c201ef0b898f4829861dc50f9" tabindex="-1"><a class="header-anchor" href="#fancytreetrunk-buildschema-l2-lambda-8fd6410c201ef0b898f4829861dc50f9"><span><code>FancyTreeTrunk::_buildSchema::__l2::&lt;lambda_8fd6410c201ef0b898f4829861dc50f9&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeTrunk::_buildSchema::__l2::&lt;lambda_8fd6410c201ef0b898f4829861dc50f9&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreetrunk-buildschema-l3-lambda-bf5bc7d4f761369a78b3834460031dae" tabindex="-1"><a class="header-anchor" href="#fancytreetrunk-buildschema-l3-lambda-bf5bc7d4f761369a78b3834460031dae"><span><code>FancyTreeTrunk::_buildSchema::__l3::&lt;lambda_bf5bc7d4f761369a78b3834460031dae&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeTrunk::_buildSchema::__l3::&lt;lambda_bf5bc7d4f761369a78b3834460031dae&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreetrunk-buildschema-l3-lambda-b0a9f750b5db2e2e849e19569eca9180" tabindex="-1"><a class="header-anchor" href="#fancytreetrunk-buildschema-l3-lambda-b0a9f750b5db2e2e849e19569eca9180"><span><code>FancyTreeTrunk::_buildSchema::__l3::&lt;lambda_b0a9f750b5db2e2e849e19569eca9180&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeTrunk::_buildSchema::__l3::&lt;lambda_b0a9f750b5db2e2e849e19569eca9180&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreetrunk-buildschema-l3-lambda-ea4556ddf2c9b9fb701d13e0aa5720da" tabindex="-1"><a class="header-anchor" href="#fancytreetrunk-buildschema-l3-lambda-ea4556ddf2c9b9fb701d13e0aa5720da"><span><code>FancyTreeTrunk::_buildSchema::__l3::&lt;lambda_ea4556ddf2c9b9fb701d13e0aa5720da&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeTrunk::_buildSchema::__l3::&lt;lambda_ea4556ddf2c9b9fb701d13e0aa5720da&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fallentreetrunk-buildschema-l3-lambda-5f36fccf1b62133f53929738ffee06fc" tabindex="-1"><a class="header-anchor" href="#fallentreetrunk-buildschema-l3-lambda-5f36fccf1b62133f53929738ffee06fc"><span><code>FallenTreeTrunk::_buildSchema::__l3::&lt;lambda_5f36fccf1b62133f53929738ffee06fc&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FallenTreeTrunk::_buildSchema::__l3::&lt;lambda_5f36fccf1b62133f53929738ffee06fc&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fallentreetrunk-buildschema-l2-lambda-b10616b98a0474c876fb3f154b71d19f" tabindex="-1"><a class="header-anchor" href="#fallentreetrunk-buildschema-l2-lambda-b10616b98a0474c876fb3f154b71d19f"><span><code>FallenTreeTrunk::_buildSchema::__l2::&lt;lambda_b10616b98a0474c876fb3f154b71d19f&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FallenTreeTrunk::_buildSchema::__l2::&lt;lambda_b10616b98a0474c876fb3f154b71d19f&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fallentreetrunk-buildschema-l2-lambda-72e2cf34735cadb8f93879e85a873363" tabindex="-1"><a class="header-anchor" href="#fallentreetrunk-buildschema-l2-lambda-72e2cf34735cadb8f93879e85a873363"><span><code>FallenTreeTrunk::_buildSchema::__l2::&lt;lambda_72e2cf34735cadb8f93879e85a873363&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FallenTreeTrunk::_buildSchema::__l2::&lt;lambda_72e2cf34735cadb8f93879e85a873363&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fallentreetrunk-buildschema-l2-lambda-c3a3174f90d37fffab8b7396ffa43b36" tabindex="-1"><a class="header-anchor" href="#fallentreetrunk-buildschema-l2-lambda-c3a3174f90d37fffab8b7396ffa43b36"><span><code>FallenTreeTrunk::_buildSchema::__l2::&lt;lambda_c3a3174f90d37fffab8b7396ffa43b36&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FallenTreeTrunk::_buildSchema::__l2::&lt;lambda_c3a3174f90d37fffab8b7396ffa43b36&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fallentreetrunk-buildschema-l2-lambda-d23d594c93faa932a191aeb2a429cc31" tabindex="-1"><a class="header-anchor" href="#fallentreetrunk-buildschema-l2-lambda-d23d594c93faa932a191aeb2a429cc31"><span><code>FallenTreeTrunk::_buildSchema::__l2::&lt;lambda_d23d594c93faa932a191aeb2a429cc31&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FallenTreeTrunk::_buildSchema::__l2::&lt;lambda_d23d594c93faa932a191aeb2a429cc31&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fallentreetrunk-buildschema-l2-lambda-4230e4aa15802964594378298fc66207" tabindex="-1"><a class="header-anchor" href="#fallentreetrunk-buildschema-l2-lambda-4230e4aa15802964594378298fc66207"><span><code>FallenTreeTrunk::_buildSchema::__l2::&lt;lambda_4230e4aa15802964594378298fc66207&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FallenTreeTrunk::_buildSchema::__l2::&lt;lambda_4230e4aa15802964594378298fc66207&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fallentreetrunk-buildschema-l2-lambda-518c1cfd52d7d67cc1087ebd5b52db66" tabindex="-1"><a class="header-anchor" href="#fallentreetrunk-buildschema-l2-lambda-518c1cfd52d7d67cc1087ebd5b52db66"><span><code>FallenTreeTrunk::_buildSchema::__l2::&lt;lambda_518c1cfd52d7d67cc1087ebd5b52db66&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FallenTreeTrunk::_buildSchema::__l2::&lt;lambda_518c1cfd52d7d67cc1087ebd5b52db66&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreecanopy-buildschema-l2-lambda-cb7ec4a10ba4b27ca84cb1b64fd9c358" tabindex="-1"><a class="header-anchor" href="#fancytreecanopy-buildschema-l2-lambda-cb7ec4a10ba4b27ca84cb1b64fd9c358"><span><code>FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_cb7ec4a10ba4b27ca84cb1b64fd9c358&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_cb7ec4a10ba4b27ca84cb1b64fd9c358&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreecanopy-buildschema-l2-lambda-d4ed500b84b696c19ecc7813158d69bb" tabindex="-1"><a class="header-anchor" href="#fancytreecanopy-buildschema-l2-lambda-d4ed500b84b696c19ecc7813158d69bb"><span><code>FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_d4ed500b84b696c19ecc7813158d69bb&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_d4ed500b84b696c19ecc7813158d69bb&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreecanopy-buildschema-l2-lambda-81fb00f8ad2c715f006a288cf2fe0bea" tabindex="-1"><a class="header-anchor" href="#fancytreecanopy-buildschema-l2-lambda-81fb00f8ad2c715f006a288cf2fe0bea"><span><code>FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_81fb00f8ad2c715f006a288cf2fe0bea&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_81fb00f8ad2c715f006a288cf2fe0bea&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreecanopy-buildschema-l2-lambda-76f0485190b36fafa76c876871860465" tabindex="-1"><a class="header-anchor" href="#fancytreecanopy-buildschema-l2-lambda-76f0485190b36fafa76c876871860465"><span><code>FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_76f0485190b36fafa76c876871860465&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_76f0485190b36fafa76c876871860465&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreecanopy-buildschema-l2-lambda-a5d461c60888e14d2aced4024ac51395" tabindex="-1"><a class="header-anchor" href="#fancytreecanopy-buildschema-l2-lambda-a5d461c60888e14d2aced4024ac51395"><span><code>FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_a5d461c60888e14d2aced4024ac51395&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_a5d461c60888e14d2aced4024ac51395&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreecanopy-buildschema-l2-lambda-8cdc6bcfad6b6844464baf3141d53483" tabindex="-1"><a class="header-anchor" href="#fancytreecanopy-buildschema-l2-lambda-8cdc6bcfad6b6844464baf3141d53483"><span><code>FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_8cdc6bcfad6b6844464baf3141d53483&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_8cdc6bcfad6b6844464baf3141d53483&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreecanopy-buildschema-l2-lambda-ec2fe568d80a81eac12264f0eca2973a" tabindex="-1"><a class="header-anchor" href="#fancytreecanopy-buildschema-l2-lambda-ec2fe568d80a81eac12264f0eca2973a"><span><code>FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_ec2fe568d80a81eac12264f0eca2973a&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_ec2fe568d80a81eac12264f0eca2973a&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreecanopy-buildschema-l2-lambda-8ea7fad782b488b185fdc0092687b04f" tabindex="-1"><a class="header-anchor" href="#fancytreecanopy-buildschema-l2-lambda-8ea7fad782b488b185fdc0092687b04f"><span><code>FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_8ea7fad782b488b185fdc0092687b04f&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_8ea7fad782b488b185fdc0092687b04f&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreecanopy-buildschema-l2-lambda-e6946f9cef82b02c4964b095f9aecee7" tabindex="-1"><a class="header-anchor" href="#fancytreecanopy-buildschema-l2-lambda-e6946f9cef82b02c4964b095f9aecee7"><span><code>FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_e6946f9cef82b02c4964b095f9aecee7&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_e6946f9cef82b02c4964b095f9aecee7&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fitdoublexyroom" tabindex="-1"><a class="header-anchor" href="#fitdoublexyroom"><span><code>FitDoubleXYRoom</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FitDoubleXYRoom : MonumentRoomFitter</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fitdoublexyroom-vtbl" tabindex="-1"><a class="header-anchor" href="#fitdoublexyroom-vtbl"><span><code>FitDoubleXYRoom_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FitDoubleXYRoom_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~MonumentRoomFitter)(MonumentRoomFitter *this);</span>
<span class="line">  bool (__fastcall *fits)(MonumentRoomFitter *this, const RoomDefinition *);</span>
<span class="line">  std::unique_ptr&lt;OceanMonumentPiece&gt; *(__fastcall *create)(MonumentRoomFitter *this, std::unique_ptr&lt;OceanMonumentPiece&gt; *result, int *, std::shared_ptr&lt;RoomDefinition&gt;, Random *);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fitdoubleyzroom" tabindex="-1"><a class="header-anchor" href="#fitdoubleyzroom"><span><code>FitDoubleYZRoom</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FitDoubleYZRoom : MonumentRoomFitter</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fitdoubleyzroom-vtbl" tabindex="-1"><a class="header-anchor" href="#fitdoubleyzroom-vtbl"><span><code>FitDoubleYZRoom_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FitDoubleYZRoom_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~MonumentRoomFitter)(MonumentRoomFitter *this);</span>
<span class="line">  bool (__fastcall *fits)(MonumentRoomFitter *this, const RoomDefinition *);</span>
<span class="line">  std::unique_ptr&lt;OceanMonumentPiece&gt; *(__fastcall *create)(MonumentRoomFitter *this, std::unique_ptr&lt;OceanMonumentPiece&gt; *result, int *, std::shared_ptr&lt;RoomDefinition&gt;, Random *);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fitdoublezroom" tabindex="-1"><a class="header-anchor" href="#fitdoublezroom"><span><code>FitDoubleZRoom</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FitDoubleZRoom : MonumentRoomFitter</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fitdoublezroom-vtbl" tabindex="-1"><a class="header-anchor" href="#fitdoublezroom-vtbl"><span><code>FitDoubleZRoom_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FitDoubleZRoom_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~MonumentRoomFitter)(MonumentRoomFitter *this);</span>
<span class="line">  bool (__fastcall *fits)(MonumentRoomFitter *this, const RoomDefinition *);</span>
<span class="line">  std::unique_ptr&lt;OceanMonumentPiece&gt; *(__fastcall *create)(MonumentRoomFitter *this, std::unique_ptr&lt;OceanMonumentPiece&gt; *result, int *, std::shared_ptr&lt;RoomDefinition&gt;, Random *);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fitdoublexroom" tabindex="-1"><a class="header-anchor" href="#fitdoublexroom"><span><code>FitDoubleXRoom</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FitDoubleXRoom : MonumentRoomFitter</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fitdoublexroom-vtbl" tabindex="-1"><a class="header-anchor" href="#fitdoublexroom-vtbl"><span><code>FitDoubleXRoom_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FitDoubleXRoom_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~MonumentRoomFitter)(MonumentRoomFitter *this);</span>
<span class="line">  bool (__fastcall *fits)(MonumentRoomFitter *this, const RoomDefinition *);</span>
<span class="line">  std::unique_ptr&lt;OceanMonumentPiece&gt; *(__fastcall *create)(MonumentRoomFitter *this, std::unique_ptr&lt;OceanMonumentPiece&gt; *result, int *, std::shared_ptr&lt;RoomDefinition&gt;, Random *);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fitdoubleyroom" tabindex="-1"><a class="header-anchor" href="#fitdoubleyroom"><span><code>FitDoubleYRoom</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FitDoubleYRoom : MonumentRoomFitter</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fitdoubleyroom-vtbl" tabindex="-1"><a class="header-anchor" href="#fitdoubleyroom-vtbl"><span><code>FitDoubleYRoom_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FitDoubleYRoom_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~MonumentRoomFitter)(MonumentRoomFitter *this);</span>
<span class="line">  bool (__fastcall *fits)(MonumentRoomFitter *this, const RoomDefinition *);</span>
<span class="line">  std::unique_ptr&lt;OceanMonumentPiece&gt; *(__fastcall *create)(MonumentRoomFitter *this, std::unique_ptr&lt;OceanMonumentPiece&gt; *result, int *, std::shared_ptr&lt;RoomDefinition&gt;, Random *);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fitsimpletoproom" tabindex="-1"><a class="header-anchor" href="#fitsimpletoproom"><span><code>FitSimpleTopRoom</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FitSimpleTopRoom : MonumentRoomFitter</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fitsimpletoproom-vtbl" tabindex="-1"><a class="header-anchor" href="#fitsimpletoproom-vtbl"><span><code>FitSimpleTopRoom_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FitSimpleTopRoom_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~MonumentRoomFitter)(MonumentRoomFitter *this);</span>
<span class="line">  bool (__fastcall *fits)(MonumentRoomFitter *this, const RoomDefinition *);</span>
<span class="line">  std::unique_ptr&lt;OceanMonumentPiece&gt; *(__fastcall *create)(MonumentRoomFitter *this, std::unique_ptr&lt;OceanMonumentPiece&gt; *result, int *, std::shared_ptr&lt;RoomDefinition&gt;, Random *);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fitsimpleroom" tabindex="-1"><a class="header-anchor" href="#fitsimpleroom"><span><code>FitSimpleRoom</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FitSimpleRoom : MonumentRoomFitter</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fitsimpleroom-vtbl" tabindex="-1"><a class="header-anchor" href="#fitsimpleroom-vtbl"><span><code>FitSimpleRoom_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FitSimpleRoom_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~MonumentRoomFitter)(MonumentRoomFitter *this);</span>
<span class="line">  bool (__fastcall *fits)(MonumentRoomFitter *this, const RoomDefinition *);</span>
<span class="line">  std::unique_ptr&lt;OceanMonumentPiece&gt; *(__fastcall *create)(MonumentRoomFitter *this, std::unique_ptr&lt;OceanMonumentPiece&gt; *result, int *, std::shared_ptr&lt;RoomDefinition&gt;, Random *);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-addisland" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-addisland"><span><code>FilterLayer&lt;LayerFilters::AddIsland&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj __declspec(align(8)) FilterLayer&lt;LayerFilters::AddIsland&gt; : MixerLayer&lt;enum LayerValues::Terrain,enum LayerValues::Terrain&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::AddIsland mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-addisland-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-addisland-vtbl"><span><code>FilterLayer&lt;LayerFilters::AddIsland&gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::AddIsland&gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;enum LayerValues::Terrain&gt; *(__fastcall *_allocateAndFill)(Layer&lt;enum LayerValues::Terrain&gt; *this, LayerDetails::TransferData&lt;enum LayerValues::Terrain&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;enum LayerValues::Terrain,enum LayerValues::Terrain&gt; *this, LayerDetails::WorkingData&lt;enum LayerValues::Terrain,enum LayerValues::Terrain&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;enum LayerValues::Terrain,enum LayerValues::Terrain&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-removetoomuchocean" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-removetoomuchocean"><span><code>FilterLayer&lt;LayerFilters::RemoveTooMuchOcean&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj __declspec(align(8)) FilterLayer&lt;LayerFilters::RemoveTooMuchOcean&gt; : MixerLayer&lt;enum LayerValues::Terrain,enum LayerValues::Terrain&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::RemoveTooMuchOcean mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-removetoomuchocean-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-removetoomuchocean-vtbl"><span><code>FilterLayer&lt;LayerFilters::RemoveTooMuchOcean&gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::RemoveTooMuchOcean&gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;enum LayerValues::Terrain&gt; *(__fastcall *_allocateAndFill)(Layer&lt;enum LayerValues::Terrain&gt; *this, LayerDetails::TransferData&lt;enum LayerValues::Terrain&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;enum LayerValues::Terrain,enum LayerValues::Terrain&gt; *this, LayerDetails::WorkingData&lt;enum LayerValues::Terrain,enum LayerValues::Terrain&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;enum LayerValues::Terrain,enum LayerValues::Terrain&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-addsnow" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-addsnow"><span><code>FilterLayer&lt;LayerFilters::AddSnow&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj __declspec(align(8)) FilterLayer&lt;LayerFilters::AddSnow&gt; : MixerLayer&lt;LayerValues::PreBiome,enum LayerValues::Terrain&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::AddSnow mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-addsnow-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-addsnow-vtbl"><span><code>FilterLayer&lt;LayerFilters::AddSnow&gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::AddSnow&gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;LayerValues::PreBiome&gt; *(__fastcall *_allocateAndFill)(Layer&lt;LayerValues::PreBiome&gt; *this, LayerDetails::TransferData&lt;LayerValues::PreBiome&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;LayerValues::PreBiome,enum LayerValues::Terrain&gt; *this, LayerDetails::WorkingData&lt;LayerValues::PreBiome,enum LayerValues::Terrain&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;LayerValues::PreBiome,enum LayerValues::Terrain&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-addislandwithtemperature" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-addislandwithtemperature"><span><code>FilterLayer&lt;LayerFilters::AddIslandWithTemperature&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj __declspec(align(8)) FilterLayer&lt;LayerFilters::AddIslandWithTemperature&gt; : MixerLayer&lt;LayerValues::PreBiome,LayerValues::PreBiome&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::AddIslandWithTemperature mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-addislandwithtemperature-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-addislandwithtemperature-vtbl"><span><code>FilterLayer&lt;LayerFilters::AddIslandWithTemperature&gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::AddIslandWithTemperature&gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;LayerValues::PreBiome&gt; *(__fastcall *_allocateAndFill)(Layer&lt;LayerValues::PreBiome&gt; *this, LayerDetails::TransferData&lt;LayerValues::PreBiome&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;LayerValues::PreBiome,LayerValues::PreBiome&gt; *this, LayerDetails::WorkingData&lt;LayerValues::PreBiome,LayerValues::PreBiome&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;LayerValues::PreBiome,LayerValues::PreBiome&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-addedgecoolwarm" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-addedgecoolwarm"><span><code>FilterLayer&lt;LayerFilters::AddEdgeCoolWarm&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj __declspec(align(8)) FilterLayer&lt;LayerFilters::AddEdgeCoolWarm&gt; : MixerLayer&lt;LayerValues::PreBiome,LayerValues::PreBiome&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::AddEdgeCoolWarm mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-addedgecoolwarm-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-addedgecoolwarm-vtbl"><span><code>FilterLayer&lt;LayerFilters::AddEdgeCoolWarm&gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::AddEdgeCoolWarm&gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;LayerValues::PreBiome&gt; *(__fastcall *_allocateAndFill)(Layer&lt;LayerValues::PreBiome&gt; *this, LayerDetails::TransferData&lt;LayerValues::PreBiome&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;LayerValues::PreBiome,LayerValues::PreBiome&gt; *this, LayerDetails::WorkingData&lt;LayerValues::PreBiome,LayerValues::PreBiome&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;LayerValues::PreBiome,LayerValues::PreBiome&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-addedgeheatice" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-addedgeheatice"><span><code>FilterLayer&lt;LayerFilters::AddEdgeHeatIce&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj __declspec(align(8)) FilterLayer&lt;LayerFilters::AddEdgeHeatIce&gt; : MixerLayer&lt;LayerValues::PreBiome,LayerValues::PreBiome&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::AddEdgeHeatIce mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-addedgeheatice-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-addedgeheatice-vtbl"><span><code>FilterLayer&lt;LayerFilters::AddEdgeHeatIce&gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::AddEdgeHeatIce&gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;LayerValues::PreBiome&gt; *(__fastcall *_allocateAndFill)(Layer&lt;LayerValues::PreBiome&gt; *this, LayerDetails::TransferData&lt;LayerValues::PreBiome&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;LayerValues::PreBiome,LayerValues::PreBiome&gt; *this, LayerDetails::WorkingData&lt;LayerValues::PreBiome,LayerValues::PreBiome&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;LayerValues::PreBiome,LayerValues::PreBiome&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-addedgespecial" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-addedgespecial"><span><code>FilterLayer&lt;LayerFilters::AddEdgeSpecial&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj __declspec(align(8)) FilterLayer&lt;LayerFilters::AddEdgeSpecial&gt; : MixerLayer&lt;LayerValues::PreBiome,LayerValues::PreBiome&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::AddEdgeSpecial mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-addedgespecial-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-addedgespecial-vtbl"><span><code>FilterLayer&lt;LayerFilters::AddEdgeSpecial&gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::AddEdgeSpecial&gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;LayerValues::PreBiome&gt; *(__fastcall *_allocateAndFill)(Layer&lt;LayerValues::PreBiome&gt; *this, LayerDetails::TransferData&lt;LayerValues::PreBiome&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;LayerValues::PreBiome,LayerValues::PreBiome&gt; *this, LayerDetails::WorkingData&lt;LayerValues::PreBiome,LayerValues::PreBiome&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;LayerValues::PreBiome,LayerValues::PreBiome&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-biomeinit" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-biomeinit"><span><code>FilterLayer&lt;LayerFilters::BiomeInit&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FilterLayer&lt;LayerFilters::BiomeInit&gt; : MixerLayer&lt;Biome *,LayerValues::PreBiome&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::BiomeInit mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-biomeinit-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-biomeinit-vtbl"><span><code>FilterLayer&lt;LayerFilters::BiomeInit&gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::BiomeInit&gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;Biome *&gt; *(__fastcall *_allocateAndFill)(Layer&lt;Biome *&gt; *this, LayerDetails::TransferData&lt;Biome *&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;Biome *,LayerValues::PreBiome&gt; *this, LayerDetails::WorkingData&lt;Biome *,LayerValues::PreBiome&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;Biome *,LayerValues::PreBiome&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-addmushroomisland" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-addmushroomisland"><span><code>FilterLayer&lt;LayerFilters::AddMushroomIsland&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FilterLayer&lt;LayerFilters::AddMushroomIsland&gt; : MixerLayer&lt;Biome *,Biome *&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::AddMushroomIsland mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-addmushroomisland-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-addmushroomisland-vtbl"><span><code>FilterLayer&lt;LayerFilters::AddMushroomIsland&gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::AddMushroomIsland&gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;Biome *&gt; *(__fastcall *_allocateAndFill)(Layer&lt;Biome *&gt; *this, LayerDetails::TransferData&lt;Biome *&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;Biome *,Biome *&gt; *this, LayerDetails::WorkingData&lt;Biome *,Biome *&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;Biome *,Biome *&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-promotecenter" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-promotecenter"><span><code>FilterLayer&lt;LayerFilters::PromoteCenter&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FilterLayer&lt;LayerFilters::PromoteCenter&gt; : MixerLayer&lt;Biome *,Biome *&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::PromoteCenter mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-promotecenter-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-promotecenter-vtbl"><span><code>FilterLayer&lt;LayerFilters::PromoteCenter&gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::PromoteCenter&gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;Biome *&gt; *(__fastcall *_allocateAndFill)(Layer&lt;Biome *&gt; *this, LayerDetails::TransferData&lt;Biome *&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;Biome *,Biome *&gt; *this, LayerDetails::WorkingData&lt;Biome *,Biome *&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;Biome *,Biome *&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-riverinit" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-riverinit"><span><code>FilterLayer&lt;LayerFilters::RiverInit&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FilterLayer&lt;LayerFilters::RiverInit&gt; : MixerLayer&lt;int,Biome *&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::RiverInit mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-riverinit-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-riverinit-vtbl"><span><code>FilterLayer&lt;LayerFilters::RiverInit&gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::RiverInit&gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;int&gt; *(__fastcall *_allocateAndFill)(Layer&lt;int&gt; *this, LayerDetails::TransferData&lt;int&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;int,Biome *&gt; *this, LayerDetails::WorkingData&lt;int,Biome *&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;int,Biome *&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-river" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-river"><span><code>FilterLayer&lt;LayerFilters::River&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj __declspec(align(8)) FilterLayer&lt;LayerFilters::River&gt; : MixerLayer&lt;bool,int&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::River mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-river-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-river-vtbl"><span><code>FilterLayer&lt;LayerFilters::River&gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::River&gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;bool&gt; *(__fastcall *_allocateAndFill)(Layer&lt;bool&gt; *this, LayerDetails::TransferData&lt;bool&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;bool,int&gt; *this, LayerDetails::WorkingData&lt;bool,int&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;bool,int&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-smooth-bool" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-smooth-bool"><span><code>FilterLayer&lt;LayerFilters::Smooth&lt;bool&gt; &gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj __declspec(align(8)) FilterLayer&lt;LayerFilters::Smooth&lt;bool&gt; &gt; : MixerLayer&lt;bool,bool&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::Smooth&lt;bool&gt; mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-smooth-bool-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-smooth-bool-vtbl"><span><code>FilterLayer&lt;LayerFilters::Smooth&lt;bool&gt; &gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::Smooth&lt;bool&gt; &gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;bool&gt; *(__fastcall *_allocateAndFill)(Layer&lt;bool&gt; *this, LayerDetails::TransferData&lt;bool&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;bool,bool&gt; *this, LayerDetails::WorkingData&lt;bool,bool&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;bool,bool&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-rarebiomespot" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-rarebiomespot"><span><code>FilterLayer&lt;LayerFilters::RareBiomeSpot&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FilterLayer&lt;LayerFilters::RareBiomeSpot&gt; : MixerLayer&lt;Biome *,Biome *&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::RareBiomeSpot mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-rarebiomespot-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-rarebiomespot-vtbl"><span><code>FilterLayer&lt;LayerFilters::RareBiomeSpot&gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::RareBiomeSpot&gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;Biome *&gt; *(__fastcall *_allocateAndFill)(Layer&lt;Biome *&gt; *this, LayerDetails::TransferData&lt;Biome *&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;Biome *,Biome *&gt; *this, LayerDetails::WorkingData&lt;Biome *,Biome *&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;Biome *,Biome *&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-prehillsedgetransformation" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-prehillsedgetransformation"><span><code>FilterLayer&lt;LayerFilters::FilteredTransformation&lt;FilteredTransformationAttributes&lt;PreHillsEdgeTransformation&gt; &gt; &gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FilterLayer&lt;LayerFilters::FilteredTransformation&lt;FilteredTransformationAttributes&lt;PreHillsEdgeTransformation&gt; &gt; &gt; : MixerLayer&lt;Biome *,Biome *&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::FilteredTransformation&lt;FilteredTransformationAttributes&lt;PreHillsEdgeTransformation&gt; &gt; mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-prehillsedgetransformation-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-prehillsedgetransformation-vtbl"><span><code>FilterLayer&lt;LayerFilters::FilteredTransformation&lt;FilteredTransformationAttributes&lt;PreHillsEdgeTransformation&gt; &gt; &gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::FilteredTransformation&lt;FilteredTransformationAttributes&lt;PreHillsEdgeTransformation&gt; &gt; &gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;Biome *&gt; *(__fastcall *_allocateAndFill)(Layer&lt;Biome *&gt; *this, LayerDetails::TransferData&lt;Biome *&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;Biome *,Biome *&gt; *this, LayerDetails::WorkingData&lt;Biome *,Biome *&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;Biome *,Biome *&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-legacyprehillsedgetransformation" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-legacyprehillsedgetransformation"><span><code>FilterLayer&lt;LayerFilters::FilteredTransformation&lt;FilteredTransformationAttributes&lt;LegacyPreHillsEdgeTransformation&gt; &gt; &gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FilterLayer&lt;LayerFilters::FilteredTransformation&lt;FilteredTransformationAttributes&lt;LegacyPreHillsEdgeTransformation&gt; &gt; &gt; : MixerLayer&lt;Biome *,Biome *&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::FilteredTransformation&lt;FilteredTransformationAttributes&lt;LegacyPreHillsEdgeTransformation&gt; &gt; mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-legacyprehillsedgetransformation-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-legacyprehillsedgetransformation-vtbl"><span><code>FilterLayer&lt;LayerFilters::FilteredTransformation&lt;FilteredTransformationAttributes&lt;LegacyPreHillsEdgeTransformation&gt; &gt; &gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::FilteredTransformation&lt;FilteredTransformationAttributes&lt;LegacyPreHillsEdgeTransformation&gt; &gt; &gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;Biome *&gt; *(__fastcall *_allocateAndFill)(Layer&lt;Biome *&gt; *this, LayerDetails::TransferData&lt;Biome *&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;Biome *,Biome *&gt; *this, LayerDetails::WorkingData&lt;Biome *,Biome *&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;Biome *,Biome *&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-addbiomeisland" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-addbiomeisland"><span><code>FilterLayer&lt;LayerFilters::AddBiomeIsland&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FilterLayer&lt;LayerFilters::AddBiomeIsland&gt; : MixerLayer&lt;Biome *,Biome *&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::AddBiomeIsland mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-addbiomeisland-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-addbiomeisland-vtbl"><span><code>FilterLayer&lt;LayerFilters::AddBiomeIsland&gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::AddBiomeIsland&gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;Biome *&gt; *(__fastcall *_allocateAndFill)(Layer&lt;Biome *&gt; *this, LayerDetails::TransferData&lt;Biome *&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;Biome *,Biome *&gt; *this, LayerDetails::WorkingData&lt;Biome *,Biome *&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;Biome *,Biome *&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-shore" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-shore"><span><code>FilterLayer&lt;LayerFilters::Shore&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FilterLayer&lt;LayerFilters::Shore&gt; : MixerLayer&lt;Biome *,Biome *&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::Shore mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-shore-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-shore-vtbl"><span><code>FilterLayer&lt;LayerFilters::Shore&gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::Shore&gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;Biome *&gt; *(__fastcall *_allocateAndFill)(Layer&lt;Biome *&gt; *this, LayerDetails::TransferData&lt;Biome *&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;Biome *,Biome *&gt; *this, LayerDetails::WorkingData&lt;Biome *,Biome *&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;Biome *,Biome *&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-postshoreedgetransformation" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-postshoreedgetransformation"><span><code>FilterLayer&lt;LayerFilters::FilteredTransformation&lt;FilteredTransformationAttributes&lt;PostShoreEdgeTransformation&gt; &gt; &gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FilterLayer&lt;LayerFilters::FilteredTransformation&lt;FilteredTransformationAttributes&lt;PostShoreEdgeTransformation&gt; &gt; &gt; : MixerLayer&lt;Biome *,Biome *&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::FilteredTransformation&lt;FilteredTransformationAttributes&lt;PostShoreEdgeTransformation&gt; &gt; mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-postshoreedgetransformation-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-postshoreedgetransformation-vtbl"><span><code>FilterLayer&lt;LayerFilters::FilteredTransformation&lt;FilteredTransformationAttributes&lt;PostShoreEdgeTransformation&gt; &gt; &gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::FilteredTransformation&lt;FilteredTransformationAttributes&lt;PostShoreEdgeTransformation&gt; &gt; &gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;Biome *&gt; *(__fastcall *_allocateAndFill)(Layer&lt;Biome *&gt; *this, LayerDetails::TransferData&lt;Biome *&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;Biome *,Biome *&gt; *this, LayerDetails::WorkingData&lt;Biome *,Biome *&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;Biome *,Biome *&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-smooth-biome" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-smooth-biome"><span><code>FilterLayer&lt;LayerFilters::Smooth&lt;Biome *&gt; &gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj __declspec(align(8)) FilterLayer&lt;LayerFilters::Smooth&lt;Biome *&gt; &gt; : MixerLayer&lt;Biome *,Biome *&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::Smooth&lt;Biome *&gt; mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-smooth-biome-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-smooth-biome-vtbl"><span><code>FilterLayer&lt;LayerFilters::Smooth&lt;Biome *&gt; &gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::Smooth&lt;Biome *&gt; &gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;Biome *&gt; *(__fastcall *_allocateAndFill)(Layer&lt;Biome *&gt; *this, LayerDetails::TransferData&lt;Biome *&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;Biome *,Biome *&gt; *this, LayerDetails::WorkingData&lt;Biome *,Biome *&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;Biome *,Biome *&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-addoceanedge" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-addoceanedge"><span><code>FilterLayer&lt;LayerFilters::AddOceanEdge&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj __declspec(align(8)) FilterLayer&lt;LayerFilters::AddOceanEdge&gt; : MixerLayer&lt;enum BiomeTemperatureCategory,enum BiomeTemperatureCategory&gt;</span>
<span class="line">{</span>
<span class="line">  LayerFilters::AddOceanEdge mFilter;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filterlayer-layerfilters-addoceanedge-vtbl" tabindex="-1"><a class="header-anchor" href="#filterlayer-layerfilters-addoceanedge-vtbl"><span><code>FilterLayer&lt;LayerFilters::AddOceanEdge&gt;_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FilterLayer&lt;LayerFilters::AddOceanEdge&gt;_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~LayerBase)(LayerDetails::LayerBase *this);</span>
<span class="line">  void (__fastcall *init)(LayerDetails::LayerBase *this, __int64);</span>
<span class="line">  LayerDetails::TransferData&lt;enum BiomeTemperatureCategory&gt; *(__fastcall *_allocateAndFill)(Layer&lt;enum BiomeTemperatureCategory&gt; *this, LayerDetails::TransferData&lt;enum BiomeTemperatureCategory&gt; *result, unsigned __int64, int, int, unsigned int, unsigned int);</span>
<span class="line">  void (__fastcall *_fillArea)(MixerLayer&lt;enum BiomeTemperatureCategory,enum BiomeTemperatureCategory&gt; *this, LayerDetails::WorkingData&lt;enum BiomeTemperatureCategory,enum BiomeTemperatureCategory&gt; *, int, int, int, int, int);</span>
<span class="line">  std::tuple&lt;int,int,unsigned int,unsigned int&gt; *(__fastcall *_getAreaRead)(MixerLayer&lt;enum BiomeTemperatureCategory,enum BiomeTemperatureCategory&gt; *this, std::tuple&lt;int,int,unsigned int,unsigned int&gt; *result, int, int, unsigned int, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-vector" tabindex="-1"><a class="header-anchor" href="#fmod-vector"><span><code>FMOD_VECTOR</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_VECTOR</span>
<span class="line">{</span>
<span class="line">  float x;</span>
<span class="line">  float y;</span>
<span class="line">  float z;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-codec-waveformat" tabindex="-1"><a class="header-anchor" href="#fmod-codec-waveformat"><span><code>FMOD_CODEC_WAVEFORMAT</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_CODEC_WAVEFORMAT</span>
<span class="line">{</span>
<span class="line">  const char *name;</span>
<span class="line">  FMOD_SOUND_FORMAT format;</span>
<span class="line">  int channels;</span>
<span class="line">  int frequency;</span>
<span class="line">  unsigned int lengthbytes;</span>
<span class="line">  unsigned int lengthpcm;</span>
<span class="line">  unsigned int pcmblocksize;</span>
<span class="line">  int loopstart;</span>
<span class="line">  int loopend;</span>
<span class="line">  unsigned int mode;</span>
<span class="line">  unsigned int channelmask;</span>
<span class="line">  FMOD_CHANNELORDER channelorder;</span>
<span class="line">  float peakvolume;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-codec-state" tabindex="-1"><a class="header-anchor" href="#fmod-codec-state"><span><code>FMOD_CODEC_STATE</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __declspec(align(8)) FMOD_CODEC_STATE</span>
<span class="line">{</span>
<span class="line">  int numsubsounds;</span>
<span class="line">  FMOD_CODEC_WAVEFORMAT *waveformat;</span>
<span class="line">  void *plugindata;</span>
<span class="line">  void *filehandle;</span>
<span class="line">  unsigned int filesize;</span>
<span class="line">  FMOD_RESULT (__fastcall *fileread)(void *, void *, unsigned int, unsigned int *, void *);</span>
<span class="line">  FMOD_RESULT (__fastcall *fileseek)(void *, unsigned int, void *);</span>
<span class="line">  FMOD_RESULT (__fastcall *metadata)(FMOD_CODEC_STATE *, FMOD_TAGTYPE, char *, void *, unsigned int, FMOD_TAGDATATYPE, int);</span>
<span class="line">  int waveformatversion;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-dsp-state" tabindex="-1"><a class="header-anchor" href="#fmod-dsp-state"><span><code>FMOD_DSP_STATE</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __declspec(align(8)) FMOD_DSP_STATE</span>
<span class="line">{</span>
<span class="line">  struct FMOD_DSP *instance;</span>
<span class="line">  void *plugindata;</span>
<span class="line">  unsigned int channelmask;</span>
<span class="line">  FMOD_SPEAKERMODE source_speakermode;</span>
<span class="line">  float *sidechaindata;</span>
<span class="line">  int sidechainchannels;</span>
<span class="line">  FMOD_DSP_STATE_FUNCTIONS *functions;</span>
<span class="line">  int systemobject;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-complex" tabindex="-1"><a class="header-anchor" href="#fmod-complex"><span><code>FMOD_COMPLEX</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_COMPLEX</span>
<span class="line">{</span>
<span class="line">  float real;</span>
<span class="line">  float imag;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-dsp-state-dft-functions" tabindex="-1"><a class="header-anchor" href="#fmod-dsp-state-dft-functions"><span><code>FMOD_DSP_STATE_DFT_FUNCTIONS</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_DSP_STATE_DFT_FUNCTIONS</span>
<span class="line">{</span>
<span class="line">  FMOD_RESULT (__fastcall *fftreal)(FMOD_DSP_STATE *, int, const float *, FMOD_COMPLEX *, const float *, int);</span>
<span class="line">  FMOD_RESULT (__fastcall *inversefftreal)(FMOD_DSP_STATE *, int, const FMOD_COMPLEX *, float *, const float *, int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-dsp-state-pan-functions" tabindex="-1"><a class="header-anchor" href="#fmod-dsp-state-pan-functions"><span><code>FMOD_DSP_STATE_PAN_FUNCTIONS</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_DSP_STATE_PAN_FUNCTIONS</span>
<span class="line">{</span>
<span class="line">  FMOD_RESULT (__fastcall *summonomatrix)(FMOD_DSP_STATE *, int, float, float, float *);</span>
<span class="line">  FMOD_RESULT (__fastcall *sumstereomatrix)(FMOD_DSP_STATE *, int, float, float, float, int, float *);</span>
<span class="line">  FMOD_RESULT (__fastcall *sumsurroundmatrix)(FMOD_DSP_STATE *, int, int, float, float, float, float, float, int, float *, FMOD_DSP_PAN_SURROUND_FLAGS);</span>
<span class="line">  FMOD_RESULT (__fastcall *summonotosurroundmatrix)(FMOD_DSP_STATE *, int, float, float, float, float, int, float *);</span>
<span class="line">  FMOD_RESULT (__fastcall *sumstereotosurroundmatrix)(FMOD_DSP_STATE *, int, float, float, float, float, float, int, float *);</span>
<span class="line">  FMOD_RESULT (__fastcall *getrolloffgain)(FMOD_DSP_STATE *, FMOD_DSP_PAN_3D_ROLLOFF_TYPE, float, float, float, float *);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-3d-attributes" tabindex="-1"><a class="header-anchor" href="#fmod-3d-attributes"><span><code>FMOD_3D_ATTRIBUTES</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_3D_ATTRIBUTES</span>
<span class="line">{</span>
<span class="line">  FMOD_VECTOR position;</span>
<span class="line">  FMOD_VECTOR velocity;</span>
<span class="line">  FMOD_VECTOR forward;</span>
<span class="line">  FMOD_VECTOR up;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-dsp-state-functions" tabindex="-1"><a class="header-anchor" href="#fmod-dsp-state-functions"><span><code>FMOD_DSP_STATE_FUNCTIONS</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_DSP_STATE_FUNCTIONS</span>
<span class="line">{</span>
<span class="line">  void *(__fastcall *alloc)(unsigned int, unsigned int, const char *);</span>
<span class="line">  void *(__fastcall *realloc)(void *, unsigned int, unsigned int, const char *);</span>
<span class="line">  void (__fastcall *free)(void *, unsigned int, const char *);</span>
<span class="line">  FMOD_RESULT (__fastcall *getsamplerate)(FMOD_DSP_STATE *, int *);</span>
<span class="line">  FMOD_RESULT (__fastcall *getblocksize)(FMOD_DSP_STATE *, unsigned int *);</span>
<span class="line">  FMOD_DSP_STATE_DFT_FUNCTIONS *dft;</span>
<span class="line">  FMOD_DSP_STATE_PAN_FUNCTIONS *pan;</span>
<span class="line">  FMOD_RESULT (__fastcall *getspeakermode)(FMOD_DSP_STATE *, FMOD_SPEAKERMODE *, FMOD_SPEAKERMODE *);</span>
<span class="line">  FMOD_RESULT (__fastcall *getclock)(FMOD_DSP_STATE *, unsigned __int64 *, unsigned int *, unsigned int *);</span>
<span class="line">  FMOD_RESULT (__fastcall *getlistenerattributes)(FMOD_DSP_STATE *, int *, FMOD_3D_ATTRIBUTES *);</span>
<span class="line">  void (*log)(unsigned int, const char *, int, const char *, const char *, ...);</span>
<span class="line">  FMOD_RESULT (__fastcall *getuserdata)(FMOD_DSP_STATE *, void **);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-dsp-buffer-array" tabindex="-1"><a class="header-anchor" href="#fmod-dsp-buffer-array"><span><code>FMOD_DSP_BUFFER_ARRAY</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __declspec(align(8)) FMOD_DSP_BUFFER_ARRAY</span>
<span class="line">{</span>
<span class="line">  int numbuffers;</span>
<span class="line">  int *buffernumchannels;</span>
<span class="line">  unsigned int *bufferchannelmask;</span>
<span class="line">  float **buffers;</span>
<span class="line">  FMOD_SPEAKERMODE speakermode;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-output-state" tabindex="-1"><a class="header-anchor" href="#fmod-output-state"><span><code>FMOD_OUTPUT_STATE</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_OUTPUT_STATE</span>
<span class="line">{</span>
<span class="line">  void *plugindata;</span>
<span class="line">  FMOD_RESULT (__fastcall *readfrommixer)(FMOD_OUTPUT_STATE *, void *, unsigned int);</span>
<span class="line">  void *(__fastcall *alloc)(unsigned int, unsigned int, const char *, int);</span>
<span class="line">  void (__fastcall *free)(void *, const char *, int);</span>
<span class="line">  void (*log)(unsigned int, const char *, int, const char *, const char *, ...);</span>
<span class="line">  FMOD_RESULT (__fastcall *copyport)(FMOD_OUTPUT_STATE *, int, void *, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-output-object3dinfo" tabindex="-1"><a class="header-anchor" href="#fmod-output-object3dinfo"><span><code>FMOD_OUTPUT_OBJECT3DINFO</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __declspec(align(8)) FMOD_OUTPUT_OBJECT3DINFO</span>
<span class="line">{</span>
<span class="line">  float *buffer;</span>
<span class="line">  unsigned int bufferlength;</span>
<span class="line">  FMOD_VECTOR position;</span>
<span class="line">  float gain;</span>
<span class="line">  float spread;</span>
<span class="line">  float priority;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-advancedsettings" tabindex="-1"><a class="header-anchor" href="#fmod-advancedsettings"><span><code>FMOD_ADVANCEDSETTINGS</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_ADVANCEDSETTINGS</span>
<span class="line">{</span>
<span class="line">  int cbSize;</span>
<span class="line">  int maxMPEGCodecs;</span>
<span class="line">  int maxADPCMCodecs;</span>
<span class="line">  int maxXMACodecs;</span>
<span class="line">  int maxVorbisCodecs;</span>
<span class="line">  int maxAT9Codecs;</span>
<span class="line">  int maxFADPCMCodecs;</span>
<span class="line">  int maxPCMCodecs;</span>
<span class="line">  int ASIONumChannels;</span>
<span class="line">  char **ASIOChannelList;</span>
<span class="line">  FMOD_SPEAKER *ASIOSpeakerList;</span>
<span class="line">  float HRTFMinAngle;</span>
<span class="line">  float HRTFMaxAngle;</span>
<span class="line">  float HRTFFreq;</span>
<span class="line">  float vol0virtualvol;</span>
<span class="line">  unsigned int defaultDecodeBufferSize;</span>
<span class="line">  unsigned __int16 profilePort;</span>
<span class="line">  unsigned int geometryMaxFadeTime;</span>
<span class="line">  float distanceFilterCenterFreq;</span>
<span class="line">  int reverb3Dinstance;</span>
<span class="line">  int DSPBufferPoolSize;</span>
<span class="line">  unsigned int stackSizeStream;</span>
<span class="line">  unsigned int stackSizeNonBlocking;</span>
<span class="line">  unsigned int stackSizeMixer;</span>
<span class="line">  FMOD_DSP_RESAMPLER resamplerMethod;</span>
<span class="line">  unsigned int commandQueueSize;</span>
<span class="line">  unsigned int randomSeed;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-dsp" tabindex="-1"><a class="header-anchor" href="#fmod-dsp"><span><code>FMOD::DSP</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FMOD::DSP</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-dsp-parameter-float-mapping-piecewise-linear" tabindex="-1"><a class="header-anchor" href="#fmod-dsp-parameter-float-mapping-piecewise-linear"><span><code>FMOD_DSP_PARAMETER_FLOAT_MAPPING_PIECEWISE_LINEAR</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_DSP_PARAMETER_FLOAT_MAPPING_PIECEWISE_LINEAR</span>
<span class="line">{</span>
<span class="line">  int numpoints;</span>
<span class="line">  float *pointparamvalues;</span>
<span class="line">  float *pointpositions;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-dsp-parameter-float-mapping" tabindex="-1"><a class="header-anchor" href="#fmod-dsp-parameter-float-mapping"><span><code>FMOD_DSP_PARAMETER_FLOAT_MAPPING</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_DSP_PARAMETER_FLOAT_MAPPING</span>
<span class="line">{</span>
<span class="line">  FMOD_DSP_PARAMETER_FLOAT_MAPPING_TYPE type;</span>
<span class="line">  FMOD_DSP_PARAMETER_FLOAT_MAPPING_PIECEWISE_LINEAR piecewiselinearmapping;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-dsp-parameter-desc-float" tabindex="-1"><a class="header-anchor" href="#fmod-dsp-parameter-desc-float"><span><code>FMOD_DSP_PARAMETER_DESC_FLOAT</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_DSP_PARAMETER_DESC_FLOAT</span>
<span class="line">{</span>
<span class="line">  float min;</span>
<span class="line">  float max;</span>
<span class="line">  float defaultval;</span>
<span class="line">  FMOD_DSP_PARAMETER_FLOAT_MAPPING mapping;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-dsp-parameter-desc-int" tabindex="-1"><a class="header-anchor" href="#fmod-dsp-parameter-desc-int"><span><code>FMOD_DSP_PARAMETER_DESC_INT</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_DSP_PARAMETER_DESC_INT</span>
<span class="line">{</span>
<span class="line">  int min;</span>
<span class="line">  int max;</span>
<span class="line">  int defaultval;</span>
<span class="line">  int goestoinf;</span>
<span class="line">  const char *const *valuenames;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-dsp-parameter-desc-bool" tabindex="-1"><a class="header-anchor" href="#fmod-dsp-parameter-desc-bool"><span><code>FMOD_DSP_PARAMETER_DESC_BOOL</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_DSP_PARAMETER_DESC_BOOL</span>
<span class="line">{</span>
<span class="line">  int defaultval;</span>
<span class="line">  const char *const *valuenames;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-dsp-parameter-desc-data" tabindex="-1"><a class="header-anchor" href="#fmod-dsp-parameter-desc-data"><span><code>FMOD_DSP_PARAMETER_DESC_DATA</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_DSP_PARAMETER_DESC_DATA</span>
<span class="line">{</span>
<span class="line">  int datatype;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-dsp-parameter-desc" tabindex="-1"><a class="header-anchor" href="#fmod-dsp-parameter-desc"><span><code>FMOD_DSP_PARAMETER_DESC</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_DSP_PARAMETER_DESC</span>
<span class="line">{</span>
<span class="line">  FMOD_DSP_PARAMETER_TYPE type;</span>
<span class="line">  char name[16];</span>
<span class="line">  char label[16];</span>
<span class="line">  const char *description;</span>
<span class="line">  $F3B3E58DF3227072F0CE6F8C09D653EF ___u4;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-dsp-description" tabindex="-1"><a class="header-anchor" href="#fmod-dsp-description"><span><code>FMOD_DSP_DESCRIPTION</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_DSP_DESCRIPTION</span>
<span class="line">{</span>
<span class="line">  unsigned int pluginsdkversion;</span>
<span class="line">  char name[32];</span>
<span class="line">  unsigned int version;</span>
<span class="line">  int numinputbuffers;</span>
<span class="line">  int numoutputbuffers;</span>
<span class="line">  FMOD_RESULT (__fastcall *create)(FMOD_DSP_STATE *);</span>
<span class="line">  FMOD_RESULT (__fastcall *release)(FMOD_DSP_STATE *);</span>
<span class="line">  FMOD_RESULT (__fastcall *reset)(FMOD_DSP_STATE *);</span>
<span class="line">  FMOD_RESULT (__fastcall *read)(FMOD_DSP_STATE *, float *, float *, unsigned int, int, int *);</span>
<span class="line">  FMOD_RESULT (__fastcall *process)(FMOD_DSP_STATE *, unsigned int, const FMOD_DSP_BUFFER_ARRAY *, FMOD_DSP_BUFFER_ARRAY *, int, FMOD_DSP_PROCESS_OPERATION);</span>
<span class="line">  FMOD_RESULT (__fastcall *setposition)(FMOD_DSP_STATE *, unsigned int);</span>
<span class="line">  int numparameters;</span>
<span class="line">  FMOD_DSP_PARAMETER_DESC **paramdesc;</span>
<span class="line">  FMOD_RESULT (__fastcall *setparameterfloat)(FMOD_DSP_STATE *, int, float);</span>
<span class="line">  FMOD_RESULT (__fastcall *setparameterint)(FMOD_DSP_STATE *, int, int);</span>
<span class="line">  FMOD_RESULT (__fastcall *setparameterbool)(FMOD_DSP_STATE *, int, int);</span>
<span class="line">  FMOD_RESULT (__fastcall *setparameterdata)(FMOD_DSP_STATE *, int, void *, unsigned int);</span>
<span class="line">  FMOD_RESULT (__fastcall *getparameterfloat)(FMOD_DSP_STATE *, int, float *, char *);</span>
<span class="line">  FMOD_RESULT (__fastcall *getparameterint)(FMOD_DSP_STATE *, int, int *, char *);</span>
<span class="line">  FMOD_RESULT (__fastcall *getparameterbool)(FMOD_DSP_STATE *, int, int *, char *);</span>
<span class="line">  FMOD_RESULT (__fastcall *getparameterdata)(FMOD_DSP_STATE *, int, void **, unsigned int *, char *);</span>
<span class="line">  FMOD_RESULT (__fastcall *shouldiprocess)(FMOD_DSP_STATE *, int, unsigned int, unsigned int, int, FMOD_SPEAKERMODE);</span>
<span class="line">  void *userdata;</span>
<span class="line">  FMOD_RESULT (__fastcall *sys_register)(FMOD_DSP_STATE *);</span>
<span class="line">  FMOD_RESULT (__fastcall *sys_deregister)(FMOD_DSP_STATE *);</span>
<span class="line">  FMOD_RESULT (__fastcall *sys_mix)(FMOD_DSP_STATE *, int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-codec-description" tabindex="-1"><a class="header-anchor" href="#fmod-codec-description"><span><code>FMOD_CODEC_DESCRIPTION</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_CODEC_DESCRIPTION</span>
<span class="line">{</span>
<span class="line">  const char *name;</span>
<span class="line">  unsigned int version;</span>
<span class="line">  int defaultasstream;</span>
<span class="line">  unsigned int timeunits;</span>
<span class="line">  FMOD_RESULT (__fastcall *open)(FMOD_CODEC_STATE *, unsigned int, FMOD_CREATESOUNDEXINFO *);</span>
<span class="line">  FMOD_RESULT (__fastcall *close)(FMOD_CODEC_STATE *);</span>
<span class="line">  FMOD_RESULT (__fastcall *read)(FMOD_CODEC_STATE *, void *, unsigned int, unsigned int *);</span>
<span class="line">  FMOD_RESULT (__fastcall *getlength)(FMOD_CODEC_STATE *, unsigned int *, unsigned int);</span>
<span class="line">  FMOD_RESULT (__fastcall *setposition)(FMOD_CODEC_STATE *, int, unsigned int, unsigned int);</span>
<span class="line">  FMOD_RESULT (__fastcall *getposition)(FMOD_CODEC_STATE *, unsigned int *, unsigned int);</span>
<span class="line">  FMOD_RESULT (__fastcall *soundcreate)(FMOD_CODEC_STATE *, int, struct FMOD_SOUND *);</span>
<span class="line">  FMOD_RESULT (__fastcall *getwaveformat)(FMOD_CODEC_STATE *, int, FMOD_CODEC_WAVEFORMAT *);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-output-description" tabindex="-1"><a class="header-anchor" href="#fmod-output-description"><span><code>FMOD_OUTPUT_DESCRIPTION</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_OUTPUT_DESCRIPTION</span>
<span class="line">{</span>
<span class="line">  unsigned int apiversion;</span>
<span class="line">  const char *name;</span>
<span class="line">  unsigned int version;</span>
<span class="line">  int polling;</span>
<span class="line">  FMOD_RESULT (__fastcall *getnumdrivers)(FMOD_OUTPUT_STATE *, int *);</span>
<span class="line">  FMOD_RESULT (__fastcall *getdriverinfo)(FMOD_OUTPUT_STATE *, int, char *, int, FMOD_GUID *, int *, FMOD_SPEAKERMODE *, int *);</span>
<span class="line">  FMOD_RESULT (__fastcall *init)(FMOD_OUTPUT_STATE *, int, unsigned int, int *, FMOD_SPEAKERMODE *, int *, FMOD_SOUND_FORMAT *, int, int, void *);</span>
<span class="line">  FMOD_RESULT (__fastcall *start)(FMOD_OUTPUT_STATE *);</span>
<span class="line">  FMOD_RESULT (__fastcall *stop)(FMOD_OUTPUT_STATE *);</span>
<span class="line">  FMOD_RESULT (__fastcall *close)(FMOD_OUTPUT_STATE *);</span>
<span class="line">  FMOD_RESULT (__fastcall *update)(FMOD_OUTPUT_STATE *);</span>
<span class="line">  FMOD_RESULT (__fastcall *gethandle)(FMOD_OUTPUT_STATE *, void **);</span>
<span class="line">  FMOD_RESULT (__fastcall *getposition)(FMOD_OUTPUT_STATE *, unsigned int *);</span>
<span class="line">  FMOD_RESULT (__fastcall *lock)(FMOD_OUTPUT_STATE *, unsigned int, unsigned int, void **, void **, unsigned int *, unsigned int *);</span>
<span class="line">  FMOD_RESULT (__fastcall *unlock)(FMOD_OUTPUT_STATE *, void *, void *, unsigned int, unsigned int);</span>
<span class="line">  FMOD_RESULT (__fastcall *mixer)(FMOD_OUTPUT_STATE *);</span>
<span class="line">  FMOD_RESULT (__fastcall *object3dgetinfo)(FMOD_OUTPUT_STATE *, int *);</span>
<span class="line">  FMOD_RESULT (__fastcall *object3dalloc)(FMOD_OUTPUT_STATE *, void **);</span>
<span class="line">  FMOD_RESULT (__fastcall *object3dfree)(FMOD_OUTPUT_STATE *, void *);</span>
<span class="line">  FMOD_RESULT (__fastcall *object3dupdate)(FMOD_OUTPUT_STATE *, void *, const FMOD_OUTPUT_OBJECT3DINFO *);</span>
<span class="line">  FMOD_RESULT (__fastcall *openport)(FMOD_OUTPUT_STATE *, unsigned int, unsigned __int64, int *, int *, int *, FMOD_SOUND_FORMAT *);</span>
<span class="line">  FMOD_RESULT (__fastcall *closeport)(FMOD_OUTPUT_STATE *, int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-soundgroup" tabindex="-1"><a class="header-anchor" href="#fmod-soundgroup"><span><code>FMOD::SoundGroup</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FMOD::SoundGroup</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-reverb3d" tabindex="-1"><a class="header-anchor" href="#fmod-reverb3d"><span><code>FMOD::Reverb3D</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FMOD::Reverb3D</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-reverb-properties" tabindex="-1"><a class="header-anchor" href="#fmod-reverb-properties"><span><code>FMOD_REVERB_PROPERTIES</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_REVERB_PROPERTIES</span>
<span class="line">{</span>
<span class="line">  float DecayTime;</span>
<span class="line">  float EarlyDelay;</span>
<span class="line">  float LateDelay;</span>
<span class="line">  float HFReference;</span>
<span class="line">  float HFDecayRatio;</span>
<span class="line">  float Diffusion;</span>
<span class="line">  float Density;</span>
<span class="line">  float LowShelfFrequency;</span>
<span class="line">  float LowShelfGain;</span>
<span class="line">  float HighCut;</span>
<span class="line">  float EarlyLateMix;</span>
<span class="line">  float WetLevel;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-geometry" tabindex="-1"><a class="header-anchor" href="#fmod-geometry"><span><code>FMOD::Geometry</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FMOD::Geometry</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-dsp-metering-info" tabindex="-1"><a class="header-anchor" href="#fmod-dsp-metering-info"><span><code>FMOD_DSP_METERING_INFO</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __declspec(align(4)) FMOD_DSP_METERING_INFO</span>
<span class="line">{</span>
<span class="line">  int numsamples;</span>
<span class="line">  float peaklevel[32];</span>
<span class="line">  float rmslevel[32];</span>
<span class="line">  __int16 numchannels;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-dspconnection" tabindex="-1"><a class="header-anchor" href="#fmod-dspconnection"><span><code>FMOD::DSPConnection</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FMOD::DSPConnection</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmod-tag" tabindex="-1"><a class="header-anchor" href="#fmod-tag"><span><code>FMOD_TAG</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FMOD_TAG</span>
<span class="line">{</span>
<span class="line">  FMOD_TAGTYPE type;</span>
<span class="line">  FMOD_TAGDATATYPE datatype;</span>
<span class="line">  char *name;</span>
<span class="line">  void *data;</span>
<span class="line">  unsigned int datalen;</span>
<span class="line">  int updated;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filelistnodecontext" tabindex="-1"><a class="header-anchor" href="#filelistnodecontext"><span><code>FileListNodeContext</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj __declspec(align(8)) FileListNodeContext</span>
<span class="line">{</span>
<span class="line">  unsigned __int8 op;</span>
<span class="line">  unsigned int flnc_extraData1;</span>
<span class="line">  unsigned int flnc_extraData2;</span>
<span class="line">  unsigned int flnc_extraData3;</span>
<span class="line">  void *dataPtr;</span>
<span class="line">  unsigned int dataLength;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="file-in-zip64-read-info-s" tabindex="-1"><a class="header-anchor" href="#file-in-zip64-read-info-s"><span><code>file_in_zip64_read_info_s</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __declspec(align(8)) file_in_zip64_read_info_s</span>
<span class="line">{</span>
<span class="line">  char *read_buffer;</span>
<span class="line">  z_stream_s stream;</span>
<span class="line">  unsigned __int64 pos_in_zipfile;</span>
<span class="line">  unsigned int stream_initialised;</span>
<span class="line">  unsigned __int64 offset_local_extrafield;</span>
<span class="line">  unsigned int size_local_extrafield;</span>
<span class="line">  unsigned __int64 pos_local_extrafield;</span>
<span class="line">  unsigned __int64 total_out_64;</span>
<span class="line">  unsigned int crc32;</span>
<span class="line">  unsigned int crc32_wait;</span>
<span class="line">  unsigned __int64 rest_read_compressed;</span>
<span class="line">  unsigned __int64 rest_read_uncompressed;</span>
<span class="line">  zlib_filefunc64_32_def_s z_filefunc;</span>
<span class="line">  void *filestream;</span>
<span class="line">  unsigned int compression_method;</span>
<span class="line">  unsigned __int64 byte_before_the_zipfile;</span>
<span class="line">  int raw;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filesecurestorage-storagesystem" tabindex="-1"><a class="header-anchor" href="#filesecurestorage-storagesystem"><span><code>FileSecureStorage::StorageSystem</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FileSecureStorage::StorageSystem</span>
<span class="line">{</span>
<span class="line">  FileSecureStorage::StorageSystem_vtbl *__vftable /*VFT*/;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filesecurestorage-storagesystem-vtbl" tabindex="-1"><a class="header-anchor" href="#filesecurestorage-storagesystem-vtbl"><span><code>FileSecureStorage::StorageSystem_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FileSecureStorage::StorageSystem_vtbl</span>
<span class="line">{</span>
<span class="line">  bool (__fastcall *getData)(FileSecureStorage::StorageSystem *this, std::string *, Core::Path);</span>
<span class="line">  void (__fastcall *setData)(FileSecureStorage::StorageSystem *this, const std::string *, Core::Path);</span>
<span class="line">  void (__fastcall *~StorageSystem)(FileSecureStorage::StorageSystem *this);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filesecurestorage-filestoragesystem" tabindex="-1"><a class="header-anchor" href="#filesecurestorage-filestoragesystem"><span><code>FileSecureStorage::FileStorageSystem</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FileSecureStorage::FileStorageSystem : FileSecureStorage::StorageSystem</span>
<span class="line">{</span>
<span class="line">  std::mutex mFileMutex;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filesecurestorage-filestoragesystem-vtbl" tabindex="-1"><a class="header-anchor" href="#filesecurestorage-filestoragesystem-vtbl"><span><code>FileSecureStorage::FileStorageSystem_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FileSecureStorage::FileStorageSystem_vtbl</span>
<span class="line">{</span>
<span class="line">  bool (__fastcall *getData)(FileSecureStorage::StorageSystem *this, std::string *, Core::Path);</span>
<span class="line">  void (__fastcall *setData)(FileSecureStorage::StorageSystem *this, const std::string *, Core::Path);</span>
<span class="line">  void (__fastcall *~StorageSystem)(FileSecureStorage::StorageSystem *this);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filesecurestorage" tabindex="-1"><a class="header-anchor" href="#filesecurestorage"><span><code>FileSecureStorage</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FileSecureStorage : SecureStorage</span>
<span class="line">{</span>
<span class="line">  bool mInitialized;</span>
<span class="line">  Json::Value mJsonValue;</span>
<span class="line">  std::shared_mutex mJsonMutex;</span>
<span class="line">  std::function&lt;SecureStorageKey __cdecl(std::string const &amp;)&gt; mFuncGetSecureStorageKey;</span>
<span class="line">  std::function&lt;void __cdecl(std::string const &amp;,SecureStorageKey const &amp;)&gt; mFuncSetSecureStorageKey;</span>
<span class="line">  ISecureStorageKeySystem *mSSKSystem;</span>
<span class="line">  std::unique_ptr&lt;Crypto::Symmetric::Symmetric&gt; mSSLInterface;</span>
<span class="line">  std::unique_ptr&lt;Crypto::Hash::HMAC&gt; mHash;</span>
<span class="line">  std::unique_ptr&lt;FileSecureStorage::StorageSystem&gt; mFileStorage;</span>
<span class="line">  Core::PathBuffer&lt;std::string &gt; mSecureFilePath;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filesecurestorage-vtbl" tabindex="-1"><a class="header-anchor" href="#filesecurestorage-vtbl"><span><code>FileSecureStorage_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ FileSecureStorage_vtbl</span>
<span class="line">{</span>
<span class="line">  void (__fastcall *~SecureStorage)(SecureStorage *this);</span>
<span class="line">  bool (__fastcall *add)(SecureStorage *this, const std::string *, const std::string *);</span>
<span class="line">  bool (__fastcall *addOrUpdate)(SecureStorage *this, const std::string *, const std::string *);</span>
<span class="line">  bool (__fastcall *remove)(SecureStorage *this, const std::string *);</span>
<span class="line">  bool (__fastcall *get)(SecureStorage *this, const std::string *, std::string *);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-prop-increasexheight" tabindex="-1"><a class="header-anchor" href="#ft-prop-increasexheight"><span><code>FT_Prop_IncreaseXHeight_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __declspec(align(8)) FT_Prop_IncreaseXHeight_</span>
<span class="line">{</span>
<span class="line">  FT_FaceRec_ *face;</span>
<span class="line">  unsigned int limit;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-prop-glyphtoscriptmap" tabindex="-1"><a class="header-anchor" href="#ft-prop-glyphtoscriptmap"><span><code>FT_Prop_GlyphToScriptMap_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_Prop_GlyphToScriptMap_</span>
<span class="line">{</span>
<span class="line">  FT_FaceRec_ *face;</span>
<span class="line">  wchar_t *map;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-var-axis" tabindex="-1"><a class="header-anchor" href="#ft-var-axis"><span><code>FT_Var_Axis_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __declspec(align(8)) FT_Var_Axis_</span>
<span class="line">{</span>
<span class="line">  char *name;</span>
<span class="line">  int minimum;</span>
<span class="line">  int def;</span>
<span class="line">  int maximum;</span>
<span class="line">  unsigned int tag;</span>
<span class="line">  unsigned int strid;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-var-named-style" tabindex="-1"><a class="header-anchor" href="#ft-var-named-style"><span><code>FT_Var_Named_Style_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_Var_Named_Style_</span>
<span class="line">{</span>
<span class="line">  int *coords;</span>
<span class="line">  unsigned int strid;</span>
<span class="line">  unsigned int psid;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-mm-var" tabindex="-1"><a class="header-anchor" href="#ft-mm-var"><span><code>FT_MM_Var_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_MM_Var_</span>
<span class="line">{</span>
<span class="line">  unsigned int num_axis;</span>
<span class="line">  unsigned int num_designs;</span>
<span class="line">  unsigned int num_namedstyles;</span>
<span class="line">  FT_Var_Axis_ *axis;</span>
<span class="line">  FT_Var_Named_Style_ *namedstyle;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-rfork-ref" tabindex="-1"><a class="header-anchor" href="#ft-rfork-ref"><span><code>FT_RFork_Ref_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_RFork_Ref_</span>
<span class="line">{</span>
<span class="line">  __int16 res_id;</span>
<span class="line">  int offset;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-cmaprec" tabindex="-1"><a class="header-anchor" href="#ft-cmaprec"><span><code>FT_CMapRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_CMapRec_</span>
<span class="line">{</span>
<span class="line">  FT_CharMapRec_ charmap;</span>
<span class="line">  const FT_CMap_ClassRec_ *clazz;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-hashnoderec" tabindex="-1"><a class="header-anchor" href="#ft-hashnoderec"><span><code>FT_HashnodeRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_HashnodeRec_</span>
<span class="line">{</span>
<span class="line">  FT_Hashkey_ key;</span>
<span class="line">  unsigned __int64 data;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-hashrec" tabindex="-1"><a class="header-anchor" href="#ft-hashrec"><span><code>FT_HashRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_HashRec_</span>
<span class="line">{</span>
<span class="line">  unsigned int limit;</span>
<span class="line">  unsigned int size;</span>
<span class="line">  unsigned int used;</span>
<span class="line">  unsigned int (__fastcall *lookup)(FT_Hashkey_ *);</span>
<span class="line">  unsigned __int8 (__fastcall *compare)(FT_Hashkey_ *, FT_Hashkey_ *);</span>
<span class="line">  FT_HashnodeRec_ **table;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-validatorrec" tabindex="-1"><a class="header-anchor" href="#ft-validatorrec"><span><code>FT_ValidatorRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __declspec(align(16)) FT_ValidatorRec_</span>
<span class="line">{</span>
<span class="line">  _SETJMP_FLOAT128 jump_buffer[16];</span>
<span class="line">  const unsigned __int8 *base;</span>
<span class="line">  const unsigned __int8 *limit;</span>
<span class="line">  FT_ValidationLevel_ level;</span>
<span class="line">  int error;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-layeriterator" tabindex="-1"><a class="header-anchor" href="#ft-layeriterator"><span><code>FT_LayerIterator_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_LayerIterator_</span>
<span class="line">{</span>
<span class="line">  unsigned int num_layers;</span>
<span class="line">  unsigned int layer;</span>
<span class="line">  unsigned __int8 *p;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-sfntlangtag" tabindex="-1"><a class="header-anchor" href="#ft-sfntlangtag"><span><code>FT_SfntLangTag_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __declspec(align(8)) FT_SfntLangTag_</span>
<span class="line">{</span>
<span class="line">  unsigned __int8 *string;</span>
<span class="line">  unsigned int string_len;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-sfntname" tabindex="-1"><a class="header-anchor" href="#ft-sfntname"><span><code>FT_SfntName_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __declspec(align(8)) FT_SfntName_</span>
<span class="line">{</span>
<span class="line">  unsigned __int16 platform_id;</span>
<span class="line">  unsigned __int16 encoding_id;</span>
<span class="line">  unsigned __int16 language_id;</span>
<span class="line">  unsigned __int16 name_id;</span>
<span class="line">  unsigned __int8 *string;</span>
<span class="line">  unsigned int string_len;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-outlineglyphrec" tabindex="-1"><a class="header-anchor" href="#ft-outlineglyphrec"><span><code>FT_OutlineGlyphRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_OutlineGlyphRec_</span>
<span class="line">{</span>
<span class="line">  FT_GlyphRec_ root;</span>
<span class="line">  FT_Outline_ outline;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-bitmapglyphrec" tabindex="-1"><a class="header-anchor" href="#ft-bitmapglyphrec"><span><code>FT_BitmapGlyphRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_BitmapGlyphRec_</span>
<span class="line">{</span>
<span class="line">  FT_GlyphRec_ root;</span>
<span class="line">  int left;</span>
<span class="line">  int top;</span>
<span class="line">  FT_Bitmap_ bitmap;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-service-ckernvalidaterec" tabindex="-1"><a class="header-anchor" href="#ft-service-ckernvalidaterec"><span><code>FT_Service_CKERNvalidateRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_Service_CKERNvalidateRec_</span>
<span class="line">{</span>
<span class="line">  int (__fastcall *validate)(FT_FaceRec_ *, unsigned int, const unsigned __int8 **);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-service-gxvalidaterec" tabindex="-1"><a class="header-anchor" href="#ft-service-gxvalidaterec"><span><code>FT_Service_GXvalidateRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_Service_GXvalidateRec_</span>
<span class="line">{</span>
<span class="line">  int (__fastcall *validate)(FT_FaceRec_ *, unsigned int, const unsigned __int8 **, unsigned int);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-mm-axis" tabindex="-1"><a class="header-anchor" href="#ft-mm-axis"><span><code>FT_MM_Axis_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_MM_Axis_</span>
<span class="line">{</span>
<span class="line">  char *name;</span>
<span class="line">  int minimum;</span>
<span class="line">  int maximum;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-multi-master" tabindex="-1"><a class="header-anchor" href="#ft-multi-master"><span><code>FT_Multi_Master_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_Multi_Master_</span>
<span class="line">{</span>
<span class="line">  unsigned int num_axis;</span>
<span class="line">  unsigned int num_designs;</span>
<span class="line">  FT_MM_Axis_ axis[4];</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-service-otvalidaterec" tabindex="-1"><a class="header-anchor" href="#ft-service-otvalidaterec"><span><code>FT_Service_OTvalidateRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_Service_OTvalidateRec_</span>
<span class="line">{</span>
<span class="line">  int (__fastcall *validate)(FT_FaceRec_ *volatile, unsigned int, const unsigned __int8 **, const unsigned __int8 **, const unsigned __int8 **, const unsigned __int8 **, const unsigned __int8 **);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-strokeborderrec" tabindex="-1"><a class="header-anchor" href="#ft-strokeborderrec"><span><code>FT_StrokeBorderRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __declspec(align(8)) FT_StrokeBorderRec_</span>
<span class="line">{</span>
<span class="line">  unsigned int num_points;</span>
<span class="line">  unsigned int max_points;</span>
<span class="line">  FT_Vector_ *points;</span>
<span class="line">  unsigned __int8 *tags;</span>
<span class="line">  unsigned __int8 movable;</span>
<span class="line">  int start;</span>
<span class="line">  FT_MemoryRec_ *memory;</span>
<span class="line">  unsigned __int8 valid;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-strokerrec" tabindex="-1"><a class="header-anchor" href="#ft-strokerrec"><span><code>FT_StrokerRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_StrokerRec_</span>
<span class="line">{</span>
<span class="line">  int angle_in;</span>
<span class="line">  int angle_out;</span>
<span class="line">  FT_Vector_ center;</span>
<span class="line">  int line_length;</span>
<span class="line">  unsigned __int8 first_point;</span>
<span class="line">  unsigned __int8 subpath_open;</span>
<span class="line">  int subpath_angle;</span>
<span class="line">  FT_Vector_ subpath_start;</span>
<span class="line">  int subpath_line_length;</span>
<span class="line">  unsigned __int8 handle_wide_strokes;</span>
<span class="line">  FT_Stroker_LineCap_ line_cap;</span>
<span class="line">  FT_Stroker_LineJoin_ line_join;</span>
<span class="line">  FT_Stroker_LineJoin_ line_join_saved;</span>
<span class="line">  int miter_limit;</span>
<span class="line">  int radius;</span>
<span class="line">  FT_StrokeBorderRec_ borders[2];</span>
<span class="line">  FT_LibraryRec_ *library;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-winfnt-headerrec" tabindex="-1"><a class="header-anchor" href="#ft-winfnt-headerrec"><span><code>FT_WinFNT_HeaderRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_WinFNT_HeaderRec_</span>
<span class="line">{</span>
<span class="line">  unsigned __int16 version;</span>
<span class="line">  unsigned int file_size;</span>
<span class="line">  unsigned __int8 copyright[60];</span>
<span class="line">  unsigned __int16 file_type;</span>
<span class="line">  unsigned __int16 nominal_point_size;</span>
<span class="line">  unsigned __int16 vertical_resolution;</span>
<span class="line">  unsigned __int16 horizontal_resolution;</span>
<span class="line">  unsigned __int16 ascent;</span>
<span class="line">  unsigned __int16 internal_leading;</span>
<span class="line">  unsigned __int16 external_leading;</span>
<span class="line">  unsigned __int8 italic;</span>
<span class="line">  unsigned __int8 underline;</span>
<span class="line">  unsigned __int8 strike_out;</span>
<span class="line">  unsigned __int16 weight;</span>
<span class="line">  unsigned __int8 charset;</span>
<span class="line">  unsigned __int16 pixel_width;</span>
<span class="line">  unsigned __int16 pixel_height;</span>
<span class="line">  unsigned __int8 pitch_and_family;</span>
<span class="line">  unsigned __int16 avg_width;</span>
<span class="line">  unsigned __int16 max_width;</span>
<span class="line">  unsigned __int8 first_char;</span>
<span class="line">  unsigned __int8 last_char;</span>
<span class="line">  unsigned __int8 default_char;</span>
<span class="line">  unsigned __int8 break_char;</span>
<span class="line">  unsigned __int16 bytes_per_row;</span>
<span class="line">  unsigned int device_offset;</span>
<span class="line">  unsigned int face_name_offset;</span>
<span class="line">  unsigned int bits_pointer;</span>
<span class="line">  unsigned int bits_offset;</span>
<span class="line">  unsigned __int8 reserved;</span>
<span class="line">  unsigned int flags;</span>
<span class="line">  unsigned __int16 A_space;</span>
<span class="line">  unsigned __int16 B_space;</span>
<span class="line">  unsigned __int16 C_space;</span>
<span class="line">  unsigned __int16 color_table_offset;</span>
<span class="line">  unsigned int reserved1[4];</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-mrunoderec" tabindex="-1"><a class="header-anchor" href="#ftc-mrunoderec"><span><code>FTC_MruNodeRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FTC_MruNodeRec_</span>
<span class="line">{</span>
<span class="line">  FTC_MruNodeRec_ *next;</span>
<span class="line">  FTC_MruNodeRec_ *prev;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-noderec" tabindex="-1"><a class="header-anchor" href="#ftc-noderec"><span><code>FTC_NodeRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __declspec(align(8)) FTC_NodeRec_</span>
<span class="line">{</span>
<span class="line">  FTC_MruNodeRec_ mru;</span>
<span class="line">  FTC_NodeRec_ *link;</span>
<span class="line">  unsigned __int64 hash;</span>
<span class="line">  unsigned __int16 cache_index;</span>
<span class="line">  __int16 ref_count;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-cacherec" tabindex="-1"><a class="header-anchor" href="#ftc-cacherec"><span><code>FTC_CacheRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FTC_CacheRec_</span>
<span class="line">{</span>
<span class="line">  unsigned int p;</span>
<span class="line">  unsigned int mask;</span>
<span class="line">  int slack;</span>
<span class="line">  FTC_NodeRec_ **buckets;</span>
<span class="line">  FTC_CacheClassRec_ clazz;</span>
<span class="line">  FTC_ManagerRec_ *manager;</span>
<span class="line">  FT_MemoryRec_ *memory;</span>
<span class="line">  unsigned int index;</span>
<span class="line">  const FTC_CacheClassRec_ *org_class;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-mrulistrec" tabindex="-1"><a class="header-anchor" href="#ftc-mrulistrec"><span><code>FTC_MruListRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FTC_MruListRec_</span>
<span class="line">{</span>
<span class="line">  unsigned int num_nodes;</span>
<span class="line">  unsigned int max_nodes;</span>
<span class="line">  FTC_MruNodeRec_ *nodes;</span>
<span class="line">  void *data;</span>
<span class="line">  FTC_MruListClassRec_ clazz;</span>
<span class="line">  FT_MemoryRec_ *memory;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-managerrec" tabindex="-1"><a class="header-anchor" href="#ftc-managerrec"><span><code>FTC_ManagerRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FTC_ManagerRec_</span>
<span class="line">{</span>
<span class="line">  FT_LibraryRec_ *library;</span>
<span class="line">  FT_MemoryRec_ *memory;</span>
<span class="line">  FTC_NodeRec_ *nodes_list;</span>
<span class="line">  unsigned __int64 max_weight;</span>
<span class="line">  unsigned __int64 cur_weight;</span>
<span class="line">  unsigned int num_nodes;</span>
<span class="line">  FTC_CacheRec_ *caches[16];</span>
<span class="line">  unsigned int num_caches;</span>
<span class="line">  FTC_MruListRec_ faces;</span>
<span class="line">  FTC_MruListRec_ sizes;</span>
<span class="line">  void *request_data;</span>
<span class="line">  int (__fastcall *request_face)(void *, FT_LibraryRec_ *, void *, FT_FaceRec_ **);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-familyrec" tabindex="-1"><a class="header-anchor" href="#ftc-familyrec"><span><code>FTC_FamilyRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FTC_FamilyRec_</span>
<span class="line">{</span>
<span class="line">  FTC_MruNodeRec_ mrunode;</span>
<span class="line">  unsigned int num_nodes;</span>
<span class="line">  FTC_CacheRec_ *cache;</span>
<span class="line">  const FTC_MruListClassRec_ *clazz;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-scalerrec" tabindex="-1"><a class="header-anchor" href="#ftc-scalerrec"><span><code>FTC_ScalerRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __declspec(align(8)) FTC_ScalerRec_</span>
<span class="line">{</span>
<span class="line">  void *face_id;</span>
<span class="line">  unsigned int width;</span>
<span class="line">  unsigned int height;</span>
<span class="line">  int pixel;</span>
<span class="line">  unsigned int x_res;</span>
<span class="line">  unsigned int y_res;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-cmapqueryrec" tabindex="-1"><a class="header-anchor" href="#ftc-cmapqueryrec"><span><code>FTC_CMapQueryRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FTC_CMapQueryRec_</span>
<span class="line">{</span>
<span class="line">  void *face_id;</span>
<span class="line">  unsigned int cmap_index;</span>
<span class="line">  unsigned int char_code;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-gnoderec" tabindex="-1"><a class="header-anchor" href="#ftc-gnoderec"><span><code>FTC_GNodeRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __declspec(align(8)) FTC_GNodeRec_</span>
<span class="line">{</span>
<span class="line">  FTC_NodeRec_ node;</span>
<span class="line">  FTC_FamilyRec_ *family;</span>
<span class="line">  unsigned int gindex;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-sbitrec" tabindex="-1"><a class="header-anchor" href="#ftc-sbitrec"><span><code>FTC_SBitRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FTC_SBitRec_</span>
<span class="line">{</span>
<span class="line">  unsigned __int8 width;</span>
<span class="line">  unsigned __int8 height;</span>
<span class="line">  char left;</span>
<span class="line">  char top;</span>
<span class="line">  unsigned __int8 format;</span>
<span class="line">  unsigned __int8 max_grays;</span>
<span class="line">  __int16 pitch;</span>
<span class="line">  char xadvance;</span>
<span class="line">  char yadvance;</span>
<span class="line">  unsigned __int8 *buffer;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-snoderec" tabindex="-1"><a class="header-anchor" href="#ftc-snoderec"><span><code>FTC_SNodeRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FTC_SNodeRec_</span>
<span class="line">{</span>
<span class="line">  FTC_GNodeRec_ gnode;</span>
<span class="line">  unsigned int count;</span>
<span class="line">  FTC_SBitRec_ sbits[16];</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-sizenoderec" tabindex="-1"><a class="header-anchor" href="#ftc-sizenoderec"><span><code>FTC_SizeNodeRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FTC_SizeNodeRec_</span>
<span class="line">{</span>
<span class="line">  FTC_MruNodeRec_ node;</span>
<span class="line">  FT_SizeRec_ *size;</span>
<span class="line">  FTC_ScalerRec_ scaler;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-gqueryrec" tabindex="-1"><a class="header-anchor" href="#ftc-gqueryrec"><span><code>FTC_GQueryRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FTC_GQueryRec_</span>
<span class="line">{</span>
<span class="line">  unsigned int gindex;</span>
<span class="line">  FTC_FamilyRec_ *family;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-basicattrrec" tabindex="-1"><a class="header-anchor" href="#ftc-basicattrrec"><span><code>FTC_BasicAttrRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __declspec(align(8)) FTC_BasicAttrRec_</span>
<span class="line">{</span>
<span class="line">  FTC_ScalerRec_ scaler;</span>
<span class="line">  unsigned int load_flags;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-basicqueryrec" tabindex="-1"><a class="header-anchor" href="#ftc-basicqueryrec"><span><code>FTC_BasicQueryRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FTC_BasicQueryRec_</span>
<span class="line">{</span>
<span class="line">  FTC_GQueryRec_ gquery;</span>
<span class="line">  FTC_BasicAttrRec_ attrs;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-imagetyperec" tabindex="-1"><a class="header-anchor" href="#ftc-imagetyperec"><span><code>FTC_ImageTypeRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __declspec(align(8)) FTC_ImageTypeRec_</span>
<span class="line">{</span>
<span class="line">  void *face_id;</span>
<span class="line">  unsigned int width;</span>
<span class="line">  unsigned int height;</span>
<span class="line">  int flags;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-cmapnoderec" tabindex="-1"><a class="header-anchor" href="#ftc-cmapnoderec"><span><code>FTC_CMapNodeRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FTC_CMapNodeRec_</span>
<span class="line">{</span>
<span class="line">  FTC_NodeRec_ node;</span>
<span class="line">  void *face_id;</span>
<span class="line">  unsigned int cmap_index;</span>
<span class="line">  unsigned int first;</span>
<span class="line">  unsigned __int16 indices[128];</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-gcacherec" tabindex="-1"><a class="header-anchor" href="#ftc-gcacherec"><span><code>FTC_GCacheRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FTC_GCacheRec_</span>
<span class="line">{</span>
<span class="line">  FTC_CacheRec_ cache;</span>
<span class="line">  FTC_MruListRec_ families;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-facenoderec" tabindex="-1"><a class="header-anchor" href="#ftc-facenoderec"><span><code>FTC_FaceNodeRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FTC_FaceNodeRec_</span>
<span class="line">{</span>
<span class="line">  FTC_MruNodeRec_ node;</span>
<span class="line">  void *face_id;</span>
<span class="line">  FT_FaceRec_ *face;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-basicfamilyrec" tabindex="-1"><a class="header-anchor" href="#ftc-basicfamilyrec"><span><code>FTC_BasicFamilyRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FTC_BasicFamilyRec_</span>
<span class="line">{</span>
<span class="line">  FTC_FamilyRec_ family;</span>
<span class="line">  FTC_BasicAttrRec_ attrs;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftc-inoderec" tabindex="-1"><a class="header-anchor" href="#ftc-inoderec"><span><code>FTC_INodeRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FTC_INodeRec_</span>
<span class="line">{</span>
<span class="line">  FTC_GNodeRec_ gnode;</span>
<span class="line">  FT_GlyphRec_ *glyph;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-gzipfilerec" tabindex="-1"><a class="header-anchor" href="#ft-gzipfilerec"><span><code>FT_GZipFileRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_GZipFileRec_</span>
<span class="line">{</span>
<span class="line">  FT_StreamRec_ *source;</span>
<span class="line">  FT_StreamRec_ *stream;</span>
<span class="line">  FT_MemoryRec_ *memory;</span>
<span class="line">  z_stream_s zstream;</span>
<span class="line">  unsigned int start;</span>
<span class="line">  unsigned __int8 input[4096];</span>
<span class="line">  unsigned __int8 buffer[4096];</span>
<span class="line">  unsigned int pos;</span>
<span class="line">  unsigned __int8 *cursor;</span>
<span class="line">  unsigned __int8 *limit;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-lzwstaterec" tabindex="-1"><a class="header-anchor" href="#ft-lzwstaterec"><span><code>FT_LzwStateRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_LzwStateRec_</span>
<span class="line">{</span>
<span class="line">  FT_LzwPhase_ phase;</span>
<span class="line">  int in_eof;</span>
<span class="line">  unsigned __int8 buf_tab[16];</span>
<span class="line">  unsigned int buf_offset;</span>
<span class="line">  unsigned int buf_size;</span>
<span class="line">  unsigned __int8 buf_clear;</span>
<span class="line">  unsigned __int64 buf_total;</span>
<span class="line">  unsigned int max_bits;</span>
<span class="line">  int block_mode;</span>
<span class="line">  unsigned int max_free;</span>
<span class="line">  unsigned int num_bits;</span>
<span class="line">  unsigned int free_ent;</span>
<span class="line">  unsigned int free_bits;</span>
<span class="line">  unsigned int old_code;</span>
<span class="line">  unsigned int old_char;</span>
<span class="line">  unsigned int in_code;</span>
<span class="line">  wchar_t *prefix;</span>
<span class="line">  unsigned __int8 *suffix;</span>
<span class="line">  unsigned int prefix_size;</span>
<span class="line">  unsigned __int8 *stack;</span>
<span class="line">  unsigned int stack_top;</span>
<span class="line">  unsigned __int64 stack_size;</span>
<span class="line">  unsigned __int8 stack_0[64];</span>
<span class="line">  FT_StreamRec_ *source;</span>
<span class="line">  FT_MemoryRec_ *memory;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ft-lzwfilerec" tabindex="-1"><a class="header-anchor" href="#ft-lzwfilerec"><span><code>FT_LZWFileRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FT_LZWFileRec_</span>
<span class="line">{</span>
<span class="line">  FT_StreamRec_ *source;</span>
<span class="line">  FT_StreamRec_ *stream;</span>
<span class="line">  FT_MemoryRec_ *memory;</span>
<span class="line">  FT_LzwStateRec_ lzw;</span>
<span class="line">  unsigned __int8 buffer[4096];</span>
<span class="line">  unsigned int pos;</span>
<span class="line">  unsigned __int8 *cursor;</span>
<span class="line">  unsigned __int8 *limit;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fvar-axis" tabindex="-1"><a class="header-anchor" href="#fvar-axis"><span><code>fvar_axis_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct fvar_axis_</span>
<span class="line">{</span>
<span class="line">  unsigned int axisTag;</span>
<span class="line">  int minValue;</span>
<span class="line">  int defaultValue;</span>
<span class="line">  int maxValue;</span>
<span class="line">  unsigned __int16 flags;</span>
<span class="line">  unsigned __int16 nameID;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fnt-fontrec" tabindex="-1"><a class="header-anchor" href="#fnt-fontrec"><span><code>FNT_FontRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FNT_FontRec_</span>
<span class="line">{</span>
<span class="line">  unsigned int offset;</span>
<span class="line">  FT_WinFNT_HeaderRec_ header;</span>
<span class="line">  unsigned __int8 *fnt_frame;</span>
<span class="line">  unsigned int fnt_size;</span>
<span class="line">  char *family_name;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fnt-facerec" tabindex="-1"><a class="header-anchor" href="#fnt-facerec"><span><code>FNT_FaceRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FNT_FaceRec_</span>
<span class="line">{</span>
<span class="line">  FT_FaceRec_ root;</span>
<span class="line">  FNT_FontRec_ *font;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fnt-cmaprec" tabindex="-1"><a class="header-anchor" href="#fnt-cmaprec"><span><code>FNT_CMapRec_</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct FNT_CMapRec_</span>
<span class="line">{</span>
<span class="line">  FT_CMapRec_ cmap;</span>
<span class="line">  unsigned int first;</span>
<span class="line">  unsigned int count;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fileio" tabindex="-1"><a class="header-anchor" href="#fileio"><span><code>fileio</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct fileio</span>
<span class="line">{</span>
<span class="line">  __int64 ob_refcnt;</span>
<span class="line">  _typeobject *ob_type;</span>
<span class="line">  int fd;</span>
<span class="line">  unsigned __int32 readable : 1;</span>
<span class="line">  unsigned __int32 writable : 1;</span>
<span class="line">  unsigned __int32 appending : 1;</span>
<span class="line">  __int32 seekable : 2;</span>
<span class="line">  unsigned __int32 closefd : 1;</span>
<span class="line">  _object *weakreflist;</span>
<span class="line">  _object *dict;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fieldnameiterobject" tabindex="-1"><a class="header-anchor" href="#fieldnameiterobject"><span><code>fieldnameiterobject</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct fieldnameiterobject</span>
<span class="line">{</span>
<span class="line">  __int64 ob_refcnt;</span>
<span class="line">  _typeobject *ob_type;</span>
<span class="line">  PyStringObject *str;</span>
<span class="line">  FieldNameIterator it_field;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="formatteriterobject" tabindex="-1"><a class="header-anchor" href="#formatteriterobject"><span><code>formatteriterobject</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct formatteriterobject</span>
<span class="line">{</span>
<span class="line">  __int64 ob_refcnt;</span>
<span class="line">  _typeobject *ob_type;</span>
<span class="line">  PyStringObject *str;</span>
<span class="line">  MarkupIterator it_markup;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fblockinfo" tabindex="-1"><a class="header-anchor" href="#fblockinfo"><span><code>fblockinfo</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct fblockinfo</span>
<span class="line">{</span>
<span class="line">  fblocktype fb_type;</span>
<span class="line">  basicblock_ *fb_block;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fontrepository-loaddefaultfonts-l2-lambda-4f422798d8e19b20911552d15f97b207" tabindex="-1"><a class="header-anchor" href="#fontrepository-loaddefaultfonts-l2-lambda-4f422798d8e19b20911552d15f97b207"><span><code>FontRepository::loadDefaultFonts::__l2::&lt;lambda_4f422798d8e19b20911552d15f97b207&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FontRepository::loadDefaultFonts::__l2::&lt;lambda_4f422798d8e19b20911552d15f97b207&gt;</span>
<span class="line">{</span>
<span class="line">  FontRepository *const __this;</span>
<span class="line">  mce::TextureGroup *textureGroup;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fontrepository-loaddefaultfonts-l2-lambda-7fe000d9f42c358f49b7b7b1aeed026a" tabindex="-1"><a class="header-anchor" href="#fontrepository-loaddefaultfonts-l2-lambda-7fe000d9f42c358f49b7b7b1aeed026a"><span><code>FontRepository::loadDefaultFonts::__l2::&lt;lambda_7fe000d9f42c358f49b7b7b1aeed026a&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FontRepository::loadDefaultFonts::__l2::&lt;lambda_7fe000d9f42c358f49b7b7b1aeed026a&gt;</span>
<span class="line">{</span>
<span class="line">  FontRepository *const __this;</span>
<span class="line">  mce::TextureGroup *textureGroup;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="font-drawtextsegment-l2-lambda-8e3baa331ad6e1f242221a9878dc5f42" tabindex="-1"><a class="header-anchor" href="#font-drawtextsegment-l2-lambda-8e3baa331ad6e1f242221a9878dc5f42"><span><code>Font::_drawTextSegment::__l2::&lt;lambda_8e3baa331ad6e1f242221a9878dc5f42&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj Font::_drawTextSegment::__l2::&lt;lambda_8e3baa331ad6e1f242221a9878dc5f42&gt;</span>
<span class="line">{</span>
<span class="line">  bool *shadow;</span>
<span class="line">  Font *const __this;</span>
<span class="line">  ScreenContext *screenContext;</span>
<span class="line">  float *startY;</span>
<span class="line">  const mce::Color *shadowColor;</span>
<span class="line">  const glm::tvec2&lt;float,0&gt; *shadowOffset;</span>
<span class="line">  bool *showColorSymbol;</span>
<span class="line">  mce::MaterialPtr **optionalMat;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="findinvalidcontrols-l2-lambda-3dbaae907dfed5de4509e626c64034ac" tabindex="-1"><a class="header-anchor" href="#findinvalidcontrols-l2-lambda-3dbaae907dfed5de4509e626c64034ac"><span><code>findInvalidControls::__l2::&lt;lambda_3dbaae907dfed5de4509e626c64034ac&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj findInvalidControls::__l2::&lt;lambda_3dbaae907dfed5de4509e626c64034ac&gt;</span>
<span class="line">{</span>
<span class="line">  std::vector&lt;std::string&gt; *foundInvalidControls;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flightingservice-removeprogressionsmonitor-l2-lambda-dc0aa59f9c42aac91e41e9b1baa7f37b" tabindex="-1"><a class="header-anchor" href="#flightingservice-removeprogressionsmonitor-l2-lambda-dc0aa59f9c42aac91e41e9b1baa7f37b"><span><code>FlightingService::removeProgressionsMonitor::__l2::&lt;lambda_dc0aa59f9c42aac91e41e9b1baa7f37b&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FlightingService::removeProgressionsMonitor::__l2::&lt;lambda_dc0aa59f9c42aac91e41e9b1baa7f37b&gt;</span>
<span class="line">{</span>
<span class="line">  unsigned int handle;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flightingservice-removetreatmentsmonitor-l2-lambda-dc33781d56036161ddedc101c7827cad" tabindex="-1"><a class="header-anchor" href="#flightingservice-removetreatmentsmonitor-l2-lambda-dc33781d56036161ddedc101c7827cad"><span><code>FlightingService::removeTreatmentsMonitor::__l2::&lt;lambda_dc33781d56036161ddedc101c7827cad&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FlightingService::removeTreatmentsMonitor::__l2::&lt;lambda_dc33781d56036161ddedc101c7827cad&gt;</span>
<span class="line">{</span>
<span class="line">  unsigned int handle;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flightingtoggles-registertoggle-l2-lambda-01e889ff1de36f6f894ace0c2fd91fab" tabindex="-1"><a class="header-anchor" href="#flightingtoggles-registertoggle-l2-lambda-01e889ff1de36f6f894ace0c2fd91fab"><span><code>FlightingToggles::_registerToggle::__l2::&lt;lambda_01e889ff1de36f6f894ace0c2fd91fab&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FlightingToggles::_registerToggle::__l2::&lt;lambda_01e889ff1de36f6f894ace0c2fd91fab&gt;</span>
<span class="line">{</span>
<span class="line">  FlightingToggleId toggleId;</span>
<span class="line">  const std::string saveTag;</span>
<span class="line">  const std::string progressionId;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flightingtoggles-getreadableoption-l2-lambda-c8f4468cfb8c57d4cff76d6b08d7222f" tabindex="-1"><a class="header-anchor" href="#flightingtoggles-getreadableoption-l2-lambda-c8f4468cfb8c57d4cff76d6b08d7222f"><span><code>FlightingToggles::_getReadableOption::__l2::&lt;lambda_c8f4468cfb8c57d4cff76d6b08d7222f&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FlightingToggles::_getReadableOption::__l2::&lt;lambda_c8f4468cfb8c57d4cff76d6b08d7222f&gt;</span>
<span class="line">{</span>
<span class="line">  const FlightingToggleId toggleId;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flightingtoggles-geteditableoption-l2-lambda-09ea53f58499c033d12f411d44e8b89d" tabindex="-1"><a class="header-anchor" href="#flightingtoggles-geteditableoption-l2-lambda-09ea53f58499c033d12f411d44e8b89d"><span><code>FlightingToggles::_getEditableOption::__l2::&lt;lambda_09ea53f58499c033d12f411d44e8b89d&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FlightingToggles::_getEditableOption::__l2::&lt;lambda_09ea53f58499c033d12f411d44e8b89d&gt;</span>
<span class="line">{</span>
<span class="line">  const FlightingToggleId toggleId;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fenceddynamicringbuffer-core-cpuringbufferallocation-buffer-2-0-allocate-l2-scopecheck" tabindex="-1"><a class="header-anchor" href="#fenceddynamicringbuffer-core-cpuringbufferallocation-buffer-2-0-allocate-l2-scopecheck"><span><code>FencedDynamicRingBuffer&lt;Core::CpuRingBufferAllocation_Buffer,2,0&gt;::allocate::__l2::ScopeCheck</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FencedDynamicRingBuffer&lt;Core::CpuRingBufferAllocation_Buffer,2,0&gt;::allocate::__l2::ScopeCheck</span>
<span class="line">{</span>
<span class="line">  std::atomic&lt;unsigned __int64&gt; *mAllocCount;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fogcommandcomponent-removefogsettings-l2-lambda-e7045a2475577c89e825c30ba26bb7a0" tabindex="-1"><a class="header-anchor" href="#fogcommandcomponent-removefogsettings-l2-lambda-e7045a2475577c89e825c30ba26bb7a0"><span><code>FogCommandComponent::removeFogSettings::__l2::&lt;lambda_e7045a2475577c89e825c30ba26bb7a0&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FogCommandComponent::removeFogSettings::__l2::&lt;lambda_e7045a2475577c89e825c30ba26bb7a0&gt;</span>
<span class="line">{</span>
<span class="line">  const std::string *userProvidedId;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fogcommandcomponent-popfogsetting-l2-lambda-c6420063e1de121184042e0355b72836" tabindex="-1"><a class="header-anchor" href="#fogcommandcomponent-popfogsetting-l2-lambda-c6420063e1de121184042e0355b72836"><span><code>FogCommandComponent::popFogSetting::__l2::&lt;lambda_c6420063e1de121184042e0355b72836&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FogCommandComponent::popFogSetting::__l2::&lt;lambda_c6420063e1de121184042e0355b72836&gt;</span>
<span class="line">{</span>
<span class="line">  const std::string *userProvidedId;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featuretoggles-get-l2-lambda-e82554aee0f907d64d28f1c4a75f2147" tabindex="-1"><a class="header-anchor" href="#featuretoggles-get-l2-lambda-e82554aee0f907d64d28f1c4a75f2147"><span><code>FeatureToggles::get::__l2::&lt;lambda_e82554aee0f907d64d28f1c4a75f2147&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureToggles::get::__l2::&lt;lambda_e82554aee0f907d64d28f1c4a75f2147&gt;</span>
<span class="line">{</span>
<span class="line">  _BYTE featureID[4];</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fish-updateentityspecificmolangvariables-l2-lambda-280e8c01dad65c80513fe29eb5985c62-l2-literal" tabindex="-1"><a class="header-anchor" href="#fish-updateentityspecificmolangvariables-l2-lambda-280e8c01dad65c80513fe29eb5985c62-l2-literal"><span><code>Fish::updateEntitySpecificMolangVariables::__l2::&lt;lambda_280e8c01dad65c80513fe29eb5985c62&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj Fish::updateEntitySpecificMolangVariables::__l2::&lt;lambda_280e8c01dad65c80513fe29eb5985c62&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fish-updateentityspecificmolangvariables-l2-lambda-d2014f3ddc1a02a48511f6fe7ff7d131-l2-literal" tabindex="-1"><a class="header-anchor" href="#fish-updateentityspecificmolangvariables-l2-lambda-d2014f3ddc1a02a48511f6fe7ff7d131-l2-literal"><span><code>Fish::updateEntitySpecificMolangVariables::__l2::&lt;lambda_d2014f3ddc1a02a48511f6fe7ff7d131&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj Fish::updateEntitySpecificMolangVariables::__l2::&lt;lambda_d2014f3ddc1a02a48511f6fe7ff7d131&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fish-updateentityspecificmolangvariables-l2-lambda-280e8c01dad65c80513fe29eb5985c62" tabindex="-1"><a class="header-anchor" href="#fish-updateentityspecificmolangvariables-l2-lambda-280e8c01dad65c80513fe29eb5985c62"><span><code>Fish::updateEntitySpecificMolangVariables::__l2::&lt;lambda_280e8c01dad65c80513fe29eb5985c62&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj Fish::updateEntitySpecificMolangVariables::__l2::&lt;lambda_280e8c01dad65c80513fe29eb5985c62&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fish-updateentityspecificmolangvariables-l2-lambda-d2014f3ddc1a02a48511f6fe7ff7d131" tabindex="-1"><a class="header-anchor" href="#fish-updateentityspecificmolangvariables-l2-lambda-d2014f3ddc1a02a48511f6fe7ff7d131"><span><code>Fish::updateEntitySpecificMolangVariables::__l2::&lt;lambda_d2014f3ddc1a02a48511f6fe7ff7d131&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj Fish::updateEntitySpecificMolangVariables::__l2::&lt;lambda_d2014f3ddc1a02a48511f6fe7ff7d131&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fishinghook-fishteaseevent-l5-lambda-2455c51ed26ad5c032692a6134fa9018-l2-literal" tabindex="-1"><a class="header-anchor" href="#fishinghook-fishteaseevent-l5-lambda-2455c51ed26ad5c032692a6134fa9018-l2-literal"><span><code>FishingHook::_fishTeaseEvent::__l5::&lt;lambda_2455c51ed26ad5c032692a6134fa9018&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FishingHook::_fishTeaseEvent::__l5::&lt;lambda_2455c51ed26ad5c032692a6134fa9018&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fishinghook-fishhookevent-l2-lambda-ddc523299e28559cf337c10bb3b88fc4-l2-literal" tabindex="-1"><a class="header-anchor" href="#fishinghook-fishhookevent-l2-lambda-ddc523299e28559cf337c10bb3b88fc4-l2-literal"><span><code>FishingHook::_fishhookEvent::__l2::&lt;lambda_ddc523299e28559cf337c10bb3b88fc4&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FishingHook::_fishhookEvent::__l2::&lt;lambda_ddc523299e28559cf337c10bb3b88fc4&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fishinghook-fishposevent-l5-lambda-f0795b8083f25704a962612a885ea629-l2-literal" tabindex="-1"><a class="header-anchor" href="#fishinghook-fishposevent-l5-lambda-f0795b8083f25704a962612a885ea629-l2-literal"><span><code>FishingHook::_fishPosEvent::__l5::&lt;lambda_f0795b8083f25704a962612a885ea629&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FishingHook::_fishPosEvent::__l5::&lt;lambda_f0795b8083f25704a962612a885ea629&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fishinghook-fishteaseevent-l5-lambda-2455c51ed26ad5c032692a6134fa9018" tabindex="-1"><a class="header-anchor" href="#fishinghook-fishteaseevent-l5-lambda-2455c51ed26ad5c032692a6134fa9018"><span><code>FishingHook::_fishTeaseEvent::__l5::&lt;lambda_2455c51ed26ad5c032692a6134fa9018&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FishingHook::_fishTeaseEvent::__l5::&lt;lambda_2455c51ed26ad5c032692a6134fa9018&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fishinghook-fishhookevent-l2-lambda-ddc523299e28559cf337c10bb3b88fc4" tabindex="-1"><a class="header-anchor" href="#fishinghook-fishhookevent-l2-lambda-ddc523299e28559cf337c10bb3b88fc4"><span><code>FishingHook::_fishhookEvent::__l2::&lt;lambda_ddc523299e28559cf337c10bb3b88fc4&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FishingHook::_fishhookEvent::__l2::&lt;lambda_ddc523299e28559cf337c10bb3b88fc4&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fishinghook-fishposevent-l5-lambda-f0795b8083f25704a962612a885ea629" tabindex="-1"><a class="header-anchor" href="#fishinghook-fishposevent-l5-lambda-f0795b8083f25704a962612a885ea629"><span><code>FishingHook::_fishPosEvent::__l5::&lt;lambda_f0795b8083f25704a962612a885ea629&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FishingHook::_fishPosEvent::__l5::&lt;lambda_f0795b8083f25704a962612a885ea629&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filteredcontainermodel-isexpanableitemfiltered-l5-lambda-c95972fdc7ee0ea513f2eeec4625f69b" tabindex="-1"><a class="header-anchor" href="#filteredcontainermodel-isexpanableitemfiltered-l5-lambda-c95972fdc7ee0ea513f2eeec4625f69b"><span><code>FilteredContainerModel::isExpanableItemFiltered::__l5::&lt;lambda_c95972fdc7ee0ea513f2eeec4625f69b&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FilteredContainerModel::isExpanableItemFiltered::__l5::&lt;lambda_c95972fdc7ee0ea513f2eeec4625f69b&gt;</span>
<span class="line">{</span>
<span class="line">  const ItemInstance item;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featurehelper-makefeaturerenderparams-l2-lambda-c825f1c6579cee8eda3425bff5cb1cef-l2-literal" tabindex="-1"><a class="header-anchor" href="#featurehelper-makefeaturerenderparams-l2-lambda-c825f1c6579cee8eda3425bff5cb1cef-l2-literal"><span><code>FeatureHelper::makeFeatureRenderParams::__l2::&lt;lambda_c825f1c6579cee8eda3425bff5cb1cef&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureHelper::makeFeatureRenderParams::__l2::&lt;lambda_c825f1c6579cee8eda3425bff5cb1cef&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featurehelper-makefeaturerenderparams-l2-lambda-c825f1c6579cee8eda3425bff5cb1cef" tabindex="-1"><a class="header-anchor" href="#featurehelper-makefeaturerenderparams-l2-lambda-c825f1c6579cee8eda3425bff5cb1cef"><span><code>FeatureHelper::makeFeatureRenderParams::__l2::&lt;lambda_c825f1c6579cee8eda3425bff5cb1cef&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureHelper::makeFeatureRenderParams::__l2::&lt;lambda_c825f1c6579cee8eda3425bff5cb1cef&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l2-lambda-5866351d1636ff192cb9608b1e329d44-l2-literal" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l2-lambda-5866351d1636ff192cb9608b1e329d44-l2-literal"><span><code>FeatureLoading::_buildSchema::__l2::&lt;lambda_5866351d1636ff192cb9608b1e329d44&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l2::&lt;lambda_5866351d1636ff192cb9608b1e329d44&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l2-lambda-5866351d1636ff192cb9608b1e329d44" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l2-lambda-5866351d1636ff192cb9608b1e329d44"><span><code>FeatureLoading::_buildSchema::__l2::&lt;lambda_5866351d1636ff192cb9608b1e329d44&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l2::&lt;lambda_5866351d1636ff192cb9608b1e329d44&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l2-lambda-0cdb93874de125e69b68b9ebf9b548a5-l2-literal" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l2-lambda-0cdb93874de125e69b68b9ebf9b548a5-l2-literal"><span><code>FeatureLoading::_buildSchema::__l2::&lt;lambda_0cdb93874de125e69b68b9ebf9b548a5&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l2::&lt;lambda_0cdb93874de125e69b68b9ebf9b548a5&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l2-lambda-0cdb93874de125e69b68b9ebf9b548a5" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l2-lambda-0cdb93874de125e69b68b9ebf9b548a5"><span><code>FeatureLoading::_buildSchema::__l2::&lt;lambda_0cdb93874de125e69b68b9ebf9b548a5&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l2::&lt;lambda_0cdb93874de125e69b68b9ebf9b548a5&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l3-lambda-f77a8e88eeeb5ac15156b5fd56e33a34-l2-literal" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l3-lambda-f77a8e88eeeb5ac15156b5fd56e33a34-l2-literal"><span><code>FeatureLoading::_buildSchema::__l3::&lt;lambda_f77a8e88eeeb5ac15156b5fd56e33a34&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l3::&lt;lambda_f77a8e88eeeb5ac15156b5fd56e33a34&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l3-lambda-f77a8e88eeeb5ac15156b5fd56e33a34" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l3-lambda-f77a8e88eeeb5ac15156b5fd56e33a34"><span><code>FeatureLoading::_buildSchema::__l3::&lt;lambda_f77a8e88eeeb5ac15156b5fd56e33a34&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l3::&lt;lambda_f77a8e88eeeb5ac15156b5fd56e33a34&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l3-lambda-8e08cab91671a993c1d6d2dfb885576b-l2-literal" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l3-lambda-8e08cab91671a993c1d6d2dfb885576b-l2-literal"><span><code>FeatureLoading::_buildSchema::__l3::&lt;lambda_8e08cab91671a993c1d6d2dfb885576b&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l3::&lt;lambda_8e08cab91671a993c1d6d2dfb885576b&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l3-lambda-8e08cab91671a993c1d6d2dfb885576b" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l3-lambda-8e08cab91671a993c1d6d2dfb885576b"><span><code>FeatureLoading::_buildSchema::__l3::&lt;lambda_8e08cab91671a993c1d6d2dfb885576b&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l3::&lt;lambda_8e08cab91671a993c1d6d2dfb885576b&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l3-lambda-fc664a0ad07e562a5b0ad2a34ab21e68-l2-literal" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l3-lambda-fc664a0ad07e562a5b0ad2a34ab21e68-l2-literal"><span><code>FeatureLoading::_buildSchema::__l3::&lt;lambda_fc664a0ad07e562a5b0ad2a34ab21e68&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l3::&lt;lambda_fc664a0ad07e562a5b0ad2a34ab21e68&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l3-lambda-fc664a0ad07e562a5b0ad2a34ab21e68" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l3-lambda-fc664a0ad07e562a5b0ad2a34ab21e68"><span><code>FeatureLoading::_buildSchema::__l3::&lt;lambda_fc664a0ad07e562a5b0ad2a34ab21e68&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l3::&lt;lambda_fc664a0ad07e562a5b0ad2a34ab21e68&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l3-lambda-398d0541d49edc65d0550bf1222eb336-l2-literal" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l3-lambda-398d0541d49edc65d0550bf1222eb336-l2-literal"><span><code>FeatureLoading::_buildSchema::__l3::&lt;lambda_398d0541d49edc65d0550bf1222eb336&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l3::&lt;lambda_398d0541d49edc65d0550bf1222eb336&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l3-lambda-398d0541d49edc65d0550bf1222eb336" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l3-lambda-398d0541d49edc65d0550bf1222eb336"><span><code>FeatureLoading::_buildSchema::__l3::&lt;lambda_398d0541d49edc65d0550bf1222eb336&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l3::&lt;lambda_398d0541d49edc65d0550bf1222eb336&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l3-lambda-30a6fc1be8e2fa920409b6ad82604c04-l2-literal" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l3-lambda-30a6fc1be8e2fa920409b6ad82604c04-l2-literal"><span><code>FeatureLoading::_buildSchema::__l3::&lt;lambda_30a6fc1be8e2fa920409b6ad82604c04&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l3::&lt;lambda_30a6fc1be8e2fa920409b6ad82604c04&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l3-lambda-30a6fc1be8e2fa920409b6ad82604c04" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l3-lambda-30a6fc1be8e2fa920409b6ad82604c04"><span><code>FeatureLoading::_buildSchema::__l3::&lt;lambda_30a6fc1be8e2fa920409b6ad82604c04&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l3::&lt;lambda_30a6fc1be8e2fa920409b6ad82604c04&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l3-lambda-3beb5f71e367af352b4705552ae91ac9-l2-literal" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l3-lambda-3beb5f71e367af352b4705552ae91ac9-l2-literal"><span><code>FeatureLoading::_buildSchema::__l3::&lt;lambda_3beb5f71e367af352b4705552ae91ac9&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l3::&lt;lambda_3beb5f71e367af352b4705552ae91ac9&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l3-lambda-3beb5f71e367af352b4705552ae91ac9" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l3-lambda-3beb5f71e367af352b4705552ae91ac9"><span><code>FeatureLoading::_buildSchema::__l3::&lt;lambda_3beb5f71e367af352b4705552ae91ac9&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l3::&lt;lambda_3beb5f71e367af352b4705552ae91ac9&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l3-lambda-7c8944e317afdadb867ecf6eea3fb38d-l2-literal" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l3-lambda-7c8944e317afdadb867ecf6eea3fb38d-l2-literal"><span><code>FeatureLoading::_buildSchema::__l3::&lt;lambda_7c8944e317afdadb867ecf6eea3fb38d&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l3::&lt;lambda_7c8944e317afdadb867ecf6eea3fb38d&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l3-lambda-7c8944e317afdadb867ecf6eea3fb38d" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l3-lambda-7c8944e317afdadb867ecf6eea3fb38d"><span><code>FeatureLoading::_buildSchema::__l3::&lt;lambda_7c8944e317afdadb867ecf6eea3fb38d&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l3::&lt;lambda_7c8944e317afdadb867ecf6eea3fb38d&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l3-lambda-2461d849b89a3811c07ae62e27ad6c81-l2-literal" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l3-lambda-2461d849b89a3811c07ae62e27ad6c81-l2-literal"><span><code>FeatureLoading::_buildSchema::__l3::&lt;lambda_2461d849b89a3811c07ae62e27ad6c81&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l3::&lt;lambda_2461d849b89a3811c07ae62e27ad6c81&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="featureloading-buildschema-l3-lambda-2461d849b89a3811c07ae62e27ad6c81" tabindex="-1"><a class="header-anchor" href="#featureloading-buildschema-l3-lambda-2461d849b89a3811c07ae62e27ad6c81"><span><code>FeatureLoading::_buildSchema::__l3::&lt;lambda_2461d849b89a3811c07ae62e27ad6c81&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FeatureLoading::_buildSchema::__l3::&lt;lambda_2461d849b89a3811c07ae62e27ad6c81&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flatworldgeneratoroptions-getdefault-l2-lambda-fe93e031ad063ae0e7f131e26064013a" tabindex="-1"><a class="header-anchor" href="#flatworldgeneratoroptions-getdefault-l2-lambda-fe93e031ad063ae0e7f131e26064013a"><span><code>FlatWorldGeneratorOptions::getDefault::__l2::&lt;lambda_fe93e031ad063ae0e7f131e26064013a&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FlatWorldGeneratorOptions::getDefault::__l2::&lt;lambda_fe93e031ad063ae0e7f131e26064013a&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreecanopy-buildschema-l2-lambda-a89132006fbb6ef7244385ea18abae82-l2-literal" tabindex="-1"><a class="header-anchor" href="#fancytreecanopy-buildschema-l2-lambda-a89132006fbb6ef7244385ea18abae82-l2-literal"><span><code>FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_a89132006fbb6ef7244385ea18abae82&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_a89132006fbb6ef7244385ea18abae82&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreecanopy-buildschema-l2-lambda-a89132006fbb6ef7244385ea18abae82" tabindex="-1"><a class="header-anchor" href="#fancytreecanopy-buildschema-l2-lambda-a89132006fbb6ef7244385ea18abae82"><span><code>FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_a89132006fbb6ef7244385ea18abae82&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_a89132006fbb6ef7244385ea18abae82&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreecanopy-buildschema-l2-lambda-c4b48eced950a7e10a9578f1bd69c3c8-l2-literal" tabindex="-1"><a class="header-anchor" href="#fancytreecanopy-buildschema-l2-lambda-c4b48eced950a7e10a9578f1bd69c3c8-l2-literal"><span><code>FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_c4b48eced950a7e10a9578f1bd69c3c8&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_c4b48eced950a7e10a9578f1bd69c3c8&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreecanopy-buildschema-l2-lambda-c4b48eced950a7e10a9578f1bd69c3c8" tabindex="-1"><a class="header-anchor" href="#fancytreecanopy-buildschema-l2-lambda-c4b48eced950a7e10a9578f1bd69c3c8"><span><code>FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_c4b48eced950a7e10a9578f1bd69c3c8&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_c4b48eced950a7e10a9578f1bd69c3c8&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fallentreetrunk-buildschema-l2-lambda-34210a916c2e972c474c39f3b29ba615-l2-literal" tabindex="-1"><a class="header-anchor" href="#fallentreetrunk-buildschema-l2-lambda-34210a916c2e972c474c39f3b29ba615-l2-literal"><span><code>FallenTreeTrunk::_buildSchema::__l2::&lt;lambda_34210a916c2e972c474c39f3b29ba615&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FallenTreeTrunk::_buildSchema::__l2::&lt;lambda_34210a916c2e972c474c39f3b29ba615&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fallentreetrunk-buildschema-l2-lambda-34210a916c2e972c474c39f3b29ba615" tabindex="-1"><a class="header-anchor" href="#fallentreetrunk-buildschema-l2-lambda-34210a916c2e972c474c39f3b29ba615"><span><code>FallenTreeTrunk::_buildSchema::__l2::&lt;lambda_34210a916c2e972c474c39f3b29ba615&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FallenTreeTrunk::_buildSchema::__l2::&lt;lambda_34210a916c2e972c474c39f3b29ba615&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreecanopy-buildschema-l2-lambda-e42c6c635f508d9c780be255a6d38f5e-l2-literal" tabindex="-1"><a class="header-anchor" href="#fancytreecanopy-buildschema-l2-lambda-e42c6c635f508d9c780be255a6d38f5e-l2-literal"><span><code>FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_e42c6c635f508d9c780be255a6d38f5e&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_e42c6c635f508d9c780be255a6d38f5e&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreecanopy-buildschema-l2-lambda-e42c6c635f508d9c780be255a6d38f5e" tabindex="-1"><a class="header-anchor" href="#fancytreecanopy-buildschema-l2-lambda-e42c6c635f508d9c780be255a6d38f5e"><span><code>FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_e42c6c635f508d9c780be255a6d38f5e&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeCanopy::_buildSchema::__l2::&lt;lambda_e42c6c635f508d9c780be255a6d38f5e&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreetrunk-buildschema-l2-lambda-14a48915df16399192e4882ea1b599a0-l2-literal" tabindex="-1"><a class="header-anchor" href="#fancytreetrunk-buildschema-l2-lambda-14a48915df16399192e4882ea1b599a0-l2-literal"><span><code>FancyTreeTrunk::_buildSchema::__l2::&lt;lambda_14a48915df16399192e4882ea1b599a0&gt;::()::__l2::Literal</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeTrunk::_buildSchema::__l2::&lt;lambda_14a48915df16399192e4882ea1b599a0&gt;::()::__l2::Literal</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fancytreetrunk-buildschema-l2-lambda-14a48915df16399192e4882ea1b599a0" tabindex="-1"><a class="header-anchor" href="#fancytreetrunk-buildschema-l2-lambda-14a48915df16399192e4882ea1b599a0"><span><code>FancyTreeTrunk::_buildSchema::__l2::&lt;lambda_14a48915df16399192e4882ea1b599a0&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct __cppobj FancyTreeTrunk::_buildSchema::__l2::&lt;lambda_14a48915df16399192e4882ea1b599a0&gt;</span>
<span class="line">{</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fish-vtbl" tabindex="-1"><a class="header-anchor" href="#fish-vtbl"><span><code>Fish_vtbl</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct /*VFT*/ Fish_vtbl</span>
<span class="line">{</span>
<span class="line">  bool (__fastcall *hasComponent)(Actor *this, const HashedString *);</span>
<span class="line">  void (__fastcall *reloadHardcoded)(Actor *this, Actor::InitializationMethod, const VariantParameterList *);</span>
<span class="line">  void (__fastcall *reloadHardcodedClient)(Actor *this, Actor::InitializationMethod, const VariantParameterList *);</span>
<span class="line">  void (__fastcall *initializeComponents)(Actor *this, Actor::InitializationMethod, const VariantParameterList *);</span>
<span class="line">  void (__fastcall *reloadComponents)(Actor *this, Actor::InitializationMethod, const VariantParameterList *);</span>
<span class="line">  void (__fastcall *_serverInitItemStackIds)(Actor *this);</span>
<span class="line">  void (__fastcall *_doInitialMove)(Actor *this);</span>
<span class="line">  bool (__fastcall *checkAllSensitiveWords)(Actor *this);</span>
<span class="line">  bool (__fastcall *checkNameTag)(Actor *this);</span>
<span class="line">  void (__fastcall *~Actor)(Actor *this);</span>
<span class="line">  void (__fastcall *reset)(Actor *this);</span>
<span class="line">  int (__fastcall *getOnDeathExperience)(Actor *this);</span>
<span class="line">  ActorType (__fastcall *getOwnerEntityType)(Actor *this);</span>
<span class="line">  void (__fastcall *remove)(Actor *this);</span>
<span class="line">  void (__fastcall *setPos)(Actor *this, const Vec3 *);</span>
<span class="line">  const PredictedMovementValues *(__fastcall *getPredictedMovementValues)(Actor *this);</span>
<span class="line">  const Vec3 *(__fastcall *getPos)(Actor *this);</span>
<span class="line">  const Vec3 *(__fastcall *getPosOld)(Actor *this);</span>
<span class="line">  const Vec3 *(__fastcall *getPosExtrapolated)(Actor *this, const Vec3 *result, float);</span>
<span class="line">  Vec3 *(__fastcall *getAttachPos)(Actor *this, Vec3 *result, ActorLocation, float);</span>
<span class="line">  Vec3 *(__fastcall *getFiringPos)(Actor *this, Vec3 *result);</span>
<span class="line">  void (__fastcall *setRot)(Actor *this, const Vec2 *);</span>
<span class="line">  void (__fastcall *move)(Actor *this, IActorMovementProxy *, const Vec3 *);</span>
<span class="line">  void (__fastcall *move)(Actor *this, const Vec3 *);</span>
<span class="line">  Vec3 *(__fastcall *getInterpolatedRidingPosition)(Actor *this, Vec3 *result, float);</span>
<span class="line">  float (__fastcall *getInterpolatedBodyRot)(Actor *this, float);</span>
<span class="line">  float (__fastcall *getInterpolatedHeadRot)(Actor *this, float);</span>
<span class="line">  float (__fastcall *getInterpolatedBodyYaw)(Actor *this, float);</span>
<span class="line">  float (__fastcall *getYawSpeedInDegreesPerSecond)(Actor *this);</span>
<span class="line">  float (__fastcall *getInterpolatedWalkAnimSpeed)(Actor *this, float);</span>
<span class="line">  Vec3 *(__fastcall *getInterpolatedRidingOffset)(Actor *this, Vec3 *result, float);</span>
<span class="line">  void (__fastcall *checkBlockCollisions)(Actor *this);</span>
<span class="line">  void (__fastcall *checkBlockCollisions)(Actor *this, const AABB *, std::function&lt;void __cdecl(BlockSource &amp;,Block const &amp;,BlockPos const &amp;,Actor &amp;)&gt;);</span>
<span class="line">  bool (__fastcall *isFireImmune)(Actor *this);</span>
<span class="line">  bool (__fastcall *breaksFallingBlocks)(Actor *this);</span>
<span class="line">  void (__fastcall *blockedByShield)(Actor *this, const ActorDamageSource *, Actor *);</span>
<span class="line">  void (__fastcall *teleportTo)(Actor *this, const Vec3 *, bool, int, int, const ActorUniqueID *);</span>
<span class="line">  bool (__fastcall *tryTeleportTo)(Actor *this, const Vec3 *, bool, bool, int, int);</span>
<span class="line">  void (__fastcall *chorusFruitTeleport)(Actor *this, Vec3 *);</span>
<span class="line">  void (__fastcall *lerpTo)(Actor *this, const Vec3 *, const Vec2 *, int);</span>
<span class="line">  void (__fastcall *lerpMotion)(Actor *this, const Vec3 *);</span>
<span class="line">  std::unique_ptr&lt;AddActorBasePacket&gt; *(__fastcall *getAddPacket)(Actor *this, std::unique_ptr&lt;AddActorBasePacket&gt; *result);</span>
<span class="line">  void (__fastcall *normalTick)(Actor *this);</span>
<span class="line">  void (__fastcall *baseTick)(Actor *this);</span>
<span class="line">  void (__fastcall *rideTick)(Actor *this);</span>
<span class="line">  void (__fastcall *positionRider)(Actor *this, Actor *, float);</span>
<span class="line">  float (__fastcall *getRidingHeight)(Actor *this);</span>
<span class="line">  bool (__fastcall *startRiding)(Actor *this, Actor *);</span>
<span class="line">  void (__fastcall *addRider)(Actor *this, Actor *);</span>
<span class="line">  void (__fastcall *flagRiderToRemove)(Actor *this, Actor *);</span>
<span class="line">  std::string *(__fastcall *getExitTip)(Actor *this, std::string *result, const std::string *, InputMode);</span>
<span class="line">  bool (__fastcall *intersects)(Actor *this, const Vec3 *, const Vec3 *);</span>
<span class="line">  bool (__fastcall *isFree)(Actor *this, const Vec3 *);</span>
<span class="line">  bool (__fastcall *isFree)(Actor *this, const Vec3 *, float);</span>
<span class="line">  bool (__fastcall *isInWall)(Actor *this);</span>
<span class="line">  bool (__fastcall *isInvisible)(Actor *this);</span>
<span class="line">  bool (__fastcall *canShowNameTag)(Actor *this);</span>
<span class="line">  bool (__fastcall *canExistInPeaceful)(Actor *this);</span>
<span class="line">  void (__fastcall *setNameTagVisible)(Actor *this, bool);</span>
<span class="line">  const std::string *(__fastcall *getNameTag)(Actor *this);</span>
<span class="line">  unsigned __int64 (__fastcall *getNameTagAsHash)(Actor *this);</span>
<span class="line">  std::string *(__fastcall *getFormattedNameTag)(Actor *this, std::string *result);</span>
<span class="line">  void (__fastcall *filterFormattedNameTag)(Actor *this, const UIProfanityContext *);</span>
<span class="line">  void (__fastcall *setNameTag)(Actor *this, const std::string *);</span>
<span class="line">  bool (__fastcall *getAlwaysShowNameTag)(Actor *this);</span>
<span class="line">  void (__fastcall *setScoreTag)(Actor *this, const std::string *);</span>
<span class="line">  const std::string *(__fastcall *getScoreTag)(Actor *this);</span>
<span class="line">  bool (__fastcall *isInWater)(Actor *this);</span>
<span class="line">  bool (__fastcall *hasEnteredWater)(Actor *this);</span>
<span class="line">  bool (__fastcall *isImmersedInWater)(Actor *this);</span>
<span class="line">  bool (__fastcall *isInWaterOrRain)(Actor *this);</span>
<span class="line">  bool (__fastcall *isInLava)(Actor *this);</span>
<span class="line">  bool (__fastcall *isUnderLiquid)(Actor *this, MaterialType);</span>
<span class="line">  bool (__fastcall *isOverWater)(Actor *this);</span>
<span class="line">  void (__fastcall *makeStuckInBlock)(Actor *this, const Vec3 *);</span>
<span class="line">  float (__fastcall *getCameraOffset)(Actor *this);</span>
<span class="line">  float (__fastcall *getShadowHeightOffs)(Actor *this);</span>
<span class="line">  float (__fastcall *getShadowRadius)(Actor *this);</span>
<span class="line">  Vec3 *(__fastcall *getHeadLookVector)(Actor *this, Vec3 *result, float);</span>
<span class="line">  bool (__fastcall *canSeeInvisible)(Actor *this);</span>
<span class="line">  bool (__fastcall *canSee)(Actor *this, const Vec3 *);</span>
<span class="line">  bool (__fastcall *canSee)(Actor *this, const Actor *);</span>
<span class="line">  bool (__fastcall *isSkyLit)(Actor *this, float);</span>
<span class="line">  float (__fastcall *getBrightness)(Actor *this, float);</span>
<span class="line">  bool (__fastcall *interactPreventDefault)(Actor *this);</span>
<span class="line">  void (__fastcall *playerTouch)(Actor *this, Player *);</span>
<span class="line">  void (__fastcall *onAboveBubbleColumn)(Actor *this, const bool);</span>
<span class="line">  void (__fastcall *onInsideBubbleColumn)(Actor *this, const bool);</span>
<span class="line">  bool (__fastcall *isImmobile)(Actor *this);</span>
<span class="line">  bool (__fastcall *isSilent)(Actor *this);</span>
<span class="line">  bool (__fastcall *isPickable)(Actor *this);</span>
<span class="line">  bool (__fastcall *isFishable)(Actor *this);</span>
<span class="line">  bool (__fastcall *isSleeping)(Actor *this);</span>
<span class="line">  bool (__fastcall *isShootable)(Actor *this);</span>
<span class="line">  void (__fastcall *setSneaking)(Actor *this, bool);</span>
<span class="line">  bool (__fastcall *isBlocking)(Actor *this);</span>
<span class="line">  bool (__fastcall *isDamageBlocked)(Actor *this, const ActorDamageSource *);</span>
<span class="line">  bool (__fastcall *isAlive)(Actor *this);</span>
<span class="line">  bool (__fastcall *isOnFire)(Actor *this);</span>
<span class="line">  bool (__fastcall *isOnHotBlock)(Actor *this);</span>
<span class="line">  bool (__fastcall *isCreativeModeAllowed)(Actor *this);</span>
<span class="line">  bool (__fastcall *isSurfaceMob)(Actor *this);</span>
<span class="line">  bool (__fastcall *isTargetable)(Actor *this);</span>
<span class="line">  bool (__fastcall *isLocalPlayer)(Actor *this);</span>
<span class="line">  bool (__fastcall *isPlayer)(Actor *this);</span>
<span class="line">  bool (__fastcall *canAttack)(Actor *this, Actor *, bool);</span>
<span class="line">  void (__fastcall *setTarget)(Actor *this, Actor *);</span>
<span class="line">  Actor *(__fastcall *findAttackTarget)(Actor *this);</span>
<span class="line">  bool (__fastcall *isValidTarget)(Actor *this, Actor *);</span>
<span class="line">  bool (__fastcall *attack)(Actor *this, Actor *);</span>
<span class="line">  void (__fastcall *performRangedAttack)(Actor *this, Actor *, float);</span>
<span class="line">  void (__fastcall *adjustDamageAmount)(Actor *this, int *);</span>
<span class="line">  int (__fastcall *getEquipmentCount)(Actor *this);</span>
<span class="line">  void (__fastcall *setOwner)(Actor *this, const ActorUniqueID);</span>
<span class="line">  void (__fastcall *setSitting)(Actor *this, bool);</span>
<span class="line">  void (__fastcall *onTame)(Actor *this);</span>
<span class="line">  void (__fastcall *onFailedTame)(Actor *this);</span>
<span class="line">  int (__fastcall *getInventorySize)(Actor *this);</span>
<span class="line">  int (__fastcall *getEquipSlots)(Actor *this);</span>
<span class="line">  int (__fastcall *getChestSlots)(Actor *this);</span>
<span class="line">  void (__fastcall *setStanding)(Actor *this, bool);</span>
<span class="line">  bool (__fastcall *canPowerJump)(Actor *this);</span>
<span class="line">  void (__fastcall *setCanPowerJump)(Actor *this, bool);</span>
<span class="line">  bool (__fastcall *isJumping)(Actor *this);</span>
<span class="line">  bool (__fastcall *isEnchanted)(Actor *this);</span>
<span class="line">  void (__fastcall *rideJumped)(Actor *this);</span>
<span class="line">  void (__fastcall *rideLanded)(Actor *this, const Vec3 *, const Vec3 *);</span>
<span class="line">  bool (__fastcall *shouldRender)(Actor *this);</span>
<span class="line">  bool (__fastcall *isInvulnerableTo)(Actor *this, const ActorDamageSource *);</span>
<span class="line">  ActorDamageCause (__fastcall *getBlockDamageCause)(Actor *this, const Block *);</span>
<span class="line">  void (__fastcall *actuallyHurt)(Actor *this, int, const ActorDamageSource *, bool);</span>
<span class="line">  void (__fastcall *animateHurt)(Actor *this);</span>
<span class="line">  bool (__fastcall *doFireHurt)(Actor *this, int);</span>
<span class="line">  void (__fastcall *onLightningHit)(Actor *this);</span>
<span class="line">  void (__fastcall *onBounceStarted)(Actor *this, const BlockPos *, const Block *);</span>
<span class="line">  void (__fastcall *feed)(Actor *this, int);</span>
<span class="line">  void (__fastcall *handleEntityEvent)(Actor *this, ActorEvent, int);</span>
<span class="line">  float (__fastcall *getPickRadius)(Actor *this);</span>
<span class="line">  const HashedString *(__fastcall *getActorRendererId)(Actor *this);</span>
<span class="line">  ItemActor *(__fastcall *spawnAtLocation)(Actor *this, const ItemStack *, float);</span>
<span class="line">  ItemActor *(__fastcall *spawnAtLocation)(Actor *this, const Block *, int, float);</span>
<span class="line">  ItemActor *(__fastcall *spawnAtLocation)(Actor *this, const Block *, int);</span>
<span class="line">  ItemActor *(__fastcall *spawnAtLocation)(Actor *this, int, int, float);</span>
<span class="line">  ItemActor *(__fastcall *spawnAtLocation)(Actor *this, int, int);</span>
<span class="line">  void (__fastcall *despawn)(Actor *this);</span>
<span class="line">  void (__fastcall *killed)(Actor *this, Actor *);</span>
<span class="line">  void (__fastcall *awardKillScore)(Actor *this, Actor *, int);</span>
<span class="line">  void (__fastcall *setArmor)(Actor *this, ArmorSlot, const ItemStack *);</span>
<span class="line">  const ItemStack *(__fastcall *getArmor)(Actor *this, ArmorSlot);</span>
<span class="line">  ArmorMaterialType (__fastcall *getArmorMaterialTypeInSlot)(Actor *this, ArmorSlot);</span>
<span class="line">  ArmorTextureType (__fastcall *getArmorMaterialTextureTypeInSlot)(Actor *this, ArmorSlot);</span>
<span class="line">  float (__fastcall *getArmorColorInSlot)(Actor *this, ArmorSlot, int);</span>
<span class="line">  const ItemStack *(__fastcall *getEquippedSlot)(Actor *this, EquipmentSlot);</span>
<span class="line">  void (__fastcall *setEquippedSlot)(Actor *this, EquipmentSlot, const ItemStack *);</span>
<span class="line">  const ItemStack *(__fastcall *getCarriedItem)(Actor *this);</span>
<span class="line">  void (__fastcall *setCarriedItem)(Actor *this, const ItemStack *);</span>
<span class="line">  void (__fastcall *setOffhandSlot)(Actor *this, const ItemStack *);</span>
<span class="line">  const ItemStack *(__fastcall *getEquippedTotem)(Actor *this);</span>
<span class="line">  bool (__fastcall *consumeTotem)(Actor *this);</span>
<span class="line">  bool (__fastcall *save)(Actor *this, CompoundTag *);</span>
<span class="line">  void (__fastcall *saveWithoutId)(Actor *this, CompoundTag *);</span>
<span class="line">  bool (__fastcall *load)(Actor *this, const CompoundTag *, DataLoadHelper *);</span>
<span class="line">  void (__fastcall *loadLinks)(Actor *this, const CompoundTag *, std::vector&lt;ActorLink&gt; *, DataLoadHelper *);</span>
<span class="line">  ActorType (__fastcall *getEntityTypeId)(Actor *this);</span>
<span class="line">  const HashedString *(__fastcall *queryEntityRenderer)(Actor *this);</span>
<span class="line">  ActorUniqueID *(__fastcall *getSourceUniqueID)(Actor *this, ActorUniqueID *result);</span>
<span class="line">  void (__fastcall *setOnFire)(Actor *this, int);</span>
<span class="line">  AABB *(__fastcall *getHandleWaterAABB)(Actor *this, AABB *result);</span>
<span class="line">  void (__fastcall *handleInsidePortal)(Actor *this, const BlockPos *);</span>
<span class="line">  int (__fastcall *getPortalCooldown)(Actor *this);</span>
<span class="line">  int (__fastcall *getPortalWaitTime)(Actor *this);</span>
<span class="line">  AutomaticID&lt;Dimension,int&gt; *(__fastcall *getDimensionId)(Actor *this, AutomaticID&lt;Dimension,int&gt; *result);</span>
<span class="line">  bool (__fastcall *canChangeDimensions)(Actor *this);</span>
<span class="line">  void (__fastcall *changeDimension)(Actor *this, const ChangeDimensionPacket *);</span>
<span class="line">  void (__fastcall *changeDimension)(Actor *this, AutomaticID&lt;Dimension,int&gt;, bool);</span>
<span class="line">  ActorUniqueID *(__fastcall *getControllingPlayer)(Actor *this, ActorUniqueID *result);</span>
<span class="line">  void (__fastcall *checkFallDamage)(Actor *this, float, bool);</span>
<span class="line">  void (__fastcall *causeFallDamage)(Actor *this, float);</span>
<span class="line">  void (__fastcall *handleFallDistanceOnServer)(Actor *this, float, bool);</span>
<span class="line">  void (__fastcall *playSynchronizedSound)(Actor *this, LevelSoundEvent, const Vec3 *, int, bool);</span>
<span class="line">  void (__fastcall *playSynchronizedSound)(Actor *this, LevelSoundEvent, const Vec3 *, const Block *, bool);</span>
<span class="line">  void (__fastcall *onSynchedDataUpdate)(Actor *this, int);</span>
<span class="line">  bool (__fastcall *canAddRider)(Actor *this, Actor *);</span>
<span class="line">  bool (__fastcall *canPickupItem)(Actor *this, const ItemStack *);</span>
<span class="line">  bool (__fastcall *canBePulledIntoVehicle)(Actor *this);</span>
<span class="line">  bool (__fastcall *inCaravan)(Actor *this);</span>
<span class="line">  bool (__fastcall *isLeashableType)(Actor *this);</span>
<span class="line">  void (__fastcall *tickLeash)(Actor *this);</span>
<span class="line">  void (__fastcall *sendMotionPacketIfNeeded)(Actor *this);</span>
<span class="line">  bool (__fastcall *canSynchronizeNewEntity)(Actor *this);</span>
<span class="line">  bool (__fastcall *stopRiding)(Actor *this, bool, bool, bool, bool);</span>
<span class="line">  void (__fastcall *startSwimming)(Actor *this);</span>
<span class="line">  void (__fastcall *stopSwimming)(Actor *this);</span>
<span class="line">  void (__fastcall *buildDebugInfo)(Actor *this, std::string *);</span>
<span class="line">  CommandPermissionLevel (__fastcall *getCommandPermissionLevel)(Actor *this);</span>
<span class="line">  AttributeInstance *(__fastcall *getMutableAttribute)(Actor *this, const Attribute *);</span>
<span class="line">  const AttributeInstance *(__fastcall *getAttribute)(Actor *this, const Attribute *);</span>
<span class="line">  int (__fastcall *getDeathTime)(Actor *this);</span>
<span class="line">  void (__fastcall *heal)(Actor *this, int);</span>
<span class="line">  bool (__fastcall *isInvertedHealAndHarm)(Actor *this);</span>
<span class="line">  bool (__fastcall *canBeAffected)(Actor *this, const MobEffectInstance *);</span>
<span class="line">  bool (__fastcall *canBeAffected)(Actor *this, int);</span>
<span class="line">  bool (__fastcall *canBeAffectedByArrow)(Actor *this, const MobEffectInstance *);</span>
<span class="line">  void (__fastcall *onEffectAdded)(Actor *this, MobEffectInstance *);</span>
<span class="line">  void (__fastcall *onEffectUpdated)(Actor *this, const MobEffectInstance *);</span>
<span class="line">  void (__fastcall *onEffectRemoved)(Actor *this, MobEffectInstance *);</span>
<span class="line">  AnimationComponent *(__fastcall *getAnimationComponent)(Actor *this);</span>
<span class="line">  void (__fastcall *openContainerComponent)(Actor *this, Player *);</span>
<span class="line">  void (__fastcall *swing)(Actor *this);</span>
<span class="line">  void (__fastcall *useItem)(Actor *this, ItemStackBase *, ItemUseMethod, bool);</span>
<span class="line">  bool (__fastcall *hasOutputSignal)(Actor *this, unsigned __int8);</span>
<span class="line">  int (__fastcall *getOutputSignal)(Actor *this);</span>
<span class="line">  void (__fastcall *getDebugText)(Actor *this, std::vector&lt;std::string&gt; *);</span>
<span class="line">  float (__fastcall *getMapDecorationRotation)(Actor *this);</span>
<span class="line">  float (__fastcall *getRiderYRotation)(Actor *this, const Actor *);</span>
<span class="line">  float (__fastcall *getYHeadRot)(Actor *this);</span>
<span class="line">  bool (__fastcall *isWorldBuilder)(Actor *this);</span>
<span class="line">  bool (__fastcall *isCreative)(Actor *this);</span>
<span class="line">  bool (__fastcall *isAdventure)(Actor *this);</span>
<span class="line">  bool (__fastcall *add)(Actor *this, ItemStack *);</span>
<span class="line">  bool (__fastcall *drop)(Actor *this, const ItemStack *, bool);</span>
<span class="line">  bool (__fastcall *getInteraction)(Actor *this, Player *, ActorInteraction *, const Vec3 *);</span>
<span class="line">  bool (__fastcall *canDestroyBlock)(Actor *this, const Block *);</span>
<span class="line">  void (__fastcall *setAuxValue)(Actor *this, int);</span>
<span class="line">  void (__fastcall *setSize)(Actor *this, float, float);</span>
<span class="line">  int (__fastcall *getLifeSpan)(Actor *this);</span>
<span class="line">  void (__fastcall *onOrphan)(Actor *this);</span>
<span class="line">  void (__fastcall *wobble)(Actor *this);</span>
<span class="line">  bool (__fastcall *wasHurt)(Actor *this);</span>
<span class="line">  void (__fastcall *startSpinAttack)(Actor *this);</span>
<span class="line">  void (__fastcall *stopSpinAttack)(Actor *this);</span>
<span class="line">  void (__fastcall *setDamageNearbyMobs)(Actor *this, bool);</span>
<span class="line">  bool (__fastcall *hasCritBox)(Actor *this);</span>
<span class="line">  bool (__fastcall *isCritHit)(Actor *this);</span>
<span class="line">  void (__fastcall *renderDebugServerState)(Actor *this, const Options *);</span>
<span class="line">  void (__fastcall *reloadLootTable)(Actor *this, const EquipmentTableDefinition *);</span>
<span class="line">  void (__fastcall *reloadLootTable)(Actor *this);</span>
<span class="line">  float (__fastcall *getDeletionDelayTimeSeconds)(Actor *this);</span>
<span class="line">  void (__fastcall *kill)(Actor *this);</span>
<span class="line">  void (__fastcall *die)(Actor *this, const ActorDamageSource *);</span>
<span class="line">  bool (__fastcall *shouldTick)(Actor *this);</span>
<span class="line">  std::shared_ptr&lt;IActorMovementProxy&gt; *(__fastcall *createMovementProxy)(Actor *this, std::shared_ptr&lt;IActorMovementProxy&gt; *result);</span>
<span class="line">  void (__fastcall *updateEntitySpecificMolangVariables)(Actor *this, RenderParams *);</span>
<span class="line">  bool (__fastcall *shouldTryMakeStepSound)(Actor *this);</span>
<span class="line">  float (__fastcall *getNextStep)(Actor *this, const float);</span>
<span class="line">  bool (__fastcall *canMakeStepSound)(Actor *this);</span>
<span class="line">  void (__fastcall *outOfWorld)(Actor *this);</span>
<span class="line">  bool (__fastcall *_hurt)(Actor *this, const ActorDamageSource *, int, bool, bool);</span>
<span class="line">  void (__fastcall *markHurt)(Actor *this);</span>
<span class="line">  void (__fastcall *readAdditionalSaveData)(Actor *this, const CompoundTag *, DataLoadHelper *);</span>
<span class="line">  void (__fastcall *addAdditionalSaveData)(Actor *this, CompoundTag *);</span>
<span class="line">  void (__fastcall *_playStepSound)(Actor *this, const BlockPos *, const Block *);</span>
<span class="line">  void (__fastcall *_playFlySound)(Actor *this, const BlockPos *, const Block *);</span>
<span class="line">  bool (__fastcall *_makeFlySound)(Actor *this);</span>
<span class="line">  void (__fastcall *checkInsideBlocks)(Actor *this, float);</span>
<span class="line">  void (__fastcall *pushOutOfBlocks)(Actor *this, const Vec3 *);</span>
<span class="line">  bool (__fastcall *updateWaterState)(Actor *this);</span>
<span class="line">  void (__fastcall *doWaterSplashEffect)(Actor *this);</span>
<span class="line">  void (__fastcall *spawnTrailBubbles)(Actor *this);</span>
<span class="line">  void (__fastcall *updateInsideBlock)(Actor *this);</span>
<span class="line">  LootTable *(__fastcall *getLootTable)(Actor *this);</span>
<span class="line">  LootTable *(__fastcall *getDefaultLootTable)(Actor *this);</span>
<span class="line">  void (__fastcall *_removeRider)(Actor *this, const ActorUniqueID *, bool, bool, bool);</span>
<span class="line">  void (__fastcall *_onSizeUpdated)(Actor *this);</span>
<span class="line">  void (__fastcall *_doAutoAttackOnTouch)(Actor *this, Actor *);</span>
<span class="line">  void (__fastcall *knockback)(Mob *this, Actor *, int, float, float, float, float, float);</span>
<span class="line">  void (__fastcall *resolveDeathLoot)(Mob *this, int, const ActorDamageSource *);</span>
<span class="line">  void (__fastcall *spawnAnim)(Mob *this);</span>
<span class="line">  void (__fastcall *setSleeping)(Mob *this, bool);</span>
<span class="line">  void (__fastcall *setSprinting)(Mob *this, bool);</span>
<span class="line">  void (__fastcall *playAmbientSound)(Mob *this);</span>
<span class="line">  LevelSoundEvent (__fastcall *getAmbientSound)(Mob *this);</span>
<span class="line">  int (__fastcall *getAmbientSoundPostponeTicks)(Mob *this);</span>
<span class="line">  int (__fastcall *getAmbientSoundPostponeTicksRange)(Mob *this);</span>
<span class="line">  const TextureUVCoordinateSet *(__fastcall *getItemInHandIcon)(Mob *this, const ItemStack *, int);</span>
<span class="line">  float (__fastcall *getSpeed)(Mob *this);</span>
<span class="line">  void (__fastcall *setSpeed)(Mob *this, float);</span>
<span class="line">  float (__fastcall *getJumpPower)(Mob *this);</span>
<span class="line">  bool (__fastcall *hurtEffects)(Mob *this, const ActorDamageSource *, int, bool, bool);</span>
<span class="line">  int (__fastcall *getMeleeWeaponDamageBonus)(Mob *this, Mob *);</span>
<span class="line">  int (__fastcall *getMeleeKnockbackBonus)(Mob *this);</span>
<span class="line">  void (__fastcall *travel)(Mob *this, IMobMovementProxy *, float, float, float);</span>
<span class="line">  void (__fastcall *travel)(Mob *this, float, float, float);</span>
<span class="line">  void (__fastcall *applyFinalFriction)(Mob *this, float, bool);</span>
<span class="line">  void (__fastcall *updateWalkAnim)(Mob *this);</span>
<span class="line">  void (__fastcall *aiStep)(Mob *this, IMobMovementProxy *);</span>
<span class="line">  void (__fastcall *aiStep)(Mob *this);</span>
<span class="line">  void (__fastcall *pushActors)(Mob *this);</span>
<span class="line">  void (__fastcall *lookAt)(Mob *this, Actor *, float, float);</span>
<span class="line">  bool (__fastcall *isLookingAtAnEntity)(Mob *this);</span>
<span class="line">  bool (__fastcall *checkSpawnRules)(Mob *this, bool);</span>
<span class="line">  bool (__fastcall *checkSpawnObstruction)(Mob *this);</span>
<span class="line">  float (__fastcall *getAttackAnim)(Mob *this, float);</span>
<span class="line">  int (__fastcall *getItemUseDuration)(Mob *this);</span>
<span class="line">  float (__fastcall *getItemUseStartupProgress)(Mob *this);</span>
<span class="line">  float (__fastcall *getItemUseIntervalProgress)(Mob *this);</span>
<span class="line">  int (__fastcall *getItemuseIntervalAxis)(Mob *this);</span>
<span class="line">  int (__fastcall *getTimeAlongSwing)(Mob *this);</span>
<span class="line">  void (__fastcall *ate)(Mob *this);</span>
<span class="line">  float (__fastcall *getMaxHeadXRot)(Mob *this);</span>
<span class="line">  Mob *(__fastcall *getLastHurtByMob)(Mob *this);</span>
<span class="line">  void (__fastcall *setLastHurtByMob)(Mob *this, Mob *);</span>
<span class="line">  Player *(__fastcall *getLastHurtByPlayer)(Mob *this);</span>
<span class="line">  void (__fastcall *setLastHurtByPlayer)(Mob *this, Player *);</span>
<span class="line">  Mob *(__fastcall *getLastHurtMob)(Mob *this);</span>
<span class="line">  void (__fastcall *setLastHurtMob)(Mob *this, Actor *);</span>
<span class="line">  bool (__fastcall *isAlliedTo)(Mob *this, Mob *);</span>
<span class="line">  bool (__fastcall *doHurtTarget)(Mob *this, Actor *);</span>
<span class="line">  bool (__fastcall *canBeControlledByRider)(Mob *this);</span>
<span class="line">  void (__fastcall *leaveCaravan)(Mob *this);</span>
<span class="line">  void (__fastcall *joinCaravan)(Mob *this, Mob *);</span>
<span class="line">  bool (__fastcall *hasCaravanTail)(Mob *this);</span>
<span class="line">  ActorUniqueID *(__fastcall *getCaravanHead)(Mob *this, ActorUniqueID *result);</span>
<span class="line">  int (__fastcall *getArmorValue)(Mob *this);</span>
<span class="line">  float (__fastcall *getArmorCoverPercentage)(Mob *this);</span>
<span class="line">  void (__fastcall *hurtArmor)(Mob *this, const ActorDamageSource *, int, const std::bitset&lt;4&gt; *);</span>
<span class="line">  void (__fastcall *hurtArmor)(Mob *this, const ActorDamageSource *, int);</span>
<span class="line">  void (__fastcall *hurtArmorSlot)(Mob *this, const ActorDamageSource *, int, ArmorSlot);</span>
<span class="line">  void (__fastcall *setDamagedArmor)(Mob *this, ArmorSlot, const ItemStack *);</span>
<span class="line">  void (__fastcall *sendArmorDamage)(Mob *this, const std::bitset&lt;4&gt; *);</span>
<span class="line">  void (__fastcall *sendArmor)(Mob *this, const std::bitset&lt;4&gt; *);</span>
<span class="line">  void (__fastcall *containerChanged)(Mob *this, int);</span>
<span class="line">  void (__fastcall *updateEquipment)(Mob *this);</span>
<span class="line">  int (__fastcall *clearEquipment)(Mob *this);</span>
<span class="line">  std::vector&lt;ItemStack const *&gt; *(__fastcall *getAllArmor)(Mob *this, std::vector&lt;ItemStack const *&gt; *result);</span>
<span class="line">  std::vector&lt;int&gt; *(__fastcall *getAllArmorID)(Mob *this, std::vector&lt;int&gt; *result);</span>
<span class="line">  std::vector&lt;ItemStack const *&gt; *(__fastcall *getAllHand)(Mob *this, std::vector&lt;ItemStack const *&gt; *result);</span>
<span class="line">  std::vector&lt;ItemStack const *&gt; *(__fastcall *getAllEquipment)(Mob *this, std::vector&lt;ItemStack const *&gt; *result);</span>
<span class="line">  int (__fastcall *getArmorTypeHash)(Mob *this);</span>
<span class="line">  void (__fastcall *dropEquipmentOnDeath)(Mob *this);</span>
<span class="line">  void (__fastcall *dropEquipmentOnDeath)(Mob *this, const ActorDamageSource *, int);</span>
<span class="line">  void (__fastcall *clearVanishEnchantedItemsOnDeath)(Mob *this);</span>
<span class="line">  void (__fastcall *sendInventory)(Mob *this, bool);</span>
<span class="line">  int (__fastcall *getDamageAfterMagicAbsorb)(Mob *this, const ActorDamageSource *, int);</span>
<span class="line">  bool (__fastcall *createAIGoals)(Mob *this);</span>
<span class="line">  void (__fastcall *onBorn)(Mob *this, Actor *, Actor *);</span>
<span class="line">  bool (__fastcall *setItemSlot)(Mob *this, EquipmentSlot, const ItemStack *);</span>
<span class="line">  void (__fastcall *setTransitioningSitting)(Mob *this, bool);</span>
<span class="line">  void (__fastcall *attackAnimation)(Mob *this, Actor *, float);</span>
<span class="line">  int (__fastcall *getAttackTime)(Mob *this);</span>
<span class="line">  float (__fastcall *_getWalkTargetValue)(Mob *this, const BlockPos *);</span>
<span class="line">  bool (__fastcall *canExistWhenDisallowMob)(Mob *this);</span>
<span class="line">  bool (__fastcall *useNewAi)(Mob *this);</span>
<span class="line">  void (__fastcall *ascendLadder)(Mob *this);</span>
<span class="line">  void (__fastcall *ascendScaffolding)(Mob *this);</span>
<span class="line">  void (__fastcall *descendScaffolding)(Mob *this);</span>
<span class="line">  void (__fastcall *dropContainer)(Mob *this);</span>
<span class="line">  std::unique_ptr&lt;BodyControl&gt; *(__fastcall *initBodyControl)(Mob *this, std::unique_ptr&lt;BodyControl&gt; *result);</span>
<span class="line">  void (__fastcall *jumpFromGround)(Mob *this, IMobMovementProxy *);</span>
<span class="line">  void (__fastcall *jumpFromGround)(Mob *this);</span>
<span class="line">  void (__fastcall *updateAi)(Mob *this);</span>
<span class="line">  void (__fastcall *newServerAiStep)(Mob *this);</span>
<span class="line">  void (__fastcall *_serverAiMobStep)(Mob *this);</span>
<span class="line">  int (__fastcall *getDamageAfterEnchantReduction)(Mob *this, const ActorDamageSource *, int);</span>
<span class="line">  int (__fastcall *getDamageAfterArmorAbsorb)(Mob *this, const ActorDamageSource *, int);</span>
<span class="line">  void (__fastcall *dropBags)(Mob *this);</span>
<span class="line">  void (__fastcall *tickDeath)(Mob *this);</span>
<span class="line">  void (__fastcall *updateGliding)(Mob *this);</span>
<span class="line">  bool (__fastcall *_allowAscendingScaffolding)(Mob *this);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,643),t=[i];function d(r,c){return n(),a("div",null,t)}const o=e(l,[["render",d],["__file","F~1.html.vue"]]),b=JSON.parse('{"path":"/1.16.201/structure/F~1.html","title":"F~1","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"FurnaceContainerManagerModel_vtbl","slug":"furnacecontainermanagermodel-vtbl","link":"#furnacecontainermanagermodel-vtbl","children":[]},{"level":3,"title":"FurnaceContainerManagerController","slug":"furnacecontainermanagercontroller","link":"#furnacecontainermanagercontroller","children":[]},{"level":3,"title":"FurnaceContainerManagerController_vtbl","slug":"furnacecontainermanagercontroller-vtbl","link":"#furnacecontainermanagercontroller-vtbl","children":[]},{"level":3,"title":"FurnaceScreenController","slug":"furnacescreencontroller","link":"#furnacescreencontroller","children":[]},{"level":3,"title":"FurnaceScreenController_vtbl","slug":"furnacescreencontroller-vtbl","link":"#furnacescreencontroller-vtbl","children":[]},{"level":3,"title":"FurnaceScreenController::_registerBindings::__l2::<lambda_8b252d8799f3201f14e8f22b67a665d4>","slug":"furnacescreencontroller-registerbindings-l2-lambda-8b252d8799f3201f14e8f22b67a665d4","link":"#furnacescreencontroller-registerbindings-l2-lambda-8b252d8799f3201f14e8f22b67a665d4","children":[]},{"level":3,"title":"FurnaceScreenController::_registerBindings::__l2::<lambda_219fb25940ffd2a342e13c74eb863d44>","slug":"furnacescreencontroller-registerbindings-l2-lambda-219fb25940ffd2a342e13c74eb863d44","link":"#furnacescreencontroller-registerbindings-l2-lambda-219fb25940ffd2a342e13c74eb863d44","children":[]},{"level":3,"title":"FurnaceScreenController::_registerBindings::__l2::<lambda_deb7bf7a266081449655e5736b99f760>","slug":"furnacescreencontroller-registerbindings-l2-lambda-deb7bf7a266081449655e5736b99f760","link":"#furnacescreencontroller-registerbindings-l2-lambda-deb7bf7a266081449655e5736b99f760","children":[]},{"level":3,"title":"FurnaceScreenController::{ctor}::__l2::<lambda_2876c9fe442ba3f7cdaa0dc604ded28b>","slug":"furnacescreencontroller-ctor-l2-lambda-2876c9fe442ba3f7cdaa0dc604ded28b","link":"#furnacescreencontroller-ctor-l2-lambda-2876c9fe442ba3f7cdaa0dc604ded28b","children":[]},{"level":3,"title":"FurnaceScreenController::{ctor}::__l2::<lambda_eb1105537a6c449769437f9f786d2ef4>","slug":"furnacescreencontroller-ctor-l2-lambda-eb1105537a6c449769437f9f786d2ef4","link":"#furnacescreencontroller-ctor-l2-lambda-eb1105537a6c449769437f9f786d2ef4","children":[]},{"level":3,"title":"FurnaceScreenController::{ctor}::__l2::<lambda_7479bbc8744348aa8405bdb66fd31e31>","slug":"furnacescreencontroller-ctor-l2-lambda-7479bbc8744348aa8405bdb66fd31e31","link":"#furnacescreencontroller-ctor-l2-lambda-7479bbc8744348aa8405bdb66fd31e31","children":[]},{"level":3,"title":"FurnaceScreenController::{ctor}::__l2::<lambda_f5d0e85b7f8dadf280ed4592428a4dc6>","slug":"furnacescreencontroller-ctor-l2-lambda-f5d0e85b7f8dadf280ed4592428a4dc6","link":"#furnacescreencontroller-ctor-l2-lambda-f5d0e85b7f8dadf280ed4592428a4dc6","children":[]},{"level":3,"title":"FindMountGoal","slug":"findmountgoal","link":"#findmountgoal","children":[]},{"level":3,"title":"FindMountGoal_vtbl","slug":"findmountgoal-vtbl","link":"#findmountgoal-vtbl","children":[]},{"level":3,"title":"FindUnderwaterTreasureGoal","slug":"findunderwatertreasuregoal","link":"#findunderwatertreasuregoal","children":[]},{"level":3,"title":"FindUnderwaterTreasureGoal_vtbl","slug":"findunderwatertreasuregoal-vtbl","link":"#findunderwatertreasuregoal-vtbl","children":[]},{"level":3,"title":"FloatGoal","slug":"floatgoal","link":"#floatgoal","children":[]},{"level":3,"title":"FloatGoal_vtbl","slug":"floatgoal-vtbl","link":"#floatgoal-vtbl","children":[]},{"level":3,"title":"FloatWanderGoal","slug":"floatwandergoal","link":"#floatwandergoal","children":[]},{"level":3,"title":"FloatWanderGoal_vtbl","slug":"floatwandergoal-vtbl","link":"#floatwandergoal-vtbl","children":[]},{"level":3,"title":"FollowCaravanGoal","slug":"followcaravangoal","link":"#followcaravangoal","children":[]},{"level":3,"title":"FollowCaravanGoal_vtbl","slug":"followcaravangoal-vtbl","link":"#followcaravangoal-vtbl","children":[]},{"level":3,"title":"FollowMobGoal","slug":"followmobgoal","link":"#followmobgoal","children":[]},{"level":3,"title":"FollowMobGoal_vtbl","slug":"followmobgoal-vtbl","link":"#followmobgoal-vtbl","children":[]},{"level":3,"title":"FollowOwnerGoal","slug":"followownergoal","link":"#followownergoal","children":[]},{"level":3,"title":"FollowOwnerGoal_vtbl","slug":"followownergoal-vtbl","link":"#followownergoal-vtbl","children":[]},{"level":3,"title":"FollowParentGoal","slug":"followparentgoal","link":"#followparentgoal","children":[]},{"level":3,"title":"FollowParentGoal_vtbl","slug":"followparentgoal-vtbl","link":"#followparentgoal-vtbl","children":[]},{"level":3,"title":"FollowTargetCaptainGoal","slug":"followtargetcaptaingoal","link":"#followtargetcaptaingoal","children":[]},{"level":3,"title":"FollowTargetCaptainGoal_vtbl","slug":"followtargetcaptaingoal-vtbl","link":"#followtargetcaptaingoal-vtbl","children":[]},{"level":3,"title":"FurnaceContainerManagerModel::_postInit::__l2::<lambda_d086b2b241b4febd8eb43d27ed1b6c56>","slug":"furnacecontainermanagermodel-postinit-l2-lambda-d086b2b241b4febd8eb43d27ed1b6c56","link":"#furnacecontainermanagermodel-postinit-l2-lambda-d086b2b241b4febd8eb43d27ed1b6c56","children":[]},{"level":3,"title":"FurnaceContainerManagerModel::_postInit::__l2::<lambda_41d3f3b35821c7657e27aa3715ba887f>","slug":"furnacecontainermanagermodel-postinit-l2-lambda-41d3f3b35821c7657e27aa3715ba887f","link":"#furnacecontainermanagermodel-postinit-l2-lambda-41d3f3b35821c7657e27aa3715ba887f","children":[]},{"level":3,"title":"FurnaceContainerManagerModel::_postInit::__l2::<lambda_dd42d545e61f0d9790121fdff57aa595>","slug":"furnacecontainermanagermodel-postinit-l2-lambda-dd42d545e61f0d9790121fdff57aa595","link":"#furnacecontainermanagermodel-postinit-l2-lambda-dd42d545e61f0d9790121fdff57aa595","children":[]},{"level":3,"title":"FlagComponent<DataDrivenBiomeSurface>","slug":"flagcomponent-datadrivenbiomesurface","link":"#flagcomponent-datadrivenbiomesurface","children":[]},{"level":3,"title":"FlagComponent<SwampBiomeSurface>","slug":"flagcomponent-swampbiomesurface","link":"#flagcomponent-swampbiomesurface","children":[]},{"level":3,"title":"FlagComponent<TheEndBiomeSurface>","slug":"flagcomponent-theendbiomesurface","link":"#flagcomponent-theendbiomesurface","children":[]},{"level":3,"title":"FlagComponent<NetherBiomeSurface>","slug":"flagcomponent-netherbiomesurface","link":"#flagcomponent-netherbiomesurface","children":[]},{"level":3,"title":"FlagComponent<OceanFrozenBiomeSurface>","slug":"flagcomponent-oceanfrozenbiomesurface","link":"#flagcomponent-oceanfrozenbiomesurface","children":[]},{"level":3,"title":"FlowerFeature_vtbl","slug":"flowerfeature-vtbl","link":"#flowerfeature-vtbl","children":[]},{"level":3,"title":"FossilFeature","slug":"fossilfeature","link":"#fossilfeature","children":[]},{"level":3,"title":"FossilFeature_vtbl","slug":"fossilfeature-vtbl","link":"#fossilfeature-vtbl","children":[]},{"level":3,"title":"FeatureLoading::ConcreteFeatureHolder<NoSurfaceOreFeature>","slug":"featureloading-concretefeatureholder-nosurfaceorefeature","link":"#featureloading-concretefeatureholder-nosurfaceorefeature","children":[]},{"level":3,"title":"FeatureLoading::ConcreteFeatureHolder<NoSurfaceOreFeature>_vtbl","slug":"featureloading-concretefeatureholder-nosurfaceorefeature-vtbl","link":"#featureloading-concretefeatureholder-nosurfaceorefeature-vtbl","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_e9feacad28ec74e04697d5271a3dc1fa>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-e9feacad28ec74e04697d5271a3dc1fa","link":"#featuretypefactory-registerfeaturetype-l2-lambda-e9feacad28ec74e04697d5271a3dc1fa","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_868951144b11598964e2f9d796a6f40f>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-868951144b11598964e2f9d796a6f40f","link":"#featuretypefactory-registerfeaturetype-l2-lambda-868951144b11598964e2f9d796a6f40f","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_15e6f032b3924bf4fe7c9b8ceac15fb1>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-15e6f032b3924bf4fe7c9b8ceac15fb1","link":"#featuretypefactory-registerfeaturetype-l2-lambda-15e6f032b3924bf4fe7c9b8ceac15fb1","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_aa6df50b2b02ad53c22ecaedc728939b>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-aa6df50b2b02ad53c22ecaedc728939b","link":"#featuretypefactory-registerfeaturetype-l2-lambda-aa6df50b2b02ad53c22ecaedc728939b","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_f64ca177a2d5b874b9dac3a1eb603d7b>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-f64ca177a2d5b874b9dac3a1eb603d7b","link":"#featuretypefactory-registerfeaturetype-l2-lambda-f64ca177a2d5b874b9dac3a1eb603d7b","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_21ba44180a68a30be5ff312c899b021d>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-21ba44180a68a30be5ff312c899b021d","link":"#featuretypefactory-registerfeaturetype-l2-lambda-21ba44180a68a30be5ff312c899b021d","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_b74ff55c7814b9b2af7348ea9199ae14>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-b74ff55c7814b9b2af7348ea9199ae14","link":"#featuretypefactory-registerfeaturetype-l2-lambda-b74ff55c7814b9b2af7348ea9199ae14","children":[]},{"level":3,"title":"FeatureLoading::ConcreteFeatureHolder<VanillaTreeFeature>","slug":"featureloading-concretefeatureholder-vanillatreefeature","link":"#featureloading-concretefeatureholder-vanillatreefeature","children":[]},{"level":3,"title":"FeatureLoading::ConcreteFeatureHolder<VanillaTreeFeature>_vtbl","slug":"featureloading-concretefeatureholder-vanillatreefeature-vtbl","link":"#featureloading-concretefeatureholder-vanillatreefeature-vtbl","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_f22ee483f0e3f10db1da66750ae605fb>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-f22ee483f0e3f10db1da66750ae605fb","link":"#featuretypefactory-registerfeaturetype-l2-lambda-f22ee483f0e3f10db1da66750ae605fb","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_916f9942766fafe927fde16e69817125>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-916f9942766fafe927fde16e69817125","link":"#featuretypefactory-registerfeaturetype-l2-lambda-916f9942766fafe927fde16e69817125","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_0b0a3ede3574c74346873bb21facb949>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-0b0a3ede3574c74346873bb21facb949","link":"#featuretypefactory-registerfeaturetype-l2-lambda-0b0a3ede3574c74346873bb21facb949","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l3::<lambda_b0c0bf51e75e357ddc865b3f69ce7b34>","slug":"featuretypefactory-registerfeaturetype-l3-lambda-b0c0bf51e75e357ddc865b3f69ce7b34","link":"#featuretypefactory-registerfeaturetype-l3-lambda-b0c0bf51e75e357ddc865b3f69ce7b34","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_a2186ac5ea5f720e40618b767ab265ea>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-a2186ac5ea5f720e40618b767ab265ea","link":"#featuretypefactory-registerfeaturetype-l2-lambda-a2186ac5ea5f720e40618b767ab265ea","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_4b9e3539b1944c4f70eaf1f641326d8d>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-4b9e3539b1944c4f70eaf1f641326d8d","link":"#featuretypefactory-registerfeaturetype-l2-lambda-4b9e3539b1944c4f70eaf1f641326d8d","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l3::<lambda_f06c3c69504afec25894d441e9836c05>","slug":"featuretypefactory-registerfeaturetype-l3-lambda-f06c3c69504afec25894d441e9836c05","link":"#featuretypefactory-registerfeaturetype-l3-lambda-f06c3c69504afec25894d441e9836c05","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_dc5cf81ab7fc5d6b6724e5e4db839a0d>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-dc5cf81ab7fc5d6b6724e5e4db839a0d","link":"#featuretypefactory-registerfeaturetype-l2-lambda-dc5cf81ab7fc5d6b6724e5e4db839a0d","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_fcd2a723d3996ebe522810bfe7f1a1be>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-fcd2a723d3996ebe522810bfe7f1a1be","link":"#featuretypefactory-registerfeaturetype-l2-lambda-fcd2a723d3996ebe522810bfe7f1a1be","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l3::<lambda_5cea9c8a86542dff48b9f5532838cb31>","slug":"featuretypefactory-registerfeaturetype-l3-lambda-5cea9c8a86542dff48b9f5532838cb31","link":"#featuretypefactory-registerfeaturetype-l3-lambda-5cea9c8a86542dff48b9f5532838cb31","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_3173c53d21c8d45788e4cb927b08dd46>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-3173c53d21c8d45788e4cb927b08dd46","link":"#featuretypefactory-registerfeaturetype-l2-lambda-3173c53d21c8d45788e4cb927b08dd46","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_84363a427a92165a161b30f750ce3f6c>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-84363a427a92165a161b30f750ce3f6c","link":"#featuretypefactory-registerfeaturetype-l2-lambda-84363a427a92165a161b30f750ce3f6c","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l3::<lambda_d94eef415bed06894be873e22eb0d904>","slug":"featuretypefactory-registerfeaturetype-l3-lambda-d94eef415bed06894be873e22eb0d904","link":"#featuretypefactory-registerfeaturetype-l3-lambda-d94eef415bed06894be873e22eb0d904","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_2d44a01843018fb68c4486d269509bb8>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-2d44a01843018fb68c4486d269509bb8","link":"#featuretypefactory-registerfeaturetype-l2-lambda-2d44a01843018fb68c4486d269509bb8","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_ac7f36bdba362efb7bd96b74ba0d1b3c>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-ac7f36bdba362efb7bd96b74ba0d1b3c","link":"#featuretypefactory-registerfeaturetype-l2-lambda-ac7f36bdba362efb7bd96b74ba0d1b3c","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l3::<lambda_8233821cff8f4b7304cabff19abadf1a>","slug":"featuretypefactory-registerfeaturetype-l3-lambda-8233821cff8f4b7304cabff19abadf1a","link":"#featuretypefactory-registerfeaturetype-l3-lambda-8233821cff8f4b7304cabff19abadf1a","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_295f269c328de6adec6789fbbc023222>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-295f269c328de6adec6789fbbc023222","link":"#featuretypefactory-registerfeaturetype-l2-lambda-295f269c328de6adec6789fbbc023222","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_b2e56994fe64c170baa41fdf8d3d5a20>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-b2e56994fe64c170baa41fdf8d3d5a20","link":"#featuretypefactory-registerfeaturetype-l2-lambda-b2e56994fe64c170baa41fdf8d3d5a20","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l3::<lambda_97d1bf05ce985165eafc8fda082d19a6>","slug":"featuretypefactory-registerfeaturetype-l3-lambda-97d1bf05ce985165eafc8fda082d19a6","link":"#featuretypefactory-registerfeaturetype-l3-lambda-97d1bf05ce985165eafc8fda082d19a6","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_fd86a1616f54f9c08d81fa4adb11665c>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-fd86a1616f54f9c08d81fa4adb11665c","link":"#featuretypefactory-registerfeaturetype-l2-lambda-fd86a1616f54f9c08d81fa4adb11665c","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_12c9bcad1e74ec5e93ad0df7b8021689>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-12c9bcad1e74ec5e93ad0df7b8021689","link":"#featuretypefactory-registerfeaturetype-l2-lambda-12c9bcad1e74ec5e93ad0df7b8021689","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l3::<lambda_6181f3af474ecbd64bd3b259f51dc62f>","slug":"featuretypefactory-registerfeaturetype-l3-lambda-6181f3af474ecbd64bd3b259f51dc62f","link":"#featuretypefactory-registerfeaturetype-l3-lambda-6181f3af474ecbd64bd3b259f51dc62f","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_02ae915ee37b20d1d582027c2eef013c>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-02ae915ee37b20d1d582027c2eef013c","link":"#featuretypefactory-registerfeaturetype-l2-lambda-02ae915ee37b20d1d582027c2eef013c","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_fb971b350856e389d08192cdfd3c816c>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-fb971b350856e389d08192cdfd3c816c","link":"#featuretypefactory-registerfeaturetype-l2-lambda-fb971b350856e389d08192cdfd3c816c","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l3::<lambda_4ca146a42258777491288aaecbb7f0c3>","slug":"featuretypefactory-registerfeaturetype-l3-lambda-4ca146a42258777491288aaecbb7f0c3","link":"#featuretypefactory-registerfeaturetype-l3-lambda-4ca146a42258777491288aaecbb7f0c3","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_5c8f8bd15126f9c55196ce0ed5550b54>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-5c8f8bd15126f9c55196ce0ed5550b54","link":"#featuretypefactory-registerfeaturetype-l2-lambda-5c8f8bd15126f9c55196ce0ed5550b54","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_2840965678f4bea57c430c0057eeef81>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-2840965678f4bea57c430c0057eeef81","link":"#featuretypefactory-registerfeaturetype-l2-lambda-2840965678f4bea57c430c0057eeef81","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l3::<lambda_06b77d3619dac6102a791e302b6e2996>","slug":"featuretypefactory-registerfeaturetype-l3-lambda-06b77d3619dac6102a791e302b6e2996","link":"#featuretypefactory-registerfeaturetype-l3-lambda-06b77d3619dac6102a791e302b6e2996","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_3307d2dec594e7cd39517a69cecf2bd7>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-3307d2dec594e7cd39517a69cecf2bd7","link":"#featuretypefactory-registerfeaturetype-l2-lambda-3307d2dec594e7cd39517a69cecf2bd7","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_27a72a384c7deaf4276a15f91d84e782>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-27a72a384c7deaf4276a15f91d84e782","link":"#featuretypefactory-registerfeaturetype-l2-lambda-27a72a384c7deaf4276a15f91d84e782","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l3::<lambda_6db853b9229f2e191e588eea3b1f15d8>","slug":"featuretypefactory-registerfeaturetype-l3-lambda-6db853b9229f2e191e588eea3b1f15d8","link":"#featuretypefactory-registerfeaturetype-l3-lambda-6db853b9229f2e191e588eea3b1f15d8","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_7d7a594560beae84922db145c06b2ecd>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-7d7a594560beae84922db145c06b2ecd","link":"#featuretypefactory-registerfeaturetype-l2-lambda-7d7a594560beae84922db145c06b2ecd","children":[]},{"level":3,"title":"FeatureTypeFactory::registerFeatureType::__l2::<lambda_a0d524cc11d1566fef269cda369951ab>","slug":"featuretypefactory-registerfeaturetype-l2-lambda-a0d524cc11d1566fef269cda369951ab","link":"#featuretypefactory-registerfeaturetype-l2-lambda-a0d524cc11d1566fef269cda369951ab","children":[]},{"level":3,"title":"FeatureV113ToV114::_upgradeDescription::__l2::<lambda_bd565243b0ce5e1b46fe572ce5ee8988>","slug":"featurev113tov114-upgradedescription-l2-lambda-bd565243b0ce5e1b46fe572ce5ee8988","link":"#featurev113tov114-upgradedescription-l2-lambda-bd565243b0ce5e1b46fe572ce5ee8988","children":[]},{"level":3,"title":"FeatureV113ToV114::_addNamespaceIfMissing::__l2::<lambda_17a99079527d83e2665fea39ccf5c699>","slug":"featurev113tov114-addnamespaceifmissing-l2-lambda-17a99079527d83e2665fea39ccf5c699","link":"#featurev113tov114-addnamespaceifmissing-l2-lambda-17a99079527d83e2665fea39ccf5c699","children":[]},{"level":3,"title":"FancyTreeTrunk::_buildSchema::__l2::<lambda_7259412815063d5226dae8c850e96b38>","slug":"fancytreetrunk-buildschema-l2-lambda-7259412815063d5226dae8c850e96b38","link":"#fancytreetrunk-buildschema-l2-lambda-7259412815063d5226dae8c850e96b38","children":[]},{"level":3,"title":"FancyTreeTrunk::_buildSchema::__l2::<lambda_a292559d1598e00bc3bc52c487de5ca0>","slug":"fancytreetrunk-buildschema-l2-lambda-a292559d1598e00bc3bc52c487de5ca0","link":"#fancytreetrunk-buildschema-l2-lambda-a292559d1598e00bc3bc52c487de5ca0","children":[]},{"level":3,"title":"FancyTreeTrunk::_buildSchema::__l2::<lambda_8ed6b8ddd333dc8e397ab974a96a42a7>","slug":"fancytreetrunk-buildschema-l2-lambda-8ed6b8ddd333dc8e397ab974a96a42a7","link":"#fancytreetrunk-buildschema-l2-lambda-8ed6b8ddd333dc8e397ab974a96a42a7","children":[]},{"level":3,"title":"FancyTreeTrunk::_buildSchema::__l4::<lambda_a911b8375e0979268fa7b5f7ab9a4f4e>","slug":"fancytreetrunk-buildschema-l4-lambda-a911b8375e0979268fa7b5f7ab9a4f4e","link":"#fancytreetrunk-buildschema-l4-lambda-a911b8375e0979268fa7b5f7ab9a4f4e","children":[]},{"level":3,"title":"FancyTreeTrunk::_buildSchema::__l4::<lambda_c6b16a038e0caa525c9e6071893ec479>","slug":"fancytreetrunk-buildschema-l4-lambda-c6b16a038e0caa525c9e6071893ec479","link":"#fancytreetrunk-buildschema-l4-lambda-c6b16a038e0caa525c9e6071893ec479","children":[]},{"level":3,"title":"FancyTreeTrunk::_buildSchema::__l4::<lambda_ed5b9e28e634dea3fd22cf1c6c3ca6a9>","slug":"fancytreetrunk-buildschema-l4-lambda-ed5b9e28e634dea3fd22cf1c6c3ca6a9","link":"#fancytreetrunk-buildschema-l4-lambda-ed5b9e28e634dea3fd22cf1c6c3ca6a9","children":[]},{"level":3,"title":"FancyTreeTrunk::_buildSchema::__l2::<lambda_8fd6410c201ef0b898f4829861dc50f9>","slug":"fancytreetrunk-buildschema-l2-lambda-8fd6410c201ef0b898f4829861dc50f9","link":"#fancytreetrunk-buildschema-l2-lambda-8fd6410c201ef0b898f4829861dc50f9","children":[]},{"level":3,"title":"FancyTreeTrunk::_buildSchema::__l3::<lambda_bf5bc7d4f761369a78b3834460031dae>","slug":"fancytreetrunk-buildschema-l3-lambda-bf5bc7d4f761369a78b3834460031dae","link":"#fancytreetrunk-buildschema-l3-lambda-bf5bc7d4f761369a78b3834460031dae","children":[]},{"level":3,"title":"FancyTreeTrunk::_buildSchema::__l3::<lambda_b0a9f750b5db2e2e849e19569eca9180>","slug":"fancytreetrunk-buildschema-l3-lambda-b0a9f750b5db2e2e849e19569eca9180","link":"#fancytreetrunk-buildschema-l3-lambda-b0a9f750b5db2e2e849e19569eca9180","children":[]},{"level":3,"title":"FancyTreeTrunk::_buildSchema::__l3::<lambda_ea4556ddf2c9b9fb701d13e0aa5720da>","slug":"fancytreetrunk-buildschema-l3-lambda-ea4556ddf2c9b9fb701d13e0aa5720da","link":"#fancytreetrunk-buildschema-l3-lambda-ea4556ddf2c9b9fb701d13e0aa5720da","children":[]},{"level":3,"title":"FallenTreeTrunk::_buildSchema::__l3::<lambda_5f36fccf1b62133f53929738ffee06fc>","slug":"fallentreetrunk-buildschema-l3-lambda-5f36fccf1b62133f53929738ffee06fc","link":"#fallentreetrunk-buildschema-l3-lambda-5f36fccf1b62133f53929738ffee06fc","children":[]},{"level":3,"title":"FallenTreeTrunk::_buildSchema::__l2::<lambda_b10616b98a0474c876fb3f154b71d19f>","slug":"fallentreetrunk-buildschema-l2-lambda-b10616b98a0474c876fb3f154b71d19f","link":"#fallentreetrunk-buildschema-l2-lambda-b10616b98a0474c876fb3f154b71d19f","children":[]},{"level":3,"title":"FallenTreeTrunk::_buildSchema::__l2::<lambda_72e2cf34735cadb8f93879e85a873363>","slug":"fallentreetrunk-buildschema-l2-lambda-72e2cf34735cadb8f93879e85a873363","link":"#fallentreetrunk-buildschema-l2-lambda-72e2cf34735cadb8f93879e85a873363","children":[]},{"level":3,"title":"FallenTreeTrunk::_buildSchema::__l2::<lambda_c3a3174f90d37fffab8b7396ffa43b36>","slug":"fallentreetrunk-buildschema-l2-lambda-c3a3174f90d37fffab8b7396ffa43b36","link":"#fallentreetrunk-buildschema-l2-lambda-c3a3174f90d37fffab8b7396ffa43b36","children":[]},{"level":3,"title":"FallenTreeTrunk::_buildSchema::__l2::<lambda_d23d594c93faa932a191aeb2a429cc31>","slug":"fallentreetrunk-buildschema-l2-lambda-d23d594c93faa932a191aeb2a429cc31","link":"#fallentreetrunk-buildschema-l2-lambda-d23d594c93faa932a191aeb2a429cc31","children":[]},{"level":3,"title":"FallenTreeTrunk::_buildSchema::__l2::<lambda_4230e4aa15802964594378298fc66207>","slug":"fallentreetrunk-buildschema-l2-lambda-4230e4aa15802964594378298fc66207","link":"#fallentreetrunk-buildschema-l2-lambda-4230e4aa15802964594378298fc66207","children":[]},{"level":3,"title":"FallenTreeTrunk::_buildSchema::__l2::<lambda_518c1cfd52d7d67cc1087ebd5b52db66>","slug":"fallentreetrunk-buildschema-l2-lambda-518c1cfd52d7d67cc1087ebd5b52db66","link":"#fallentreetrunk-buildschema-l2-lambda-518c1cfd52d7d67cc1087ebd5b52db66","children":[]},{"level":3,"title":"FancyTreeCanopy::_buildSchema::__l2::<lambda_cb7ec4a10ba4b27ca84cb1b64fd9c358>","slug":"fancytreecanopy-buildschema-l2-lambda-cb7ec4a10ba4b27ca84cb1b64fd9c358","link":"#fancytreecanopy-buildschema-l2-lambda-cb7ec4a10ba4b27ca84cb1b64fd9c358","children":[]},{"level":3,"title":"FancyTreeCanopy::_buildSchema::__l2::<lambda_d4ed500b84b696c19ecc7813158d69bb>","slug":"fancytreecanopy-buildschema-l2-lambda-d4ed500b84b696c19ecc7813158d69bb","link":"#fancytreecanopy-buildschema-l2-lambda-d4ed500b84b696c19ecc7813158d69bb","children":[]},{"level":3,"title":"FancyTreeCanopy::_buildSchema::__l2::<lambda_81fb00f8ad2c715f006a288cf2fe0bea>","slug":"fancytreecanopy-buildschema-l2-lambda-81fb00f8ad2c715f006a288cf2fe0bea","link":"#fancytreecanopy-buildschema-l2-lambda-81fb00f8ad2c715f006a288cf2fe0bea","children":[]},{"level":3,"title":"FancyTreeCanopy::_buildSchema::__l2::<lambda_76f0485190b36fafa76c876871860465>","slug":"fancytreecanopy-buildschema-l2-lambda-76f0485190b36fafa76c876871860465","link":"#fancytreecanopy-buildschema-l2-lambda-76f0485190b36fafa76c876871860465","children":[]},{"level":3,"title":"FancyTreeCanopy::_buildSchema::__l2::<lambda_a5d461c60888e14d2aced4024ac51395>","slug":"fancytreecanopy-buildschema-l2-lambda-a5d461c60888e14d2aced4024ac51395","link":"#fancytreecanopy-buildschema-l2-lambda-a5d461c60888e14d2aced4024ac51395","children":[]},{"level":3,"title":"FancyTreeCanopy::_buildSchema::__l2::<lambda_8cdc6bcfad6b6844464baf3141d53483>","slug":"fancytreecanopy-buildschema-l2-lambda-8cdc6bcfad6b6844464baf3141d53483","link":"#fancytreecanopy-buildschema-l2-lambda-8cdc6bcfad6b6844464baf3141d53483","children":[]},{"level":3,"title":"FancyTreeCanopy::_buildSchema::__l2::<lambda_ec2fe568d80a81eac12264f0eca2973a>","slug":"fancytreecanopy-buildschema-l2-lambda-ec2fe568d80a81eac12264f0eca2973a","link":"#fancytreecanopy-buildschema-l2-lambda-ec2fe568d80a81eac12264f0eca2973a","children":[]},{"level":3,"title":"FancyTreeCanopy::_buildSchema::__l2::<lambda_8ea7fad782b488b185fdc0092687b04f>","slug":"fancytreecanopy-buildschema-l2-lambda-8ea7fad782b488b185fdc0092687b04f","link":"#fancytreecanopy-buildschema-l2-lambda-8ea7fad782b488b185fdc0092687b04f","children":[]},{"level":3,"title":"FancyTreeCanopy::_buildSchema::__l2::<lambda_e6946f9cef82b02c4964b095f9aecee7>","slug":"fancytreecanopy-buildschema-l2-lambda-e6946f9cef82b02c4964b095f9aecee7","link":"#fancytreecanopy-buildschema-l2-lambda-e6946f9cef82b02c4964b095f9aecee7","children":[]},{"level":3,"title":"FitDoubleXYRoom","slug":"fitdoublexyroom","link":"#fitdoublexyroom","children":[]},{"level":3,"title":"FitDoubleXYRoom_vtbl","slug":"fitdoublexyroom-vtbl","link":"#fitdoublexyroom-vtbl","children":[]},{"level":3,"title":"FitDoubleYZRoom","slug":"fitdoubleyzroom","link":"#fitdoubleyzroom","children":[]},{"level":3,"title":"FitDoubleYZRoom_vtbl","slug":"fitdoubleyzroom-vtbl","link":"#fitdoubleyzroom-vtbl","children":[]},{"level":3,"title":"FitDoubleZRoom","slug":"fitdoublezroom","link":"#fitdoublezroom","children":[]},{"level":3,"title":"FitDoubleZRoom_vtbl","slug":"fitdoublezroom-vtbl","link":"#fitdoublezroom-vtbl","children":[]},{"level":3,"title":"FitDoubleXRoom","slug":"fitdoublexroom","link":"#fitdoublexroom","children":[]},{"level":3,"title":"FitDoubleXRoom_vtbl","slug":"fitdoublexroom-vtbl","link":"#fitdoublexroom-vtbl","children":[]},{"level":3,"title":"FitDoubleYRoom","slug":"fitdoubleyroom","link":"#fitdoubleyroom","children":[]},{"level":3,"title":"FitDoubleYRoom_vtbl","slug":"fitdoubleyroom-vtbl","link":"#fitdoubleyroom-vtbl","children":[]},{"level":3,"title":"FitSimpleTopRoom","slug":"fitsimpletoproom","link":"#fitsimpletoproom","children":[]},{"level":3,"title":"FitSimpleTopRoom_vtbl","slug":"fitsimpletoproom-vtbl","link":"#fitsimpletoproom-vtbl","children":[]},{"level":3,"title":"FitSimpleRoom","slug":"fitsimpleroom","link":"#fitsimpleroom","children":[]},{"level":3,"title":"FitSimpleRoom_vtbl","slug":"fitsimpleroom-vtbl","link":"#fitsimpleroom-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::AddIsland>","slug":"filterlayer-layerfilters-addisland","link":"#filterlayer-layerfilters-addisland","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::AddIsland>_vtbl","slug":"filterlayer-layerfilters-addisland-vtbl","link":"#filterlayer-layerfilters-addisland-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::RemoveTooMuchOcean>","slug":"filterlayer-layerfilters-removetoomuchocean","link":"#filterlayer-layerfilters-removetoomuchocean","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::RemoveTooMuchOcean>_vtbl","slug":"filterlayer-layerfilters-removetoomuchocean-vtbl","link":"#filterlayer-layerfilters-removetoomuchocean-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::AddSnow>","slug":"filterlayer-layerfilters-addsnow","link":"#filterlayer-layerfilters-addsnow","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::AddSnow>_vtbl","slug":"filterlayer-layerfilters-addsnow-vtbl","link":"#filterlayer-layerfilters-addsnow-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::AddIslandWithTemperature>","slug":"filterlayer-layerfilters-addislandwithtemperature","link":"#filterlayer-layerfilters-addislandwithtemperature","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::AddIslandWithTemperature>_vtbl","slug":"filterlayer-layerfilters-addislandwithtemperature-vtbl","link":"#filterlayer-layerfilters-addislandwithtemperature-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::AddEdgeCoolWarm>","slug":"filterlayer-layerfilters-addedgecoolwarm","link":"#filterlayer-layerfilters-addedgecoolwarm","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::AddEdgeCoolWarm>_vtbl","slug":"filterlayer-layerfilters-addedgecoolwarm-vtbl","link":"#filterlayer-layerfilters-addedgecoolwarm-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::AddEdgeHeatIce>","slug":"filterlayer-layerfilters-addedgeheatice","link":"#filterlayer-layerfilters-addedgeheatice","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::AddEdgeHeatIce>_vtbl","slug":"filterlayer-layerfilters-addedgeheatice-vtbl","link":"#filterlayer-layerfilters-addedgeheatice-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::AddEdgeSpecial>","slug":"filterlayer-layerfilters-addedgespecial","link":"#filterlayer-layerfilters-addedgespecial","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::AddEdgeSpecial>_vtbl","slug":"filterlayer-layerfilters-addedgespecial-vtbl","link":"#filterlayer-layerfilters-addedgespecial-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::BiomeInit>","slug":"filterlayer-layerfilters-biomeinit","link":"#filterlayer-layerfilters-biomeinit","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::BiomeInit>_vtbl","slug":"filterlayer-layerfilters-biomeinit-vtbl","link":"#filterlayer-layerfilters-biomeinit-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::AddMushroomIsland>","slug":"filterlayer-layerfilters-addmushroomisland","link":"#filterlayer-layerfilters-addmushroomisland","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::AddMushroomIsland>_vtbl","slug":"filterlayer-layerfilters-addmushroomisland-vtbl","link":"#filterlayer-layerfilters-addmushroomisland-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::PromoteCenter>","slug":"filterlayer-layerfilters-promotecenter","link":"#filterlayer-layerfilters-promotecenter","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::PromoteCenter>_vtbl","slug":"filterlayer-layerfilters-promotecenter-vtbl","link":"#filterlayer-layerfilters-promotecenter-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::RiverInit>","slug":"filterlayer-layerfilters-riverinit","link":"#filterlayer-layerfilters-riverinit","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::RiverInit>_vtbl","slug":"filterlayer-layerfilters-riverinit-vtbl","link":"#filterlayer-layerfilters-riverinit-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::River>","slug":"filterlayer-layerfilters-river","link":"#filterlayer-layerfilters-river","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::River>_vtbl","slug":"filterlayer-layerfilters-river-vtbl","link":"#filterlayer-layerfilters-river-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::Smooth<bool> >","slug":"filterlayer-layerfilters-smooth-bool","link":"#filterlayer-layerfilters-smooth-bool","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::Smooth<bool> >_vtbl","slug":"filterlayer-layerfilters-smooth-bool-vtbl","link":"#filterlayer-layerfilters-smooth-bool-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::RareBiomeSpot>","slug":"filterlayer-layerfilters-rarebiomespot","link":"#filterlayer-layerfilters-rarebiomespot","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::RareBiomeSpot>_vtbl","slug":"filterlayer-layerfilters-rarebiomespot-vtbl","link":"#filterlayer-layerfilters-rarebiomespot-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::FilteredTransformation<FilteredTransformationAttributes<PreHillsEdgeTransformation> > >","slug":"filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-prehillsedgetransformation","link":"#filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-prehillsedgetransformation","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::FilteredTransformation<FilteredTransformationAttributes<PreHillsEdgeTransformation> > >_vtbl","slug":"filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-prehillsedgetransformation-vtbl","link":"#filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-prehillsedgetransformation-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::FilteredTransformation<FilteredTransformationAttributes<LegacyPreHillsEdgeTransformation> > >","slug":"filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-legacyprehillsedgetransformation","link":"#filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-legacyprehillsedgetransformation","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::FilteredTransformation<FilteredTransformationAttributes<LegacyPreHillsEdgeTransformation> > >_vtbl","slug":"filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-legacyprehillsedgetransformation-vtbl","link":"#filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-legacyprehillsedgetransformation-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::AddBiomeIsland>","slug":"filterlayer-layerfilters-addbiomeisland","link":"#filterlayer-layerfilters-addbiomeisland","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::AddBiomeIsland>_vtbl","slug":"filterlayer-layerfilters-addbiomeisland-vtbl","link":"#filterlayer-layerfilters-addbiomeisland-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::Shore>","slug":"filterlayer-layerfilters-shore","link":"#filterlayer-layerfilters-shore","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::Shore>_vtbl","slug":"filterlayer-layerfilters-shore-vtbl","link":"#filterlayer-layerfilters-shore-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::FilteredTransformation<FilteredTransformationAttributes<PostShoreEdgeTransformation> > >","slug":"filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-postshoreedgetransformation","link":"#filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-postshoreedgetransformation","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::FilteredTransformation<FilteredTransformationAttributes<PostShoreEdgeTransformation> > >_vtbl","slug":"filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-postshoreedgetransformation-vtbl","link":"#filterlayer-layerfilters-filteredtransformation-filteredtransformationattributes-postshoreedgetransformation-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::Smooth<Biome *> >","slug":"filterlayer-layerfilters-smooth-biome","link":"#filterlayer-layerfilters-smooth-biome","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::Smooth<Biome *> >_vtbl","slug":"filterlayer-layerfilters-smooth-biome-vtbl","link":"#filterlayer-layerfilters-smooth-biome-vtbl","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::AddOceanEdge>","slug":"filterlayer-layerfilters-addoceanedge","link":"#filterlayer-layerfilters-addoceanedge","children":[]},{"level":3,"title":"FilterLayer<LayerFilters::AddOceanEdge>_vtbl","slug":"filterlayer-layerfilters-addoceanedge-vtbl","link":"#filterlayer-layerfilters-addoceanedge-vtbl","children":[]},{"level":3,"title":"FMOD_VECTOR","slug":"fmod-vector","link":"#fmod-vector","children":[]},{"level":3,"title":"FMOD_CODEC_WAVEFORMAT","slug":"fmod-codec-waveformat","link":"#fmod-codec-waveformat","children":[]},{"level":3,"title":"FMOD_CODEC_STATE","slug":"fmod-codec-state","link":"#fmod-codec-state","children":[]},{"level":3,"title":"FMOD_DSP_STATE","slug":"fmod-dsp-state","link":"#fmod-dsp-state","children":[]},{"level":3,"title":"FMOD_COMPLEX","slug":"fmod-complex","link":"#fmod-complex","children":[]},{"level":3,"title":"FMOD_DSP_STATE_DFT_FUNCTIONS","slug":"fmod-dsp-state-dft-functions","link":"#fmod-dsp-state-dft-functions","children":[]},{"level":3,"title":"FMOD_DSP_STATE_PAN_FUNCTIONS","slug":"fmod-dsp-state-pan-functions","link":"#fmod-dsp-state-pan-functions","children":[]},{"level":3,"title":"FMOD_3D_ATTRIBUTES","slug":"fmod-3d-attributes","link":"#fmod-3d-attributes","children":[]},{"level":3,"title":"FMOD_DSP_STATE_FUNCTIONS","slug":"fmod-dsp-state-functions","link":"#fmod-dsp-state-functions","children":[]},{"level":3,"title":"FMOD_DSP_BUFFER_ARRAY","slug":"fmod-dsp-buffer-array","link":"#fmod-dsp-buffer-array","children":[]},{"level":3,"title":"FMOD_OUTPUT_STATE","slug":"fmod-output-state","link":"#fmod-output-state","children":[]},{"level":3,"title":"FMOD_OUTPUT_OBJECT3DINFO","slug":"fmod-output-object3dinfo","link":"#fmod-output-object3dinfo","children":[]},{"level":3,"title":"FMOD_ADVANCEDSETTINGS","slug":"fmod-advancedsettings","link":"#fmod-advancedsettings","children":[]},{"level":3,"title":"FMOD::DSP","slug":"fmod-dsp","link":"#fmod-dsp","children":[]},{"level":3,"title":"FMOD_DSP_PARAMETER_FLOAT_MAPPING_PIECEWISE_LINEAR","slug":"fmod-dsp-parameter-float-mapping-piecewise-linear","link":"#fmod-dsp-parameter-float-mapping-piecewise-linear","children":[]},{"level":3,"title":"FMOD_DSP_PARAMETER_FLOAT_MAPPING","slug":"fmod-dsp-parameter-float-mapping","link":"#fmod-dsp-parameter-float-mapping","children":[]},{"level":3,"title":"FMOD_DSP_PARAMETER_DESC_FLOAT","slug":"fmod-dsp-parameter-desc-float","link":"#fmod-dsp-parameter-desc-float","children":[]},{"level":3,"title":"FMOD_DSP_PARAMETER_DESC_INT","slug":"fmod-dsp-parameter-desc-int","link":"#fmod-dsp-parameter-desc-int","children":[]},{"level":3,"title":"FMOD_DSP_PARAMETER_DESC_BOOL","slug":"fmod-dsp-parameter-desc-bool","link":"#fmod-dsp-parameter-desc-bool","children":[]},{"level":3,"title":"FMOD_DSP_PARAMETER_DESC_DATA","slug":"fmod-dsp-parameter-desc-data","link":"#fmod-dsp-parameter-desc-data","children":[]},{"level":3,"title":"FMOD_DSP_PARAMETER_DESC","slug":"fmod-dsp-parameter-desc","link":"#fmod-dsp-parameter-desc","children":[]},{"level":3,"title":"FMOD_DSP_DESCRIPTION","slug":"fmod-dsp-description","link":"#fmod-dsp-description","children":[]},{"level":3,"title":"FMOD_CODEC_DESCRIPTION","slug":"fmod-codec-description","link":"#fmod-codec-description","children":[]},{"level":3,"title":"FMOD_OUTPUT_DESCRIPTION","slug":"fmod-output-description","link":"#fmod-output-description","children":[]},{"level":3,"title":"FMOD::SoundGroup","slug":"fmod-soundgroup","link":"#fmod-soundgroup","children":[]},{"level":3,"title":"FMOD::Reverb3D","slug":"fmod-reverb3d","link":"#fmod-reverb3d","children":[]},{"level":3,"title":"FMOD_REVERB_PROPERTIES","slug":"fmod-reverb-properties","link":"#fmod-reverb-properties","children":[]},{"level":3,"title":"FMOD::Geometry","slug":"fmod-geometry","link":"#fmod-geometry","children":[]},{"level":3,"title":"FMOD_DSP_METERING_INFO","slug":"fmod-dsp-metering-info","link":"#fmod-dsp-metering-info","children":[]},{"level":3,"title":"FMOD::DSPConnection","slug":"fmod-dspconnection","link":"#fmod-dspconnection","children":[]},{"level":3,"title":"FMOD_TAG","slug":"fmod-tag","link":"#fmod-tag","children":[]},{"level":3,"title":"FileListNodeContext","slug":"filelistnodecontext","link":"#filelistnodecontext","children":[]},{"level":3,"title":"file_in_zip64_read_info_s","slug":"file-in-zip64-read-info-s","link":"#file-in-zip64-read-info-s","children":[]},{"level":3,"title":"FileSecureStorage::StorageSystem","slug":"filesecurestorage-storagesystem","link":"#filesecurestorage-storagesystem","children":[]},{"level":3,"title":"FileSecureStorage::StorageSystem_vtbl","slug":"filesecurestorage-storagesystem-vtbl","link":"#filesecurestorage-storagesystem-vtbl","children":[]},{"level":3,"title":"FileSecureStorage::FileStorageSystem","slug":"filesecurestorage-filestoragesystem","link":"#filesecurestorage-filestoragesystem","children":[]},{"level":3,"title":"FileSecureStorage::FileStorageSystem_vtbl","slug":"filesecurestorage-filestoragesystem-vtbl","link":"#filesecurestorage-filestoragesystem-vtbl","children":[]},{"level":3,"title":"FileSecureStorage","slug":"filesecurestorage","link":"#filesecurestorage","children":[]},{"level":3,"title":"FileSecureStorage_vtbl","slug":"filesecurestorage-vtbl","link":"#filesecurestorage-vtbl","children":[]},{"level":3,"title":"FT_Prop_IncreaseXHeight_","slug":"ft-prop-increasexheight","link":"#ft-prop-increasexheight","children":[]},{"level":3,"title":"FT_Prop_GlyphToScriptMap_","slug":"ft-prop-glyphtoscriptmap","link":"#ft-prop-glyphtoscriptmap","children":[]},{"level":3,"title":"FT_Var_Axis_","slug":"ft-var-axis","link":"#ft-var-axis","children":[]},{"level":3,"title":"FT_Var_Named_Style_","slug":"ft-var-named-style","link":"#ft-var-named-style","children":[]},{"level":3,"title":"FT_MM_Var_","slug":"ft-mm-var","link":"#ft-mm-var","children":[]},{"level":3,"title":"FT_RFork_Ref_","slug":"ft-rfork-ref","link":"#ft-rfork-ref","children":[]},{"level":3,"title":"FT_CMapRec_","slug":"ft-cmaprec","link":"#ft-cmaprec","children":[]},{"level":3,"title":"FT_HashnodeRec_","slug":"ft-hashnoderec","link":"#ft-hashnoderec","children":[]},{"level":3,"title":"FT_HashRec_","slug":"ft-hashrec","link":"#ft-hashrec","children":[]},{"level":3,"title":"FT_ValidatorRec_","slug":"ft-validatorrec","link":"#ft-validatorrec","children":[]},{"level":3,"title":"FT_LayerIterator_","slug":"ft-layeriterator","link":"#ft-layeriterator","children":[]},{"level":3,"title":"FT_SfntLangTag_","slug":"ft-sfntlangtag","link":"#ft-sfntlangtag","children":[]},{"level":3,"title":"FT_SfntName_","slug":"ft-sfntname","link":"#ft-sfntname","children":[]},{"level":3,"title":"FT_OutlineGlyphRec_","slug":"ft-outlineglyphrec","link":"#ft-outlineglyphrec","children":[]},{"level":3,"title":"FT_BitmapGlyphRec_","slug":"ft-bitmapglyphrec","link":"#ft-bitmapglyphrec","children":[]},{"level":3,"title":"FT_Service_CKERNvalidateRec_","slug":"ft-service-ckernvalidaterec","link":"#ft-service-ckernvalidaterec","children":[]},{"level":3,"title":"FT_Service_GXvalidateRec_","slug":"ft-service-gxvalidaterec","link":"#ft-service-gxvalidaterec","children":[]},{"level":3,"title":"FT_MM_Axis_","slug":"ft-mm-axis","link":"#ft-mm-axis","children":[]},{"level":3,"title":"FT_Multi_Master_","slug":"ft-multi-master","link":"#ft-multi-master","children":[]},{"level":3,"title":"FT_Service_OTvalidateRec_","slug":"ft-service-otvalidaterec","link":"#ft-service-otvalidaterec","children":[]},{"level":3,"title":"FT_StrokeBorderRec_","slug":"ft-strokeborderrec","link":"#ft-strokeborderrec","children":[]},{"level":3,"title":"FT_StrokerRec_","slug":"ft-strokerrec","link":"#ft-strokerrec","children":[]},{"level":3,"title":"FT_WinFNT_HeaderRec_","slug":"ft-winfnt-headerrec","link":"#ft-winfnt-headerrec","children":[]},{"level":3,"title":"FTC_MruNodeRec_","slug":"ftc-mrunoderec","link":"#ftc-mrunoderec","children":[]},{"level":3,"title":"FTC_NodeRec_","slug":"ftc-noderec","link":"#ftc-noderec","children":[]},{"level":3,"title":"FTC_CacheRec_","slug":"ftc-cacherec","link":"#ftc-cacherec","children":[]},{"level":3,"title":"FTC_MruListRec_","slug":"ftc-mrulistrec","link":"#ftc-mrulistrec","children":[]},{"level":3,"title":"FTC_ManagerRec_","slug":"ftc-managerrec","link":"#ftc-managerrec","children":[]},{"level":3,"title":"FTC_FamilyRec_","slug":"ftc-familyrec","link":"#ftc-familyrec","children":[]},{"level":3,"title":"FTC_ScalerRec_","slug":"ftc-scalerrec","link":"#ftc-scalerrec","children":[]},{"level":3,"title":"FTC_CMapQueryRec_","slug":"ftc-cmapqueryrec","link":"#ftc-cmapqueryrec","children":[]},{"level":3,"title":"FTC_GNodeRec_","slug":"ftc-gnoderec","link":"#ftc-gnoderec","children":[]},{"level":3,"title":"FTC_SBitRec_","slug":"ftc-sbitrec","link":"#ftc-sbitrec","children":[]},{"level":3,"title":"FTC_SNodeRec_","slug":"ftc-snoderec","link":"#ftc-snoderec","children":[]},{"level":3,"title":"FTC_SizeNodeRec_","slug":"ftc-sizenoderec","link":"#ftc-sizenoderec","children":[]},{"level":3,"title":"FTC_GQueryRec_","slug":"ftc-gqueryrec","link":"#ftc-gqueryrec","children":[]},{"level":3,"title":"FTC_BasicAttrRec_","slug":"ftc-basicattrrec","link":"#ftc-basicattrrec","children":[]},{"level":3,"title":"FTC_BasicQueryRec_","slug":"ftc-basicqueryrec","link":"#ftc-basicqueryrec","children":[]},{"level":3,"title":"FTC_ImageTypeRec_","slug":"ftc-imagetyperec","link":"#ftc-imagetyperec","children":[]},{"level":3,"title":"FTC_CMapNodeRec_","slug":"ftc-cmapnoderec","link":"#ftc-cmapnoderec","children":[]},{"level":3,"title":"FTC_GCacheRec_","slug":"ftc-gcacherec","link":"#ftc-gcacherec","children":[]},{"level":3,"title":"FTC_FaceNodeRec_","slug":"ftc-facenoderec","link":"#ftc-facenoderec","children":[]},{"level":3,"title":"FTC_BasicFamilyRec_","slug":"ftc-basicfamilyrec","link":"#ftc-basicfamilyrec","children":[]},{"level":3,"title":"FTC_INodeRec_","slug":"ftc-inoderec","link":"#ftc-inoderec","children":[]},{"level":3,"title":"FT_GZipFileRec_","slug":"ft-gzipfilerec","link":"#ft-gzipfilerec","children":[]},{"level":3,"title":"FT_LzwStateRec_","slug":"ft-lzwstaterec","link":"#ft-lzwstaterec","children":[]},{"level":3,"title":"FT_LZWFileRec_","slug":"ft-lzwfilerec","link":"#ft-lzwfilerec","children":[]},{"level":3,"title":"fvar_axis_","slug":"fvar-axis","link":"#fvar-axis","children":[]},{"level":3,"title":"FNT_FontRec_","slug":"fnt-fontrec","link":"#fnt-fontrec","children":[]},{"level":3,"title":"FNT_FaceRec_","slug":"fnt-facerec","link":"#fnt-facerec","children":[]},{"level":3,"title":"FNT_CMapRec_","slug":"fnt-cmaprec","link":"#fnt-cmaprec","children":[]},{"level":3,"title":"fileio","slug":"fileio","link":"#fileio","children":[]},{"level":3,"title":"fieldnameiterobject","slug":"fieldnameiterobject","link":"#fieldnameiterobject","children":[]},{"level":3,"title":"formatteriterobject","slug":"formatteriterobject","link":"#formatteriterobject","children":[]},{"level":3,"title":"fblockinfo","slug":"fblockinfo","link":"#fblockinfo","children":[]},{"level":3,"title":"FontRepository::loadDefaultFonts::__l2::<lambda_4f422798d8e19b20911552d15f97b207>","slug":"fontrepository-loaddefaultfonts-l2-lambda-4f422798d8e19b20911552d15f97b207","link":"#fontrepository-loaddefaultfonts-l2-lambda-4f422798d8e19b20911552d15f97b207","children":[]},{"level":3,"title":"FontRepository::loadDefaultFonts::__l2::<lambda_7fe000d9f42c358f49b7b7b1aeed026a>","slug":"fontrepository-loaddefaultfonts-l2-lambda-7fe000d9f42c358f49b7b7b1aeed026a","link":"#fontrepository-loaddefaultfonts-l2-lambda-7fe000d9f42c358f49b7b7b1aeed026a","children":[]},{"level":3,"title":"Font::_drawTextSegment::__l2::<lambda_8e3baa331ad6e1f242221a9878dc5f42>","slug":"font-drawtextsegment-l2-lambda-8e3baa331ad6e1f242221a9878dc5f42","link":"#font-drawtextsegment-l2-lambda-8e3baa331ad6e1f242221a9878dc5f42","children":[]},{"level":3,"title":"findInvalidControls::__l2::<lambda_3dbaae907dfed5de4509e626c64034ac>","slug":"findinvalidcontrols-l2-lambda-3dbaae907dfed5de4509e626c64034ac","link":"#findinvalidcontrols-l2-lambda-3dbaae907dfed5de4509e626c64034ac","children":[]},{"level":3,"title":"FlightingService::removeProgressionsMonitor::__l2::<lambda_dc0aa59f9c42aac91e41e9b1baa7f37b>","slug":"flightingservice-removeprogressionsmonitor-l2-lambda-dc0aa59f9c42aac91e41e9b1baa7f37b","link":"#flightingservice-removeprogressionsmonitor-l2-lambda-dc0aa59f9c42aac91e41e9b1baa7f37b","children":[]},{"level":3,"title":"FlightingService::removeTreatmentsMonitor::__l2::<lambda_dc33781d56036161ddedc101c7827cad>","slug":"flightingservice-removetreatmentsmonitor-l2-lambda-dc33781d56036161ddedc101c7827cad","link":"#flightingservice-removetreatmentsmonitor-l2-lambda-dc33781d56036161ddedc101c7827cad","children":[]},{"level":3,"title":"FlightingToggles::_registerToggle::__l2::<lambda_01e889ff1de36f6f894ace0c2fd91fab>","slug":"flightingtoggles-registertoggle-l2-lambda-01e889ff1de36f6f894ace0c2fd91fab","link":"#flightingtoggles-registertoggle-l2-lambda-01e889ff1de36f6f894ace0c2fd91fab","children":[]},{"level":3,"title":"FlightingToggles::_getReadableOption::__l2::<lambda_c8f4468cfb8c57d4cff76d6b08d7222f>","slug":"flightingtoggles-getreadableoption-l2-lambda-c8f4468cfb8c57d4cff76d6b08d7222f","link":"#flightingtoggles-getreadableoption-l2-lambda-c8f4468cfb8c57d4cff76d6b08d7222f","children":[]},{"level":3,"title":"FlightingToggles::_getEditableOption::__l2::<lambda_09ea53f58499c033d12f411d44e8b89d>","slug":"flightingtoggles-geteditableoption-l2-lambda-09ea53f58499c033d12f411d44e8b89d","link":"#flightingtoggles-geteditableoption-l2-lambda-09ea53f58499c033d12f411d44e8b89d","children":[]},{"level":3,"title":"FencedDynamicRingBuffer<Core::CpuRingBufferAllocation_Buffer,2,0>::allocate::__l2::ScopeCheck","slug":"fenceddynamicringbuffer-core-cpuringbufferallocation-buffer-2-0-allocate-l2-scopecheck","link":"#fenceddynamicringbuffer-core-cpuringbufferallocation-buffer-2-0-allocate-l2-scopecheck","children":[]},{"level":3,"title":"FogCommandComponent::removeFogSettings::__l2::<lambda_e7045a2475577c89e825c30ba26bb7a0>","slug":"fogcommandcomponent-removefogsettings-l2-lambda-e7045a2475577c89e825c30ba26bb7a0","link":"#fogcommandcomponent-removefogsettings-l2-lambda-e7045a2475577c89e825c30ba26bb7a0","children":[]},{"level":3,"title":"FogCommandComponent::popFogSetting::__l2::<lambda_c6420063e1de121184042e0355b72836>","slug":"fogcommandcomponent-popfogsetting-l2-lambda-c6420063e1de121184042e0355b72836","link":"#fogcommandcomponent-popfogsetting-l2-lambda-c6420063e1de121184042e0355b72836","children":[]},{"level":3,"title":"FeatureToggles::get::__l2::<lambda_e82554aee0f907d64d28f1c4a75f2147>","slug":"featuretoggles-get-l2-lambda-e82554aee0f907d64d28f1c4a75f2147","link":"#featuretoggles-get-l2-lambda-e82554aee0f907d64d28f1c4a75f2147","children":[]},{"level":3,"title":"Fish::updateEntitySpecificMolangVariables::__l2::<lambda_280e8c01dad65c80513fe29eb5985c62>::()::__l2::Literal","slug":"fish-updateentityspecificmolangvariables-l2-lambda-280e8c01dad65c80513fe29eb5985c62-l2-literal","link":"#fish-updateentityspecificmolangvariables-l2-lambda-280e8c01dad65c80513fe29eb5985c62-l2-literal","children":[]},{"level":3,"title":"Fish::updateEntitySpecificMolangVariables::__l2::<lambda_d2014f3ddc1a02a48511f6fe7ff7d131>::()::__l2::Literal","slug":"fish-updateentityspecificmolangvariables-l2-lambda-d2014f3ddc1a02a48511f6fe7ff7d131-l2-literal","link":"#fish-updateentityspecificmolangvariables-l2-lambda-d2014f3ddc1a02a48511f6fe7ff7d131-l2-literal","children":[]},{"level":3,"title":"Fish::updateEntitySpecificMolangVariables::__l2::<lambda_280e8c01dad65c80513fe29eb5985c62>","slug":"fish-updateentityspecificmolangvariables-l2-lambda-280e8c01dad65c80513fe29eb5985c62","link":"#fish-updateentityspecificmolangvariables-l2-lambda-280e8c01dad65c80513fe29eb5985c62","children":[]},{"level":3,"title":"Fish::updateEntitySpecificMolangVariables::__l2::<lambda_d2014f3ddc1a02a48511f6fe7ff7d131>","slug":"fish-updateentityspecificmolangvariables-l2-lambda-d2014f3ddc1a02a48511f6fe7ff7d131","link":"#fish-updateentityspecificmolangvariables-l2-lambda-d2014f3ddc1a02a48511f6fe7ff7d131","children":[]},{"level":3,"title":"FishingHook::_fishTeaseEvent::__l5::<lambda_2455c51ed26ad5c032692a6134fa9018>::()::__l2::Literal","slug":"fishinghook-fishteaseevent-l5-lambda-2455c51ed26ad5c032692a6134fa9018-l2-literal","link":"#fishinghook-fishteaseevent-l5-lambda-2455c51ed26ad5c032692a6134fa9018-l2-literal","children":[]},{"level":3,"title":"FishingHook::_fishhookEvent::__l2::<lambda_ddc523299e28559cf337c10bb3b88fc4>::()::__l2::Literal","slug":"fishinghook-fishhookevent-l2-lambda-ddc523299e28559cf337c10bb3b88fc4-l2-literal","link":"#fishinghook-fishhookevent-l2-lambda-ddc523299e28559cf337c10bb3b88fc4-l2-literal","children":[]},{"level":3,"title":"FishingHook::_fishPosEvent::__l5::<lambda_f0795b8083f25704a962612a885ea629>::()::__l2::Literal","slug":"fishinghook-fishposevent-l5-lambda-f0795b8083f25704a962612a885ea629-l2-literal","link":"#fishinghook-fishposevent-l5-lambda-f0795b8083f25704a962612a885ea629-l2-literal","children":[]},{"level":3,"title":"FishingHook::_fishTeaseEvent::__l5::<lambda_2455c51ed26ad5c032692a6134fa9018>","slug":"fishinghook-fishteaseevent-l5-lambda-2455c51ed26ad5c032692a6134fa9018","link":"#fishinghook-fishteaseevent-l5-lambda-2455c51ed26ad5c032692a6134fa9018","children":[]},{"level":3,"title":"FishingHook::_fishhookEvent::__l2::<lambda_ddc523299e28559cf337c10bb3b88fc4>","slug":"fishinghook-fishhookevent-l2-lambda-ddc523299e28559cf337c10bb3b88fc4","link":"#fishinghook-fishhookevent-l2-lambda-ddc523299e28559cf337c10bb3b88fc4","children":[]},{"level":3,"title":"FishingHook::_fishPosEvent::__l5::<lambda_f0795b8083f25704a962612a885ea629>","slug":"fishinghook-fishposevent-l5-lambda-f0795b8083f25704a962612a885ea629","link":"#fishinghook-fishposevent-l5-lambda-f0795b8083f25704a962612a885ea629","children":[]},{"level":3,"title":"FilteredContainerModel::isExpanableItemFiltered::__l5::<lambda_c95972fdc7ee0ea513f2eeec4625f69b>","slug":"filteredcontainermodel-isexpanableitemfiltered-l5-lambda-c95972fdc7ee0ea513f2eeec4625f69b","link":"#filteredcontainermodel-isexpanableitemfiltered-l5-lambda-c95972fdc7ee0ea513f2eeec4625f69b","children":[]},{"level":3,"title":"FeatureHelper::makeFeatureRenderParams::__l2::<lambda_c825f1c6579cee8eda3425bff5cb1cef>::()::__l2::Literal","slug":"featurehelper-makefeaturerenderparams-l2-lambda-c825f1c6579cee8eda3425bff5cb1cef-l2-literal","link":"#featurehelper-makefeaturerenderparams-l2-lambda-c825f1c6579cee8eda3425bff5cb1cef-l2-literal","children":[]},{"level":3,"title":"FeatureHelper::makeFeatureRenderParams::__l2::<lambda_c825f1c6579cee8eda3425bff5cb1cef>","slug":"featurehelper-makefeaturerenderparams-l2-lambda-c825f1c6579cee8eda3425bff5cb1cef","link":"#featurehelper-makefeaturerenderparams-l2-lambda-c825f1c6579cee8eda3425bff5cb1cef","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l2::<lambda_5866351d1636ff192cb9608b1e329d44>::()::__l2::Literal","slug":"featureloading-buildschema-l2-lambda-5866351d1636ff192cb9608b1e329d44-l2-literal","link":"#featureloading-buildschema-l2-lambda-5866351d1636ff192cb9608b1e329d44-l2-literal","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l2::<lambda_5866351d1636ff192cb9608b1e329d44>","slug":"featureloading-buildschema-l2-lambda-5866351d1636ff192cb9608b1e329d44","link":"#featureloading-buildschema-l2-lambda-5866351d1636ff192cb9608b1e329d44","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l2::<lambda_0cdb93874de125e69b68b9ebf9b548a5>::()::__l2::Literal","slug":"featureloading-buildschema-l2-lambda-0cdb93874de125e69b68b9ebf9b548a5-l2-literal","link":"#featureloading-buildschema-l2-lambda-0cdb93874de125e69b68b9ebf9b548a5-l2-literal","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l2::<lambda_0cdb93874de125e69b68b9ebf9b548a5>","slug":"featureloading-buildschema-l2-lambda-0cdb93874de125e69b68b9ebf9b548a5","link":"#featureloading-buildschema-l2-lambda-0cdb93874de125e69b68b9ebf9b548a5","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l3::<lambda_f77a8e88eeeb5ac15156b5fd56e33a34>::()::__l2::Literal","slug":"featureloading-buildschema-l3-lambda-f77a8e88eeeb5ac15156b5fd56e33a34-l2-literal","link":"#featureloading-buildschema-l3-lambda-f77a8e88eeeb5ac15156b5fd56e33a34-l2-literal","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l3::<lambda_f77a8e88eeeb5ac15156b5fd56e33a34>","slug":"featureloading-buildschema-l3-lambda-f77a8e88eeeb5ac15156b5fd56e33a34","link":"#featureloading-buildschema-l3-lambda-f77a8e88eeeb5ac15156b5fd56e33a34","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l3::<lambda_8e08cab91671a993c1d6d2dfb885576b>::()::__l2::Literal","slug":"featureloading-buildschema-l3-lambda-8e08cab91671a993c1d6d2dfb885576b-l2-literal","link":"#featureloading-buildschema-l3-lambda-8e08cab91671a993c1d6d2dfb885576b-l2-literal","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l3::<lambda_8e08cab91671a993c1d6d2dfb885576b>","slug":"featureloading-buildschema-l3-lambda-8e08cab91671a993c1d6d2dfb885576b","link":"#featureloading-buildschema-l3-lambda-8e08cab91671a993c1d6d2dfb885576b","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l3::<lambda_fc664a0ad07e562a5b0ad2a34ab21e68>::()::__l2::Literal","slug":"featureloading-buildschema-l3-lambda-fc664a0ad07e562a5b0ad2a34ab21e68-l2-literal","link":"#featureloading-buildschema-l3-lambda-fc664a0ad07e562a5b0ad2a34ab21e68-l2-literal","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l3::<lambda_fc664a0ad07e562a5b0ad2a34ab21e68>","slug":"featureloading-buildschema-l3-lambda-fc664a0ad07e562a5b0ad2a34ab21e68","link":"#featureloading-buildschema-l3-lambda-fc664a0ad07e562a5b0ad2a34ab21e68","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l3::<lambda_398d0541d49edc65d0550bf1222eb336>::()::__l2::Literal","slug":"featureloading-buildschema-l3-lambda-398d0541d49edc65d0550bf1222eb336-l2-literal","link":"#featureloading-buildschema-l3-lambda-398d0541d49edc65d0550bf1222eb336-l2-literal","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l3::<lambda_398d0541d49edc65d0550bf1222eb336>","slug":"featureloading-buildschema-l3-lambda-398d0541d49edc65d0550bf1222eb336","link":"#featureloading-buildschema-l3-lambda-398d0541d49edc65d0550bf1222eb336","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l3::<lambda_30a6fc1be8e2fa920409b6ad82604c04>::()::__l2::Literal","slug":"featureloading-buildschema-l3-lambda-30a6fc1be8e2fa920409b6ad82604c04-l2-literal","link":"#featureloading-buildschema-l3-lambda-30a6fc1be8e2fa920409b6ad82604c04-l2-literal","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l3::<lambda_30a6fc1be8e2fa920409b6ad82604c04>","slug":"featureloading-buildschema-l3-lambda-30a6fc1be8e2fa920409b6ad82604c04","link":"#featureloading-buildschema-l3-lambda-30a6fc1be8e2fa920409b6ad82604c04","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l3::<lambda_3beb5f71e367af352b4705552ae91ac9>::()::__l2::Literal","slug":"featureloading-buildschema-l3-lambda-3beb5f71e367af352b4705552ae91ac9-l2-literal","link":"#featureloading-buildschema-l3-lambda-3beb5f71e367af352b4705552ae91ac9-l2-literal","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l3::<lambda_3beb5f71e367af352b4705552ae91ac9>","slug":"featureloading-buildschema-l3-lambda-3beb5f71e367af352b4705552ae91ac9","link":"#featureloading-buildschema-l3-lambda-3beb5f71e367af352b4705552ae91ac9","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l3::<lambda_7c8944e317afdadb867ecf6eea3fb38d>::()::__l2::Literal","slug":"featureloading-buildschema-l3-lambda-7c8944e317afdadb867ecf6eea3fb38d-l2-literal","link":"#featureloading-buildschema-l3-lambda-7c8944e317afdadb867ecf6eea3fb38d-l2-literal","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l3::<lambda_7c8944e317afdadb867ecf6eea3fb38d>","slug":"featureloading-buildschema-l3-lambda-7c8944e317afdadb867ecf6eea3fb38d","link":"#featureloading-buildschema-l3-lambda-7c8944e317afdadb867ecf6eea3fb38d","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l3::<lambda_2461d849b89a3811c07ae62e27ad6c81>::()::__l2::Literal","slug":"featureloading-buildschema-l3-lambda-2461d849b89a3811c07ae62e27ad6c81-l2-literal","link":"#featureloading-buildschema-l3-lambda-2461d849b89a3811c07ae62e27ad6c81-l2-literal","children":[]},{"level":3,"title":"FeatureLoading::_buildSchema::__l3::<lambda_2461d849b89a3811c07ae62e27ad6c81>","slug":"featureloading-buildschema-l3-lambda-2461d849b89a3811c07ae62e27ad6c81","link":"#featureloading-buildschema-l3-lambda-2461d849b89a3811c07ae62e27ad6c81","children":[]},{"level":3,"title":"FlatWorldGeneratorOptions::getDefault::__l2::<lambda_fe93e031ad063ae0e7f131e26064013a>","slug":"flatworldgeneratoroptions-getdefault-l2-lambda-fe93e031ad063ae0e7f131e26064013a","link":"#flatworldgeneratoroptions-getdefault-l2-lambda-fe93e031ad063ae0e7f131e26064013a","children":[]},{"level":3,"title":"FancyTreeCanopy::_buildSchema::__l2::<lambda_a89132006fbb6ef7244385ea18abae82>::()::__l2::Literal","slug":"fancytreecanopy-buildschema-l2-lambda-a89132006fbb6ef7244385ea18abae82-l2-literal","link":"#fancytreecanopy-buildschema-l2-lambda-a89132006fbb6ef7244385ea18abae82-l2-literal","children":[]},{"level":3,"title":"FancyTreeCanopy::_buildSchema::__l2::<lambda_a89132006fbb6ef7244385ea18abae82>","slug":"fancytreecanopy-buildschema-l2-lambda-a89132006fbb6ef7244385ea18abae82","link":"#fancytreecanopy-buildschema-l2-lambda-a89132006fbb6ef7244385ea18abae82","children":[]},{"level":3,"title":"FancyTreeCanopy::_buildSchema::__l2::<lambda_c4b48eced950a7e10a9578f1bd69c3c8>::()::__l2::Literal","slug":"fancytreecanopy-buildschema-l2-lambda-c4b48eced950a7e10a9578f1bd69c3c8-l2-literal","link":"#fancytreecanopy-buildschema-l2-lambda-c4b48eced950a7e10a9578f1bd69c3c8-l2-literal","children":[]},{"level":3,"title":"FancyTreeCanopy::_buildSchema::__l2::<lambda_c4b48eced950a7e10a9578f1bd69c3c8>","slug":"fancytreecanopy-buildschema-l2-lambda-c4b48eced950a7e10a9578f1bd69c3c8","link":"#fancytreecanopy-buildschema-l2-lambda-c4b48eced950a7e10a9578f1bd69c3c8","children":[]},{"level":3,"title":"FallenTreeTrunk::_buildSchema::__l2::<lambda_34210a916c2e972c474c39f3b29ba615>::()::__l2::Literal","slug":"fallentreetrunk-buildschema-l2-lambda-34210a916c2e972c474c39f3b29ba615-l2-literal","link":"#fallentreetrunk-buildschema-l2-lambda-34210a916c2e972c474c39f3b29ba615-l2-literal","children":[]},{"level":3,"title":"FallenTreeTrunk::_buildSchema::__l2::<lambda_34210a916c2e972c474c39f3b29ba615>","slug":"fallentreetrunk-buildschema-l2-lambda-34210a916c2e972c474c39f3b29ba615","link":"#fallentreetrunk-buildschema-l2-lambda-34210a916c2e972c474c39f3b29ba615","children":[]},{"level":3,"title":"FancyTreeCanopy::_buildSchema::__l2::<lambda_e42c6c635f508d9c780be255a6d38f5e>::()::__l2::Literal","slug":"fancytreecanopy-buildschema-l2-lambda-e42c6c635f508d9c780be255a6d38f5e-l2-literal","link":"#fancytreecanopy-buildschema-l2-lambda-e42c6c635f508d9c780be255a6d38f5e-l2-literal","children":[]},{"level":3,"title":"FancyTreeCanopy::_buildSchema::__l2::<lambda_e42c6c635f508d9c780be255a6d38f5e>","slug":"fancytreecanopy-buildschema-l2-lambda-e42c6c635f508d9c780be255a6d38f5e","link":"#fancytreecanopy-buildschema-l2-lambda-e42c6c635f508d9c780be255a6d38f5e","children":[]},{"level":3,"title":"FancyTreeTrunk::_buildSchema::__l2::<lambda_14a48915df16399192e4882ea1b599a0>::()::__l2::Literal","slug":"fancytreetrunk-buildschema-l2-lambda-14a48915df16399192e4882ea1b599a0-l2-literal","link":"#fancytreetrunk-buildschema-l2-lambda-14a48915df16399192e4882ea1b599a0-l2-literal","children":[]},{"level":3,"title":"FancyTreeTrunk::_buildSchema::__l2::<lambda_14a48915df16399192e4882ea1b599a0>","slug":"fancytreetrunk-buildschema-l2-lambda-14a48915df16399192e4882ea1b599a0","link":"#fancytreetrunk-buildschema-l2-lambda-14a48915df16399192e4882ea1b599a0","children":[]},{"level":3,"title":"Fish_vtbl","slug":"fish-vtbl","link":"#fish-vtbl","children":[]}],"git":{"updatedTime":1659743947000,"contributors":[{"name":"RedbeanW","email":"redbeana44945@gmail.com","commits":1}]},"filePathRelative":"1.16.201/structure/F~1.md"}');export{o as comp,b as data};
