#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"
PYTHON_BIN="${PYTHON_BIN:-python3}"

if ! command -v "$PYTHON_BIN" >/dev/null 2>&1; then
  echo "Python 3 was not found. Install Python 3.10 or newer, then try again."
  read -r -p "Press Enter to close..."
  exit 1
fi

if [ ! -x ".venv/bin/python" ]; then
  echo "Creating local Python environment..."
  "$PYTHON_BIN" -m venv .venv
fi

echo "Installing or checking dependencies..."
".venv/bin/python" -m pip install --upgrade pip
".venv/bin/python" -m pip install -r requirements.txt

echo "Starting Ising Monte Carlo Lab at http://localhost:8501"
exec ".venv/bin/python" -m streamlit run app.py --server.address localhost --server.port 8501
