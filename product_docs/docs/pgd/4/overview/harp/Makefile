#-----------------------------------------------------------------------
# doc/Makefile
#
# Builds documentation PDF.
#
# See also harp-packaging:doc/Dockerfile.pandoc
#-----------------------------------------------------------------------

DIA = $(wildcard images/*.dia)
PNG = $(patsubst %.dia,%.png,$(DIA))

all: $(PNG)

images/%.png: images/%.dia
	dia -e $@ -t cairo-alpha-png $< #--size x400 $<

clean:
	rm -f cache/*
	rm -f images/*.png
