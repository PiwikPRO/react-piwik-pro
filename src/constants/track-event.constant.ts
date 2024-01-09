export enum TRACK_EVENT {
  PAGE_VIEW = 'trackPageView',
  CUSTOM_EVENT = 'trackEvent',
  GOAL = 'trackGoal',
  SEARCH = 'trackSiteSearch',
  ADD_ECOMMERCE_ITEM = 'ecommerceAddToCart',
  REMOVE_ECOMMERCE_ITEM = 'ecommerceAddToCart',
  ECOMMERCE_PRODUCT_DETAIL_VIEW = 'ecommerceProductDetailView',
  UPDATE_ECOMMERCE_CART = 'ecommerceCartUpdate',
  ORDER_ECOMMERCE = 'ecommerceOrder',
  SET_CUSTOM_VARIABLE = 'setCustomVariable',
  DELETE_CUSTOM_VARIABLE = 'deleteCustomVariable',
  STORE_CUSTOM_VARIABLES_IN_COOKIE = 'storeCustomVariablesInCookie',
  SET_CUSTOM_DIMENSION_VALUE = 'setCustomDimensionValue',
  DELETE_CUSTOM_DIMENSION = 'deleteCustomDimension',
  SET_CUSTOM_DIMENSION = 'setCustomDimension',
  ALL_CONTENT_IMPRESSIONS = 'trackAllContentImpressions',
  VISIBLE_CONTENT_IMPRESSIONS = 'trackVisibleContentImpressions',
  CONTENT_IMPRESSIONS_WITH_NODE = 'trackContentImpressionsWithinNode',
  CONTENT_IMPRESSION = 'trackContentImpression',
  LOG_ALL_CONTENT_BLOCKS_ON_PAGE = 'logAllContentBlocksOnPage',
  CONTENT_INTERACTION_NODE = 'trackContentInteractionNode',
  CONTENT_INTERACTION = 'trackContentInteraction',
  LINK = 'trackLink',
  ENABLE_LINK_TRACKING = 'enableLinkTracking',
  SET_IGNORE_CLASSES = 'setIgnoreClasses',
  SET_LINK_CLASSES = 'setLinkClasses',
  SET_DOWNLOAD_CLASSES = 'setDownloadClasses',
  SET_DOWNLOAD_EXTENSIONS = 'setDownloadExtensions',
  ADD_DOWNLOAD_EXTENSIONS = 'addDownloadExtensions',
  REMOVE_DOWNLOAD_EXTENSIONS = 'removeDownloadExtensions',
  SET_LINK_TRACKING_TIMER = 'setLinkTrackingTimer',
  SET_USER_ID = 'setUserId',
  RESET_USER_ID = 'resetUserId',
  SET_USER_IS_ANONYMOUS = 'setUserIsAnonymous',
  DEANONYMIZE_USER = 'deanonymizeUser',
  SET_SESSION_ID_STRICT_PRIVACY_MODE = 'setSessionIdStrictPrivacyMode',
  DISABLE_COOKIES = 'disableCookies',
  ENABLE_COOKIES = 'enableCookies',
  DELETE_COOKIES = 'deleteCookies',
  SET_COOKIE_NAME_PREFIX = 'setCookieNamePrefix',
  SET_COOKIE_DOMAIN = 'setCookieDomain',
  SET_COOKIE_PATH = 'setCookiePath',
  SET_SECURE_COOKIE = 'setSecureCookie',
  SET_VISITOR_COOKIE_TIMEOUT = 'setVisitorCookieTimeout',
  SET_SESSION_COOKIE_TIMEOUT = 'setSessionCookieTimeout',
  SET_VISITOR_ID_COOKIE = 'setVisitorIdCookie',
  SET_DOCUMENT_TITLE = 'setDocumentTitle',
  SET_DOMAINS = 'setDomains',
  SET_CUSTOM_URL = 'setCustomUrl',
  SET_REFERRER_URL = 'setReferrerUrl',
  SET_API_URL = 'setApiUrl',
  GET_PIWIK_URL = 'getPiwikUrl',
  GET_CURRENT_URL = 'getCurrentUrl',
  DISCARD_HASH_TAG = 'discardHashTag',
  SET_GENERATION_TIME_MS = 'setGenerationTimeMs',
  APPEND_TO_TRACKING_URL = 'appendToTrackingUrl',
  SET_DO_NOT_TRACK = 'setDoNotTrack',
  KILL_FRAME = 'killFrame',
  REDIRECT_FILE = 'redirectFile',
  SET_CAMPAIGN_NAME_KEY = 'setCampaignNameKey',
  SET_CAMPAIGN_KEYWORD_KEY = 'setCampaignKeywordKey',
  PING = 'ping',
  ADD_LISTENER = 'addListener',
  SET_REQUEST_METHOD = 'setRequestMethod',
  SET_CUSTOM_REQUEST_PROCESSING = 'setCustomRequestProcessing',
  SET_REQUEST_CONTENT_TYPE = 'setRequestContentType',
  ENABLE_JS_ERROR_TRACKING = 'enableJSErrorTracking',
  ERROR = 'trackError',
  SET_TRACKING_SOURCE = 'setTrackingSource',
}
