# SAM-CLI

### a modern command-line interface (CLI) for SoftVoice's Software Automatic Mouth (SAM) based off [modern-sam](https://github.com/HexCodeFFF/modern-sam)

## why?

[s-macke's port](https://github.com/s-macke/SAM) is a CLI program, but it retains the original limitations the software
had in the 80s (as its reverse engineered), so I packaged [modern-sam](https://github.com/HexCodeFFF/modern-sam) (a fork
of [discordier's JS rewrite](https://github.com/discordier/sam)) into a CLI
with [pkg](https://www.npmjs.com/package/pkg)

## usage

### example:

```shell
sam --wav sam.wav --throat 110 --pitch 160 --moderncmu hello world!
```

speaks `hello world!` with modern cmu pronunciation and voice values (these ones are nicknamed "Elf") to `sam.wav`

### there are 2 required arguments:

- `--wav`: the name of the wav file to output to.
- any text not part of an argument will be joined and interpreted and spoken.

### optional arguments:

- `--phonetic`: bypass SAM's english parser and specify sounds
  through [SAM's phonetic alphabet](http://www.retrobits.net/atari/sam.shtml#ch1.1)
- `--singmode`: SAM will speak at one pitch. good for singing.
- `--moderncmu`: uses CMUDict and to-words for better pronunciation and stress patterns.
- `--debug`: print info about what SAM is doing (warning: it's a lot)
- `--pitch`, `--speed`, `--mouth`, `--throat`: arguments that control SAM's voice.
    - can be from 0-255
    - [pitch and speed are documented here](http://www.retrobits.net/atari/sam.shtml#ch5.0)
    - [example values documented here](https://github.com/discordier/sam#typical-voice-values)
        - the values labeled "SAM" are the defaults.

## notes

- pkg, which is used to make the node program a cli program, is a little big and Perhaps bloated, also it comes with some
overhead. if you want to make heavy use of this program, consider
using [modern-sam](https://github.com/HexCodeFFF/modern-sam) in node directly

- [minimist](https://www.npmjs.com/package/minimist) is used to naively pass all arguments straight to modern-sam so
invalid arguments are ignored. the only validation done is ensuring required arguments are defined.
