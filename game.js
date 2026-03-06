(() => {
  // ===================== CANVAS =====================
  const canvas = document.getElementById("game");
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  const W = canvas.width;
  const H = canvas.height;

  // ===================== UI =====================
  const statusEl = document.getElementById("status");
  const scoreboardEl = document.getElementById("scoreboard");
  const scoreLeftNameEl = document.getElementById("scoreLeftName");
  const scoreRightNameEl = document.getElementById("scoreRightName");
  const scoreLeftValueEl = document.getElementById("scoreLeftValue");
  const scoreRightValueEl = document.getElementById("scoreRightValue");
  const scoreToWinEl = document.getElementById("scoreToWin");
  const resetBtn = document.getElementById("resetBtn");
  const lobbyEl = document.getElementById("lobby");
  const startBtn = document.getElementById("startBtn");

  const tabLogin = document.getElementById("tabLogin");
  const tabSettings = document.getElementById("tabSettings");
  const tabClicker = document.getElementById("tabClicker");
  const tabStory = document.getElementById("tabStory");
  const tabTower = document.getElementById("tabTower");
  const tabBoss = document.getElementById("tabBoss");
  const tabAnimation = document.getElementById("tabAnimation");
  const tabMusic = document.getElementById("tabMusic");
  const toSettingsBtn = document.getElementById("toSettingsBtn");
  const guestBtn = document.getElementById("guestBtn");
  const backToLogin = document.getElementById("backToLogin");
  const screenLogin = document.getElementById("screenLogin");
  const screenSettings = document.getElementById("screenSettings");
  const screenClicker = document.getElementById("screenClicker");
  const screenStory = document.getElementById("screenStory");
  const screenTower = document.getElementById("screenTower");
  const screenBoss = document.getElementById("screenBoss");
  const screenAnimation = document.getElementById("screenAnimation");
  const screenMusic = document.getElementById("screenMusic");
  const towerRosterOwner = document.getElementById("towerRosterOwner");
  const towerStartBtn = document.getElementById("towerStartBtn");
  const storyBookShelf = document.getElementById("storyBookShelf");
  const storyReader = document.getElementById("storyReader");
  const storyEndingCount = document.getElementById("storyEndingCount");
  const storyActiveBookTag = document.getElementById("storyActiveBookTag");
  const storyTitle = document.getElementById("storyTitle");
  const storyArtCanvas = document.getElementById("storyArt");
  const storyArtCtx = storyArtCanvas ? storyArtCanvas.getContext("2d") : null;
  if (storyArtCtx) storyArtCtx.imageSmoothingEnabled = false;
  const storyArtCaption = document.getElementById("storyArtCaption");
  const storySceneTitle = document.getElementById("storySceneTitle");
  const storySceneText = document.getElementById("storySceneText");
  const storyEndingBadge = document.getElementById("storyEndingBadge");
  const storyChoices = document.getElementById("storyChoices");
  const storyProgress = document.getElementById("storyProgress");
  const storyBackBtn = document.getElementById("storyBackBtn");
  const storyRestartBtn = document.getElementById("storyRestartBtn");

  const maxBallsInput = document.getElementById("maxBalls");
  const spawnEveryInput = document.getElementById("spawnEvery");
  const roundsToWinInput = document.getElementById("roundsToWin");
  const bossModeToggle = document.getElementById("bossModeToggle");
  const teamBossModeToggle = document.getElementById("teamBossModeToggle");

  const coinP1 = document.getElementById("coinP1");
  const coinP2 = document.getElementById("coinP2");
  const p1CoinsMid = document.getElementById("p1CoinsMid");
  const p2CoinsMid = document.getElementById("p2CoinsMid");

  const p1User = document.getElementById("p1User");
  const p1Pass = document.getElementById("p1Pass");
  const p1Register = document.getElementById("p1Register");
  const p1Login = document.getElementById("p1Login");
  const p1Logout = document.getElementById("p1Logout");
  const p1LoginMsg = document.getElementById("p1LoginMsg");

  const p2User = document.getElementById("p2User");
  const p2Pass = document.getElementById("p2Pass");
  const p2Register = document.getElementById("p2Register");
  const p2Login = document.getElementById("p2Login");
  const p2Logout = document.getElementById("p2Logout");
  const p2LoginMsg = document.getElementById("p2LoginMsg");

  const p1Prev = document.getElementById("p1Prev");
  const p1Next = document.getElementById("p1Next");
  const p1Random = document.getElementById("p1Random");
  const p1Buy = document.getElementById("p1Buy");
  const p1CharName = document.getElementById("p1CharName");
  const p1CharMeta = document.getElementById("p1CharMeta");
  const p1Lock = document.getElementById("p1Lock");
  const p1RarityFilter = document.getElementById("p1RarityFilter");

  const p2Prev = document.getElementById("p2Prev");
  const p2Next = document.getElementById("p2Next");
  const p2Random = document.getElementById("p2Random");
  const p2Buy = document.getElementById("p2Buy");
  const p2CharName = document.getElementById("p2CharName");
  const p2CharMeta = document.getElementById("p2CharMeta");
  const p2Lock = document.getElementById("p2Lock");
  const p2RarityFilter = document.getElementById("p2RarityFilter");

  const p1ChestBasic = document.getElementById("p1ChestBasic");
  const p1ChestPremium = document.getElementById("p1ChestPremium");
  const p2ChestBasic = document.getElementById("p2ChestBasic");
  const p2ChestPremium = document.getElementById("p2ChestPremium");
  const p1ChestMsg = document.getElementById("p1ChestMsg");
  const p2ChestMsg = document.getElementById("p2ChestMsg");
  const clickerCoinsP1 = document.getElementById("clickerCoinsP1");
  const clickerTotalEarnedP1 = document.getElementById("clickerTotalEarnedP1");
  const clickerGainP1 = document.getElementById("clickerGainP1");
  const clickerPerClickP1 = document.getElementById("clickerPerClickP1");
  const clickerTierP1 = document.getElementById("clickerTierP1");
  const clickerLevelP1 = document.getElementById("clickerLevelP1");
  const clickerCostP1 = document.getElementById("clickerCostP1");
  const clickerCpsP1 = document.getElementById("clickerCpsP1");
  const clickerSpeedBonusP1 = document.getElementById("clickerSpeedBonusP1");
  const clickerCharNameP1 = document.getElementById("clickerCharNameP1");
  const clickerCoinsPlaceP1 = document.getElementById("clickerCoinsPlaceP1");
  const clickerPerClickPlaceP1 = document.getElementById("clickerPerClickPlaceP1");
  const clickerCostPlaceP1 = document.getElementById("clickerCostPlaceP1");
  const clickerAvatarP1 = document.getElementById("clickerAvatarP1");
  const clickerTapP1 = document.getElementById("clickerTapP1");
  const clickerUpgradeP1 = document.getElementById("clickerUpgradeP1");
  const clickerMsgP1 = document.getElementById("clickerMsgP1");
  const clickerCoinsP2 = document.getElementById("clickerCoinsP2");
  const clickerTotalEarnedP2 = document.getElementById("clickerTotalEarnedP2");
  const clickerGainP2 = document.getElementById("clickerGainP2");
  const clickerPerClickP2 = document.getElementById("clickerPerClickP2");
  const clickerTierP2 = document.getElementById("clickerTierP2");
  const clickerLevelP2 = document.getElementById("clickerLevelP2");
  const clickerCostP2 = document.getElementById("clickerCostP2");
  const clickerCpsP2 = document.getElementById("clickerCpsP2");
  const clickerSpeedBonusP2 = document.getElementById("clickerSpeedBonusP2");
  const clickerCharNameP2 = document.getElementById("clickerCharNameP2");
  const clickerCoinsPlaceP2 = document.getElementById("clickerCoinsPlaceP2");
  const clickerPerClickPlaceP2 = document.getElementById("clickerPerClickPlaceP2");
  const clickerCostPlaceP2 = document.getElementById("clickerCostPlaceP2");
  const clickerAvatarP2 = document.getElementById("clickerAvatarP2");
  const clickerTapP2 = document.getElementById("clickerTapP2");
  const clickerUpgradeP2 = document.getElementById("clickerUpgradeP2");
  const clickerMsgP2 = document.getElementById("clickerMsgP2");
  const clickerAvatarCtxP1 = clickerAvatarP1 ? clickerAvatarP1.getContext("2d") : null;
  const clickerAvatarCtxP2 = clickerAvatarP2 ? clickerAvatarP2.getContext("2d") : null;
  if (clickerAvatarCtxP1) clickerAvatarCtxP1.imageSmoothingEnabled = false;
  if (clickerAvatarCtxP2) clickerAvatarCtxP2.imageSmoothingEnabled = false;

  const p1PreviewCanvas = document.getElementById("p1Preview");
  const p2PreviewCanvas = document.getElementById("p2Preview");
  const bossPreviewCanvas = document.getElementById("bossPreview");
  const p1pv = p1PreviewCanvas.getContext("2d");
  const p2pv = p2PreviewCanvas.getContext("2d");
  const bosspv = bossPreviewCanvas.getContext("2d");
  p1pv.imageSmoothingEnabled = false;
  p2pv.imageSmoothingEnabled = false;
  bosspv.imageSmoothingEnabled = false;

  const bossPrev = document.getElementById("bossPrev");
  const bossNext = document.getElementById("bossNext");
  const bossRandom = document.getElementById("bossRandom");
  const bossCharName = document.getElementById("bossCharName");
  const bossCharMeta = document.getElementById("bossCharMeta");
  const bossRarityFilter = document.getElementById("bossRarityFilter");
  const animationPreviewCanvas = document.getElementById("animationPreview");
  const animationPlayBtn = document.getElementById("animationPlayBtn");
  const animationPauseBtn = document.getElementById("animationPauseBtn");
  const animationResetBtn = document.getElementById("animationResetBtn");
  const animationBackdropSelect = document.getElementById("animationBackdrop");
  const animationProjectName = document.getElementById("animationProjectName");
  const animationSaveBtn = document.getElementById("animationSaveBtn");
  const animationSaveStatus = document.getElementById("animationSaveStatus");
  const animationSpeedInput = document.getElementById("animationSpeed");
  const animationSpeedLabel = document.getElementById("animationSpeedLabel");
  const animationFrameDurationInput = document.getElementById("animationFrameDuration");
  const animationFrameStatus = document.getElementById("animationFrameStatus");
  const animationSelectionStatus = document.getElementById("animationSelectionStatus");
  const animationStickerPalette = document.getElementById("animationStickerPalette");
  const animationFramesList = document.getElementById("animationFramesList");
  const animationAddFrameBtn = document.getElementById("animationAddFrameBtn");
  const animationDeleteFrameBtn = document.getElementById("animationDeleteFrameBtn");
  const animationSavedProjects = document.getElementById("animationSavedProjects");
  const animationSavedCount = document.getElementById("animationSavedCount");
  const animationStickerChar = document.getElementById("animationStickerChar");
  const animationStickerMotion = document.getElementById("animationStickerMotion");
  const animationStickerX = document.getElementById("animationStickerX");
  const animationStickerY = document.getElementById("animationStickerY");
  const animationStickerSize = document.getElementById("animationStickerSize");
  const animationStickerWidth = document.getElementById("animationStickerWidth");
  const animationStickerHeight = document.getElementById("animationStickerHeight");
  const animationStickerFacing = document.getElementById("animationStickerFacing");
  const animationDeleteStickerBtn = document.getElementById("animationDeleteStickerBtn");
  const animationEditorHint = document.getElementById("animationEditorHint");
  const animationFrameText = document.getElementById("animationFrameText");
  const animationFrameSpeaker = document.getElementById("animationFrameSpeaker");
  const animationBubbleStyle = document.getElementById("animationBubbleStyle");
  const animationBubbleColor = document.getElementById("animationBubbleColor");
  const animationBubbleTextColor = document.getElementById("animationBubbleTextColor");
  const animationPreviewCtx = animationPreviewCanvas ? animationPreviewCanvas.getContext("2d") : null;
  if (animationPreviewCtx) animationPreviewCtx.imageSmoothingEnabled = false;

  // ===================== CONSTANTS =====================
  const groundY = H - 70;
  const midX = W / 2;

  const GRAVITY = 1800;
  const MOVE_SPEED_BASE = 280;
  const JUMP_VY_BASE = -650;

  const BALL_R = 10;
  const THROW_SPEED_BASE = 820;

 const DOUBLE_TAP_MS = 250;
const FREEZE_RANGE = 380;
const MULTI_SHOT_SPREAD_RAD = 0.2;
const MULTI_SHOT_SPEED_MUL = 1.05;


  const MIN_HIT_SPEED = 200;
  const MAX_BOUNCES_TO_HIT = 1;

  const PICKUP_RADIUS = 70;
  const PICKABLE_SPEED = 45;

  const CHEST_BASIC_COST = 50;
  const CHEST_PREMIUM_COST = 120;

  // Space Controller charging (slow + visible)
  const CHARGE_MAX_SEC = 3.2;
  const CHARGE_MAX_SCALE = 3.8;
  const CHARGE_SPEED_PENALTY = 0.2;
  const CHARGE_LIFT_PX = 22;
  const BOSS_HELPER_COUNT = 3;
  const BOSS_HELPER_SPREAD_RAD = 0.22;
  const BOSS_HELPER_SPEED_MUL = 0.95;
  const ICE_TORNADO_DURATION = 0.9;
  const ICE_TORNADO_PULL_SPEED = 760;
  const FIRE_TORNADO_DURATION = 1.0;
  const FIRE_TORNADO_LAUNCH_SPEED = 1260;
  const FIRE_TORNADO_RANDOM_SPREAD_RAD = 1.15;
  const FIRE_TORNADO_UPWARD_BIAS_RAD = 0.35;
  const FIRE_TORNADO_SPEED_JITTER = 0.2;
  const BUILDER_BOX_DURATION = 5.0;
  const BLACKOUT_DURATION = 5.0;
  const ZOMBIE_WITCH_EXTRA_LIVES = 2;
  const ZOMBIE_COUNT = 2;
  const ZOMBIE_SPEED = 250;
  const ZOMBIE_TURN = 7.5;
  const ZOMBIE_LIFETIME = 8.0;
  const ZOMBIE_RADIUS = 10;
  const ZOMBIE_MAX_SLOW_STACKS = 5;
  const ZOMBIE_SLOW_PER_STACK = 0.12;
  const ZOMBIE_MIN_SPEED_MUL = 0.40;
  const ZOMBIE_SWARM_LOCK_RADIUS = 24;
  const ZOMBIE_ROOT_COUNT = 2;
  const ZOMBIE_CURSE_INTERVAL = 0.65;
  const REVIVE_INVULN_SEC = 0.8;
  const BOSS_MOVE_MUL = 1.18;
  const BOSS_JUMP_MUL = 1.08;
  const BOSS_THROW_MUL = 1.22;
  const BOSS_EXTRA_LIVES = 2;
  const BLIND_DIR_MIN_SEC = 0.16;
  const BLIND_DIR_MAX_SEC = 0.55;
  const ROOKIE_SHOT_SPEED_MUL = 1.02;
  const SLUGGER_SHOCKWAVE_SPEED = 980;
  const SPRINTER_DASH_DURATION = 2.2;
  const SPRINTER_DASH_MUL = 1.7;
  const HOPPER_SUPER_JUMP_MUL = 1.5;
  const BLAZE_BURST_SHOTS = 3;
  const BLAZE_BURST_SPREAD_RAD = 0.22;
  const BLAZE_BURST_SPEED_MUL = 1.1;
  const TANK_FORTIFY_DURATION = 2.2;
  const STORM_RAIN_DURATION = 3.0;
  const STORM_RAIN_INTERVAL = 0.22;
  const STORM_RAIN_SPEED_MIN = 760;
  const STORM_RAIN_SPEED_MAX = 1040;
  const AERO_PULL_SPEED = 980;
  const TD_PANEL_H = 92;
  const TD_PATH_Y = groundY - 135;
  const TD_PATH_H = 72;
  const TD_BASE_X = W - 78;
  const TD_WAVE_BREAK = 2.0;
  const TD_RARITY_LIMITS = { Common: 6, Rare: 4, Epic: 3, Mythic: 2 };
  const TD_RARITY_COLORS = { Common: "#7dd3fc", Rare: "#f9a8d4", Epic: "#c4b5fd", Mythic: "#fde68a" };
  const TD_BOSS_WAVE_INTERVAL = 5;
  const LS_STORY_PROGRESS = "dd_story_progress_v1";
  const LS_ANIMATION_PROJECTS = "dd_animation_projects_v1";
  const STORY_BOOKS = [
    {
      id: "crown_of_the_court",
      kicker: "Book I",
      title: "Crown of the Court",
      description: "A medieval dodgeball kingdom must choose its next royal champion. Your decisions decide which ending the realm gets.",
      meta: "Playable now. 3 endings.",
      playable: true,
      totalEndings: 3,
      theme: "Medieval",
      startNodeId: "gate",
      nodes: {
        gate: {
          title: "The Castle Gate",
          text: "You reach Stonecourt Keep on the morning of the Grand Bounce Tourney. Heralds call your name, villagers whisper about cursed dodgeballs, and the old chapel bell rings over the hill. Three paths open before you.",
          choices: [
            { text: "Enter through the royal gate and greet the heralds.", next: "throneRoom" },
            { text: "Slip into the market and listen for rumors.", next: "market" },
            { text: "Climb to the chapel and train before the finals.", next: "chapel" }
          ]
        },
        throneRoom: {
          title: "Audience With the Queen",
          text: "Queen Aldora offers you a place beside the throne if you protect the tournament with honor. But the Black Knight laughs from the court and dares you to settle the crown in a public duel.",
          choices: [
            { text: "Swear loyalty and defend the kingdom with honor.", next: "ending_peace" },
            { text: "Accept the duel and meet the Black Knight in the arena.", next: "duel" }
          ]
        },
        market: {
          title: "Whispers in the Market",
          text: "Bakers, blacksmiths, and traders all speak at once. A baker begs you to guard her cart from raiders, while a crooked merchant offers you a cursed dodgeball that would make winning easy.",
          choices: [
            { text: "Protect the baker and win the town's trust.", next: "ending_hero" },
            { text: "Buy the cursed ball and keep the edge for yourself.", next: "ending_tyrant" }
          ]
        },
        chapel: {
          title: "The Chapel Bell",
          text: "An old monk teaches that the best throw is the one made with purpose. He opens a hidden armory: a blessed shield hangs on one wall, and a forgotten tunnel leads under the royal court.",
          choices: [
            { text: "Take the blessed shield and return openly to the finals.", next: "ending_hero" },
            { text: "Use the tunnel to surprise the Black Knight below the arena.", next: "duel" }
          ]
        },
        duel: {
          title: "The Black Knight's Duel",
          text: "The torches flare as iron boots hit stone. You spot cursed gear hidden beneath the Black Knight's cape. You can still fight fairly, or expose the cheating and take the crown by force of proof.",
          choices: [
            { text: "Fight fairly and trust your skill.", next: "ending_hero" },
            { text: "Expose the cursed gear and seize the crown for yourself.", next: "ending_tyrant" }
          ]
        },
        ending_peace: {
          title: "Ending: Keeper of the Crown",
          text: "You place duty above glory and preserve the tournament without bloodshed. Queen Aldora names you Keeper of the Crown, protector of the court and guardian of the game.",
          endingId: "keeper_of_the_crown",
          endingLabel: "Keeper of the Crown",
          isEnding: true
        },
        ending_hero: {
          title: "Ending: Champion of the People",
          text: "By helping the town and facing danger directly, you win more than a match. The crowd carries you through the castle square as the new Champion of the People.",
          endingId: "champion_of_the_people",
          endingLabel: "Champion of the People",
          isEnding: true
        },
        ending_tyrant: {
          title: "Ending: Iron Crown",
          text: "Victory comes fast when you trade honor for power. You take the throne and the court falls silent beneath your rule. You wear the crown, but no one cheers.",
          endingId: "iron_crown",
          endingLabel: "Iron Crown",
          isEnding: true
        }
      }
    },
    {
      id: "skyship_siege",
      kicker: "Book II",
      title: "Skyship Siege",
      description: "Airship pirates, storm cannons, and arena battles above the clouds.",
      meta: "Coming soon.",
      playable: false,
      totalEndings: 0
    },
    {
      id: "moonlit_masquerade",
      kicker: "Book III",
      title: "Moonlit Masquerade",
      description: "A masked tournament inside a haunted palace where every match hides another secret.",
      meta: "Coming soon.",
      playable: false,
      totalEndings: 0
    }
  ];

  const STORY_SCENE_ART = {
    crown_of_the_court: {
      gate: {
        backdrop: "castle_gate",
        caption: "Stellar Guard arrives at Stonecourt Keep while the villagers gather for the Grand Bounce Tourney.",
        actors: [
          { charId: "stellar_guard", x: 146, y: 282, scale: 2.45, facing: 1, motion: "walk", label: "You", ball: true, crown: true },
          { charId: "bulwark", x: 480, y: 274, scale: 2.2, facing: -1, motion: "idle", label: "Queen Aldora" },
          { charId: "ember", x: 86, y: 292, scale: 1.7, facing: 1, motion: "idle" },
          { charId: "slugger", x: 556, y: 292, scale: 1.7, facing: -1, motion: "idle" }
        ],
        props: [
          { kind: "pathSign", x: 300, y: 255, text: "3 Paths" },
          { kind: "banner", x: 232, y: 112, color: "#d97706" },
          { kind: "banner", x: 414, y: 112, color: "#7c3aed" },
          { kind: "bell", x: 592, y: 102 }
        ]
      },
      throneRoom: {
        backdrop: "throne_room",
        caption: "Queen Aldora offers honor. Wraith stands in as the Black Knight and demands a public duel.",
        actors: [
          { charId: "stellar_guard", x: 165, y: 286, scale: 2.35, facing: 1, motion: "idle", label: "You", ball: true },
          { charId: "bulwark", x: 446, y: 258, scale: 2.1, facing: -1, motion: "idle", label: "Queen" },
          { charId: "wraith", x: 542, y: 292, scale: 2.2, facing: -1, motion: "throw", label: "Black Knight" }
        ],
        props: [
          { kind: "throne", x: 448, y: 290 },
          { kind: "torch", x: 86, y: 122 },
          { kind: "torch", x: 584, y: 122 }
        ]
      },
      market: {
        backdrop: "market",
        caption: "The market buzzes: Ember pleads for help while Architect tempts you with a cursed ball.",
        actors: [
          { charId: "stellar_guard", x: 204, y: 286, scale: 2.3, facing: 1, motion: "idle", label: "You" },
          { charId: "ember", x: 372, y: 286, scale: 2.05, facing: -1, motion: "idle", label: "Baker" },
          { charId: "architect", x: 520, y: 286, scale: 2.05, facing: -1, motion: "idle", label: "Merchant", ball: true },
          { charId: "phantom", x: 88, y: 292, scale: 1.8, facing: 1, motion: "walk", label: "Raider" }
        ],
        props: [
          { kind: "stall", x: 366, y: 254, color: "#b45309" },
          { kind: "stall", x: 516, y: 254, color: "#7c2d12" },
          { kind: "cursedBall", x: 556, y: 214 },
          { kind: "crate", x: 114, y: 310 }
        ]
      },
      chapel: {
        backdrop: "chapel",
        caption: "Glacier plays the old monk, showing a blessed shield and the hidden tunnel below the court.",
        actors: [
          { charId: "stellar_guard", x: 216, y: 286, scale: 2.3, facing: 1, motion: "idle", label: "You" },
          { charId: "glacier", x: 446, y: 278, scale: 2.1, facing: -1, motion: "idle", label: "Monk" }
        ],
        props: [
          { kind: "shield", x: 520, y: 205 },
          { kind: "tunnel", x: 128, y: 312 },
          { kind: "window", x: 512, y: 124 },
          { kind: "candle", x: 300, y: 222 }
        ]
      },
      duel: {
        backdrop: "arena",
        caption: "In the torchlit arena, the Black Knight faces you as cursed gear glows under the cape.",
        actors: [
          { charId: "stellar_guard", x: 176, y: 286, scale: 2.35, facing: 1, motion: "throw", label: "You", ball: true },
          { charId: "wraith", x: 474, y: 286, scale: 2.3, facing: -1, motion: "throw", label: "Black Knight", curse: true },
          { charId: "slugger", x: 92, y: 296, scale: 1.65, facing: 1, motion: "idle" },
          { charId: "cadet", x: 558, y: 296, scale: 1.65, facing: -1, motion: "idle" }
        ],
        props: [
          { kind: "torch", x: 84, y: 118 },
          { kind: "torch", x: 560, y: 118 },
          { kind: "cursedBall", x: 410, y: 224 }
        ]
      },
      ending_peace: {
        backdrop: "throne_room",
        caption: "Peace holds. The crown stays safe and the court honors your promise.",
        actors: [
          { charId: "stellar_guard", x: 202, y: 286, scale: 2.35, facing: 1, motion: "idle", label: "Keeper", crown: true },
          { charId: "bulwark", x: 456, y: 258, scale: 2.1, facing: -1, motion: "idle", label: "Queen" },
          { charId: "cadet", x: 548, y: 292, scale: 1.7, facing: -1, motion: "idle" }
        ],
        props: [
          { kind: "throne", x: 456, y: 290 },
          { kind: "laurel", x: 206, y: 194 },
          { kind: "banner", x: 230, y: 112, color: "#d97706" }
        ]
      },
      ending_hero: {
        backdrop: "square",
        caption: "The people lift you up as the new champion of the realm.",
        actors: [
          { charId: "stellar_guard", x: 322, y: 246, scale: 2.5, facing: 1, motion: "jump", label: "Champion", crown: true, ball: true },
          { charId: "ember", x: 152, y: 292, scale: 1.85, facing: 1, motion: "idle" },
          { charId: "slugger", x: 236, y: 298, scale: 1.7, facing: 1, motion: "idle" },
          { charId: "glacier", x: 432, y: 292, scale: 1.8, facing: -1, motion: "idle" },
          { charId: "cadet", x: 528, y: 296, scale: 1.7, facing: -1, motion: "idle" }
        ],
        props: [
          { kind: "confetti", x: 0, y: 0 },
          { kind: "banner", x: 146, y: 102, color: "#f59e0b" },
          { kind: "banner", x: 506, y: 102, color: "#16a34a" }
        ]
      },
      ending_tyrant: {
        backdrop: "dark_throne",
        caption: "You win the throne, but the hall goes silent under the Iron Crown.",
        actors: [
          { charId: "stellar_guard", x: 322, y: 268, scale: 2.45, facing: 1, motion: "idle", label: "Iron Crown", crown: true, curse: true },
          { charId: "wraith", x: 176, y: 296, scale: 1.8, facing: 1, motion: "idle" },
          { charId: "phantom", x: 474, y: 296, scale: 1.8, facing: -1, motion: "idle" }
        ],
        props: [
          { kind: "throne", x: 322, y: 294, dark: true },
          { kind: "cursedBall", x: 390, y: 222 },
          { kind: "torch", x: 106, y: 118, dim: true },
          { kind: "torch", x: 536, y: 118, dim: true }
        ]
      }
    }
  };

  // ===================== STATE =====================
  let running = false;
  let winsP1 = 0;
  let winsP2 = 0;
  let matchWinner = null;
  let bossMode = false;
  let teamBossMode = false;
  let towerDefenseMode = false;
  let bossNextActionAt = 0;
  let bossNextAbilityAt = 0;
  let bossNextJumpAt = 0;

  let CFG = {
    MAX_BALLS: 10,
    SPAWN_EVERY: 1.0,
    ROUNDS_TO_WIN: 3
  };

  const towerDefense = {
    owner: "P1",
    selectedCharId: "rookie",
    selectedCharIdP1: "rookie",
    selectedCharIdP2: "rookie",
    towers: [],
    lanes: {
      P1: null,
      P2: null
    }
  };

  const animationLab = {
    playing: true,
    startedAt: performance.now(),
    pausedAt: 0,
    speed: 1,
    projectName: "Untitled Creation",
    lastSavedAt: 0,
    frames: [],
    selectedFrameId: null,
    selectedStickerId: null,
    nextFrameId: 1,
    nextStickerId: 1,
    dragStickerId: null,
    dragOffsetX: 0,
    dragOffsetY: 0,
    resizeStickerId: null,
    resizeMode: "",
    resizeStartDist: 0,
    resizeStartDx: 0,
    resizeStartDy: 0,
    resizeStartSize: 1,
    resizeStartScaleX: 1,
    resizeStartScaleY: 1
  };
  const storyMode = {
    activeBookId: null,
    currentNodeId: null,
    unlockedEndings: loadStoryProgress()
  };

  function makeTDLaneState() {
    return {
      enemies: [],
      shots: [],
      spawnQueue: [],
      nextSpawnAt: 0,
      nextWaveAt: 0,
      wave: 0,
      lives: 20,
      coinsEarned: 0,
      defeated: 0,
      bossesDefeated: 0,
      message: "",
      messageUntil: 0,
      finalRewardGranted: false,
      waveResolved: true,
      finished: false
    };
  }

  // ===================== HELPERS =====================
  function clamp(v,a,b){ return Math.max(a, Math.min(b, v)); }
  function nowSec(){ return performance.now() / 1000; }
  function rand01(){ return Math.random(); }

  // ===================== CHARACTERS =====================
  const CHARACTERS = [
    { id:"rookie", name:"Rookie", rarity:"Common", cost:0, ability:"Rookie Common Power",
      speedMul:1.00, jumpMul:1.00, throwMul:1.00,
      look:{body:"#58c7ff", head:"#bfefff", accent:"#0b0f14", style:"plain"},
      desc:"Double-tap throw to fire a bonus training shot." },

    { id:"slugger", name:"Slugger", rarity:"Common", cost:70, ability:"Slugger Common Power",
      speedMul:0.96, jumpMul:1.00, throwMul:1.14,
      look:{body:"#f59e0b", head:"#fde68a", accent:"#0b0f14", style:"plain"},
      desc:"Double-tap throw to punch all loose balls toward your opponent." },

    { id:"sprinter", name:"Sprinter", rarity:"Common", cost:90, ability:"Sprinter Common Power",
      speedMul:1.14, jumpMul:0.95, throwMul:0.96,
      look:{body:"#22c55e", head:"#bbf7d0", accent:"#0b0f14", style:"plain"},
      desc:"Double-tap throw to gain a fast movement dash for a short time." },

    { id:"hopper", name:"Hopper", rarity:"Common", cost:85, ability:"Hopper Common Power",
      speedMul:1.00, jumpMul:1.18, throwMul:0.96,
      look:{body:"#06b6d4", head:"#a5f3fc", accent:"#0b0f14", style:"plain"},
      desc:"Double-tap throw to instantly super jump upward." },

    { id:"anchor", name:"Anchor", rarity:"Common", cost:80, ability:"Anchor Crash",
      speedMul:0.94, jumpMul:1.02, throwMul:1.16,
      look:{body:"#78716c", head:"#e7e5e4", accent:"#1c1917", style:"visor"},
      desc:"Double-tap throw to slam the 2 nearest loose balls at your opponent." },

    { id:"racer", name:"Racer", rarity:"Common", cost:95, ability:"Turbo Drift",
      speedMul:1.18, jumpMul:0.97, throwMul:0.95,
      look:{body:"#14b8a6", head:"#ccfbf1", accent:"#042f2e", style:"plain"},
      desc:"Double-tap throw to burst forward and fire a quick follow-up shot." },

    { id:"skybound", name:"Skybound", rarity:"Common", cost:92, ability:"Sky Spike",
      speedMul:1.03, jumpMul:1.22, throwMul:0.94,
      look:{body:"#8b5cf6", head:"#ede9fe", accent:"#2e1065", style:"mask"},
      desc:"Double-tap throw to launch upward and drop a steep spike shot." },

    { id:"cadet", name:"Cadet", rarity:"Common", cost:75, ability:"Cadet Drill",
      speedMul:1.02, jumpMul:1.01, throwMul:1.01,
      look:{body:"#3b82f6", head:"#dbeafe", accent:"#172554", style:"plain"},
      desc:"Double-tap throw to fire a 2-shot practice burst." },

    { id:"comet", name:"Comet", rarity:"Common", cost:88, ability:"Comet Rush",
      speedMul:1.16, jumpMul:1.00, throwMul:0.97,
      look:{body:"#f97316", head:"#ffedd5", accent:"#431407", style:"plain"},
      desc:"Double-tap throw to dash and launch a burning comet shot." },

    { id:"ice", name:"Ice", rarity:"Rare", cost:150, ability:"freeze",
      speedMul:1.00, jumpMul:1.00, throwMul:1.00,
      look:{body:"#38bdf8", head:"#bae6fd", accent:"#0b0f14", style:"mask"},
      desc:"Freeze opponent briefly (double-tap throw)." },

    { id:"blaze", name:"Blaze", rarity:"Rare", cost:180, ability:"Blaze Rare Power",
      speedMul:1.09, jumpMul:1.04, throwMul:1.02,
      look:{body:"#ef4444", head:"#fecaca", accent:"#111827", style:"mask"},
      desc:"Double-tap throw to fire a 3-shot flame burst." },

    { id:"tank", name:"Tank", rarity:"Rare", cost:190, ability:"Tank Rare Power",
      speedMul:0.90, jumpMul:0.92, throwMul:1.26,
      look:{body:"#64748b", head:"#cbd5e1", accent:"#0f172a", style:"visor"},
      desc:"Double-tap throw to fortify and become immune to hits briefly." },

    { id:"frostbite", name:"Frostbite", rarity:"Rare", cost:165, ability:"Cold Snap",
      speedMul:1.02, jumpMul:1.03, throwMul:1.00,
      look:{body:"#0f766e", head:"#ccfbf1", accent:"#042f2e", style:"mask"},
      desc:"Double-tap throw to freeze the opponent and drag the nearest loose ball your way." },

    { id:"ember", name:"Ember", rarity:"Rare", cost:175, ability:"Ember Arc",
      speedMul:1.11, jumpMul:1.05, throwMul:1.01,
      look:{body:"#fb7185", head:"#ffe4e6", accent:"#4c0519", style:"mask"},
      desc:"Double-tap throw to fire a 4-shot flaming arc." },

    { id:"bulwark", name:"Bulwark", rarity:"Rare", cost:200, ability:"Iron Guard",
      speedMul:0.88, jumpMul:0.94, throwMul:1.28,
      look:{body:"#475569", head:"#e2e8f0", accent:"#020617", style:"visor"},
      desc:"Double-tap throw to fortify and raise a short shield wall." },

    { id:"glacier", name:"Glacier", rarity:"Rare", cost:170, ability:"Glacier Grip",
      speedMul:0.98, jumpMul:1.04, throwMul:1.04,
      look:{body:"#2563eb", head:"#dbeafe", accent:"#172554", style:"visor"},
      desc:"Double-tap throw to freeze the opponent harder and yank floor balls across the court." },

    { id:"wildfire", name:"Wildfire", rarity:"Rare", cost:185, ability:"Wildfire Spin",
      speedMul:1.08, jumpMul:1.08, throwMul:1.05,
      look:{body:"#ea580c", head:"#fed7aa", accent:"#431407", style:"mask"},
      desc:"Double-tap throw to spin out a wide burning volley." },

    { id:"storm", name:"Storm", rarity:"Epic", cost:320, ability:"Storm Epic Power",
      speedMul:1.12, jumpMul:1.10, throwMul:1.10,
      look:{body:"#7c3aed", head:"#ddd6fe", accent:"#111827", style:"mask"},
      desc:"Double-tap throw to rain balls from the sky for 3 seconds." },

    { id:"phantom", name:"Phantom", rarity:"Epic", cost:340, ability:"freeze",
      speedMul:1.06, jumpMul:1.08, throwMul:1.06,
      look:{body:"#334155", head:"#e2e8f0", accent:"#0f172a", style:"visor"},
      desc:"Mobile controller with freeze pressure." },

    { id:"aero", name:"Aero", rarity:"Epic", cost:330, ability:"Aero Epic Power",
      speedMul:1.20, jumpMul:1.16, throwMul:0.98,
      look:{body:"#0ea5e9", head:"#e0f2fe", accent:"#082f49", style:"plain"},
      desc:"Double-tap throw to wind-pull the nearest loose ball to you." },

    { id:"builder", name:"Builder", rarity:"Epic", cost:360, ability:"builderBox",
      speedMul:0.98, jumpMul:0.98, throwMul:1.02,
      look:{body:"#b45309", head:"#fed7aa", accent:"#3f1d07", style:"visor"},
      desc:"Double-tap throw to build a box shield for 5 seconds. You cannot move until it ends." },

    { id:"thunder", name:"Thunder", rarity:"Epic", cost:345, ability:"Thunder Call",
      speedMul:1.14, jumpMul:1.11, throwMul:1.12,
      look:{body:"#6d28d9", head:"#ede9fe", accent:"#1f2937", style:"mask"},
      desc:"Double-tap throw to call a lightning rain and briefly freeze the opponent." },

    { id:"wraith", name:"Wraith", rarity:"Epic", cost:350, ability:"Phase Shift",
      speedMul:1.08, jumpMul:1.10, throwMul:1.08,
      look:{body:"#1f2937", head:"#cbd5e1", accent:"#020617", style:"visor"},
      desc:"Double-tap throw to phase behind the opponent and gain brief intangibility." },

    { id:"jetstream", name:"Jetstream", rarity:"Epic", cost:338, ability:"Jetstream Orbit",
      speedMul:1.22, jumpMul:1.18, throwMul:0.99,
      look:{body:"#0284c7", head:"#e0f2fe", accent:"#082f49", style:"plain"},
      desc:"Double-tap throw to pull multiple loose balls into orbit around you." },

    { id:"architect", name:"Architect", rarity:"Epic", cost:365, ability:"Fortress Grid",
      speedMul:1.00, jumpMul:1.00, throwMul:1.03,
      look:{body:"#92400e", head:"#ffedd5", accent:"#451a03", style:"visor"},
      desc:"Double-tap throw to build a fortified shield wall and instantly refresh your position." },

    { id:"monsoon", name:"Monsoon", rarity:"Epic", cost:348, ability:"Monsoon Surge",
      speedMul:1.13, jumpMul:1.12, throwMul:1.11,
      look:{body:"#4f46e5", head:"#e0e7ff", accent:"#1e1b4b", style:"mask"},
      desc:"Double-tap throw to summon storm rain and slow nearby loose balls toward your side." },

    { id:"stellar_guard", name:"Stellar Guard", rarity:"Mythic", cost:980, ability:"boss",
      speedMul:1.14, jumpMul:1.12, throwMul:1.20,
      look:{body:"#1d4ed8", head:"#dbeafe", accent:"#0f172a", style:"visor"},
      desc:"Double-tap throw to summon 3 helper shots. If holding a ball, also telekinesis-throw it." },

    { id:"ice_control", name:"Ice Control", rarity:"Mythic", cost:940, ability:"iceControl",
      speedMul:1.12, jumpMul:1.08, throwMul:1.14,
      look:{body:"#0ea5e9", head:"#e0f2fe", accent:"#083344", style:"visor"},
      desc:"Double-tap throw to fire a full-height ice tornado that pulls floor balls to your side." },

    { id:"fire_master", name:"Fire Master", rarity:"Mythic", cost:970, ability:"fireMaster",
      speedMul:1.13, jumpMul:1.10, throwMul:1.16,
      look:{body:"#dc2626", head:"#fecaca", accent:"#450a0a", style:"visor"},
      desc:"Double-tap throw to cast a fire tornado that launches loose balls at your opponent." },

    { id:"suns_son", name:"Sun's Son", rarity:"Mythic", cost:990, ability:"blackout",
      speedMul:1.11, jumpMul:1.09, throwMul:1.12,
      look:{body:"#f59e0b", head:"#fef3c7", accent:"#7c2d12", style:"visor"},
      desc:"Double-tap throw to black out your opponent's screen for 5 seconds." },

    { id:"zombie_witch", name:"Zombie Witch", rarity:"Mythic", cost:995, ability:"zombieSummon",
      speedMul:1.08, jumpMul:1.07, throwMul:1.12,
      look:{body:"#4d7c0f", head:"#d9f99d", accent:"#1a2e05", style:"mask"},
      desc:"Passive: 2 extra lives each round. Double-tap throw to summon 2 zombies that stack slow on hit." },

    { id:"time_traveler", name:"Time Traveler", rarity:"Mythic", cost:1000, ability:"timeTraveler",
      speedMul:1.10, jumpMul:1.10, throwMul:1.10,
      look:{body:"#4338ca", head:"#ddd6fe", accent:"#1e1b4b", style:"visor"},
      desc:"Double-tap throw to rewind the round. Can be used 5 times per round." },
  ];

  const ANIMATION_SPECIAL_STICKERS = [
    { id:"ball", name:"Dodgeball", kind:"ball", color:"#ffd36b" },
    ...Array.from(new Map(
      CHARACTERS.map(char => [char.ability, {
        id:`ability:${char.ability}`,
        name:char.ability,
        kind:"ability",
        color:char.look.body
      }])
    ).values())
  ];

  function getCharById(id){ return CHARACTERS.find(c => c.id === id) || CHARACTERS[0]; }
  function getAnimationSpecialSticker(id){ return ANIMATION_SPECIAL_STICKERS.find(item => item.id === id) || null; }

  function towerDefenseRosterOwner() {
    const value = towerRosterOwner?.value;
    if (value === "P2") return "P2";
    if (value === "BOTH") return "BOTH";
    return "P1";
  }

  function getUnlockedCharacters(which) {
    const unlocks = getUnlocks(which);
    return CHARACTERS.filter(c => c.cost === 0 || !!unlocks[c.id]);
  }

  function getTowerRoster(which = towerDefense.owner) {
    const roster = getUnlockedCharacters(which);
    return roster.length ? roster : [CHARACTERS[0]];
  }

  function towerDefenseOwnerLabel() {
    return towerDefense.owner === "BOTH" ? "both players" : towerDefense.owner;
  }

  function syncTowerDefenseSelection() {
    if (towerDefense.owner === "BOTH") {
      const p1Roster = getTowerRoster("P1");
      const p2Roster = getTowerRoster("P2");
      if (!p1Roster.some(c => c.id === towerDefense.selectedCharIdP1)) {
        towerDefense.selectedCharIdP1 = p1Roster[0].id;
      }
      if (!p2Roster.some(c => c.id === towerDefense.selectedCharIdP2)) {
        towerDefense.selectedCharIdP2 = p2Roster[0].id;
      }
      towerDefense.selectedCharId = towerDefense.selectedCharIdP1;
      return;
    }
    const roster = getTowerRoster();
    if (!roster.some(c => c.id === towerDefense.selectedCharId)) {
      towerDefense.selectedCharId = roster[0].id;
    }
  }

  function towerDefensePlacementOwner(x) {
    if (towerDefense.owner !== "BOTH") return towerDefense.owner;
    return x < W / 2 ? "P1" : "P2";
  }

  function towerDefenseSelectedCharId(which) {
    if (towerDefense.owner !== "BOTH") return towerDefense.selectedCharId;
    return which === "P2" ? towerDefense.selectedCharIdP2 : towerDefense.selectedCharIdP1;
  }

  function tdOwners() {
    return towerDefense.owner === "BOTH" ? ["P1", "P2"] : [towerDefense.owner];
  }

  function tdLane(which) {
    return towerDefense.lanes[which];
  }

  function tdArenaBounds(which) {
    if (towerDefense.owner !== "BOTH") {
      return { left: 0, right: W, baseX: W - 78 };
    }
    if (which === "P1") {
      const right = Math.floor(W / 2) - 8;
      return { left: 0, right, baseX: right - 30 };
    }
    const left = Math.floor(W / 2) + 8;
    return { left, right: W, baseX: W - 30 };
  }

  function tdPathY(which) {
    if (towerDefense.owner === "BOTH" && which === "P2") return TD_PATH_Y - 88;
    return TD_PATH_Y;
  }

  // ===================== ACCOUNTS + GUESTS =====================
  const LS_ACCOUNTS = "dd_accounts_simple_v1";
  const CLICKER_START_PER_CLICK = 0.0004;
  const CLICKER_BASE_UPGRADE_COST = 10;
  const CLICKER_UPGRADE_MULTIPLIER = 1.28;
  const CLICKER_UPGRADE_EFFECT_MULTIPLIER = 1.5;
  const CLICKER_SPEED_WINDOW_SEC = 0.00000000001;
  const CLICKER_SPEED_BONUS_PER_CPS = 0.35;
  const CLICKER_SPEED_BONUS_MAX = 8;
  let activeUserP1 = null;
  let activeUserP2 = null;
  const clickerRuntime = {
    P1: { taps: [] },
    P2: { taps: [] }
  };

  function loadAccounts() {
    try { return JSON.parse(localStorage.getItem(LS_ACCOUNTS) || "{}"); }
    catch { return {}; }
  }
  function saveAccounts(a) { localStorage.setItem(LS_ACCOUNTS, JSON.stringify(a)); }
  function loadStoryProgress() {
    try {
      const data = JSON.parse(localStorage.getItem(LS_STORY_PROGRESS) || "{}");
      return data && typeof data === "object" ? data : {};
    } catch {
      return {};
    }
  }
  function saveStoryProgress() {
    localStorage.setItem(LS_STORY_PROGRESS, JSON.stringify(storyMode.unlockedEndings));
  }

  function defaultProfile() {
    return {
      coins: 0,
      unlocks: { rookie: true },
      clicker: { coins: 0, totalEarned: 0, perClick: CLICKER_START_PER_CLICK, level: 0 }
    };
  }

  // âœ… guest profiles live in memory
  const GUEST_PROFILES = {
    "__GUEST_P1__": defaultProfile(),
    "__GUEST_P2__": defaultProfile(),
  };
  function ensureGuestProfiles(){
    GUEST_PROFILES["__GUEST_P1__"].unlocks.rookie = true;
    GUEST_PROFILES["__GUEST_P2__"].unlocks.rookie = true;
  }

  function getProfile(user) {
    if (GUEST_PROFILES[user]) {
      ensureClickerProfile(GUEST_PROFILES[user]);
      syncClickerCharacterUnlocks(GUEST_PROFILES[user]);
      return GUEST_PROFILES[user];
    }
    const acc = loadAccounts();
    const profile = acc[user]?.profile || null;
    if (!profile) return null;
    ensureClickerProfile(profile);
    syncClickerCharacterUnlocks(profile);
    return profile;
  }
  function setProfile(user, profile) {
    ensureClickerProfile(profile);
    if (GUEST_PROFILES[user]) { GUEST_PROFILES[user] = profile; return; }
    const acc = loadAccounts();
    if (!acc[user]) return;
    acc[user].profile = profile;
    saveAccounts(acc);
  }

  function ensureClickerProfile(profile) {
    if (!profile || typeof profile !== "object") return;
    if (typeof profile.coins !== "number" || !Number.isFinite(profile.coins) || profile.coins < 0) profile.coins = 0;
    profile.clicker = profile.clicker || {};
    const legacyClickerCoins = (typeof profile.clicker.coins === "number" && Number.isFinite(profile.clicker.coins))
      ? Math.max(0, profile.clicker.coins)
      : 0;
    if (typeof profile.clicker.totalEarned !== "number" || !Number.isFinite(profile.clicker.totalEarned)) {
      profile.clicker.totalEarned = legacyClickerCoins;
    }
    if (typeof profile.clicker.walletLinked !== "boolean") {
      profile.coins += legacyClickerCoins;
      profile.clicker.walletLinked = true;
    }
    profile.clicker.coins = Math.max(0, profile.coins);
    profile.clicker.totalEarned = Math.max(profile.clicker.totalEarned, profile.coins);
    if (typeof profile.clicker.level !== "number" || !Number.isFinite(profile.clicker.level) || profile.clicker.level < 0) profile.clicker.level = 0;
    const hasValidPerClick = (typeof profile.clicker.perClick === "number" && Number.isFinite(profile.clicker.perClick) && profile.clicker.perClick > 0);
    const isLegacyTinyPerClick = hasValidPerClick && profile.clicker.perClick < CLICKER_START_PER_CLICK * 0.01;
    if (!hasValidPerClick || isLegacyTinyPerClick) {
      profile.clicker.perClick = clickerPerClickForLevel(profile.clicker.level);
    }
  }

  function clickerPerClickForLevel(level) {
    return CLICKER_START_PER_CLICK * Math.pow(CLICKER_UPGRADE_EFFECT_MULTIPLIER, level);
  }

  function clickerUpgradeCost(level) {
    return CLICKER_BASE_UPGRADE_COST * Math.pow(CLICKER_UPGRADE_MULTIPLIER, level);
  }

  function clickerTierName(perClick) {
    if (perClick >= 1) return "Legend";
    if (perClick >= 0.1) return "Master";
    if (perClick >= 0.01) return "Elite";
    if (perClick >= 0.001) return "Pro";
    if (perClick >= 0.0001) return "All-Star";
    if (perClick >= 0.00001) return "Starter";
    return "Rookie";
  }

  function clickerUnlockedRarityRank(perClick) {
    if (perClick >= 0.001) return 4; // Mythic
    if (perClick >= 0.0001) return 3; // Epic
    if (perClick >= 0.00001) return 2; // Rare
    return 1; // Common
  }

  function rarityRank(rarity) {
    if (rarity === "Mythic") return 4;
    if (rarity === "Epic") return 3;
    if (rarity === "Rare") return 2;
    return 1;
  }

  function syncClickerCharacterUnlocks(profile) {
    if (!profile) return;
    ensureClickerProfile(profile);
    profile.unlocks = profile.unlocks || {};
    profile.unlocks.rookie = true;
    const maxRank = clickerUnlockedRarityRank(profile.clicker.perClick);
    for (const char of CHARACTERS) {
      if (rarityRank(char.rarity) <= maxRank) profile.unlocks[char.id] = true;
    }
  }

  const CLICKER_WHOLE_SCALE_NAMES = [
    "", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion",
    "sextillion", "septillion", "octillion", "nonillion", "decillion", "undecillion",
    "duodecillion", "tredecillion", "quattuordecillion", "quindecillion", "sexdecillion",
    "septendecillion", "octodecillion", "novemdecillion", "vigintillion"
  ];

  const CLICKER_DECIMAL_PLACE_NAMES = [
    "", "tenths", "hundredths", "thousandths", "ten-thousandths", "hundred-thousandths",
    "millionths", "ten-millionths", "hundred-millionths", "billionths", "ten-billionths",
    "hundred-billionths", "trillionths", "ten-trillionths", "hundred-trillionths"
  ];

  function formatTinyDecimal(v) {
    if (v >= 0.000001) return v.toFixed(12).replace(/\.?0+$/, "");
    const exp = v.toExponential(6);
    const parts = exp.split("e");
    if (parts.length !== 2) return "0";
    const mantissa = parts[0];
    const exponent = Number(parts[1]);
    if (!Number.isFinite(exponent) || exponent >= 0) return "0";
    const digits = mantissa.replace(".", "").replace(/^-/, "").replace(/0+$/, "") || "0";
    const zeros = Math.max(0, Math.min(400, Math.abs(exponent) - 1));
    return `0.${"0".repeat(zeros)}${digits}`;
  }

  function formatClickerNumber(v) {
    if (!Number.isFinite(v) || v <= 0) return "0";
    if (v < 1) return formatTinyDecimal(v);
    if (v < 1000) {
      if (v < 10) return Number(v.toFixed(6)).toLocaleString("en-US", { maximumFractionDigits: 6 });
      return Number(v.toFixed(2)).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    const scaleIndex = Math.floor(Math.log10(v) / 3);
    if (scaleIndex >= CLICKER_WHOLE_SCALE_NAMES.length) {
      return Number(v.toFixed(2)).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    const scaleValue = Math.pow(10, scaleIndex * 3);
    const scaled = v / scaleValue;
    const scaledText = scaled >= 100 ? scaled.toFixed(0) : scaled >= 10 ? scaled.toFixed(1) : scaled.toFixed(2);
    return `${Number(scaledText).toLocaleString("en-US")} ${CLICKER_WHOLE_SCALE_NAMES[scaleIndex]}`;
  }

  function clickerPlaceValueLabel(v) {
    if (!Number.isFinite(v) || v === 0) return "zero";
    const abs = Math.abs(v);
    if (abs < 1) {
      const decPlaces = Math.max(1, Math.ceil(-Math.log10(abs)));
      if (decPlaces < CLICKER_DECIMAL_PLACE_NAMES.length) return CLICKER_DECIMAL_PLACE_NAMES[decPlaces];
      return decPlaces === 1 ? "1 decimal place" : `${decPlaces} decimal places`;
    }
    const exp = Math.floor(Math.log10(abs));
    const scaleIndex = Math.floor(exp / 3);
    if (scaleIndex < CLICKER_WHOLE_SCALE_NAMES.length) {
      return CLICKER_WHOLE_SCALE_NAMES[scaleIndex] || "ones";
    }
    if (exp === 100) return "googol";
    if (exp > 100) return "above googol";
    return `${exp + 1}-digit number`;
  }

  function clickerRuntimeState(which) {
    return which === "P1" ? clickerRuntime.P1 : clickerRuntime.P2;
  }

  function clickerTrimTapTimes(which, nowMs = performance.now()) {
    const state = clickerRuntimeState(which);
    const minT = nowMs - CLICKER_SPEED_WINDOW_SEC * 1000;
    while (state.taps.length && state.taps[0] < minT) state.taps.shift();
    return state;
  }

  function clickerCps(which, nowMs = performance.now()) {
    const state = clickerTrimTapTimes(which, nowMs);
    return state.taps.length / CLICKER_SPEED_WINDOW_SEC;
  }

  function clickerSpeedMultiplier(which, nowMs = performance.now()) {
    const cps = clickerCps(which, nowMs);
    return clamp(1 + cps * CLICKER_SPEED_BONUS_PER_CPS, 1, CLICKER_SPEED_BONUS_MAX);
  }

  function clickerCharacterBonus(char) {
    if (!char) return 1;
    if (char.rarity === "Mythic") return 2;
    if (char.rarity === "Epic") return 1.6;
    if (char.rarity === "Rare") return 1.3;
    return 1;
  }

  function clickerCharacterPool(which) {
    const unlocks = getUnlocks(which);
    const list = CHARACTERS.filter(char => unlocks[char.id]);
    if (!list.length) return [getCharById("rookie")];
    return list.sort((a, b) => {
      const d = rarityRank(a.rarity) - rarityRank(b.rarity);
      if (d !== 0) return d;
      return a.price - b.price;
    });
  }

  function clickerCharacterForSide(which) {
    const state = getClickerState(which);
    const pool = clickerCharacterPool(which);
    if (!state) return pool[0] || getCharById("rookie");
    const idx = clamp(Math.floor(state.level), 0, pool.length - 1);
    return pool[idx] || pool[pool.length - 1] || getCharById("rookie");
  }

  function drawClickerAvatar(which) {
    const canvas = which === "P1" ? clickerAvatarP1 : clickerAvatarP2;
    const g = which === "P1" ? clickerAvatarCtxP1 : clickerAvatarCtxP2;
    if (!canvas || !g) return;
    const w = canvas.width;
    const h = canvas.height;
    const char = clickerCharacterForSide(which);
    const tier = clickerTierName(getClickerState(which)?.perClick || CLICKER_START_PER_CLICK);
    g.clearRect(0, 0, w, h);
    const sky = g.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, "#1b2a4a");
    sky.addColorStop(1, "#0f172a");
    g.fillStyle = sky;
    g.fillRect(0, 0, w, h);
    g.fillStyle = "rgba(63, 228, 133, 0.18)";
    g.fillRect(0, h - 28, w, 28);
    drawMiniCharacter(g, w / 2, h - 16, 1.7, char.look, 1, "idle");
    g.fillStyle = "#dbeafe";
    g.font = "bold 12px system-ui";
    g.textAlign = "left";
    g.fillText(char.name, 8, 16);
    g.fillStyle = "#93c5fd";
    g.font = "11px system-ui";
    g.fillText(`${char.rarity} • ${tier}`, 8, 31);
  }

  function drawClickerAvatars() {
    drawClickerAvatar("P1");
    drawClickerAvatar("P2");
  }

  function clickerTapGain(which, nowMs = performance.now()) {
    const state = getClickerState(which);
    if (!state) return 0;
    const speedMul = clickerSpeedMultiplier(which, nowMs);
    const charMul = clickerCharacterBonus(clickerCharacterForSide(which));
    return state.perClick * speedMul * charMul;
  }

  function getClickerState(which) {
    const u = which === "P1" ? activeUserP1 : activeUserP2;
    if (!u) return null;
    const p = getProfile(u);
    if (!p) return null;
    ensureClickerProfile(p);
    return p.clicker;
  }

  function refreshClickerUI() {
    const c1 = getClickerState("P1");
    const c2 = getClickerState("P2");
    const coins1 = activeUserP1 ? getCoins("P1") : null;
    const coins2 = activeUserP2 ? getCoins("P2") : null;
    const cps1 = clickerCps("P1");
    const cps2 = clickerCps("P2");
    const speed1 = clickerSpeedMultiplier("P1");
    const speed2 = clickerSpeedMultiplier("P2");
    const gain1 = clickerTapGain("P1");
    const gain2 = clickerTapGain("P2");
    const cost1 = c1 ? clickerUpgradeCost(c1.level) : 0;
    const cost2 = c2 ? clickerUpgradeCost(c2.level) : 0;
    if (clickerCoinsP1) clickerCoinsP1.textContent = coins1 !== null ? formatClickerNumber(coins1) : "Login/Guest required";
    if (clickerTotalEarnedP1) clickerTotalEarnedP1.textContent = c1 ? formatClickerNumber(c1.totalEarned || 0) : "-";
    if (clickerGainP1) clickerGainP1.textContent = c1 ? formatClickerNumber(gain1) : "-";
    if (clickerPerClickP1) clickerPerClickP1.textContent = c1 ? formatClickerNumber(c1.perClick) : "-";
    if (clickerCpsP1) clickerCpsP1.textContent = cps1.toFixed(2);
    if (clickerSpeedBonusP1) clickerSpeedBonusP1.textContent = speed1.toFixed(2);
    if (clickerTierP1) clickerTierP1.textContent = c1 ? clickerTierName(c1.perClick) : "-";
    if (clickerLevelP1) clickerLevelP1.textContent = c1 ? String(c1.level) : "-";
    if (clickerCostP1) clickerCostP1.textContent = c1 ? formatClickerNumber(cost1) : "-";
    if (clickerCoinsPlaceP1) clickerCoinsPlaceP1.textContent = c1 ? `(${clickerPlaceValueLabel(coins1 || 0)})` : "(zero)";
    if (clickerPerClickPlaceP1) clickerPerClickPlaceP1.textContent = c1 ? `(${clickerPlaceValueLabel(c1.perClick)})` : "(zero)";
    if (clickerCostPlaceP1) clickerCostPlaceP1.textContent = c1 ? `(${clickerPlaceValueLabel(cost1)})` : "(zero)";
    if (clickerCoinsP2) clickerCoinsP2.textContent = coins2 !== null ? formatClickerNumber(coins2) : "Login/Guest required";
    if (clickerTotalEarnedP2) clickerTotalEarnedP2.textContent = c2 ? formatClickerNumber(c2.totalEarned || 0) : "-";
    if (clickerGainP2) clickerGainP2.textContent = c2 ? formatClickerNumber(gain2) : "-";
    if (clickerPerClickP2) clickerPerClickP2.textContent = c2 ? formatClickerNumber(c2.perClick) : "-";
    if (clickerCpsP2) clickerCpsP2.textContent = cps2.toFixed(2);
    if (clickerSpeedBonusP2) clickerSpeedBonusP2.textContent = speed2.toFixed(2);
    if (clickerTierP2) clickerTierP2.textContent = c2 ? clickerTierName(c2.perClick) : "-";
    if (clickerLevelP2) clickerLevelP2.textContent = c2 ? String(c2.level) : "-";
    if (clickerCostP2) clickerCostP2.textContent = c2 ? formatClickerNumber(cost2) : "-";
    if (clickerCoinsPlaceP2) clickerCoinsPlaceP2.textContent = c2 ? `(${clickerPlaceValueLabel(coins2 || 0)})` : "(zero)";
    if (clickerPerClickPlaceP2) clickerPerClickPlaceP2.textContent = c2 ? `(${clickerPlaceValueLabel(c2.perClick)})` : "(zero)";
    if (clickerCostPlaceP2) clickerCostPlaceP2.textContent = c2 ? `(${clickerPlaceValueLabel(cost2)})` : "(zero)";
    if (clickerCharNameP1) clickerCharNameP1.textContent = clickerCharacterForSide("P1").name;
    if (clickerCharNameP2) clickerCharNameP2.textContent = clickerCharacterForSide("P2").name;
    drawClickerAvatars();
  }

  function clickerTap(which) {
    const u = which === "P1" ? activeUserP1 : activeUserP2;
    if (!u) return;
    const p = getProfile(u);
    if (!p) return;
    ensureClickerProfile(p);
    const nowMs = performance.now();
    const runtime = clickerTrimTapTimes(which, nowMs);
    runtime.taps.push(nowMs);
    const speedMul = clickerSpeedMultiplier(which, nowMs);
    const charMul = clickerCharacterBonus(clickerCharacterForSide(which));
    const gain = p.clicker.perClick * speedMul * charMul;
    p.coins += gain;
    p.clicker.coins = p.coins;
    p.clicker.totalEarned += gain;
    syncClickerCharacterUnlocks(p);
    setProfile(u, p);
    refreshClickerUI();
    refreshCharUI();
  }

  function buyClickerUpgrade(which, msgEl) {
    const u = which === "P1" ? activeUserP1 : activeUserP2;
    if (!u) {
      if (msgEl) msgEl.textContent = "Login or use Guests first.";
      return;
    }
    const p = getProfile(u);
    if (!p) return;
    ensureClickerProfile(p);
    const c = p.clicker;
    const cost = clickerUpgradeCost(c.level);
    if (p.coins < cost) {
      if (msgEl) msgEl.textContent = `Need ${formatClickerNumber(cost)} coins.`;
      return;
    }
    p.coins -= cost;
    c.coins = p.coins;
    c.level += 1;
    c.perClick = clickerPerClickForLevel(c.level);
    syncClickerCharacterUnlocks(p);
    setProfile(u, p);
    if (msgEl) msgEl.textContent = `Upgrade bought for ${formatClickerNumber(cost)}. Tier: ${clickerTierName(c.perClick)}`;
    refreshClickerUI();
    refreshCharUI();
  }

  function registerAccount(user, pass) {
    user = (user || "").trim();
    if (!user || user.length < 3) return "Username must be 3+ chars";
    if (!pass || pass.length < 4) return "Password must be 4+ chars";
    const acc = loadAccounts();
    if (acc[user]) return "User exists";
    acc[user] = { password: pass, profile: defaultProfile() };
    saveAccounts(acc);
    return "Registered âœ…";
  }

  function loginAccount(user, pass) {
    user = (user || "").trim();
    const acc = loadAccounts();
    if (!acc[user]) return false;
    if (acc[user].password !== pass) return false;
    return true;
  }

  function getCoins(which) {
    const u = which === "P1" ? activeUserP1 : activeUserP2;
    if (!u) return 0;
    const p = getProfile(u);
    return p ? (p.coins || 0) : 0;
  }
  function setCoins(which, v) {
    const u = which === "P1" ? activeUserP1 : activeUserP2;
    if (!u) return;
    const p = getProfile(u);
    if (!p) return;
    p.coins = Math.max(0, Number.isFinite(v) ? v : 0);
    p.clicker = p.clicker || {};
    p.clicker.coins = p.coins;
    setProfile(u, p);
    refreshCoinUI();
  }
  function addCoins(which, v) {
    const u = which === "P1" ? activeUserP1 : activeUserP2;
    if (!u) return;
    const p = getProfile(u);
    if (!p) return;
    const delta = Number.isFinite(v) ? v : 0;
    p.coins = Math.max(0, (p.coins || 0) + delta);
    p.clicker = p.clicker || {};
    p.clicker.coins = p.coins;
    if (delta > 0) {
      p.clicker.totalEarned = (Number.isFinite(p.clicker.totalEarned) ? p.clicker.totalEarned : 0) + delta;
    }
    setProfile(u, p);
    refreshCoinUI();
  }

  function getUnlocks(which) {
    const u = which === "P1" ? activeUserP1 : activeUserP2;
    if (!u) return {};
    const p = getProfile(u);
    return p ? (p.unlocks || {}) : {};
  }
  function isUnlocked(which, id) {
    const u = getUnlocks(which);
    return !!u[id];
  }
  function unlock(which, id) {
    const u = which === "P1" ? activeUserP1 : activeUserP2;
    if (!u) return;
    const p = getProfile(u);
    if (!p) return;
    p.unlocks = p.unlocks || {};
    p.unlocks[id] = true;
    setProfile(u, p);
  }

  function refreshCoinUI() {
    const c1 = activeUserP1 ? Math.floor(getCoins("P1")).toLocaleString("en-US") : "â€”";
    const c2 = activeUserP2 ? Math.floor(getCoins("P2")).toLocaleString("en-US") : "â€”";
    coinP1.textContent = c1;
    coinP2.textContent = c2;
    p1CoinsMid.textContent = c1;
    p2CoinsMid.textContent = c2;
    refreshClickerUI();
  }

  function getStoryBook(bookId) {
    return STORY_BOOKS.find(book => book.id === bookId) || null;
  }

  function getStorySceneArt(bookId, nodeId) {
    return STORY_SCENE_ART[bookId]?.[nodeId] || null;
  }

  function drawStoryBackdrop(g, art, w, h) {
    const backdrop = art?.backdrop || "castle_gate";
    let skyTop = "#3b2a1c";
    let skyBottom = "#8b5e34";
    let floor = "#4b2f18";

    if (backdrop === "market") {
      skyTop = "#8b5cf6";
      skyBottom = "#f59e0b";
      floor = "#6b3f1c";
    } else if (backdrop === "chapel") {
      skyTop = "#1f2937";
      skyBottom = "#475569";
      floor = "#43322b";
    } else if (backdrop === "arena") {
      skyTop = "#2b1a14";
      skyBottom = "#7c2d12";
      floor = "#6a3920";
    } else if (backdrop === "square") {
      skyTop = "#1d4ed8";
      skyBottom = "#fbbf24";
      floor = "#7c4a22";
    } else if (backdrop === "dark_throne") {
      skyTop = "#111827";
      skyBottom = "#450a0a";
      floor = "#2a160e";
    } else if (backdrop === "throne_room") {
      skyTop = "#2f1b12";
      skyBottom = "#6b4226";
      floor = "#5b3820";
    }

    const grad = g.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, skyTop);
    grad.addColorStop(1, skyBottom);
    g.fillStyle = grad;
    g.fillRect(0, 0, w, h);

    g.fillStyle = "rgba(255, 224, 163, 0.08)";
    g.fillRect(0, h * 0.62, w, h * 0.38);
    g.fillStyle = floor;
    g.fillRect(0, h - 74, w, 74);

    if (backdrop === "castle_gate" || backdrop === "square") {
      g.fillStyle = "rgba(61, 35, 18, 0.92)";
      g.fillRect(205, 95, 230, 165);
      g.fillStyle = "rgba(130, 86, 48, 0.95)";
      g.fillRect(258, 132, 124, 128);
      g.fillStyle = "rgba(255, 230, 180, 0.08)";
      for (let i = 0; i < 5; i++) g.fillRect(222 + i * 42, 108, 16, 70);
    }

    if (backdrop === "market") {
      g.fillStyle = "rgba(117, 74, 36, 0.9)";
      g.fillRect(0, 188, w, 70);
      g.fillStyle = "rgba(250, 204, 21, 0.16)";
      g.fillRect(36, 96, 128, 64);
      g.fillRect(464, 84, 126, 64);
    }

    if (backdrop === "chapel") {
      g.fillStyle = "rgba(66, 46, 38, 0.95)";
      g.fillRect(118, 74, 410, 184);
      g.fillStyle = "rgba(245, 158, 11, 0.12)";
      g.fillRect(300, 72, 40, 120);
      g.fillRect(260, 112, 120, 26);
    }

    if (backdrop === "throne_room" || backdrop === "dark_throne") {
      g.fillStyle = backdrop === "dark_throne" ? "rgba(28, 10, 10, 0.95)" : "rgba(82, 47, 27, 0.95)";
      g.fillRect(102, 78, 436, 184);
      g.fillStyle = "rgba(255, 212, 123, 0.07)";
      g.fillRect(302, 78, 36, 136);
      g.fillStyle = backdrop === "dark_throne" ? "rgba(127, 29, 29, 0.4)" : "rgba(217, 119, 6, 0.18)";
      g.fillRect(228, 92, 184, 114);
    }

    if (backdrop === "arena") {
      g.strokeStyle = "rgba(255, 229, 180, 0.22)";
      g.lineWidth = 3;
      g.beginPath();
      g.moveTo(72, 244);
      g.lineTo(568, 244);
      g.stroke();
      for (let i = 0; i < 6; i++) {
        g.fillStyle = "rgba(255,255,255,0.07)";
        g.fillRect(60 + i * 96, 156, 46, 42);
      }
    }
  }

  function drawStoryProp(g, prop) {
    if (prop.kind === "banner") {
      g.fillStyle = prop.color || "#d97706";
      g.fillRect(prop.x - 12, prop.y, 24, 68);
      g.fillStyle = "rgba(40, 20, 12, 0.9)";
      g.fillRect(prop.x - 2, prop.y - 12, 4, 100);
      return;
    }
    if (prop.kind === "bell") {
      g.fillStyle = "#fbbf24";
      g.beginPath();
      g.arc(prop.x, prop.y, 18, Math.PI, 0);
      g.fill();
      g.fillRect(prop.x - 18, prop.y, 36, 10);
      return;
    }
    if (prop.kind === "pathSign") {
      g.fillStyle = "#5b3820";
      g.fillRect(prop.x - 4, prop.y - 10, 8, 76);
      g.fillStyle = "#d6a76d";
      g.fillRect(prop.x - 36, prop.y - 6, 72, 28);
      g.fillStyle = "#39200c";
      g.font = "bold 12px Georgia";
      g.fillText(prop.text || "Paths", prop.x - 22, prop.y + 12);
      return;
    }
    if (prop.kind === "torch") {
      g.fillStyle = "#4b2a17";
      g.fillRect(prop.x - 3, prop.y, 6, 38);
      g.fillStyle = prop.dim ? "rgba(248,113,113,0.45)" : "rgba(251,191,36,0.85)";
      g.beginPath();
      g.moveTo(prop.x, prop.y - 18);
      g.lineTo(prop.x - 12, prop.y + 8);
      g.lineTo(prop.x + 12, prop.y + 8);
      g.closePath();
      g.fill();
      return;
    }
    if (prop.kind === "throne") {
      g.fillStyle = prop.dark ? "#3f1d1d" : "#7c3f1d";
      g.fillRect(prop.x - 42, prop.y - 58, 84, 62);
      g.fillRect(prop.x - 58, prop.y - 18, 116, 22);
      g.fillStyle = prop.dark ? "#991b1b" : "#f59e0b";
      g.fillRect(prop.x - 28, prop.y - 78, 56, 24);
      return;
    }
    if (prop.kind === "stall") {
      g.fillStyle = prop.color || "#92400e";
      g.fillRect(prop.x - 46, prop.y - 40, 92, 16);
      g.fillRect(prop.x - 40, prop.y - 24, 80, 34);
      g.fillStyle = "#4b2a17";
      g.fillRect(prop.x - 36, prop.y + 10, 8, 34);
      g.fillRect(prop.x + 28, prop.y + 10, 8, 34);
      return;
    }
    if (prop.kind === "crate") {
      g.fillStyle = "#8b5a2b";
      g.fillRect(prop.x - 14, prop.y - 14, 28, 28);
      g.strokeStyle = "#5b3820";
      g.strokeRect(prop.x - 14, prop.y - 14, 28, 28);
      return;
    }
    if (prop.kind === "shield") {
      g.fillStyle = "#e2e8f0";
      g.beginPath();
      g.moveTo(prop.x, prop.y - 30);
      g.lineTo(prop.x - 24, prop.y - 10);
      g.lineTo(prop.x - 16, prop.y + 22);
      g.lineTo(prop.x, prop.y + 36);
      g.lineTo(prop.x + 16, prop.y + 22);
      g.lineTo(prop.x + 24, prop.y - 10);
      g.closePath();
      g.fill();
      g.strokeStyle = "#2563eb";
      g.lineWidth = 3;
      g.stroke();
      return;
    }
    if (prop.kind === "tunnel") {
      g.fillStyle = "#120a07";
      g.beginPath();
      g.ellipse(prop.x, prop.y, 44, 24, 0, 0, Math.PI * 2);
      g.fill();
      return;
    }
    if (prop.kind === "window") {
      g.fillStyle = "rgba(125, 211, 252, 0.7)";
      g.fillRect(prop.x - 18, prop.y - 32, 36, 64);
      g.strokeStyle = "#cbd5e1";
      g.strokeRect(prop.x - 18, prop.y - 32, 36, 64);
      return;
    }
    if (prop.kind === "candle") {
      g.fillStyle = "#f8fafc";
      g.fillRect(prop.x - 4, prop.y - 18, 8, 18);
      g.fillStyle = "#fbbf24";
      g.beginPath();
      g.moveTo(prop.x, prop.y - 28);
      g.lineTo(prop.x - 6, prop.y - 18);
      g.lineTo(prop.x + 6, prop.y - 18);
      g.closePath();
      g.fill();
      return;
    }
    if (prop.kind === "cursedBall") {
      g.fillStyle = "#7c3aed";
      g.beginPath();
      g.arc(prop.x, prop.y, 16, 0, Math.PI * 2);
      g.fill();
      g.strokeStyle = "#f0abfc";
      g.lineWidth = 2;
      g.stroke();
      g.beginPath();
      g.moveTo(prop.x - 16, prop.y);
      g.lineTo(prop.x + 16, prop.y);
      g.moveTo(prop.x, prop.y - 16);
      g.lineTo(prop.x, prop.y + 16);
      g.stroke();
      return;
    }
    if (prop.kind === "laurel") {
      g.strokeStyle = "#84cc16";
      g.lineWidth = 4;
      g.beginPath();
      g.arc(prop.x, prop.y, 22, Math.PI * 0.1, Math.PI * 0.9);
      g.stroke();
      return;
    }
    if (prop.kind === "confetti") {
      const colors = ["#fbbf24", "#60a5fa", "#f87171", "#34d399", "#c084fc"];
      for (let i = 0; i < 28; i++) {
        g.fillStyle = colors[i % colors.length];
        g.fillRect(24 + (i * 21) % 592, 22 + (i * 17) % 112, 8, 4);
      }
    }
  }

  function drawStoryActor(g, actor) {
    const char = getCharById(actor.charId);
    const pose = getStaticAnimationPose(actor.motion || "idle");
    if (actor.ball) pose.showBall = true;

    g.save();
    g.translate(actor.x, actor.y);
    drawMiniCharacter(g, 0, 0, actor.scale || 2, char.look, actor.facing ?? 1, pose);
    g.restore();

    if (actor.curse) {
      g.strokeStyle = "rgba(216, 180, 254, 0.8)";
      g.lineWidth = 3;
      g.beginPath();
      g.arc(actor.x, actor.y - 60, 30, 0, Math.PI * 2);
      g.stroke();
    }

    if (actor.crown) {
      g.fillStyle = "#fbbf24";
      g.beginPath();
      g.moveTo(actor.x - 18, actor.y - 96);
      g.lineTo(actor.x - 8, actor.y - 112);
      g.lineTo(actor.x, actor.y - 96);
      g.lineTo(actor.x + 8, actor.y - 112);
      g.lineTo(actor.x + 18, actor.y - 96);
      g.closePath();
      g.fill();
    }

    if (actor.label) {
      g.font = "12px Georgia";
      const labelWidth = Math.max(88, Math.ceil(g.measureText(actor.label).width) + 18);
      g.fillStyle = "rgba(18, 10, 6, 0.82)";
      g.fillRect(actor.x - labelWidth / 2, actor.y - 132, labelWidth, 22);
      g.fillStyle = "#fff1cb";
      g.textAlign = "center";
      g.fillText(actor.label, actor.x, actor.y - 117);
      g.textAlign = "start";
    }
  }

  function renderStoryArt(bookId, nodeId) {
    if (!storyArtCanvas || !storyArtCtx) return;
    const art = getStorySceneArt(bookId, nodeId);
    const g = storyArtCtx;
    const w = storyArtCanvas.width;
    const h = storyArtCanvas.height;

    g.clearRect(0, 0, w, h);
    drawStoryBackdrop(g, art, w, h);

    for (const prop of art?.props || []) drawStoryProp(g, prop);
    for (const actor of art?.actors || []) drawStoryActor(g, actor);

    g.fillStyle = "rgba(255, 248, 220, 0.08)";
    g.fillRect(0, h - 74, w, 3);

    if (storyArtCaption) {
      storyArtCaption.textContent = art?.caption || "Illustrated page";
    }
  }

  function getUnlockedStoryEndings(bookId) {
    const endings = storyMode.unlockedEndings[bookId];
    return Array.isArray(endings) ? endings : [];
  }

  function unlockStoryEnding(bookId, endingId) {
    if (!endingId) return;
    const unlocked = getUnlockedStoryEndings(bookId);
    if (unlocked.includes(endingId)) return;
    storyMode.unlockedEndings[bookId] = [...unlocked, endingId];
    saveStoryProgress();
  }

  function totalUnlockedStoryEndings() {
    return STORY_BOOKS.reduce((sum, book) => sum + getUnlockedStoryEndings(book.id).length, 0);
  }

  function startStoryBook(bookId) {
    const book = getStoryBook(bookId);
    if (!book || !book.playable) return;
    storyMode.activeBookId = book.id;
    storyMode.currentNodeId = book.startNodeId;
    renderStoryMode();
  }

  function restartStoryBook() {
    const book = getStoryBook(storyMode.activeBookId);
    if (!book) return;
    storyMode.currentNodeId = book.startNodeId;
    renderStoryMode();
  }

  function closeStoryBook() {
    storyMode.activeBookId = null;
    storyMode.currentNodeId = null;
    renderStoryMode();
  }

  function advanceStory(choice) {
    if (!choice?.next) return;
    storyMode.currentNodeId = choice.next;
    renderStoryMode();
  }

  function renderStoryBooks() {
    if (!storyBookShelf) return;
    storyBookShelf.innerHTML = "";

    for (const book of STORY_BOOKS) {
      const unlocked = getUnlockedStoryEndings(book.id).length;
      const card = document.createElement("article");
      card.className = `storyBook ${book.playable ? "playable" : "locked"}`;

      const head = document.createElement("div");
      head.className = "storyBookHead";
      head.innerHTML = `<div class="storyBookKicker">${book.kicker}</div><h3>${book.title}</h3><p>${book.description}</p>`;

      const meta = document.createElement("div");
      meta.className = "storyBookMeta";
      meta.textContent = book.playable
        ? `${book.meta} Unlocked endings: ${unlocked}/${book.totalEndings}`
        : book.meta;

      const row = document.createElement("div");
      row.className = "row";
      const btn = document.createElement("button");
      btn.textContent = book.playable ? "Open Book" : "Sealed";
      btn.disabled = !book.playable;
      btn.addEventListener("click", () => startStoryBook(book.id));
      row.appendChild(btn);

      card.appendChild(head);
      card.appendChild(meta);
      card.appendChild(row);
      storyBookShelf.appendChild(card);
    }
  }

  function renderStoryReader() {
    if (!storyReader) return;
    const book = getStoryBook(storyMode.activeBookId);
    const node = book?.nodes?.[storyMode.currentNodeId];

    if (!book || !node) {
      storyReader.style.display = "none";
      return;
    }

    storyReader.style.display = "";
    storyActiveBookTag.textContent = `${book.kicker} • ${book.theme || "Story"}`;
    storyTitle.textContent = book.title;
    renderStoryArt(book.id, storyMode.currentNodeId);
    storySceneTitle.textContent = node.title;
    storySceneText.textContent = node.text;
    storyChoices.innerHTML = "";

    if (node.isEnding) {
      unlockStoryEnding(book.id, node.endingId);
      storyEndingBadge.style.display = "";
      storyEndingBadge.textContent = `Ending Unlocked: ${node.endingLabel}`;
      storyProgress.textContent = `Endings found for this book: ${getUnlockedStoryEndings(book.id).length}/${book.totalEndings}`;

      const restartChoice = document.createElement("button");
      restartChoice.className = "storyChoiceBtn endingChoice";
      restartChoice.textContent = "Read Again From The Beginning";
      restartChoice.addEventListener("click", restartStoryBook);

      const shelfChoice = document.createElement("button");
      shelfChoice.className = "storyChoiceBtn endingChoice";
      shelfChoice.textContent = "Return To The Book Shelf";
      shelfChoice.addEventListener("click", closeStoryBook);

      storyChoices.appendChild(restartChoice);
      storyChoices.appendChild(shelfChoice);
      return;
    }

    storyEndingBadge.style.display = "none";
    storyEndingBadge.textContent = "";
    storyProgress.textContent = `Choose your path. Endings found for this book: ${getUnlockedStoryEndings(book.id).length}/${book.totalEndings}`;

    for (const choice of node.choices || []) {
      const btn = document.createElement("button");
      btn.className = "storyChoiceBtn";
      btn.textContent = choice.text;
      btn.addEventListener("click", () => advanceStory(choice));
      storyChoices.appendChild(btn);
    }
  }

  function renderStoryMode() {
    renderStoryReader();
    renderStoryBooks();
    if (storyEndingCount) {
      const total = totalUnlockedStoryEndings();
      storyEndingCount.textContent = `${total} ending${total === 1 ? "" : "s"} unlocked`;
    }
  }

  // ===================== FILTER/NAV =====================
  function getFilteredIndices(rarity) {
    if (!rarity || rarity === "All") return CHARACTERS.map((_, i) => i);
    const idx = [];
    for (let i=0;i<CHARACTERS.length;i++){
      if (CHARACTERS[i].rarity === rarity) idx.push(i);
    }
    return idx.length ? idx : CHARACTERS.map((_, i) => i);
  }

  let p1Rarity = "All";
  let p2Rarity = "All";
  let bossRarity = "All";
  let p1Pool = getFilteredIndices(p1Rarity);
  let p2Pool = getFilteredIndices(p2Rarity);
  let bossPool = getFilteredIndices(bossRarity);
  let p1PoolPos = 0;
  let p2PoolPos = 0;
  let bossPoolPos = 0;

  function p1Char(){ return CHARACTERS[p1Pool[p1PoolPos]]; }
  function p2Char(){ return CHARACTERS[p2Pool[p2PoolPos]]; }
  function bossChar(){ return CHARACTERS[bossPool[bossPoolPos]]; }

  // ===================== PREVIEW DRAW =====================
  function drawMiniCharacter(g, x, y, scale, look, facing = 1, pose = null) {
    const bw = 22 * scale, bh = 32 * scale;
    const hw = 18 * scale, hh = 16 * scale;
    const f = facing >= 0 ? 1 : -1;
    const armOffset = pose?.armOffset || 0;
    const legOffset = pose?.legOffset || 0;
    const bodyLift = pose?.bodyLift || 0;
    const bodyLean = pose?.bodyLean || 0;
    const baseY = y - bodyLift;

    g.fillStyle = look.accent;
    g.fillRect(x - bw/2 - 3*scale, baseY - bh + 7*scale + armOffset, 5*scale, 16*scale);
    g.fillRect(x + bw/2 - 2*scale, baseY - bh + 7*scale - armOffset, 5*scale, 16*scale);
    g.fillRect(x - bw/2 + 3*scale, baseY + legOffset - 1*scale, 5*scale, 14*scale);
    g.fillRect(x + bw/2 - 8*scale, baseY - legOffset - 1*scale, 5*scale, 14*scale);

    g.fillStyle = look.body;
    g.fillRect(x - bw/2, baseY - bh, bw, bh);
    g.fillStyle = look.accent;
    g.fillRect(x - bw/2 + 2*scale, baseY - bh + bh*0.35, bw - 4*scale, 3*scale);

    g.fillStyle = look.head;
    g.fillRect(x - hw/2 + bodyLean, baseY - bh - hh, hw, hh);

    g.fillStyle = "rgba(0,0,0,0.55)";
    g.fillRect(x - 6*scale + bodyLean, baseY - bh - hh + 6*scale, 3*scale, 3*scale);
    g.fillRect(x + 3*scale + bodyLean, baseY - bh - hh + 6*scale, 3*scale, 3*scale);
    g.fillStyle = "rgba(255,255,255,0.72)";
    g.fillRect(x + bodyLean + f * 5 * scale, baseY - bh - hh + 6.5*scale, 2*scale, 2*scale);

    g.fillStyle = look.accent;
    if (look.style === "visor") {
      g.fillRect(x - hw/2 + bodyLean, baseY - bh - hh + 6*scale, hw, 4*scale);
    } else if (look.style === "mask") {
      g.fillRect(x - hw/2 + bodyLean, baseY - bh - hh + 7*scale, hw, 7*scale);
    }

    if (pose?.showBall) {
      g.fillStyle = "#ffd36b";
      g.beginPath();
      g.arc(x + f * 18 * scale, baseY - bh + 9*scale - armOffset * 0.4, 4*scale, 0, Math.PI * 2);
      g.fill();
    }
  }

  function drawPreview(which, c, facing = 1) {
    const g = which === "P1" ? p1pv : (which === "P2" ? p2pv : bosspv);
    const cw = which === "P1" ? p1PreviewCanvas.width : (which === "P2" ? p2PreviewCanvas.width : bossPreviewCanvas.width);
    const ch = which === "P1" ? p1PreviewCanvas.height : (which === "P2" ? p2PreviewCanvas.height : bossPreviewCanvas.height);

    g.clearRect(0,0,cw,ch);
    g.fillStyle = "rgba(0,0,0,0.25)";
    g.fillRect(0,0,cw,ch);

    g.fillStyle = "rgba(232,238,247,0.18)";
    g.fillRect(0, ch-26, cw, 26);

    g.fillStyle = "rgba(232,238,247,0.9)";
    g.font = "12px system-ui";
    g.fillText(`${c.name} (${c.rarity})`, 10, 18);

    drawMiniCharacter(g, cw/2, ch-10, 2.0, c.look, facing);
  }

  function charMetaText(c) {
    const mods = `SPD x${c.speedMul.toFixed(2)}  JMP x${c.jumpMul.toFixed(2)}  THR x${c.throwMul.toFixed(2)}`;
    return `${c.rarity} â€¢ Cost ${c.cost}
${mods}
Ability: ${c.ability}
${c.desc}`;
  }

  function getAnimationPose(motion, phase) {
    const cycle = phase % 1;
    if (motion === "walk") {
      return {
        bodyLift: Math.sin(cycle * Math.PI * 2) * 3,
        armOffset: Math.sin(cycle * Math.PI * 2) * 5,
        legOffset: Math.sin(cycle * Math.PI * 2 + Math.PI) * 5
      };
    }
    if (motion === "jump") {
      const jump = Math.sin(cycle * Math.PI);
      return {
        bodyLift: jump * 30,
        armOffset: -jump * 5,
        legOffset: jump * 3
      };
    }
    if (motion === "throw") {
      const windup = cycle < 0.45 ? cycle / 0.45 : 1;
      const release = cycle >= 0.45 ? (cycle - 0.45) / 0.55 : 0;
      return {
        bodyLean: windup * 5,
        armOffset: -windup * 11 + release * 8,
        legOffset: windup * 2,
        showBall: cycle < 0.56
      };
    }
    if (motion === "dance") {
      return {
        bodyLift: Math.sin(cycle * Math.PI * 4) * 4,
        bodyLean: Math.sin(cycle * Math.PI * 2) * 5,
        armOffset: Math.cos(cycle * Math.PI * 4) * 7,
        legOffset: Math.sin(cycle * Math.PI * 4) * 4
      };
    }
    return {
      bodyLift: Math.sin(cycle * Math.PI * 2) * 2,
      armOffset: Math.sin(cycle * Math.PI * 2) * 1.5,
      legOffset: Math.sin(cycle * Math.PI * 2 + Math.PI) * 1.5
    };
  }

  function getAnimationStickerLabel(sticker) {
    if (!sticker) return "";
    if (sticker.kind === "character") return getCharById(sticker.charId).name;
    return getAnimationSpecialSticker(sticker.assetId)?.name || "Sticker";
  }

  function animationStickerScaleX(sticker) {
    return (sticker.size ?? 1) * (sticker.scaleX ?? 1);
  }

  function animationStickerScaleY(sticker) {
    return (sticker.size ?? 1) * (sticker.scaleY ?? 1);
  }

  function makeAnimationSticker(assetId, x, y, motion = "idle", facing = 1) {
    const special = getAnimationSpecialSticker(assetId);
    const kind = special?.kind || "character";
    return {
      id: `sticker-${animationLab.nextStickerId++}`,
      kind,
      assetId,
      charId: kind === "character" ? assetId : "",
      x,
      y,
      size: 1,
      scaleX: 1,
      scaleY: 1,
      motion,
      facing
    };
  }

  function cloneAnimationSticker(sticker) {
    return {
      id: sticker.id,
      kind: sticker.kind || "character",
      assetId: sticker.assetId || sticker.charId,
      charId: sticker.charId,
      x: sticker.x,
      y: sticker.y,
      size: sticker.size ?? 1,
      scaleX: sticker.scaleX ?? 1,
      scaleY: sticker.scaleY ?? 1,
      motion: sticker.motion,
      facing: sticker.facing
    };
  }

  function makeAnimationFrame(stickers, durationMs = 700) {
    return {
      id: `frame-${animationLab.nextFrameId++}`,
      name: "",
      durationMs,
      stickers: stickers.map(cloneAnimationSticker),
      text: "",
      speakerStickerId: "",
      bubbleStyle: "rounded",
      bubbleColor: "#ffffff",
      bubbleTextColor: "#111111"
    };
  }

  function getSelectedAnimationFrame() {
    if (!animationLab.frames.length) return null;
    return animationLab.frames.find(frame => frame.id === animationLab.selectedFrameId) || animationLab.frames[0];
  }

  function sanitizeAnimationProjectName(name) {
    const cleaned = String(name || "").trim().replace(/\s+/g, " ");
    return cleaned || "Untitled Creation";
  }

  function animationFrameDisplayName(frame, index) {
    const name = String(frame?.name || "").trim();
    return name || `Frame ${index + 1}`;
  }

  function cloneAnimationFrame(frame) {
    return {
      id: frame.id,
      name: frame.name || "",
      durationMs: frame.durationMs ?? 700,
      stickers: (frame.stickers || []).map(cloneAnimationSticker),
      text: frame.text || "",
      speakerStickerId: frame.speakerStickerId || "",
      bubbleStyle: frame.bubbleStyle || "rounded",
      bubbleColor: frame.bubbleColor || "#ffffff",
      bubbleTextColor: frame.bubbleTextColor || "#111111"
    };
  }

  function loadAnimationProjects() {
    try {
      const data = JSON.parse(localStorage.getItem(LS_ANIMATION_PROJECTS) || "[]");
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  }

  function saveAnimationProjects(projects) {
    localStorage.setItem(LS_ANIMATION_PROJECTS, JSON.stringify(projects));
  }

  function makeAnimationProjectSnapshot() {
    return {
      id: `anim-${Date.now()}`,
      name: sanitizeAnimationProjectName(animationProjectName?.value || animationLab.projectName),
      savedAt: Date.now(),
      backdrop: animationBackdropSelect?.value || "arena",
      speed: animationLab.speed,
      nextFrameId: animationLab.nextFrameId,
      nextStickerId: animationLab.nextStickerId,
      frames: animationLab.frames.map(cloneAnimationFrame)
    };
  }

  function applyAnimationProject(project) {
    if (!project || !Array.isArray(project.frames) || !project.frames.length) return;
    animationLab.projectName = sanitizeAnimationProjectName(project.name);
    animationLab.frames = project.frames.map(cloneAnimationFrame);
    animationLab.nextFrameId = Math.max(1, Number(project.nextFrameId) || (animationLab.frames.length + 1));
    animationLab.nextStickerId = Math.max(1, Number(project.nextStickerId) || 1);
    animationLab.selectedFrameId = animationLab.frames[0]?.id || null;
    animationLab.selectedStickerId = animationLab.frames[0]?.stickers?.[0]?.id || null;
    animationLab.lastSavedAt = Number(project.savedAt) || Date.now();
    animationLab.playing = false;
    animationLab.pausedAt = 0;
    animationLab.speed = clamp(Number(project.speed) || 1, 0.25, 3);
    if (animationProjectName) animationProjectName.value = animationLab.projectName;
    if (animationBackdropSelect) animationBackdropSelect.value = project.backdrop || "arena";
    if (animationSpeedInput) animationSpeedInput.value = String(animationLab.speed);
    renderAnimationFrameList();
    syncAnimationEditorControls();
    drawAnimationPreview();
  }

  function renderSavedAnimationProjects() {
    if (!animationSavedProjects) return;
    const projects = loadAnimationProjects().sort((a, b) => (b.savedAt || 0) - (a.savedAt || 0));
    animationSavedProjects.innerHTML = "";
    if (animationSavedCount) {
      animationSavedCount.textContent = `${projects.length} saved`;
    }
    if (!projects.length) {
      const empty = document.createElement("div");
      empty.className = "lock";
      empty.textContent = "Save a creation and it will show up here.";
      animationSavedProjects.appendChild(empty);
      return;
    }

    for (const project of projects) {
      const card = document.createElement("div");
      card.className = "animationSavedCard";

      const name = document.createElement("div");
      name.className = "animationSavedName";
      name.textContent = sanitizeAnimationProjectName(project.name);

      const meta = document.createElement("div");
      meta.className = "animationSavedMeta";
      const savedDate = new Date(project.savedAt || Date.now()).toLocaleString();
      meta.textContent = `${project.frames?.length || 0} frame${(project.frames?.length || 0) === 1 ? "" : "s"} • ${savedDate}`;

      const actions = document.createElement("div");
      actions.className = "animationSavedActions";

      const loadBtn = document.createElement("button");
      loadBtn.textContent = "Load";
      loadBtn.addEventListener("click", () => {
        applyAnimationProject(project);
        if (animationSaveStatus) animationSaveStatus.textContent = `Loaded "${sanitizeAnimationProjectName(project.name)}".`;
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "secondary";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        const remaining = loadAnimationProjects().filter(item => item.id !== project.id);
        saveAnimationProjects(remaining);
        renderSavedAnimationProjects();
        if (animationSaveStatus) animationSaveStatus.textContent = `Deleted "${sanitizeAnimationProjectName(project.name)}".`;
      });

      actions.appendChild(loadBtn);
      actions.appendChild(deleteBtn);
      card.appendChild(name);
      card.appendChild(meta);
      card.appendChild(actions);
      animationSavedProjects.appendChild(card);
    }
  }

  function saveCurrentAnimationProject() {
    const snapshot = makeAnimationProjectSnapshot();
    const projects = loadAnimationProjects().filter(project => sanitizeAnimationProjectName(project.name) !== snapshot.name);
    projects.unshift(snapshot);
    saveAnimationProjects(projects.slice(0, 24));
    animationLab.projectName = snapshot.name;
    animationLab.lastSavedAt = snapshot.savedAt;
    if (animationProjectName) animationProjectName.value = snapshot.name;
    if (animationSaveStatus) animationSaveStatus.textContent = `Saved "${snapshot.name}".`;
    renderSavedAnimationProjects();
  }

  function getSelectedAnimationSticker() {
    const frame = getSelectedAnimationFrame();
    if (!frame) return null;
    return frame.stickers.find(sticker => sticker.id === animationLab.selectedStickerId) || null;
  }

  function getAnimationFrameIndex(frameId) {
    return Math.max(0, animationLab.frames.findIndex(frame => frame.id === frameId));
  }

  function syncAnimationPlaybackClock() {
    animationLab.pausedAt = 0;
    animationLab.startedAt = performance.now();
  }

  function updateAnimationStatusText() {
    const frame = getSelectedAnimationFrame();
    const frameIndex = frame ? getAnimationFrameIndex(frame.id) + 1 : 0;
    if (animationFrameStatus) {
      animationFrameStatus.textContent = `Frame ${frameIndex} of ${animationLab.frames.length}`;
    }
    const sticker = getSelectedAnimationSticker();
    if (animationSelectionStatus) {
      animationSelectionStatus.textContent = sticker
        ? `Selected ${getAnimationStickerLabel(sticker)} at ${Math.round(sticker.x)}, ${Math.round(sticker.y)}`
        : "Drop a sticker into the stage to start.";
    }
  }

  function syncAnimationEditorControls() {
    const frame = getSelectedAnimationFrame();
    const sticker = getSelectedAnimationSticker();

    if (animationFrameDurationInput) {
      animationFrameDurationInput.value = frame ? String(frame.durationMs) : "700";
      animationFrameDurationInput.disabled = !frame;
    }
    if (animationDeleteFrameBtn) animationDeleteFrameBtn.disabled = animationLab.frames.length <= 1;
    if (animationFrameText) {
      animationFrameText.value = frame?.text || "";
      animationFrameText.disabled = !frame;
    }
    if (animationBubbleStyle) {
      animationBubbleStyle.value = frame?.bubbleStyle || "rounded";
      animationBubbleStyle.disabled = !frame;
    }
    if (animationBubbleColor) {
      animationBubbleColor.value = frame?.bubbleColor || "#ffffff";
      animationBubbleColor.disabled = !frame;
    }
    if (animationBubbleTextColor) {
      animationBubbleTextColor.value = frame?.bubbleTextColor || "#111111";
      animationBubbleTextColor.disabled = !frame;
    }
    if (animationFrameSpeaker) {
      animationFrameSpeaker.innerHTML = '<option value="">No bubble</option>';
      for (const frameSticker of frame?.stickers || []) {
        const option = document.createElement("option");
        option.value = frameSticker.id;
        option.textContent = getAnimationStickerLabel(frameSticker);
        animationFrameSpeaker.appendChild(option);
      }
      animationFrameSpeaker.value = frame?.speakerStickerId || "";
      animationFrameSpeaker.disabled = !frame || !(frame.stickers?.length);
    }

    const hasSticker = Boolean(sticker);
    const canEditCharacter = Boolean(sticker && sticker.kind === "character");
    if (animationStickerChar) animationStickerChar.disabled = !canEditCharacter;
    if (animationStickerMotion) animationStickerMotion.disabled = !canEditCharacter;
    if (animationStickerX) animationStickerX.disabled = !hasSticker;
    if (animationStickerY) animationStickerY.disabled = !hasSticker;
    if (animationStickerSize) animationStickerSize.disabled = !hasSticker;
    if (animationStickerWidth) animationStickerWidth.disabled = !hasSticker;
    if (animationStickerHeight) animationStickerHeight.disabled = !hasSticker;
    if (animationStickerFacing) animationStickerFacing.disabled = !canEditCharacter;
    if (animationDeleteStickerBtn) animationDeleteStickerBtn.disabled = !hasSticker;

    if (sticker) {
      if (sticker.kind === "character") {
        animationStickerChar.value = sticker.charId;
        animationStickerMotion.value = sticker.motion;
      }
      animationStickerX.value = String(Math.round(sticker.x));
      animationStickerY.value = String(Math.round(sticker.y));
      if (animationStickerSize) animationStickerSize.value = String(sticker.size ?? 1);
      if (animationStickerWidth) animationStickerWidth.value = String(sticker.scaleX ?? 1);
      if (animationStickerHeight) animationStickerHeight.value = String(sticker.scaleY ?? 1);
      if (sticker.kind === "character") animationStickerFacing.value = String(sticker.facing);
      if (animationEditorHint) animationEditorHint.textContent = sticker.kind === "character"
        ? "Drag in the stage or use the controls below."
        : "Drag in the stage to place props, balls, and ability stickers.";
    } else if (animationEditorHint) {
      animationEditorHint.textContent = "Select a sticker in the stage.";
    }

    if (animationSpeedLabel) {
      animationSpeedLabel.textContent = `${animationLab.speed.toFixed(2)}x speed`;
    }
    if (animationProjectName && document.activeElement !== animationProjectName) {
      animationProjectName.value = animationLab.projectName || "Untitled Creation";
    }

    updateAnimationStatusText();
  }

  function renderAnimationFrameList() {
    if (!animationFramesList) return;
    animationFramesList.innerHTML = "";
    animationLab.frames.forEach((frame, index) => {
      const btn = document.createElement("button");
      btn.className = `animationFrameCard${frame.id === animationLab.selectedFrameId ? " active" : ""}`;
      const title = document.createElement("span");
      title.className = "animationFrameTitle";
      title.textContent = animationFrameDisplayName(frame, index);
      const meta = document.createElement("span");
      meta.className = "animationFrameMeta";
      meta.textContent = `${frame.stickers.length} sticker${frame.stickers.length === 1 ? "" : "s"} • ${frame.durationMs}ms${frame.text ? " • text" : ""}`;
      btn.appendChild(title);
      btn.appendChild(meta);
      btn.addEventListener("click", () => {
        animationLab.selectedFrameId = frame.id;
        if (!frame.stickers.some(sticker => sticker.id === animationLab.selectedStickerId)) {
          animationLab.selectedStickerId = frame.stickers[0]?.id || null;
        }
        renderAnimationFrameList();
        syncAnimationEditorControls();
        drawAnimationPreview();
      });
      btn.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        const nextName = window.prompt("Rename frame", frame.name || animationFrameDisplayName(frame, index));
        if (nextName === null) return;
        frame.name = nextName.trim();
        renderAnimationFrameList();
        syncAnimationEditorControls();
      });
      animationFramesList.appendChild(btn);
    });
  }

  function populateAnimationCharacterOptions() {
    const options = CHARACTERS.map(c => `<option value="${c.id}">${c.name} (${c.rarity})</option>`).join("");
    if (animationStickerChar) animationStickerChar.innerHTML = options;
    if (animationStickerPalette) {
      animationStickerPalette.innerHTML = "";
      for (const char of CHARACTERS) {
        const chip = document.createElement("div");
        chip.className = "animationStickerChip";
        chip.draggable = true;
        chip.dataset.assetId = char.id;
        chip.innerHTML = `<div class="animationStickerName">${char.name}</div><div class="animationStickerMeta">${char.rarity}</div>`;
        chip.addEventListener("dragstart", (e) => {
          e.dataTransfer?.setData("text/plain", char.id);
        });
        animationStickerPalette.appendChild(chip);
      }
      for (const special of ANIMATION_SPECIAL_STICKERS) {
        const chip = document.createElement("div");
        chip.className = "animationStickerChip";
        chip.draggable = true;
        chip.dataset.assetId = special.id;
        chip.innerHTML = `<div class="animationStickerName">${special.name}</div><div class="animationStickerMeta">${special.kind === "ball" ? "Prop" : "Ability"}</div>`;
        chip.addEventListener("dragstart", (e) => {
          e.dataTransfer?.setData("text/plain", special.id);
        });
        animationStickerPalette.appendChild(chip);
      }
    }
  }

  function resetAnimationScene() {
    animationLab.nextFrameId = 1;
    animationLab.nextStickerId = 1;
    animationLab.projectName = "Untitled Creation";
    animationLab.lastSavedAt = 0;
    const rookie = makeAnimationSticker("rookie", 90, 212, "idle", 1);
    const storm = makeAnimationSticker("storm", 230, 212, "throw", -1);
    const blaze = makeAnimationSticker("blaze", 360, 212, "dance", 1);
    animationLab.frames = [
      makeAnimationFrame([rookie, storm], 700),
      makeAnimationFrame([
        { ...cloneAnimationSticker(rookie), x: 160, motion: "walk" },
        { ...cloneAnimationSticker(storm), x: 240, motion: "throw" },
        { ...cloneAnimationSticker(blaze), x: 340, motion: "idle" }
      ], 700),
      makeAnimationFrame([
        { ...cloneAnimationSticker(rookie), x: 220, motion: "jump" },
        { ...cloneAnimationSticker(storm), x: 260, motion: "idle" },
        { ...cloneAnimationSticker(blaze), x: 320, motion: "dance" }
      ], 700)
    ];
    animationLab.frames[0].text = "Ready?";
    animationLab.frames[0].speakerStickerId = rookie.id;
    animationLab.frames[1].text = "Go!";
    animationLab.frames[1].name = "Throw";
    animationLab.frames[1].speakerStickerId = storm.id;
    animationLab.frames[1].bubbleStyle = "shout";
    animationLab.frames[2].text = "Nice move.";
    animationLab.frames[2].name = "Celebrate";
    animationLab.frames[2].speakerStickerId = blaze.id;
    animationLab.frames[2].bubbleStyle = "thought";
    animationLab.selectedFrameId = animationLab.frames[0].id;
    animationLab.selectedStickerId = animationLab.frames[0].stickers[0].id;
    animationLab.playing = true;
    animationLab.speed = 1;
    if (animationProjectName) animationProjectName.value = animationLab.projectName;
    if (animationSpeedInput) animationSpeedInput.value = "1";
    if (animationBackdropSelect) animationBackdropSelect.value = "arena";
    if (animationSaveStatus) animationSaveStatus.textContent = "Nothing saved yet.";
    syncAnimationPlaybackClock();
    renderAnimationFrameList();
    syncAnimationEditorControls();
  }

  function animationSceneTimeMs() {
    if (!animationPreviewCanvas) return 0;
    const elapsed = animationLab.playing ? performance.now() - animationLab.startedAt : animationLab.pausedAt;
    return elapsed * animationLab.speed;
  }

  function getAnimationFramePlaybackState() {
    const frames = animationLab.frames;
    if (!frames.length) return null;
    const totalDuration = frames.reduce((sum, frame) => sum + frame.durationMs, 0);
    const loopTime = totalDuration > 0 ? animationSceneTimeMs() % totalDuration : 0;
    let cursor = 0;
    for (let i = 0; i < frames.length; i++) {
      const frame = frames[i];
      if (loopTime < cursor + frame.durationMs || i === frames.length - 1) {
        return { frame, frameIndex: i };
      }
      cursor += frame.durationMs;
    }
    return { frame: frames[0], frameIndex: 0 };
  }

  function getAnimationRenderStickers() {
    if (!animationLab.frames.length) return [];
    const frame = animationLab.playing ? getAnimationFramePlaybackState()?.frame : getSelectedAnimationFrame();
    return frame ? frame.stickers.map(cloneAnimationSticker) : [];
  }

  function getStaticAnimationPose(motion) {
    const phaseMap = {
      idle: 0.12,
      walk: 0.2,
      jump: 0.5,
      throw: 0.5,
      dance: 0.33
    };
    return getAnimationPose(motion, phaseMap[motion] ?? 0.12);
  }

  function drawAnimationSpecialSticker(g, sticker) {
    const special = getAnimationSpecialSticker(sticker.assetId);
    if (!special) return;
    const scaleX = animationStickerScaleX(sticker);
    const scaleY = animationStickerScaleY(sticker);
    if (special.kind === "ball") {
      g.fillStyle = "#ffd36b";
      g.beginPath();
      g.ellipse(sticker.x, sticker.y - 18 * scaleY, 10 * scaleX, 10 * scaleY, 0, 0, Math.PI * 2);
      g.fill();
      g.strokeStyle = "#8a5a00";
      g.lineWidth = 2;
      g.stroke();
      g.beginPath();
      g.moveTo(sticker.x - 10 * scaleX, sticker.y - 18 * scaleY);
      g.lineTo(sticker.x + 10 * scaleX, sticker.y - 18 * scaleY);
      g.moveTo(sticker.x, sticker.y - 28 * scaleY);
      g.lineTo(sticker.x, sticker.y - 8 * scaleY);
      g.stroke();
      return;
    }
    const x = sticker.x;
    const y = sticker.y - 20 * scaleY;
    const id = special.id;

    if (id === "ability:iceControl" || id === "ability:fireMaster") {
      const isFire = id === "ability:fireMaster";
      g.fillStyle = isFire ? "rgba(255,120,60,0.28)" : "rgba(120,220,255,0.22)";
      g.fillRect(x - 16 * scaleX, y - 34 * scaleY, 32 * scaleX, 68 * scaleY);
      g.strokeStyle = isFire ? "rgba(255,220,180,0.9)" : "rgba(210,245,255,0.95)";
      g.lineWidth = 2;
      for (let i = 0; i < 5; i++) {
        const swing = Math.sin(i * 0.9 + x * 0.03) * 6 * scaleX;
        g.beginPath();
        g.moveTo(x - 10 * scaleX + swing, y - 30 * scaleY + i * 14 * scaleY);
        g.lineTo(x + 10 * scaleX - swing, y - 18 * scaleY + i * 14 * scaleY);
        g.stroke();
      }
      return;
    }

    if (id === "ability:builderBox" || id === "ability:Fortress Grid" || id === "ability:Tank Rare Power" || id === "ability:Iron Guard") {
      g.fillStyle = "rgba(194,120,34,0.24)";
      g.fillRect(x - 24 * scaleX, y - 26 * scaleY, 48 * scaleX, 44 * scaleY);
      g.strokeStyle = id === "ability:Fortress Grid" ? "rgba(147,197,253,0.95)" : "rgba(255,220,170,0.95)";
      g.lineWidth = 2;
      g.strokeRect(x - 24 * scaleX, y - 26 * scaleY, 48 * scaleX, 44 * scaleY);
      if (id === "ability:Iron Guard" || id === "ability:Tank Rare Power") {
        g.fillStyle = "rgba(255,255,255,0.18)";
        g.beginPath();
        g.ellipse(x, y - 4 * scaleY, 18 * scaleX, 18 * scaleY, 0, 0, Math.PI * 2);
        g.fill();
        g.strokeStyle = "rgba(255,255,255,0.75)";
        g.stroke();
      }
      return;
    }

    if (id === "ability:blackout") {
      g.fillStyle = "rgba(0,0,0,0.94)";
      g.fillRect(x - 24 * scaleX, y - 32 * scaleY, 48 * scaleX, 64 * scaleY);
      g.strokeStyle = "rgba(255,255,255,0.15)";
      g.strokeRect(x - 24 * scaleX, y - 32 * scaleY, 48 * scaleX, 64 * scaleY);
      g.fillStyle = "rgba(255,255,255,0.8)";
      g.fillRect(x - 8 * scaleX, y - 4 * scaleY, 16 * scaleX, 3 * scaleY);
      return;
    }

    if (id === "ability:zombieSummon") {
      const colors = ["#86efac", "#fca5a5"];
      colors.forEach((color, index) => {
        const zx = x - 10 * scaleX + index * 18 * scaleX;
        g.fillStyle = color;
        g.beginPath();
        g.ellipse(zx, y, 9 * scaleX, 9 * scaleY, 0, 0, Math.PI * 2);
        g.fill();
        g.fillStyle = "rgba(10,14,22,0.85)";
        g.fillRect(zx - 3 * scaleX, y - 2 * scaleY, 2 * scaleX, 2 * scaleY);
        g.fillRect(zx + 1 * scaleX, y - 2 * scaleY, 2 * scaleX, 2 * scaleY);
      });
      return;
    }

    if (id === "ability:Thunder Call" || id === "ability:Storm Epic Power" || id === "ability:Monsoon Surge") {
      const drops = id === "ability:Thunder Call" ? 4 : 6;
      for (let i = 0; i < drops; i++) {
        const dx = (-18 + i * (36 / Math.max(drops - 1, 1))) * scaleX;
        g.strokeStyle = "rgba(196,181,253,0.9)";
        g.beginPath();
        g.moveTo(x + dx, y - 22 * scaleY);
        g.lineTo(x + dx - 4 * scaleX, y + 10 * scaleY);
        g.stroke();
      }
      if (id === "ability:Thunder Call") {
        g.fillStyle = "#fde68a";
        g.beginPath();
        g.moveTo(x + 4 * scaleX, y - 28 * scaleY);
        g.lineTo(x - 6 * scaleX, y - 6 * scaleY);
        g.lineTo(x + 2 * scaleX, y - 6 * scaleY);
        g.lineTo(x - 4 * scaleX, y + 16 * scaleY);
        g.lineTo(x + 10 * scaleX, y - 2 * scaleY);
        g.lineTo(x + 2 * scaleX, y - 2 * scaleY);
        g.closePath();
        g.fill();
      }
      return;
    }

    if (id === "ability:freeze" || id === "ability:Cold Snap" || id === "ability:Glacier Grip") {
      g.strokeStyle = "rgba(186,230,253,0.95)";
      g.lineWidth = 2;
      for (let i = 0; i < 6; i++) {
        const ang = (Math.PI * 2 * i) / 6;
        g.beginPath();
        g.moveTo(x, y);
          g.lineTo(x + Math.cos(ang) * 18 * scaleX, y + Math.sin(ang) * 18 * scaleY);
        g.stroke();
      }
      g.beginPath();
      g.ellipse(x, y, 6 * scaleX, 6 * scaleY, 0, 0, Math.PI * 2);
      g.stroke();
      return;
    }

    if (id === "ability:fireMaster" || id === "ability:Ember Arc" || id === "ability:Wildfire Spin" || id === "ability:Blaze Rare Power" || id === "ability:Comet Rush") {
      const shots = id === "ability:Wildfire Spin" ? 5 : (id === "ability:Ember Arc" ? 4 : 3);
      for (let i = 0; i < shots; i++) {
        const off = (i - (shots - 1) / 2) * 12 * scaleX;
        g.fillStyle = "#ff5a1f";
        g.beginPath();
        g.moveTo(x + off, y - 18 * scaleY);
        g.quadraticCurveTo(x + off + 7 * scaleX, y - 6 * scaleY, x + off, y + 8 * scaleY);
        g.quadraticCurveTo(x + off - 7 * scaleX, y - 6 * scaleY, x + off, y - 18 * scaleY);
        g.fill();
        g.fillStyle = "#ffbf3c";
        g.beginPath();
        g.ellipse(x + off, y + 2 * scaleY, 4 * scaleX, 4 * scaleY, 0, 0, Math.PI * 2);
        g.fill();
      }
      return;
    }

    if (id === "ability:boss") {
      for (let i = -1; i <= 1; i++) {
        g.fillStyle = "#fef3c7";
        g.beginPath();
        g.ellipse(x + i * 12 * scaleX, y - 2 * scaleY + Math.abs(i) * 4 * scaleY, 6 * scaleX, 6 * scaleY, 0, 0, Math.PI * 2);
        g.fill();
      }
      return;
    }

    if (id === "ability:Phase Shift" || id === "ability:timeTraveler") {
      g.fillStyle = "rgba(196,181,253,0.18)";
      g.fillRect(x - 20 * scaleX, y - 26 * scaleY, 40 * scaleX, 44 * scaleY);
      g.strokeStyle = "rgba(196,181,253,0.95)";
      g.lineWidth = 2;
      g.strokeRect(x - 20 * scaleX, y - 26 * scaleY, 40 * scaleX, 44 * scaleY);
      g.fillStyle = "rgba(255,255,255,0.95)";
      g.fillRect(x - 10 * scaleX, y - 4 * scaleY, 20 * scaleX, 3 * scaleY);
      g.fillRect(x - 10 * scaleX, y + 6 * scaleY, 12 * scaleX, 3 * scaleY);
      return;
    }

    if (id === "ability:Jetstream Orbit" || id === "ability:Aero Epic Power") {
      g.strokeStyle = "rgba(125,211,252,0.95)";
      g.lineWidth = 2;
      g.beginPath();
      g.ellipse(x, y, 20 * scaleX, 12 * scaleY, 0, 0, Math.PI * 2);
      g.stroke();
      for (let i = 0; i < 3; i++) {
        const bx = x - 10 * scaleX + i * 10 * scaleX;
        g.fillStyle = "#fef3c7";
        g.beginPath();
        g.ellipse(bx, y + (i % 2 === 0 ? -2 : 4) * scaleY, 4 * scaleX, 4 * scaleY, 0, 0, Math.PI * 2);
        g.fill();
      }
      return;
    }

    if (id === "ability:Anchor Crash" || id === "ability:Cadet Drill" || id === "ability:Rookie Common Power" || id === "ability:Slugger Common Power") {
      const shots = id === "ability:Cadet Drill" ? 2 : 1;
      for (let i = 0; i < shots; i++) {
        g.fillStyle = id === "ability:Anchor Crash" ? "#fde68a" : "#fef3c7";
        g.beginPath();
        g.ellipse(x - 8 * scaleX + i * 16 * scaleX, y, (id === "ability:Anchor Crash" ? 7 : 6) * scaleX, (id === "ability:Anchor Crash" ? 7 : 6) * scaleY, 0, 0, Math.PI * 2);
        g.fill();
      }
      return;
    }

    if (id === "ability:Sprinter Common Power" || id === "ability:Turbo Drift" || id === "ability:Hopper Common Power" || id === "ability:Sky Spike") {
      g.strokeStyle = "rgba(255,255,255,0.9)";
      g.lineWidth = 3;
      g.beginPath();
      g.moveTo(x - 18 * scaleX, y + 12 * scaleY);
      g.lineTo(x + 6 * scaleX, y - 2 * scaleY);
      g.lineTo(x - 2 * scaleX, y - 2 * scaleY);
      g.lineTo(x + 16 * scaleX, y - 18 * scaleY);
      g.stroke();
      return;
    }

    g.fillStyle = special.color || "#60a5fa";
    g.fillRect(x - 18 * scaleX, y - 18 * scaleY, 36 * scaleX, 36 * scaleY);
    g.strokeStyle = "rgba(255,255,255,0.7)";
    g.lineWidth = 2;
    g.strokeRect(x - 18 * scaleX, y - 18 * scaleY, 36 * scaleX, 36 * scaleY);
    g.fillStyle = "rgba(255,255,255,0.95)";
    g.font = "bold 10px system-ui";
    const label = special.name.slice(0, 3).toUpperCase();
    g.fillText(label, x - 11 * scaleX, y + 4 * scaleY);
  }

  function animationStickerBounds(sticker) {
    const scaleX = animationStickerScaleX(sticker);
    const scaleY = animationStickerScaleY(sticker);
    if (sticker.kind && sticker.kind !== "character") {
      return {
        left: sticker.x - 20 * scaleX,
        right: sticker.x + 20 * scaleX,
        top: sticker.y - 44 * scaleY,
        bottom: sticker.y + 4 * scaleY
      };
    }
    return {
      left: sticker.x - 20 * scaleX,
      right: sticker.x + 20 * scaleX,
      top: sticker.y - 74 * scaleY,
      bottom: sticker.y + 10 * scaleY
    };
  }

  function getAnimationResizeHandles(sticker) {
    const bounds = animationStickerBounds(sticker);
    return {
      corner: { x: bounds.right, y: bounds.bottom, r: 7 },
      width: { x: bounds.right, y: (bounds.top + bounds.bottom) / 2, r: 6 },
      height: { x: (bounds.left + bounds.right) / 2, y: bounds.bottom, r: 6 }
    };
  }

  function getAnimationResizeModeAtPoint(sticker, x, y) {
    const handles = getAnimationResizeHandles(sticker);
    if (Math.hypot(x - handles.corner.x, y - handles.corner.y) <= handles.corner.r + 2) return "corner";
    if (Math.hypot(x - handles.width.x, y - handles.width.y) <= handles.width.r + 2) return "width";
    if (Math.hypot(x - handles.height.x, y - handles.height.y) <= handles.height.r + 2) return "height";
    return "";
  }

  function findStickerAtPosition(x, y) {
    const frame = getSelectedAnimationFrame();
    if (!frame) return null;
    for (let i = frame.stickers.length - 1; i >= 0; i--) {
      const sticker = frame.stickers[i];
      const bounds = animationStickerBounds(sticker);
      if (x >= bounds.left && x <= bounds.right && y >= bounds.top && y <= bounds.bottom) {
        return sticker;
      }
    }
    return null;
  }

  function drawAnimationSpeechBubble(g, frame) {
    if (!frame?.text?.trim()) return;
    const speaker = frame.stickers.find(sticker => sticker.id === frame.speakerStickerId);
    if (!speaker) return;
    const bubbleText = frame.text.trim();
    const maxWidth = 160;
    const padding = 8;
    g.font = "12px system-ui";

    const lines = [];
    let current = "";
    for (const word of bubbleText.split(/\s+/)) {
      const next = current ? `${current} ${word}` : word;
      if (g.measureText(next).width > maxWidth - padding * 2 && current) {
        lines.push(current);
        current = word;
      } else {
        current = next;
      }
    }
    if (current) lines.push(current);
    const bubbleW = Math.min(maxWidth, Math.max(...lines.map(line => g.measureText(line).width), 48) + padding * 2);
    const bubbleH = lines.length * 14 + padding * 2;
    const x = clamp(speaker.x - bubbleW / 2, 10, 450 - bubbleW);
    const y = clamp(speaker.y - 112, 10, 170);

    g.fillStyle = frame.bubbleColor || "#ffffff";
    g.strokeStyle = "rgba(17,17,17,0.75)";
    g.lineWidth = 2;
    if (frame.bubbleStyle === "shout") {
      g.beginPath();
      g.moveTo(x + 10, y);
      g.lineTo(x + bubbleW - 10, y);
      g.lineTo(x + bubbleW, y + 10);
      g.lineTo(x + bubbleW, y + bubbleH - 10);
      g.lineTo(x + bubbleW - 10, y + bubbleH);
      g.lineTo(speaker.x + 10, y + bubbleH);
      g.lineTo(speaker.x, y + bubbleH + 14);
      g.lineTo(speaker.x - 10, y + bubbleH);
      g.lineTo(x + 10, y + bubbleH);
      g.lineTo(x, y + bubbleH - 10);
      g.lineTo(x, y + 10);
      g.closePath();
      g.fill();
      g.stroke();
    } else if (frame.bubbleStyle === "thought") {
      g.beginPath();
      g.ellipse(x + bubbleW / 2, y + bubbleH / 2, bubbleW / 2, bubbleH / 2, 0, 0, Math.PI * 2);
      g.fill();
      g.stroke();
      g.beginPath();
      g.arc(speaker.x - 6, y + bubbleH + 10, 6, 0, Math.PI * 2);
      g.arc(speaker.x + 6, y + bubbleH + 20, 4, 0, Math.PI * 2);
      g.fill();
      g.stroke();
    } else {
      g.beginPath();
      g.roundRect(x, y, bubbleW, bubbleH, 12);
      g.fill();
      g.stroke();
      g.beginPath();
      g.moveTo(speaker.x - 8, y + bubbleH);
      g.lineTo(speaker.x + 8, y + bubbleH);
      g.lineTo(speaker.x, y + bubbleH + 14);
      g.closePath();
      g.fill();
      g.stroke();
    }

    g.fillStyle = frame.bubbleTextColor || "#111111";
    lines.forEach((line, index) => {
      g.fillText(line, x + padding, y + padding + 12 + index * 14);
    });
  }

  function addStickerToSelectedFrame(charId, x, y) {
    const frame = getSelectedAnimationFrame();
    if (!frame) return;
    const sticker = makeAnimationSticker(charId, clamp(x, 40, 420), clamp(y, 120, 240), "idle", 1);
    frame.stickers.push(sticker);
    if (!frame.speakerStickerId && frame.text) frame.speakerStickerId = sticker.id;
    animationLab.selectedStickerId = sticker.id;
    renderAnimationFrameList();
    syncAnimationEditorControls();
    drawAnimationPreview();
  }

  function drawAnimationBackdrop(g, w, h) {
    const mode = animationBackdropSelect?.value || "arena";
    if (mode === "sunset") {
      const grad = g.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "#1f2544");
      grad.addColorStop(0.5, "#f97316");
      grad.addColorStop(1, "#451a03");
      g.fillStyle = grad;
      g.fillRect(0, 0, w, h);
    } else if (mode === "night") {
      const grad = g.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "#020617");
      grad.addColorStop(0.65, "#0f172a");
      grad.addColorStop(1, "#111827");
      g.fillStyle = grad;
      g.fillRect(0, 0, w, h);
      g.fillStyle = "rgba(255,255,255,0.7)";
      for (let i = 0; i < 18; i++) {
        const sx = (i * 97) % w;
        const sy = 18 + (i * 53) % 90;
        g.fillRect(sx, sy, 2, 2);
      }
    } else {
      g.fillStyle = "#0a1020";
      g.fillRect(0, 0, w, h);
      g.fillStyle = "rgba(255,255,255,0.12)";
      g.fillRect(w / 2 - 2, 0, 4, h - 38);
    }
    g.fillStyle = "rgba(15,26,43,0.92)";
    g.fillRect(0, h - 38, w, 38);
  }

  function drawAnimationPreview() {
    if (!animationPreviewCtx || !animationPreviewCanvas) return;
    const g = animationPreviewCtx;
    const w = animationPreviewCanvas.width;
    const h = animationPreviewCanvas.height;
    const playback = getAnimationFramePlaybackState();
    const renderStickers = getAnimationRenderStickers();
    const activeFrame = animationLab.playing ? playback?.frame : getSelectedAnimationFrame();

    g.clearRect(0, 0, w, h);
    drawAnimationBackdrop(g, w, h);

    g.fillStyle = "rgba(232,238,247,0.9)";
    g.font = "12px system-ui";
    if (playback) {
      g.fillText(`Animation Lab  Frame ${playback.frameIndex + 1}/${animationLab.frames.length}`, 12, 18);
    } else {
      g.fillText("Animation Lab", 12, 18);
    }

    drawAnimationSpeechBubble(g, activeFrame);

    for (const sticker of renderStickers) {
      if (sticker.kind === "character") {
        const char = getCharById(sticker.charId);
        const pose = getStaticAnimationPose(sticker.motion);
        const y = sticker.y - (pose.bodyLift || 0) * 0.15;
        g.save();
        g.translate(sticker.x, y);
        g.scale(animationStickerScaleX(sticker), animationStickerScaleY(sticker));
        drawMiniCharacter(g, 0, 0, 1.5, char.look, sticker.facing, pose);
        g.restore();
      } else {
        drawAnimationSpecialSticker(g, sticker);
      }

      if (!animationLab.playing && sticker.id === animationLab.selectedStickerId) {
        const bounds = animationStickerBounds(sticker);
        g.strokeStyle = "rgba(120,160,255,0.95)";
        g.lineWidth = 2;
        g.strokeRect(bounds.left, bounds.top, bounds.right - bounds.left, bounds.bottom - bounds.top);
        const handles = getAnimationResizeHandles(sticker);
        g.fillStyle = "#7dd3fc";
        for (const handle of [handles.corner, handles.width, handles.height]) {
          g.beginPath();
          g.arc(handle.x, handle.y, handle.r, 0, Math.PI * 2);
          g.fill();
          g.strokeStyle = "rgba(8,17,29,0.95)";
          g.lineWidth = 2;
          g.stroke();
        }
      }

      g.fillStyle = "rgba(232,238,247,0.82)";
      g.font = "11px system-ui";
      g.fillText(getAnimationStickerLabel(sticker), sticker.x - 24, h - 8);
    }
  }

  function refreshCharUI() {
    const c1 = p1Char();
    const c2 = p2Char();
    const cb = bossChar();

    p1CharName.textContent = c1.name;
    p1CharMeta.textContent = charMetaText(c1);

    if (!activeUserP1) {
      p1Lock.textContent = "Login or Guest required";
      p1Buy.disabled = true;
      p1ChestBasic.disabled = true;
      p1ChestPremium.disabled = true;
    } else {
      const u1 = isUnlocked("P1", c1.id);
      p1Lock.textContent = u1 ? "Unlocked âœ…" : `Locked ðŸ”’ (Buy ${c1.cost})`;
      p1Buy.disabled = u1 || c1.cost === 0;
      p1ChestBasic.disabled = false;
      p1ChestPremium.disabled = false;
    }

    p2CharName.textContent = c2.name;
    p2CharMeta.textContent = charMetaText(c2);

    if (!activeUserP2) {
      p2Lock.textContent = "Login or Guest required";
      p2Buy.disabled = true;
      p2ChestBasic.disabled = true;
      p2ChestPremium.disabled = true;
    } else {
      const u2 = isUnlocked("P2", c2.id);
      p2Lock.textContent = u2 ? "Unlocked âœ…" : `Locked ðŸ”’ (Buy ${c2.cost})`;
      p2Buy.disabled = u2 || c2.cost === 0;
      p2ChestBasic.disabled = false;
      p2ChestPremium.disabled = false;
    }

    drawPreview("P1", c1, 1);
    drawPreview("P2", c2, 1);
    if (bossCharName) bossCharName.textContent = cb.name;
    if (bossCharMeta) bossCharMeta.textContent = charMetaText(cb);
    drawPreview("BOSS", cb, -1);
    drawAnimationPreview();
    refreshCoinUI();
    syncTowerDefenseSelection();
  }

  function buySelected(which) {
    const c = which === "P1" ? p1Char() : p2Char();
    if (!((which === "P1" && activeUserP1) || (which === "P2" && activeUserP2))) return;
    if (c.cost === 0) return;
    if (isUnlocked(which, c.id)) return;
    const coins = getCoins(which);
    if (coins < c.cost) return;
    setCoins(which, coins - c.cost);
    unlock(which, c.id);
    refreshCharUI();
  }

  // ===================== CHESTS =====================
  function pickRarityFromOdds(odds) {
    const r = rand01();
    let acc = 0;
    for (const key of ["Common","Rare","Epic","Mythic"]) {
      acc += odds[key] || 0;
      if (r <= acc) return key;
    }
    return "Common";
  }
  function randomCharacterByRarity(rarity) {
    const pool = CHARACTERS.filter(c => c.rarity === rarity);
    return pool[Math.floor(Math.random() * pool.length)] || CHARACTERS[0];
  }

  function openChest(which, type) {
    const msgEl = which === "P1" ? p1ChestMsg : p2ChestMsg;
    msgEl.textContent = "";
    const cost = type === "premium" ? CHEST_PREMIUM_COST : CHEST_BASIC_COST;

    const odds = type === "premium"
      ? { Common: 0.70, Rare: 0.25, Epic: 0.045, Mythic: 0.005 }
      : { Common: 0.86, Rare: 0.12, Epic: 0.018, Mythic: 0.002 };

    const coins = getCoins(which);
    if (coins < cost) { msgEl.textContent = `Not enough coins. Need ${cost}.`; return; }

    setCoins(which, coins - cost);

    let rarity = pickRarityFromOdds(odds);
    let won = randomCharacterByRarity(rarity);

    for (let i=0;i<18;i++){
      if (!isUnlocked(which, won.id) && won.id !== "rookie") break;
      rarity = pickRarityFromOdds(odds);
      won = randomCharacterByRarity(rarity);
    }

    if (isUnlocked(which, won.id) || won.id === "rookie") {
      const refund = Math.floor(cost * 0.35);
      addCoins(which, refund);
      msgEl.textContent = `Chest: DUPLICATE (${won.name}). Refund +${refund}.`;
      refreshCharUI();
      return;
    }

    unlock(which, won.id);
    msgEl.textContent = `Chest: ${won.rarity} â†’ ${won.name} âœ… UNLOCKED!`;
    refreshCharUI();
  }

  // ===================== INPUT =====================
  const keys = new Set();
  const tap = { p1Pending:false, p2Pending:false, t1:null, t2:null };
  const hold = {
    p1Down:false, p2Down:false, p1Start:0, p2Start:0,
    p1Ready:false, p2Ready:false, p1ChargedSec:0, p2ChargedSec:0
  };

  window.addEventListener("keydown", (e) => {
    if (e.repeat) return;
    const k = e.key.toLowerCase();
    if (k === "escape") { showLobby(); return; }
    keys.add(k);

    if (!running) return;

    if (k === "s") {
      if (getCharById(P1.charId).ability === "chargeBig") {
        if (hold.p1Ready && P1.heldBall) {
          throwBall("p1", { chargeSec: hold.p1ChargedSec });
          hold.p1Ready = false;
          hold.p1ChargedSec = 0;
          return;
        }
        if (!P1.heldBall) return;
        hold.p1Down = true;
        hold.p1Start = nowSec();
        return;
      }
      handleTap("p1");
    }

    if (k === "arrowdown") {
      if (bossMode) return;
      if (getCharById(P2.charId).ability === "chargeBig") {
        if (hold.p2Ready && P2.heldBall) {
          throwBall("p2", { chargeSec: hold.p2ChargedSec });
          hold.p2Ready = false;
          hold.p2ChargedSec = 0;
          return;
        }
        if (!P2.heldBall) return;
        hold.p2Down = true;
        hold.p2Start = nowSec();
        return;
      }
      handleTap("p2");
    }
  });

  window.addEventListener("keyup", (e) => {
    const k = e.key.toLowerCase();
    keys.delete(k);

    if (!running) return;

    if (k === "s" && hold.p1Down) {
      hold.p1Down = false;
      hold.p1ChargedSec = nowSec() - hold.p1Start;
      hold.p1Ready = true;
    }
    if (k === "arrowdown" && hold.p2Down) {
      if (bossMode) return;
      hold.p2Down = false;
      hold.p2ChargedSec = nowSec() - hold.p2Start;
      hold.p2Ready = true;
    }
  });

  window.addEventListener("blur", () => {
    keys.clear();
    if (tap.t1) clearTimeout(tap.t1);
    if (tap.t2) clearTimeout(tap.t2);
    tap.t1=tap.t2=null;
    tap.p1Pending=tap.p2Pending=false;
    hold.p1Down=hold.p2Down=false;
    hold.p1Ready=hold.p2Ready=false;
    hold.p1ChargedSec=hold.p2ChargedSec=0;
  });

  function canvasPoint(evt) {
    const rect = canvas.getBoundingClientRect();
    const sx = canvas.width / rect.width;
    const sy = canvas.height / rect.height;
    return {
      x: (evt.clientX - rect.left) * sx,
      y: (evt.clientY - rect.top) * sy
    };
  }

  canvas.addEventListener("click", (evt) => {
    if (!towerDefenseMode || !running) return;
    const pt = canvasPoint(evt);
    const cards = towerDefense.owner === "BOTH"
      ? [...towerDefenseCardRects("P1"), ...towerDefenseCardRects("P2")]
      : towerDefenseCardRects();
    for (const card of cards) {
      if (pt.x >= card.x && pt.x <= card.x + card.w && pt.y >= card.y && pt.y <= card.y + card.h) {
        if (towerDefense.owner === "BOTH") {
          if (card.owner === "P2") {
            towerDefense.selectedCharIdP2 = card.char.id;
          } else {
            towerDefense.selectedCharIdP1 = card.char.id;
          }
          setStatus(`${card.owner} selected ${card.char.name}.`);
        } else {
          towerDefense.selectedCharId = card.char.id;
          setStatus(`${card.char.name} selected for placement.`);
        }
        return;
      }
    }
    placeTowerAt(pt.x, pt.y);
  });

  function handleTap(which) {
    const pendingKey = which === "p1" ? "p1Pending" : "p2Pending";
    const timerKey = which === "p1" ? "t1" : "t2";

    if (!tap[pendingKey]) {
      tap[pendingKey] = true;
      tap[timerKey] = setTimeout(() => {
        tap[pendingKey] = false;
        tap[timerKey] = null;
        throwBall(which);
      }, DOUBLE_TAP_MS);
    } else {
      tap[pendingKey] = false;
      if (tap[timerKey]) clearTimeout(tap[timerKey]);
      tap[timerKey] = null;
      useAbility(which);
    }
  }

  // ===================== GAME OBJECTS =====================
  const P1 = { name:"P1", x:150, y:groundY, vx:0, vy:0, w:22, h:48,
    canJump:true, alive:true, heldBall:null, frozenUntil:0, tornadoUntil:0, boxUntil:0, blackoutUntil:0, tornadoKind:"none", charId:"rookie",
    extraLives:0, invulnUntil:0, slowStacks:0, timeTravelUsesLeft:0, facing:1, blindDir:0, blindNextDirAt:0, dashUntil:0, dashMul:1, stormRainUntil:0, stormNextRainAt:0
  };
  const P2 = { name:"P2", x:W-150, y:groundY, vx:0, vy:0, w:22, h:48,
    canJump:true, alive:true, heldBall:null, frozenUntil:0, tornadoUntil:0, boxUntil:0, blackoutUntil:0, tornadoKind:"none", charId:"rookie",
    extraLives:0, invulnUntil:0, slowStacks:0, timeTravelUsesLeft:0, facing:1, blindDir:0, blindNextDirAt:0, dashUntil:0, dashMul:1, stormRainUntil:0, stormNextRainAt:0
  };
  const BOSS = { name:"BOSS", x:W-120, y:groundY, vx:0, vy:0, w:28, h:56,
    canJump:true, alive:false, heldBall:null, frozenUntil:0, tornadoUntil:0, boxUntil:0, blackoutUntil:0, tornadoKind:"none", charId:"stellar_guard",
    extraLives:0, invulnUntil:0, slowStacks:0, timeTravelUsesLeft:0, facing:-1, blindDir:0, blindNextDirAt:0, dashUntil:0, dashMul:1, stormRainUntil:0, stormNextRainAt:0
  };

  let balls = [];
  let zombies = [];
  let nextSpawnAt = 0;

  function getNearestAliveHero(x){
    const heroes = [P1, P2].filter(p => p.alive);
    if (!heroes.length) return P1;
    heroes.sort((a,b) => Math.abs(a.x - x) - Math.abs(b.x - x));
    return heroes[0];
  }

  function getTargetForThrow(thrower){
    if (teamBossMode) {
      if (thrower === BOSS) return getNearestAliveHero(thrower.x);
      return BOSS;
    }
    if (thrower === P1) return P2;
    if (thrower === P2) return P1;
    return P1;
  }

  function actorFromWhich(which){
    if (which === "p1") return P1;
    if (which === "p2") return P2;
    if (which === "boss") return BOSS;
    return null;
  }

  function makeBall(x,y){
    return {
      x,y, vx:0, vy:0,
      inFlight:false,
      lastThrower:null,
      visual:"normal",
      bounces:1,
      cooldown:0,
      heldBy:null,
      pullTo:null,
      r: BALL_R
    };
  }

  // ===================== STATS =====================
  function moveSpeed(p){
    const c = getCharById(p.charId);
    const slowMul = Math.max(ZOMBIE_MIN_SPEED_MUL, 1 - (p.slowStacks || 0) * ZOMBIE_SLOW_PER_STACK);
    const bossMul = ((bossMode && p === P2) || (teamBossMode && p === BOSS)) ? BOSS_MOVE_MUL : 1;
    const dashMul = nowSec() < (p.dashUntil || 0) ? (p.dashMul || 1) : 1;
    return MOVE_SPEED_BASE * c.speedMul * slowMul * bossMul * dashMul;
  }

  function handOffsetX(p){
    return (p.facing || 1) >= 0 ? 18 : -18;
  }
  function jumpVy(p){
    const c = getCharById(p.charId);
    const bossMul = ((bossMode && p === P2) || (teamBossMode && p === BOSS)) ? BOSS_JUMP_MUL : 1;
    return JUMP_VY_BASE * c.jumpMul * bossMul;
  }
  function throwSpeed(p){
    const c = getCharById(p.charId);
    const bossMul = ((bossMode && p === P2) || (teamBossMode && p === BOSS)) ? BOSS_THROW_MUL : 1;
    return THROW_SPEED_BASE * c.throwMul * bossMul;
  }

  // ===================== ROUND FLOW =====================
  function getScoreLabels() {
    if (towerDefenseMode) {
      if (towerDefense.owner === "BOTH") return { leftName: "P1", rightName: "P2" };
      return { leftName: "WAVE", rightName: "BASE" };
    }
    const leftName = teamBossMode ? "TEAM" : "P1";
    const rightName = (bossMode || teamBossMode) ? "BOSS" : "P2";
    return { leftName, rightName };
  }

  function updateScoreboard() {
    if (!scoreboardEl) return;
    const labels = getScoreLabels();
    if (scoreLeftNameEl) scoreLeftNameEl.textContent = labels.leftName;
    if (scoreRightNameEl) scoreRightNameEl.textContent = labels.rightName;
    if (towerDefenseMode) {
      if (towerDefense.owner === "BOTH") {
        const p1 = tdLane("P1");
        const p2 = tdLane("P2");
        if (scoreLeftValueEl) scoreLeftValueEl.textContent = `W${p1.wave} B${p1.lives}`;
        if (scoreRightValueEl) scoreRightValueEl.textContent = `W${p2.wave} B${p2.lives}`;
        if (scoreToWinEl) scoreToWinEl.textContent = `COINS ${p1.coinsEarned}/${p2.coinsEarned}`;
        return;
      }
      const lane = tdLane(towerDefense.owner);
      if (scoreLeftValueEl) scoreLeftValueEl.textContent = String(lane.wave);
      if (scoreRightValueEl) scoreRightValueEl.textContent = String(lane.lives);
      if (scoreToWinEl) scoreToWinEl.textContent = `COINS ${lane.coinsEarned}`;
      return;
    }
    if (scoreLeftValueEl) scoreLeftValueEl.textContent = String(winsP1);
    if (scoreRightValueEl) scoreRightValueEl.textContent = String(winsP2);
    if (scoreToWinEl) scoreToWinEl.textContent = `TO ${CFG.ROUNDS_TO_WIN}`;
  }

  function setStatus(msg) {
    updateScoreboard();
    if (towerDefenseMode) {
      if (towerDefense.owner === "BOTH") {
        const p1 = tdLane("P1");
        const p2 = tdLane("P2");
        statusEl.textContent = `${msg} | P1 T${towerDefense.towers.filter(t => t.owner === "P1").length} E${p1.enemies.length + p1.spawnQueue.length} B${p1.lives} | P2 T${towerDefense.towers.filter(t => t.owner === "P2").length} E${p2.enemies.length + p2.spawnQueue.length} B${p2.lives}`;
        return;
      }
      const lane = tdLane(towerDefense.owner);
      statusEl.textContent = `${msg} | Towers ${towerDefense.towers.length} | Enemies ${lane.enemies.length + lane.spawnQueue.length}`;
      return;
    }
    statusEl.textContent = `${msg} | Balls ${balls.length}/${CFG.MAX_BALLS}`;
  }

  function resetRound(){
    matchWinner = null;

    P1.x=150; P1.y=groundY; P1.vx=0; P1.vy=0; P1.canJump=true; P1.alive=true; P1.heldBall=null; P1.frozenUntil=0; P1.tornadoUntil=0; P1.boxUntil=0; P1.blackoutUntil=0; P1.tornadoKind="none"; P1.invulnUntil=0; P1.slowStacks=0; P1.facing=1; P1.blindDir=0; P1.blindNextDirAt=0; P1.dashUntil=0; P1.dashMul=1; P1.stormRainUntil=0; P1.stormNextRainAt=0;
    P2.x=W-150; P2.y=groundY; P2.vx=0; P2.vy=0; P2.canJump=true; P2.alive=true; P2.heldBall=null; P2.frozenUntil=0; P2.tornadoUntil=0; P2.boxUntil=0; P2.blackoutUntil=0; P2.tornadoKind="none"; P2.invulnUntil=0; P2.slowStacks=0; P2.facing=1; P2.blindDir=0; P2.blindNextDirAt=0; P2.dashUntil=0; P2.dashMul=1; P2.stormRainUntil=0; P2.stormNextRainAt=0;
    BOSS.x=W-120; BOSS.y=groundY; BOSS.vx=0; BOSS.vy=0; BOSS.canJump=true; BOSS.alive=teamBossMode; BOSS.heldBall=null; BOSS.frozenUntil=0; BOSS.tornadoUntil=0; BOSS.boxUntil=0; BOSS.blackoutUntil=0; BOSS.tornadoKind="none"; BOSS.invulnUntil=0; BOSS.slowStacks=0; BOSS.facing=-1; BOSS.blindDir=0; BOSS.blindNextDirAt=0; BOSS.dashUntil=0; BOSS.dashMul=1; BOSS.stormRainUntil=0; BOSS.stormNextRainAt=0;

    balls = [ makeBall(midX, groundY - 30) ];
    zombies = [];
    P1.extraLives = getCharById(P1.charId).ability === "zombieSummon" ? ZOMBIE_WITCH_EXTRA_LIVES : 0;
    P2.extraLives = getCharById(P2.charId).ability === "zombieSummon" ? ZOMBIE_WITCH_EXTRA_LIVES : 0;
    BOSS.extraLives = teamBossMode ? BOSS_EXTRA_LIVES : 0;
    if (bossMode) P2.extraLives += BOSS_EXTRA_LIVES;
    P1.timeTravelUsesLeft = getCharById(P1.charId).ability === "timeTraveler" ? 5 : 0;
    P2.timeTravelUsesLeft = getCharById(P2.charId).ability === "timeTraveler" ? 5 : 0;
    BOSS.timeTravelUsesLeft = 0;
    nextSpawnAt = nowSec() + CFG.SPAWN_EVERY;
    hold.p1Down = hold.p2Down = false;
    hold.p1Ready = hold.p2Ready = false;
    hold.p1ChargedSec = hold.p2ChargedSec = 0;
    bossNextActionAt = nowSec() + 0.55;
    bossNextAbilityAt = nowSec() + 2.3;
    bossNextJumpAt = nowSec() + 0.8;

    setStatus("Round start!");
  }

  function resetMatch(){
    winsP1=0; winsP2=0;
    resetRound();
  }

  function triggerTimeTraveler(which){
    const traveler = which === "P1" ? P1 : P2;
    if (traveler.timeTravelUsesLeft <= 0) return;
    const remaining = traveler.timeTravelUsesLeft - 1;
    resetRound();
    const travelerAfterReset = which === "P1" ? P1 : P2;
    travelerAfterReset.timeTravelUsesLeft = remaining;
    travelerAfterReset.invulnUntil = nowSec() + REVIVE_INVULN_SEC;
    setStatus(`${which} used Time Traveler! Rewound the round. Uses left: ${travelerAfterReset.timeTravelUsesLeft}/5`);
  }

  function endRound(winner){
    if (teamBossMode) {
      if (winner === "TEAM") {
        addCoins("P1", 70);
        addCoins("P2", 70);
      }
    } else if (bossMode) {
      if (winner === "P1") addCoins("P1", 100);
    } else {
      addCoins(winner, 35);
    }
    if (winner === "P1" || winner === "TEAM") winsP1++; else winsP2++;

    if (winsP1 >= CFG.ROUNDS_TO_WIN) {
      matchWinner = teamBossMode ? "TEAM" : "P1";
      setStatus(`${teamBossMode ? "TEAM" : "P1"} wins MATCH! ESC for lobby.`);
      return;
    }
    if (winsP2 >= CFG.ROUNDS_TO_WIN) {
      matchWinner = (bossMode || teamBossMode) ? "BOSS" : "P2";
      setStatus(`${(bossMode || teamBossMode) ? "BOSS" : "P2"} wins MATCH! ESC for lobby.`);
      return;
    }

    const winnerLabel = winner === "TEAM" ? "TEAM" : (((winner === "P2" || winner === "BOSS") && (bossMode || teamBossMode)) ? "BOSS" : winner);
    setStatus(`${winnerLabel} got the hit and won that round!`);
    setTimeout(() => { if (running) resetRound(); }, 800);
  }

  // ===================== PICKUP / HOLD =====================
  function isPickable(b){
    if (b.heldBy) return false;
    if (b.inFlight) return false;
    const spd = Math.hypot(b.vx, b.vy);
    return spd <= PICKABLE_SPEED;
  }

  function nearestPickableBall(p){
    const px = p.x, py = p.y - p.h*0.6;
    let best=null, bestD=1e9;
    for (const b of balls){
      if (!isPickable(b)) continue;
      const d = Math.hypot(b.x-px, b.y-py);
      if (d < PICKUP_RADIUS && d < bestD) { best=b; bestD=d; }
    }
    return best;
  }

  function attachBallToPlayer(b, p){
    b.heldBy = p.name;
    p.heldBall = b;
    b.vx = 0; b.vy = 0;
    b.inFlight = false;
    b.visual = "normal";
  }

  function chargeToRadius(chargeSec){
    let t = clamp(chargeSec, 0, CHARGE_MAX_SEC) / CHARGE_MAX_SEC;
    t = t * t; // ease-in
    const scale = 1 + (CHARGE_MAX_SCALE - 1) * t;
    return BALL_R * scale;
  }

  function radiusToSpeedMul(r){
    const scale = r / BALL_R;
    return 1 / (1 + (scale - 1) * CHARGE_SPEED_PENALTY);
  }

  function updateHeldBall(p){
    if (!p.heldBall) return;
    const b = p.heldBall;

    const handX = p.x + handOffsetX(p);
    let handY = p.y - p.h + 16;

    const c = getCharById(p.charId);
    if (c.ability === "chargeBig") {
      const t = nowSec();
      const isP1 = (p === P1);
      const charging = (isP1 && hold.p1Down) || (!isP1 && hold.p2Down);
      const chargeSec = isP1 ? hold.p1ChargedSec : hold.p2ChargedSec;
      const chargeReady = isP1 ? hold.p1Ready : hold.p2Ready;
      if (charging) {
        const start = isP1 ? hold.p1Start : hold.p2Start;
        const dur = t - start;
        b.r = chargeToRadius(dur);
        const lift = clamp(dur, 0, CHARGE_MAX_SEC) / CHARGE_MAX_SEC;
        handY -= CHARGE_LIFT_PX * lift;
      } else if (chargeReady) {
        b.r = chargeToRadius(chargeSec);
      } else {
        b.r = BALL_R;
      }
    } else {
      b.r = BALL_R;
    }

    b.x = handX;
    b.y = handY;
    b.vx = 0; b.vy = 0;
    b.inFlight = false;
  }

  function autoPickup(p){
    if (!p.alive) return;
    if (p.heldBall) return;
    const b = nearestPickableBall(p);
    if (b) attachBallToPlayer(b, p);
  }

  // ===================== THROW =====================
  function throwBall(which, opts = null){
    const thrower = actorFromWhich(which);
    const target = getTargetForThrow(thrower);
    if (!thrower || !target) return;
    if (!thrower.alive) return;
    if (!thrower.heldBall) return;

    const ball = thrower.heldBall;
    if (ball.cooldown > 0) return;

    const handX = thrower.x + handOffsetX(thrower);
    const handY = thrower.y - thrower.h + 16;

    let dx = target.x - handX;
    let dy = (target.y - target.h*0.6 - 35) - handY;
    const len = Math.hypot(dx,dy) || 1;
    dx/=len; dy/=len;

    let spd = throwSpeed(thrower);

    const char = getCharById(thrower.charId);
    const chargeSec = (opts && typeof opts.chargeSec === "number") ? opts.chargeSec : 0;

    if (char.ability === "chargeBig") {
      const r = chargeToRadius(chargeSec);
      ball.r = r;
      spd *= radiusToSpeedMul(r);
    } else {
      ball.r = BALL_R;
    }

    ball.heldBy = null;
    thrower.heldBall = null;

    ball.x = handX; ball.y = handY;
    ball.vx = dx * spd;
    ball.vy = dy * spd;
    ball.inFlight = true;
    ball.lastThrower = thrower.name;
    ball.visual = char.id === "blaze" ? "fire" : "normal";
    ball.bounces = 0;
    ball.cooldown = 0.15;
    ball.pullTo = null;
  }

  function drawBallSprite(b){
    if (b.visual === "fire") {
      const flicker = 0.88 + 0.12 * Math.sin(nowSec() * 18 + b.x * 0.06);
      const flameH = b.r * 1.7 * flicker;
      const flameW = b.r * 1.15;
      ctx.fillStyle = "rgba(255, 120, 24, 0.28)";
      ctx.beginPath();
      ctx.ellipse(b.x, b.y + b.r * 0.12, b.r * 1.45, b.r * 0.95, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#ff5a1f";
      ctx.beginPath();
      ctx.moveTo(b.x, b.y - flameH);
      ctx.quadraticCurveTo(b.x + flameW, b.y - b.r * 0.45, b.x + b.r * 0.92, b.y + b.r * 0.25);
      ctx.quadraticCurveTo(b.x + b.r * 0.36, b.y + b.r * 1.1, b.x, b.y + b.r * 0.7);
      ctx.quadraticCurveTo(b.x - b.r * 0.36, b.y + b.r * 1.1, b.x - b.r * 0.92, b.y + b.r * 0.25);
      ctx.quadraticCurveTo(b.x - flameW, b.y - b.r * 0.45, b.x, b.y - flameH);
      ctx.fill();

      ctx.fillStyle = "#ffbf3c";
      ctx.beginPath();
      ctx.moveTo(b.x, b.y - flameH * 0.65);
      ctx.quadraticCurveTo(b.x + b.r * 0.58, b.y - b.r * 0.1, b.x + b.r * 0.48, b.y + b.r * 0.38);
      ctx.quadraticCurveTo(b.x + b.r * 0.15, b.y + b.r * 0.9, b.x, b.y + b.r * 0.44);
      ctx.quadraticCurveTo(b.x - b.r * 0.15, b.y + b.r * 0.9, b.x - b.r * 0.48, b.y + b.r * 0.38);
      ctx.quadraticCurveTo(b.x - b.r * 0.58, b.y - b.r * 0.1, b.x, b.y - flameH * 0.65);
      ctx.fill();

      ctx.fillStyle = "#fff3b0";
      ctx.beginPath();
      ctx.arc(b.x, b.y + b.r * 0.08, b.r * 0.35, 0, Math.PI * 2);
      ctx.fill();
      return;
    }

    ctx.fillStyle = b.heldBy ? "#ffd36b" : (isPickable(b) ? "#fff2b0" : "#ffcc66");
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI*2);
    ctx.fill();
  }

  // ===================== ABILITIES =====================
  function spawnBossHelpers(user, enemy){
    const handX = user.x + handOffsetX(user);
    const handY = user.y - user.h + 16;
    const baseSpeed = throwSpeed(user) * BOSS_HELPER_SPEED_MUL;

    let spawned = 0;
    for (let i = 0; i < BOSS_HELPER_COUNT; i++) {
      if (balls.length >= CFG.MAX_BALLS) break;

      const t = BOSS_HELPER_COUNT <= 1 ? 0 : (i / (BOSS_HELPER_COUNT - 1)) * 2 - 1;
      const off = t * BOSS_HELPER_SPREAD_RAD;

      const tx = enemy.x;
      const ty = enemy.y - enemy.h * 0.6 - 35;
      const vx = tx - handX;
      const vy = ty - handY;
      const len = Math.hypot(vx, vy) || 1;

      const dirX = vx / len;
      const dirY = vy / len;
      const cos = Math.cos(off);
      const sin = Math.sin(off);
      const shotX = dirX * cos - dirY * sin;
      const shotY = dirX * sin + dirY * cos;

      const b = makeBall(handX, handY);
      b.r = BALL_R * 0.92;
      b.vx = shotX * baseSpeed;
      b.vy = shotY * baseSpeed;
      b.inFlight = true;
      b.lastThrower = user.name;
      b.bounces = 0;
      b.cooldown = 0.15;
      balls.push(b);
      spawned++;
    }

    return spawned;
  }

  function pullFloorBallsToSide(user){
    const sideTargetX = user === P1 ? (midX - 110) : (midX + 110);
    const sideDir = user === P1 ? -1 : 1;
    let moved = 0;

    for (const b of balls) {
      if (b.heldBy) continue;
      if (b.y + b.r < groundY - 2) continue; // only balls on the floor

      const dir = Math.sign(sideTargetX - b.x) || sideDir;
      b.vx = dir * ICE_TORNADO_PULL_SPEED;
      b.vy = -80;
      b.inFlight = true;
      b.lastThrower = user.name;
      b.bounces = 0;
      b.cooldown = 0.12;
      b.pullTo = user.name;
      moved++;
    }

    return moved;
  }

  function launchLooseBallsAtEnemy(user, enemy){
    const targetY = enemy.y - enemy.h * 0.6;
    let launched = 0;

    for (const b of balls) {
      if (b.heldBy) continue;

      const dx = enemy.x - b.x;
      const dy = targetY - b.y;
      const baseAngle = Math.atan2(dy, dx);
      const spread = (rand01() * 2 - 1) * FIRE_TORNADO_RANDOM_SPREAD_RAD;
      const angle = baseAngle + spread - FIRE_TORNADO_UPWARD_BIAS_RAD;
      const speedMul = 1 + (rand01() * 2 - 1) * FIRE_TORNADO_SPEED_JITTER;
      const speed = FIRE_TORNADO_LAUNCH_SPEED * speedMul;

      b.vx = Math.cos(angle) * speed;
      b.vy = Math.sin(angle) * speed;
      b.inFlight = true;
      b.lastThrower = user.name;
      b.bounces = 0;
      b.cooldown = 0.12;
      b.pullTo = null;
      launched++;
    }

    return launched;
  }

  function spawnZombies(user, enemy){
    const spawned = [];
    const handSign = handOffsetX(user) >= 0 ? 1 : -1;
    const startX = user.x + handSign * 24;
    const startY = user.y - user.h * 0.52;
    const offsets = [-14, 14];
    const t = nowSec();
    for (let i = 0; i < ZOMBIE_COUNT; i++) {
      const z = {
        x: startX + offsets[i],
        y: startY - Math.abs(offsets[i]) * 0.12,
        vx: handSign * ZOMBIE_SPEED * 0.5,
        vy: -30,
        owner: user.name,
        target: enemy.name,
        until: t + ZOMBIE_LIFETIME,
        r: ZOMBIE_RADIUS,
        slot: i,
        nextCurseAt: t
      };
      zombies.push(z);
      spawned.push(z);
    }
    return spawned.length;
  }

  function spawnDirectShot(user, enemy, speedMul = 1, angleOff = 0, sizeMul = 1, visual = "normal"){
    if (balls.length >= CFG.MAX_BALLS) return false;
    const handX = user.x + handOffsetX(user);
    const handY = user.y - user.h + 16;
    const tx = enemy.x;
    const ty = enemy.y - enemy.h * 0.6 - 35;
    const vx = tx - handX;
    const vy = ty - handY;
    const len = Math.hypot(vx, vy) || 1;
    const dirX = vx / len;
    const dirY = vy / len;
    const cos = Math.cos(angleOff);
    const sin = Math.sin(angleOff);
    const shotX = dirX * cos - dirY * sin;
    const shotY = dirX * sin + dirY * cos;
    const b = makeBall(handX, handY);
    b.r = BALL_R * sizeMul;
    b.vx = shotX * throwSpeed(user) * speedMul;
    b.vy = shotY * throwSpeed(user) * speedMul;
    b.inFlight = true;
    b.lastThrower = user.name;
    b.bounces = 0;
    b.cooldown = 0.12;
    b.visual = visual;
    balls.push(b);
    return true;
  }

  function spawnStormRainDrop(user, enemy){
    if (balls.length >= CFG.MAX_BALLS) return false;
    const enemyLeftSide = enemy.x < midX;
    const minX = enemyLeftSide ? 20 : (midX + 16);
    const maxX = enemyLeftSide ? (midX - 16) : (W - 20);
    const x = clamp(enemy.x + (rand01() * 220 - 110), minX, maxX);
    const b = makeBall(x, -14);
    b.vx = (rand01() * 2 - 1) * 90;
    b.vy = STORM_RAIN_SPEED_MIN + rand01() * (STORM_RAIN_SPEED_MAX - STORM_RAIN_SPEED_MIN);
    b.inFlight = true;
    b.lastThrower = user.name;
    b.bounces = 0;
    b.cooldown = 0.12;
    balls.push(b);
    return true;
  }

  function nearestLooseBall(user){
    let best = null;
    let bestD = 1e9;
    for (const b of balls) {
      if (b.heldBy) continue;
      const d = Math.hypot(b.x - user.x, b.y - (user.y - user.h * 0.5));
      if (d < bestD) {
        best = b;
        bestD = d;
      }
    }
    return best;
  }

  function updateAbilityEffects(){
    const t = nowSec();
    const actors = teamBossMode ? [P1, P2, BOSS] : [P1, P2];
    for (const user of actors) {
      if (!user.alive) continue;
      if (t >= user.stormRainUntil) continue;
      if (t < user.stormNextRainAt) continue;
      const enemy = getTargetForThrow(user);
      if (!enemy) continue;
      spawnStormRainDrop(user, enemy);
      user.stormNextRainAt += STORM_RAIN_INTERVAL;
      if (user.stormNextRainAt < t) user.stormNextRainAt = t + STORM_RAIN_INTERVAL;
    }
  }

  function useAbility(which){
    const user = actorFromWhich(which);
    const enemy = getTargetForThrow(user);
    if (!user || !enemy) return;
    if (!user.alive) return;

    const c = getCharById(user.charId);
    const t = nowSec();

    if (c.ability === "freeze") {
      if (Math.abs(user.x - enemy.x) > FREEZE_RANGE) return;
      enemy.frozenUntil = t + 1.6;
      setStatus(`${user.name} froze ${enemy.name}!`);
      return;
    }

    if (c.ability === "iceControl") {
      user.tornadoUntil = t + ICE_TORNADO_DURATION;
      user.tornadoKind = "ice";
      const moved = pullFloorBallsToSide(user);
      setStatus(`${user.name} cast Ice Tornado! Pulled ${moved} floor balls.`);
      return;
    }

    if (c.ability === "fireMaster") {
      user.tornadoUntil = t + FIRE_TORNADO_DURATION;
      user.tornadoKind = "fire";
      const launched = launchLooseBallsAtEnemy(user, enemy);
      setStatus(`${user.name} cast Fire Tornado! Launched ${launched} loose balls.`);
      return;
    }

    if (c.ability === "builderBox") {
      user.boxUntil = t + BUILDER_BOX_DURATION;
      setStatus(`${user.name} built a box shield for 5 seconds!`);
      return;
    }

    if (c.ability === "blackout") {
      enemy.blackoutUntil = t + BLACKOUT_DURATION;
      enemy.blindDir = 0;
      enemy.blindNextDirAt = t;
      setStatus(`${user.name} used Sun's Son! ${enemy.name}'s screen is blacked out for 5 seconds.`);
      return;
    }

    if (c.ability === "boss") {
      if (user.heldBall) throwBall(which);
      const spawned = spawnBossHelpers(user, enemy);
      if (spawned > 0) {
        setStatus(`${user.name} used Stellar Guard (summoned ${spawned} helpers)!`);
      }
      return;
    }

    if (c.ability === "zombieSummon") {
      const spawned = spawnZombies(user, enemy);
      if (spawned > 0) {
        setStatus(`${user.name} summoned ${spawned} zombies!`);
      }
      return;
    }

    if (c.ability === "timeTraveler") {
      if (user.timeTravelUsesLeft <= 0) {
        setStatus(`${user.name} has no Time Traveler rewinds left this round.`);
        return;
      }
      triggerTimeTraveler(user.name);
      return;
    }

    if (c.ability === "Anchor Crash") {
      const loose = balls
        .filter(b => !b.heldBy)
        .sort((a, b) => {
          const da = Math.hypot(a.x - user.x, a.y - (user.y - user.h * 0.5));
          const db = Math.hypot(b.x - user.x, b.y - (user.y - user.h * 0.5));
          return da - db;
        })
        .slice(0, 2);
      let launched = 0;
      for (const b of loose) {
        const dx = enemy.x - b.x;
        const dy = (enemy.y - enemy.h * 0.6) - b.y - 28;
        const len = Math.hypot(dx, dy) || 1;
        b.vx = (dx / len) * (SLUGGER_SHOCKWAVE_SPEED * 1.08);
        b.vy = (dy / len) * (SLUGGER_SHOCKWAVE_SPEED * 1.08);
        b.inFlight = true;
        b.lastThrower = user.name;
        b.bounces = 0;
        b.cooldown = 0.12;
        b.pullTo = null;
        launched++;
      }
      setStatus(`${user.name} used Anchor Crash! Slammed ${launched} loose balls.`);
      return;
    }

    if (c.ability === "Turbo Drift") {
      user.dashMul = 2.05;
      user.dashUntil = t + 1.4;
      user.vx = (enemy.x >= user.x ? 1 : -1) * moveSpeed(user) * 0.9;
      const shot = spawnDirectShot(user, enemy, 1.1, 0, 0.9);
      setStatus(`${user.name} used Turbo Drift! Dash engaged${shot ? " with a quick shot." : "."}`);
      return;
    }

    if (c.ability === "Sky Spike") {
      user.vy = JUMP_VY_BASE * 1.65;
      user.canJump = false;
      const shot = spawnDirectShot(user, enemy, 1.18, -0.35, 0.92);
      setStatus(`${user.name} used Sky Spike! ${shot ? "Spike shot launched." : "Leapt skyward."}`);
      return;
    }

    if (c.ability === "Cadet Drill") {
      let fired = 0;
      for (const off of [-0.08, 0.08]) {
        if (spawnDirectShot(user, enemy, 1.05, off, 0.88)) fired++;
      }
      if (user.heldBall) throwBall(which);
      setStatus(`${user.name} used Cadet Drill! Fired ${fired} practice shots.`);
      return;
    }

    if (c.ability === "Comet Rush") {
      user.dashMul = 1.8;
      user.dashUntil = t + 1.2;
      const shot = spawnDirectShot(user, enemy, 1.16, 0, 1.0, "fire");
      if (user.heldBall) throwBall(which);
      setStatus(`${user.name} used Comet Rush! ${shot ? "Burning shot launched." : "Dash active."}`);
      return;
    }

    if (c.ability === "Cold Snap") {
      if (Math.abs(user.x - enemy.x) <= FREEZE_RANGE + 30) {
        enemy.frozenUntil = t + 1.9;
      }
      const b = nearestLooseBall(user);
      if (b) {
        const dx = user.x - b.x;
        const dy = (user.y - user.h * 0.6) - b.y;
        const len = Math.hypot(dx, dy) || 1;
        b.vx = (dx / len) * (AERO_PULL_SPEED * 0.85);
        b.vy = (dy / len) * (AERO_PULL_SPEED * 0.85);
        b.inFlight = true;
        b.lastThrower = user.name;
        b.bounces = 0;
        b.cooldown = 0.1;
        b.pullTo = user.name;
      }
      setStatus(`${user.name} used Cold Snap!`);
      return;
    }

    if (c.ability === "Ember Arc") {
      let fired = 0;
      for (const off of [-0.24, -0.08, 0.08, 0.24]) {
        if (spawnDirectShot(user, enemy, 1.08, off, 0.86, "fire")) fired++;
      }
      if (user.heldBall) throwBall(which);
      setStatus(`${user.name} used Ember Arc! Fired ${fired} flame shots.`);
      return;
    }

    if (c.ability === "Iron Guard") {
      user.invulnUntil = Math.max(user.invulnUntil, t + 2.8);
      user.boxUntil = Math.max(user.boxUntil, t + 1.6);
      setStatus(`${user.name} used Iron Guard! Shielded and fortified.`);
      return;
    }

    if (c.ability === "Glacier Grip") {
      enemy.frozenUntil = t + 2.2;
      const moved = pullFloorBallsToSide(user);
      setStatus(`${user.name} used Glacier Grip! Froze ${enemy.name} and dragged ${moved} floor balls.`);
      return;
    }

    if (c.ability === "Wildfire Spin") {
      let fired = 0;
      for (const off of [-0.34, -0.17, 0, 0.17, 0.34]) {
        if (spawnDirectShot(user, enemy, 1.12, off, 0.84, "fire")) fired++;
      }
      setStatus(`${user.name} used Wildfire Spin! Fired ${fired} burning shots.`);
      return;
    }

    if (c.ability === "Thunder Call") {
      user.stormRainUntil = t + 3.4;
      user.stormNextRainAt = t;
      enemy.frozenUntil = t + 1.0;
      setStatus(`${user.name} used Thunder Call! Lightning rain started.`);
      return;
    }

    if (c.ability === "Phase Shift") {
      const dir = enemy.x >= user.x ? 1 : -1;
      user.x = clamp(enemy.x - dir * 64, 26, W - 26);
      user.invulnUntil = Math.max(user.invulnUntil, t + 1.4);
      user.facing = dir;
      const shot = spawnDirectShot(user, enemy, 1.15, 0, 0.94);
      setStatus(`${user.name} used Phase Shift! ${shot ? "Phased behind and attacked." : "Phased behind the target."}`);
      return;
    }

    if (c.ability === "Jetstream Orbit") {
      let pulled = 0;
      for (const b of balls) {
        if (b.heldBy) continue;
        const dx = user.x - b.x;
        const dy = (user.y - user.h * 0.55) - b.y;
        const len = Math.hypot(dx, dy) || 1;
        if (len > 320) continue;
        b.vx = (dx / len) * (AERO_PULL_SPEED * 1.05);
        b.vy = (dy / len) * (AERO_PULL_SPEED * 1.05);
        b.inFlight = true;
        b.lastThrower = user.name;
        b.bounces = 0;
        b.cooldown = 0.1;
        b.pullTo = user.name;
        pulled++;
      }
      setStatus(`${user.name} used Jetstream Orbit! Pulled ${pulled} loose balls inward.`);
      return;
    }

    if (c.ability === "Fortress Grid") {
      user.boxUntil = t + (BUILDER_BOX_DURATION + 1.2);
      user.invulnUntil = Math.max(user.invulnUntil, t + 1.0);
      user.vx = 0;
      setStatus(`${user.name} used Fortress Grid! Reinforced box shield deployed.`);
      return;
    }

    if (c.ability === "Monsoon Surge") {
      user.stormRainUntil = t + 3.1;
      user.stormNextRainAt = t;
      let shifted = 0;
      for (const b of balls) {
        if (b.heldBy) continue;
        if (b.y + b.r < groundY - 40) continue;
        const dir = user === P1 ? -1 : 1;
        b.vx = dir * 320;
        b.vy = -120;
        b.inFlight = true;
        b.lastThrower = user.name;
        b.bounces = 0;
        b.cooldown = 0.1;
        shifted++;
      }
      setStatus(`${user.name} used Monsoon Surge! Storm active and ${shifted} balls pushed across court.`);
      return;
    }

    if (c.ability === "Rookie Common Power") {
      const shot = spawnDirectShot(user, enemy, ROOKIE_SHOT_SPEED_MUL, 0, 0.96);
      if (user.heldBall) throwBall(which);
      if (shot) setStatus(`${user.name} used Rookie Common Power! Bonus shot fired.`);
      return;
    }

    if (c.ability === "Slugger Common Power") {
      let slammed = 0;
      for (const b of balls) {
        if (b.heldBy) continue;
        const dir = enemy.x >= b.x ? 1 : -1;
        b.vx = dir * SLUGGER_SHOCKWAVE_SPEED;
        b.vy = -220;
        b.inFlight = true;
        b.lastThrower = user.name;
        b.bounces = 0;
        b.cooldown = 0.12;
        b.pullTo = null;
        slammed++;
      }
      setStatus(`${user.name} used Slugger Common Power! Shockwave launched ${slammed} loose balls.`);
      return;
    }

    if (c.ability === "Sprinter Common Power") {
      user.dashMul = SPRINTER_DASH_MUL;
      user.dashUntil = t + SPRINTER_DASH_DURATION;
      setStatus(`${user.name} used Sprinter Common Power! Dash active for ${SPRINTER_DASH_DURATION.toFixed(1)}s.`);
      return;
    }

    if (c.ability === "Hopper Common Power") {
      user.vy = JUMP_VY_BASE * HOPPER_SUPER_JUMP_MUL;
      user.canJump = false;
      setStatus(`${user.name} used Hopper Common Power! Super jump!`);
      return;
    }

    if (c.ability === "Blaze Rare Power") {
      let fired = 0;
      for (let i = 0; i < BLAZE_BURST_SHOTS; i++) {
        const tShot = BLAZE_BURST_SHOTS <= 1 ? 0 : (i / (BLAZE_BURST_SHOTS - 1)) * 2 - 1;
        const off = tShot * BLAZE_BURST_SPREAD_RAD;
        if (spawnDirectShot(user, enemy, BLAZE_BURST_SPEED_MUL, off, 0.9)) fired++;
      }
      if (user.heldBall) throwBall(which);
      setStatus(`${user.name} used Blaze Rare Power! Fired ${fired} flame shots.`);
      return;
    }

    if (c.ability === "Tank Rare Power") {
      user.invulnUntil = Math.max(user.invulnUntil, t + TANK_FORTIFY_DURATION);
      setStatus(`${user.name} used Tank Rare Power! Fortified for ${TANK_FORTIFY_DURATION.toFixed(1)}s.`);
      return;
    }

    if (c.ability === "Storm Epic Power") {
      user.stormRainUntil = t + STORM_RAIN_DURATION;
      user.stormNextRainAt = t;
      setStatus(`${user.name} used Storm Epic Power! Ball rain for ${STORM_RAIN_DURATION.toFixed(0)} seconds.`);
      return;
    }

    if (c.ability === "Aero Epic Power") {
      const b = nearestLooseBall(user);
      if (!b) {
        setStatus(`${user.name} used Aero Epic Power, but no loose ball was available.`);
        return;
      }
      const dx = user.x - b.x;
      const dy = (user.y - user.h * 0.6) - b.y;
      const len = Math.hypot(dx, dy) || 1;
      b.vx = (dx / len) * AERO_PULL_SPEED;
      b.vy = (dy / len) * AERO_PULL_SPEED;
      b.inFlight = true;
      b.lastThrower = user.name;
      b.bounces = 0;
      b.cooldown = 0.1;
      b.pullTo = user.name;
      setStatus(`${user.name} used Aero Epic Power! Wind pull engaged.`);
      return;
    }
  }

  // ===================== MOVEMENT =====================
  function nearbySwarmCount(target){
    let count = 0;
    const tx = target.x;
    const ty = target.y - target.h * 0.45;
    for (const z of zombies) {
      if (z.target !== target.name) continue;
      if (Math.hypot(z.x - tx, z.y - ty) <= ZOMBIE_SWARM_LOCK_RADIUS + z.r) count++;
    }
    return count;
  }

  function isSwarmRooted(target){
    return nearbySwarmCount(target) >= ZOMBIE_ROOT_COUNT;
  }

  function randomBlindDir() {
    const r = rand01();
    if (r < 0.25) return -1;
    if (r < 0.5) return 1;
    return 0;
  }

  function applyBlindMovement(p, t, speedMul) {
    if (t >= p.blindNextDirAt) {
      p.blindDir = randomBlindDir();
      p.blindNextDirAt = t + BLIND_DIR_MIN_SEC + rand01() * (BLIND_DIR_MAX_SEC - BLIND_DIR_MIN_SEC);
    }
    p.vx = p.blindDir * moveSpeed(p) * speedMul;
    if (p.blindDir !== 0) p.facing = p.blindDir;
  }

  function updateBossAI(dt){
    const p = P2;
    const enemy = P1;
    const t = nowSec();
    if (!p.alive) return;

    const rootedBySwarm = isSwarmRooted(p);
    let dir = 0;

    if (t < p.boxUntil || t < p.frozenUntil || rootedBySwarm) {
      p.vx = 0;
    } else {
      if (t < p.blackoutUntil) {
        applyBlindMovement(p, t, 0.92);
      } else {
        let targetX = p.x;
        if (!p.heldBall) {
          const b = nearestPickableBall(p);
          targetX = b ? b.x : (enemy.x + 190);
        } else {
          targetX = enemy.x + 210;
        }
        targetX = clamp(targetX, midX + 18, W - 24);
        if (Math.abs(targetX - p.x) > 8) dir = (targetX > p.x ? 1 : -1);
        p.vx = dir * moveSpeed(p) * 0.92;
        if (dir !== 0) p.facing = dir;
      }
    }

    if (p.canJump && t >= bossNextJumpAt) {
      const underThreat = enemy.heldBall && Math.abs(enemy.x - p.x) < 260;
      if (underThreat || rand01() < 0.12) {
        p.vy = jumpVy(p);
        p.canJump = false;
      }
      bossNextJumpAt = t + 0.55 + rand01() * 0.9;
    }

    const canUseAbility = getCharById(p.charId).ability !== "none";
    if (t >= bossNextActionAt) {
      if (p.heldBall) {
        if (canUseAbility && t >= bossNextAbilityAt && rand01() < 0.35) {
          useAbility("p2");
          bossNextAbilityAt = t + 2.6 + rand01() * 2.2;
        } else {
          throwBall("p2");
        }
        bossNextActionAt = t + 0.45 + rand01() * 0.55;
      } else if (canUseAbility && t >= bossNextAbilityAt && rand01() < 0.08) {
        useAbility("p2");
        bossNextAbilityAt = t + 3.0 + rand01() * 2.5;
        bossNextActionAt = t + 0.35 + rand01() * 0.45;
      }
    }

    p.vy += GRAVITY * dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;

    if (p.y > groundY){
      p.y = groundY;
      p.vy = 0;
      p.canJump = true;
    }

    p.x = clamp(p.x, midX + 12, W - 20);
  }

  function updateTeamBossAI(dt){
    const p = BOSS;
    const enemy = getNearestAliveHero(p.x);
    const t = nowSec();
    if (!p.alive) return;

    const rootedBySwarm = isSwarmRooted(p);
    let dir = 0;

    if (t < p.boxUntil || t < p.frozenUntil || rootedBySwarm) {
      p.vx = 0;
    } else {
      if (t < p.blackoutUntil) {
        applyBlindMovement(p, t, 0.95);
      } else {
        let targetX = p.x;
        if (!p.heldBall) {
          const b = nearestPickableBall(p);
          targetX = b ? b.x : (enemy.x + 210);
        } else {
          targetX = enemy.x + 220;
        }
        targetX = clamp(targetX, midX + 18, W - 24);
        if (Math.abs(targetX - p.x) > 8) dir = (targetX > p.x ? 1 : -1);
        p.vx = dir * moveSpeed(p) * 0.95;
        if (dir !== 0) p.facing = dir;
      }
    }

    if (p.canJump && t >= bossNextJumpAt) {
      const underThreat = (P1.heldBall && Math.abs(P1.x - p.x) < 280) || (P2.heldBall && Math.abs(P2.x - p.x) < 280);
      if (underThreat || rand01() < 0.14) {
        p.vy = jumpVy(p);
        p.canJump = false;
      }
      bossNextJumpAt = t + 0.5 + rand01() * 0.8;
    }

    if (t >= bossNextActionAt) {
      if (p.heldBall) {
        if (t >= bossNextAbilityAt && rand01() < 0.45) {
          useAbility("boss");
          bossNextAbilityAt = t + 2.2 + rand01() * 1.7;
        } else {
          throwBall("boss");
        }
        bossNextActionAt = t + 0.35 + rand01() * 0.45;
      } else if (t >= bossNextAbilityAt && rand01() < 0.12) {
        useAbility("boss");
        bossNextAbilityAt = t + 2.8 + rand01() * 2.0;
        bossNextActionAt = t + 0.3 + rand01() * 0.35;
      }
    }

    p.vy += GRAVITY * dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;

    if (p.y > groundY){
      p.y = groundY;
      p.vy = 0;
      p.canJump = true;
    }

    p.x = clamp(p.x, midX + 12, W - 20);
  }

  function updatePlayer(p, dt, leftKey, rightKey, jumpKey){
    const t = nowSec();
    if (!p.alive) return;
    const rootedBySwarm = isSwarmRooted(p);

    if (t < p.boxUntil) {
      p.vx = 0;
    } else if (t < p.frozenUntil) {
      p.vx = 0;
    } else if (rootedBySwarm) {
      p.vx = 0;
    } else {
      let dir = 0;
      if (keys.has(leftKey)) dir -= 1;
      if (keys.has(rightKey)) dir += 1;
      p.vx = dir * moveSpeed(p);
      if (dir !== 0) p.facing = dir;

      if (!rootedBySwarm && keys.has(jumpKey) && p.canJump){
        p.vy = jumpVy(p);
        p.canJump = false;
      }
    }

    p.vy += GRAVITY * dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;

    if (p.y > groundY){
      p.y = groundY;
      p.vy = 0;
      p.canJump = true;
    }

    // no crossing the center line
    const margin = 12;
    if (teamBossMode) {
      if (p === BOSS) p.x = clamp(p.x, midX + margin, W - 20);
      else p.x = clamp(p.x, 20, midX - margin);
    } else {
      if (p === P1) p.x = clamp(p.x, 20, midX - margin);
      else          p.x = clamp(p.x, midX + margin, W - 20);
    }
  }

  // ===================== BALL PHYSICS =====================
  function updateBall(b, dt){
    if (b.cooldown > 0) b.cooldown -= dt;
    if (b.heldBy) return;

    if (b.pullTo) {
      const target = b.pullTo === "P1" ? P1 : (b.pullTo === "P2" ? P2 : BOSS);
      const tx = target.x;
      const ty = target.y - target.h * 0.45;
      const dx = tx - b.x;
      const dy = ty - b.y;
      const len = Math.hypot(dx, dy) || 1;
      const homingSpeed = ICE_TORNADO_PULL_SPEED;

      b.vx = (dx / len) * homingSpeed;
      b.vy = (dy / len) * homingSpeed;

      if (circleRectHit(b.x, b.y, b.r, playerRect(target))) {
        b.pullTo = null;
        if (!target.heldBall && target.alive) {
          attachBallToPlayer(b, target);
          return;
        }
        b.vx = 0;
        b.vy = 0;
        b.inFlight = false;
        b.x = target.x;
        b.y = groundY - b.r;
        return;
      }
    }

    b.vy += GRAVITY * dt;
    b.x += b.vx * dt;
    b.y += b.vy * dt;

    if (b.y + b.r > groundY) {
      b.y = groundY - b.r;
      b.vy *= -0.55;
      b.vx *= 0.82;
      b.bounces++;
      if (Math.abs(b.vy) < 60) b.vy = 0;
      if (Math.abs(b.vx) < 10) b.vx = 0;
    }

    if (b.x - b.r < 0) { b.x = b.r; b.vx *= -0.7; }
    if (b.x + b.r > W) { b.x = W - b.r; b.vx *= -0.7; }

    b.inFlight = Math.hypot(b.vx, b.vy) > 40;
  }

  // ===================== HITS =====================
  function playerRect(p){ return { x:p.x-p.w/2, y:p.y-p.h, w:p.w, h:p.h }; }

  function circleRectHit(cx, cy, cr, r) {
    const nx = clamp(cx, r.x, r.x + r.w);
    const ny = clamp(cy, r.y, r.y + r.h);
    const dx = cx - nx, dy = cy - ny;
    return (dx*dx + dy*dy) <= cr*cr;
  }

  function checkHits(){
    const r1 = playerRect(P1);
    const r2 = playerRect(P2);
    const rb = playerRect(BOSS);
    const t = nowSec();

    for (const b of balls){
      if (b.heldBy) continue;
      if (!b.inFlight) continue;
      if (b.bounces > MAX_BOUNCES_TO_HIT) continue;

      const spd = Math.hypot(b.vx, b.vy);
      if (spd < MIN_HIT_SPEED) continue;

      if (teamBossMode) {
        if (P1.alive && b.lastThrower === "BOSS" && circleRectHit(b.x,b.y,b.r,r1)) {
          if (t < P1.invulnUntil) continue;
          if (nowSec() < P1.boxUntil) {
            b.vx = Math.abs(b.vx) + 180;
            b.vy = -Math.abs(b.vy) * 0.6;
            b.inFlight = true;
            b.lastThrower = "P1";
            b.cooldown = 0.1;
            continue;
          }
          if (P1.extraLives > 0) {
            P1.extraLives--;
            P1.invulnUntil = t + REVIVE_INVULN_SEC;
            b.vx = Math.abs(b.vx) + 140;
            b.vy = -Math.abs(b.vy) * 0.55;
            b.inFlight = true;
            b.lastThrower = "P1";
            b.cooldown = 0.12;
            setStatus(`P1 revived! Lives left: ${P1.extraLives}`);
            continue;
          }
          P1.alive = false;
          if (!P2.alive) { endRound("BOSS"); return; }
          continue;
        }

        if (P2.alive && b.lastThrower === "BOSS" && circleRectHit(b.x,b.y,b.r,r2)) {
          if (t < P2.invulnUntil) continue;
          if (nowSec() < P2.boxUntil) {
            b.vx = -Math.abs(b.vx) - 180;
            b.vy = -Math.abs(b.vy) * 0.6;
            b.inFlight = true;
            b.lastThrower = "P2";
            b.cooldown = 0.1;
            continue;
          }
          if (P2.extraLives > 0) {
            P2.extraLives--;
            P2.invulnUntil = t + REVIVE_INVULN_SEC;
            b.vx = -Math.abs(b.vx) - 140;
            b.vy = -Math.abs(b.vy) * 0.55;
            b.inFlight = true;
            b.lastThrower = "P2";
            b.cooldown = 0.12;
            setStatus(`P2 revived! Lives left: ${P2.extraLives}`);
            continue;
          }
          P2.alive = false;
          if (!P1.alive) { endRound("BOSS"); return; }
          continue;
        }

        if (BOSS.alive && (b.lastThrower === "P1" || b.lastThrower === "P2") && circleRectHit(b.x,b.y,b.r,rb)) {
          if (t < BOSS.invulnUntil) continue;
          if (nowSec() < BOSS.boxUntil) {
            b.vx = -Math.abs(b.vx) - 180;
            b.vy = -Math.abs(b.vy) * 0.6;
            b.inFlight = true;
            b.lastThrower = "BOSS";
            b.cooldown = 0.1;
            continue;
          }
          if (BOSS.extraLives > 0) {
            BOSS.extraLives--;
            BOSS.invulnUntil = t + REVIVE_INVULN_SEC;
            b.vx = -Math.abs(b.vx) - 150;
            b.vy = -Math.abs(b.vy) * 0.55;
            b.inFlight = true;
            b.lastThrower = "BOSS";
            b.cooldown = 0.12;
            setStatus(`BOSS resisted a KO! Lives left: ${BOSS.extraLives}`);
            continue;
          }
          BOSS.alive = false;
          endRound("TEAM");
          return;
        }
        continue;
      }

      if (P1.alive && b.lastThrower === "P2" && circleRectHit(b.x,b.y,b.r,r1)) {
        if (t < P1.invulnUntil) continue;
        if (nowSec() < P1.boxUntil) {
          b.vx = Math.abs(b.vx) + 180;
          b.vy = -Math.abs(b.vy) * 0.6;
          b.inFlight = true;
          b.lastThrower = "P1";
          b.cooldown = 0.1;
          continue;
        }
        if (P1.extraLives > 0) {
          P1.extraLives--;
          P1.invulnUntil = t + REVIVE_INVULN_SEC;
          b.vx = Math.abs(b.vx) + 140;
          b.vy = -Math.abs(b.vy) * 0.55;
          b.inFlight = true;
          b.lastThrower = "P1";
          b.cooldown = 0.12;
          setStatus(`P1 revived by Zombie Witch! Lives left: ${P1.extraLives}`);
          continue;
        }
        P1.alive = false;
        endRound("P2");
        return;
      }

      if (P2.alive && b.lastThrower === "P1" && circleRectHit(b.x,b.y,b.r,r2)) {
        if (t < P2.invulnUntil) continue;
        if (nowSec() < P2.boxUntil) {
          b.vx = -Math.abs(b.vx) - 180;
          b.vy = -Math.abs(b.vy) * 0.6;
          b.inFlight = true;
          b.lastThrower = "P2";
          b.cooldown = 0.1;
          continue;
        }
        if (P2.extraLives > 0) {
          P2.extraLives--;
          P2.invulnUntil = t + REVIVE_INVULN_SEC;
          b.vx = -Math.abs(b.vx) - 140;
          b.vy = -Math.abs(b.vy) * 0.55;
          b.inFlight = true;
          b.lastThrower = "P2";
          b.cooldown = 0.12;
          setStatus(`P2 revived by Zombie Witch! Lives left: ${P2.extraLives}`);
          continue;
        }
        P2.alive = false;
        endRound("P1");
        return;
      }
    }
  }

  function updateZombies(dt){
    const t = nowSec();
    for (let i = zombies.length - 1; i >= 0; i--) {
      const z = zombies[i];
      if (t >= z.until) {
        zombies.splice(i, 1);
        continue;
      }
      const target = z.target === "P1" ? P1 : (z.target === "P2" ? P2 : BOSS);
      if (!target.alive) {
        zombies.splice(i, 1);
        continue;
      }
      const slot = z.slot || 0;
      const ring = Math.floor(slot / 2);
      const side = (slot % 2 === 0) ? -1 : 1;
      const tx = target.x + side * (target.w * 0.45 + 8 + ring * 8);
      const ty = target.y - target.h * (0.45 + (ring % 2) * 0.06);
      const dx = tx - z.x;
      const dy = ty - z.y;
      const len = Math.hypot(dx, dy) || 1;
      const desiredVx = (dx / len) * ZOMBIE_SPEED;
      const desiredVy = (dy / len) * ZOMBIE_SPEED;
      const blend = clamp(ZOMBIE_TURN * dt, 0, 1);
      z.vx += (desiredVx - z.vx) * blend;
      z.vy += (desiredVy - z.vy) * blend;
      z.x += z.vx * dt;
      z.y += z.vy * dt;
      z.x = clamp(z.x, z.r, W - z.r);
      z.y = clamp(z.y, 10, groundY - 12);
    }
  }

  function checkZombieHits(){
    const t = nowSec();
    for (let i = zombies.length - 1; i >= 0; i--) {
      const z = zombies[i];
      const target = z.target === "P1" ? P1 : (z.target === "P2" ? P2 : BOSS);
      if (!target.alive) {
        zombies.splice(i, 1);
        continue;
      }
      if (t < target.invulnUntil) continue;
      if (!circleRectHit(z.x, z.y, z.r, playerRect(target))) continue;
      if (t < (z.nextCurseAt || 0)) continue;
      target.slowStacks = clamp((target.slowStacks || 0) + 1, 0, ZOMBIE_MAX_SLOW_STACKS);
      z.nextCurseAt = t + ZOMBIE_CURSE_INTERVAL;
      if (target.slowStacks >= ZOMBIE_MAX_SLOW_STACKS) {
        setStatus(`${z.owner}'s zombies pinned ${target.name}!`);
      } else {
        setStatus(`${z.owner}'s zombie cursed ${target.name}! Slow stacks: ${target.slowStacks}/${ZOMBIE_MAX_SLOW_STACKS}`);
      }
    }
  }

  // ===================== SPAWNER =====================
  function trySpawnBall(){
    const t = nowSec();
    if (t < nextSpawnAt) return;
    while (t >= nextSpawnAt) nextSpawnAt += CFG.SPAWN_EVERY;
    if (balls.length >= CFG.MAX_BALLS) return;

    const off = (Math.random()*120) - 60;
    balls.push(makeBall(midX + off, groundY - 30));
  }

  // ===================== TOWER DEFENSE =====================
  function resetTowerDefenseState() {
    towerDefense.owner = towerDefenseRosterOwner();
    towerDefense.selectedCharId = "rookie";
    towerDefense.selectedCharIdP1 = "rookie";
    towerDefense.selectedCharIdP2 = "rookie";
    towerDefense.lanes.P1 = makeTDLaneState();
    towerDefense.lanes.P2 = makeTDLaneState();
    syncTowerDefenseSelection();
    towerDefense.towers = [];
    for (const which of tdOwners()) {
      const lane = tdLane(which);
      lane.nextWaveAt = nowSec() + 1.25;
      lane.message = towerDefense.owner === "BOTH"
        ? `${which}: select a tower below, then click your side to place it.`
        : "Click a character in the bottom bar, then click the arena to place a tower.";
      lane.messageUntil = nowSec() + 6;
    }
    updateScoreboard();
    setStatus(`Tower Defense ready for ${towerDefenseOwnerLabel()}.`);
  }

  function startTowerDefenseFromLobby() {
    if (!activeUserP1) activeUserP1 = "__GUEST_P1__";
    if (!activeUserP2) activeUserP2 = "__GUEST_P2__";
    ensureGuestProfiles();
    towerDefenseMode = true;
    bossMode = false;
    teamBossMode = false;
    running = true;
    lobbyEl.style.display = "none";
    resetTowerDefenseState();
  }

  function awardTowerDefenseCoins(reason, which = towerDefense.owner, silent = false) {
    if (!towerDefenseMode) return;
    if (which === "BOTH") {
      awardTowerDefenseCoins(reason, "P1", true);
      awardTowerDefenseCoins(reason, "P2", true);
      if (!silent) setStatus(`${reason} Awarded saved tower-defense coins.`);
      return;
    }
    const lane = tdLane(which);
    if (!lane || lane.finalRewardGranted) return;
    lane.finalRewardGranted = true;
    lane.finished = true;
    addCoins(which, lane.coinsEarned);
    if (!silent) setStatus(`${reason} ${which} earned ${lane.coinsEarned} coins.`);
  }

  function towerCountForCharacter(charId, which = null) {
    return towerDefense.towers.filter(t => t.charId === charId && (!which || t.owner === which)).length;
  }

  function tdTowerRadius(char) {
    return 135 + char.throwMul * 115;
  }

  function tdTowerCooldown(char) {
    return clamp(1.2 - (char.speedMul - 1) * 0.45, 0.45, 1.25);
  }

  function tdTowerDamage(char) {
    return Math.round(14 + char.throwMul * 11 + char.jumpMul * 3);
  }

  function tdEnemyTemplate(which, wave, index) {
    const bounds = tdArenaBounds(which);
    const pathY = tdPathY(which);
    const tier = Math.max(0, Math.floor((wave - 1) / TD_BOSS_WAVE_INTERVAL));
    const hp = 42 + wave * 18 + index * 3 + tier * 55;
    return {
      owner: which,
      x: bounds.left - 30 - index * 18,
      y: pathY + TD_PATH_H / 2 + (rand01() * 18 - 9),
      hp,
      maxHp: hp,
      speed: 38 + wave * 5 + tier * 6 + rand01() * 10,
      r: 14 + Math.min(9, Math.floor(wave / 3) + tier),
      frozenUntil: 0,
      burnUntil: 0,
      burnTickAt: 0,
      slowMul: 1,
      tier
    };
  }

  function tdBossTemplate(which, wave) {
    const bounds = tdArenaBounds(which);
    const pathY = tdPathY(which);
    const tier = Math.max(1, Math.floor(wave / TD_BOSS_WAVE_INTERVAL));
    const hp = 420 + tier * 190 + wave * 22;
    return {
      owner: which,
      x: bounds.left - 68,
      y: pathY + TD_PATH_H / 2,
      hp,
      maxHp: hp,
      speed: 26 + tier * 3,
      r: 26 + Math.min(10, tier * 2),
      frozenUntil: 0,
      burnUntil: 0,
      burnTickAt: 0,
      slowMul: 1,
      isBoss: true,
      bossTier: tier,
      contactDamage: 3 + Math.floor(tier / 2)
    };
  }

  function queueTowerDefenseWave(which) {
    const lane = tdLane(which);
    if (!lane || lane.finished) return;
    lane.wave++;
    lane.waveResolved = false;
    const count = 4 + lane.wave * 2;
    const enemyTier = Math.max(0, Math.floor((lane.wave - 1) / TD_BOSS_WAVE_INTERVAL));
    const bossWave = lane.wave % TD_BOSS_WAVE_INTERVAL === 0;
    lane.spawnQueue = [];
    for (let i = 0; i < count; i++) lane.spawnQueue.push(tdEnemyTemplate(which, lane.wave, i));
    if (bossWave) {
      lane.spawnQueue.push(tdBossTemplate(which, lane.wave));
    }
    lane.nextSpawnAt = nowSec() + 0.8;
    lane.message = bossWave
      ? `Wave ${lane.wave} boss incoming`
      : `Wave ${lane.wave} incoming${enemyTier > 0 ? ` • Tier ${enemyTier + 1}` : ""}`;
    lane.messageUntil = nowSec() + 2.2;
    setStatus(
      bossWave
        ? `${which} wave ${lane.wave} started. Boss wave.`
        : `${which} wave ${lane.wave} started.${enemyTier > 0 ? ` Enemy tier ${enemyTier + 1}.` : ""}`
    );
  }

  function placeTowerAt(x, y) {
    syncTowerDefenseSelection();
    const owner = towerDefensePlacementOwner(x);
    const pathY = tdPathY(owner);
    const char = getCharById(towerDefenseSelectedCharId(owner));
    const rarityCap = TD_RARITY_LIMITS[char.rarity] || 2;
    if (towerCountForCharacter(char.id, owner) >= rarityCap) {
      setStatus(`${owner} ${char.name} is capped at ${rarityCap} placements.`);
      return;
    }
    if (y >= H - TD_PANEL_H - 8) {
      setStatus("Place towers in the arena, not the roster bar.");
      return;
    }
    if (y >= pathY - 22 && y <= pathY + TD_PATH_H + 22) {
      setStatus("Keep towers off the path.");
      return;
    }
    const bounds = tdArenaBounds(owner);
    const minX = bounds.left + 24;
    const maxX = bounds.right - 24;
    towerDefense.towers.push({
      id: `${char.id}_${towerDefense.towers.length + 1}_${Math.floor(nowSec() * 1000)}`,
      owner,
      charId: char.id,
      rarity: char.rarity,
      x: clamp(x, minX, maxX),
      y: clamp(y, 42, H - TD_PANEL_H - 22),
      range: tdTowerRadius(char),
      damage: tdTowerDamage(char),
      cooldown: tdTowerCooldown(char),
      nextShotAt: nowSec() + 0.2,
      nextAbilityAt: nowSec() + 5
    });
    setStatus(`${owner} placed ${char.name}. ${towerCountForCharacter(char.id, owner)}/${rarityCap}`);
  }

  function towerDefenseCardRects(which = towerDefense.owner) {
    const roster = getTowerRoster(which);
    const split = towerDefense.owner === "BOTH";
    const laneW = split ? Math.floor(W / 2) - 16 : W - 24;
    const laneX = split ? (which === "P2" ? Math.floor(W / 2) + 8 : 8) : 12;
    const cardW = Math.min(74, Math.floor(laneW / Math.max(roster.length, 1)) - 4);
    const gap = 4;
    const totalW = roster.length * cardW + Math.max(0, roster.length - 1) * gap;
    const startX = laneX + Math.max(0, Math.floor((laneW - totalW) / 2));
    const y = H - TD_PANEL_H + 12;
    return roster.map((char, i) => ({
      owner: which,
      char,
      x: startX + i * (cardW + gap),
      y,
      w: cardW,
      h: 68
    }));
  }

  function findTowerTarget(tower, lane) {
    let best = null;
    let bestScore = -1;
    for (const enemy of lane.enemies) {
      const d = Math.hypot(enemy.x - tower.x, enemy.y - tower.y);
      if (d > tower.range) continue;
      if (enemy.x > bestScore) {
        best = enemy;
        bestScore = enemy.x;
      }
    }
    return best;
  }

  function spawnTowerShot(tower, enemy, lane, speedMul = 1, damageMul = 1, visual = "normal", sizeMul = 1) {
    const dx = enemy.x - tower.x;
    const dy = enemy.y - tower.y;
    const len = Math.hypot(dx, dy) || 1;
    lane.shots.push({
      owner: tower.owner,
      x: tower.x,
      y: tower.y - 20,
      vx: (dx / len) * 420 * speedMul,
      vy: (dy / len) * 420 * speedMul,
      r: BALL_R * 0.7 * sizeMul,
      damage: tower.damage * damageMul,
      visual,
      expiresAt: nowSec() + 2.5
    });
  }

  function damageEnemy(enemy, amount, lane) {
    enemy.hp -= amount;
    if (enemy.hp > 0) return false;
    lane.defeated++;
    lane.enemies.splice(lane.enemies.indexOf(enemy), 1);
    return true;
  }

  function useTowerAbility(tower, lane) {
    const char = getCharById(tower.charId);
    const target = findTowerTarget(tower, lane);
    if (!target) return;
    const t = nowSec();

    if (char.ability === "freeze" || char.ability === "iceControl") {
      for (const enemy of lane.enemies) {
        if (Math.hypot(enemy.x - tower.x, enemy.y - tower.y) <= tower.range * 0.85) {
          enemy.frozenUntil = t + (char.ability === "iceControl" ? 1.8 : 1.2);
        }
      }
      return;
    }

    if (char.ability === "fireMaster") {
      for (const enemy of lane.enemies) {
        if (Math.hypot(enemy.x - tower.x, enemy.y - tower.y) <= tower.range * 0.8) {
          enemy.burnUntil = t + 3;
          enemy.burnTickAt = t + 0.4;
        }
      }
      return;
    }

    if (char.ability === "Anchor Crash") {
      spawnTowerShot(tower, target, lane, 0.92, 1.9, "power", 1.25);
      return;
    }

    if (char.ability === "Turbo Drift") {
      for (const off of [-55, 55]) {
        spawnTowerShot(tower, target, lane, 1.4, 0.7, "normal", 0.8);
        lane.shots[lane.shots.length - 1].vy += off;
      }
      return;
    }

    if (char.ability === "Sky Spike") {
      spawnTowerShot(tower, target, lane, 1.18, 1.0, "normal", 0.95);
      lane.shots[lane.shots.length - 1].x = target.x;
      lane.shots[lane.shots.length - 1].y = 10;
      lane.shots[lane.shots.length - 1].vx = 0;
      lane.shots[lane.shots.length - 1].vy = 520;
      return;
    }

    if (char.ability === "Cadet Drill") {
      for (const off of [-35, 35]) {
        spawnTowerShot(tower, target, lane, 1.12, 0.78, "power", 0.82);
        lane.shots[lane.shots.length - 1].vy += off;
      }
      return;
    }

    if (char.ability === "Comet Rush") {
      spawnTowerShot(tower, target, lane, 1.3, 1.0, "fire", 1.0);
      return;
    }

    if (char.ability === "Cold Snap") {
      target.frozenUntil = t + 1.7;
      for (const enemy of lane.enemies) {
        if (enemy === target) continue;
        if (Math.hypot(enemy.x - target.x, enemy.y - target.y) <= 54) enemy.slowMul = Math.min(enemy.slowMul, 0.6);
      }
      return;
    }

    if (char.ability === "Ember Arc") {
      for (const off of [-90, -30, 30, 90]) {
        spawnTowerShot(tower, target, lane, 1.12, 0.62, "fire", 0.78);
        lane.shots[lane.shots.length - 1].vy += off;
      }
      return;
    }

    if (char.ability === "Iron Guard") {
      tower.nextShotAt = Math.min(tower.nextShotAt, t + 0.02);
      tower.damage = Math.min(tower.damage + 1, tdTowerDamage(char) + 6);
      return;
    }

    if (char.ability === "Glacier Grip") {
      for (const enemy of lane.enemies) {
        if (Math.hypot(enemy.x - tower.x, enemy.y - tower.y) <= tower.range * 0.78) {
          enemy.frozenUntil = t + 1.45;
          enemy.slowMul = Math.min(enemy.slowMul, 0.52);
        }
      }
      return;
    }

    if (char.ability === "Wildfire Spin") {
      for (const off of [-120, -60, 0, 60, 120]) {
        spawnTowerShot(tower, target, lane, 1.08, 0.54, "fire", 0.74);
        lane.shots[lane.shots.length - 1].vy += off;
      }
      return;
    }

    if (char.ability === "boss") {
      for (let i = -1; i <= 1; i++) {
        spawnTowerShot(tower, target, lane, 1.08, 0.82, "normal", 0.95);
        if (!lane.shots.length) break;
        lane.shots[lane.shots.length - 1].vy += i * 55;
      }
      return;
    }

    if (char.ability === "builderBox" || char.ability === "Tank Rare Power") {
      tower.nextShotAt = Math.min(tower.nextShotAt, t + 0.05);
      if (char.ability === "builderBox") {
        tower.range = Math.min(tower.range + 8, tdTowerRadius(char) + 40);
      }
      return;
    }

    if (char.ability === "Thunder Call") {
      target.frozenUntil = t + 0.9;
      for (let i = 0; i < 4; i++) {
        const enemy = lane.enemies[Math.floor(rand01() * lane.enemies.length)];
        if (!enemy) break;
        spawnTowerShot(tower, enemy, lane, 1.2, 0.66, "storm", 0.8);
        lane.shots[lane.shots.length - 1].x = enemy.x + (rand01() * 50 - 25);
        lane.shots[lane.shots.length - 1].y = 12;
        lane.shots[lane.shots.length - 1].vx = rand01() * 50 - 25;
        lane.shots[lane.shots.length - 1].vy = 500;
      }
      return;
    }

    if (char.ability === "Phase Shift") {
      const first = target;
      spawnTowerShot(tower, first, lane, 1.26, 1.18, "power", 0.98);
      const second = lane.enemies.find(enemy => enemy !== first && Math.hypot(enemy.x - tower.x, enemy.y - tower.y) <= tower.range);
      if (second) spawnTowerShot(tower, second, lane, 1.26, 0.92, "power", 0.9);
      return;
    }

    if (char.ability === "Storm Epic Power") {
      for (let i = 0; i < 3; i++) {
        const enemy = lane.enemies[Math.floor(rand01() * lane.enemies.length)];
        if (!enemy) break;
        spawnTowerShot(tower, enemy, lane, 1.15, 0.7, "storm", 0.78);
        lane.shots[lane.shots.length - 1].x = enemy.x + (rand01() * 40 - 20);
        lane.shots[lane.shots.length - 1].y = 18;
        lane.shots[lane.shots.length - 1].vx = rand01() * 40 - 20;
        lane.shots[lane.shots.length - 1].vy = 450;
      }
      return;
    }

    if (char.ability === "Jetstream Orbit") {
      for (const enemy of lane.enemies) {
        if (Math.hypot(enemy.x - tower.x, enemy.y - tower.y) <= tower.range) {
          enemy.slowMul = Math.min(enemy.slowMul, 0.48);
        }
      }
      for (const off of [-45, 45]) {
        spawnTowerShot(tower, target, lane, 1.18, 0.72, "normal", 0.84);
        lane.shots[lane.shots.length - 1].vy += off;
      }
      return;
    }

    if (char.ability === "Fortress Grid") {
      tower.range = Math.min(tower.range + 12, tdTowerRadius(char) + 60);
      tower.damage = Math.min(tower.damage + 1, tdTowerDamage(char) + 7);
      tower.nextShotAt = Math.min(tower.nextShotAt, t + 0.04);
      return;
    }

    if (char.ability === "Monsoon Surge") {
      for (const enemy of lane.enemies) {
        if (Math.hypot(enemy.x - tower.x, enemy.y - tower.y) <= tower.range * 0.9) {
          enemy.slowMul = Math.min(enemy.slowMul, 0.62);
        }
      }
      for (let i = 0; i < 5; i++) {
        const enemy = lane.enemies[Math.floor(rand01() * lane.enemies.length)];
        if (!enemy) break;
        spawnTowerShot(tower, enemy, lane, 1.08, 0.56, "storm", 0.76);
        lane.shots[lane.shots.length - 1].x = enemy.x + (rand01() * 60 - 30);
        lane.shots[lane.shots.length - 1].y = 14;
        lane.shots[lane.shots.length - 1].vx = rand01() * 36 - 18;
        lane.shots[lane.shots.length - 1].vy = 430;
      }
      return;
    }

    if (char.ability === "Blaze Rare Power") {
      for (let i = -1; i <= 1; i++) {
        spawnTowerShot(tower, target, lane, 1.1, 0.72, "fire", 0.82);
        lane.shots[lane.shots.length - 1].vy += i * 70;
      }
      return;
    }

    if (char.ability === "Aero Epic Power") {
      for (const enemy of lane.enemies) {
        if (Math.hypot(enemy.x - tower.x, enemy.y - tower.y) <= tower.range) {
          enemy.slowMul = 0.55;
        }
      }
      return;
    }

    spawnTowerShot(tower, target, lane, 1.25, 1.15, "power", 1.05);
  }

  function updateTowerDefense(dt) {
    const t = nowSec();
    let anyActive = false;

    for (const which of tdOwners()) {
      const lane = tdLane(which);
      if (!lane || lane.finished) continue;
      anyActive = true;

      if (lane.lives <= 0) {
        lane.message = `Base down on wave ${lane.wave}`;
        lane.messageUntil = t + 6;
        awardTowerDefenseCoins("Base lost.", which);
        continue;
      }

      if (!lane.spawnQueue.length && !lane.enemies.length && t >= lane.nextWaveAt) {
        queueTowerDefenseWave(which);
      }

      if (lane.spawnQueue.length && t >= lane.nextSpawnAt) {
        lane.enemies.push(lane.spawnQueue.shift());
        lane.nextSpawnAt = t + Math.max(0.28, 0.72 - lane.wave * 0.02);
      }

      for (let i = lane.enemies.length - 1; i >= 0; i--) {
        const enemy = lane.enemies[i];
        if (enemy.burnUntil > t && t >= enemy.burnTickAt) {
          enemy.burnTickAt = t + 0.45;
          enemy.hp -= 5;
        }
        const frozen = t < enemy.frozenUntil;
        const slowMul = frozen ? 0 : enemy.slowMul;
        enemy.x += enemy.speed * slowMul * dt;
        enemy.slowMul += (1 - enemy.slowMul) * Math.min(1, dt * 2.5);

        if (enemy.hp <= 0) {
          if (enemy.isBoss) lane.bossesDefeated++;
          lane.enemies.splice(i, 1);
          lane.defeated++;
          continue;
        }
        if (enemy.x >= tdArenaBounds(which).baseX) {
          lane.enemies.splice(i, 1);
          lane.lives -= enemy.isBoss ? (enemy.contactDamage || 3) : 1;
          lane.lives = Math.max(0, lane.lives);
          updateScoreboard();
          if (lane.lives <= 0) {
            lane.message = `Base down on wave ${lane.wave}`;
            lane.messageUntil = t + 6;
            awardTowerDefenseCoins("Base lost.", which);
            break;
          }
        }
      }

      for (const tower of towerDefense.towers) {
        if (tower.owner !== which) continue;
        const target = findTowerTarget(tower, lane);
        if (target && t >= tower.nextShotAt) {
          const char = getCharById(tower.charId);
          spawnTowerShot(tower, target, lane, 1, 1, char.id === "blaze" || char.id === "fire_master" ? "fire" : "normal", 1);
          tower.nextShotAt = t + tower.cooldown;
        }
        if (target && t >= tower.nextAbilityAt) {
          useTowerAbility(tower, lane);
          tower.nextAbilityAt = t + 5;
        }
      }

      for (let i = lane.shots.length - 1; i >= 0; i--) {
        const shot = lane.shots[i];
        shot.x += shot.vx * dt;
        shot.y += shot.vy * dt;
        const bounds = tdArenaBounds(which);
        if (t >= shot.expiresAt || shot.x < bounds.left - 40 || shot.x > bounds.right + 40 || shot.y < -40 || shot.y > H + 40) {
          lane.shots.splice(i, 1);
          continue;
        }
        let hit = false;
        for (const enemy of lane.enemies) {
          if (Math.hypot(enemy.x - shot.x, enemy.y - shot.y) > enemy.r + shot.r) continue;
          enemy.hp -= shot.damage;
          if (shot.visual === "fire") {
            enemy.burnUntil = t + 2.3;
            enemy.burnTickAt = t + 0.4;
          } else if (shot.visual === "storm") {
            enemy.slowMul = 0.75;
          }
          hit = true;
          break;
        }
        if (hit) lane.shots.splice(i, 1);
      }

      if (!lane.waveResolved && !lane.spawnQueue.length && !lane.enemies.length && lane.wave > 0) {
        const bossWave = lane.wave % TD_BOSS_WAVE_INTERVAL === 0;
        const bossBonus = bossWave ? 40 + Math.floor(lane.wave / TD_BOSS_WAVE_INTERVAL) * 18 : 0;
        const reward = 10 + lane.wave * 6 + bossBonus;
        lane.coinsEarned += reward;
        lane.waveResolved = true;
        lane.nextWaveAt = t + TD_WAVE_BREAK;
        lane.message = bossWave ? `Boss wave ${lane.wave} cleared! +${reward} coins` : `Wave ${lane.wave} cleared! +${reward} coins`;
        lane.messageUntil = t + 2.4;
        setStatus(bossWave ? `${which} boss wave ${lane.wave} cleared. +${reward} coins banked.` : `${which} wave ${lane.wave} cleared. +${reward} coins banked.`);
        lane.spawnQueue = [];
        lane.enemies = [];
        lane.nextSpawnAt = t + 99;
        lane.nextWaveAt = t + TD_WAVE_BREAK;
        updateScoreboard();
      }
    }

    if (towerDefense.owner === "BOTH" && !anyActive) {
      setStatus("Both tower-defense lanes are finished.");
    }
  }

  function drawTowerDefense() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#08111d";
    ctx.fillRect(0, 0, W, H);

    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, "#10243c");
    grad.addColorStop(1, "#16311f");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H - TD_PANEL_H);

    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.font = "12px system-ui";
    for (const which of tdOwners()) {
      const lane = tdLane(which);
      const bounds = tdArenaBounds(which);
      const pathY = tdPathY(which);
      ctx.fillStyle = "#64533b";
      ctx.fillRect(bounds.left, pathY, bounds.right - bounds.left, TD_PATH_H);
      ctx.strokeStyle = "rgba(255,255,255,0.18)";
      ctx.setLineDash([10, 10]);
      ctx.beginPath();
      ctx.moveTo(bounds.left, pathY + TD_PATH_H / 2);
      ctx.lineTo(bounds.right, pathY + TD_PATH_H / 2);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = lane.finished ? "#7f1d1d" : "#e11d48";
      ctx.fillRect(bounds.baseX, pathY - 10, 20, TD_PATH_H + 20);
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.fillText(towerDefense.owner === "BOTH" ? `${which} BASE` : "BASE", bounds.baseX - 12, pathY - 16);
    }

    if (towerDefense.owner === "BOTH") {
      ctx.strokeStyle = "rgba(255,255,255,0.16)";
      ctx.setLineDash([8, 8]);
      ctx.beginPath();
      ctx.moveTo(W / 2, 0);
      ctx.lineTo(W / 2, H - TD_PANEL_H);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = "rgba(255,255,255,0.78)";
      ctx.fillText("P1 SIDE", 18, 54);
      ctx.fillText("P2 SIDE", W / 2 + 18, 54);
    }

    for (const tower of towerDefense.towers) {
      const char = getCharById(tower.charId);
      ctx.strokeStyle = "rgba(255,255,255,0.08)";
      ctx.beginPath();
      ctx.arc(tower.x, tower.y - 20, tower.range, 0, Math.PI * 2);
      ctx.stroke();
      drawMiniCharacter(ctx, tower.x, tower.y, 1.1, char.look, 1);
      ctx.fillStyle = TD_RARITY_COLORS[char.rarity] || "#fff";
      ctx.fillRect(tower.x - 12, tower.y + 6, 24, 4);
    }

    for (const which of tdOwners()) {
      const lane = tdLane(which);
      for (const enemy of lane.enemies) {
        if (enemy.isBoss) {
          ctx.fillStyle = nowSec() < enemy.frozenUntil ? "#bfdbfe" : "#ef4444";
        } else {
          ctx.fillStyle = nowSec() < enemy.frozenUntil ? "#93c5fd" : "#f59e0b";
        }
        ctx.beginPath();
        ctx.arc(enemy.x, enemy.y, enemy.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#111827";
        ctx.fillRect(enemy.x - enemy.r * 0.35, enemy.y - 3, 3, 3);
        ctx.fillRect(enemy.x + enemy.r * 0.12, enemy.y - 3, 3, 3);
        ctx.fillStyle = "rgba(0,0,0,0.45)";
        ctx.fillRect(enemy.x - enemy.r, enemy.y - enemy.r - 8, enemy.r * 2, 4);
        ctx.fillStyle = enemy.isBoss ? "#fca5a5" : "#34d399";
        ctx.fillRect(enemy.x - enemy.r, enemy.y - enemy.r - 8, (enemy.hp / enemy.maxHp) * enemy.r * 2, 4);
        if (enemy.isBoss) {
          ctx.fillStyle = "#fff";
          ctx.font = "10px system-ui";
          ctx.fillText(`BOSS ${enemy.bossTier}`, enemy.x - enemy.r, enemy.y - enemy.r - 12);
        }
      }
    }

    for (const which of tdOwners()) {
      const lane = tdLane(which);
      for (const shot of lane.shots) {
        if (shot.visual === "fire") {
          ctx.fillStyle = "#fb923c";
        } else if (shot.visual === "storm") {
          ctx.fillStyle = "#c4b5fd";
        } else if (shot.visual === "power") {
          ctx.fillStyle = "#fde68a";
        } else {
          ctx.fillStyle = "#fef3c7";
        }
        ctx.beginPath();
        ctx.arc(shot.x, shot.y, shot.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.fillStyle = "rgba(6,10,18,0.92)";
    ctx.fillRect(0, H - TD_PANEL_H, W, TD_PANEL_H);
    ctx.strokeStyle = "rgba(255,255,255,0.12)";
    ctx.strokeRect(0, H - TD_PANEL_H, W, TD_PANEL_H);

    const cards = towerDefense.owner === "BOTH"
      ? [...towerDefenseCardRects("P1"), ...towerDefenseCardRects("P2")]
      : towerDefenseCardRects();
    for (const card of cards) {
      const selected = towerDefense.owner === "BOTH"
        ? towerDefenseSelectedCharId(card.owner) === card.char.id
        : towerDefense.selectedCharId === card.char.id;
      const count = towerCountForCharacter(card.char.id, towerDefense.owner === "BOTH" ? card.owner : null);
      const limit = TD_RARITY_LIMITS[card.char.rarity] || 2;
      ctx.fillStyle = selected ? "rgba(59,130,246,0.35)" : "rgba(255,255,255,0.06)";
      ctx.fillRect(card.x, card.y, card.w, card.h);
      ctx.strokeStyle = selected ? "rgba(147,197,253,0.95)" : "rgba(255,255,255,0.12)";
      ctx.strokeRect(card.x, card.y, card.w, card.h);
      drawMiniCharacter(ctx, card.x + card.w / 2, card.y + 36, 0.7, card.char.look, 1);
      ctx.fillStyle = "#fff";
      ctx.font = "10px system-ui";
      ctx.fillText(card.char.name.slice(0, 10), card.x + 4, card.y + 12);
      ctx.fillStyle = TD_RARITY_COLORS[card.char.rarity] || "#fff";
      ctx.fillText(`${count}/${limit}`, card.x + 4, card.y + card.h - 8);
    }

    if (towerDefense.owner === "BOTH") {
      ctx.strokeStyle = "rgba(255,255,255,0.1)";
      ctx.beginPath();
      ctx.moveTo(W / 2, H - TD_PANEL_H + 8);
      ctx.lineTo(W / 2, H - 8);
      ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.72)";
      ctx.font = "11px system-ui";
      ctx.fillText("P1 roster", 16, H - TD_PANEL_H + 11);
      ctx.fillText("P2 roster", W / 2 + 16, H - TD_PANEL_H + 11);
    }

    for (const which of tdOwners()) {
      const lane = tdLane(which);
      if (!lane.message || nowSec() >= lane.messageUntil) continue;
      const bounds = tdArenaBounds(which);
      const boxX = bounds.left + 12;
      const boxW = Math.max(160, bounds.right - bounds.left - 24);
      ctx.fillStyle = "rgba(0,0,0,0.45)";
      ctx.fillRect(boxX, 18, boxW, 30);
      ctx.fillStyle = "#f8fafc";
      ctx.font = "14px system-ui";
      ctx.fillText(lane.message, boxX + 12, 38);
    }

    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.font = "12px system-ui";
    ctx.fillText(`Tower Defense (${towerDefenseOwnerLabel()}): click roster cards to select towers, click arena to place`, 12, 18);
    if (towerDefense.owner === "BOTH") {
      const p1 = tdLane("P1");
      const p2 = tdLane("P2");
      ctx.fillText(`Boss every ${TD_BOSS_WAVE_INTERVAL} waves. P1 bosses: ${p1.bossesDefeated} | P2 bosses: ${p2.bossesDefeated}`, 12, 34);
    } else {
      const lane = tdLane(towerDefense.owner);
      ctx.fillText(`Boss every ${TD_BOSS_WAVE_INTERVAL} waves. Bosses beaten: ${lane.bossesDefeated}`, 12, 34);
    }
  }

  // ===================== DRAW =====================
  function draw(){
    if (towerDefenseMode) {
      drawTowerDefense();
      return;
    }
    ctx.clearRect(0,0,W,H);

    ctx.fillStyle = "#0a1020";
    ctx.fillRect(0,0,W,H);

    ctx.fillStyle = "#0f1a2b";
    ctx.fillRect(0, groundY, W, H-groundY);

    // center line
    ctx.fillStyle = "rgba(255,255,255,0.25)";
    ctx.fillRect(midX - 2, 0, 4, groundY);

    const t = nowSec();
    function drawTornado(p){
      if (t >= p.tornadoUntil) return;
      const isFire = p.tornadoKind === "fire";
      const duration = isFire ? FIRE_TORNADO_DURATION : ICE_TORNADO_DURATION;
      const life = clamp((p.tornadoUntil - t) / duration, 0, 1);
      const x = p === P1 ? p.x + 22 : p.x - 22;
      const colW = 34 + life * 10;

      ctx.fillStyle = isFire
        ? `rgba(255,120,60,${0.2 + life * 0.2})`
        : `rgba(120,220,255,${0.18 + life * 0.18})`;
      ctx.fillRect(x - colW/2, 0, colW, H);

      ctx.strokeStyle = isFire
        ? `rgba(255,220,180,${0.35 + life * 0.3})`
        : `rgba(210,245,255,${0.35 + life * 0.3})`;
      ctx.lineWidth = 2;
      for (let i=0; i<7; i++) {
        const y = (i / 6) * H;
        const swing = Math.sin(t * 14 + i * 0.9) * (8 + life * 6);
        ctx.beginPath();
        ctx.moveTo(x - 12 + swing, y);
        ctx.lineTo(x + 12 - swing, y + 30);
        ctx.stroke();
      }
    }
    drawTornado(P1);
    drawTornado(P2);
    if (teamBossMode) drawTornado(BOSS);

    // players
    const c1 = getCharById(P1.charId);
    const c2 = getCharById(P2.charId);
    drawMiniCharacter(ctx, P1.x, P1.y, 1.25, c1.look, P1.facing);
    drawMiniCharacter(ctx, P2.x, P2.y, 1.25, c2.look, P2.facing);
    if (teamBossMode && BOSS.alive) {
      const cb = getCharById(BOSS.charId);
      drawMiniCharacter(ctx, BOSS.x, BOSS.y, 1.45, cb.look, BOSS.facing);
    }

    function drawBuilderBox(p){
      if (t >= p.boxUntil) return;
      const left = p.x - p.w * 1.2;
      const top = p.y - p.h - 8;
      const w = p.w * 2.4;
      const h = p.h + 12;
      ctx.fillStyle = "rgba(194,120,34,0.24)";
      ctx.fillRect(left, top, w, h);
      ctx.strokeStyle = "rgba(255,220,170,0.95)";
      ctx.lineWidth = 2;
      ctx.strokeRect(left, top, w, h);
    }
    drawBuilderBox(P1);
    drawBuilderBox(P2);
    if (teamBossMode) drawBuilderBox(BOSS);

    // zombies
    for (const z of zombies) {
      ctx.fillStyle = z.owner === "P1" ? "#86efac" : (z.owner === "P2" ? "#fca5a5" : "#f97316");
      ctx.beginPath();
      ctx.arc(z.x, z.y, z.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(10,14,22,0.85)";
      ctx.fillRect(z.x - 4, z.y - 2, 2, 2);
      ctx.fillRect(z.x + 2, z.y - 2, 2, 2);
    }

    // balls
    for (const b of balls){
      drawBallSprite(b);
    }

    // blackout effect covers the affected player's half
    if (t < P1.blackoutUntil) {
      ctx.fillStyle = "rgba(0,0,0,0.98)";
      ctx.fillRect(0, 0, midX - 2, H);
    }
    if (t < P2.blackoutUntil) {
      ctx.fillStyle = "rgba(0,0,0,0.98)";
      ctx.fillRect(midX + 2, 0, W - (midX + 2), H);
    }
    if (teamBossMode && t < BOSS.blackoutUntil) {
      ctx.fillStyle = "rgba(0,0,0,0.98)";
      ctx.fillRect(midX + 2, 0, W - (midX + 2), H);
    }

    ctx.fillStyle = "rgba(255,255,255,0.86)";
    ctx.font = "12px system-ui";
    ctx.fillText("Throw: S / Down  | Ability: double-tap throw (each character has a unique power)", 12, 18);
  }

  // ===================== LOOP =====================
  let lastT = performance.now();
  function step(t){
    const dt = Math.min((t-lastT)/1000, 0.033);
    lastT = t;

    if (running && towerDefenseMode) {
      updateTowerDefense(dt);
    }

    if (running && !matchWinner){
      if (towerDefenseMode) {
        draw();
        requestAnimationFrame(step);
        return;
      }
      trySpawnBall();
      updatePlayer(P1, dt, "a","d","w");
      if (teamBossMode) {
        updatePlayer(P2, dt, "arrowleft","arrowright","arrowup");
        updateTeamBossAI(dt);
      } else if (bossMode) {
        updateBossAI(dt);
      } else {
        updatePlayer(P2, dt, "arrowleft","arrowright","arrowup");
      }

      updateAbilityEffects();

      for (const b of balls) updateBall(b, dt);
      updateZombies(dt);

      autoPickup(P1);
      autoPickup(P2);
      if (teamBossMode) autoPickup(BOSS);

      updateHeldBall(P1);
      updateHeldBall(P2);
      if (teamBossMode) updateHeldBall(BOSS);

      checkHits();
      checkZombieHits();
    }

    draw();
    drawAnimationPreview();
    requestAnimationFrame(step);
  }

  // ===================== LOBBY =====================
  function setTab(which){
    const loginActive = (which === "login");
    const settingsActive = (which === "settings");
    const clickerActive = (which === "clicker");
    const storyActive = (which === "story");
    const towerActive = (which === "tower");
    const bossActive = (which === "boss");
    const animationActive = (which === "animation");
    const musicActive = (which === "music");
    tabLogin.classList.toggle("active", loginActive);
    tabSettings.classList.toggle("active", settingsActive);
    tabClicker.classList.toggle("active", clickerActive);
    tabStory.classList.toggle("active", storyActive);
    tabTower.classList.toggle("active", towerActive);
    tabBoss.classList.toggle("active", bossActive);
    tabAnimation.classList.toggle("active", animationActive);
    tabMusic.classList.toggle("active", musicActive);
    screenLogin.style.display = loginActive ? "" : "none";
    screenSettings.style.display = settingsActive ? "" : "none";
    screenClicker.style.display = clickerActive ? "" : "none";
    screenStory.style.display = storyActive ? "" : "none";
    screenTower.style.display = towerActive ? "" : "none";
    screenBoss.style.display = bossActive ? "" : "none";
    screenAnimation.style.display = animationActive ? "" : "none";
    screenMusic.style.display = musicActive ? "" : "none";
    if (storyActive) renderStoryMode();
    if (animationActive) drawAnimationPreview();
    if (clickerActive) refreshClickerUI();
  }

  tabLogin.addEventListener("click", () => setTab("login"));
  tabSettings.addEventListener("click", () => setTab("settings"));
  tabClicker.addEventListener("click", () => setTab("clicker"));
  tabStory.addEventListener("click", () => setTab("story"));
  tabTower.addEventListener("click", () => setTab("tower"));
  tabBoss.addEventListener("click", () => setTab("boss"));
  tabAnimation.addEventListener("click", () => setTab("animation"));
  tabMusic.addEventListener("click", () => setTab("music"));
  toSettingsBtn.addEventListener("click", () => setTab("settings"));
  backToLogin.addEventListener("click", () => setTab("login"));

  if (animationPlayBtn) {
    animationPlayBtn.addEventListener("click", () => {
      if (!animationLab.playing) {
        animationLab.playing = true;
        animationLab.startedAt = performance.now() - animationLab.pausedAt;
        syncAnimationEditorControls();
      }
    });
  }
  if (animationPauseBtn) {
    animationPauseBtn.addEventListener("click", () => {
      animationLab.pausedAt = performance.now() - animationLab.startedAt;
      animationLab.playing = false;
      syncAnimationEditorControls();
      drawAnimationPreview();
    });
  }
  if (animationResetBtn) {
    animationResetBtn.addEventListener("click", () => {
      resetAnimationScene();
      drawAnimationPreview();
    });
  }
  animationSaveBtn?.addEventListener("click", saveCurrentAnimationProject);
  animationProjectName?.addEventListener("input", () => {
    animationLab.projectName = sanitizeAnimationProjectName(animationProjectName.value);
  });
  animationBackdropSelect?.addEventListener("change", () => {
    drawAnimationPreview();
  });
  animationSpeedInput?.addEventListener("input", () => {
    const currentMs = animationSceneTimeMs();
    const newSpeed = clamp(Number(animationSpeedInput.value) || 1, 0.25, 3);
    animationLab.speed = newSpeed;
    if (animationLab.playing) {
      animationLab.startedAt = performance.now() - currentMs / newSpeed;
    } else {
      animationLab.pausedAt = currentMs / newSpeed;
    }
    syncAnimationEditorControls();
    drawAnimationPreview();
  });
  animationFrameDurationInput?.addEventListener("input", () => {
    const frame = getSelectedAnimationFrame();
    if (!frame) return;
    frame.durationMs = clamp(Number(animationFrameDurationInput.value) || 700, 100, 4000);
    renderAnimationFrameList();
    syncAnimationEditorControls();
    drawAnimationPreview();
  });
  animationFrameText?.addEventListener("input", () => {
    const frame = getSelectedAnimationFrame();
    const sticker = getSelectedAnimationSticker();
    if (!frame) return;
    frame.text = animationFrameText.value;
    if (frame.text && sticker) frame.speakerStickerId = sticker.id;
    if (frame.text && !frame.speakerStickerId) frame.speakerStickerId = frame.stickers[0]?.id || "";
    if (!frame.text) frame.speakerStickerId = "";
    renderAnimationFrameList();
    syncAnimationEditorControls();
    drawAnimationPreview();
  });
  animationFrameSpeaker?.addEventListener("change", () => {
    const frame = getSelectedAnimationFrame();
    if (!frame) return;
    frame.speakerStickerId = animationFrameSpeaker.value;
    syncAnimationEditorControls();
    drawAnimationPreview();
  });
  animationBubbleStyle?.addEventListener("change", () => {
    const frame = getSelectedAnimationFrame();
    if (!frame) return;
    frame.bubbleStyle = animationBubbleStyle.value;
    drawAnimationPreview();
  });
  animationBubbleColor?.addEventListener("input", () => {
    const frame = getSelectedAnimationFrame();
    if (!frame) return;
    frame.bubbleColor = animationBubbleColor.value;
    drawAnimationPreview();
  });
  animationBubbleTextColor?.addEventListener("input", () => {
    const frame = getSelectedAnimationFrame();
    if (!frame) return;
    frame.bubbleTextColor = animationBubbleTextColor.value;
    drawAnimationPreview();
  });
  animationAddFrameBtn?.addEventListener("click", () => {
    const frame = getSelectedAnimationFrame();
    const newFrame = makeAnimationFrame(frame ? frame.stickers : [], frame?.durationMs || 700);
    const index = frame ? getAnimationFrameIndex(frame.id) + 1 : animationLab.frames.length;
    animationLab.frames.splice(index, 0, newFrame);
    animationLab.selectedFrameId = newFrame.id;
    animationLab.selectedStickerId = newFrame.stickers[0]?.id || null;
    renderAnimationFrameList();
    syncAnimationEditorControls();
    drawAnimationPreview();
  });
  animationDeleteFrameBtn?.addEventListener("click", () => {
    if (animationLab.frames.length <= 1) return;
    const index = getAnimationFrameIndex(animationLab.selectedFrameId);
    animationLab.frames.splice(index, 1);
    const nextFrame = animationLab.frames[Math.min(index, animationLab.frames.length - 1)];
    animationLab.selectedFrameId = nextFrame.id;
    animationLab.selectedStickerId = nextFrame.stickers[0]?.id || null;
    renderAnimationFrameList();
    syncAnimationEditorControls();
    drawAnimationPreview();
  });
  animationStickerChar?.addEventListener("change", () => {
    const sticker = getSelectedAnimationSticker();
    if (!sticker || sticker.kind !== "character") return;
    sticker.charId = animationStickerChar.value;
    sticker.assetId = animationStickerChar.value;
    syncAnimationEditorControls();
    renderAnimationFrameList();
    drawAnimationPreview();
  });
  animationStickerMotion?.addEventListener("change", () => {
    const sticker = getSelectedAnimationSticker();
    if (!sticker || sticker.kind !== "character") return;
    sticker.motion = animationStickerMotion.value;
    syncAnimationEditorControls();
    drawAnimationPreview();
  });
  animationStickerX?.addEventListener("input", () => {
    const sticker = getSelectedAnimationSticker();
    if (!sticker) return;
    sticker.x = clamp(Number(animationStickerX.value) || sticker.x, 40, 420);
    syncAnimationEditorControls();
    drawAnimationPreview();
  });
  animationStickerY?.addEventListener("input", () => {
    const sticker = getSelectedAnimationSticker();
    if (!sticker) return;
    sticker.y = clamp(Number(animationStickerY.value) || sticker.y, 120, 240);
    syncAnimationEditorControls();
    drawAnimationPreview();
  });
  animationStickerSize?.addEventListener("input", () => {
    const sticker = getSelectedAnimationSticker();
    if (!sticker) return;
    sticker.size = clamp(Number(animationStickerSize.value) || sticker.size || 1, 0.5, 2.5);
    syncAnimationEditorControls();
    drawAnimationPreview();
  });
  animationStickerWidth?.addEventListener("input", () => {
    const sticker = getSelectedAnimationSticker();
    if (!sticker) return;
    sticker.scaleX = clamp(Number(animationStickerWidth.value) || sticker.scaleX || 1, 0.5, 3);
    syncAnimationEditorControls();
    drawAnimationPreview();
  });
  animationStickerHeight?.addEventListener("input", () => {
    const sticker = getSelectedAnimationSticker();
    if (!sticker) return;
    sticker.scaleY = clamp(Number(animationStickerHeight.value) || sticker.scaleY || 1, 0.5, 3);
    syncAnimationEditorControls();
    drawAnimationPreview();
  });
  animationStickerFacing?.addEventListener("change", () => {
    const sticker = getSelectedAnimationSticker();
    if (!sticker || sticker.kind !== "character") return;
    sticker.facing = Number(animationStickerFacing.value) || 1;
    syncAnimationEditorControls();
    drawAnimationPreview();
  });
  animationDeleteStickerBtn?.addEventListener("click", () => {
    const frame = getSelectedAnimationFrame();
    const sticker = getSelectedAnimationSticker();
    if (!frame || !sticker) return;
    frame.stickers = frame.stickers.filter(item => item.id !== sticker.id);
    if (frame.speakerStickerId === sticker.id) frame.speakerStickerId = frame.stickers[0]?.id || "";
    animationLab.selectedStickerId = frame.stickers[0]?.id || null;
    renderAnimationFrameList();
    syncAnimationEditorControls();
    drawAnimationPreview();
  });
  animationPreviewCanvas?.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  animationPreviewCanvas?.addEventListener("drop", (e) => {
    e.preventDefault();
    const charId = e.dataTransfer?.getData("text/plain");
    if (!charId) return;
    const rect = animationPreviewCanvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * animationPreviewCanvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * animationPreviewCanvas.height;
    addStickerToSelectedFrame(charId, x, y);
  });
  animationPreviewCanvas?.addEventListener("pointerdown", (e) => {
    if (animationLab.playing) return;
    const frame = getSelectedAnimationFrame();
    const rect = animationPreviewCanvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * animationPreviewCanvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * animationPreviewCanvas.height;
    const sticker = findStickerAtPosition(x, y);
    if (!sticker) {
      animationLab.selectedStickerId = null;
      syncAnimationEditorControls();
      drawAnimationPreview();
      return;
    }
    animationLab.selectedStickerId = sticker.id;
    if (frame?.text) frame.speakerStickerId = sticker.id;
    const resizeMode = getAnimationResizeModeAtPoint(sticker, x, y);
    if (resizeMode) {
      const bounds = animationStickerBounds(sticker);
      animationLab.resizeStickerId = sticker.id;
      animationLab.resizeMode = resizeMode;
      animationLab.resizeStartDist = Math.max(8, Math.hypot(x - sticker.x, y - sticker.y));
      animationLab.resizeStartDx = Math.max(10, bounds.right - sticker.x);
      animationLab.resizeStartDy = Math.max(10, bounds.bottom - sticker.y);
      animationLab.resizeStartSize = sticker.size ?? 1;
      animationLab.resizeStartScaleX = sticker.scaleX ?? 1;
      animationLab.resizeStartScaleY = sticker.scaleY ?? 1;
      animationLab.dragStickerId = null;
    } else {
      animationLab.dragStickerId = sticker.id;
      animationLab.dragOffsetX = x - sticker.x;
      animationLab.dragOffsetY = y - sticker.y;
      animationLab.resizeStickerId = null;
      animationLab.resizeMode = "";
    }
    animationPreviewCanvas.setPointerCapture?.(e.pointerId);
    syncAnimationEditorControls();
    drawAnimationPreview();
  });
  animationPreviewCanvas?.addEventListener("pointermove", (e) => {
    if (animationLab.playing) return;
    if (animationLab.resizeStickerId) {
      const sticker = getSelectedAnimationSticker();
      if (!sticker || sticker.id !== animationLab.resizeStickerId) return;
      const rect = animationPreviewCanvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * animationPreviewCanvas.width;
      const y = ((e.clientY - rect.top) / rect.height) * animationPreviewCanvas.height;
      const dist = Math.max(8, Math.hypot(x - sticker.x, y - sticker.y));
      if (animationLab.resizeMode === "corner") {
        sticker.size = clamp(animationLab.resizeStartSize * (dist / animationLab.resizeStartDist), 0.5, 2.5);
      } else if (animationLab.resizeMode === "width") {
        const dx = Math.max(10, Math.abs(x - sticker.x));
        sticker.scaleX = clamp(animationLab.resizeStartScaleX * (dx / animationLab.resizeStartDx), 0.5, 3);
      } else if (animationLab.resizeMode === "height") {
        const dy = Math.max(10, Math.abs(y - sticker.y));
        sticker.scaleY = clamp(animationLab.resizeStartScaleY * (dy / animationLab.resizeStartDy), 0.5, 3);
      }
      syncAnimationEditorControls();
      drawAnimationPreview();
      return;
    }
    if (!animationLab.dragStickerId) return;
    const sticker = getSelectedAnimationSticker();
    if (!sticker) return;
    const rect = animationPreviewCanvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * animationPreviewCanvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * animationPreviewCanvas.height;
    sticker.x = clamp(x - animationLab.dragOffsetX, 40, 420);
    sticker.y = clamp(y - animationLab.dragOffsetY, 120, 240);
    syncAnimationEditorControls();
    drawAnimationPreview();
  });
  animationPreviewCanvas?.addEventListener("pointerup", () => {
    animationLab.dragStickerId = null;
    animationLab.resizeStickerId = null;
    animationLab.resizeMode = "";
  });
  animationPreviewCanvas?.addEventListener("pointerleave", () => {
    animationLab.dragStickerId = null;
    animationLab.resizeStickerId = null;
    animationLab.resizeMode = "";
  });

  function showLobby(){
    if (towerDefenseMode) awardTowerDefenseCoins("Tower Defense ended.");
    running = false;
    towerDefenseMode = false;
    lobbyEl.style.display = "flex";
    refreshCoinUI();
    refreshCharUI();
    setTab("settings");
  }

  function startGameFromLobby(){
    // âœ… always allow start (guest if needed)
    if (!activeUserP1) activeUserP1 = "__GUEST_P1__";
    if (!activeUserP2) activeUserP2 = "__GUEST_P2__";
    ensureGuestProfiles();
    towerDefenseMode = false;
    teamBossMode = !!teamBossModeToggle?.checked;
    bossMode = !!bossModeToggle?.checked && !teamBossMode;

    CFG.MAX_BALLS = clamp(Number(maxBallsInput.value), 1, 20);
    CFG.SPAWN_EVERY = clamp(Number(spawnEveryInput.value), 0.2, 10);
    CFG.ROUNDS_TO_WIN = clamp(Number(roundsToWinInput.value), 1, 10);

    // if locked, force rookie
    const c1s = p1Char();
    const c2s = p2Char();
    const cbs = bossChar();
    const bossCharId = cbs ? cbs.id : "stellar_guard";
    P1.charId = isUnlocked("P1", c1s.id) ? c1s.id : "rookie";
    P2.charId = bossMode ? bossCharId : (isUnlocked("P2", c2s.id) ? c2s.id : "rookie");
    BOSS.charId = bossCharId;
    updateScoreboard();

    lobbyEl.style.display = "none";
    running = true;
    resetMatch();
  }

  // ===================== EVENTS =====================
  resetBtn.addEventListener("click", () => {
    if (!running) return;
    if (towerDefenseMode) {
      resetTowerDefenseState();
      return;
    }
    resetMatch();
  });
  startBtn.addEventListener("click", startGameFromLobby);
  towerStartBtn?.addEventListener("click", startTowerDefenseFromLobby);
  towerRosterOwner?.addEventListener("change", () => {
    towerDefense.owner = towerDefenseRosterOwner();
    syncTowerDefenseSelection();
    if (!towerDefenseMode) setStatus(`Tower Defense set to ${towerDefenseOwnerLabel()}.`);
  });
  bossModeToggle?.addEventListener("change", () => {
    if (bossModeToggle.checked && teamBossModeToggle) teamBossModeToggle.checked = false;
  });
  teamBossModeToggle?.addEventListener("change", () => {
    if (teamBossModeToggle.checked && bossModeToggle) bossModeToggle.checked = false;
  });

  guestBtn.addEventListener("click", () => {
    activeUserP1 = "__GUEST_P1__";
    activeUserP2 = "__GUEST_P2__";
    ensureGuestProfiles();
    refreshCoinUI();
    refreshCharUI();
    setTab("settings");
  });

  clickerTapP1?.addEventListener("click", () => clickerTap("P1"));
  clickerTapP2?.addEventListener("click", () => clickerTap("P2"));
  clickerAvatarP1?.addEventListener("click", () => clickerTap("P1"));
  clickerAvatarP2?.addEventListener("click", () => clickerTap("P2"));
  clickerUpgradeP1?.addEventListener("click", () => buyClickerUpgrade("P1", clickerMsgP1));
  clickerUpgradeP2?.addEventListener("click", () => buyClickerUpgrade("P2", clickerMsgP2));

  p1RarityFilter.addEventListener("change", () => {
    p1Rarity = p1RarityFilter.value;
    p1Pool = getFilteredIndices(p1Rarity);
    p1PoolPos = 0;
    refreshCharUI();
  });
  p2RarityFilter.addEventListener("change", () => {
    p2Rarity = p2RarityFilter.value;
    p2Pool = getFilteredIndices(p2Rarity);
    p2PoolPos = 0;
    refreshCharUI();
  });
  bossRarityFilter.addEventListener("change", () => {
    bossRarity = bossRarityFilter.value;
    bossPool = getFilteredIndices(bossRarity);
    bossPoolPos = 0;
    refreshCharUI();
  });

  p1Prev.addEventListener("click", () => { p1PoolPos = (p1PoolPos - 1 + p1Pool.length) % p1Pool.length; refreshCharUI(); });
  p1Next.addEventListener("click", () => { p1PoolPos = (p1PoolPos + 1) % p1Pool.length; refreshCharUI(); });
  p1Random.addEventListener("click", () => { p1PoolPos = Math.floor(Math.random() * p1Pool.length); refreshCharUI(); });
  p1Buy.addEventListener("click", () => buySelected("P1"));

  p2Prev.addEventListener("click", () => { p2PoolPos = (p2PoolPos - 1 + p2Pool.length) % p2Pool.length; refreshCharUI(); });
  p2Next.addEventListener("click", () => { p2PoolPos = (p2PoolPos + 1) % p2Pool.length; refreshCharUI(); });
  p2Random.addEventListener("click", () => { p2PoolPos = Math.floor(Math.random() * p2Pool.length); refreshCharUI(); });
  p2Buy.addEventListener("click", () => buySelected("P2"));
  bossPrev.addEventListener("click", () => { bossPoolPos = (bossPoolPos - 1 + bossPool.length) % bossPool.length; refreshCharUI(); });
  bossNext.addEventListener("click", () => { bossPoolPos = (bossPoolPos + 1) % bossPool.length; refreshCharUI(); });
  bossRandom.addEventListener("click", () => { bossPoolPos = Math.floor(Math.random() * bossPool.length); refreshCharUI(); });

  p1ChestBasic.addEventListener("click", () => openChest("P1","basic"));
  p1ChestPremium.addEventListener("click", () => openChest("P1","premium"));
  p2ChestBasic.addEventListener("click", () => openChest("P2","basic"));
  p2ChestPremium.addEventListener("click", () => openChest("P2","premium"));

  p1Register.addEventListener("click", () => { p1LoginMsg.textContent = registerAccount(p1User.value, p1Pass.value); });
  p1Login.addEventListener("click", () => {
    const u = (p1User.value || "").trim();
    const ok = loginAccount(u, p1Pass.value);
    p1LoginMsg.textContent = ok ? "Logged in âœ…" : "Login failed";
    if (ok) { activeUserP1 = u; unlock("P1","rookie"); refreshCoinUI(); refreshCharUI(); setTab("settings"); }
  });
  p1Logout.addEventListener("click", () => { activeUserP1 = null; p1LoginMsg.textContent = "Logged out"; refreshCoinUI(); refreshCharUI(); });

  p2Register.addEventListener("click", () => { p2LoginMsg.textContent = registerAccount(p2User.value, p2Pass.value); });
  p2Login.addEventListener("click", () => {
    const u = (p2User.value || "").trim();
    const ok = loginAccount(u, p2Pass.value);
    p2LoginMsg.textContent = ok ? "Logged in âœ…" : "Login failed";
    if (ok) { activeUserP2 = u; unlock("P2","rookie"); refreshCoinUI(); refreshCharUI(); setTab("settings"); }
  });
  p2Logout.addEventListener("click", () => { activeUserP2 = null; p2LoginMsg.textContent = "Logged out"; refreshCoinUI(); refreshCharUI(); });
  storyBackBtn?.addEventListener("click", closeStoryBook);
  storyRestartBtn?.addEventListener("click", restartStoryBook);

  // ESC lobby
  window.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "escape") showLobby();
  });

  // ===================== START =====================
  populateAnimationCharacterOptions();
  resetAnimationScene();
  renderSavedAnimationProjects();
  refreshCoinUI();
  refreshCharUI();
  renderStoryMode();
  lobbyEl.style.display = "flex";
  requestAnimationFrame(step);
})();





