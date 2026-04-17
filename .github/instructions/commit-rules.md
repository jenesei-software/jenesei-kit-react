# Git Commits

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

* Write in imperative mood: `add`, not `added`
* Keep the first line lowercase
* Keep the first line short: max 72 chars
* The first line must stay on one visible line without wrapping
* The body can use any casing

## Examples

`feat(auth): add login with Google`
`fix(api): handle timeout error`
`docs(readme): update installation instructions`
`style(button): fix padding and margin`

Longer example:

`feat: enhance Popover and Select components`

* integrate Floating UI for better positioning with arrow support
* add animation variants to Popover
* refactor Popover styles and props for better customization
