# MP4PSSH

[![Build Status](https://travis-ci.org/realeyes-media/mp4pssh.svg?branch=master)](https://travis-ci.org/realeyes-media/mp4pssh)

A TypeScript parser to convert a Base64-encoded string representing an MP4 PSSH box into a POJO. More information about MP4 PSSH boxes can be found [here](https://w3c.github.io/encrypted-media/format-registry/initdata/cenc.html#common-system).

## Installation

This repository is hosted on NPM. Install this package using:

`npm i @re/mp4pssh`

The parser can then be imported using:

`import { PSSHParser } from '@re/mp4pssh'`

## Usage

Begin by getting a Base64-encoded string representing an MP4 PSSH box.

### Instantiation

Create a new instance of the `PSSHParser` class:

`const psshParser = new PSSHParser();`

### Parsing the PSSH

Use the `parsePSSH()` method to parse the Base64-encoded PSSH box into a POJO:

`const pssh = psshParser.parsePSSH(<BASE64_PSSH>);`

Users can then access the information encoded in the PSSH:

-   `version <number>`: The version of the parsed PSSH

-   `systemId <string>`: The ID of the system that will consume the PSSH data

-   `kidCount <number>`: The number of KIDs included in the PSSH

-   `kids <string[]>`: The KIDs included in the PSSH

-   `dataSize <number>`: The length of ths PSSH data (in bytes)

-   `data <Uint8Array>`: The PSSH data

## Contributing

This repo was written and maintained by [RealEyes Media](http://realeyes.com), a Video Streaming consultancy based in Denver, CO, USA. Contributions are welcome via PRs.

### Testing

This repo uses [Jest](https://github.com/facebook/jest) as its testing framework. To test, use:

`npm test`

### Building

This repo uses [Webpack](https://github.com/webpack/webpack) and [Babel](https://github.com/babel/babel) as its build frameworks. To build, use:

`npm run build`

## License

MIT
