# Zenith

**A minimalist radial dock for macOS**

Zenith is a lightweight, elegant radial dock that hovers at the top of your screen. Unlike traditional docks, Zenith stays hidden until you need it—appearing as a subtle bar that triggers a beautiful smile-shaped arc of icons when hovered.

![Zenith Preview](https://via.placeholder.com/800x400?text=Zenith+Preview)

## Features

### 🎯 Radial Arc Design
Icons appear in a smooth U-shaped arc directly below the trigger bar, creating an intuitive and visually striking interaction pattern.

### 👻 Stencil Mode
Zenith is designed to stay out of your way. The window is mostly transparent and click-through, allowing you to interact with windows behind it while keeping the bar and icons accessible.

### 🖱️ Smart Hover Detection
- **Bar Trigger**: Hover over the bar at the top of your screen
- **Notch/Camera Zone**: Hover near your Mac's camera area to trigger the dock
- **Window Hover**: Hover anywhere in the Zenith window area

### ⚙️ Fully Customizable
- **Bar Appearance**: Adjust height, opacity, and color
- **Icon Styling**: Choose from Normal, Minimal, Bold, or Glow styles
- **Arc Spread**: Control how wide the icon arc spreads
- **Icon Size**: Customize the size of dock icons
- **Notch Width**: Adjust the width of the trigger bar

### 📐 T-Shape Window
The unique T-shaped window extends slightly above the visible screen area, maximizing screen real estate while providing intuitive hover zones.

### ⌨️ Keyboard Shortcuts
Quick access to Zenith features via customizable keyboard shortcuts.

## Installation

### Requirements
- macOS 12.0 (Monterey) or later

### Download
1. Visit the releases page to download the latest version
2. Extract the `.zip` file
3. Drag **Zenith.app** to your Applications folder
4. Launch Zenith from Applications

### First Launch
1. Open Zenith from your Applications folder
2. Grant any necessary permissions when prompted
3. The Zenith bar will appear at the top-center of your screen
4. Right-click the menu bar icon to access Settings

## Usage

### Triggering the Dock
- **Hover over the bar** at the top of your screen
- **Hover near the camera/notch area** on MacBooks with notches
- **Hover anywhere in the Zenith window** area

### Customizing Icons
1. Open Settings from the menu bar icon or click the Settings icon in the dock
2. Navigate to the **Dock Buttons** section
3. Add, remove, or rearrange icons as needed
4. Choose icon actions: Open App, Open Folder, Open URL, Run Script, Music Control, and more

### Settings Panel
Access Settings from:
- The **menu bar icon** → "Settings..."
- Clicking the **⚙️ icon** in the dock

#### Appearance Tab
- **Accent Color**: Choose your preferred color theme
- **Contrast**: Adjust contrast level
- **Dock Opacity**: Set transparency

#### Bar Tab
- **Height**: 4-30px adjustable
- **Opacity**: 10-100% customizable

#### Size & Spacing Tab
- **Arc Spread**: Control icon arc width
- **Icon Size**: 10-30px
- **Notch Width**: Adjust bar width
- **Border Width**: Customize icon borders

#### Dock Buttons Tab
- **Style**: Normal, Minimal, Bold, or Glow
- **Reset**: Restore default button configuration

## Keyboard Shortcuts

| Shortcut | Action |
|---------|--------|
| `⌘ + ,` | Open Settings |
| `⌘ + Q` | Quit Zenith |

## Architecture

Zenith is built with:
- **Swift** and **AppKit** for native macOS performance
- **SwiftUI** for the Settings interface
- **Native views** for optimal click-through/stencil behavior

### Window Levels
- **Main Window**: `.floating` level for always-on-top behavior
- **Settings Panel**: Slides in from the left with smooth animations
- **Click-Through**: Stencil design allows interaction with windows behind

## Troubleshooting

### Zenith doesn't appear
- Check that Zenith is running (look for the Z icon in the menu bar)
- Try restarting Zenith from Applications

### Clicks aren't passing through
- Ensure you're running the latest version
- Check that no overlay apps are interfering

### Hover detection isn't working
- Make sure the Zenith window is properly positioned
- Try moving your mouse closer to the bar or camera area

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## License

Zenith is available under the MIT License. See LICENSE for details.

## Contact

- **Website**: zenith.app
- **GitHub**: github.com/zenith/zenith
- **Support**: support@zenith.app

---

*Zenith — A smarter way to dock.*
