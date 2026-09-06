# RMMZ Jump System Plugin

A complete jump and fly system for RPG Maker MZ. Jump over obstacles, fly with custom sprites, region/terrain damage, and full event control for puzzle building.

## Features

- **Jump over water, walls, traps** — no collision during jump
- **4-directional movement** — Up, Down, Left, Right
- **Double Jump** — configurable second jump in mid-air
- **Fly Mode** — toggle flying with custom sprite
- **Region Damage** — lose HP when jumping into specific regions
- **Terrain Damage** — lose HP when jumping into specific terrain tags
- **Cloud FX** — visual effects on jump, landing, and flying
- **Fall Damage** — optional damage system with invincibility frames
- **Landing Animation** — squish effect on impact
- **Event Commands** — 18 plugin commands for puzzle building
- **QMovement Compatible** — works with other movement plugins

---

## Installation

1. Download `JDK_JumpSystem.js`
2. Place it in your project's `js/plugins/` folder
3. Open RPG Maker MZ → **Tools** → **Plugin Manager**
4. Add **JDK_JumpSystem**
5. Configure parameters as needed
6. Save and test

---

## Plugin Parameters

### Jump Settings

| Parameter | Default | Description |
|-----------|---------|-------------|
| Jump Height | 120 | Height of the jump in pixels |
| Jump Distance | 1.0 | Distance in tiles (1.0 = one tile) |
| Jump Duration | 30 | Frames to complete jump (higher = slower) |
| Animation Speed | 8 | Walk animation cycle during jump |
| Jump Cooldown | 10 | Frames between jumps |
| Jump Key | ok | Any key from valid keys list below |

### Double Jump

| Parameter | Default | Description |
|-----------|---------|-------------|
| Enable Double Jump | true | Allow second jump in mid-air |
| Double Jump Height | 0.6 | Height multiplier for second jump |

### Fall Damage

| Parameter | Default | Description |
|-----------|---------|-------------|
| Enable Fall Damage | false | Enable damage when landing from height |
| Base Fall Damage | 5 | Minimum damage from any fall |
| Damage Per Tile | 3 | Additional damage per tile of height |
| Invincibility Frames | 60 | Frames of invincibility after damage |

### Region / Terrain Damage

| Parameter | Default | Description |
|-----------|---------|-------------|
| Region Damage Enabled | false | Enable damage when jumping into regions |
| Region Damage Type | full | `full` = all HP, `custom` = specific amount |
| Region Damage Amount | 50 | Damage when type is custom |
| Region Damage IDs | (none) | Region IDs that cause damage (comma separated) |
| Terrain Damage Enabled | false | Enable damage when jumping into terrain tags |
| Terrain Damage Type | full | `full` = all HP, `custom` = specific amount |
| Terrain Damage Amount | 50 | Damage when type is custom |
| Terrain Damage IDs | (none) | Terrain tag IDs that cause damage (comma separated) |

### Fly Mode

| Parameter | Default | Description |
|-----------|---------|-------------|
| Fly Enabled | true | Enable fly mode feature |
| Fly Key | shift | Any key from valid keys list below |
| Fly Height | 80 | Height above ground while flying |
| Fly Speed | 1.5 | Movement speed multiplier (1.0 = normal) |
| Fly Blocked Regions | (none) | Regions where flying is blocked |
| Fly Blocked Terrains | (none) | Terrain tags where flying is blocked |
| Fly Sprite | (none) | Custom sprite while flying (empty = original) |
| Fly Animation Speed | 6 | Animation speed while flying |
| Fly Switch | 0 | Switch to enable/disable fly (0 = use key) |

**Valid Keys for Jump Key and Fly Key:**
`ok`, `shift`, `control`, `alt`, `space`, `enter`, `tab`, `escape`, `backspace`, `delete`, `insert`, `home`, `end`, `pageup`, `pagedown`, `up`, `down`, `left`, `right`, `a`-`z`, `0`-`9`, `f1`-`f12`, `num0`-`num9`

### Audio

| Parameter | Default | Description |
|-----------|---------|-------------|
| Jump Sound | Jump1 | Sound effect when jumping |
| Land Sound | (none) | Sound effect when landing |
| Fly Sound | (none) | Sound effect when toggling fly |

### Visuals

| Parameter | Default | Description |
|-----------|---------|-------------|
| Land Animation Frames | 6 | Duration of squish animation (0 = none) |
| Enable Jump FX | true | Show cloud effect when jumping |
| Jump FX Color | 255,255,200 | Color of jump cloud (R,G,B) |
| Enable Land FX | true | Show cloud effect when landing |
| Land FX Color | 200,200,200 | Color of land cloud (R,G,B) |
| Land FX Duration | 15 | Duration of land effect in frames |
| Fly FX Enabled | true | Show particle effect while flying |
| Fly FX Color | 150,200,255 | Color of fly particles (R,G,B) |

### Restrictions

| Parameter | Default | Description |
|-----------|---------|-------------|
| Disable Jump Switch | 0 | Switch to disable jumping globally (0 = none) |
| Blocked Regions | (none) | Region IDs where jumping is blocked (comma separated) |

---

## Plugin Commands (Event Editor)

These commands appear in the **Plugin Command** menu when creating events.

### Jump Commands

| Command | Parameters | Description |
|---------|------------|-------------|
| Enable Jump | — | Enable jumping |
| Disable Jump | — | Disable jumping |
| Force Jump | Height | Force a jump with custom height |
| Jump To | X, Y, Height | Jump to specific tile position |
| Set Jump Height | Height | Change jump height at runtime |
| Set Jump Distance | Distance | Change jump distance at runtime |
| Set Jump Duration | Duration | Change jump speed at runtime |
| Set Jump Cooldown | Cooldown | Change cooldown between jumps |
| Enable Double Jump | — | Enable double jump |
| Disable Double Jump | — | Disable double jump |
| Set Jump Key | Key | Change jump key at runtime |
| Set Fall Damage | Enabled | Enable/disable fall damage |

### Region / Terrain Damage Commands

| Command | Parameters | Description |
|---------|------------|-------------|
| Set Region Damage | Enabled, Type, Amount, IDs | Configure region damage |
| Set Terrain Damage | Enabled, Type, Amount, IDs | Configure terrain damage |

### Fly Commands

| Command | Parameters | Description |
|---------|------------|-------------|
| Enable Fly | — | Enable flying |
| Disable Fly | — | Disable flying |
| Toggle Fly | — | Toggle fly mode |
| Set Fly Height | Height | Change fly height |
| Set Fly Speed | Speed | Change fly speed |
| Set Fly Sprite | Sprite | Change fly sprite (filename) |

---

## Script Calls (Advanced)

### Basic Control

```javascript
JDKJump.enable()            // Enable jumping
JDKJump.disable()           // Disable jumping
JDKJump.isJumping()         // Returns true if currently jumping
JDKJump.enableDoubleJump()  // Enable double jump
JDKJump.disableDoubleJump() // Disable double jump
```

### Force Jump

```javascript
JDKJump.jump(height)    // Jump with custom height
JDKJump.jumpTo(x, y)    // Jump to specific tile coordinates
JDKJump.jumpTo(x, y, height)  // Jump to coordinates with height
```

### Modify Parameters

```javascript
JDKJump.set('height', 200)     // Change jump height
JDKJump.set('distance', 2)     // Change jump distance
JDKJump.set('duration', 40)    // Change jump duration
JDKJump.set('cooldown', 5)     // Change cooldown
JDKJump.set('key', 'shift')    // Change jump key
```

### Read Parameters

```javascript
JDKJump.get('height')          // Get current jump height
JDKJump.get('distance')        // Get current jump distance
JDKJump.get('duration')        // Get current jump duration
JDKJump.get('cooldown')        // Get current cooldown
JDKJump.get('key')             // Get current jump key
JDKJump.get('isJumping')       // true/false
JDKJump.get('isEnabled')       // true/false
```

### Fly Control

```javascript
JDKJump.fly.enable()           // Start flying
JDKJump.fly.disable()          // Stop flying
JDKJump.fly.toggle()           // Toggle fly mode
JDKJump.fly.isFlying()         // true/false

JDKJump.set('flyHeight', 100)  // Change fly height
JDKJump.set('flySpeed', 2.0)   // Change fly speed
JDKJump.set('flySprite', 'Actor1')  // Change fly sprite
```

---

## Region / Terrain Damage

### How It Works

When the player lands on a region or terrain tag that causes damage, they lose HP based on the configured type:

- **full**: Loses all HP (instant death, minimum 1 HP)
- **custom**: Loses a specific amount of HP

### Example: Lava Regions

1. Paint region `5` on lava tiles
2. Set parameters:
   - Region Damage Enabled: `true`
   - Region Damage Type: `full`
   - Region Damage IDs: `5`
3. When player jumps onto lava, they lose all HP

### Example: Poison Terrain

1. Use terrain tag `3` on poison swamps
2. Set parameters:
   - Terrain Damage Enabled: `true`
   - Terrain Damage Type: `custom`
   - Terrain Damage Amount: `20`
   - Terrain Damage IDs: `3`
3. When player jumps onto poison, they lose 20 HP

### Runtime Configuration

```
◆Plugin Command: [JDK Jump System] Set Region Damage
  Enabled: true
  Type: custom
  Amount: 30
  IDs: 5,6,7
```

---

## Fly Mode

### How It Works

- Press the fly key (default: Shift) to toggle flying
- While flying, player floats above ground
- Movement speed increases by fly speed multiplier
- Custom sprite can be used while flying
- Flying is blocked by configured regions/terrain tags

### Custom Fly Sprite

1. Create a sprite sheet in `img/characters/`
2. Set **Fly Sprite** parameter to the filename (without `.png`)
3. When fly mode starts, player sprite changes automatically
4. When fly mode ends, original sprite is restored

### Example: Flying Over Water

1. Set Fly Blocked Regions to `10` (water region)
2. Player cannot fly over water tiles
3. Must land and walk around

### Runtime Configuration

```
◆Plugin Command: [JDK Jump System] Set Fly Height
  Height: 100

◆Plugin Command: [JDK Jump System] Set Fly Sprite
  Sprite: Hero_Fly
```

---

## Creating Puzzles

### Basic Puzzle Flow

1. Disable jump at start of puzzle
2. Player must solve puzzle on ground
3. Re-enable jump after puzzle is solved
4. Player can now jump to reach new area

### Example Event Setup

```
◆Label: Start Puzzle
◆Plugin Command: [JDK Jump System] Disable Jump
◆Control Switches: #0001 Puzzle Active = ON
◆Wait: 60 frames
◆... (puzzle logic here)
◆Control Switches: #0001 Puzzle Active = OFF
◆Plugin Command: [JDK Jump System] Enable Jump
◆Message: Jump enabled!
```

### Jump To Specific Tile

Force the player to jump to a specific location:

```
◆Plugin Command: [JDK Jump System] Jump To (X:5, Y:3, Height:180)
◆Wait: 30 frames
◆... (continue event)
```

### Lava Puzzle

Create a puzzle where player must avoid lava:

```
◆Plugin Command: [JDK Jump System] Set Region Damage
  Enabled: true
  Type: full
  IDs: 5

◆Plugin Command: [JDK Jump System] Set Jump Height
  Height: 150

◆Message: Jump over the lava!
```

### Fly Puzzle

Create a puzzle requiring flight:

```
◆Plugin Command: [JDK Jump System] Disable Jump
◆Plugin Command: [JDK Jump System] Enable Fly
◆Plugin Command: [JDK Jump System] Set Fly Sprite
  Sprite: Hero_Fly
◆Message: Use Shift to fly over obstacles!
```

---

## How It Works

### Jump Mechanics

- **Input**: Press the configured key (default: Enter/OK)
- **Direction**: Based on last movement direction (4 directions only)
- **Trajectory**: Parabolic arc using sine function
- **Height**: Configurable in pixels
- **Distance**: Configurable in tiles

### During Jump

- Player passes **OVER** all tiles and events
- **No collision** with walls, water, traps, NPCs
- **Only blocked regions** and map boundaries stop the jump
- Landing is calculated automatically

### Landing

- If landing spot is blocked, player finds nearest valid tile
- Landing animation plays (squish effect)
- Region/terrain damage is applied if configured
- Fall damage is calculated if enabled
- Cloud FX appears on landing

### Fly Mode

- Player floats at configured height
- Movement speed increased by multiplier
- Custom sprite replaces original during flight
- Particle FX shows below player
- Blocked by configured regions/terrain tags

---

## Compatibility

- **RPG Maker MZ**: Yes
- **RPG Maker MV**: No (MZ only)
- **QMovement**: Compatible
- **AltimitMovement**: Compatible

---

## Troubleshooting

### Jump doesn't work

- Check if a switch is disabling jump
- Check if the player is in a blocked region
- Make sure the plugin is enabled in Plugin Manager

### Player gets stuck after jump

- The landing calculation should prevent this
- If it happens, try increasing Jump Duration

### No cloud effects

- Check Enable Jump FX and Enable Land FX parameters
- Make sure Jump FX Color and Land FX Color are set

### Jump feels too fast/slow

- Adjust Jump Duration (higher = slower)
- Adjust Animation Speed (lower = faster animation)

### Region damage not working

- Check Region Damage Enabled is true
- Check Region Damage IDs matches painted regions
- Check Region Damage Type (full or custom)

### Fly mode not working

- Check Fly Enabled is true
- Check Fly Switch is set to 0 (use key toggle) or switch is ON
- Check fly key is configured correctly

### Fly sprite not changing

- Check Fly Sprite filename matches your image (without .png)
- Make sure image is in `img/characters/` folder

---

## Version History

### v5.0.0

- Added Region/Terrain damage system
- Added Fly mode with custom sprites
- Added 18 plugin commands
- Added particle FX for flying
- Improved parameter organization

### v4.0.0

- Complete rewrite
- Added 9 plugin commands for event control
- Organized parameters into categories
- Added cloud FX system
- Added fall damage system
- Added landing animation
- Fixed scale.y bug
- Removed 8-direction mode (4 only)

---

## License

MIT License - Free to use in commercial and non-commercial projects.

---

## Credits

- **Rpx** - Original concept and development
- **Just Dev** - Testing and feedback
