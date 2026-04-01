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
* `<type>(scope): <short description>` must be lowercase
* Body can use any casing (lowercase, uppercase, sentence case)
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

* Integrate Floating UI for better positioning with arrow support
* Add animation variants to Popover
* Refactor Popover styles and props for better customization
* Update Select to use new Popover styles and control box shadow
* Improve Select dropdown structure and usability

## Examples:

feat(auth): add login with Google
fix(api): handle timeout error
docs(readme): update installation instructions
style(button): fix padding and margin