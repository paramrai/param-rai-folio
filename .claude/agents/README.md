# AI Team Instructions & Guidelines

This document outlines the architecture, sub-agents, and task workflow for AI-assisted development in this repository.

## Directory Structure
- `.claude/CLAUDE.md`: Core repository instructions for Claude.
- `.claude/task.md`: Master checklist of tasks and phases.
- `.claude/agents/`: Specialized agent definitions (QA, Frontend, Security).
- `.claude/subagents/`: Subagent logs and helper scripts.

## Core Rules
1. **Never commit secrets** or sensitive configuration.
2. **Always test builds** (`npm run build`) before declaring work complete.
3. **Keep tasks updated** in `.claude/task.md` (check off items as completed).
4. **Follow design conventions** specified in `.claude/CLAUDE.md`.
