.PHONY: add engine deploy revert status verify psql

engine:
	cd database && sqitch engine add pg evently

deploy:
	cd database && sqitch deploy --verify db:pg:evently

revert:
	cd database && sqitch revert db:pg:evently

status:
	cd database && sqitch status db:pg:evently

verify:
	cd database && sqitch verify db:pg:evently

psql:
	cd database && psql -d evently -c '\dn evently'

note ?= 'Added on $(shell date +%Y_%m_%d_%H_%M_%S)'

add:
	@if [ -z "$(name)" ]; then \
		echo 'Please provide a name for the new change. Usage: make add name=<change_name> requires="<requirement1> <requirement2>" note="<note>"'; \
	else \
		if [ -z "$(requires)" ]; then \
			cd database && sqitch add $(name)_$(shell date +%Y_%m_%d_%H_%M_%S) -n "$(note)"; \
		else \
			cd database && sqitch add $(name)_$(shell date +%Y_%m_%d_%H_%M_%S) $(foreach req, $(requires), --requires $(req)) -n "$(note)"; \
		fi; \
	fi