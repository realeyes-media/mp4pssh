# MP4PSSH

A parser to convert a Base64-encoded string representing an MP4 PSSH box into a POJO.

## Instantiation

This repository is hosted on NPM. Install this package using:

`npm i @re/mp4pssh`

## Usage

Begin by getting a Base64-encoded string representing an MP4 PSSH box.

### Instantiation

Create a new instance of the `PSSHParser` class:

`const psshParser = new PSSHParser();`

### Parsing the PSSH

Use the `parsePSSH()` method to parse the Base64-encoded PSSH box into a POJO:

`const pssh = psshParser.parsePSSH(<BASE64_PSSH>);`

Users can then access the information encoded in the PSSH:

  * `version <number>`: The version of the parsed PSSH

  * `systemId <string>`: The ID of the system that will consume the PSSH data

  * `kidCount <number>`: The number of KIDs included in the PSSH

  * `kids <string[]>`: The KIDs included in the PSSH

  * `dataSize <number>`: The length of ths PSSH data (in bytes)

  * `data <Uint8Array>`: The PSSH data

## Contributing

This repo is maintained by [RealEyes Media](http://realeyes.com), a Video Streaming consultancy based in Denver, CO, USA. Contributions are welcome via PRs.

## License

MIT

