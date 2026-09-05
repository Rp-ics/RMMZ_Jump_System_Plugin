# RMMZ Jump System Plugin

A complete jump system for RPG Maker MZ. Jump over obstacles with no collision during jump, cloud FX, fall damage, and full event control for puzzle building.

## Features

- **Jump over water, walls, traps** — no collision during jump
- **4-directional movement** — Up, Down, Left, Right
- **Double Jump** — configurable second jump in mid-air
- **Cloud FX** — visual effects on jump and landing
- **Fall Damage** — optional damage system with invincibility frames
- **Landing Animation** — squish effect on impact
- **Event Commands** — 9 plugin commands for puzzle building
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
| Jump Key | ok | Key to jump (ok, shift, control, alt) |

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

### Audio

| Parameter | Default | Description |
|-----------|---------|-------------|
| Jump Sound | Jump1 | Sound effect when jumping |
| Land Sound | (none) | Sound effect when landing |

### Visuals

| Parameter | Default | Description |
|-----------|---------|-------------|
| Land Animation Frames | 6 | Duration of squish animation (0 = none) |
| Enable Jump FX | true | Show cloud effect when jumping |
| Jump FX Color | 255,255,200 | Color of jump cloud (R,G,B) |
| Enable Land FX | true | Show cloud effect when landing |
| Land FX Color | 200,200,200 | Color of land cloud (R,G,B) |
| Land FX Duration | 15 | Duration of land effect in frames |

### Restrictions

| Parameter | Default | Description |
|-----------|---------|-------------|
| Disable Jump Switch | 0 | Switch to disable jumping globally (0 = none) |
| Blocked Regions | (none) | Region IDs where jumping is blocked (comma separated) |

---

## Plugin Commands (Event Editor)

These commands appear in the **Plugin Command** menu when creating events.

### Enable Jump

Enables jumping for the player.

- **No parameters**

### Disable Jump

Disables jumping for the player.

- **No parameters**

### Force Jump

Forces a jump with custom height.

| Parameter | Default | Description |
|-----------|---------|-------------|
| Jump Height | 120 | Height of the jump in pixels |

### Jump To Position

Jumps to a specific tile position.

| Parameter | Default | Description |
|-----------|---------|-------------|
| Target X | 0 | Tile X coordinate to jump to |
| Target Y | 0 | Tile Y coordinate to jump to |
| Jump Height | 120 | Height of the jump in pixels |

### Set Jump Height

Changes the jump height at runtime.

| Parameter | Default | Description |
|-----------|---------|-------------|
| Jump Height | 120 | New height in pixels |

### Set Jump Distance

Changes the jump distance at runtime.

| Parameter | Default | Description |
|-----------|---------|-------------|
| Jump Distance | 1.0 | New distance in tiles (1.0 = one tile) |

### Set Jump Duration

Changes the jump speed at runtime.

| Parameter | Default | Description |
|-----------|---------|-------------|
| Duration | 30 | New duration in frames (higher = slower) |

### Set Jump Cooldown

Changes the cooldown between jumps.

| Parameter | Default | Description |
|-----------|---------|-------------|
| Cooldown | 10 | New cooldown in frames |

### Set Fall Damage

Enables or disables fall damage at runtime.

| Parameter | Default | Description |
|-----------|---------|-------------|
| Enabled | false | Enable fall damage? |

---

## Script Calls (Advanced)

For advanced users, you can call these from **Script** commands in events.

### Basic Control

```javascript
JDKJump.enable()        // Enable jumping
JDKJump.disable()       // Disable jumping
JDKJump.isJumping()     // Returns true if currently jumping
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
```

### Read Parameters

```javascript
JDKJump.get('height')          // Get current jump height
JDKJump.get('distance')        // Get current jump distance
JDKJump.get('duration')        // Get current jump duration
JDKJump.get('cooldown')        // Get current cooldown
JDKJump.get('isJumping')       // true/false
JDKJump.get('isEnabled')       // true/false
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

### Blocked Regions

Use regions to prevent jumping in certain areas:

1. Open the **Region** tab in the map editor
2. Paint regions where jumping should be blocked
3. In Plugin Parameters, set **Blocked Regions** to the region IDs (e.g., `1,2,3`)

### Switch-Based Control

Use a switch to toggle jumping:

1. In Plugin Parameters, set **Disable Jump Switch** to a switch number (e.g., `5`)
2. When Switch 5 is ON, jumping is disabled
3. When Switch 5 is OFF, jumping is enabled

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
- Fall damage is calculated if enabled
- Cloud FX appears on landing

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

---

## Version History

### v4.0.0

- Complete rewrite
- Added 9 plugin commands for event control
- Organized parameters into categories
- Added cloud FX system
- Added fall damage system
- Added landing animation
- Fixed scale.y bug
- Removed 8-direction mode (4 only)
- Added QMovement compatibility

---

## License

MIT License - Free to use in commercial and non-commercial projects.

---

## Credits

- **Rpx** - Original concept and development
- **Just Dev** - Testing and bugfix
