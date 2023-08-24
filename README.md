# Visma Tech Technology Radar

The [Tech Radar](https://ideal-waffle-vrvjrgn.pages.github.io/) is a tool to inspire and support development teams in Visma Tech Company to pick the best technologies for new projects; it provides a platform to share knowledge and experience in technologies, to reflect on technology decisions and continuously evolve our technology landscape. Based on the [pioneering work of ThoughtWorks](https://www.thoughtworks.com/radar) and [Zalando Tech Radar](https://github.com/zalando/tech-radar), our Tech Radar sets out the changes in technologies that are interesting in software development — changes that we think our engineering teams should pay attention to and use in their projects.

## Updating

This repository contains the web site for the tech radar which is deployed automatically using the GitHub Pages feature.

Updates to the tech radar must be registered in the [data file](docs/_data/tech-radar-entries.csv) which is referenced when the site is generated. It is recommended to copy **all** entries that have been assessed and then update those that have changed. This will ensure that the move up/down indicators will work correctly.

## Installation

Install Jekyll locally following the [GitHub Pages](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll) guide.

Run `bundle exec jekyll serve` to start the watching and serving the radar locally
