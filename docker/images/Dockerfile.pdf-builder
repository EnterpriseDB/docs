FROM ubuntu:focal

ARG PANDOC_VERSION=2.14.1
ARG PANDOC_DEB=pandoc-${PANDOC_VERSION}-1-amd64.deb
ARG WKHTML_TO_PDF_VERSION=0.12.6
ARG WKHTML_TO_PDF_DEB=wkhtmltox_${WKHTML_TO_PDF_VERSION}-1.focal_amd64.deb

RUN apt-get update && apt-get install --no-install-recommends -y \
  python3 \
  python3-pip \
  wget \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# Install Pandoc
RUN wget --quiet --no-check-certificate -P /tmp https://github.com/jgm/pandoc/releases/download/${PANDOC_VERSION}/${PANDOC_DEB} \
  && apt-get install --no-install-recommends -y /tmp/${PANDOC_DEB} \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* \
  && rm -rf /tmp/*

# Install wkhtmltopdf
RUN wget --quiet --no-check-certificate -P /tmp https://github.com/wkhtmltopdf/packaging/releases/download/${WKHTML_TO_PDF_VERSION}-1/${WKHTML_TO_PDF_DEB} \
  && apt-get update \
  && apt-get install --no-install-recommends -y /tmp/${WKHTML_TO_PDF_DEB} \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* \
  && rm -rf /tmp/*

# Install python dependencies
COPY requirements-ci.txt .
RUN pip install --no-cache-dir -r requirements-ci.txt
