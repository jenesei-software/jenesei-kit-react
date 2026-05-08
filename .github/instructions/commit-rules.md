# Git Commits

Generate exactly one commit message for the whole staged change.

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

Optional body:

* use bullet points
* add it only if the change is large or needs context

## Rules

* Generate exactly one commit message
* Do not generate multiple commit messages
* Do not create one commit per file, folder, component, or config
* Choose the main purpose of the change
* Use the most appropriate single type
* Use a scope only if it describes the main area of the change
* Write in imperative mood: `add`, not `added`
* Keep the first line lowercase
* Keep the first line short: max 72 chars
* The first line must stay on one visible line without wrapping
* Do not mention every changed file
* Do not list implementation details in the first line
* The body can use any casing

## Examples

`feat(auth): add login with Google`
`fix(api): handle timeout error`
`docs(readme): update installation instructions`
`style(button): fix padding and margin`

Longer example:

`feat(dev): improve local development routing`

* update local environment URLs
* configure Docker ports for local services
* adjust Caddy routing for local development