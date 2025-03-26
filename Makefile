.PHONY: all clean

all:
	@npm run compile

dist:
	@vsce package

clean:
	@rm -rf build
