function fail(str) {
    console.log(str)
    process.exit(1)
}

// require("@stdlib/datasets-cmudict/")
const minimist = require('minimist')
const SamJs = require("sam-js").default
const fs = require("fs")
const path = require("path");
// parse args
let argv = minimist(process.argv.slice(2), {boolean: ["moderncmu", "debug", "singmode", "phonetic"]})
if (!("wav" in argv)) {
    fail("wav output unspecified!")
}
if (!argv._.length) {
    fail("speak string unspecified!")
}
// suppress output if not in debug mode
if (!argv.debug) {
    console["log"] = () => {
    }
    console["debug"] = () => {
    }
    console["info"] = () => {
    }
}
const tospeak = argv._.join(" ")
console.log(tospeak);
// run sammy wammy
let sam = new SamJs(argv);
let buf = sam.renderwav(tospeak);
// write to file
fs.writeFileSync(argv["wav"], Buffer.from(buf))
