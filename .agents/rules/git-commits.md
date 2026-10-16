# Git commit rules

commit rules for this repository.

## Types

* `feat` - new feature
* `fix` - bug fix
* `docs` - documentation
* `style` - formatting only
* `refactor` - code change without new behavior
* `test` - tests
* `chore` - maintenance

## Format

`<type>(scope): <short description>`

When the current branch carries a project issue ID (for example
`feature/FW-1568-cookie-consent` or `feature/SE-42-tense-scoring`), use the issue ID as
the scope:

`<type>(<ISSUE-ID>): <short description>`

Take the ID from the branch name, keep the type, and never invent an issue ID. When the
branch has none, use the plain scope.

optional body:

* write it as a list, one item per line
* start each item lowercase
* end each item with `;`, end the last one with `.`
* add it only if the change is large or needs context

## Rules

* generate exactly one commit message
* do not generate multiple commit messages
* do not create one commit per file, folder, component, or config
* choose the main purpose of the change
* use the most appropriate single type
* use a scope only if it describes the main area of the change
* write in imperative mood: `add`, not `added`
* keep the first line lowercase
* keep the first line short: max 72 chars
* keep the first line on one visible line without wrapping
* do not mention every changed file
* do not list implementation details in the first line

## Examples

`feat(auth): add login with Google`
`feat(FW-1568): implement cookie consent`
`fix(api): handle timeout error`
`docs(readme): update installation instructions`
`style(button): fix padding and margin`

```
feat(dev): improve local development routing

* update local environment URLs;
* configure Docker ports for local services;
* adjust Caddy routing for local development.
```
