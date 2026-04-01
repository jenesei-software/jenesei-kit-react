# Git commits

## Types:

* feat: new feature
* fix: bug fix
* docs: documentation
* style: formatting
* refactor: code change without feature
* test: adding tests
* chore: maintenance

## Rules:

* Use imperative mood (e.g., "add", not "added")
* Keep the first line short (max 72 chars)
* The first line MUST fit in one visible line (no wrapping)
* Add a body if the change is complex or long
* Use bullet points for detailed descriptions

## Format:

<type>(scope): <short description>

(optional body as bullet list)

* <change description>
* <change description>
* <change description>

## Long commit example:

feat: enhance Popover and Select components

* integrate Floating UI for better positioning with arrow support
* add animation variants to Popover
* refactor Popover styles and props for better customization
* update Select to use new Popover styles and control box shadow
* improve Select dropdown structure and usability

## Examples:

feat(auth): add login with Google
fix(api): handle timeout error
docs(readme): update installation instructions
style(button): fix padding and margin