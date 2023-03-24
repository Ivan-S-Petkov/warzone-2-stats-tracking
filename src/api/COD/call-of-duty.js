Object.defineProperty(exports, "__esModule", { value: true });
exports.disableDebugMode =
  exports.enableDebugMode =
  exports.Misc =
  exports.Me =
  exports.Store =
  exports.Vanguard =
  exports.ColdWar =
  exports.Warzone2 =
  exports.ModernWarfare2 =
  exports.ModernWarfare =
  exports.Warzone =
  exports.friendActions =
  exports.platforms =
  exports.login =
    void 0;

const weapon_ids_json_1 = import(require("./wz-data/weapon-ids.json"));
const game_modes_json_1 = import(require("./wz-data/game-modes.json"));

const userAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36";
let baseCookie = "new_SiteId=cod;ACT_SSO_LOCALE=en_US;country=US;";
let baseSsoToken = "";
let debugMode = false;
let baseHeaders = {
  "content-type": "application/json",
  cookie: baseCookie,
  "user-agent": userAgent,
};
let basePostHeaders = {
  "content-type": "text/plain",
  cookie: baseCookie,
  "user-agent": userAgent,
};
let baseUrl = "https://my.callofduty.com";
let apiPath = "/api/papi-client";
let loggedIn = false;
var platforms;
(function (platforms) {
  platforms["All"] = "all";
  platforms["Activision"] = "acti";
  platforms["Battlenet"] = "battle";
  platforms["PSN"] = "psn";
  platforms["Steam"] = "steam";
  platforms["Uno"] = "uno";
  platforms["XBOX"] = "xbl";
  platforms["NULL"] = "_";
})(platforms || (platforms = {}));
exports.platforms = platforms;
var games;
(function (games) {
  games["ModernWarfare"] = "mw";
  games["ModernWarfare2"] = "mw2";
  games["Vanguard"] = "vg";
  games["ColdWar"] = "cw";
  games["NULL"] = "_";
})(games || (games = {}));
var modes;
(function (modes) {
  modes["Multiplayer"] = "mp";
  modes["Warzone"] = "wz";
  modes["Warzone2"] = "wz2";
  modes["NULL"] = "_";
})(modes || (modes = {}));
var friendActions;
(function (friendActions) {
  friendActions["Invite"] = "invite";
  friendActions["Uninvite"] = "uninvite";
  friendActions["Remove"] = "remove";
  friendActions["Block"] = "block";
  friendActions["Unblock"] = "unblock";
})(friendActions || (friendActions = {}));
exports.friendActions = friendActions;
var generics;
(function (generics) {
  generics["STEAM_UNSUPPORTED"] =
    "Steam platform not supported by this game. Try `battle` instead.";
  generics["UNO_NO_NUMERICAL_ID"] =
    "You must use a numerical ID when using the platform 'uno'.\nIf using an Activision ID, please use the platform 'acti'.";
})(generics || (generics = {}));
const enableDebugMode = () => (debugMode = true);
exports.enableDebugMode = enableDebugMode;
const disableDebugMode = () => (debugMode = false);
exports.disableDebugMode = disableDebugMode;

const sendRequest = async (url) => {
  try {
    if (!loggedIn) throw new Error("Not Logged In.");
    let requestUrl = `${baseUrl}${apiPath}${url}`;
    if (debugMode) console.log(`[DEBUG]`, `Request Uri: ${requestUrl}`);
    if (debugMode) console.time("Round Trip");

    const res = await fetch(requestUrl, {
      headers: baseHeaders,
    });
    const { statusCode } = res;

    if (debugMode) console.timeEnd("Round Trip");
    if (statusCode >= 500)
      throw new Error(
        `Received status code: '${statusCode}'. Route may be down or not exist.`
      );
    let response = await res.json();

    if (debugMode)
      console.log(
        `[DEBUG]`,
        `Body Size: ${JSON.stringify(response).length} bytes.`
      );
    return response;
  } catch (exception) {
    throw exception;
  }
};

const sendPostRequest = async (url, data) => {
  try {
    if (!loggedIn) throw new Error("Not Logged In.");
    let requestUrl = `${baseUrl}${apiPath}${url}`;

    const res = await fetch(requestUrl, {
      method: "POST",
      headers: basePostHeaders,
      body: data,
    });
    const { statusCode } = res;

    if (statusCode >= 500)
      throw new Error(
        `Received status code: '${statusCode}'. Route may be down or not exist.`
      );
    let response = await res.json();
    return response;
  } catch (exception) {
    throw exception;
  }
};
const cleanClientName = (gamertag) => {
  return encodeURIComponent(gamertag);
};
const login = (ssoToken) => {
  if (!ssoToken || ssoToken.trim().length <= 0) return false;
  let fakeXSRF = "68e8b62e-1d9d-4ce1-b93f-cbe5ff31a041";
  baseHeaders["X-XSRF-TOKEN"] = fakeXSRF;
  baseHeaders["X-CSRF-TOKEN"] = fakeXSRF;
  baseHeaders["Atvi-Auth"] = ssoToken;
  baseHeaders["ACT_SSO_COOKIE"] = ssoToken;
  baseHeaders["atkn"] = ssoToken;
  baseHeaders[
    "cookie"
  ] = `${baseCookie}ACT_SSO_COOKIE=${ssoToken};XSRF-TOKEN=${fakeXSRF};API_CSRF_TOKEN=${fakeXSRF};ACT_SSO_EVENT="LOGIN_SUCCESS:1644346543228";ACT_SSO_COOKIE_EXPIRY=1645556143194;comid=cod;ssoDevId=63025d09c69f47dfa2b8d5520b5b73e4;tfa_enrollment_seen=true;gtm.custom.bot.flag=human;`;
  baseSsoToken = ssoToken;
  basePostHeaders["X-XSRF-TOKEN"] = fakeXSRF;
  basePostHeaders["X-CSRF-TOKEN"] = fakeXSRF;
  basePostHeaders["Atvi-Auth"] = ssoToken;
  basePostHeaders["ACT_SSO_COOKIE"] = ssoToken;
  basePostHeaders["atkn"] = ssoToken;
  basePostHeaders[
    "cookie"
  ] = `${baseCookie}ACT_SSO_COOKIE=${ssoToken};XSRF-TOKEN=${fakeXSRF};API_CSRF_TOKEN=${fakeXSRF};ACT_SSO_EVENT="LOGIN_SUCCESS:1644346543228";ACT_SSO_COOKIE_EXPIRY=1645556143194;comid=cod;ssoDevId=63025d09c69f47dfa2b8d5520b5b73e4;tfa_enrollment_seen=true;gtm.custom.bot.flag=human;`;
  loggedIn = true;
  return loggedIn;
};
exports.login = login;
const handleLookupType = (platform) => {
  return platform === platforms.Uno ? "id" : "gamer";
};
const checkForValidPlatform = (platform, gamertag) => {
  if (!Object.values(platforms).includes(platform))
    throw new Error(
      `Platform '${platform}' is not valid.\nTry one of the following:\n${JSON.stringify(
        Object.values(platforms),
        null,
        2
      )}`
    );
  if (gamertag && isNaN(Number(gamertag)) && platform === platforms.Uno)
    throw new Error(generics.UNO_NO_NUMERICAL_ID);
};
const mapGamertagToPlatform = (gamertag, platform, steamSupport = false) => {
  checkForValidPlatform(platform, gamertag);
  const lookupType = handleLookupType(platform);
  if (!steamSupport && platform === platforms.Steam)
    throw new Error(generics.STEAM_UNSUPPORTED);
  if (
    platform === platforms.Battlenet ||
    platform === platforms.Activision ||
    platform === platforms.Uno
  )
    if (gamertag && gamertag.length > 0) gamertag = cleanClientName(gamertag);
  if (platform === platforms.Uno || platform === platforms.Activision)
    platform = platforms.Uno;
  return { gamertag, _platform: platform, lookupType };
};
class Endpoints {
  constructor(game, gamertag, platform, mode, lookupType) {
    this.fullData = () =>
      `/stats/cod/v1/title/${this.game}/platform/${this.platform}/${this.lookupType}/${this.gamertag}/profile/type/${this.mode}`;
    this.combatHistory = () =>
      `/crm/cod/v2/title/${this.game}/platform/${this.platform}/${this.lookupType}/${this.gamertag}/matches/${this.mode}/start/0/end/0/details`;
    this.combatHistoryWithDate = (startTime, endTime) =>
      `/crm/cod/v2/title/${this.game}/platform/${this.platform}/${this.lookupType}/${this.gamertag}/matches/${this.mode}/start/${startTime}/end/${endTime}/details`;
    this.breakdown = () =>
      `/crm/cod/v2/title/${this.game}/platform/${this.platform}/${this.lookupType}/${this.gamertag}/matches/${this.mode}/start/0/end/0`;
    this.breakdownWithDate = (startTime, endTime) =>
      `/crm/cod/v2/title/${this.game}/platform/${this.platform}/${this.lookupType}/${this.gamertag}/matches/${this.mode}/start/${startTime}/end/${endTime}`;
    this.matchInfo = (matchId) =>
      `/crm/cod/v2/title/${this.game}/platform/${this.platform}/fullMatch/wz/${matchId}/en`;
    this.seasonLoot = () =>
      `/loot/title/${this.game}/platform/${this.platform}/${this.lookupType}/${this.gamertag}/status/en`;
    this.mapList = () =>
      `/ce/v1/title/${this.game}/platform/${this.platform}/gameType/${this.mode}/communityMapData/availability`;
    this.purchasableItems = (gameId) =>
      `/inventory/v1/title/${gameId}/platform/psn/purchasable/public/en`;
    this.bundleInformation = (gameId, bundleId) =>
      `/inventory/v1/title/${gameId}/bundle/${bundleId}/en`;
    this.battlePassLoot = (season) =>
      `/loot/title/${this.game}/platform/${this.platform}/list/loot_season_${season}/en`;
    this.friendFeed = () =>
      `/userfeed/v1/friendFeed/platform/${this.platform}/${this.lookupType}/${this.gamertag}/friendFeedEvents/en`;
    this.eventFeed = () =>
      `/userfeed/v1/friendFeed/rendered/en/${baseSsoToken}`;
    this.loggedInIdentities = () => `/crm/cod/v2/identities/${baseSsoToken}`;
    this.codPoints = () =>
      `/inventory/v1/title/mw/platform/${this.platform}/${this.lookupType}/${this.gamertag}/currency`;
    this.connectedAccounts = () =>
      `/crm/cod/v2/accounts/platform/${this.platform}/${this.lookupType}/${this.gamertag}`;
    this.settings = () =>
      `/preferences/v1/platform/${this.platform}/${this.lookupType}/${this.gamertag}/list`;
    this.friendAction = (action) =>
      `/codfriends/v1/${action}/${this.platform}/${this.lookupType}/${this.gamertag}`;
    this.search = () =>
      `/crm/cod/v2/platform/${this.platform}/username/${this.gamertag}/search`;
    this.game = game;
    this.gamertag = gamertag;
    this.platform = platform;
    this.lookupType = lookupType;
    this.mode = mode;
  }
}
class WZ {
  constructor() {
    this.fullData = async (gamertag, platform) => {
      var lookupType;
      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.ModernWarfare,
        gamertag,
        platform,
        modes.Warzone,
        lookupType
      );
      return sendRequest(endpoint.fullData());
    };
    this.combatHistory = async (gamertag, platform) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.ModernWarfare,
        gamertag,
        platform,
        modes.Warzone,
        lookupType
      );
      return sendRequest(endpoint.combatHistory());
    };
    this.combatHistoryWithDate = async (
      gamertag,
      startTime,
      endTime,
      platform
    ) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.ModernWarfare,
        gamertag,
        platform,
        modes.Warzone,
        lookupType
      );
      return sendRequest(endpoint.combatHistoryWithDate(startTime, endTime));
    };
    this.breakdown = async (gamertag, platform) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.ModernWarfare,
        gamertag,
        platform,
        modes.Warzone,
        lookupType
      );
      return sendRequest(endpoint.breakdown());
    };
    this.breakdownWithDate = async (gamertag, startTime, endTime, platform) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.ModernWarfare,
        gamertag,
        platform,
        modes.Warzone,
        lookupType
      );
      return sendRequest(endpoint.breakdownWithDate(startTime, endTime));
    };
    this.matchInfo = async (matchId, platform) => {
      var gamertag, lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform("", platform));
      const endpoint = new Endpoints(
        games.ModernWarfare,
        gamertag,
        platform,
        modes.Warzone,
        lookupType
      );
      return sendRequest(endpoint.matchInfo(matchId));
    };
    this.cleanGameMode = async (mode) => {
      //@ts-ignore
      const foundMode = game_modes_json_1.default["modes"][mode];
      if (!foundMode) return mode;
      return foundMode;
    };
  }
}
class MW {
  constructor() {
    this.fullData = async (gamertag, platform) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.ModernWarfare,
        gamertag,
        platform,
        modes.Multiplayer,
        lookupType
      );
      return sendRequest(endpoint.fullData());
    };
    this.combatHistory = async (gamertag, platform) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.ModernWarfare,
        gamertag,
        platform,
        modes.Multiplayer,
        lookupType
      );
      return sendRequest(endpoint.combatHistory());
    };
    this.combatHistoryWithDate = async (
      gamertag,
      startTime,
      endTime,
      platform
    ) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.ModernWarfare,
        gamertag,
        platform,
        modes.Multiplayer,
        lookupType
      );
      return sendRequest(endpoint.combatHistoryWithDate(startTime, endTime));
    };
    this.breakdown = async (gamertag, platform) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.ModernWarfare,
        gamertag,
        platform,
        modes.Multiplayer,
        lookupType
      );
      return sendRequest(endpoint.breakdown());
    };
    this.breakdownWithDate = async (gamertag, startTime, endTime, platform) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.ModernWarfare,
        gamertag,
        platform,
        modes.Multiplayer,
        lookupType
      );
      return sendRequest(endpoint.breakdownWithDate(startTime, endTime));
    };
    this.matchInfo = async (matchId, platform) => {
      var gamertag, lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform("", platform));
      const endpoint = new Endpoints(
        games.ModernWarfare,
        gamertag,
        platform,
        modes.Multiplayer,
        lookupType
      );
      return sendRequest(endpoint.matchInfo(matchId));
    };
    this.seasonloot = async (gamertag, platform) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.ModernWarfare,
        gamertag,
        platform,
        modes.Multiplayer,
        lookupType
      );
      return sendRequest(endpoint.seasonLoot());
    };
    this.mapList = async (platform) => {
      var gamertag, lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform("", platform));
      const endpoint = new Endpoints(
        games.ModernWarfare,
        gamertag,
        platform,
        modes.Multiplayer,
        lookupType
      );
      return sendRequest(endpoint.mapList());
    };
  }
}
class MW2 {
  constructor() {
    this.fullData = async (gamertag, platform) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform, true));
      const endpoint = new Endpoints(
        games.ModernWarfare2,
        gamertag,
        platform,
        modes.Multiplayer,
        lookupType
      );
      return sendRequest(endpoint.fullData());
    };
    this.combatHistory = async (gamertag, platform) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform, true));
      const endpoint = new Endpoints(
        games.ModernWarfare2,
        gamertag,
        platform,
        modes.Multiplayer,
        lookupType
      );
      return sendRequest(endpoint.combatHistory());
    };
    this.combatHistoryWithDate = async (
      gamertag,
      startTime,
      endTime,
      platform
    ) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform, true));
      const endpoint = new Endpoints(
        games.ModernWarfare2,
        gamertag,
        platform,
        modes.Multiplayer,
        lookupType
      );
      return sendRequest(endpoint.combatHistoryWithDate(startTime, endTime));
    };
    this.breakdown = async (gamertag, platform) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform, true));
      const endpoint = new Endpoints(
        games.ModernWarfare2,
        gamertag,
        platform,
        modes.Multiplayer,
        lookupType
      );
      return sendRequest(endpoint.breakdown());
    };
    this.breakdownWithDate = async (gamertag, startTime, endTime, platform) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform, true));
      const endpoint = new Endpoints(
        games.ModernWarfare2,
        gamertag,
        platform,
        modes.Multiplayer,
        lookupType
      );
      return sendRequest(endpoint.breakdownWithDate(startTime, endTime));
    };
    this.seasonloot = async (gamertag, platform) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform, true));
      const endpoint = new Endpoints(
        games.ModernWarfare2,
        gamertag,
        platform,
        modes.Multiplayer,
        lookupType
      );
      return sendRequest(endpoint.seasonLoot());
    };
    this.mapList = async (platform) => {
      var gamertag, lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform("", platform, true));
      const endpoint = new Endpoints(
        games.ModernWarfare2,
        gamertag,
        platform,
        modes.Multiplayer,
        lookupType
      );
      return sendRequest(endpoint.mapList());
    };
    this.matchInfo = async (matchId, platform) => {
      var gamertag, lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform("", platform, true));
      const endpoint = new Endpoints(
        games.ModernWarfare2,
        gamertag,
        platform,
        modes.Multiplayer,
        lookupType
      );
      return sendRequest(endpoint.matchInfo(matchId));
    };
  }
}
class WZ2 {
  constructor() {
    this.fullData = async (gamertag, platform) => {
      var lookupType;
      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.ModernWarfare2,
        gamertag,
        platform,
        modes.Warzone2,
        lookupType
      );
      return sendRequest(endpoint.fullData());
    };
    this.combatHistory = async (gamertag, platform) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.ModernWarfare2,
        gamertag,
        platform,
        modes.Warzone2,
        lookupType
      );
      return sendRequest(endpoint.combatHistory());
    };
    this.combatHistoryWithDate = async (
      gamertag,
      startTime,
      endTime,
      platform
    ) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.ModernWarfare2,
        gamertag,
        platform,
        modes.Warzone2,
        lookupType
      );
      return sendRequest(endpoint.combatHistoryWithDate(startTime, endTime));
    };
    this.breakdown = async (gamertag, platform) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.ModernWarfare2,
        gamertag,
        platform,
        modes.Warzone2,
        lookupType
      );
      return sendRequest(endpoint.breakdown());
    };
    this.breakdownWithDate = async (gamertag, startTime, endTime, platform) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.ModernWarfare2,
        gamertag,
        platform,
        modes.Warzone2,
        lookupType
      );
      return sendRequest(endpoint.breakdownWithDate(startTime, endTime));
    };
    this.matchInfo = async (matchId, platform) => {
      var gamertag, lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform("", platform));
      const endpoint = new Endpoints(
        games.ModernWarfare2,
        gamertag,
        platform,
        modes.Warzone2,
        lookupType
      );
      return sendRequest(endpoint.matchInfo(matchId));
    };
  }
}
class CW {
  constructor() {
    this.fullData = async (gamertag, platform) => {
      var lookupType;
      {
        ({
          gamertag,
          _platform: platform,
          lookupType,
        } = mapGamertagToPlatform(gamertag, platform));
        const endpoint = new Endpoints(
          games.ColdWar,
          gamertag,
          platform,
          modes.Multiplayer,
          lookupType
        );
        return sendRequest(endpoint.fullData());
      }
    };
    this.combatHistory = async (gamertag, platform) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.ColdWar,
        gamertag,
        platform,
        modes.Multiplayer,
        lookupType
      );
      return sendRequest(endpoint.combatHistory());
    };

    this.combatHistoryWithDate = async (
      gamertag,
      startTime,
      endTime,
      platform
    ) => {
      var lookupType;
      {
        ({
          gamertag,
          _platform: platform,
          lookupType,
        } = mapGamertagToPlatform(gamertag, platform));
        const endpoint = new Endpoints(
          games.ColdWar,
          gamertag,
          platform,
          modes.Multiplayer,
          lookupType
        );
        return sendRequest(endpoint.combatHistoryWithDate(startTime, endTime));
      }
    };
    this.breakdown = async (gamertag, platform) => {
      var lookupType;
      {
        ({
          gamertag,
          _platform: platform,
          lookupType,
        } = mapGamertagToPlatform(gamertag, platform));
        const endpoint = new Endpoints(
          games.ColdWar,
          gamertag,
          platform,
          modes.Multiplayer,
          lookupType
        );
        return sendRequest(endpoint.breakdown());
      }
    };
    this.breakdownWithDate = async (gamertag, startTime, endTime, platform) => {
      var lookupType;
      {
        ({
          gamertag,
          _platform: platform,
          lookupType,
        } = mapGamertagToPlatform(gamertag, platform));
        const endpoint = new Endpoints(
          games.ColdWar,
          gamertag,
          platform,
          modes.Multiplayer,
          lookupType
        );
        return sendRequest(endpoint.breakdownWithDate(startTime, endTime));
      }
    };
    this.seasonloot = async (gamertag, platform) => {
      var lookupType;
      {
        ({
          gamertag,
          _platform: platform,
          lookupType,
        } = mapGamertagToPlatform(gamertag, platform));
        const endpoint = new Endpoints(
          games.ColdWar,
          gamertag,
          platform,
          modes.Multiplayer,
          lookupType
        );
        return sendRequest(endpoint.seasonLoot());
      }
    };
    this.mapList = async (platform) => {
      var gamertag, lookupType;
      {
        ({
          gamertag,
          _platform: platform,
          lookupType,
        } = mapGamertagToPlatform("", platform));
        const endpoint = new Endpoints(
          games.ColdWar,
          gamertag,
          platform,
          modes.Multiplayer,
          lookupType
        );
        return sendRequest(endpoint.mapList());
      }
    };
    this.matchInfo = async (matchId, platform) => {
      var gamertag, lookupType;
      {
        ({
          gamertag,
          _platform: platform,
          lookupType,
        } = mapGamertagToPlatform("", platform));
        const endpoint = new Endpoints(
          games.ColdWar,
          gamertag,
          platform,
          modes.Multiplayer,
          lookupType
        );
        return sendRequest(endpoint.matchInfo(matchId));
      }
    };
  }
}
class VG {
  constructor() {
    this.fullData = async (gamertag, platform) => {
      var lookupType;
      {
        ({
          gamertag,
          _platform: platform,
          lookupType,
        } = mapGamertagToPlatform(gamertag, platform));
        const endpoint = new Endpoints(
          games.Vanguard,
          gamertag,
          platform,
          modes.Multiplayer,
          lookupType
        );
        return sendRequest(endpoint.fullData());
      }
    };
    this.combatHistory = async (gamertag, platform) => {
      var lookupType;
      {
        ({
          gamertag,
          _platform: platform,
          lookupType,
        } = mapGamertagToPlatform(gamertag, platform));
        const endpoint = new Endpoints(
          games.Vanguard,
          gamertag,
          platform,
          modes.Multiplayer,
          lookupType
        );
        return sendRequest(endpoint.combatHistory());
      }
    };
    this.combatHistoryWithDate = async (
      gamertag,
      startTime,
      endTime,
      platform
    ) => {
      var lookupType;
      {
        ({
          gamertag,
          _platform: platform,
          lookupType,
        } = mapGamertagToPlatform(gamertag, platform));
        const endpoint = new Endpoints(
          games.Vanguard,
          gamertag,
          platform,
          modes.Multiplayer,
          lookupType
        );
        return sendRequest(endpoint.combatHistoryWithDate(startTime, endTime));
      }
    };
    this.breakdown = async (gamertag, platform) => {
      var lookupType;
      {
        ({
          gamertag,
          _platform: platform,
          lookupType,
        } = mapGamertagToPlatform(gamertag, platform));
        const endpoint = new Endpoints(
          games.Vanguard,
          gamertag,
          platform,
          modes.Multiplayer,
          lookupType
        );
        return sendRequest(endpoint.breakdown());
      }
    };
    this.breakdownWithDate = async (gamertag, startTime, endTime, platform) => {
      var lookupType;
      {
        ({
          gamertag,
          _platform: platform,
          lookupType,
        } = mapGamertagToPlatform(gamertag, platform));
        const endpoint = new Endpoints(
          games.Vanguard,
          gamertag,
          platform,
          modes.Multiplayer,
          lookupType
        );
        return sendRequest(endpoint.breakdownWithDate(startTime, endTime));
      }
    };
    this.seasonloot = async (gamertag, platform) => {
      var lookupType;
      {
        ({
          gamertag,
          _platform: platform,
          lookupType,
        } = mapGamertagToPlatform(gamertag, platform));
        const endpoint = new Endpoints(
          games.Vanguard,
          gamertag,
          platform,
          modes.Multiplayer,
          lookupType
        );
        return sendRequest(endpoint.seasonLoot());
      }
    };
    this.mapList = async (platform) => {
      var gamertag, lookupType;
      {
        ({
          gamertag,
          _platform: platform,
          lookupType,
        } = mapGamertagToPlatform("", platform));
        const endpoint = new Endpoints(
          games.Vanguard,
          gamertag,
          platform,
          modes.Multiplayer,
          lookupType
        );
        return sendRequest(endpoint.mapList());
      }
    };
    this.matchInfo = async (matchId, platform) => {
      var gamertag, lookupType;
      {
        ({
          gamertag,
          _platform: platform,
          lookupType,
        } = mapGamertagToPlatform("", platform));
        const endpoint = new Endpoints(
          games.Vanguard,
          gamertag,
          platform,
          modes.Multiplayer,
          lookupType
        );
        return sendRequest(endpoint.matchInfo(matchId));
      }
    };
  }
}
class SHOP {
  constructor() {
    this.purchasableItems = async (gameId) => {
      const endpoint = new Endpoints(
        games.NULL,
        "",
        platforms.NULL,
        modes.NULL,
        ""
      );
      return sendRequest(endpoint.purchasableItems(gameId));
    };
    this.bundleInformation = async (title, bundleId) => {
      const endpoint = new Endpoints(
        games.NULL,
        "",
        platforms.NULL,
        modes.NULL,
        ""
      );
      return sendRequest(endpoint.bundleInformation(title, bundleId));
    };
    this.battlePassLoot = async (title, season, platform) => {
      var gamertag, lookupType;
      {
        ({
          gamertag,
          _platform: platform,
          lookupType,
        } = mapGamertagToPlatform("", platform));
        const endpoint = new Endpoints(
          title,
          gamertag,
          platform,
          modes.NULL,
          lookupType
        );
        return sendRequest(endpoint.battlePassLoot(season));
      }
    };
  }
}
class USER {
  constructor() {
    this.friendFeed = async (gamertag, platform) => {
      var lookupType;
      {
        ({
          gamertag,
          _platform: platform,
          lookupType,
        } = mapGamertagToPlatform(gamertag, platform));
        const endpoint = new Endpoints(
          games.NULL,
          gamertag,
          platform,
          modes.NULL,
          lookupType
        );
        return sendRequest(endpoint.friendFeed());
      }
    };
    this.eventFeed = async () => {
      const endpoint = new Endpoints(
        games.NULL,
        "",
        platforms.NULL,
        modes.NULL,
        ""
      );
      return sendRequest(endpoint.eventFeed());
    };
    this.loggedInIdentities = async () => {
      const endpoint = new Endpoints(
        games.NULL,
        "",
        platforms.NULL,
        modes.NULL,
        ""
      );
      return sendRequest(endpoint.loggedInIdentities());
    };

    this.codPoints = async (gamertag, platform) => {
      var lookupType;
      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.NULL,
        gamertag,
        platform,
        modes.NULL,
        lookupType
      );

      return sendRequest(endpoint.codPoints());
    };

    this.connectedAccounts = async (gamertag, platform) => {
      var lookupType;
      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.NULL,
        gamertag,
        platform,
        modes.NULL,
        lookupType
      );
      return sendRequest(endpoint.connectedAccounts());
    };

    this.settings = async (gamertag, platform) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.NULL,
        gamertag,
        platform,
        modes.NULL,
        lookupType
      );
      return sendRequest(endpoint.settings());
    };
    this.friendAction = async (gamertag, platform, action) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform));
      const endpoint = new Endpoints(
        games.NULL,
        gamertag,
        platform,
        modes.NULL,
        lookupType
      );
      return sendPostRequest(endpoint.friendAction(action), "{}");
    };
  }
}
class ALT {
  constructor() {
    this.search = async (gamertag, platform) => {
      var lookupType;

      ({
        gamertag,
        _platform: platform,
        lookupType,
      } = mapGamertagToPlatform(gamertag, platform, true));
      const endpoint = new Endpoints(
        games.NULL,
        gamertag,
        platform,
        modes.NULL,
        lookupType
      );
      return sendRequest(endpoint.search());
    };
    this.cleanWeapon = async (weapon) => {
      //@ts-ignore
      const foundWeapon = weapon_ids_json_1.default["All Weapons"][weapon];
      if (!foundWeapon) return weapon;
      return foundWeapon;
    };
  }
}
const Warzone = new WZ();
exports.Warzone = Warzone;
const ModernWarfare = new MW();
exports.ModernWarfare = ModernWarfare;
const ModernWarfare2 = new MW2();
exports.ModernWarfare2 = ModernWarfare2;
const Warzone2 = new WZ2();
exports.Warzone2 = Warzone2;
const ColdWar = new CW();
exports.ColdWar = ColdWar;
const Vanguard = new VG();
exports.Vanguard = Vanguard;
const Store = new SHOP();
exports.Store = Store;
const Me = new USER();
exports.Me = Me;
const Misc = new ALT();
exports.Misc = Misc;
