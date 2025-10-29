#!/usr/bin/env bash

set -e
INSTALL_DIR="/usr/local/bin"
TARGET="$INSTALL_DIR/justdo"

echo "Downloading JustDo.sh CLI..."
curl -s https://justdo.sh/bin/justdo -o justdo
chmod +x justdo

echo "Install path: $TARGET"
read -p "Move to $INSTALL_DIR? (requires sudo) (y/N): " ans
if [[ "$ans" =~ ^[Yy]$ ]]; then
  sudo mv justdo "$TARGET"
  echo "✅ Installed! Try: justdo ipconfig"
else
  echo "Saved locally as ./justdo"
fi
