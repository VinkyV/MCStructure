import{_ as n,c as s,o as e,d as a}from"./app-SaJJkj-5.js";const i={},l=a(`<h1 id="j" tabindex="-1"><a class="header-anchor" href="#j"><span>J</span></a></h1><h3 id="jigsawjointtype" tabindex="-1"><a class="header-anchor" href="#jigsawjointtype"><span><code>JigsawJointType</code></span></a></h3><table><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>ROLLABLE</td><td><code>0</code></td></tr><tr><td>ALIGNED</td><td><code>1</code></td></tr></tbody></table><h3 id="journaledfile-progression" tabindex="-1"><a class="header-anchor" href="#journaledfile-progression"><span><code>JournaledFile::Progression</code></span></a></h3><table><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>NeverWritten</td><td><code>0</code></td></tr><tr><td>WriteFailed</td><td><code>1</code></td></tr><tr><td>WriteSuccess</td><td><code>2</code></td></tr></tbody></table><h3 id="json-reader-tokentype" tabindex="-1"><a class="header-anchor" href="#json-reader-tokentype"><span><code>Json::Reader::TokenType</code></span></a></h3><table><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>tokenEndOfStream</td><td><code>0</code></td></tr><tr><td>tokenObjectBegin</td><td><code>1</code></td></tr><tr><td>tokenObjectEnd</td><td><code>2</code></td></tr><tr><td>tokenArrayBegin</td><td><code>3</code></td></tr><tr><td>tokenArrayEnd</td><td><code>4</code></td></tr><tr><td>tokenString</td><td><code>5</code></td></tr><tr><td>tokenNumber</td><td><code>6</code></td></tr><tr><td>tokenTrue</td><td><code>7</code></td></tr><tr><td>tokenFalse</td><td><code>8</code></td></tr><tr><td>tokenNull</td><td><code>9</code></td></tr><tr><td>tokenArraySeparator</td><td><code>10</code></td></tr><tr><td>tokenMemberSeparator</td><td><code>11</code></td></tr><tr><td>tokenComment</td><td><code>12</code></td></tr><tr><td>tokenError</td><td><code>13</code></td></tr></tbody></table><h3 id="job-object-net-rate-control-flags" tabindex="-1"><a class="header-anchor" href="#job-object-net-rate-control-flags"><span><code>JOB_OBJECT_NET_RATE_CONTROL_FLAGS</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum JOB_OBJECT_NET_RATE_CONTROL_FLAGS : __int32</span>
<span class="line">{</span>
<span class="line">  JOB_OBJECT_NET_RATE_CONTROL_ENABLE = 0x1,</span>
<span class="line">  JOB_OBJECT_NET_RATE_CONTROL_MAX_BANDWIDTH = 0x2,</span>
<span class="line">  JOB_OBJECT_NET_RATE_CONTROL_DSCP_TAG = 0x4,</span>
<span class="line">  JOB_OBJECT_NET_RATE_CONTROL_VALID_FLAGS = 0x7,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="job-object-io-rate-control-flags" tabindex="-1"><a class="header-anchor" href="#job-object-io-rate-control-flags"><span><code>JOB_OBJECT_IO_RATE_CONTROL_FLAGS</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum JOB_OBJECT_IO_RATE_CONTROL_FLAGS : __int32</span>
<span class="line">{</span>
<span class="line">  JOB_OBJECT_IO_RATE_CONTROL_ENABLE = 0x1,</span>
<span class="line">  JOB_OBJECT_IO_RATE_CONTROL_STANDALONE_VOLUME = 0x2,</span>
<span class="line">  JOB_OBJECT_IO_RATE_CONTROL_VALID_FLAGS = 0x3,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-valuetype" tabindex="-1"><a class="header-anchor" href="#json-valuetype"><span><code>Json::ValueType</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum Json::ValueType : __int32</span>
<span class="line">{</span>
<span class="line">  nullValue = 0x0,</span>
<span class="line">  intValue = 0x1,</span>
<span class="line">  uintValue = 0x2,</span>
<span class="line">  realValue = 0x3,</span>
<span class="line">  stringValue = 0x4,</span>
<span class="line">  booleanValue = 0x5,</span>
<span class="line">  arrayValue = 0x6,</span>
<span class="line">  objectValue = 0x7,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-commentplacement" tabindex="-1"><a class="header-anchor" href="#json-commentplacement"><span><code>Json::CommentPlacement</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum Json::CommentPlacement : __int32</span>
<span class="line">{</span>
<span class="line">  commentBefore = 0x0,</span>
<span class="line">  commentAfterOnSameLine = 0x1,</span>
<span class="line">  commentAfter = 0x2,</span>
<span class="line">  numberOfCommentPlacement = 0x3,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jobobject-io-attribution-control-flags" tabindex="-1"><a class="header-anchor" href="#jobobject-io-attribution-control-flags"><span><code>JOBOBJECT_IO_ATTRIBUTION_CONTROL_FLAGS</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum JOBOBJECT_IO_ATTRIBUTION_CONTROL_FLAGS : __int32</span>
<span class="line">{</span>
<span class="line">  JOBOBJECT_IO_ATTRIBUTION_CONTROL_ENABLE = 0x1,</span>
<span class="line">  JOBOBJECT_IO_ATTRIBUTION_CONTROL_DISABLE = 0x2,</span>
<span class="line">  JOBOBJECT_IO_ATTRIBUTION_CONTROL_VALID_FLAGS = 0x3,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-pathargument-kind" tabindex="-1"><a class="header-anchor" href="#json-pathargument-kind"><span><code>Json::PathArgument::Kind</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum Json::PathArgument::Kind : __int32</span>
<span class="line">{</span>
<span class="line">  kindNone = 0x0,</span>
<span class="line">  kindIndex = 0x1,</span>
<span class="line">  kindKey = 0x2,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-value-czstring-duplicationpolicy" tabindex="-1"><a class="header-anchor" href="#json-value-czstring-duplicationpolicy"><span><code>Json::Value::CZString::DuplicationPolicy</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum Json::Value::CZString::DuplicationPolicy : __int32</span>
<span class="line">{</span>
<span class="line">  noDuplication = 0x0,</span>
<span class="line">  duplicate = 0x1,</span>
<span class="line">  duplicateOnCopy = 0x2,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="joincodeentryscreencontroller-activescreen" tabindex="-1"><a class="header-anchor" href="#joincodeentryscreencontroller-activescreen"><span><code>JoincodeEntryScreenController::ActiveScreen</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef Rotation JoincodeEntryScreenController::ActiveScreen;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jumptype" tabindex="-1"><a class="header-anchor" href="#jumptype"><span><code>JumpType</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">typedef ActorEvent JumpType;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="j-dct-method" tabindex="-1"><a class="header-anchor" href="#j-dct-method"><span><code>J_DCT_METHOD</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum J_DCT_METHOD : __int32</span>
<span class="line">{</span>
<span class="line">  JDCT_ISLOW = 0x0,</span>
<span class="line">  JDCT_IFAST = 0x1,</span>
<span class="line">  JDCT_FLOAT = 0x2,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="j-color-space" tabindex="-1"><a class="header-anchor" href="#j-color-space"><span><code>J_COLOR_SPACE</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum J_COLOR_SPACE : __int32</span>
<span class="line">{</span>
<span class="line">  JCS_UNKNOWN = 0x0,</span>
<span class="line">  JCS_GRAYSCALE = 0x1,</span>
<span class="line">  JCS_RGB = 0x2,</span>
<span class="line">  JCS_YCbCr = 0x3,</span>
<span class="line">  JCS_CMYK = 0x4,</span>
<span class="line">  JCS_YCCK = 0x5,</span>
<span class="line">  JCS_BG_RGB = 0x6,</span>
<span class="line">  JCS_BG_YCC = 0x7,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="j-color-transform" tabindex="-1"><a class="header-anchor" href="#j-color-transform"><span><code>J_COLOR_TRANSFORM</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum J_COLOR_TRANSFORM : __int32</span>
<span class="line">{</span>
<span class="line">  JCT_NONE = 0x0,</span>
<span class="line">  JCT_SUBTRACT_GREEN = 0x1,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-unnamed-enum-uinttostringbuffersize" tabindex="-1"><a class="header-anchor" href="#json-unnamed-enum-uinttostringbuffersize"><span><code>Json::&lt;unnamed_enum_uintToStringBufferSize&gt;</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum Json::&lt;unnamed_enum_uintToStringBufferSize&gt; : __int32</span>
<span class="line">{</span>
<span class="line">  uintToStringBufferSize = 0x19,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="j-message-code" tabindex="-1"><a class="header-anchor" href="#j-message-code"><span><code>J_MESSAGE_CODE</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum J_MESSAGE_CODE : __int32</span>
<span class="line">{</span>
<span class="line">  JMSG_NOMESSAGE = 0x0,</span>
<span class="line">  JERR_BAD_ALIGN_TYPE = 0x1,</span>
<span class="line">  JERR_BAD_ALLOC_CHUNK = 0x2,</span>
<span class="line">  JERR_BAD_BUFFER_MODE = 0x3,</span>
<span class="line">  JERR_BAD_COMPONENT_ID = 0x4,</span>
<span class="line">  JERR_BAD_CROP_SPEC = 0x5,</span>
<span class="line">  JERR_BAD_DCT_COEF = 0x6,</span>
<span class="line">  JERR_BAD_DCTSIZE = 0x7,</span>
<span class="line">  JERR_BAD_DROP_SAMPLING = 0x8,</span>
<span class="line">  JERR_BAD_HUFF_TABLE = 0x9,</span>
<span class="line">  JERR_BAD_IN_COLORSPACE = 0xA,</span>
<span class="line">  JERR_BAD_J_COLORSPACE = 0xB,</span>
<span class="line">  JERR_BAD_LENGTH = 0xC,</span>
<span class="line">  JERR_BAD_LIB_VERSION = 0xD,</span>
<span class="line">  JERR_BAD_MCU_SIZE = 0xE,</span>
<span class="line">  JERR_BAD_POOL_ID = 0xF,</span>
<span class="line">  JERR_BAD_PRECISION = 0x10,</span>
<span class="line">  JERR_BAD_PROGRESSION = 0x11,</span>
<span class="line">  JERR_BAD_PROG_SCRIPT = 0x12,</span>
<span class="line">  JERR_BAD_SAMPLING = 0x13,</span>
<span class="line">  JERR_BAD_SCAN_SCRIPT = 0x14,</span>
<span class="line">  JERR_BAD_STATE = 0x15,</span>
<span class="line">  JERR_BAD_STRUCT_SIZE = 0x16,</span>
<span class="line">  JERR_BAD_VIRTUAL_ACCESS = 0x17,</span>
<span class="line">  JERR_BUFFER_SIZE = 0x18,</span>
<span class="line">  JERR_CANT_SUSPEND = 0x19,</span>
<span class="line">  JERR_CCIR601_NOTIMPL = 0x1A,</span>
<span class="line">  JERR_COMPONENT_COUNT = 0x1B,</span>
<span class="line">  JERR_CONVERSION_NOTIMPL = 0x1C,</span>
<span class="line">  JERR_DAC_INDEX = 0x1D,</span>
<span class="line">  JERR_DAC_VALUE = 0x1E,</span>
<span class="line">  JERR_DHT_INDEX = 0x1F,</span>
<span class="line">  JERR_DQT_INDEX = 0x20,</span>
<span class="line">  JERR_EMPTY_IMAGE = 0x21,</span>
<span class="line">  JERR_EMS_READ = 0x22,</span>
<span class="line">  JERR_EMS_WRITE = 0x23,</span>
<span class="line">  JERR_EOI_EXPECTED = 0x24,</span>
<span class="line">  JERR_FILE_READ = 0x25,</span>
<span class="line">  JERR_FILE_WRITE = 0x26,</span>
<span class="line">  JERR_FRACT_SAMPLE_NOTIMPL = 0x27,</span>
<span class="line">  JERR_HUFF_CLEN_OVERFLOW = 0x28,</span>
<span class="line">  JERR_HUFF_MISSING_CODE = 0x29,</span>
<span class="line">  JERR_IMAGE_TOO_BIG = 0x2A,</span>
<span class="line">  JERR_INPUT_EMPTY = 0x2B,</span>
<span class="line">  JERR_INPUT_EOF = 0x2C,</span>
<span class="line">  JERR_MISMATCHED_QUANT_TABLE = 0x2D,</span>
<span class="line">  JERR_MISSING_DATA = 0x2E,</span>
<span class="line">  JERR_MODE_CHANGE = 0x2F,</span>
<span class="line">  JERR_NOTIMPL = 0x30,</span>
<span class="line">  JERR_NOT_COMPILED = 0x31,</span>
<span class="line">  JERR_NO_ARITH_TABLE = 0x32,</span>
<span class="line">  JERR_NO_BACKING_STORE = 0x33,</span>
<span class="line">  JERR_NO_HUFF_TABLE = 0x34,</span>
<span class="line">  JERR_NO_IMAGE = 0x35,</span>
<span class="line">  JERR_NO_QUANT_TABLE = 0x36,</span>
<span class="line">  JERR_NO_SOI = 0x37,</span>
<span class="line">  JERR_OUT_OF_MEMORY = 0x38,</span>
<span class="line">  JERR_QUANT_COMPONENTS = 0x39,</span>
<span class="line">  JERR_QUANT_FEW_COLORS = 0x3A,</span>
<span class="line">  JERR_QUANT_MANY_COLORS = 0x3B,</span>
<span class="line">  JERR_SOF_BEFORE = 0x3C,</span>
<span class="line">  JERR_SOF_DUPLICATE = 0x3D,</span>
<span class="line">  JERR_SOF_NO_SOS = 0x3E,</span>
<span class="line">  JERR_SOF_UNSUPPORTED = 0x3F,</span>
<span class="line">  JERR_SOI_DUPLICATE = 0x40,</span>
<span class="line">  JERR_TFILE_CREATE = 0x41,</span>
<span class="line">  JERR_TFILE_READ = 0x42,</span>
<span class="line">  JERR_TFILE_SEEK = 0x43,</span>
<span class="line">  JERR_TFILE_WRITE = 0x44,</span>
<span class="line">  JERR_TOO_LITTLE_DATA = 0x45,</span>
<span class="line">  JERR_UNKNOWN_MARKER = 0x46,</span>
<span class="line">  JERR_VIRTUAL_BUG = 0x47,</span>
<span class="line">  JERR_WIDTH_OVERFLOW = 0x48,</span>
<span class="line">  JERR_XMS_READ = 0x49,</span>
<span class="line">  JERR_XMS_WRITE = 0x4A,</span>
<span class="line">  JMSG_COPYRIGHT = 0x4B,</span>
<span class="line">  JMSG_VERSION = 0x4C,</span>
<span class="line">  JTRC_16BIT_TABLES = 0x4D,</span>
<span class="line">  JTRC_ADOBE = 0x4E,</span>
<span class="line">  JTRC_APP0 = 0x4F,</span>
<span class="line">  JTRC_APP14 = 0x50,</span>
<span class="line">  JTRC_DAC = 0x51,</span>
<span class="line">  JTRC_DHT = 0x52,</span>
<span class="line">  JTRC_DQT = 0x53,</span>
<span class="line">  JTRC_DRI = 0x54,</span>
<span class="line">  JTRC_EMS_CLOSE = 0x55,</span>
<span class="line">  JTRC_EMS_OPEN = 0x56,</span>
<span class="line">  JTRC_EOI = 0x57,</span>
<span class="line">  JTRC_HUFFBITS = 0x58,</span>
<span class="line">  JTRC_JFIF = 0x59,</span>
<span class="line">  JTRC_JFIF_BADTHUMBNAILSIZE = 0x5A,</span>
<span class="line">  JTRC_JFIF_EXTENSION = 0x5B,</span>
<span class="line">  JTRC_JFIF_THUMBNAIL = 0x5C,</span>
<span class="line">  JTRC_MISC_MARKER = 0x5D,</span>
<span class="line">  JTRC_PARMLESS_MARKER = 0x5E,</span>
<span class="line">  JTRC_QUANTVALS = 0x5F,</span>
<span class="line">  JTRC_QUANT_3_NCOLORS = 0x60,</span>
<span class="line">  JTRC_QUANT_NCOLORS = 0x61,</span>
<span class="line">  JTRC_QUANT_SELECTED = 0x62,</span>
<span class="line">  JTRC_RECOVERY_ACTION = 0x63,</span>
<span class="line">  JTRC_RST = 0x64,</span>
<span class="line">  JTRC_SMOOTH_NOTIMPL = 0x65,</span>
<span class="line">  JTRC_SOF = 0x66,</span>
<span class="line">  JTRC_SOF_COMPONENT = 0x67,</span>
<span class="line">  JTRC_SOI = 0x68,</span>
<span class="line">  JTRC_SOS = 0x69,</span>
<span class="line">  JTRC_SOS_COMPONENT = 0x6A,</span>
<span class="line">  JTRC_SOS_PARAMS = 0x6B,</span>
<span class="line">  JTRC_TFILE_CLOSE = 0x6C,</span>
<span class="line">  JTRC_TFILE_OPEN = 0x6D,</span>
<span class="line">  JTRC_THUMB_JPEG = 0x6E,</span>
<span class="line">  JTRC_THUMB_PALETTE = 0x6F,</span>
<span class="line">  JTRC_THUMB_RGB = 0x70,</span>
<span class="line">  JTRC_UNKNOWN_IDS = 0x71,</span>
<span class="line">  JTRC_XMS_CLOSE = 0x72,</span>
<span class="line">  JTRC_XMS_OPEN = 0x73,</span>
<span class="line">  JWRN_ADOBE_XFORM = 0x74,</span>
<span class="line">  JWRN_ARITH_BAD_CODE = 0x75,</span>
<span class="line">  JWRN_BOGUS_PROGRESSION = 0x76,</span>
<span class="line">  JWRN_EXTRANEOUS_DATA = 0x77,</span>
<span class="line">  JWRN_HIT_MARKER = 0x78,</span>
<span class="line">  JWRN_HUFF_BAD_CODE = 0x79,</span>
<span class="line">  JWRN_JFIF_MAJOR = 0x7A,</span>
<span class="line">  JWRN_JPEG_EOF = 0x7B,</span>
<span class="line">  JWRN_MUST_RESYNC = 0x7C,</span>
<span class="line">  JWRN_NOT_SEQUENTIAL = 0x7D,</span>
<span class="line">  JWRN_TOO_MUCH_DATA = 0x7E,</span>
<span class="line">  JMSG_LASTMSGCODE = 0x7F,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="j-buf-mode" tabindex="-1"><a class="header-anchor" href="#j-buf-mode"><span><code>J_BUF_MODE</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum J_BUF_MODE : __int32</span>
<span class="line">{</span>
<span class="line">  JBUF_PASS_THRU = 0x0,</span>
<span class="line">  JBUF_SAVE_SOURCE = 0x1,</span>
<span class="line">  JBUF_CRANK_DEST = 0x2,</span>
<span class="line">  JBUF_SAVE_AND_PASS = 0x3,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jpeg-marker" tabindex="-1"><a class="header-anchor" href="#jpeg-marker"><span><code>JPEG_MARKER</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum JPEG_MARKER : __int32</span>
<span class="line">{</span>
<span class="line">  M_SOF0 = 0xC0,</span>
<span class="line">  M_SOF1 = 0xC1,</span>
<span class="line">  M_SOF2 = 0xC2,</span>
<span class="line">  M_SOF3 = 0xC3,</span>
<span class="line">  M_SOF5 = 0xC5,</span>
<span class="line">  M_SOF6 = 0xC6,</span>
<span class="line">  M_SOF7 = 0xC7,</span>
<span class="line">  M_JPG = 0xC8,</span>
<span class="line">  M_SOF9 = 0xC9,</span>
<span class="line">  M_SOF10 = 0xCA,</span>
<span class="line">  M_SOF11 = 0xCB,</span>
<span class="line">  M_SOF13 = 0xCD,</span>
<span class="line">  M_SOF14 = 0xCE,</span>
<span class="line">  M_SOF15 = 0xCF,</span>
<span class="line">  M_DHT = 0xC4,</span>
<span class="line">  M_DAC = 0xCC,</span>
<span class="line">  M_RST0 = 0xD0,</span>
<span class="line">  M_RST1 = 0xD1,</span>
<span class="line">  M_RST2 = 0xD2,</span>
<span class="line">  M_RST3 = 0xD3,</span>
<span class="line">  M_RST4 = 0xD4,</span>
<span class="line">  M_RST5 = 0xD5,</span>
<span class="line">  M_RST6 = 0xD6,</span>
<span class="line">  M_RST7 = 0xD7,</span>
<span class="line">  M_SOI = 0xD8,</span>
<span class="line">  M_EOI = 0xD9,</span>
<span class="line">  M_SOS = 0xDA,</span>
<span class="line">  M_DQT = 0xDB,</span>
<span class="line">  M_DNL = 0xDC,</span>
<span class="line">  M_DRI = 0xDD,</span>
<span class="line">  M_DHP = 0xDE,</span>
<span class="line">  M_EXP = 0xDF,</span>
<span class="line">  M_APP0 = 0xE0,</span>
<span class="line">  M_APP1 = 0xE1,</span>
<span class="line">  M_APP2 = 0xE2,</span>
<span class="line">  M_APP3 = 0xE3,</span>
<span class="line">  M_APP4 = 0xE4,</span>
<span class="line">  M_APP5 = 0xE5,</span>
<span class="line">  M_APP6 = 0xE6,</span>
<span class="line">  M_APP7 = 0xE7,</span>
<span class="line">  M_APP8 = 0xE8,</span>
<span class="line">  M_APP9 = 0xE9,</span>
<span class="line">  M_APP10 = 0xEA,</span>
<span class="line">  M_APP11 = 0xEB,</span>
<span class="line">  M_APP12 = 0xEC,</span>
<span class="line">  M_APP13 = 0xED,</span>
<span class="line">  M_APP14 = 0xEE,</span>
<span class="line">  M_APP15 = 0xEF,</span>
<span class="line">  M_JPG0 = 0xF0,</span>
<span class="line">  M_JPG8 = 0xF8,</span>
<span class="line">  M_JPG13 = 0xFD,</span>
<span class="line">  M_COM = 0xFE,</span>
<span class="line">  M_TEM = 0x1,</span>
<span class="line">  M_ERROR = 0x100,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="j-dither-mode" tabindex="-1"><a class="header-anchor" href="#j-dither-mode"><span><code>J_DITHER_MODE</code></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enum J_DITHER_MODE : __int32</span>
<span class="line">{</span>
<span class="line">  JDITHER_NONE = 0x0,</span>
<span class="line">  JDITHER_ORDERED = 0x1,</span>
<span class="line">  JDITHER_FS = 0x2,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),d=[l];function c(r,p){return e(),s("div",null,d)}const v=n(i,[["render",c],["__file","J.html.vue"]]),u=JSON.parse('{"path":"/1.16.201/enums/J.html","title":"J","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"JigsawJointType","slug":"jigsawjointtype","link":"#jigsawjointtype","children":[]},{"level":3,"title":"JournaledFile::Progression","slug":"journaledfile-progression","link":"#journaledfile-progression","children":[]},{"level":3,"title":"Json::Reader::TokenType","slug":"json-reader-tokentype","link":"#json-reader-tokentype","children":[]},{"level":3,"title":"JOB_OBJECT_NET_RATE_CONTROL_FLAGS","slug":"job-object-net-rate-control-flags","link":"#job-object-net-rate-control-flags","children":[]},{"level":3,"title":"JOB_OBJECT_IO_RATE_CONTROL_FLAGS","slug":"job-object-io-rate-control-flags","link":"#job-object-io-rate-control-flags","children":[]},{"level":3,"title":"Json::ValueType","slug":"json-valuetype","link":"#json-valuetype","children":[]},{"level":3,"title":"Json::CommentPlacement","slug":"json-commentplacement","link":"#json-commentplacement","children":[]},{"level":3,"title":"JOBOBJECT_IO_ATTRIBUTION_CONTROL_FLAGS","slug":"jobobject-io-attribution-control-flags","link":"#jobobject-io-attribution-control-flags","children":[]},{"level":3,"title":"Json::PathArgument::Kind","slug":"json-pathargument-kind","link":"#json-pathargument-kind","children":[]},{"level":3,"title":"Json::Value::CZString::DuplicationPolicy","slug":"json-value-czstring-duplicationpolicy","link":"#json-value-czstring-duplicationpolicy","children":[]},{"level":3,"title":"JoincodeEntryScreenController::ActiveScreen","slug":"joincodeentryscreencontroller-activescreen","link":"#joincodeentryscreencontroller-activescreen","children":[]},{"level":3,"title":"JumpType","slug":"jumptype","link":"#jumptype","children":[]},{"level":3,"title":"J_DCT_METHOD","slug":"j-dct-method","link":"#j-dct-method","children":[]},{"level":3,"title":"J_COLOR_SPACE","slug":"j-color-space","link":"#j-color-space","children":[]},{"level":3,"title":"J_COLOR_TRANSFORM","slug":"j-color-transform","link":"#j-color-transform","children":[]},{"level":3,"title":"Json::<unnamed_enum_uintToStringBufferSize>","slug":"json-unnamed-enum-uinttostringbuffersize","link":"#json-unnamed-enum-uinttostringbuffersize","children":[]},{"level":3,"title":"J_MESSAGE_CODE","slug":"j-message-code","link":"#j-message-code","children":[]},{"level":3,"title":"J_BUF_MODE","slug":"j-buf-mode","link":"#j-buf-mode","children":[]},{"level":3,"title":"JPEG_MARKER","slug":"jpeg-marker","link":"#jpeg-marker","children":[]},{"level":3,"title":"J_DITHER_MODE","slug":"j-dither-mode","link":"#j-dither-mode","children":[]}],"git":{"updatedTime":1659743947000,"contributors":[{"name":"RedbeanW","email":"redbeana44945@gmail.com","commits":1}]},"filePathRelative":"1.16.201/enums/J.md"}');export{v as comp,u as data};
