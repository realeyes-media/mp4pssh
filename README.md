# MP4PSSH

A parser to convert a Base64-encoded Widevine Key represnting an MP4 PSSH box into a Javascript object.

## Usage

Begin by parsing a manifest to extract the Widevine Key. Given a manifest like:

<pre>
#EXTM3U
#EXT-X-VERSION:6
#EXT-X-TARGETDURATION:4
#EXT-X-KEY:METHOD=SAMPLE-AES,
    KEYFORMAT="<KEY_FORMAT>",
    KEYFORMATVERSIONS="1",
    URI="data:text/plain;base64,<b>BASE64_KEY</b>"
</pre>

parse out the **BASE64_KEY**.

### Instantiation

Create a new instance of the `PSSHParser` class:

`const psshParser = new PSSHParser();`

### Parsing the PSSH

Use the `parsePSSH()` method to parse the `BASE64_KEY` into a POJO:

`const pssh = psshParser.parsePSSH(BASE64_KEY);`

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

