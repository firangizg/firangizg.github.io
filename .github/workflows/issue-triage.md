---
# GitHub Agentic Workflow: triages issues so planning time goes to the hard decisions.
# Source of truth is this file. After editing it, regenerate the lock file:
#   gh aw compile issue-triage
# Commit both this file and issue-triage.lock.yml.
#
# Secrets (Settings → Secrets and variables → Actions):
#   COPILOT_GITHUB_TOKEN  fine-grained PAT, Account permissions → Copilot Requests: Read
#   GH_AW_AGENT_TOKEN     fine-grained PAT for this repo with Read/Write on actions,
#                         contents, issues and pull requests (needed to assign Copilot)
timeout-minutes: 10
strict: true
on:
  issues:
    types: [opened, reopened]
  # Run manually from the Actions tab to triage every open issue that has no labels yet.
  workflow_dispatch:
permissions:
  contents: read
  issues: read
engine: copilot
tools:
  github:
    # Only read issue content written by people with write access to this repo,
    # so random visitors can't steer the agent with instructions in an issue.
    min-integrity: approved
    toolsets: [issues, labels, repos]
safe-outputs:
  add-labels:
    target: "*"
    max: 10
    pull-requests: false
    create-if-missing: true
    allowed:
      - bug
      - enhancement
      - content
      - design
      - infrastructure
      - complexity:low
      - complexity:medium
      - complexity:high
      - copilot
      - needs-decision
  add-comment:
    target: "*"
    max: 5
    pull-requests: false
  assign-to-agent:
    name: copilot
    allowed: [copilot]
    target: "*"
    max: 3
---

# Issue triage

You triage issues for ${{ github.repository }}, a personal portfolio website.
It is a Next.js 14 site in `portfolio/` (pages in `portfolio/pages/`, components in
`portfolio/components/`, CSS modules in `portfolio/styles/`), exported statically and
deployed to GitHub Pages by `.github/workflows/deploy.yml`. Hidden, unfinished pages live
in `portfolio/drafts/`.

## Which issues to triage

{{#if github.event.issue.number}}
Triage issue #${{ github.event.issue.number }} only.
{{else}}
List the open issues in ${{ github.repository }} that have **no labels**, and triage at most 5 of them.
{{/if}}

Skip an issue if it already has a `complexity:*` label, or if it is already assigned to anyone.
If an issue's title or body is unavailable or withheld by the integrity policy, leave it untouched.
Do not retry through other tools to get around that policy.

## For each issue

1. **Read it**, and look at the files it mentions in the repository so your estimate is grounded in the real code.

2. **Type label.** Add exactly one of these labels:
   - `bug`: something on the site is broken or looks wrong
   - `enhancement`: a new feature or a change in behaviour
   - `content`: text, photos or links need writing or updating
   - `design`: mainly layout or visual style
   - `infrastructure`: build, deploy, workflows, settings, domain

3. **Complexity label.** Add exactly one of these labels:
   - `complexity:low`: a small, well-defined code change in one or two files, where the issue
     already contains everything needed (exact text, links, which page). No judgment calls
     about taste or content are left open. Examples: fix a broken link, change a menu item,
     update a colour, add a link the issue spells out.
   - `complexity:medium`: several files or a new component, but the goal is clear.
   - `complexity:high`: a redesign, an open-ended feature, or anything with unclear requirements.

4. **Decision label.** Add `needs-decision` if the owner has to provide something before
   anyone can do the work (for example writing a bio, choosing photos, picking between
   designs, or changing a GitHub setting by hand). Work that needs the owner's personal
   content or account settings is never `complexity:low`.

5. **Hand easy work to Copilot.** Only when the issue is `complexity:low`, is **not**
   `needs-decision`, and can be completed purely by editing files in this repository:
   - add the `copilot` label
   - assign it to the Copilot coding agent with `assign_to_agent`

   Otherwise, do not assign it.

6. **Comment once** on the issue. Keep it short:
   - the labels you chose and a one-sentence reason for the complexity
   - if it needs a decision, a checklist of exactly what the owner needs to decide or provide
   - if you assigned Copilot, say so
   - if acceptance criteria are missing, propose 2–4 concrete, testable acceptance criteria

For `add_labels`, `add_comment` and `assign_to_agent`, always pass the issue's numeric
`item_number` / `issue_number` explicitly. Only act on issues in ${{ github.repository }}.
Adding a safe output only queues the action. It does not confirm that GitHub applied it.
