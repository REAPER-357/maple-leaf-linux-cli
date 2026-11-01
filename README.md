# 🍁 MapleLeaf CLI

**MapleLeaf CLI** is an offline-first terminal command studio and generator designed for Linux power users, system administrators, and developers. Built as a high-performance Progressive Web App (PWA) with Capacitor, it gives you instant access to correct, distro-aware shell syntax without needing an active internet connection or relying on external CDNs.

---

## ✨ Key Features

* **Distro-Aware Syntax Translation:** Automatically adapts package managers (`apt`, `dnf`, `pacman`, `apk`, `xbps`, `emerge`, `nix`), service managers (`systemd`, `openrc`, `runit`), and firewall backends (`ufw`, `firewalld`, `nftables`, `iptables`) to match your active Linux distribution.
* **Interactive Command Generators:** Fine-tune complex commands for `rsync`, `rclone`, `tar`, `find`, `grep`, `ffmpeg`, `docker`, and `ssh` with live output previews.
* **Command Library & Starred Snippets:** Browse hundreds of categorized Linux administration and troubleshooting snippets, or save your own custom commands with support for fill-in variables (`{{name}}`).
* **Script Builder & Chaining:** Queue multiple commands, combine them into execution pipelines, and export them directly as executable `.sh` scripts with strict mode (`set -euo pipefail`) headers.
* **Total Privacy & Offline-First:** 100% local operation with zero telemetry, tracker-free icon rendering, and local backup/restore capabilities.

---

## 🚀 Getting Started (Web & PWA)

MapleLeaf CLI runs anywhere in a modern browser and can be installed as a standalone desktop or mobile application via PWA or Android APK.

1. Clone the repository:
   ```bash
   git clone [https://github.com/REAPER-357/maple-leaf-linux-cli.git](https://github.com/REAPER-357/maple-leaf-linux-cli.git)
   cd maple-leaf-linux-cli
