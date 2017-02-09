output_location=dist
source_file=IMECS2017-ICSE20

config:
	@if [ ! -d output ]; then mkdir $(output_location); fi

compile:
	@make config
	xelatex -output-directory=$(output_location) -halt-on-error $(source_file).tex
	open $(source_file).pdf
