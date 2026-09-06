/*:
 * @target MZ
 * @title JDK Jump System
 * @plugindesc Advanced jump and fly system for RPG Maker MZ. Jump over obstacles, fly with custom sprites, region/terrain damage.
 * @author Rpx & Just Dev
 *
 * @--- JUMP SETTINGS ---
 *
 * @param jumpHeight
 * @text Jump Height
 * @desc Height of the jump in pixels
 * @default 120
 * @type number
 * @min 20
 * @max 500
 *
 * @param jumpDistance
 * @text Jump Distance
 * @desc Distance of the jump in tiles (1.0 = one tile)
 * @default 1.0
 * @type number
 * @min 0.5
 * @max 5.0
 * @decimals 1
 *
 * @param jumpDuration
 * @text Jump Duration
 * @desc Number of frames to complete the jump (higher = slower)
 * @default 30
 * @type number
 * @min 10
 * @max 90
 *
 * @param animationSpeed
 * @text Animation Speed
 * @desc Frames per walk animation cycle during jump (lower = faster)
 * @default 8
 * @type number
 * @min 2
 * @max 30
 *
 * @param jumpCooldown
 * @text Jump Cooldown
 * @desc Frames between jumps
 * @default 10
 * @type number
 * @min 0
 * @max 60
 *
 * @param jumpKey
 * @text Jump Key
 * @desc Key to jump. Valid: ok, shift, space, enter, a-z, 0-9, f1-f12, up, down, left, right
 * @default ok
 * @type string
 *
 * @--- DOUBLE JUMP ---
 *
 * @param enableDoubleJump
 * @text Double Jump
 * @desc Allow jumping a second time in mid-air
 * @default true
 * @type boolean
 *
 * @param doubleJumpHeightMultiplier
 * @text Double Jump Height
 * @desc Height multiplier for second jump (0.1-1.0)
 * @default 0.6
 * @type number
 * @min 0.1
 * @max 1.0
 * @decimals 1
 *
 * @--- FALL DAMAGE ---
 *
 * @param enableFallDamage
 * @text Fall Damage
 * @desc Enable damage when landing from height
 * @default false
 * @type boolean
 *
 * @param fallDamageBase
 * @text Base Fall Damage
 * @desc Minimum damage from any fall
 * @default 5
 * @type number
 * @min 0
 * @max 999
 *
 * @param fallDamagePerTile
 * @text Damage Per Tile
 * @desc Additional damage per tile of height
 * @default 3
 * @type number
 * @min 0
 * @max 99
 *
 * @param fallInvincibilityFrames
 * @text Invincibility Frames
 * @desc Frames of invincibility after fall damage
 * @default 60
 * @type number
 * @min 0
 * @max 300
 *
 * @--- REGION / TERRAIN DAMAGE ---
 *
 * @param regionDamageEnabled
 * @text Region Damage Enabled
 * @desc Enable damage when jumping into specific regions
 * @default false
 * @type boolean
 *
 * @param regionDamageType
 * @text Region Damage Type
 * @desc Type of damage: full = all HP, custom = specific amount
 * @default full
 * @type select
 * @option full
 * @option custom
 *
 * @param regionDamageAmount
 * @text Region Damage Amount
 * @desc Damage amount when type is custom
 * @default 50
 * @type number
 * @min 1
 * @max 9999
 *
 * @param regionDamageIds
 * @text Region Damage IDs
 * @desc Region IDs that cause damage (comma separated)
 * @default
 * @type string
 *
 * @param terrainDamageEnabled
 * @text Terrain Damage Enabled
 * @desc Enable damage when jumping into specific terrain tags
 * @default false
 * @type boolean
 *
 * @param terrainDamageType
 * @text Terrain Damage Type
 * @desc Type of damage: full = all HP, custom = specific amount
 * @default full
 * @type select
 * @option full
 * @option custom
 *
 * @param terrainDamageAmount
 * @text Terrain Damage Amount
 * @desc Damage amount when type is custom
 * @default 50
 * @type number
 * @min 1
 * @max 9999
 *
 * @param terrainDamageIds
 * @text Terrain Damage IDs
 * @desc Terrain tag IDs that cause damage (comma separated)
 * @default
 * @type string
 *
 * @--- FLY MODE ---
 *
 * @param flyEnabled
 * @text Fly Enabled
 * @desc Enable fly mode feature
 * @default true
 * @type boolean
 *
 * @param flyKey
 * @text Fly Key
 * @desc Key to toggle fly. Valid: ok, shift, space, enter, a-z, 0-9, f1-f12, up, down, left, right
 * @default shift
 * @type string
 *
 * @param flyHeight
 * @text Fly Height
 * @desc Height of the fly in pixels above ground
 * @default 80
 * @type number
 * @min 20
 * @max 300
 *
 * @param flySpeed
 * @text Fly Speed
 * @desc Movement speed multiplier while flying (1.0 = normal)
 * @default 1.5
 * @type number
 * @min 0.5
 * @max 3.0
 * @decimals 1
 *
 * @param flyBlockedRegions
 * @text Fly Blocked Regions
 * @desc Region IDs where flying is blocked (comma separated)
 * @default
 * @type string
 *
 * @param flyBlockedTerrains
 * @text Fly Blocked Terrains
 * @desc Terrain tag IDs where flying is blocked (comma separated)
 * @default
 * @type string
 *
 * @param flySprite
 * @text Fly Sprite
 * @desc Sprite sheet filename for flying (without .png, empty = original)
 * @default
 * @type file
 * @dir img/characters/
 *
 * @param flyAnimationSpeed
 * @text Fly Animation Speed
 * @desc Animation speed while flying (lower = faster)
 * @default 6
 * @type number
 * @min 2
 * @max 30
 *
 * @param flyBobSpeed
 * @text Fly Bob Speed
 * @desc Speed of the up/down bobbing animation while flying
 * @default 0.08
 * @type number
 * @min 0.01
 * @max 0.3
 * @decimals 2
 *
 * @param flyBobAmount
 * @text Fly Bob Amount
 * @desc Amount of bobbing in pixels while flying
 * @default 8
 * @type number
 * @min 0
 * @max 30
 *
 * @param flyHeightVariation
 * @text Fly Height Variation
 * @desc Additional height variation while flying (0 = constant height)
 * @default 0
 * @type number
 * @min 0
 * @max 50
 *
 * @param flySwitch
 * @text Fly Switch
 * @desc Switch to enable/disable fly mode (0 = use key toggle)
 * @default 0
 * @type switch
 *
 * @--- AUDIO ---
 *
 * @param jumpSE
 * @text Jump Sound
 * @desc Sound effect when jumping
 * @default Jump1
 * @type file
 * @dir audio/se/
 *
 * @param landSE
 * @text Land Sound
 * @desc Sound effect when landing (empty = none)
 * @default
 * @type file
 * @dir audio/se/
 *
 * @param flySE
 * @text Fly Sound
 * @desc Sound effect when toggling fly
 * @default
 * @type file
 * @dir audio/se/
 *
 * @--- VISUALS ---
 *
 * @param landAnimationFrames
 * @text Land Animation Frames
 * @desc Duration of landing squish animation (0 = none)
 * @default 6
 * @type number
 * @min 0
 * @max 30
 *
 * @param enableJumpFX
 * @text Enable Jump FX
 * @desc Show cloud effect when jumping
 * @default true
 * @type boolean
 *
 * @param jumpFXColor
 * @text Jump FX Color
 * @desc Color of jump cloud (R,G,B)
 * @default 255,255,200
 * @type string
 *
 * @param enableLandFX
 * @text Enable Land FX
 * @desc Show cloud effect when landing
 * @default true
 * @type boolean
 *
 * @param landFXColor
 * @text Land FX Color
 * @desc Color of land cloud (R,G,B)
 * @default 200,200,200
 * @type string
 *
 * @param landFXDuration
 * @text Land FX Duration
 * @desc Duration of land effect in frames
 * @default 15
 * @type number
 * @min 0
 * @max 60
 *
 * @param flyFXEnabled
 * @text Fly FX Enabled
 * @desc Show particle effect while flying
 * @default true
 * @type boolean
 *
 * @param flyFXColor
 * @text Fly FX Color
 * @desc Color of fly particles (R,G,B)
 * @default 150,200,255
 * @type string
 *
 * @--- RESTRICTIONS ---
 *
 * @param disableJumpSwitch
 * @text Disable Jump Switch
 * @desc Switch to disable jumping globally (0 = none)
 * @default 0
 * @type switch
 *
 * @param blockedRegions
 * @text Blocked Regions
 * @desc Region IDs where jumping is blocked (comma separated)
 * @default
 * @type string
 *
 * @help
 * JDK Jump System v5.1.0
 * =====================
 *
 * Valid Keys: ok, shift, control, alt, space, enter, tab, escape,
 * backspace, delete, insert, home, end, pageup, pagedown,
 * up, down, left, right, a-z, 0-9, f1-f12, num0-num9
 *
 * @command enableJump
 * @text Enable Jump
 * @desc Enable jumping for the player
 *
 * @command disableJump
 * @text Disable Jump
 * @desc Disable jumping for the player
 *
 * @command forceJump
 * @text Force Jump
 * @desc Force a jump with custom height
 * @arg height
 * @text Jump Height
 * @desc Height of the jump in pixels
 * @default 120
 * @type number
 * @min 20
 * @max 500
 *
 * @command jumpTo
 * @text Jump To Position
 * @desc Jump to a specific tile position
 * @arg x
 * @text Target X
 * @desc Tile X coordinate to jump to
 * @default 0
 * @type number
 * @min 0
 * @max 999
 * @arg y
 * @text Target Y
 * @desc Tile Y coordinate to jump to
 * @default 0
 * @type number
 * @min 0
 * @max 999
 * @arg height
 * @text Jump Height
 * @desc Height of the jump in pixels
 * @default 120
 * @type number
 * @min 20
 * @max 500
 *
 * @command setHeight
 * @text Set Jump Height
 * @desc Change the jump height
 * @arg height
 * @text Jump Height
 * @desc New height in pixels
 * @default 120
 * @type number
 * @min 20
 * @max 500
 *
 * @command setDistance
 * @text Set Jump Distance
 * @desc Change the jump distance
 * @arg distance
 * @text Jump Distance
 * @desc New distance in tiles (1.0 = one tile)
 * @default 1.0
 * @type number
 * @min 0.5
 * @max 5.0
 * @decimals 1
 *
 * @command setDuration
 * @text Set Jump Duration
 * @desc Change the jump speed (frames)
 * @arg duration
 * @text Duration
 * @desc New duration in frames (higher = slower)
 * @default 30
 * @type number
 * @min 10
 * @max 90
 *
 * @command enableDoubleJump
 * @text Enable Double Jump
 * @desc Enable double jump
 *
 * @command disableDoubleJump
 * @text Disable Double Jump
 * @desc Disable double jump
 *
 * @command setCooldown
 * @text Set Jump Cooldown
 * @desc Change the cooldown between jumps
 * @arg cooldown
 * @text Cooldown
 * @desc New cooldown in frames
 * @default 10
 * @type number
 * @min 0
 * @max 60
 *
 * @command setJumpKey
 * @text Set Jump Key
 * @desc Change the key used to jump
 * @arg key
 * @text Key Name
 * @desc Valid: ok, shift, space, enter, a-z, 0-9, f1-f12
 * @default ok
 * @type string
 *
 * @command setFallDamage
 * @text Set Fall Damage
 * @desc Enable or disable fall damage
 * @arg enabled
 * @text Enabled
 * @desc Enable fall damage?
 * @default false
 * @type boolean
 *
 * @command setRegionDamage
 * @text Set Region Damage
 * @desc Configure region damage
 * @arg enabled
 * @text Enabled
 * @desc Enable region damage?
 * @default false
 * @type boolean
 * @arg type
 * @text Damage Type
 * @desc full = all HP, custom = specific amount
 * @default full
 * @type select
 * @option full
 * @option custom
 * @arg amount
 * @text Damage Amount
 * @desc Damage when type is custom
 * @default 50
 * @type number
 * @min 1
 * @max 9999
 * @arg ids
 * @text Region IDs
 * @desc Region IDs (comma separated)
 * @default
 * @type string
 *
 * @command setTerrainDamage
 * @text Set Terrain Damage
 * @desc Configure terrain damage
 * @arg enabled
 * @text Enabled
 * @desc Enable terrain damage?
 * @default false
 * @type boolean
 * @arg type
 * @text Damage Type
 * @desc full = all HP, custom = specific amount
 * @default full
 * @type select
 * @option full
 * @option custom
 * @arg amount
 * @text Damage Amount
 * @desc Damage when type is custom
 * @default 50
 * @type number
 * @min 1
 * @max 9999
 * @arg ids
 * @text Terrain IDs
 * @desc Terrain tag IDs (comma separated)
 * @default
 * @type string
 *
 * @command enableFly
 * @text Enable Fly
 * @desc Enable flying
 *
 * @command disableFly
 * @text Disable Fly
 * @desc Disable flying
 *
 * @command toggleFly
 * @text Toggle Fly
 * @desc Toggle fly mode
 *
 * @command setFlyHeight
 * @text Set Fly Height
 * @desc Change fly height
 * @arg height
 * @text Fly Height
 * @desc Height above ground in pixels
 * @default 80
 * @type number
 * @min 20
 * @max 300
 *
 * @command setFlySpeed
 * @text Set Fly Speed
 * @desc Change fly speed
 * @arg speed
 * @text Fly Speed
 * @desc Movement speed multiplier (1.0 = normal)
 * @default 1.5
 * @type number
 * @min 0.5
 * @max 3.0
 * @decimals 1
 *
 * @command setFlySprite
 * @text Set Fly Sprite
 * @desc Change fly sprite
 * @arg sprite
 * @text Sprite Name
 * @desc Filename without .png (empty = original)
 * @default
 * @type file
 * @dir img/characters/
 *
 * @command setFlyBobSpeed
 * @text Set Fly Bob Speed
 * @desc Change fly bobbing speed
 * @arg speed
 * @text Bob Speed
 * @desc Speed of up/down bobbing (lower = slower)
 * @default 0.08
 * @type number
 * @min 0.01
 * @max 0.3
 * @decimals 2
 *
 * @command setFlyBobAmount
 * @text Set Fly Bob Amount
 * @desc Change fly bobbing amount
 * @arg amount
 * @text Bob Amount
 * @desc Amount of bobbing in pixels
 * @default 8
 * @type number
 * @min 0
 * @max 30
 *
 * @command setFlyHeightVariation
 * @text Set Fly Height Variation
 * @desc Change fly height variation
 * @arg variation
 * @text Height Variation
 * @desc Additional height variation in pixels (0 = constant)
 * @default 0
 * @type number
 * @min 0
 * @max 50
 *
 * @end
 */

(function() {

    var parameters = PluginManager.parameters('JDK_JumpSystem');
    var P = {
        jumpHeight: Number(parameters['jumpHeight'] || 120),
        jumpDistance: Number(parameters['jumpDistance'] || 1.0),
        jumpDuration: Number(parameters['jumpDuration'] || 30),
        animationSpeed: Number(parameters['animationSpeed'] || 8),
        jumpCooldown: Number(parameters['jumpCooldown'] || 10),
        jumpKey: String(parameters['jumpKey'] || 'ok'),
        enableDoubleJump: parameters['enableDoubleJump'] === 'true',
        doubleJumpHeight: Number(parameters['doubleJumpHeightMultiplier'] || 0.6),
        enableFallDamage: parameters['enableFallDamage'] === 'true',
        fallDamageBase: Number(parameters['fallDamageBase'] || 5),
        fallDamagePerTile: Number(parameters['fallDamagePerTile'] || 3),
        fallInvFrames: Number(parameters['fallInvincibilityFrames'] || 60),
        regionDamageEnabled: parameters['regionDamageEnabled'] === 'true',
        regionDamageType: String(parameters['regionDamageType'] || 'full'),
        regionDamageAmount: Number(parameters['regionDamageAmount'] || 50),
        regionDamageIds: String(parameters['regionDamageIds'] || ''),
        terrainDamageEnabled: parameters['terrainDamageEnabled'] === 'true',
        terrainDamageType: String(parameters['terrainDamageType'] || 'full'),
        terrainDamageAmount: Number(parameters['terrainDamageAmount'] || 50),
        terrainDamageIds: String(parameters['terrainDamageIds'] || ''),
        flyEnabled: parameters['flyEnabled'] !== 'false',
        flyKey: String(parameters['flyKey'] || 'shift'),
        flyHeight: Number(parameters['flyHeight'] || 80),
        flySpeed: Number(parameters['flySpeed'] || 1.5),
        flyBlockedRegions: String(parameters['flyBlockedRegions'] || ''),
        flyBlockedTerrains: String(parameters['flyBlockedTerrains'] || ''),
        flySprite: String(parameters['flySprite'] || ''),
        flyAnimSpeed: Number(parameters['flyAnimationSpeed'] || 6),
        flyBobSpeed: Number(parameters['flyBobSpeed'] || 0.08),
        flyBobAmount: Number(parameters['flyBobAmount'] || 8),
        flyHeightVariation: Number(parameters['flyHeightVariation'] || 0),
        flySwitch: Number(parameters['flySwitch'] || 0),
        jumpSE: String(parameters['jumpSE'] || 'Jump1'),
        landSE: String(parameters['landSE'] || ''),
        flySE: String(parameters['flySE'] || ''),
        landAnimFrames: Number(parameters['landAnimationFrames'] || 6),
        enableJumpFX: parameters['enableJumpFX'] !== 'false',
        jumpFXColor: String(parameters['jumpFXColor'] || '255,255,200'),
        enableLandFX: parameters['enableLandFX'] !== 'false',
        landFXColor: String(parameters['landFXColor'] || '200,200,200'),
        landFXDuration: Number(parameters['landFXDuration'] || 15),
        flyFXEnabled: parameters['flyFXEnabled'] !== 'false',
        flyFXColor: String(parameters['flyFXColor'] || '150,200,255'),
        disableSwitch: Number(parameters['disableJumpSwitch'] || 0),
        blockedRegions: String(parameters['blockedRegions'] || '')
    };

    var TILE = 48;
    var VECTORS = { 2:{x:0,y:1}, 4:{x:-1,y:0}, 6:{x:1,y:0}, 8:{x:0,y:-1} };

    function parseList(str) {
        if (!str || str === '') return [];
        return str.split(',').map(function(s) { return parseInt(s.trim()); }).filter(function(n) { return !isNaN(n); });
    }

    function parseColor(str) {
        var p = str.split(',');
        return { r: parseInt(p[0]) || 255, g: parseInt(p[1]) || 255, b: parseInt(p[2]) || 255 };
    }

    function lerp(a, b, t) { return a + (b - a) * t; }

    var blockedList = parseList(P.blockedRegions);
    var regionDamageList = parseList(P.regionDamageIds);
    var terrainDamageList = parseList(P.terrainDamageIds);
    var flyBlockedRegionsList = parseList(P.flyBlockedRegions);
    var flyBlockedTerrainsList = parseList(P.flyBlockedTerrains);

    var _init = Game_Player.prototype.initialize;
    var _update = Game_Player.prototype.update;
    var _moveInput = Game_Player.prototype.moveByInput;
    var _isMoving = Game_Player.prototype.isMoving;

    //=========================================================================
    // Custom Key Detection System
    //=========================================================================
    var _keys = {};

    document.addEventListener('keydown', function(e) { _keys[e.code] = true; });
    document.addEventListener('keyup', function(e) { _keys[e.code] = false; });

    function isKeyTriggered(keyName) {
        var code = keyToCode(keyName);
        if (!code) return false;
        if (_keys[code]) { _keys[code] = false; return true; }
        return false;
    }

    function keyToCode(name) {
        var map = {
            'ok': 'Enter', 'cancel': 'Escape', 'shift': 'ShiftLeft',
            'control': 'ControlLeft', 'alt': 'AltLeft', 'menu': 'Escape',
            'up': 'ArrowUp', 'down': 'ArrowDown', 'left': 'ArrowLeft', 'right': 'ArrowRight',
            'space': 'Space', 'enter': 'Enter', 'escape': 'Escape', 'tab': 'Tab',
            'backspace': 'Backspace', 'delete': 'Delete', 'insert': 'Insert',
            'home': 'Home', 'end': 'End', 'pageup': 'PageUp', 'pagedown': 'PageDown',
            'f1': 'F1', 'f2': 'F2', 'f3': 'F3', 'f4': 'F4', 'f5': 'F5', 'f6': 'F6',
            'f7': 'F7', 'f8': 'F8', 'f9': 'F9', 'f10': 'F10', 'f11': 'F11', 'f12': 'F12',
            'num0': 'Numpad0', 'num1': 'Numpad1', 'num2': 'Numpad2', 'num3': 'Numpad3',
            'num4': 'Numpad4', 'num5': 'Numpad5', 'num6': 'Numpad6', 'num7': 'Numpad7',
            'num8': 'Numpad8', 'num9': 'Numpad9',
            '0': 'Digit0', '1': 'Digit1', '2': 'Digit2', '3': 'Digit3', '4': 'Digit4',
            '5': 'Digit5', '6': 'Digit6', '7': 'Digit7', '8': 'Digit8', '9': 'Digit9',
            'a': 'KeyA', 'b': 'KeyB', 'c': 'KeyC', 'd': 'KeyD', 'e': 'KeyE', 'f': 'KeyF',
            'g': 'KeyG', 'h': 'KeyH', 'i': 'KeyI', 'j': 'KeyJ', 'k': 'KeyK', 'l': 'KeyL',
            'm': 'KeyM', 'n': 'KeyN', 'o': 'KeyO', 'p': 'KeyP', 'q': 'KeyQ', 'r': 'KeyR',
            's': 'KeyS', 't': 'KeyT', 'u': 'KeyU', 'v': 'KeyV', 'w': 'KeyW', 'x': 'KeyX',
            'y': 'KeyY', 'z': 'KeyZ'
        };
        return map[name.toLowerCase()] || null;
    }

    //=========================================================================
    // Game_Player
    //=========================================================================
    Game_Player.prototype.initialize = function() {
        _init.call(this);
        this._jmp = {
            active: false, progress: 0, height: 0, startX: 0, startY: 0,
            targetX: 0, targetY: 0, offsetX: 0, offsetY: 0, dir: 0,
            count: 0, peak: false, cooldown: 0, landing: false, landTimer: 0,
            invincible: false, invTimer: 0, fx: false, landFx: false,
            landFxTimer: 0, forcedDir: 0
        };
        this._fly = { active: false, originalSprite: '', originalSpeed: 4, bobOffset: 0, bobTimer: 0 };
    };

    Game_Player.prototype.jumpEnabled = function() {
        if (P.disableSwitch > 0 && $gameSwitches.value(P.disableSwitch)) return false;
        if ($gameTemp._jumpEnabled === false) return false;
        if (this._jmp.cooldown > 0) return false;
        if (this._jmp.landing) return false;
        return true;
    };

    Game_Player.prototype.regionBlocked = function(x, y) {
        var r = $gameMap.regionId(Math.floor(x), Math.floor(y));
        return r > 0 && blockedList.indexOf(r) >= 0;
    };

    Game_Player.prototype.jumpKeyPressed = function() { return isKeyTriggered(P.jumpKey); };
    Game_Player.prototype.flyKeyPressed = function() {
        if (!P.flyEnabled || P.flySwitch > 0) return false;
        return isKeyTriggered(P.flyKey);
    };

    Game_Player.prototype.canJumpTo = function(x, y) {
        var bx = Math.floor(x), by = Math.floor(y);
        if (bx < 0 || by < 0 || bx >= $gameMap.width() || by >= $gameMap.height()) return false;
        return true;
    };

    Game_Player.prototype.isRegionBlocked = function(x, y) {
        var r = $gameMap.regionId(Math.floor(x), Math.floor(y));
        return r > 0 && blockedList.indexOf(r) >= 0;
    };

    Game_Player.prototype.validLanding = function(x, y) {
        if (!this.canJumpTo(x, y)) return false;
        if (this.isRegionBlocked(x, y)) return false;
        return true;
    };

    Game_Player.prototype.findLanding = function() {
        var dirs = [2,4,6,8];
        for (var r = 1; r <= 5; r++) {
            for (var d = 0; d < dirs.length; d++) {
                var v = VECTORS[dirs[d]];
                var cx = Math.floor(this._x) + v.x * r;
                var cy = Math.floor(this._y) + v.y * r;
                if (this.validLanding(cx, cy)) { this._x = cx; this._y = cy; return; }
            }
        }
        this._x = Math.floor(this._x);
        this._y = Math.floor(this._y);
    };

    Game_Player.prototype.startJump = function(h, dur, forcedDir) {
        var j = this._jmp;
        if (j.active) { if (!P.enableDoubleJump || j.count >= 2) return; }
        if (this.isRegionBlocked(this._x, this._y)) return;
        j.active = true; j.landing = false; j.startX = this._x; j.startY = this._y;
        j.height = h || P.jumpHeight; j.progress = 0; j.peak = false; j.count++;
        var d = forcedDir || (Input.dir4 || this.direction());
        j.dir = d; j.forcedDir = forcedDir || 0; this.setDirection(d);
        var v = VECTORS[d] || {x:0, y:0};
        j.targetX = j.startX + (v.x * P.jumpDistance);
        j.targetY = j.startY + (v.y * P.jumpDistance);
        if (P.enableJumpFX) j.fx = true;
        this.playJumpSound();
    };

    Game_Player.prototype.performJump = function() {
        if (!this.jumpEnabled()) return;
        if (this._jmp.active) {
            if (P.enableDoubleJump && this._jmp.count === 1) {
                this.startJump(P.jumpHeight * P.doubleJumpHeight, P.jumpDuration);
            }
            return;
        }
        this.startJump(P.jumpHeight, P.jumpDuration);
    };

    Game_Player.prototype.updateJump = function() {
        var j = this._jmp;
        if (!j.active) return;
        j.progress += (1.0 / P.jumpDuration);
        if (j.progress >= 1.0) { j.progress = 1.0; this.landJump(); return; }
        j.offsetY = -Math.sin(j.progress * Math.PI) * j.height;
        var nx = lerp(j.startX, j.targetX, j.progress);
        var ny = lerp(j.startY, j.targetY, j.progress);
        if (this.canJumpTo(nx, ny)) { this._x = nx; this._y = ny; }
        else { j.targetX = this._x; j.targetY = this._y; }
        if (j.progress >= 0.5 && !j.peak) j.peak = true;
        this.setPattern(Math.floor(j.progress * P.animationSpeed) % 4);
    };

    Game_Player.prototype.landJump = function() {
        var j = this._jmp;
        this._x = Math.round(j.targetX);
        this._y = Math.round(j.targetY);
        if (!this.validLanding(this._x, this._y)) this.findLanding();
        var dmg = this.calcFallDamage();
        var regionDmg = this.calcRegionDamage();
        var terrainDmg = this.calcTerrainDamage();
        j.active = false; j.progress = 0; j.offsetY = 0; j.offsetX = 0;
        j.count = 0; j.peak = false; j.cooldown = P.jumpCooldown; j.fx = false;
        if (P.landAnimFrames > 0) { j.landing = true; j.landTimer = P.landAnimFrames; }
        if (P.enableLandFX) { j.landFx = true; j.landFxTimer = P.landFXDuration; }
        if (dmg > 0) this.applyFallDamage(dmg);
        if (regionDmg > 0) this.applyDamage(regionDmg);
        if (terrainDmg > 0) this.applyDamage(terrainDmg);
        this.playLandSound();
    };

    Game_Player.prototype.cancelJump = function() {
        var j = this._jmp;
        j.active = false; j.landing = false; j.progress = 0; j.offsetY = 0;
        j.offsetX = 0; j.count = 0; j.peak = false; j.landTimer = 0;
        j.fx = false; j.landFx = false; j.landFxTimer = 0;
    };

    Game_Player.prototype.calcFallDamage = function() {
        if (!P.enableFallDamage) return 0;
        return Math.floor(P.fallDamageBase + ((this._jmp.height / TILE) * P.fallDamagePerTile));
    };

    Game_Player.prototype.calcRegionDamage = function() {
        if (!P.regionDamageEnabled) return 0;
        var r = $gameMap.regionId(Math.floor(this._x), Math.floor(this._y));
        if (regionDamageList.indexOf(r) < 0) return 0;
        if (P.regionDamageType === 'full') { var a = $gameParty.leader(); return a ? a.mhp : 0; }
        return P.regionDamageAmount;
    };

    Game_Player.prototype.calcTerrainDamage = function() {
        if (!P.terrainDamageEnabled) return 0;
        var t = $gameMap.terrainTag(Math.floor(this._x), Math.floor(this._y));
        if (terrainDamageList.indexOf(t) < 0) return 0;
        if (P.terrainDamageType === 'full') { var a = $gameParty.leader(); return a ? a.mhp : 0; }
        return P.terrainDamageAmount;
    };

    Game_Player.prototype.applyDamage = function(dmg) {
        if (dmg <= 0) return;
        var a = $gameParty.leader();
        if (!a) return;
        a.setHp(Math.max(1, a.hp - dmg));
        $gameScreen.startFlash([255,0,0,160], 15);
    };

    Game_Player.prototype.applyFallDamage = function(dmg) {
        if (dmg <= 0) return;
        this.applyDamage(dmg);
        this._jmp.invincible = true;
        this._jmp.invTimer = P.fallInvFrames;
    };

    Game_Player.prototype.updateInvincibility = function() {
        if (!this._jmp.invincible) return;
        this._jmp.invTimer--;
        if (this._jmp.invTimer <= 0) { this._jmp.invincible = false; this._jmp.invTimer = 0; }
    };

    Game_Player.prototype.flyEnabled = function() {
        if (!P.flyEnabled || $gameTemp._flyEnabled === false) return false;
        if (P.flySwitch > 0 && !$gameSwitches.value(P.flySwitch)) return false;
        return true;
    };

    Game_Player.prototype.isFlyBlocked = function(x, y) {
        var r = $gameMap.regionId(Math.floor(x), Math.floor(y));
        var t = $gameMap.terrainTag(Math.floor(x), Math.floor(y));
        return flyBlockedRegionsList.indexOf(r) >= 0 || flyBlockedTerrainsList.indexOf(t) >= 0;
    };

    Game_Player.prototype.canMoveTo = function(x, y) {
        if (this._fly.active) return true;
        return $gameMap.checkPassage(Math.floor(x), Math.floor(y));
    };

    Game_Player.prototype.toggleFly = function() {
        if (!this.flyEnabled()) return;
        if (this._fly.active) this.endFly(); else this.startFly();
    };

    Game_Player.prototype.startFly = function() {
        var f = this._fly;
        if (f.active) return;
        f.active = true; f.originalSprite = this._characterName;
        f.originalSpeed = this.moveSpeed(); f.bobOffset = 0; f.bobTimer = 0;
        f.startHeight = 0; f.flyTimer = 0;
        this.setMoveSpeed(f.originalSpeed * P.flySpeed);
        if (P.flySprite && P.flySprite !== '') this._characterName = P.flySprite;
        this.playFlySound();
    };

    Game_Player.prototype.endFly = function() {
        var f = this._fly;
        if (!f.active) return;
        f.active = false; this.setMoveSpeed(f.originalSpeed);
        this._characterName = f.originalSprite; f.bobOffset = 0;
        f.startHeight = 0;
        this.playFlySound();
    };

    Game_Player.prototype.updateFly = function() {
        var f = this._fly;
        if (!f.active) return;
        if (P.flySwitch > 0 && !$gameSwitches.value(P.flySwitch)) { this.endFly(); return; }
        f.bobTimer += P.flyBobSpeed;
        f.flyTimer += 0.05;
        f.bobOffset = Math.sin(f.bobTimer) * P.flyBobAmount;
        f.startHeight = Math.sin(f.flyTimer) * P.flyHeightVariation;
        if (this.isFlyBlocked(this._x, this._y)) this.endFly();
    };

    Game_Player.prototype.getFlyOffsetY = function() {
        if (!this._fly.active) return 0;
        return -(P.flyHeight + this._fly.startHeight) + this._fly.bobOffset;
    };

    Game_Player.prototype.playJumpSound = function() {
        if (P.jumpSE) AudioManager.playSe({name: P.jumpSE, volume: 90, pitch: 100, pan: 0});
    };
    Game_Player.prototype.playLandSound = function() {
        if (P.landSE) AudioManager.playSe({name: P.landSE, volume: 90, pitch: 100, pan: 0});
    };
    Game_Player.prototype.playFlySound = function() {
        if (P.flySE) AudioManager.playSe({name: P.flySE, volume: 90, pitch: 100, pan: 0});
    };

    Game_Player.prototype.updateLanding = function() {
        var j = this._jmp;
        if (j.landing) { j.landTimer--; if (j.landTimer <= 0) { j.landing = false; j.landTimer = 0; } }
        if (j.landFx && j.landFxTimer > 0) { j.landFxTimer--; if (j.landFxTimer <= 0) j.landFx = false; }
    };

    Game_Player.prototype.moveByInput = function() {
        if (this.jumpKeyPressed()) this.performJump();
        if (this.flyKeyPressed()) this.toggleFly();
        if (!this._jmp.active) _moveInput.call(this);
    };

    Game_Player.prototype.update = function(sceneActive) {
        _update.call(this, sceneActive);
        if (this._jmp.cooldown > 0) this._jmp.cooldown--;
        this.updateInvincibility(); this.updateJump(); this.updateLanding(); this.updateFly();
    };

    Game_Player.prototype.isMoving = function() {
        if (this._jmp.active) return true;
        return _isMoving.call(this);
    };

    //=========================================================================
    // Sprite_Character
    //=========================================================================
    var _sprUpdate = Sprite_Character.prototype.update;
    Sprite_Character.prototype.update = function() {
        _sprUpdate.call(this);
        this.updateJumpOffset(); this.updateFlyOffset(); this.updateBlink();
        this.updateLandSquish(); this.updateJumpFX(); this.updateLandFX(); this.updateFlyFX();
    };

    Sprite_Character.prototype.updateJumpOffset = function() {
        if (this._character && this._character._jmp) this.y += this._character._jmp.offsetY || 0;
    };
    Sprite_Character.prototype.updateFlyOffset = function() {
        if (this._character && this._character._fly) this.y += this._character.getFlyOffsetY();
    };
    Sprite_Character.prototype.updateBlink = function() {
        if (this._character && this._character._jmp && this._character._jmp.invincible) {
            this.visible = Math.floor(this._character._jmp.invTimer / 4) % 2 === 0;
        } else if (this) { this.visible = true; }
    };
    Sprite_Character.prototype.updateLandSquish = function() {
        if (!this._character || !this._character._jmp) return;
        var j = this._character._jmp;
        if (j.landing && P.landAnimFrames > 0) {
            var r = j.landTimer / P.landAnimFrames;
            this.scale.y = 1.0 - (0.15 * r);
            this.scale.x = 1.0 + (0.1 * r);
        } else { this.scale.x = 1.0; this.scale.y = 1.0; }
    };

    Sprite_Character.prototype.updateJumpFX = function() {
        if (!this._character || !this._character._jmp) return;
        var j = this._character._jmp;
        if (j.fx && P.enableJumpFX && j.active) {
            var color = parseColor(P.jumpFXColor);
            if (!this._jumpFxSprite) {
                this._jumpFxSprite = new Sprite();
                this._jumpFxSprite.bitmap = new Bitmap(TILE * 2, TILE * 2);
                this.addChild(this._jumpFxSprite);
            }
            var bmp = this._jumpFxSprite.bitmap; bmp.clear();
            var a = Math.sin(j.progress * Math.PI) * 0.7;
            var cx = TILE, cy = TILE + 8, ex = 0.4 + j.progress * 0.6;
            var c = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + a + ')';
            if (bmp.fillCircle) {
                bmp.fillCircle(cx, cy, 14 * ex, c);
                bmp.fillCircle(cx - 10 * ex, cy + 4, 10 * ex, c);
                bmp.fillCircle(cx + 10 * ex, cy + 4, 10 * ex, c);
                bmp.fillCircle(cx - 5 * ex, cy - 5 * ex, 8 * ex, c);
                bmp.fillCircle(cx + 5 * ex, cy - 5 * ex, 8 * ex, c);
            } else {
                bmp.fillRect(cx - 14 * ex, cy - 10 * ex, 28 * ex, 18 * ex, c);
                bmp.fillRect(cx - 20 * ex, cy - 4 * ex, 12 * ex, 12 * ex, c);
                bmp.fillRect(cx + 8 * ex, cy - 4 * ex, 12 * ex, 12 * ex, c);
            }
            this._jumpFxSprite.x = -TILE / 2; this._jumpFxSprite.y = -TILE / 2;
            this._jumpFxSprite.visible = true; this._jumpFxSprite.opacity = 255;
        } else if (this._jumpFxSprite) { this._jumpFxSprite.visible = false; }
    };

    Sprite_Character.prototype.updateLandFX = function() {
        if (!this._character || !this._character._jmp) return;
        var j = this._character._jmp;
        if (j.landFx && P.enableLandFX) {
            var color = parseColor(P.landFXColor);
            var prog = 1.0 - (j.landFxTimer / P.landFXDuration);
            if (!this._landFxSprite) {
                this._landFxSprite = new Sprite();
                this._landFxSprite.bitmap = new Bitmap(TILE * 4, TILE * 2);
                this.addChild(this._landFxSprite);
            }
            var bmp = this._landFxSprite.bitmap; bmp.clear();
            var a = (1.0 - prog) * 0.8, ex = 0.3 + prog * 2.5;
            var cx = TILE * 2, cy = TILE;
            var c = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + a + ')';
            if (bmp.fillCircle) {
                bmp.fillCircle(cx, cy, 12 * ex, c);
                bmp.fillCircle(cx - 15 * ex, cy + 5, 8 * ex, c);
                bmp.fillCircle(cx + 15 * ex, cy + 5, 8 * ex, c);
                bmp.fillCircle(cx - 6 * ex, cy - 6 * ex, 6 * ex, c);
                bmp.fillCircle(cx + 6 * ex, cy - 6 * ex, 6 * ex, c);
            } else {
                bmp.fillRect(cx - 12 * ex, cy - 10 * ex, 24 * ex, 16 * ex, c);
                bmp.fillRect(cx - 22 * ex, cy - 4 * ex, 12 * ex, 10 * ex, c);
                bmp.fillRect(cx + 10 * ex, cy - 4 * ex, 12 * ex, 10 * ex, c);
            }
            this._landFxSprite.x = -TILE * 1.5; this._landFxSprite.y = -TILE / 2;
            this._landFxSprite.visible = true; this._landFxSprite.opacity = 255;
        } else if (this._landFxSprite) { this._landFxSprite.visible = false; }
    };

    Sprite_Character.prototype.updateFlyFX = function() {
        if (!this._character || !this._character._fly) return;
        var f = this._character._fly;
        if (f.active && P.flyFXEnabled) {
            var color = parseColor(P.flyFXColor);
            if (!this._flyFxSprite) {
                this._flyFxSprite = new Sprite();
                this._flyFxSprite.bitmap = new Bitmap(TILE * 2, TILE * 3);
                this.addChild(this._flyFxSprite);
            }
            var bmp = this._flyFxSprite.bitmap; bmp.clear();
            var cx = TILE, cy = TILE * 2;
            var c = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',0.5)';
            for (var i = 0; i < 4; i++) {
                var px = cx + Math.sin(f.bobTimer + i * 1.5) * 12;
                var py = cy - 10 - (i * 8) + Math.cos(f.bobTimer + i) * 4;
                var sz = 3 + Math.sin(f.bobTimer + i * 2) * 1.5;
                if (bmp.fillCircle) bmp.fillCircle(px, py, sz, c);
                else bmp.fillRect(px - sz, py - sz, sz * 2, sz * 2, c);
            }
            this._flyFxSprite.x = -TILE / 2; this._flyFxSprite.y = -TILE;
            this._flyFxSprite.visible = true; this._flyFxSprite.opacity = 255;
        } else if (this._flyFxSprite) { this._flyFxSprite.visible = false; }
    };

    //=========================================================================
    // Game_Map
    //=========================================================================
    var _mapSetup = Game_Map.prototype.setup;
    Game_Map.prototype.setup = function(mapId) {
        _mapSetup.call(this, mapId);
        if ($gamePlayer) { $gamePlayer.cancelJump(); $gamePlayer.endFly(); }
    };

    //=========================================================================
    // Script Calls
    //=========================================================================
    window.JDKJump = {
        enable: function() { $gameTemp._jumpEnabled = true; },
        disable: function() { $gameTemp._jumpEnabled = false; },
        enableDoubleJump: function() { P.enableDoubleJump = true; },
        disableDoubleJump: function() { P.enableDoubleJump = false; },
        jump: function(h) { $gamePlayer.startJump(h || P.jumpHeight, P.jumpDuration); },
        jumpTo: function(x, y, h) {
            var dx = x - $gamePlayer._x, dy = y - $gamePlayer._y;
            var dir = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 6 : 4) : (dy > 0 ? 2 : 8);
            $gamePlayer.startJump(h || P.jumpHeight, P.jumpDuration, dir);
        },
        isJumping: function() { return $gamePlayer._jmp.active; },
        set: function(prop, val) {
            switch(prop) {
                case 'cooldown': P.jumpCooldown = val; break;
                case 'height': P.jumpHeight = val; break;
                case 'distance': P.jumpDistance = val; break;
                case 'duration': P.jumpDuration = val; break;
                case 'key': P.jumpKey = val; break;
                case 'flyHeight': P.flyHeight = val; break;
                case 'flySpeed': P.flySpeed = val; break;
                case 'flySprite': P.flySprite = val; break;
                case 'flyBobSpeed': P.flyBobSpeed = val; break;
                case 'flyBobAmount': P.flyBobAmount = val; break;
                case 'flyHeightVariation': P.flyHeightVariation = val; break;
            }
        },
        get: function(prop) {
            switch(prop) {
                case 'cooldown': return P.jumpCooldown;
                case 'height': return P.jumpHeight;
                case 'distance': return P.jumpDistance;
                case 'duration': return P.jumpDuration;
                case 'key': return P.jumpKey;
                case 'isJumping': return $gamePlayer._jmp.active;
                case 'isEnabled': return $gamePlayer.jumpEnabled();
                case 'isFlying': return $gamePlayer._fly.active;
                case 'flyHeight': return P.flyHeight;
                case 'flySpeed': return P.flySpeed;
                case 'flyBobSpeed': return P.flyBobSpeed;
                case 'flyBobAmount': return P.flyBobAmount;
                case 'flyHeightVariation': return P.flyHeightVariation;
            }
            return 0;
        },
        fly: {
            enable: function() { $gamePlayer.startFly(); },
            disable: function() { $gamePlayer.endFly(); },
            toggle: function() { $gamePlayer.toggleFly(); },
            isFlying: function() { return $gamePlayer._fly.active; }
        }
    };

    //=========================================================================
    // Plugin Commands
    //=========================================================================
    PluginManager.registerCommand('JDK_JumpSystem', 'enableJump', function() { $gameTemp._jumpEnabled = true; });
    PluginManager.registerCommand('JDK_JumpSystem', 'disableJump', function() { $gameTemp._jumpEnabled = false; });
    PluginManager.registerCommand('JDK_JumpSystem', 'forceJump', function(a) { $gamePlayer.startJump(Number(a.height || P.jumpHeight), P.jumpDuration); });
    PluginManager.registerCommand('JDK_JumpSystem', 'jumpTo', function(a) {
        var x = Number(a.x || 0), y = Number(a.y || 0), h = Number(a.height || P.jumpHeight);
        var dx = x - $gamePlayer._x, dy = y - $gamePlayer._y;
        var dir = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 6 : 4) : (dy > 0 ? 2 : 8);
        $gamePlayer.startJump(h, P.jumpDuration, dir);
    });
    PluginManager.registerCommand('JDK_JumpSystem', 'setHeight', function(a) { P.jumpHeight = Number(a.height || 120); });
    PluginManager.registerCommand('JDK_JumpSystem', 'setDistance', function(a) { P.jumpDistance = Number(a.distance || 1.0); });
    PluginManager.registerCommand('JDK_JumpSystem', 'setDuration', function(a) { P.jumpDuration = Number(a.duration || 30); });
    PluginManager.registerCommand('JDK_JumpSystem', 'enableDoubleJump', function() { P.enableDoubleJump = true; });
    PluginManager.registerCommand('JDK_JumpSystem', 'disableDoubleJump', function() { P.enableDoubleJump = false; });
    PluginManager.registerCommand('JDK_JumpSystem', 'setCooldown', function(a) { P.jumpCooldown = Number(a.cooldown || 10); });
    PluginManager.registerCommand('JDK_JumpSystem', 'setJumpKey', function(a) { P.jumpKey = String(a.key || 'ok'); });
    PluginManager.registerCommand('JDK_JumpSystem', 'setFallDamage', function(a) { P.enableFallDamage = a.enabled === 'true'; });
    PluginManager.registerCommand('JDK_JumpSystem', 'setRegionDamage', function(a) {
        P.regionDamageEnabled = a.enabled === 'true';
        if (a.type) P.regionDamageType = a.type;
        if (a.amount) P.regionDamageAmount = Number(a.amount);
        if (a.ids) { P.regionDamageIds = a.ids; regionDamageList = parseList(a.ids); }
    });
    PluginManager.registerCommand('JDK_JumpSystem', 'setTerrainDamage', function(a) {
        P.terrainDamageEnabled = a.enabled === 'true';
        if (a.type) P.terrainDamageType = a.type;
        if (a.amount) P.terrainDamageAmount = Number(a.amount);
        if (a.ids) { P.terrainDamageIds = a.ids; terrainDamageList = parseList(a.ids); }
    });
    PluginManager.registerCommand('JDK_JumpSystem', 'enableFly', function() { $gamePlayer.startFly(); });
    PluginManager.registerCommand('JDK_JumpSystem', 'disableFly', function() { $gamePlayer.endFly(); });
    PluginManager.registerCommand('JDK_JumpSystem', 'toggleFly', function() { $gamePlayer.toggleFly(); });
    PluginManager.registerCommand('JDK_JumpSystem', 'setFlyHeight', function(a) { P.flyHeight = Number(a.height || 80); });
    PluginManager.registerCommand('JDK_JumpSystem', 'setFlySpeed', function(a) { P.flySpeed = Number(a.speed || 1.5); });
    PluginManager.registerCommand('JDK_JumpSystem', 'setFlySprite', function(a) {
        P.flySprite = String(a.sprite || '');
        if ($gamePlayer._fly.active && P.flySprite !== '') $gamePlayer._characterName = P.flySprite;
    });
    PluginManager.registerCommand('JDK_JumpSystem', 'setFlyBobSpeed', function(a) { P.flyBobSpeed = Number(a.speed || 0.08); });
    PluginManager.registerCommand('JDK_JumpSystem', 'setFlyBobAmount', function(a) { P.flyBobAmount = Number(a.amount || 8); });
    PluginManager.registerCommand('JDK_JumpSystem', 'setFlyHeightVariation', function(a) { P.flyHeightVariation = Number(a.variation || 0); });

})();
