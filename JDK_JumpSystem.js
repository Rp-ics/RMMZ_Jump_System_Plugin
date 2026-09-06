/*:
 * @target MZ
 * @title JDK Jump System
 * @plugindesc Advanced jump system for RPG Maker MZ. Jump over obstacles, no collision during jump, event commands for puzzles.
 * @author Rpx & Just Dev
 * @url https://github.com/jdk-plugins/jdk-jump-system
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
 * @desc Key to perform jump (any valid RPG Maker MZ key)
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
 * @desc RPG Maker MZ input key (ok, shift, control, alt, up, down, left, right, etc.)
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
 * @help
 * JDK Jump System v4.0.0
 * =====================
 *
 * Jump over obstacles. No collision during jump.
 *
 * Categories:
 * - JUMP SETTINGS: Basic jump physics
 * - DOUBLE JUMP: Second jump in mid-air
 * - FALL DAMAGE: Damage when falling
 * - AUDIO: Sound effects
 * - VISUALS: Cloud effects and animations
 * - RESTRICTIONS: Disable jump or block regions
 *
 * During Jump:
 * - Player passes OVER water, walls, events, traps
 * - Only blocked regions stop you
 * - Trajectory is fixed at start (4 directions)
 *
 * Event Commands (Script Call):
 * - JDKJump.enable()           Enable jumping
 * - JDKJump.disable()          Disable jumping
 * - JDKJump.jump(height)       Force jump with height
 * - JDKJump.jumpTo(x, y)       Jump to specific tile
 * - JDKJump.isJumping()        Check if currently jumping
 * - JDKJump.set cooldown(n)    Set cooldown frames
 * - JDKJump.set height(n)      Set jump height
 * - JDKJump.set distance(n)    Set jump distance
 * - JDKJump.set duration(n)    Set jump duration
 *
 * For Puzzles:
 * - Use blockedRegions to prevent jumping in certain areas
 * - Use disableJumpSwitch to toggle jump via events
 * - Use JDKJump.jumpTo(x,y) to create scripted jumps
 *
 * @end
 */

(function() {

    //=========================================================================
    // Plugin Parameters
    //=========================================================================
    const parameters = PluginManager.parameters('JDK_JumpSystem');
    const P = {
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
        jumpSE: String(parameters['jumpSE'] || 'Jump1'),
        landSE: String(parameters['landSE'] || ''),
        landAnimFrames: Number(parameters['landAnimationFrames'] || 6),
        enableJumpFX: parameters['enableJumpFX'] !== 'false',
        jumpFXColor: String(parameters['jumpFXColor'] || '255,255,200'),
        enableLandFX: parameters['enableLandFX'] !== 'false',
        landFXColor: String(parameters['landFXColor'] || '200,200,200'),
        landFXDuration: Number(parameters['landFXDuration'] || 15),
        disableSwitch: Number(parameters['disableJumpSwitch'] || 0),
        blockedRegions: String(parameters['blockedRegions'] || '')
    };

    //=========================================================================
    // Constants
    //=========================================================================
    const TILE = 48;
    const VECTORS = {
        2:{x:0,y:1}, 4:{x:-1,y:0}, 6:{x:1,y:0}, 8:{x:0,y:-1}
    };

    //=========================================================================
    // Utilities
    //=========================================================================
    function blockedRegions() {
        var str = P.blockedRegions;
        if (!str || str === '') return [];
        return str.split(',').map(function(s) { return parseInt(s.trim()); }).filter(function(n) { return !isNaN(n); });
    }

    var blockedList = blockedRegions();

    function lerp(a, b, t) {
        return a + (b - a) * t;
    }

    function parseColor(str) {
        var parts = str.split(',');
        return {
            r: parseInt(parts[0]) || 255,
            g: parseInt(parts[1]) || 255,
            b: parseInt(parts[2]) || 255
        };
    }

    //=========================================================================
    // Alias Storage
    //=========================================================================
    var _init = Game_Player.prototype.initialize;
    var _update = Game_Player.prototype.update;
    var _moveInput = Game_Player.prototype.moveByInput;
    var _isMoving = Game_Player.prototype.isMoving;

    //=========================================================================
    // Game_Player - Initialize
    //=========================================================================
    Game_Player.prototype.initialize = function() {
        _init.call(this);
        this._jmp = {
            active: false,
            progress: 0,
            height: 0,
            startX: 0,
            startY: 0,
            targetX: 0,
            targetY: 0,
            offsetX: 0,
            offsetY: 0,
            dir: 0,
            count: 0,
            peak: false,
            cooldown: 0,
            landing: false,
            landTimer: 0,
            invincible: false,
            invTimer: 0,
            fx: false,
            landFx: false,
            landFxTimer: 0,
            forcedDir: 0
        };
    };

    //=========================================================================
    // Game_Player - Jump Enabled Check
    //=========================================================================
    Game_Player.prototype.jumpEnabled = function() {
        var j = this._jmp;
        if (P.disableSwitch > 0 && $gameSwitches.value(P.disableSwitch)) return false;
        if ($gameTemp._jumpEnabled === false) return false;
        if (j.cooldown > 0) return false;
        if (j.landing) return false;
        return true;
    };

    Game_Player.prototype.regionBlocked = function(x, y) {
        var r = $gameMap.regionId(Math.floor(x), Math.floor(y));
        return r > 0 && blockedList.indexOf(r) >= 0;
    };

    Game_Player.prototype.jumpKeyPressed = function() {
        return Input.isTriggered(P.jumpKey);
    };

    //=========================================================================
    // Game_Player - Collision During Jump (NO collision except regions)
    //=========================================================================
    Game_Player.prototype.canJumpTo = function(x, y) {
        var bx = Math.floor(x);
        var by = Math.floor(y);
        if (bx < 0 || by < 0) return false;
        if (bx >= $gameMap.width() || by >= $gameMap.height()) return false;
        if (this.regionBlocked(bx, by)) return false;
        return true;
    };

    Game_Player.prototype.validLanding = function(x, y) {
        return this.canJumpTo(x, y);
    };

    Game_Player.prototype.findLanding = function() {
        var dirs = [2,4,6,8];
        for (var r = 1; r <= 5; r++) {
            for (var d = 0; d < dirs.length; d++) {
                var v = VECTORS[dirs[d]];
                var cx = Math.floor(this._x) + v.x * r;
                var cy = Math.floor(this._y) + v.y * r;
                if (this.validLanding(cx, cy)) {
                    this._x = cx;
                    this._y = cy;
                    return;
                }
            }
        }
        this._x = Math.floor(this._x);
        this._y = Math.floor(this._y);
    };

    //=========================================================================
    // Game_Player - Start Jump
    //=========================================================================
    Game_Player.prototype.startJump = function(h, dur, forcedDir) {
        var j = this._jmp;

        if (j.active) {
            if (!P.enableDoubleJump) return;
            if (j.count >= 2) return;
        }

        j.active = true;
        j.landing = false;
        j.startX = this._x;
        j.startY = this._y;
        j.height = h || P.jumpHeight;
        j.progress = 0;
        j.peak = false;
        j.count++;

        var d;
        if (forcedDir) {
            d = forcedDir;
        } else {
            d = Input.dir4 || this.direction();
        }

        j.dir = d;
        j.forcedDir = forcedDir || 0;
        this.setDirection(d);

        var dist = P.jumpDistance;
        var v = VECTORS[d] || {x:0, y:0};
        j.targetX = j.startX + (v.x * dist);
        j.targetY = j.startY + (v.y * dist);

        if (P.enableJumpFX) {
            j.fx = true;
        }

        this.playJumpSound();
    };

    //=========================================================================
    // Game_Player - Perform Jump (from input)
    //=========================================================================
    Game_Player.prototype.performJump = function() {
        if (!this.jumpEnabled()) return;

        if (this._jmp.active) {
            if (P.enableDoubleJump && this._jmp.count === 1) {
                var h = P.jumpHeight * P.doubleJumpHeight;
                this.startJump(h, P.jumpDuration);
            }
            return;
        }

        this.startJump(P.jumpHeight, P.jumpDuration);
    };

    //=========================================================================
    // Game_Player - Update Jump
    //=========================================================================
    Game_Player.prototype.updateJump = function() {
        var j = this._jmp;
        if (!j.active) return;

        j.progress += (1.0 / P.jumpDuration);

        if (j.progress >= 1.0) {
            j.progress = 1.0;
            this.landJump();
            return;
        }

        j.offsetY = -Math.sin(j.progress * Math.PI) * j.height;

        var nx = lerp(j.startX, j.targetX, j.progress);
        var ny = lerp(j.startY, j.targetY, j.progress);

        if (this.canJumpTo(nx, ny)) {
            this._x = nx;
            this._y = ny;
        } else {
            j.targetX = this._x;
            j.targetY = this._y;
        }

        if (j.progress >= 0.5 && !j.peak) {
            j.peak = true;
        }

        var animFrame = Math.floor(j.progress * P.animationSpeed) % 4;
        this.setPattern(animFrame);
    };

    //=========================================================================
    // Game_Player - Land Jump
    //=========================================================================
    Game_Player.prototype.landJump = function() {
        var j = this._jmp;

        this._x = Math.round(j.targetX);
        this._y = Math.round(j.targetY);

        if (!this.validLanding(this._x, this._y)) {
            this.findLanding();
        }

        var dmg = this.calcFallDamage();

        j.active = false;
        j.progress = 0;
        j.offsetY = 0;
        j.offsetX = 0;
        j.count = 0;
        j.peak = false;
        j.cooldown = P.jumpCooldown;
        j.fx = false;

        if (P.landAnimFrames > 0) {
            j.landing = true;
            j.landTimer = P.landAnimFrames;
        }

        if (P.enableLandFX) {
            j.landFx = true;
            j.landFxTimer = P.landFXDuration;
        }

        if (dmg > 0) {
            this.applyFallDamage(dmg);
        }

        this.playLandSound();
    };

    Game_Player.prototype.cancelJump = function() {
        var j = this._jmp;
        j.active = false;
        j.landing = false;
        j.progress = 0;
        j.offsetY = 0;
        j.offsetX = 0;
        j.count = 0;
        j.peak = false;
        j.landTimer = 0;
        j.fx = false;
        j.landFx = false;
        j.landFxTimer = 0;
    };

    //=========================================================================
    // Game_Player - Fall Damage
    //=========================================================================
    Game_Player.prototype.calcFallDamage = function() {
        if (!P.enableFallDamage) return 0;
        var tiles = this._jmp.height / TILE;
        return Math.floor(P.fallDamageBase + (tiles * P.fallDamagePerTile));
    };

    Game_Player.prototype.applyFallDamage = function(dmg) {
        if (dmg <= 0) return;
        var actor = $gameParty.leader();
        if (!actor) return;
        actor.setHp(Math.max(1, actor.hp - dmg));
        this._jmp.invincible = true;
        this._jmp.invTimer = P.fallInvFrames;
        $gameScreen.startFlash([255,0,0,160], 15);
    };

    Game_Player.prototype.updateInvincibility = function() {
        var j = this._jmp;
        if (!j.invincible) return;
        j.invTimer--;
        if (j.invTimer <= 0) {
            j.invincible = false;
            j.invTimer = 0;
        }
    };

    //=========================================================================
    // Game_Player - Sounds
    //=========================================================================
    Game_Player.prototype.playJumpSound = function() {
        if (!P.jumpSE || P.jumpSE === '') return;
        AudioManager.playSe({name: P.jumpSE, volume: 90, pitch: 100, pan: 0});
    };

    Game_Player.prototype.playLandSound = function() {
        if (!P.landSE || P.landSE === '') return;
        AudioManager.playSe({name: P.landSE, volume: 90, pitch: 100, pan: 0});
    };

    //=========================================================================
    // Game_Player - Landing Animation
    //=========================================================================
    Game_Player.prototype.updateLanding = function() {
        var j = this._jmp;
        if (j.landing) {
            j.landTimer--;
            if (j.landTimer <= 0) {
                j.landing = false;
                j.landTimer = 0;
            }
        }
        if (j.landFx && j.landFxTimer > 0) {
            j.landFxTimer--;
            if (j.landFxTimer <= 0) {
                j.landFx = false;
            }
        }
    };

    //=========================================================================
    // Game_Player - Movement Input Override
    //=========================================================================
    Game_Player.prototype.moveByInput = function() {
        if (this.jumpKeyPressed()) {
            this.performJump();
        }

        if (!this._jmp.active) {
            _moveInput.call(this);
        }
    };

    Game_Player.prototype.update = function(sceneActive) {
        _update.call(this, sceneActive);

        if (this._jmp.cooldown > 0) {
            this._jmp.cooldown--;
        }

        this.updateInvincibility();
        this.updateJump();
        this.updateLanding();
    };

    Game_Player.prototype.isMoving = function() {
        if (this._jmp.active) return true;
        return _isMoving.call(this);
    };

    //=========================================================================
    // Sprite_Character - Rendering
    //=========================================================================
    var _sprUpdate = Sprite_Character.prototype.update;
    Sprite_Character.prototype.update = function() {
        _sprUpdate.call(this);
        this.updateJumpOffset();
        this.updateBlink();
        this.updateLandSquish();
        this.updateJumpFX();
        this.updateLandFX();
    };

    Sprite_Character.prototype.updateJumpOffset = function() {
        if (this._character && this._character._jmp) {
            this.y += this._character._jmp.offsetY || 0;
        }
    };

    Sprite_Character.prototype.updateBlink = function() {
        if (this._character && this._character._jmp) {
            var j = this._character._jmp;
            if (j.invincible) {
                this.visible = Math.floor(j.invTimer / 4) % 2 === 0;
            } else {
                this.visible = true;
            }
        }
    };

    Sprite_Character.prototype.updateLandSquish = function() {
        if (!this._character || !this._character._jmp) return;
        var j = this._character._jmp;

        if (j.landing && P.landAnimFrames > 0) {
            var ratio = j.landTimer / P.landAnimFrames;
            this.scale.y = 1.0 - (0.15 * ratio);
            this.scale.x = 1.0 + (0.1 * ratio);
        } else {
            this.scale.x = 1.0;
            this.scale.y = 1.0;
        }
    };

    //=========================================================================
    // Jump FX - Cloud during jump
    //=========================================================================
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

            var bmp = this._jumpFxSprite.bitmap;
            bmp.clear();

            var progress = j.progress;
            var alpha = Math.sin(progress * Math.PI) * 0.7;
            var cx = TILE;
            var cy = TILE + 8;
            var expand = 0.4 + progress * 0.6;
            var c = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + alpha + ')';

            if (bmp.fillCircle) {
                bmp.fillCircle(cx, cy, 14 * expand, c);
                bmp.fillCircle(cx - 10 * expand, cy + 4, 10 * expand, c);
                bmp.fillCircle(cx + 10 * expand, cy + 4, 10 * expand, c);
                bmp.fillCircle(cx - 5 * expand, cy - 5 * expand, 8 * expand, c);
                bmp.fillCircle(cx + 5 * expand, cy - 5 * expand, 8 * expand, c);
            } else {
                bmp.fillRect(cx - 14 * expand, cy - 10 * expand, 28 * expand, 18 * expand, c);
                bmp.fillRect(cx - 20 * expand, cy - 4 * expand, 12 * expand, 12 * expand, c);
                bmp.fillRect(cx + 8 * expand, cy - 4 * expand, 12 * expand, 12 * expand, c);
            }

            this._jumpFxSprite.x = -TILE / 2 - 25;
            this._jumpFxSprite.y = TILE / 2 - 70;
            this._jumpFxSprite.visible = true;
            this._jumpFxSprite.opacity = 255;
        } else if (this._jumpFxSprite) {
            this._jumpFxSprite.visible = false;
        }
    };

    //=========================================================================
    // Land FX - Cloud burst on landing
    //=========================================================================
    Sprite_Character.prototype.updateLandFX = function() {
        if (!this._character || !this._character._jmp) return;
        var j = this._character._jmp;

        if (j.landFx && P.enableLandFX) {
            var color = parseColor(P.landFXColor);
            var timer = j.landFxTimer;
            var maxTimer = P.landFXDuration;
            var progress = 1.0 - (timer / maxTimer);

            if (!this._landFxSprite) {
                this._landFxSprite = new Sprite();
                this._landFxSprite.bitmap = new Bitmap(TILE * 4, TILE * 2);
                this.addChild(this._landFxSprite);
            }

            var bmp = this._landFxSprite.bitmap;
            bmp.clear();

            var alpha = (1.0 - progress) * 0.8;
            var expand = 0.3 + progress * 2.5;
            var cx = TILE * 2;
            var cy = TILE;
            var c = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + alpha + ')';

            if (bmp.fillCircle) {
                bmp.fillCircle(cx, cy, 12 * expand, c);
                bmp.fillCircle(cx - 15 * expand, cy + 5, 8 * expand, c);
                bmp.fillCircle(cx + 15 * expand, cy + 5, 8 * expand, c);
                bmp.fillCircle(cx - 6 * expand, cy - 6 * expand, 6 * expand, c);
                bmp.fillCircle(cx + 6 * expand, cy - 6 * expand, 6 * expand, c);
            } else {
                bmp.fillRect(cx - 12 * expand, cy - 10 * expand, 24 * expand, 16 * expand, c);
                bmp.fillRect(cx - 22 * expand, cy - 4 * expand, 12 * expand, 10 * expand, c);
                bmp.fillRect(cx + 10 * expand, cy - 4 * expand, 12 * expand, 10 * expand, c);
            }

            this._landFxSprite.x = -TILE * 1.5 - 25;
            this._landFxSprite.y = TILE / 2 - 70;
            this._landFxSprite.visible = true;
            this._landFxSprite.opacity = 255;
        } else if (this._landFxSprite) {
            this._landFxSprite.visible = false;
        }
    };

    //=========================================================================
    // Game_Map - Reset on map change
    //=========================================================================
    var _mapSetup = Game_Map.prototype.setup;
    Game_Map.prototype.setup = function(mapId) {
        _mapSetup.call(this, mapId);
        if ($gamePlayer) {
            $gamePlayer.cancelJump();
        }
    };

    //=========================================================================
    // QMovement Compatibility
    //=========================================================================
    var hasQMovement = typeof QMovement !== 'undefined';
    if (hasQMovement) {
        // QMovement handles its own movement
    }

    //=========================================================================
    // Script Calls + Event Commands
    //=========================================================================
    window.JDKJump = {
        enable: function() {
            $gameTemp._jumpEnabled = true;
        },
        disable: function() {
            $gameTemp._jumpEnabled = false;
        },
        jump: function(height) {
            $gamePlayer.startJump(height || P.jumpHeight, P.jumpDuration);
        },
        jumpTo: function(x, y, height) {
            var dx = x - $gamePlayer._x;
            var dy = y - $gamePlayer._y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            var dir = 2;
            if (Math.abs(dx) > Math.abs(dy)) {
                dir = dx > 0 ? 6 : 4;
            } else {
                dir = dy > 0 ? 2 : 8;
            }
            $gamePlayer.startJump(height || P.jumpHeight, P.jumpDuration, dir);
        },
        isJumping: function() {
            return $gamePlayer._jmp.active;
        },
        set: function(prop, value) {
            switch(prop) {
                case 'cooldown': P.jumpCooldown = value; break;
                case 'height': P.jumpHeight = value; break;
                case 'distance': P.jumpDistance = value; break;
                case 'duration': P.jumpDuration = value; break;
                case 'key': P.jumpKey = value; break;
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
            }
            return 0;
        }
    };

    //=========================================================================
    // Plugin Manager Commands (visible in Event Editor)
    //=========================================================================
    PluginManager.registerCommand('JDK_JumpSystem', 'enableJump', function(args) {
        $gameTemp._jumpEnabled = true;
    });

    PluginManager.registerCommand('JDK_JumpSystem', 'disableJump', function(args) {
        $gameTemp._jumpEnabled = false;
    });

    PluginManager.registerCommand('JDK_JumpSystem', 'forceJump', function(args) {
        var height = Number(args.height || P.jumpHeight);
        $gamePlayer.startJump(height, P.jumpDuration);
    });

    PluginManager.registerCommand('JDK_JumpSystem', 'jumpTo', function(args) {
        var x = Number(args.x || 0);
        var y = Number(args.y || 0);
        var height = Number(args.height || P.jumpHeight);
        var dx = x - $gamePlayer._x;
        var dy = y - $gamePlayer._y;
        var dir = 2;
        if (Math.abs(dx) > Math.abs(dy)) {
            dir = dx > 0 ? 6 : 4;
        } else {
            dir = dy > 0 ? 2 : 8;
        }
        $gamePlayer.startJump(height, P.jumpDuration, dir);
    });

    PluginManager.registerCommand('JDK_JumpSystem', 'setHeight', function(args) {
        P.jumpHeight = Number(args.height || 120);
    });

    PluginManager.registerCommand('JDK_JumpSystem', 'setDistance', function(args) {
        P.jumpDistance = Number(args.distance || 1.0);
    });

    PluginManager.registerCommand('JDK_JumpSystem', 'setDuration', function(args) {
        P.jumpDuration = Number(args.duration || 30);
    });

    PluginManager.registerCommand('JDK_JumpSystem', 'setCooldown', function(args) {
        P.jumpCooldown = Number(args.cooldown || 10);
    });

    PluginManager.registerCommand('JDK_JumpSystem', 'setJumpKey', function(args) {
        P.jumpKey = String(args.key || 'ok');
    });

    PluginManager.registerCommand('JDK_JumpSystem', 'setFallDamage', function(args) {
        P.enableFallDamage = args.enabled === 'true';
    });

})();
