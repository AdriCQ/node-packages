
DEFAULT_GOAL := help
help:
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z0-9_-]+:.*?##/ { printf "  \033[36m%-27s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

##@ [Macros] Make macros and aliases


.PHONY: build
build: format
	@pnpm run -r build

.PHONY: format
format:
	@pnpm run -r lint:fix && pnpm run -r format

.PHONY: unpublish
unpublish:
	@pnpm unpublish @adricq/payment --force
	# @pnpm unpublish @adricq/booking --force
	@pnpm unpublish @adricq/common --force
	@pnpm unpublish @adricq/market --force

.PHONY: publish
publish: build
	@pnpm publish ./packages/payment --no-git-checks
	# @pnpm publish ./packages/booking --no-git-checks
	@pnpm publish ./packages/common --no-git-checks
	@pnpm publish ./packages/market --no-git-checks

.PHONY: fresh-publish
fresh-publish: unpublish publish
